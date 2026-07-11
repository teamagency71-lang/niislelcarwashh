const path = require("path");
const fs = require("fs");
const crypto = require("crypto");
const express = require("express");
const bcrypt = require("bcryptjs");
const { Pool } = require("pg");

const app = express();
const port = process.env.PORT || 3000;
const host = process.env.HOST || "0.0.0.0";
const approverUsername = "95723051";
const isProduction = process.env.NODE_ENV === "production";
const sessionTtlMs = 24 * 60 * 60 * 1000;
const sessions = new Map();
const authRateLimits = new Map();

app.disable("x-powered-by");
if (isProduction) app.set("trust proxy", 1);

app.use((request, response, next) => {
  response.setHeader("X-Content-Type-Options", "nosniff");
  response.setHeader("X-Frame-Options", "DENY");
  response.setHeader("Referrer-Policy", "same-origin");
  response.setHeader("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  response.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self'; connect-src 'self'; base-uri 'self'; frame-ancestors 'none'; form-action 'self'",
  );
  if (isProduction) {
    response.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
  }
  next();
});

app.use(express.json({ limit: "1mb" }));

function limitAuthRequests(request, response, next) {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000;
  const key = String(request.ip || request.socket.remoteAddress || "unknown");
  const current = authRateLimits.get(key);
  const bucket = !current || current.resetAt <= now
    ? { count: 0, resetAt: now + windowMs }
    : current;

  bucket.count += 1;
  authRateLimits.set(key, bucket);
  if (bucket.count > 60) {
    response.setHeader("Retry-After", String(Math.ceil((bucket.resetAt - now) / 1000)));
    response.status(429).json({ error: "Хэт олон оролдлого хийлээ. Түр хүлээгээд дахин оролдоно уу." });
    return;
  }
  next();
}

const pool = process.env.DATABASE_URL
  ? new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
    })
  : null;

const memoryStoreFile = process.env.ACCOUNT_STORE_FILE
  ? path.resolve(process.env.ACCOUNT_STORE_FILE)
  : path.join(__dirname, "data", "account-store.json");

function createEmptyMemoryStore() {
  return { accounts: [], accountRequests: [], nextAccountId: 1, nextRequestId: 1 };
}

function reviveMemoryDates(item = {}) {
  const revived = { ...item };
  ["created_at", "approved_at", "expires_at", "rejected_at"].forEach((key) => {
    if (revived[key]) revived[key] = new Date(revived[key]);
  });
  return revived;
}

function loadMemoryStore() {
  try {
    if (!fs.existsSync(memoryStoreFile)) return createEmptyMemoryStore();
    const saved = JSON.parse(fs.readFileSync(memoryStoreFile, "utf8"));
    const accounts = Array.isArray(saved.accounts) ? saved.accounts.map(reviveMemoryDates) : [];
    const accountRequests = Array.isArray(saved.accountRequests) ? saved.accountRequests.map(reviveMemoryDates) : [];
    const highestAccountId = accounts.reduce((max, item) => Math.max(max, Number(item.id) || 0), 0);
    const highestRequestId = accountRequests.reduce((max, item) => Math.max(max, Number(item.id) || 0), 0);
    return {
      accounts,
      accountRequests,
      nextAccountId: Math.max(highestAccountId + 1, Number(saved.nextAccountId) || 1),
      nextRequestId: Math.max(highestRequestId + 1, Number(saved.nextRequestId) || 1),
    };
  } catch (error) {
    console.error("Temporary account store could not be read", error);
    return createEmptyMemoryStore();
  }
}

const memoryStore = loadMemoryStore();

function saveMemoryStore() {
  if (pool) return;
  try {
    fs.mkdirSync(path.dirname(memoryStoreFile), { recursive: true });
    fs.writeFileSync(memoryStoreFile, JSON.stringify(memoryStore, null, 2), "utf8");
  } catch (error) {
    console.error("Temporary account store could not be saved", error);
  }
}

function normalizeUsername(value) {
  return String(value || "").trim().toLowerCase();
}

function issueSession(account) {
  const token = crypto.randomBytes(32).toString("base64url");
  const accountExpiry = account.expires_at ? new Date(account.expires_at).getTime() : 0;
  const expiresAt = accountExpiry
    ? Math.min(Date.now() + sessionTtlMs, accountExpiry)
    : Date.now() + sessionTtlMs;
  sessions.set(token, {
    accountId: String(account.id),
    username: account.username,
    expiresAt,
  });
  return { token, expiresAt };
}

function getBearerToken(request) {
  const authorization = String(request.headers.authorization || "");
  return authorization.startsWith("Bearer ") ? authorization.slice(7).trim() : "";
}

async function requireAuthenticatedSession(request, response, next) {
  try {
    const token = getBearerToken(request);
    const session = token ? sessions.get(token) : null;
    if (!session || session.expiresAt <= Date.now()) {
      if (token) sessions.delete(token);
      response.status(401).json({ error: "Нэвтрэх хугацаа дууссан байна. Дахин нэвтэрнэ үү." });
      return;
    }

    const account = await findAccountById(session.accountId);
    if (!account || isExpired(account)) {
      sessions.delete(token);
      response.status(401).json({ error: "Account идэвхгүй байна. Дахин нэвтэрнэ үү." });
      return;
    }

    request.authToken = token;
    request.authAccount = account;
    next();
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Нэвтрэлтийг баталгаажуулахад алдаа гарлаа." });
  }
}

function requireApproverSession(request, response, next) {
  requireAuthenticatedSession(request, response, () => {
    if (request.authAccount?.username !== approverUsername) {
      response.status(403).json({ error: "Зөвхөн 95723051 админ account энэ үйлдлийг хийнэ." });
      return;
    }
    next();
  });
}

function publicAccount(account) {
  if (!account) return null;

  return {
    id: String(account.id),
    name: account.name,
    username: account.username,
    createdAt: new Date(account.created_at).getTime(),
    approvedAt: account.approved_at ? new Date(account.approved_at).getTime() : 0,
    approvedBy: account.approved_by || "",
    expiresAt: account.expires_at ? new Date(account.expires_at).getTime() : 0,
  };
}

function publicRequest(request) {
  if (!request) return null;

  return {
    id: String(request.id),
    name: request.name,
    username: request.username,
    createdAt: new Date(request.created_at).getTime(),
    status: request.status,
    kind: request.kind || "new",
    accountId: request.account_id ? String(request.account_id) : "",
    durationDays: Number(request.duration_days) || 0,
    durationMinutes: Number(request.duration_minutes) || 0,
    durationSeconds: Number(request.duration_seconds) || 0,
    durationMs: Number(request.duration_ms) || 0,
    expiresAt: request.expires_at ? new Date(request.expires_at).getTime() : 0,
    approvedAt: request.approved_at ? new Date(request.approved_at).getTime() : 0,
    approvedBy: request.approved_by ? String(request.approved_by) : "",
    rejectedAt: request.rejected_at ? new Date(request.rejected_at).getTime() : 0,
    rejectedBy: request.rejected_by ? String(request.rejected_by) : "",
  };
}

function createMemoryAccount({ name, username, passwordHash, approvedAt = null, approvedBy = null, expiresAt = null }) {
  const account = {
    id: String(memoryStore.nextAccountId++),
    name,
    username,
    password_hash: passwordHash,
    created_at: new Date(),
    approved_at: approvedAt,
    approved_by: approvedBy,
    expires_at: expiresAt,
  };
  memoryStore.accounts.push(account);
  saveMemoryStore();
  return account;
}

function createMemoryAccountRequest({ name, username, passwordHash, kind = "new", accountId = null }) {
  const accountRequest = {
    id: String(memoryStore.nextRequestId++),
    name,
    username,
    password_hash: passwordHash,
    status: "pending",
    kind,
    account_id: accountId ? String(accountId) : null,
    duration_days: 0,
    duration_minutes: 0,
    duration_seconds: 0,
    duration_ms: 0,
    expires_at: null,
    created_at: new Date(),
    approved_at: null,
    approved_by: null,
    rejected_at: null,
    rejected_by: null,
  };
  memoryStore.accountRequests.push(accountRequest);
  saveMemoryStore();
  return accountRequest;
}

function isExpired(account) {
  if (!account || account.username === approverUsername || !account.expires_at) return false;
  return new Date(account.expires_at).getTime() <= Date.now();
}

function normalizeDurationParts(body = {}) {
  const days = Math.min(3650, Math.max(0, Math.floor(Number(body.days) || 0)));
  const minutes = Math.min(5256000, Math.max(0, Math.floor(Number(body.minutes) || 0)));
  const seconds = Math.min(315360000, Math.max(0, Math.floor(Number(body.seconds) || 0)));
  let durationMs = ((days * 24 * 60 * 60) + (minutes * 60) + seconds) * 1000;

  if (!durationMs) durationMs = 1000;

  return {
    days,
    minutes,
    seconds: durationMs === 1000 && !days && !minutes && !seconds ? 1 : seconds,
    durationMs,
    expiresAt: new Date(Date.now() + durationMs),
  };
}

async function initDatabase() {
  if (!pool) {
    if (isProduction) {
      throw new Error("DATABASE_URL is required in production.");
    }
    console.warn("DATABASE_URL is not set. The temporary memory account store will be used.");
    return;
  }

  await pool.query(`
    CREATE TABLE IF NOT EXISTS accounts (
      id BIGSERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      username TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      approved_at TIMESTAMPTZ,
      approved_by BIGINT REFERENCES accounts(id) ON DELETE SET NULL,
      expires_at TIMESTAMPTZ
    );
  `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS account_requests (
      id BIGSERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      username TEXT NOT NULL,
      password_hash TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'pending',
      kind TEXT NOT NULL DEFAULT 'new',
      account_id BIGINT REFERENCES accounts(id) ON DELETE SET NULL,
      duration_days INTEGER NOT NULL DEFAULT 0,
      duration_minutes INTEGER NOT NULL DEFAULT 0,
      duration_seconds INTEGER NOT NULL DEFAULT 0,
      duration_ms BIGINT NOT NULL DEFAULT 0,
      expires_at TIMESTAMPTZ,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      approved_at TIMESTAMPTZ,
      approved_by BIGINT REFERENCES accounts(id) ON DELETE SET NULL,
      rejected_at TIMESTAMPTZ,
      rejected_by BIGINT REFERENCES accounts(id) ON DELETE SET NULL
    );
  `);

  await pool.query(`
    CREATE INDEX IF NOT EXISTS account_requests_pending_username_idx
      ON account_requests(username)
      WHERE status = 'pending';
  `);

  const initialAdminPassword = String(process.env.ADMIN_INITIAL_PASSWORD || "");
  if (isProduction && initialAdminPassword.length < 8) {
    throw new Error("ADMIN_INITIAL_PASSWORD must contain at least 8 characters in production.");
  }
  const existingAdmin = await findAccountByUsername(approverUsername);
  if (!existingAdmin && initialAdminPassword.length >= 8) {
    const passwordHash = await bcrypt.hash(initialAdminPassword, 12);
    await pool.query(
      `INSERT INTO accounts (name, username, password_hash, approved_at, expires_at)
       VALUES ($1, $2, $3, NOW(), NULL)`,
      ["Удирдлага", approverUsername, passwordHash],
    );
    console.log("Initial 95723051 admin account created.");
  }
}

async function findAccountByUsername(username) {
  if (!pool) {
    return memoryStore.accounts.find((account) => account.username === username) || null;
  }

  const { rows } = await pool.query("SELECT * FROM accounts WHERE username = $1 LIMIT 1", [username]);
  return rows[0] || null;
}

async function findAccountById(accountId) {
  if (!pool) {
    return memoryStore.accounts.find((account) => String(account.id) === String(accountId)) || null;
  }

  const { rows } = await pool.query("SELECT * FROM accounts WHERE id = $1 LIMIT 1", [accountId]);
  return rows[0] || null;
}

async function findPendingRequest(username) {
  if (!pool) {
    return memoryStore.accountRequests
      .filter((request) => request.username === username && request.status === "pending")
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0] || null;
  }

  const { rows } = await pool.query(
    "SELECT * FROM account_requests WHERE username = $1 AND status = 'pending' ORDER BY created_at DESC LIMIT 1",
    [username],
  );
  return rows[0] || null;
}

async function createAccountRequest({ name, username, passwordHash, kind = "new", accountId = null }) {
  if (!pool) {
    return createMemoryAccountRequest({ name, username, passwordHash, kind, accountId });
  }

  const { rows } = await pool.query(
    `INSERT INTO account_requests (name, username, password_hash, kind, account_id)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING *`,
    [name, username, passwordHash, kind, accountId],
  );
  return rows[0];
}

async function createRenewalRequestIfNeeded(account) {
  const existing = await findPendingRequest(account.username);
  if (existing) return existing;

  return createAccountRequest({
    name: account.name,
    username: account.username,
    passwordHash: account.password_hash,
    kind: "renew",
    accountId: account.id,
  });
}

app.get("/api/health", async (_request, response) => {
  try {
    if (pool) await pool.query("SELECT 1");
    response.json({ ok: true, database: true, storage: pool ? "postgres" : "local-file" });
  } catch (error) {
    console.error("Health check failed", error);
    response.status(503).json({ ok: false, database: false, storage: "unavailable" });
  }
});

app.post("/api/accounts/signup", limitAuthRequests, async (request, response) => {
  try {
    const name = String(request.body.name || "").trim();
    const username = normalizeUsername(request.body.username);
    const password = String(request.body.password || "");

    if (name.length < 2) {
      response.status(400).json({ error: "Нэрээ 2-оос дээш тэмдэгтээр оруулна уу." });
      return;
    }

    if (username.length < 3) {
      response.status(400).json({ error: "Нэвтрэх нэр 3-аас дээш тэмдэгттэй байна." });
      return;
    }

    if (password.length < 4) {
      response.status(400).json({ error: "Нууц үг хамгийн багадаа 4 тэмдэгт байна." });
      return;
    }

    const existingAccount = await findAccountByUsername(username);
    const passwordHash = await bcrypt.hash(password, 10);

    if (username === approverUsername) {
      if (existingAccount) {
        response.status(409).json({ error: "95723051 account аль хэдийн байна. Нэвтрэх хэсгээр орно уу." });
        return;
      }
      if (isProduction) {
        response.status(403).json({ error: "Үндсэн админ account серверийн нууц тохиргоогоор үүснэ." });
        return;
      }

      const account = pool
        ? (await pool.query(
          `INSERT INTO accounts (name, username, password_hash, approved_at, expires_at)
           VALUES ($1, $2, $3, NOW(), NULL)
           RETURNING *`,
          [name, username, passwordHash],
        )).rows[0]
        : createMemoryAccount({ name, username, passwordHash, approvedAt: new Date() });
      response.json({ status: "approved", account: publicAccount(account), session: issueSession(account) });
      return;
    }

    if (existingAccount && !isExpired(existingAccount)) {
      response.status(409).json({ error: "Энэ нэвтрэх нэрээр account аль хэдийн байна." });
      return;
    }

    const pending = await findPendingRequest(username);
    if (pending) {
      response.json({ status: "pending", request: publicRequest(pending) });
      return;
    }

    const accountRequest = await createAccountRequest({
      name: existingAccount?.name || name,
      username,
      passwordHash,
      kind: existingAccount ? "renew" : "new",
      accountId: existingAccount?.id || null,
    });

    response.json({ status: "pending", request: publicRequest(accountRequest) });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Account хүсэлт үүсгэхэд алдаа гарлаа." });
  }
});

app.post("/api/accounts/login", limitAuthRequests, async (request, response) => {
  try {
    const username = normalizeUsername(request.body.username);
    const password = String(request.body.password || "");
    const adminName = String(request.body.name || "Удирдлага").trim().slice(0, 120) || "Удирдлага";
    let account = await findAccountByUsername(username);

    if (!account) {
      if (username === approverUsername) {
        if (isProduction) {
          response.status(401).json({ error: "95723051 админ account бэлтгэгдээгүй байна. Render тохиргоог шалгана уу." });
          return;
        }
        if (password.length < 4) {
          response.status(400).json({ error: "Нууц үг хамгийн багадаа 4 тэмдэгт байна." });
          return;
        }

        const passwordHash = await bcrypt.hash(password, 10);
        account = pool
          ? (await pool.query(
            `INSERT INTO accounts (name, username, password_hash, approved_at, expires_at)
             VALUES ($1, $2, $3, NOW(), NULL)
             RETURNING *`,
            [adminName, username, passwordHash],
          )).rows[0]
          : createMemoryAccount({ name: adminName, username, passwordHash, approvedAt: new Date() });
        response.status(201).json({ account: publicAccount(account), session: issueSession(account), bootstrap: true });
        return;
      }

      const pending = await findPendingRequest(username);
      if (pending) {
        response.status(423).json({ error: "Таны account хүсэлт хүлээгдэж байна.", status: "pending" });
        return;
      }

      response.status(401).json({ error: "Нэвтрэх нэр эсвэл нууц үг буруу байна." });
      return;
    }

    const passwordOk = await bcrypt.compare(password, account.password_hash);
    if (!passwordOk) {
      response.status(401).json({ error: "Нэвтрэх нэр эсвэл нууц үг буруу байна." });
      return;
    }

    if (isExpired(account)) {
      await createRenewalRequestIfNeeded(account);
      response.status(423).json({
        error: "Энэ account-ийн зөвшөөрлийн хугацаа дууссан байна. 95723051 account дахин зөвшөөрсний дараа нэвтэрнэ.",
        status: "expired",
      });
      return;
    }

    response.json({ account: publicAccount(account), session: issueSession(account) });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Нэвтрэх үед алдаа гарлаа." });
  }
});

app.post("/api/accounts/logout", requireAuthenticatedSession, (request, response) => {
  sessions.delete(request.authToken);
  response.json({ ok: true });
});

app.get("/api/account-requests/pending", requireApproverSession, async (_request, response) => {
  try {
    const requests = pool
      ? (await pool.query(
        "SELECT * FROM account_requests WHERE status = 'pending' ORDER BY created_at DESC",
      )).rows
      : memoryStore.accountRequests
        .filter((accountRequest) => accountRequest.status === "pending")
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    response.json({ requests: requests.map(publicRequest) });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Account хүсэлтүүд уншихад алдаа гарлаа." });
  }
});

async function approveMemoryAccountRequest(request, response) {
  const approver = request.authAccount;

  const accountRequest = memoryStore.accountRequests.find(
    (item) => item.id === String(request.params.id) && item.status === "pending",
  );
  if (!accountRequest) {
    response.status(404).json({ error: "Хүсэлт олдсонгүй эсвэл аль хэдийн шийдэгдсэн байна." });
    return;
  }

  const duration = normalizeDurationParts(request.body.duration || request.body);
  const existingAccount = await findAccountByUsername(accountRequest.username);
  const approvedAt = new Date();
  let account;

  if (existingAccount) {
    const canRenew = String(existingAccount.id) === String(accountRequest.account_id) || isExpired(existingAccount);
    if (!canRenew) {
      accountRequest.status = "duplicate";
      accountRequest.rejected_at = approvedAt;
      accountRequest.rejected_by = approver.id;
      saveMemoryStore();
      response.status(409).json({ error: "Энэ нэвтрэх нэрээр account аль хэдийн байна." });
      return;
    }

    existingAccount.password_hash = accountRequest.password_hash;
    existingAccount.approved_at = approvedAt;
    existingAccount.approved_by = approver.id;
    existingAccount.expires_at = duration.expiresAt;
    account = existingAccount;
  } else {
    account = createMemoryAccount({
      name: accountRequest.name,
      username: accountRequest.username,
      passwordHash: accountRequest.password_hash,
      approvedAt,
      approvedBy: approver.id,
      expiresAt: duration.expiresAt,
    });
  }

  accountRequest.status = "approved";
  accountRequest.approved_at = approvedAt;
  accountRequest.approved_by = approver.id;
  accountRequest.duration_days = duration.days;
  accountRequest.duration_minutes = duration.minutes;
  accountRequest.duration_seconds = duration.seconds;
  accountRequest.duration_ms = duration.durationMs;
  accountRequest.expires_at = duration.expiresAt;

  saveMemoryStore();
  response.json({ account: publicAccount(account), request: publicRequest(accountRequest) });
}

app.post("/api/account-requests/:id/approve", requireApproverSession, async (request, response) => {
  if (!pool) {
    try {
      await approveMemoryAccountRequest(request, response);
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: "Account зөвшөөрөхөд алдаа гарлаа." });
    }
    return;
  }

  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    const approver = request.authAccount;

    const requestResult = await client.query(
      "SELECT * FROM account_requests WHERE id = $1 AND status = 'pending' FOR UPDATE",
      [request.params.id],
    );
    const accountRequest = requestResult.rows[0];
    if (!accountRequest) {
      await client.query("ROLLBACK");
      response.status(404).json({ error: "Хүсэлт олдсонгүй эсвэл аль хэдийн шийдэгдсэн байна." });
      return;
    }

    const duration = normalizeDurationParts(request.body.duration || request.body);
    const existingResult = await client.query("SELECT * FROM accounts WHERE username = $1 LIMIT 1", [accountRequest.username]);
    const existingAccount = existingResult.rows[0];
    let account;

    if (existingAccount) {
      const canRenew = existingAccount.id === accountRequest.account_id || isExpired(existingAccount);
      if (!canRenew) {
        await client.query(
          `UPDATE account_requests
           SET status = 'duplicate', rejected_at = NOW(), rejected_by = $1
           WHERE id = $2`,
          [approver.id, accountRequest.id],
        );
        await client.query("COMMIT");
        response.status(409).json({ error: "Энэ нэвтрэх нэрээр account аль хэдийн байна." });
        return;
      }

      const updated = await client.query(
        `UPDATE accounts
         SET password_hash = $1, approved_at = NOW(), approved_by = $2, expires_at = $3
         WHERE id = $4
         RETURNING *`,
        [accountRequest.password_hash, approver.id, duration.expiresAt, existingAccount.id],
      );
      account = updated.rows[0];
    } else {
      const created = await client.query(
        `INSERT INTO accounts (name, username, password_hash, approved_at, approved_by, expires_at)
         VALUES ($1, $2, $3, NOW(), $4, $5)
         RETURNING *`,
        [accountRequest.name, accountRequest.username, accountRequest.password_hash, approver.id, duration.expiresAt],
      );
      account = created.rows[0];
    }

    const updatedRequest = await client.query(
      `UPDATE account_requests
       SET status = 'approved',
           approved_at = NOW(),
           approved_by = $1,
           duration_days = $2,
           duration_minutes = $3,
           duration_seconds = $4,
           duration_ms = $5,
           expires_at = $6
       WHERE id = $7
       RETURNING *`,
      [
        approver.id,
        duration.days,
        duration.minutes,
        duration.seconds,
        duration.durationMs,
        duration.expiresAt,
        accountRequest.id,
      ],
    );

    await client.query("COMMIT");
    response.json({ account: publicAccount(account), request: publicRequest(updatedRequest.rows[0]) });
  } catch (error) {
    await client.query("ROLLBACK");
    console.error(error);
    response.status(500).json({ error: "Account зөвшөөрөхөд алдаа гарлаа." });
  } finally {
    client.release();
  }
});

app.post("/api/account-requests/:id/reject", requireApproverSession, async (request, response) => {
  try {
    const approverAccount = request.authAccount;

    if (!pool) {
      const accountRequest = memoryStore.accountRequests.find(
        (item) => item.id === String(request.params.id) && item.status === "pending",
      );
      if (!accountRequest) {
        response.status(404).json({ error: "Хүсэлт олдсонгүй эсвэл аль хэдийн шийдэгдсэн байна." });
        return;
      }

      accountRequest.status = "rejected";
      accountRequest.rejected_at = new Date();
      accountRequest.rejected_by = approverAccount.id;
      saveMemoryStore();
      response.json({ request: publicRequest(accountRequest) });
      return;
    }

    const { rows } = await pool.query(
      `UPDATE account_requests
       SET status = 'rejected', rejected_at = NOW(), rejected_by = $1
       WHERE id = $2 AND status = 'pending'
       RETURNING *`,
      [approverAccount.id, request.params.id],
    );

    if (!rows[0]) {
      response.status(404).json({ error: "Хүсэлт олдсонгүй эсвэл аль хэдийн шийдэгдсэн байна." });
      return;
    }

    response.json({ request: publicRequest(rows[0]) });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Account хүсэлт татгалзахад алдаа гарлаа." });
  }
});

app.post("/api/accounts/:id/password", requireApproverSession, async (request, response) => {
  try {
    const newPassword = String(request.body.newPassword || "");
    if (newPassword.length < 4) {
      response.status(400).json({ error: "Шинэ нууц үг хамгийн багадаа 4 тэмдэгт байна." });
      return;
    }

    const passwordHash = await bcrypt.hash(newPassword, 10);
    if (!pool) {
      const account = memoryStore.accounts.find((item) => item.id === String(request.params.id));
      if (!account) {
        response.status(404).json({ error: "Account олдсонгүй." });
        return;
      }
      account.password_hash = passwordHash;
      saveMemoryStore();
      response.json({ account: publicAccount(account) });
      return;
    }

    const { rows } = await pool.query(
      "UPDATE accounts SET password_hash = $1 WHERE id = $2 RETURNING *",
      [passwordHash, request.params.id],
    );
    if (!rows[0]) {
      response.status(404).json({ error: "Account олдсонгүй." });
      return;
    }
    response.json({ account: publicAccount(rows[0]) });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Нууц үг солиход алдаа гарлаа." });
  }
});

app.delete("/api/accounts/:id", requireApproverSession, async (request, response) => {
  try {
    if (!pool) {
      const accountIndex = memoryStore.accounts.findIndex((item) => item.id === String(request.params.id));
      if (accountIndex === -1) {
        response.status(404).json({ error: "Account олдсонгүй." });
        return;
      }
      if (memoryStore.accounts[accountIndex].username === approverUsername) {
        response.status(400).json({ error: "95723051 үндсэн админ account-ийг устгах боломжгүй." });
        return;
      }

      const [deletedAccount] = memoryStore.accounts.splice(accountIndex, 1);
      memoryStore.accountRequests.forEach((accountRequest) => {
        if (String(accountRequest.account_id || "") === String(deletedAccount.id)) {
          accountRequest.account_id = null;
        }
      });
      saveMemoryStore();
      response.json({ account: publicAccount(deletedAccount) });
      return;
    }

    const { rows } = await pool.query(
      "DELETE FROM accounts WHERE id = $1 AND username <> $2 RETURNING *",
      [request.params.id, approverUsername],
    );
    if (!rows[0]) {
      response.status(404).json({ error: "Account олдсонгүй эсвэл үндсэн админ account байна." });
      return;
    }
    response.json({ account: publicAccount(rows[0]) });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Account устгахад алдаа гарлаа." });
  }
});

const publicFiles = new Map([
  ["/app.js", "app.js"],
  ["/styles.css", "styles.css"],
]);

app.use("/assets", express.static(path.join(__dirname, "assets"), {
  dotfiles: "ignore",
  maxAge: process.env.NODE_ENV === "production" ? "1h" : 0,
  immutable: false,
}));

app.get([...publicFiles.keys()], (request, response) => {
  response.setHeader("Cache-Control", "no-cache");
  response.sendFile(path.join(__dirname, publicFiles.get(request.path)));
});

app.get("*", (request, response) => {
  if (request.path.startsWith("/api/")) {
    response.status(404).json({ error: "API endpoint олдсонгүй." });
    return;
  }

  response.setHeader("Cache-Control", "no-cache");
  response.sendFile(path.join(__dirname, "index.html"));
});

let httpServer;

initDatabase()
  .then(() => {
    httpServer = app.listen(port, host, () => {
      console.log(`Niislel Car Wash server listening on ${host}:${port}`);
    });
  })
  .catch((error) => {
    console.error("Database initialization failed", error);
    process.exit(1);
  });

async function shutdown(signal) {
  console.log(`${signal} received. Shutting down gracefully.`);
  const forceExit = setTimeout(() => process.exit(1), 10000);
  forceExit.unref();

  if (httpServer) {
    await new Promise((resolve) => httpServer.close(resolve));
  }
  if (pool) await pool.end();
  clearTimeout(forceExit);
  process.exit(0);
}

process.once("SIGTERM", () => shutdown("SIGTERM"));
process.once("SIGINT", () => shutdown("SIGINT"));
