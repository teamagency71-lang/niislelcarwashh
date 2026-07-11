import { getStore } from "@netlify/blobs";
import bcrypt from "bcryptjs";
import crypto from "node:crypto";

const approverUsername = "95723051";
const sessionTtlMs = 24 * 60 * 60 * 1000;
const storeName = "niislel-account-data";

function dataStore() {
  return getStore({ name: storeName, consistency: "strong" });
}

function json(data, status = 200) {
  return Response.json(data, {
    status,
    headers: {
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
}

async function readJson(request) {
  try {
    return await request.json();
  } catch {
    return {};
  }
}

async function getJson(key) {
  const value = await dataStore().get(key);
  if (!value) return null;
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
}

async function setJson(key, value) {
  await dataStore().set(key, JSON.stringify(value));
  return value;
}

function normalizeUsername(value) {
  return String(value || "").trim().toLowerCase();
}

function accountKey(username) {
  return `accounts/${encodeURIComponent(normalizeUsername(username))}`;
}

function requestKey(username) {
  return `requests/${encodeURIComponent(normalizeUsername(username))}`;
}

function sessionKey(token) {
  const digest = crypto.createHash("sha256").update(String(token || "")).digest("hex");
  return `sessions/${digest}`;
}

async function getAccountByUsername(username) {
  return getJson(accountKey(username));
}

async function saveAccount(account) {
  return setJson(accountKey(account.username), account);
}

async function listValues(prefix) {
  const { blobs } = await dataStore().list({ prefix });
  return Promise.all(blobs.map((entry) => getJson(entry.key)));
}

async function getAccountById(id) {
  const accounts = await listValues("accounts/");
  return accounts.find((account) => account && String(account.id) === String(id)) || null;
}

async function getRequestById(id) {
  const requests = await listValues("requests/");
  return requests.find((item) => item && String(item.id) === String(id)) || null;
}

async function findPendingRequest(username) {
  const accountRequest = await getJson(requestKey(username));
  return accountRequest?.status === "pending" ? accountRequest : null;
}

async function saveRequest(accountRequest) {
  return setJson(requestKey(accountRequest.username), accountRequest);
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

function publicRequest(accountRequest) {
  if (!accountRequest) return null;
  return {
    id: String(accountRequest.id),
    name: accountRequest.name,
    username: accountRequest.username,
    createdAt: new Date(accountRequest.created_at).getTime(),
    status: accountRequest.status,
    kind: accountRequest.kind || "new",
    accountId: accountRequest.account_id ? String(accountRequest.account_id) : "",
    durationDays: Number(accountRequest.duration_days) || 0,
    durationMinutes: Number(accountRequest.duration_minutes) || 0,
    durationSeconds: Number(accountRequest.duration_seconds) || 0,
    durationMs: Number(accountRequest.duration_ms) || 0,
    expiresAt: accountRequest.expires_at ? new Date(accountRequest.expires_at).getTime() : 0,
    approvedAt: accountRequest.approved_at ? new Date(accountRequest.approved_at).getTime() : 0,
    approvedBy: accountRequest.approved_by ? String(accountRequest.approved_by) : "",
    rejectedAt: accountRequest.rejected_at ? new Date(accountRequest.rejected_at).getTime() : 0,
    rejectedBy: accountRequest.rejected_by ? String(accountRequest.rejected_by) : "",
  };
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
    expiresAt: new Date(Date.now() + durationMs).toISOString(),
  };
}

function createAccount({ name, username, passwordHash, approvedBy = null, expiresAt = null }) {
  const now = new Date().toISOString();
  return {
    id: crypto.randomUUID(),
    name,
    username,
    password_hash: passwordHash,
    created_at: now,
    approved_at: now,
    approved_by: approvedBy,
    expires_at: expiresAt,
    last_request_id: null,
  };
}

function createAccountRequest({ name, username, passwordHash, kind = "new", accountId = null }) {
  return {
    id: crypto.randomUUID(),
    name,
    username,
    password_hash: passwordHash,
    status: "pending",
    kind,
    account_id: accountId,
    duration_days: 0,
    duration_minutes: 0,
    duration_seconds: 0,
    duration_ms: 0,
    expires_at: null,
    created_at: new Date().toISOString(),
    approved_at: null,
    approved_by: null,
    rejected_at: null,
    rejected_by: null,
  };
}

async function createRenewalRequestIfNeeded(account) {
  const pending = await findPendingRequest(account.username);
  if (pending) return pending;
  return saveRequest(createAccountRequest({
    name: account.name,
    username: account.username,
    passwordHash: account.password_hash,
    kind: "renew",
    accountId: account.id,
  }));
}

function bearerToken(request) {
  const authorization = String(request.headers.get("authorization") || "");
  return authorization.startsWith("Bearer ") ? authorization.slice(7).trim() : "";
}

async function issueSession(account) {
  const token = crypto.randomBytes(32).toString("base64url");
  const accountExpiry = account.expires_at ? new Date(account.expires_at).getTime() : 0;
  const expiresAt = accountExpiry
    ? Math.min(Date.now() + sessionTtlMs, accountExpiry)
    : Date.now() + sessionTtlMs;
  await setJson(sessionKey(token), {
    accountId: String(account.id),
    username: account.username,
    expiresAt,
  });
  return { token, expiresAt };
}

async function authenticate(request, approverOnly = false) {
  const token = bearerToken(request);
  const session = token ? await getJson(sessionKey(token)) : null;
  if (!session || Number(session.expiresAt) <= Date.now()) {
    if (token) await dataStore().delete(sessionKey(token));
    return { error: json({ error: "Нэвтрэх хугацаа дууссан байна. Дахин нэвтэрнэ үү." }, 401) };
  }

  const account = await getAccountByUsername(session.username);
  if (!account || isExpired(account) || String(account.id) !== String(session.accountId)) {
    await dataStore().delete(sessionKey(token));
    return { error: json({ error: "Account идэвхгүй байна. Дахин нэвтэрнэ үү." }, 401) };
  }
  if (approverOnly && account.username !== approverUsername) {
    return { error: json({ error: "Зөвхөн 95723051 админ account энэ үйлдлийг хийнэ." }, 403) };
  }
  return { token, account };
}

function passwordsEqual(left, right) {
  const a = Buffer.from(String(left || ""));
  const b = Buffer.from(String(right || ""));
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

async function enforceAuthRateLimit(request) {
  const ip = request.headers.get("x-nf-client-connection-ip")
    || request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
    || "unknown";
  const now = Date.now();
  const windowMs = 15 * 60 * 1000;
  const key = `rate/${crypto.createHash("sha256").update(ip).digest("hex")}`;
  const entry = await getJson(key);
  const current = entry && Number(entry.resetAt) > now
    ? entry
    : { count: 0, resetAt: now + windowMs };
  current.count += 1;
  await setJson(key, current);
  return current.count <= 40;
}

function apiPath(request) {
  let pathname = new URL(request.url).pathname;
  pathname = pathname.replace(/^\/\.netlify\/functions\/api/, "");
  pathname = pathname.replace(/^\/api/, "");
  return pathname || "/";
}

async function handleSignup(request) {
  if (!(await enforceAuthRateLimit(request))) {
    return json({ error: "Олон удаа оролдлоо. Түр хүлээгээд дахин оролдоно уу." }, 429);
  }
  const body = await readJson(request);
  const name = String(body.name || "").trim();
  const username = normalizeUsername(body.username);
  const password = String(body.password || "");
  if (name.length < 2) return json({ error: "Нэрээ 2-оос дээш тэмдэгтээр оруулна уу." }, 400);
  if (username.length < 3) return json({ error: "Нэвтрэх нэр 3-аас дээш тэмдэгттэй байна." }, 400);
  if (password.length < 4) return json({ error: "Нууц үг хамгийн багадаа 4 тэмдэгт байна." }, 400);
  if (username === approverUsername) {
    return json({ error: "95723051 админ account-ийг нэвтрэх хэсгээр ашиглана уу." }, 403);
  }

  const existingAccount = await getAccountByUsername(username);
  if (existingAccount && !isExpired(existingAccount)) {
    return json({ error: "Энэ нэвтрэх нэрээр account аль хэдийн байна." }, 409);
  }
  const pending = await findPendingRequest(username);
  if (pending) return json({ status: "pending", request: publicRequest(pending) });

  const accountRequest = createAccountRequest({
    name: existingAccount?.name || name,
    username,
    passwordHash: await bcrypt.hash(password, 10),
    kind: existingAccount ? "renew" : "new",
    accountId: existingAccount?.id || null,
  });
  await saveRequest(accountRequest);
  return json({ status: "pending", request: publicRequest(accountRequest) });
}

async function handleLogin(request) {
  if (!(await enforceAuthRateLimit(request))) {
    return json({ error: "Олон удаа оролдлоо. Түр хүлээгээд дахин оролдоно уу." }, 429);
  }
  const body = await readJson(request);
  const username = normalizeUsername(body.username);
  const password = String(body.password || "");
  const adminName = String(body.name || "Удирдлага").trim().slice(0, 120) || "Удирдлага";
  let account = await getAccountByUsername(username);

  if (!account && username === approverUsername) {
    const configuredPassword = String(process.env.ADMIN_INITIAL_PASSWORD || "");
    if (configuredPassword.length < 8) {
      return json({ error: "Netlify дээр ADMIN_INITIAL_PASSWORD тохиргоо дутуу байна." }, 503);
    }
    if (!passwordsEqual(password, configuredPassword)) {
      return json({ error: "Нэвтрэх нэр эсвэл нууц үг буруу байна." }, 401);
    }
    account = createAccount({
      name: adminName,
      username,
      passwordHash: await bcrypt.hash(password, 10),
    });
    await saveAccount(account);
    return json({ account: publicAccount(account), session: await issueSession(account), bootstrap: true }, 201);
  }

  if (!account) {
    const pending = await findPendingRequest(username);
    if (pending) return json({ error: "Таны account хүсэлт хүлээгдэж байна.", status: "pending" }, 423);
    return json({ error: "Нэвтрэх нэр эсвэл нууц үг буруу байна." }, 401);
  }
  if (!(await bcrypt.compare(password, account.password_hash))) {
    return json({ error: "Нэвтрэх нэр эсвэл нууц үг буруу байна." }, 401);
  }
  if (isExpired(account)) {
    await createRenewalRequestIfNeeded(account);
    return json({
      error: "Энэ account-ийн зөвшөөрлийн хугацаа дууссан байна. Админ дахин зөвшөөрсний дараа нэвтэрнэ.",
      status: "expired",
    }, 423);
  }
  return json({ account: publicAccount(account), session: await issueSession(account) });
}

async function handlePending(request) {
  const auth = await authenticate(request, true);
  if (auth.error) return auth.error;
  const requests = (await listValues("requests/"))
    .filter((item) => item?.status === "pending")
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  return json({ requests: requests.map(publicRequest) });
}

async function handleApprove(request, id) {
  const auth = await authenticate(request, true);
  if (auth.error) return auth.error;
  const accountRequest = await getRequestById(id);
  if (!accountRequest || accountRequest.status !== "pending") {
    return json({ error: "Хүсэлт олдсонгүй эсвэл аль хэдийн шийдэгдсэн байна." }, 404);
  }
  const body = await readJson(request);
  const duration = normalizeDurationParts(body.duration || body);
  const now = new Date().toISOString();
  let account = await getAccountByUsername(accountRequest.username);

  if (account) {
    const canRenew = String(account.id) === String(accountRequest.account_id)
      || isExpired(account)
      || account.last_request_id === accountRequest.id;
    if (!canRenew) {
      accountRequest.status = "duplicate";
      accountRequest.rejected_at = now;
      accountRequest.rejected_by = auth.account.id;
      await saveRequest(accountRequest);
      return json({ error: "Энэ нэвтрэх нэрээр account аль хэдийн байна." }, 409);
    }
    account.password_hash = accountRequest.password_hash;
    account.approved_at = now;
    account.approved_by = auth.account.id;
    account.expires_at = duration.expiresAt;
    account.last_request_id = accountRequest.id;
  } else {
    account = createAccount({
      name: accountRequest.name,
      username: accountRequest.username,
      passwordHash: accountRequest.password_hash,
      approvedBy: auth.account.id,
      expiresAt: duration.expiresAt,
    });
    account.last_request_id = accountRequest.id;
  }
  await saveAccount(account);

  accountRequest.status = "approved";
  accountRequest.approved_at = now;
  accountRequest.approved_by = auth.account.id;
  accountRequest.duration_days = duration.days;
  accountRequest.duration_minutes = duration.minutes;
  accountRequest.duration_seconds = duration.seconds;
  accountRequest.duration_ms = duration.durationMs;
  accountRequest.expires_at = duration.expiresAt;
  await saveRequest(accountRequest);
  return json({ account: publicAccount(account), request: publicRequest(accountRequest) });
}

async function handleReject(request, id) {
  const auth = await authenticate(request, true);
  if (auth.error) return auth.error;
  const accountRequest = await getRequestById(id);
  if (!accountRequest || accountRequest.status !== "pending") {
    return json({ error: "Хүсэлт олдсонгүй эсвэл аль хэдийн шийдэгдсэн байна." }, 404);
  }
  accountRequest.status = "rejected";
  accountRequest.rejected_at = new Date().toISOString();
  accountRequest.rejected_by = auth.account.id;
  await saveRequest(accountRequest);
  return json({ request: publicRequest(accountRequest) });
}

async function handlePasswordChange(request, id) {
  const auth = await authenticate(request, true);
  if (auth.error) return auth.error;
  const body = await readJson(request);
  const newPassword = String(body.newPassword || "");
  if (newPassword.length < 4) {
    return json({ error: "Шинэ нууц үг хамгийн багадаа 4 тэмдэгт байна." }, 400);
  }
  const account = await getAccountById(id);
  if (!account) return json({ error: "Account олдсонгүй." }, 404);
  account.password_hash = await bcrypt.hash(newPassword, 10);
  await saveAccount(account);
  return json({ account: publicAccount(account) });
}

async function handleDeleteAccount(request, id) {
  const auth = await authenticate(request, true);
  if (auth.error) return auth.error;
  const account = await getAccountById(id);
  if (!account) return json({ error: "Account олдсонгүй." }, 404);
  if (account.username === approverUsername) {
    return json({ error: "95723051 үндсэн админ account-ийг устгах боломжгүй." }, 400);
  }
  await dataStore().delete(accountKey(account.username));
  return json({ account: publicAccount(account) });
}

export default async function handler(request) {
  try {
    const path = apiPath(request);
    const method = request.method.toUpperCase();
    if (method === "GET" && path === "/health") {
      await dataStore().list({ prefix: "accounts/" });
      return json({ ok: true, database: true, storage: "netlify-blobs" });
    }
    if (method === "POST" && path === "/accounts/signup") return handleSignup(request);
    if (method === "POST" && path === "/accounts/login") return handleLogin(request);
    if (method === "POST" && path === "/accounts/logout") {
      const auth = await authenticate(request);
      if (auth.error) return auth.error;
      await dataStore().delete(sessionKey(auth.token));
      return json({ ok: true });
    }
    if (method === "GET" && path === "/account-requests/pending") return handlePending(request);

    let match = path.match(/^\/account-requests\/([^/]+)\/(approve|reject)$/);
    if (method === "POST" && match) {
      const id = decodeURIComponent(match[1]);
      return match[2] === "approve" ? handleApprove(request, id) : handleReject(request, id);
    }
    match = path.match(/^\/accounts\/([^/]+)\/password$/);
    if (method === "POST" && match) return handlePasswordChange(request, decodeURIComponent(match[1]));
    match = path.match(/^\/accounts\/([^/]+)$/);
    if (method === "DELETE" && match) return handleDeleteAccount(request, decodeURIComponent(match[1]));

    return json({ error: "API endpoint олдсонгүй." }, 404);
  } catch (error) {
    console.error("Netlify account API failed", error);
    return json({ error: "Account сервертэй холбогдох үед алдаа гарлаа." }, 500);
  }
}
