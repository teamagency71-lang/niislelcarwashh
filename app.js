const formatter = new Intl.NumberFormat("mn-MN");

const vehicleTypes = [
  { key: "small", label: "Жижиг" },
  { key: "combi", label: "Combi" },
  { key: "mid", label: "Дунд" },
  { key: "grace", label: "Changan / Grace" },
  { key: "jeep", label: "Jeep" },
  { key: "alphard", label: "Alphard" },
  { key: "hiace", label: "Hiace / County" },
];

const defaultServicePrices = [
  {
    key: "full",
    label: "Бүтэн угаалга",
    prices: {
      small: { amount: 50000, label: "50,000" },
      combi: { amount: 50000, label: "50,000" },
      mid: { amount: 60000, label: "60,000" },
      grace: { amount: 65000, label: "65,000" },
      jeep: { amount: 70000, label: "70,000" },
      alphard: { amount: 80000, label: "80,000" },
      hiace: { amount: 80000, label: "80,000-100,000" },
    },
  },
  {
    key: "inside_outside",
    label: "Гадна, дотор",
    prices: {
      small: { amount: 30000, label: "30,000" },
      combi: { amount: 35000, label: "35,000" },
      mid: { amount: 40000, label: "40,000" },
      grace: { amount: 45000, label: "45,000" },
      jeep: { amount: 45000, label: "45,000" },
      alphard: { amount: 45000, label: "45,000" },
      hiace: { amount: 40000, label: "40,000-50,000" },
    },
  },
  {
    key: "motor",
    label: "Мотор",
    prices: {
      small: { amount: 50000, label: "50,000" },
      combi: { amount: 50000, label: "50,000" },
      mid: { amount: 60000, label: "60,000" },
      grace: { amount: 65000, label: "65,000" },
      jeep: { amount: 70000, label: "70,000" },
      alphard: { amount: 80000, label: "80,000" },
      hiace: { amount: 100000, label: "100,000" },
    },
  },
  {
    key: "mat",
    label: "Таз",
    prices: {
      small: { amount: 40000, label: "40,000-80,000" },
      combi: { amount: 40000, label: "40,000-80,000" },
      mid: { amount: 50000, label: "50,000-100,000" },
      grace: { amount: 50000, label: "50,000-100,000" },
      jeep: { amount: 50000, label: "50,000-100,000" },
      alphard: { amount: 50000, label: "50,000-100,000" },
      hiace: { amount: 50000, label: "50,000-120,000" },
    },
  },
  {
    key: "shava",
    label: "Шава",
    prices: {
      small: { amount: 50000, label: "50,000-100,000" },
      combi: { amount: 50000, label: "50,000-100,000" },
      mid: { amount: 50000, label: "50,000-100,000" },
      grace: { amount: 50000, label: "50,000-100,000" },
      jeep: { amount: 50000, label: "50,000-100,000" },
      alphard: { amount: 50000, label: "50,000-100,000" },
      hiace: { amount: 50000, label: "50,000-120,000" },
    },
  },
  {
    key: "seat",
    label: "Суудал",
    prices: {
      small: { amount: 10000, label: "1 суудал 10,000-20,000" },
      combi: { amount: 10000, label: "1 суудал 10,000-20,000" },
      mid: { amount: 10000, label: "1 суудал 10,000-20,000" },
      grace: { amount: 10000, label: "1 суудал 10,000-20,000" },
      jeep: { amount: 10000, label: "1 суудал 10,000-20,000" },
      alphard: { amount: 10000, label: "1 суудал 10,000-20,000" },
      hiace: { amount: 10000, label: "1 суудал 10,000-20,000" },
    },
  },
  {
    key: "trunk",
    label: "Багаж",
    prices: {
      small: { amount: 20000, label: "20,000-60,000" },
      combi: { amount: 20000, label: "20,000-60,000" },
      mid: { amount: 20000, label: "20,000-60,000" },
      grace: { amount: 20000, label: "20,000-60,000" },
      jeep: { amount: 20000, label: "20,000-60,000" },
      alphard: { amount: 20000, label: "20,000-60,000" },
      hiace: { amount: 20000, label: "20,000-80,000" },
    },
  },
  {
    key: "dirt_remove",
    label: "Бохирдол дарах",
    prices: {
      small: { amount: 10000, label: "10,000-30,000" },
      combi: { amount: 10000, label: "10,000-30,000" },
      mid: { amount: 10000, label: "10,000-30,000" },
      grace: { amount: 10000, label: "10,000-30,000" },
      jeep: { amount: 10000, label: "10,000-30,000" },
      alphard: { amount: 10000, label: "10,000-30,000" },
      hiace: { amount: 10000, label: "10,000-40,000" },
    },
  },
  {
    key: "deep_clean",
    label: "Гүн цэвэрлэгээ",
    prices: {
      small: { amount: 40000, label: "40,000-100,000" },
      combi: { amount: 40000, label: "40,000-100,000" },
      mid: { amount: 40000, label: "40,000-120,000" },
      grace: { amount: 40000, label: "40,000-120,000" },
      jeep: { amount: 40000, label: "40,000-120,000" },
      alphard: { amount: 40000, label: "40,000-120,000" },
      hiace: { amount: 50000, label: "50,000-150,000" },
    },
  },
  {
    key: "headlight",
    label: "Гэрэл өнгөлөх",
    prices: {
      small: { amount: 10000, label: "10,000-40,000" },
      combi: { amount: 10000, label: "10,000-40,000" },
      mid: { amount: 10000, label: "10,000-40,000" },
      grace: { amount: 10000, label: "10,000-40,000" },
      jeep: { amount: 10000, label: "10,000-40,000" },
      alphard: { amount: 10000, label: "10,000-40,000" },
      hiace: { amount: 10000, label: "10,000-40,000" },
    },
  },
  {
    key: "stain_clean",
    label: "Цэвэрлэгээ / бохирдол",
    prices: {
      small: { amount: 5000, label: "5,000-40,000" },
      combi: { amount: 5000, label: "5,000-40,000" },
      mid: { amount: 5000, label: "5,000-40,000" },
      grace: { amount: 5000, label: "5,000-40,000" },
      jeep: { amount: 5000, label: "5,000-40,000" },
      alphard: { amount: 5000, label: "5,000-40,000" },
      hiace: { amount: 5000, label: "5,000-50,000" },
    },
  },
  {
    key: "bug_tar",
    label: "Шавж, давирхай",
    prices: {
      small: { amount: 10000, label: "10,000-20,000" },
      combi: { amount: 10000, label: "10,000-20,000" },
      mid: { amount: 10000, label: "10,000-20,000" },
      grace: { amount: 10000, label: "10,000-20,000" },
      jeep: { amount: 10000, label: "10,000-20,000" },
      alphard: { amount: 10000, label: "10,000-20,000" },
      hiace: { amount: 10000, label: "10,000-30,000" },
    },
  },
  {
    key: "vacuum",
    label: "Тоос соруулах",
    prices: {
      small: { amount: 20000, label: "20,000-50,000" },
      combi: { amount: 20000, label: "20,000-50,000" },
      mid: { amount: 20000, label: "20,000-50,000" },
      grace: { amount: 20000, label: "20,000-50,000" },
      jeep: { amount: 20000, label: "20,000-50,000" },
      alphard: { amount: 20000, label: "20,000-50,000" },
      hiace: { amount: 20000, label: "20,000-70,000" },
    },
  },
  {
    key: "fragrance",
    label: "Үнэртэй угаалга тавих",
    prices: {
      small: { amount: 25000, label: "25,000" },
      combi: { amount: 25000, label: "25,000" },
      mid: { amount: 25000, label: "25,000" },
      grace: { amount: 25000, label: "25,000" },
      jeep: { amount: 25000, label: "25,000" },
      alphard: { amount: 25000, label: "25,000" },
      hiace: { amount: 25000, label: "25,000" },
    },
  },
  {
    key: "check_wash",
    label: "Чекэн угаалга",
    prices: {
      small: { amount: 20000, label: "20,000" },
      combi: { amount: 20000, label: "20,000" },
      mid: { amount: 20000, label: "20,000" },
      grace: { amount: 20000, label: "20,000" },
      jeep: { amount: 20000, label: "20,000" },
      alphard: { amount: 20000, label: "20,000" },
      hiace: { amount: 20000, label: "20,000" },
    },
  },
  {
    key: "motorcycle",
    label: "Мотоцикл",
    prices: {
      small: { amount: 20000, label: "20,000" },
      combi: { amount: 20000, label: "20,000" },
      mid: { amount: 20000, label: "20,000" },
      grace: { amount: 20000, label: "20,000" },
      jeep: { amount: 20000, label: "20,000" },
      alphard: { amount: 20000, label: "20,000" },
      hiace: { amount: 20000, label: "20,000" },
    },
  },
];

let servicePrices = cloneValue(defaultServicePrices);

const cashRanges = [
  { key: "yesterday", label: "Өчигдөр" },
  { key: "threeDays", label: "3 хоног" },
  { key: "sevenDays", label: "7 хоног" },
  { key: "oneMonth", label: "1 сар" },
  { key: "threeMonths", label: "3 сар" },
];

const payrollRate = 0.4;
const payrollRanges = [
  { key: "today", label: "Өнөөдөр" },
  { key: "sevenDays", label: "7 хоног" },
  { key: "oneMonth", label: "1 сар" },
  { key: "all", label: "Бүгд" },
];

const cashTrendLengths = {
  yesterday: 7,
  threeDays: 3,
  sevenDays: 7,
  oneMonth: 4,
  threeMonths: 3,
};

const archivePayments = ["Карт", "Бэлэн", "Данс"];

function getDateKey(daysFromToday = 0) {
  const date = new Date();
  date.setHours(12, 0, 0, 0);
  date.setDate(date.getDate() + daysFromToday);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function createDefaultCashArchive() {
  return {};
}

const emptyDataVersion = "empty-real-data-v1";

function clearStoredDemoData() {
  if (localStorage.getItem("cwDataVersion") === emptyDataVersion) return;

  [
    "cwCustomerProfiles",
    "cwQueue",
    "cwBays",
    "cwCompletedBayCars",
    "cwDashboardSettings",
    "cwStaffMembers",
    "cwCashArchive",
    "cwShopProducts",
    "cwGeneralSettings",
  ].forEach((key) => localStorage.removeItem(key));

  localStorage.setItem("cwDataVersion", emptyDataVersion);
}

clearStoredDemoData();

const defaultCustomerProfiles = {};

let customerProfiles = cloneValue(defaultCustomerProfiles);

const shopProductEmojis = ["💧", "🥤", "🧃", "☕", "🍵", "🥛", "🍫", "🍪"];
const defaultShopProducts = [];

function normalizeShopProducts(items) {
  return (Array.isArray(items) ? items : []).map((item, index) => ({
    id: String(item.id || `shop-${Date.now()}-${index}`),
    emoji: shopProductEmojis.includes(item.emoji) ? item.emoji : "💧",
    name: String(item.name || "Бүтээгдэхүүн").trim(),
    price: Math.max(0, Number(item.price) || 0),
  }));
}

let shopProducts = normalizeShopProducts(defaultShopProducts);

const defaultQueue = [];

function normalizeQueueItems(items) {
  const now = Date.now();

  return items.map((item, index) => {
    const customerPhone = String(item.customerPhone || "");
    if (customerPhone && !customerProfiles[customerPhone]) {
      customerProfiles[customerPhone] = {
        phone: customerPhone,
        pin: "0000",
        recoveryWord: "",
        plates: [item.plate],
      };
    }

    const createdAt = Number(item.createdAt) || now;
    const acceptedAt = Number(item.acceptedAt) || null;
    const bookingId = String(item.bookingId || `booking-${now}-${index}`);
    const shopItems = Array.isArray(item.shopItems)
      ? item.shopItems
          .map((product) => ({
            id: String(product.id || product.productId || createShopProductId()),
            productId: String(product.productId || product.id || ""),
            emoji: shopProductEmojis.includes(product.emoji) ? product.emoji : "💧",
            name: String(product.name || "Бүтээгдэхүүн").trim(),
            price: Math.max(0, Number(product.price) || 0),
            qty: Math.max(1, Number(product.qty) || 1),
          }))
          .filter((product) => product.name)
      : [];
    const { code, pin, ...safeItem } = item;
    return { ...safeItem, bookingId, customerPhone, createdAt, acceptedAt, shopItems };
  });
}

let queue = normalizeQueueItems(defaultQueue);
let activeDashboardQueueId = "";
let activeDashboardShopId = "";
let activeDashboardPaymentId = "";

const defaultBays = [];

let bays = cloneValue(defaultBays);
let completedBayCars = [];

const queueList = document.querySelector("#queueList");
const dashboardQueueList = document.querySelector("#dashboardQueueList");
const bayGrid = document.querySelector("#bayGrid");
const completedBayList = document.querySelector("#completedBayList");
const completedBayEmpty = document.querySelector("#completedBayEmpty");
const completedBayCount = document.querySelector("#completedBayCount");
const queueMetric = document.querySelector("#queueMetric");
const revenueMetric = document.querySelector("#revenueMetric");
const bayMetric = document.querySelector("#bayMetric");
const vipMetric = document.querySelector("#vipMetric");
const revenueNote = document.querySelector("#revenueNote");
const queueNote = document.querySelector("#queueNote");
const bayNote = document.querySelector("#bayNote");
const vipNote = document.querySelector("#vipNote");
const searchInput = document.querySelector("#searchInput");
const intakeForm = document.querySelector("#intakeForm");
const bookingCancelForm = document.querySelector("#bookingCancelForm");
const bookingCancelFeedback = document.querySelector("#bookingCancelFeedback");
const entryCustomerFeedback = document.querySelector("#entryCustomerFeedback");
const intakeCustomerFeedback = document.querySelector("#intakeCustomerFeedback");
const recoveryForms = document.querySelectorAll("[data-recovery-method]");
const staffList = document.querySelector("#staffList");
const staffForm = document.querySelector("#staffForm");
const staffCountPill = document.querySelector("#staffCountPill");
const nextButton = document.querySelector("#nextButton");
const focusAdd = document.querySelector("#focusAdd");
const menuButton = document.querySelector(".menu-button");
const entryForm = document.querySelector("#entryForm");
const appShell = document.querySelector(".app-shell");
const brandSkip = document.querySelector("#brandSkip");
const brandBack = document.querySelector("#brandBack");
const pageEyebrow = document.querySelector("#pageEyebrow");
const pageTitle = document.querySelector("#pageTitle");
const priceBoard = document.querySelector("#priceBoard");
const entryPricePreview = document.querySelector("#entryPricePreview");
const pageLinks = document.querySelectorAll("[data-page-link]");
const cashRangeButtons = document.querySelector("#cashRangeButtons");
const financeStats = document.querySelector("#financeStats");
const paymentBreakdown = document.querySelector("#paymentBreakdown");
const financeBars = document.querySelector("#financeBars");
const cashArchiveDate = document.querySelector("#cashArchiveDate");
const cashArchiveSummary = document.querySelector("#cashArchiveSummary");
const cashArchiveRows = document.querySelector("#cashArchiveRows");
const cashArchiveEmpty = document.querySelector("#cashArchiveEmpty");
const archivePreviousDay = document.querySelector("#archivePreviousDay");
const archiveNextDay = document.querySelector("#archiveNextDay");
const payrollRangeButtons = document.querySelector("#payrollRangeButtons");
const payrollSummary = document.querySelector("#payrollSummary");
const payrollRows = document.querySelector("#payrollRows");
const payrollEmpty = document.querySelector("#payrollEmpty");
const dashboardSettingsForm = document.querySelector("#dashboardSettingsForm");
const generalSettingsForm = document.querySelector("#generalSettingsForm");
const priceSettingsForm = document.querySelector("#priceSettingsForm");
const adminPriceGrid = document.querySelector("#adminPriceGrid");
const shopAddForm = document.querySelector("#shopAddForm");
const shopSettingsForm = document.querySelector("#shopSettingsForm");
const adminShopList = document.querySelector("#adminShopList");
const adminShopCount = document.querySelector("#adminShopCount");
const adminCollapsePanels = document.querySelectorAll("[data-admin-collapse]");
const adminCollapseAllButton = document.querySelector("#adminCollapseAll");
const adminExpandAllButton = document.querySelector("#adminExpandAll");
const baySettingsForm = document.querySelector("#baySettingsForm");
const adminBayList = document.querySelector("#adminBayList");
const adminBayCount = document.querySelector("#adminBayCount");
const shiftLabel = document.querySelector("#shiftLabel");
const shiftTime = document.querySelector("#shiftTime");
const authScreen = document.querySelector("#authScreen");
const entryScreen = document.querySelector("#entryScreen");
const accountLoginForm = document.querySelector("#accountLoginForm");
const accountSignupForm = document.querySelector("#accountSignupForm");
const accountFeedback = document.querySelector("#accountFeedback");
const signupModal = document.querySelector("#signupModal");
const openSignupButton = document.querySelector("#openSignupButton");
const closeSignupButton = document.querySelector("#closeSignupButton");
const accountChip = document.querySelector("#accountChip");
const activeAccountName = document.querySelector("#activeAccountName");
const logoutButton = document.querySelector("#logoutButton");
const themeToggle = document.querySelector("#themeToggle");
const themeToggleText = document.querySelector("#themeToggleText");
const accountApprovalPanel = document.querySelector("#accountApprovalPanel");
const accountRequestCount = document.querySelector("#accountRequestCount");
const accountApprovalNotice = document.querySelector("#accountApprovalNotice");
const accountRequestList = document.querySelector("#accountRequestList");
let selectedCashRange = "sevenDays";
let selectedPayrollRange = "today";
let selectedArchiveDate = getDateKey(0);

const defaultDashboardSettings = {
  revenue: 0,
  revenueNote: "Бодит дата ороогүй",
  queueCount: queue.length,
  queueNote: "Дараалал хоосон",
  freeBays: 0,
  totalBays: 0,
  bayNote: "Байр бүртгээгүй",
  vipCount: 0,
  vipNote: "VIP захиалга алга",
};

const defaultStaffMembers = [];

const defaultGeneralSettings = {
  shiftLabel: "Өнөөдрийн ээлж",
  shiftStart: "",
  shiftEnd: "",
};

let dashboardSettings = cloneValue(defaultDashboardSettings);
let staffMembers = cloneValue(defaultStaffMembers);
let cashArchive = createDefaultCashArchive();
let generalSettings = cloneValue(defaultGeneralSettings);
const accountApproverUsername = "95723051";
const accountApprovalSecondMs = 1000;
const accountApprovalMinuteMs = 60 * accountApprovalSecondMs;
const accountApprovalDayMs = 24 * 60 * 60 * 1000;
let accounts = normalizeAccounts(loadJson("cwAccounts", []));
let accountRequests = normalizeAccountRequests(loadJson("cwAccountRequests", []));
let activeAccountId = localStorage.getItem("cwActiveAccountId") || "";
let activeTheme = localStorage.getItem("cwTheme") === "dark" ? "dark" : "light";

const pageCopy = {
  dashboard: { eyebrow: "Дотоод ажиллагаа", title: "Өнөөдрийн ажлын самбар" },
  bays: { eyebrow: "Байр", title: "Угаалгын байрны төлөв" },
  finance: { eyebrow: "Касс", title: "Төлбөр ба хаалт" },
  payroll: { eyebrow: "Цалин", title: "Ажилтны цалингийн бодолт" },
  admin: { eyebrow: "Удирдлага", title: "Тохиргоо ба мэдээллийн удирдлага" },
};

function formatMoney(amount) {
  return `₮ ${formatter.format(amount)}`;
}

function getPaymentMethod(payment) {
  return archivePayments.includes(payment) ? payment : "Карт";
}

function getPaymentClass(payment) {
  const method = getPaymentMethod(payment);
  if (method === "Бэлэн") return "payment-cash";
  if (method === "Данс") return "payment-transfer";
  return "payment-card";
}

function loadJson(key, fallback) {
  try {
    const saved = JSON.parse(localStorage.getItem(key));
    if (!saved) return cloneValue(fallback);
    return Array.isArray(fallback) ? saved : { ...fallback, ...saved };
  } catch {
    return cloneValue(fallback);
  }
}

function cloneValue(value) {
  if (value && typeof value === "object") {
    return JSON.parse(JSON.stringify(value));
  }
  return value;
}

const accountDataVersion = "account-data-v1";
const accountDataMigrationKey = "cwAccountDataMigrated";
const legacyAccountDataKeys = [
  "cwServicePrices",
  "cwCustomerProfiles",
  "cwQueue",
  "cwBays",
  "cwCompletedBayCars",
  "cwDashboardSettings",
  "cwStaffMembers",
  "cwCashArchive",
  "cwShopProducts",
  "cwGeneralSettings",
];

function getAccountDataKey(accountId = activeAccountId) {
  return accountId ? `cwAccountData:${accountId}` : "";
}

function readStoredJson(key) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch {
    return null;
  }
}

function normalizeServicePrices(items) {
  const savedItems = Array.isArray(items) ? items : [];

  return defaultServicePrices.map((defaultService) => {
    const savedService = savedItems.find((item) => item?.key === defaultService.key) || {};
    const prices = {};

    vehicleTypes.forEach((vehicle) => {
      const defaultPrice = defaultService.prices[vehicle.key] || { amount: 0, label: "0" };
      const savedPrice = savedService.prices?.[vehicle.key] || {};
      const amount = Math.max(0, Number(savedPrice.amount ?? defaultPrice.amount) || 0);
      prices[vehicle.key] = {
        amount,
        label: String(savedPrice.label || defaultPrice.label || formatter.format(amount)),
      };
    });

    return {
      key: defaultService.key,
      label: String(savedService.label || defaultService.label),
      prices,
    };
  });
}

function getDefaultAccountData() {
  return {
    dataVersion: accountDataVersion,
    servicePrices: cloneValue(defaultServicePrices),
    customerProfiles: cloneValue(defaultCustomerProfiles),
    shopProducts: normalizeShopProducts(defaultShopProducts),
    queue: cloneValue(defaultQueue),
    bays: cloneValue(defaultBays),
    completedBayCars: [],
    dashboardSettings: { ...cloneValue(defaultDashboardSettings), queueCount: 0 },
    staffMembers: cloneValue(defaultStaffMembers),
    cashArchive: createDefaultCashArchive(),
    generalSettings: cloneValue(defaultGeneralSettings),
  };
}

function getLegacyAccountData() {
  const hasLegacyData = legacyAccountDataKeys.some((key) => localStorage.getItem(key) !== null);
  if (!hasLegacyData) return null;

  return {
    dataVersion: accountDataVersion,
    servicePrices: loadJson("cwServicePrices", defaultServicePrices),
    customerProfiles: loadJson("cwCustomerProfiles", defaultCustomerProfiles),
    shopProducts: loadJson("cwShopProducts", defaultShopProducts),
    queue: loadJson("cwQueue", defaultQueue),
    bays: loadJson("cwBays", defaultBays),
    completedBayCars: loadJson("cwCompletedBayCars", []),
    dashboardSettings: loadJson("cwDashboardSettings", defaultDashboardSettings),
    staffMembers: loadJson("cwStaffMembers", defaultStaffMembers),
    cashArchive: loadJson("cwCashArchive", createDefaultCashArchive()),
    generalSettings: loadJson("cwGeneralSettings", defaultGeneralSettings),
  };
}

function buildAccountData() {
  return {
    dataVersion: accountDataVersion,
    servicePrices,
    customerProfiles,
    shopProducts,
    queue,
    bays,
    completedBayCars,
    dashboardSettings,
    staffMembers,
    cashArchive,
    generalSettings,
  };
}

function applyAccountData(savedData = {}) {
  const defaults = getDefaultAccountData();
  const data = { ...defaults, ...savedData };

  servicePrices = normalizeServicePrices(data.servicePrices);
  customerProfiles = data.customerProfiles && typeof data.customerProfiles === "object" && !Array.isArray(data.customerProfiles)
    ? cloneValue(data.customerProfiles)
    : cloneValue(defaultCustomerProfiles);
  shopProducts = normalizeShopProducts(data.shopProducts);
  queue = normalizeQueueItems(Array.isArray(data.queue) ? data.queue : []);
  bays = Array.isArray(data.bays) ? cloneValue(data.bays) : cloneValue(defaultBays);
  completedBayCars = Array.isArray(data.completedBayCars) ? cloneValue(data.completedBayCars) : [];
  dashboardSettings = { ...cloneValue(defaultDashboardSettings), ...(data.dashboardSettings || {}), queueCount: queue.length };
  staffMembers = Array.isArray(data.staffMembers) ? cloneValue(data.staffMembers) : cloneValue(defaultStaffMembers);
  cashArchive = data.cashArchive && typeof data.cashArchive === "object" && !Array.isArray(data.cashArchive)
    ? cloneValue(data.cashArchive)
    : createDefaultCashArchive();
  generalSettings = { ...cloneValue(defaultGeneralSettings), ...(data.generalSettings || {}) };

  activeDashboardQueueId = "";
  activeDashboardShopId = "";
  activeDashboardPaymentId = "";
  selectedCashRange = "sevenDays";
  selectedPayrollRange = "today";
  selectedArchiveDate = getDateKey(0);
}

function loadAccountData(accountId = activeAccountId) {
  let savedData = null;
  const key = getAccountDataKey(accountId);

  if (key) {
    savedData = readStoredJson(key);
  }

  if (!savedData && accountId && localStorage.getItem(accountDataMigrationKey) !== accountDataVersion) {
    savedData = getLegacyAccountData();
    if (savedData) localStorage.setItem(accountDataMigrationKey, accountDataVersion);
  }

  applyAccountData(savedData || getDefaultAccountData());
  saveAccountData();
}

function saveAccountData() {
  const key = getAccountDataKey();
  if (!key) return;
  localStorage.setItem(key, JSON.stringify(buildAccountData()));
}

function refreshAccountUi() {
  populatePriceControls();
  renderPriceBoard();
  updateFormPrice(entryForm);
  updateFormPrice(intakeForm);
  renderAll();
  renderActiveAccount();
}

function saveDashboardSettings() {
  saveAccountData();
}

function saveStaffMembers() {
  saveAccountData();
}

function saveCashArchive() {
  saveAccountData();
}

function saveQueue() {
  saveAccountData();
}

function saveCustomerProfiles() {
  saveAccountData();
}

function saveServicePrices() {
  saveAccountData();
}

function saveShopProducts() {
  saveAccountData();
}

function saveBays() {
  saveAccountData();
}

function saveCompletedBayCars() {
  saveAccountData();
}

function saveGeneralSettings() {
  saveAccountData();
}

function saveAccounts() {
  localStorage.setItem("cwAccounts", JSON.stringify(accounts));
}

function saveAccountRequests() {
  localStorage.setItem("cwAccountRequests", JSON.stringify(accountRequests));
}

function saveActiveAccount() {
  if (activeAccountId) {
    localStorage.setItem("cwActiveAccountId", activeAccountId);
  } else {
    localStorage.removeItem("cwActiveAccountId");
  }
}

function applyTheme(theme = activeTheme) {
  activeTheme = theme === "dark" ? "dark" : "light";
  document.body.dataset.theme = activeTheme;

  if (themeToggle) {
    const isDark = activeTheme === "dark";
    const icon = themeToggle.querySelector(".theme-toggle-icon");
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.setAttribute("aria-label", isDark ? "Өдрийн горим асаах" : "Шөнийн горим асаах");
    if (icon) icon.textContent = isDark ? "☀️" : "🌙";
    if (themeToggleText) themeToggleText.textContent = isDark ? "Өдөр" : "Шөнө";
  }
}

function toggleTheme() {
  applyTheme(activeTheme === "dark" ? "light" : "dark");
  localStorage.setItem("cwTheme", activeTheme);
}

function createAccountId() {
  return `account-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function normalizeAccountUsername(value) {
  return String(value || "").trim().toLowerCase();
}

function normalizeAccounts(items) {
  return (Array.isArray(items) ? items : [])
    .map((account, index) => ({
      id: String(account.id || `account-${index}`),
      name: String(account.name || account.username || "Хэрэглэгч").trim(),
      username: normalizeAccountUsername(account.username),
      password: String(account.password || ""),
      createdAt: Number(account.createdAt) || Date.now(),
      approvedAt: Number(account.approvedAt) || Number(account.createdAt) || Date.now(),
      approvedBy: String(account.approvedBy || ""),
      expiresAt: normalizeAccountUsername(account.username) === accountApproverUsername ? 0 : Number(account.expiresAt) || 0,
    }))
    .filter((account) => account.username && account.password);
}

function createAccountRequestId() {
  return `account-request-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function normalizeAccountRequests(items) {
  const validStatuses = new Set(["pending", "approved", "rejected", "duplicate"]);

  return (Array.isArray(items) ? items : [])
    .map((request, index) => {
      const status = String(request.status || "pending");

      return {
        id: String(request.id || `account-request-${index}`),
        name: String(request.name || request.username || "Хэрэглэгч").trim(),
        username: normalizeAccountUsername(request.username),
        password: String(request.password || ""),
        createdAt: Number(request.createdAt) || Date.now(),
        status: validStatuses.has(status) ? status : "pending",
        kind: String(request.kind || "new"),
        accountId: String(request.accountId || ""),
        durationDays: Number(request.durationDays) || 0,
        durationMinutes: Number(request.durationMinutes) || 0,
        durationSeconds: Number(request.durationSeconds) || 0,
        durationMs: Number(request.durationMs) || 0,
        expiresAt: Number(request.expiresAt) || 0,
        approvedAt: Number(request.approvedAt) || 0,
        approvedBy: String(request.approvedBy || ""),
        rejectedAt: Number(request.rejectedAt) || 0,
        rejectedBy: String(request.rejectedBy || ""),
      };
    })
    .filter((request) => request.username && request.password);
}

function getPendingAccountRequests() {
  return accountRequests.filter((request) => request.status === "pending");
}

function isApproverAccount(account = getActiveAccount()) {
  return account?.username === accountApproverUsername;
}

function hasPendingAccountRequest(username) {
  return getPendingAccountRequests().some((request) => request.username === username);
}

function normalizeDurationNumber(value, fallback = 0) {
  return Math.max(0, Math.floor(Number(value) || fallback));
}

function normalizeApprovalDurationParts(duration = {}) {
  const parts = {
    days: Math.min(3650, normalizeDurationNumber(duration.days)),
    minutes: Math.min(5256000, normalizeDurationNumber(duration.minutes)),
    seconds: Math.min(315360000, normalizeDurationNumber(duration.seconds)),
  };

  let totalMs = (parts.days * accountApprovalDayMs)
    + (parts.minutes * accountApprovalMinuteMs)
    + (parts.seconds * accountApprovalSecondMs);

  if (!totalMs) {
    parts.seconds = 1;
    totalMs = accountApprovalSecondMs;
  }

  return { ...parts, totalMs };
}

function getApprovalExpiresAt(duration = {}) {
  return Date.now() + normalizeApprovalDurationParts(duration).totalMs;
}

function formatApprovalDuration(duration = {}) {
  const parts = normalizeApprovalDurationParts(duration);
  const labels = [];

  if (parts.days) labels.push(`${parts.days} өдөр`);
  if (parts.minutes) labels.push(`${parts.minutes} минут`);
  if (parts.seconds) labels.push(`${parts.seconds} секунд`);

  return labels.join(" ") || "1 секунд";
}

function formatAccountExpiry(expiresAt) {
  const timestamp = Number(expiresAt) || 0;
  if (!timestamp) return "хугацаагүй";

  return new Date(timestamp).toLocaleString("mn-MN", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

function isAccountExpired(account) {
  if (!account || isApproverAccount(account)) return false;
  const expiresAt = Number(account.expiresAt) || 0;
  return Boolean(expiresAt && Date.now() > expiresAt);
}

function createPendingAccountRequest({ name, username, password, kind = "new", accountId = "" }) {
  const request = {
    id: createAccountRequestId(),
    name,
    username,
    password,
    createdAt: Date.now(),
    status: "pending",
    kind,
    accountId,
    durationDays: 0,
    durationMinutes: 0,
    durationSeconds: 0,
    durationMs: 0,
    expiresAt: 0,
    approvedAt: 0,
    approvedBy: "",
    rejectedAt: 0,
    rejectedBy: "",
  };

  accountRequests.unshift(request);
  saveAccountRequests();
  return request;
}

function requestAccountRenewal(account) {
  if (!account || isApproverAccount(account) || hasPendingAccountRequest(account.username)) return;

  createPendingAccountRequest({
    name: account.name,
    username: account.username,
    password: account.password,
    kind: "renew",
    accountId: account.id,
  });
}

function setAccountApprovalNotice(message = "", tone = "") {
  if (!accountApprovalNotice) return;
  accountApprovalNotice.className = `approval-notice ${tone}`.trim();
  accountApprovalNotice.textContent = message;
}

function approveAccountRequest(requestId, duration = { days: 0, minutes: 30, seconds: 0 }) {
  if (!isApproverAccount()) return;

  const request = accountRequests.find((item) => item.id === requestId && item.status === "pending");
  const approvedDuration = normalizeApprovalDurationParts(duration);
  const expiresAt = Date.now() + approvedDuration.totalMs;
  if (!request) {
    setAccountApprovalNotice("Энэ хүсэлт олдсонгүй эсвэл аль хэдийн шийдэгдсэн байна.", "error");
    renderAccountRequests();
    return;
  }

  const existingAccount = accounts.find((account) => account.username === request.username);
  const canRenewExisting = existingAccount && (existingAccount.id === request.accountId || isAccountExpired(existingAccount));

  if (existingAccount && !canRenewExisting) {
    request.status = "duplicate";
    request.rejectedAt = Date.now();
    request.rejectedBy = activeAccountId;
    saveAccountRequests();
    setAccountApprovalNotice("Энэ нэвтрэх нэрээр account аль хэдийн байна.", "error");
    renderAccountRequests();
    return;
  }

  if (existingAccount) {
    existingAccount.password = request.password || existingAccount.password;
    existingAccount.approvedAt = Date.now();
    existingAccount.approvedBy = activeAccountId;
    existingAccount.expiresAt = expiresAt;
  } else {
    accounts.unshift({
      id: createAccountId(),
      name: request.name,
      username: request.username,
      password: request.password,
      createdAt: Date.now(),
      approvedAt: Date.now(),
      approvedBy: activeAccountId,
      expiresAt,
    });
  }

  request.status = "approved";
  request.approvedAt = Date.now();
  request.approvedBy = activeAccountId;
  request.durationDays = approvedDuration.days;
  request.durationMinutes = approvedDuration.minutes;
  request.durationSeconds = approvedDuration.seconds;
  request.durationMs = approvedDuration.totalMs;
  request.expiresAt = expiresAt;
  saveAccounts();
  saveAccountRequests();
  setAccountApprovalNotice(`${request.name} account ${formatApprovalDuration(approvedDuration)} буюу ${formatAccountExpiry(expiresAt)} хүртэл зөвшөөрөгдлөө.`, "success");
  renderAccountRequests();
}

function rejectAccountRequest(requestId) {
  if (!isApproverAccount()) return;

  const request = accountRequests.find((item) => item.id === requestId && item.status === "pending");
  if (!request) {
    setAccountApprovalNotice("Энэ хүсэлт олдсонгүй эсвэл аль хэдийн шийдэгдсэн байна.", "error");
    renderAccountRequests();
    return;
  }

  request.status = "rejected";
  request.rejectedAt = Date.now();
  request.rejectedBy = activeAccountId;
  saveAccountRequests();
  setAccountApprovalNotice(`${request.name} хүсэлт татгалзагдлаа.`, "error");
  renderAccountRequests();
}

function renderAccountRequests() {
  if (!accountApprovalPanel || !accountRequestList || !accountRequestCount) return;

  const canApprove = isApproverAccount();
  accountApprovalPanel.hidden = !canApprove;
  if (!canApprove) {
    accountRequestList.innerHTML = "";
    return;
  }

  const pendingRequests = getPendingAccountRequests();
  accountRequestCount.textContent = `${pendingRequests.length} хүсэлт`;

  if (!pendingRequests.length) {
    accountRequestList.innerHTML = `<p class="account-request-empty">Одоогоор хүлээгдэж буй account хүсэлт алга.</p>`;
    return;
  }

  accountRequestList.innerHTML = pendingRequests
    .map((request) => {
      const createdAt = new Date(request.createdAt).toLocaleString("mn-MN", {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });

      return `
        <article class="account-request-card" data-account-request-id="${escapeHtml(request.id)}">
          <div>
            <strong>${escapeHtml(request.name)}</strong>
            <span>${escapeHtml(request.username)}</span>
            <small>${escapeHtml(createdAt)} илгээсэн · ${request.kind === "renew" ? "сунгах хүсэлт" : "шинэ account"}</small>
          </div>
          <div class="account-request-actions">
            <label class="approval-duration-field">
              <span>Хугацаа</span>
              <input type="number" min="0" max="3650" step="1" value="0" data-approval-days="${escapeHtml(request.id)}" aria-label="Зөвшөөрөх өдөр" />
              <small>өдөр</small>
              <input type="number" min="0" max="5256000" step="1" value="30" data-approval-minutes="${escapeHtml(request.id)}" aria-label="Зөвшөөрөх минут" />
              <small>мин</small>
              <input type="number" min="0" max="315360000" step="1" value="0" data-approval-seconds="${escapeHtml(request.id)}" aria-label="Зөвшөөрөх секунд" />
              <small>сек</small>
            </label>
            <button class="primary-button compact" type="button" data-approve-account="${escapeHtml(request.id)}">Зөвшөөрөх</button>
            <button class="ghost-button compact danger" type="button" data-reject-account="${escapeHtml(request.id)}">Татгалзах</button>
          </div>
        </article>
      `;
    })
    .join("");
}

function getActiveAccount() {
  return accounts.find((account) => account.id === activeAccountId) || null;
}

function setAccountFeedback(message, tone = "") {
  if (!accountFeedback) return;
  accountFeedback.className = `auth-feedback ${tone}`.trim();
  accountFeedback.textContent = message;
}

function openSignupModal() {
  signupModal?.classList.add("open");
  signupModal?.setAttribute("aria-hidden", "false");
  accountSignupForm?.elements.name?.focus();
}

function closeSignupModal() {
  signupModal?.classList.remove("open");
  signupModal?.setAttribute("aria-hidden", "true");
}

function renderActiveAccount() {
  const account = getActiveAccount();
  if (activeAccountName) activeAccountName.textContent = account ? account.name : "-";
  if (accountChip) accountChip.hidden = !account;
}

function showAuth(message = "", tone = "success") {
  if (!getActiveAccount()) {
    activeAccountId = "";
    saveActiveAccount();
  }

  document.body.classList.add("auth-mode");
  document.body.classList.remove("entry-mode");
  document.body.classList.remove("dashboard-mode");
  document.body.classList.remove("menu-open");
  authScreen?.setAttribute("aria-hidden", "false");
  entryScreen?.setAttribute("aria-hidden", "true");
  appShell?.setAttribute("aria-hidden", "true");
  history.replaceState(null, "", window.location.pathname);
  renderActiveAccount();
  if (message) setAccountFeedback(message, tone);
  window.scrollTo(0, 0);
}

function loginAccount(account, message = "Амжилттай нэвтэрлээ.") {
  activeAccountId = account.id;
  saveActiveAccount();
  loadAccountData();
  refreshAccountUi();
  setAccountFeedback(message, "success");
  closeSignupModal();
  if (isApproverAccount(account)) {
    showDashboard("admin");
  } else {
    showEntry();
  }
}

function logoutAccount() {
  saveAccountData();
  activeAccountId = "";
  saveActiveAccount();
  accountLoginForm?.reset();
  accountSignupForm?.reset();
  closeSignupModal();
  showAuth("Та аккаунтаасаа гарлаа.");
}

function enforceActiveAccountExpiry() {
  const account = getActiveAccount();
  if (!account || !isAccountExpired(account)) return;

  saveAccountData();
  requestAccountRenewal(account);
  activeAccountId = "";
  saveActiveAccount();
  accountLoginForm?.reset();
  accountSignupForm?.reset();
  closeSignupModal();
  renderAccountRequests();
  showAuth("Энэ account-ийн зөвшөөрлийн хугацаа дууссан байна. 95723051 account дахин зөвшөөрсний дараа нэвтэрнэ.", "error");
}

function getAdminCollapseKey(panel, index) {
  return panel.dataset.adminCollapseKey || `admin-${index}`;
}

function saveAdminCollapseState() {
  if (!adminCollapsePanels.length) return;

  const state = {};
  adminCollapsePanels.forEach((panel, index) => {
    state[getAdminCollapseKey(panel, index)] = panel.open;
  });
  localStorage.setItem("cwAdminCollapseState", JSON.stringify(state));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function createBookingId() {
  return `booking-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function createShopProductId() {
  return `shop-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function normalizePhone(value) {
  return String(value || "").replace(/\D/g, "").slice(0, 8);
}

function normalizePlate(value) {
  return String(value || "").trim().toUpperCase();
}

function maskPhone(phone) {
  return `•••• ${String(phone).slice(-4)}`;
}

function setFormFeedback(output, message, tone = "") {
  output.className = `customer-feedback ${tone}`.trim();
  output.textContent = message;
}

function registerOrVerifyCustomer(data, plate, output) {
  const phone = normalizePhone(data.get("phone"));
  const pin = String(data.get("pin") || "").trim();
  const recoveryWord = String(data.get("recoveryWord") || "").trim().toLowerCase();

  if (!/^\d{8}$/.test(phone) || !/^\d{4}$/.test(pin)) {
    setFormFeedback(output, "Утас 8 оронтой, устгах код яг 4 оронтой тоо байна.", "error");
    return "";
  }

  const existing = customerProfiles[phone];
  if (existing && existing.pin !== pin) {
    setFormFeedback(output, "Энэ утасны устгах код буруу байна.", "error");
    return "";
  }

  if (!existing && !recoveryWord) {
    setFormFeedback(output, "Шинэ хэрэглэгч сэргээх үгээ заавал оруулна.", "error");
    return "";
  }

  if (!existing) {
    customerProfiles[phone] = { phone, pin, recoveryWord, plates: [plate] };
  } else {
    const plates = Array.isArray(existing.plates) ? existing.plates : [];
    if (!plates.includes(plate)) plates.push(plate);
    existing.plates = plates;
    if (recoveryWord) existing.recoveryWord = recoveryWord;
  }

  saveCustomerProfiles();
  setFormFeedback(output, existing ? "Хэрэглэгч баталгаажлаа." : "Шинэ хэрэглэгч бүртгэгдлээ.", "success");
  return phone;
}

function formatWaitDuration(milliseconds) {
  const totalSeconds = Math.max(0, Math.floor(milliseconds / 1000));
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

function getQueueTimerText(item) {
  const stopped = Number(item.acceptedAt) || 0;
  const elapsed = (stopped || Date.now()) - Number(item.createdAt);
  return `${stopped ? "Хүлээж авсан" : "Хүлээж буй"} · ${formatWaitDuration(elapsed)}`;
}

function getQueueShopItems(item) {
  return Array.isArray(item.shopItems) ? item.shopItems : [];
}

function getQueueShopTotal(item) {
  return getQueueShopItems(item).reduce((sum, product) => {
    const price = Math.max(0, Number(product.price) || 0);
    const qty = Math.max(1, Number(product.qty) || 1);
    return sum + price * qty;
  }, 0);
}

function getQueueItemTotal(item) {
  return (Number(item.price) || 0) + getQueueShopTotal(item);
}

function getQueueShopCount(item) {
  return getQueueShopItems(item).reduce((sum, product) => sum + Math.max(1, Number(product.qty) || 1), 0);
}

function getQueueShopSummary(item) {
  const total = getQueueShopTotal(item);
  if (!total) return "";
  return ` · Дэлгүүр ${getQueueShopCount(item)}ш ${formatMoney(total)}`;
}

function getQueueShopServiceSummary(item) {
  const items = getQueueShopItems(item);
  if (!items.length) return "";
  return ` + Дэлгүүр: ${items
    .map((product) => `${product.emoji || "💧"} ${product.name} x${Math.max(1, Number(product.qty) || 1)}`)
    .join(", ")}`;
}

function renderQueuePriceBreakdown(item) {
  const washPrice = Number(item.price) || 0;
  const shopTotal = getQueueShopTotal(item);
  const itemTotal = getQueueItemTotal(item);

  return `
    <div class="dashboard-payment-summary">
      <article>
        <span>Угаалгын үнэ</span>
        <strong>${formatMoney(washPrice)}</strong>
      </article>
      <article>
        <span>Дэлгүүрийн дүн</span>
        <strong>${formatMoney(shopTotal)}</strong>
      </article>
      <article class="total">
        <span>Нийт төлбөр</span>
        <strong>${formatMoney(itemTotal)}</strong>
      </article>
    </div>
  `;
}

function renderQueuePaymentPanel(item) {
  const paymentMethods = ["Бэлэн", "Карт", "Данс"];
  const selectedPayment = item.payment || "";

  return `
    <div class="dashboard-payment-panel">
      <div class="dashboard-payment-methods" role="group" aria-label="Төлбөрийн хэлбэр">
        ${paymentMethods
          .map(
            (method) => `
              <button class="dashboard-payment-method ${selectedPayment === method ? "selected" : ""}" type="button" data-select-payment="${method}" aria-pressed="${selectedPayment === method}">
                ${method}
              </button>
            `,
          )
          .join("")}
      </div>
      <button class="dashboard-complete-button dashboard-payment-complete" type="button" data-complete-booking="${escapeHtml(item.bookingId)}">Дууслаа</button>
    </div>
  `;
}

function renderQueueShopPanel(item) {
  const selectedItems = getQueueShopItems(item);
  const selectedRows = selectedItems.length
    ? `<div class="dashboard-shop-selected">
        ${selectedItems
          .map(
            (product) => `
              <div class="dashboard-shop-line">
                <span class="dashboard-shop-product-emoji" aria-hidden="true">${escapeHtml(product.emoji || "💧")}</span>
                <strong>${escapeHtml(product.name || "Бүтээгдэхүүн")}</strong>
                <small>${Math.max(1, Number(product.qty) || 1)}ш · ${formatMoney((Number(product.price) || 0) * Math.max(1, Number(product.qty) || 1))}</small>
                <button type="button" data-remove-shop-line="${escapeHtml(product.id)}">Хасах</button>
              </div>
            `,
          )
          .join("")}
      </div>`
    : `<p class="dashboard-shop-empty">Одоогоор дэлгүүрийн бараа нэмээгүй байна.</p>`;

  if (!shopProducts.length) {
    return `
      <div class="dashboard-shop-panel">
        <p class="dashboard-shop-empty">💧🥤 Дэлгүүрийн бүтээгдэхүүн тохиргоонд нэмээгүй байна.</p>
        ${selectedRows}
      </div>
    `;
  }

  return `
    <div class="dashboard-shop-panel">
      <div class="dashboard-shop-products">
        ${shopProducts
          .map(
            (product) => `
              <button class="dashboard-shop-product" type="button" data-add-shop-product="${escapeHtml(product.id)}">
                <span class="dashboard-shop-product-emoji" aria-hidden="true">${escapeHtml(product.emoji)}</span>
                <span>
                  <strong>${escapeHtml(product.name)}</strong>
                  <small>${formatMoney(product.price)}</small>
                </span>
                <b>Нэмэх</b>
              </button>
            `,
          )
          .join("")}
      </div>
      ${selectedRows}
      <div class="dashboard-shop-total">
        <span>Дэлгүүрийн дүн</span>
        <strong>${formatMoney(getQueueShopTotal(item))}</strong>
      </div>
    </div>
  `;
}

function addShopProductToQueue(item, productId) {
  const product = shopProducts.find((shopProduct) => shopProduct.id === productId);
  if (!product) return;

  if (!Array.isArray(item.shopItems)) item.shopItems = [];
  const existing = item.shopItems.find((line) => line.productId === product.id);

  if (existing) {
    existing.qty = Math.max(1, Number(existing.qty) || 1) + 1;
  } else {
    item.shopItems.push({
      id: createShopProductId(),
      productId: product.id,
      emoji: product.emoji,
      name: product.name,
      price: Number(product.price) || 0,
      qty: 1,
    });
  }

  saveQueue();
  renderQueue();
  renderDashboardQueue();
}

function removeShopLineFromQueue(item, lineId) {
  if (!Array.isArray(item.shopItems)) return;

  const existing = item.shopItems.find((line) => line.id === lineId);
  if (!existing) return;

  const qty = Math.max(1, Number(existing.qty) || 1);
  if (qty > 1) {
    existing.qty = qty - 1;
  } else {
    item.shopItems = item.shopItems.filter((line) => line.id !== lineId);
  }

  saveQueue();
  renderQueue();
  renderDashboardQueue();
}

function acceptQueueItem(item) {
  if (!item.acceptedAt) {
    item.acceptedAt = Date.now();
  }
}

function updateQueueTimers() {
  document.querySelectorAll("[data-queue-timer]").forEach((timer) => {
    const item = queue.find((queueItem) => queueItem.bookingId === timer.dataset.queueTimer);
    if (!item) return;
    timer.textContent = getQueueTimerText(item);
    timer.classList.toggle("stopped", Boolean(item.acceptedAt));
  });
}

function getVehicle(key) {
  return vehicleTypes.find((type) => type.key === key) || vehicleTypes[0];
}

function getService(key) {
  return servicePrices.find((service) => service.key === key) || servicePrices[0];
}

function getPriceInfo(serviceKey, vehicleKey) {
  const service = getService(serviceKey);
  const vehicle = getVehicle(vehicleKey);
  return service.prices[vehicle.key] || { amount: 0, label: "0" };
}

function getPageFromHash() {
  const page = window.location.hash.replace("#", "");
  return pageCopy[page] ? page : "";
}

function setActivePage(page) {
  document.body.dataset.page = page;
  pageEyebrow.textContent = pageCopy[page].eyebrow;
  pageTitle.textContent = pageCopy[page].title;

  pageLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.pageLink === page);
  });
}

function showDashboard(page = "dashboard") {
  if (!getActiveAccount()) {
    showAuth();
    return;
  }

  const nextPage = pageCopy[page] ? page : "dashboard";
  document.body.classList.remove("auth-mode");
  document.body.classList.remove("entry-mode");
  document.body.classList.add("dashboard-mode");
  authScreen?.setAttribute("aria-hidden", "true");
  entryScreen?.setAttribute("aria-hidden", "true");
  appShell.setAttribute("aria-hidden", "false");
  renderActiveAccount();
  setActivePage(nextPage);
  history.replaceState(null, "", `${window.location.pathname}#${nextPage}`);
  window.scrollTo(0, 0);
}

function showEntry() {
  if (!getActiveAccount()) {
    showAuth();
    return;
  }

  document.body.classList.remove("auth-mode");
  document.body.classList.add("entry-mode");
  document.body.classList.remove("dashboard-mode");
  document.body.classList.remove("menu-open");
  authScreen?.setAttribute("aria-hidden", "true");
  entryScreen?.setAttribute("aria-hidden", "false");
  appShell.setAttribute("aria-hidden", "true");
  renderActiveAccount();
  setActivePage("dashboard");
  history.replaceState(null, "", window.location.pathname);
  window.scrollTo(0, 0);
}

function renderClock() {
  const now = new Date();
  document.querySelector("#currentTime").textContent = now.toLocaleTimeString("mn-MN", {
    hour: "2-digit",
    minute: "2-digit",
  });
  document.querySelector("#currentDate").textContent = now.toLocaleDateString("mn-MN", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

function renderMetrics() {
  revenueMetric.textContent = formatMoney(Number(dashboardSettings.revenue) || 0);
  revenueNote.textContent = dashboardSettings.revenueNote;
  queueMetric.textContent = `${Number(dashboardSettings.queueCount) || 0} машин`;
  queueNote.textContent = dashboardSettings.queueNote;
  bayMetric.textContent = `${Number(dashboardSettings.freeBays) || 0} / ${Number(dashboardSettings.totalBays) || 0}`;
  bayNote.textContent = dashboardSettings.bayNote;
  vipMetric.textContent = Number(dashboardSettings.vipCount) || 0;
  vipNote.textContent = dashboardSettings.vipNote;
}

function renderQueue() {
  if (!queueList) return;

  const query = searchInput.value.trim().toLowerCase();
  const items = queue.filter((item) => {
    return `${item.plate} ${item.vehicleType || ""} ${item.service} ${item.employee || ""} ${item.status}`.toLowerCase().includes(query);
  });

  queueList.innerHTML = "";

  if (!items.length) {
    const empty = document.createElement("div");
    empty.className = "queue-item";
    empty.innerHTML = `
      <span class="queue-rank">0</span>
      <div class="queue-copy">
        <strong>Илэрц алга</strong>
        <span>Хайлтаа өөрчлөөд дахин шалгана уу.</span>
      </div>
    `;
    queueList.append(empty);
    return;
  }

  items.forEach((item, index) => {
    const row = document.createElement("article");
    row.className = "queue-item";
    const typeLabel = item.vehicleType ? `${item.vehicleType} · ` : "";
    const employeeLabel = item.employee ? ` · ${item.employee}` : "";
    const itemTotal = getQueueItemTotal(item);
    const shopSummary = getQueueShopSummary(item);
    row.innerHTML = `
      <span class="queue-rank">${index + 1}</span>
      <div class="queue-copy">
        <div class="queue-title-row">
          <strong>${escapeHtml(item.plate)}</strong>
          <span class="queue-customer">Утас ${escapeHtml(maskPhone(item.customerPhone))}</span>
        </div>
        <span>${typeLabel}${item.service}${employeeLabel} · ${formatMoney(itemTotal)}${shopSummary} · ${item.eta}</span>
        <span class="queue-timer ${item.acceptedAt ? "stopped" : ""}" data-queue-timer="${escapeHtml(item.bookingId)}">${getQueueTimerText(item)}</span>
      </div>
      <div class="queue-actions">
        <select class="status-select" aria-label="${item.plate} төлөв">
          ${["Хүлээж байна", "Ажиллаж байна", "Захиалгатай"].map((status) => `<option ${status === item.status ? "selected" : ""}>${status}</option>`).join("")}
        </select>
        <button class="complete-button" type="button" aria-label="${item.plate} дуусгах">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 16.2-3.5-3.5L4.1 14.1 9 19 20.3 7.7 18.9 6.3 9 16.2Z" /></svg>
        </button>
      </div>
    `;

    row.querySelector(".status-select").addEventListener("change", (event) => {
      item.status = event.target.value;
      if (item.status === "Ажиллаж байна") {
        acceptQueueItem(item);
      }
      saveQueue();
      renderQueue();
      renderDashboardQueue();
    });

    row.querySelector(".complete-button").addEventListener("click", () => completeQueueItem(item));

    queueList.append(row);
  });
}

function renderDashboardQueue() {
  if (!dashboardQueueList) return;

  const query = searchInput.value.trim().toLowerCase();
  const items = queue.filter((item) => {
    return `${item.plate} ${item.vehicleType || ""} ${item.service} ${item.employee || ""} ${item.status}`.toLowerCase().includes(query);
  });

  dashboardQueueList.innerHTML = "";

  if (!items.length) {
    const empty = document.createElement("div");
    empty.className = "queue-item dashboard-queue-item";
    empty.innerHTML = `
      <span class="queue-rank">0</span>
      <div class="queue-copy">
        <strong>${query ? "Илэрц алга" : "Дараалал хоосон байна"}</strong>
        <span>${query ? "Хайлтаа өөрчлөөд дахин шалгана уу." : "Шинэ машин бүртгэхэд энд шууд харагдана."}</span>
      </div>
    `;
    dashboardQueueList.append(empty);
    return;
  }

  items.forEach((item, index) => {
    const row = document.createElement("article");
    const isActive = activeDashboardQueueId === item.bookingId;
    row.className = `queue-item dashboard-queue-item${isActive ? " active" : ""}`;
    row.dataset.bookingId = item.bookingId;
    row.tabIndex = 0;
    row.setAttribute("aria-expanded", String(isActive));
    row.setAttribute("aria-label", `${item.plate} дарааллын мэдээлэл`);
    const typeLabel = item.vehicleType ? `${item.vehicleType} · ` : "";
    const employeeLabel = item.employee ? ` · ${item.employee}` : "";
    const itemTotal = getQueueItemTotal(item);
    const shopSummary = getQueueShopSummary(item);
    row.innerHTML = `
      <span class="queue-rank">${index + 1}</span>
      <div class="queue-copy">
        <div class="queue-title-row">
          <strong>${escapeHtml(item.plate)}</strong>
          <span class="queue-customer">Утас ${escapeHtml(maskPhone(item.customerPhone))}</span>
        </div>
        <span>${typeLabel}${item.service}${employeeLabel} · ${formatMoney(itemTotal)}${shopSummary} · ${item.eta}</span>
        <span class="queue-timer ${item.acceptedAt ? "stopped" : ""}" data-queue-timer="${escapeHtml(item.bookingId)}">${getQueueTimerText(item)}</span>
      </div>
      <div class="dashboard-queue-meta">
        <span class="pill ${item.acceptedAt ? "green" : ""}">${escapeHtml(item.status)}</span>
      </div>
      ${
        isActive
          ? `<div class="dashboard-queue-details">
              ${renderQueuePriceBreakdown(item)}
              <button class="dashboard-shop-card" type="button" data-open-shop="${escapeHtml(item.bookingId)}" aria-expanded="${activeDashboardShopId === item.bookingId}" aria-label="Дэлгүүрийн хэсэг нээх">
                <span class="dashboard-shop-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M4 10h16l-1.2-5.5A2 2 0 0 0 16.9 3H7.1a2 2 0 0 0-1.9 1.5L4 10Zm2 2v8h12v-8h-2v6h-3v-5h-2v5H8v-6H6Zm-2 0a3 3 0 0 0 5 2.2A3 3 0 0 0 12 15a3 3 0 0 0 3-0.8A3 3 0 0 0 20 12v-1H4v1Z" /></svg>
                </span>
                <span>
                  <strong>Дэлгүүр</strong>
                  <small>${getQueueShopTotal(item) ? `${getQueueShopCount(item)}ш · ${formatMoney(getQueueShopTotal(item))}` : shopProducts.length ? `${shopProducts.length} бүтээгдэхүүн` : "Тохиргоонд нэмнэ"}</small>
                </span>
              </button>
              <button class="dashboard-payment-card" type="button" data-open-payment="${escapeHtml(item.bookingId)}" aria-expanded="${activeDashboardPaymentId === item.bookingId}" aria-label="Төлбөрийн хэсэг нээх">
                <span class="dashboard-payment-icon" aria-hidden="true">₮</span>
                <span>
                  <strong>Төлбөр</strong>
                  <small>${item.payment ? escapeHtml(item.payment) : "Бэлэн / Карт / Данс"}</small>
                </span>
              </button>
              ${activeDashboardShopId === item.bookingId ? renderQueueShopPanel(item) : ""}
              ${activeDashboardPaymentId === item.bookingId ? renderQueuePaymentPanel(item) : ""}
            </div>`
          : ""
      }
    `;

    row.addEventListener("click", (event) => {
      if (event.target.closest("button")) return;
      activeDashboardQueueId = isActive ? "" : item.bookingId;
      if (activeDashboardShopId !== activeDashboardQueueId) {
        activeDashboardShopId = "";
      }
      if (activeDashboardPaymentId !== activeDashboardQueueId) {
        activeDashboardPaymentId = "";
      }
      renderDashboardQueue();
    });

    row.addEventListener("keydown", (event) => {
      if (event.target.closest("button")) return;
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      activeDashboardQueueId = isActive ? "" : item.bookingId;
      if (activeDashboardShopId !== activeDashboardQueueId) {
        activeDashboardShopId = "";
      }
      if (activeDashboardPaymentId !== activeDashboardQueueId) {
        activeDashboardPaymentId = "";
      }
      renderDashboardQueue();
    });

    row.querySelector("[data-complete-booking]")?.addEventListener("click", (event) => {
      event.stopPropagation();
      completeQueueItem(item);
    });

    row.querySelector("[data-open-shop]")?.addEventListener("click", (event) => {
      event.stopPropagation();
      activeDashboardShopId = activeDashboardShopId === item.bookingId ? "" : item.bookingId;
      renderDashboardQueue();
    });

    row.querySelector("[data-open-payment]")?.addEventListener("click", (event) => {
      event.stopPropagation();
      activeDashboardPaymentId = activeDashboardPaymentId === item.bookingId ? "" : item.bookingId;
      renderDashboardQueue();
    });

    row.querySelectorAll("[data-select-payment]").forEach((button) => {
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        item.payment = button.dataset.selectPayment;
        activeDashboardPaymentId = item.bookingId;
        saveQueue();
        renderDashboardQueue();
      });
    });

    row.querySelectorAll("[data-add-shop-product]").forEach((button) => {
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        addShopProductToQueue(item, button.dataset.addShopProduct);
      });
    });

    row.querySelectorAll("[data-remove-shop-line]").forEach((button) => {
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        removeShopLineFromQueue(item, button.dataset.removeShopLine);
      });
    });

    dashboardQueueList.append(row);
  });
}

function renderBays() {
  bayGrid.innerHTML = "";

  bays.forEach((bay) => {
    const card = document.createElement("article");
    card.className = "bay-card";
    card.innerHTML = `
      <header>
        <strong>${bay.name}</strong>
        <span class="pill ${bay.progress === 0 ? "green" : bay.tone === "amber" ? "amber" : ""}">
          ${bay.progress === 0 ? "Чөлөөтэй" : `${bay.progress}%`}
        </span>
      </header>
      <span>${bay.vehicle}</span>
      <small>${bay.state}</small>
      <progress max="100" value="${bay.progress}"></progress>
    `;
    bayGrid.append(card);
  });
}

function renderCompletedBayCars() {
  if (!completedBayList || !completedBayEmpty || !completedBayCount) return;

  const items = completedBayCars.slice(0, 30);
  completedBayCount.textContent = `${completedBayCars.length} машин`;
  completedBayList.innerHTML = "";

  completedBayEmpty.hidden = items.length > 0;
  completedBayList.hidden = items.length === 0;

  items.forEach((item) => {
    const payment = getPaymentMethod(item.payment);
    const paymentClass = getPaymentClass(payment);
    const completedId = String(item.id || `${item.bookingId || item.plate}-${item.completedAt || item.time}`);
    const row = document.createElement("article");
    row.className = `completed-bay-row ${paymentClass}`;
    row.innerHTML = `
      <time datetime="${escapeHtml(item.completedAt || "")}">${escapeHtml(item.time || "--:--")}</time>
      <div>
        <strong>${escapeHtml(item.plate)}</strong>
        <span>${escapeHtml(item.service || "Үйлчилгээ")} · ${escapeHtml(item.employee || "Тодорхойгүй")}</span>
      </div>
      <div class="completed-bay-side">
        <span class="completed-payment-badge ${paymentClass}">${escapeHtml(payment)}</span>
        <small>${escapeHtml(item.dateLabel || "Өнөөдөр")}</small>
        <button class="completed-bay-delete" type="button" data-delete-completed-bay="${escapeHtml(completedId)}">Устгах</button>
      </div>
    `;
    completedBayList.append(row);
  });
}

function deleteCompletedBayCar(completedId) {
  const beforeCount = completedBayCars.length;
  completedBayCars = completedBayCars.filter((item) => {
    const itemId = String(item.id || `${item.bookingId || item.plate}-${item.completedAt || item.time}`);
    return itemId !== completedId;
  });

  if (completedBayCars.length === beforeCount) return;
  saveCompletedBayCars();
  renderCompletedBayCars();
}

function addCompletedBayCar(item, completedAt = new Date()) {
  const dateKey = [
    completedAt.getFullYear(),
    String(completedAt.getMonth() + 1).padStart(2, "0"),
    String(completedAt.getDate()).padStart(2, "0"),
  ].join("-");

  completedBayCars.unshift({
    id: `${dateKey}-${Date.now()}`,
    bookingId: item.bookingId,
    plate: item.plate,
    service: item.service,
    employee: item.employee || "Тодорхойгүй",
    payment: getPaymentMethod(item.payment),
    completedAt: completedAt.toISOString(),
    date: dateKey,
    dateLabel: completedAt.toLocaleDateString("mn-MN", { month: "short", day: "numeric" }),
    time: completedAt.toLocaleTimeString("mn-MN", { hour: "2-digit", minute: "2-digit", hour12: false }),
  });

  completedBayCars = completedBayCars.slice(0, 100);
  saveCompletedBayCars();
}

function renderStaff() {
  staffCountPill.textContent = `${staffMembers.length} хүн`;
  staffList.innerHTML = staffMembers
    .map((staff, index) => {
      return `
        <div class="staff-row" data-staff-index="${index}">
          <input class="staff-inline-input" data-staff-field="name" value="${escapeHtml(staff.name)}" aria-label="Ажилтны нэр" />
          <input class="staff-inline-input" data-staff-field="role" value="${escapeHtml(staff.role)}" aria-label="Үүрэг" />
          <button class="ghost-button staff-remove" type="button" data-remove-staff>Хасах</button>
        </div>
      `;
    })
    .join("");
  populateEmployeeControls();
}

function showAdminFeedback(form, message) {
  const output = form.querySelector(".admin-feedback");
  if (!output) return;
  output.textContent = message;
  output.className = "admin-feedback success";
}

function initAdminCollapses() {
  if (!adminCollapsePanels.length) return;

  const savedState = loadJson("cwAdminCollapseState", {});

  adminCollapsePanels.forEach((panel, index) => {
    const key = getAdminCollapseKey(panel, index);
    if (Object.prototype.hasOwnProperty.call(savedState, key)) {
      panel.open = Boolean(savedState[key]);
    }

    panel.addEventListener("toggle", saveAdminCollapseState);
  });
}

function setAdminCollapses(open) {
  adminCollapsePanels.forEach((panel) => {
    panel.open = open;
  });
  saveAdminCollapseState();
}

function syncAdminForms() {
  if (dashboardSettingsForm) {
    dashboardSettingsForm.elements.revenue.value = dashboardSettings.revenue;
    dashboardSettingsForm.elements.revenueNote.value = dashboardSettings.revenueNote;
    dashboardSettingsForm.elements.queueCount.value = dashboardSettings.queueCount;
    dashboardSettingsForm.elements.queueNote.value = dashboardSettings.queueNote;
    dashboardSettingsForm.elements.freeBays.value = dashboardSettings.freeBays;
    dashboardSettingsForm.elements.totalBays.value = dashboardSettings.totalBays;
    dashboardSettingsForm.elements.bayNote.value = dashboardSettings.bayNote;
    dashboardSettingsForm.elements.vipCount.value = dashboardSettings.vipCount;
    dashboardSettingsForm.elements.vipNote.value = dashboardSettings.vipNote;
  }

  if (generalSettingsForm) {
    generalSettingsForm.elements.shiftLabel.value = generalSettings.shiftLabel;
    generalSettingsForm.elements.shiftStart.value = generalSettings.shiftStart;
    generalSettingsForm.elements.shiftEnd.value = generalSettings.shiftEnd;
  }
}

function renderGeneralSettings() {
  shiftLabel.textContent = generalSettings.shiftLabel;
  shiftTime.textContent =
    generalSettings.shiftStart && generalSettings.shiftEnd
      ? `${generalSettings.shiftStart} - ${generalSettings.shiftEnd}`
      : "Цаг тохируулаагүй";
}

function renderAdminPriceGrid() {
  const rows = servicePrices
    .map((service) => {
      const priceInputs = vehicleTypes
        .map((type) => {
          const amount = Number(service.prices[type.key]?.amount) || 0;
          return `<td><input type="number" min="0" step="1000" value="${amount}" data-price-service="${escapeHtml(service.key)}" data-price-vehicle="${escapeHtml(type.key)}" aria-label="${escapeHtml(service.label)} ${escapeHtml(type.label)} үнэ" /></td>`;
        })
        .join("");
      return `
        <tr>
          <th scope="row"><input type="text" value="${escapeHtml(service.label)}" data-service-label="${escapeHtml(service.key)}" aria-label="Үйлчилгээний нэр" /></th>
          ${priceInputs}
        </tr>
      `;
    })
    .join("");

  adminPriceGrid.innerHTML = `
    <div class="price-table-wrap">
      <table class="price-table admin-price-table">
        <thead>
          <tr>
            <th scope="col">Үйлчилгээ</th>
            ${vehicleTypes.map((type) => `<th scope="col">${type.label}</th>`).join("")}
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  `;
}

function getShopEmojiOptions(selectedEmoji) {
  return shopProductEmojis
    .map((emoji) => `<option value="${emoji}" ${emoji === selectedEmoji ? "selected" : ""}>${emoji}</option>`)
    .join("");
}

function renderAdminShopProducts() {
  if (!adminShopList || !adminShopCount) return;

  adminShopCount.textContent = `${shopProducts.length} бүтээгдэхүүн`;

  if (!shopProducts.length) {
    adminShopList.innerHTML = `<p class="admin-shop-empty">💧🥤 Ус, ундаа эсвэл нэмэлт бүтээгдэхүүн нэмнэ үү.</p>`;
    return;
  }

  adminShopList.innerHTML = shopProducts
    .map(
      (product) => `
        <div class="admin-shop-row" data-shop-id="${escapeHtml(product.id)}">
          <select name="emoji" aria-label="${escapeHtml(product.name)} emoji">
            ${getShopEmojiOptions(product.emoji)}
          </select>
          <label>Нэр <input name="name" type="text" value="${escapeHtml(product.name)}" /></label>
          <label>Үнэ <input name="price" type="number" min="0" step="500" value="${Number(product.price) || 0}" /></label>
          <button class="ghost-button danger-button" type="button" data-remove-shop-product="${escapeHtml(product.id)}">Устгах</button>
        </div>
      `,
    )
    .join("");
}

function renderAdminBays() {
  if (!adminBayCount || !adminBayList) return;

  adminBayCount.textContent = `${bays.length} байр`;
  adminBayList.innerHTML = bays
    .map(
      (bay, index) => `
        <div class="admin-bay-row" data-admin-bay="${index}">
          <strong>${index + 1}</strong>
          <label>Нэр <input name="name" type="text" value="${escapeHtml(bay.name)}" /></label>
          <label>Машин <input name="vehicle" type="text" value="${escapeHtml(bay.vehicle)}" /></label>
          <label>Төлөв <input name="state" type="text" value="${escapeHtml(bay.state)}" /></label>
          <label>Явц % <input name="progress" type="number" min="0" max="100" value="${Number(bay.progress) || 0}" /></label>
          <label>Өнгө
            <select name="tone">
              ${["teal", "green", "amber", "blue"].map((tone) => `<option value="${tone}" ${bay.tone === tone ? "selected" : ""}>${tone}</option>`).join("")}
            </select>
          </label>
        </div>
      `,
    )
    .join("");
}

function populateEmployeeControls() {
  const options = staffMembers.length
    ? staffMembers.map((staff) => `<option value="${escapeHtml(staff.name)}">${escapeHtml(staff.name)} - ${escapeHtml(staff.role)}</option>`).join("")
    : `<option value="">Ажилтан нэмнэ үү</option>`;

  document.querySelectorAll("[data-employee-select]").forEach((select) => {
    const selected = select.value;
    select.innerHTML = options;
    if ([...select.options].some((option) => option.value === selected)) {
      select.value = selected;
    }
  });
}

function populatePriceControls() {
  document.querySelectorAll("[data-vehicle-select]").forEach((select) => {
    select.innerHTML = `<option value="">Машины төрөл сонгох</option>${vehicleTypes
      .map((type) => `<option value="${type.key}">${type.label}</option>`)
      .join("")}`;
  });

  document.querySelectorAll("[data-service-select]").forEach((select) => {
    select.innerHTML = servicePrices.map((service) => `<option value="${service.key}">${service.label}</option>`).join("");
  });

  populateEmployeeControls();
}

function updateFormPrice(form) {
  if (!form) return;

  const vehicleKey = form.elements.vehicleType?.value;
  const serviceKey = form.elements.service?.value;
  const priceInfo = vehicleKey ? getPriceInfo(serviceKey, vehicleKey) : { amount: 0, label: "0" };
  const priceInput = form.elements.price;

  if (priceInput) {
    priceInput.value = priceInfo.amount;
    priceInput.title = vehicleKey ? `Үнийн самбар: ${priceInfo.label}` : "";
  }

  if (form === entryForm) {
    entryPricePreview.textContent = vehicleKey ? formatMoney(priceInfo.amount) : "₮ 0";
    entryPricePreview.title = vehicleKey ? `Үнийн самбар: ${priceInfo.label}` : "";
  }
}

function renderPriceBoard() {
  if (!priceBoard) return;

  const rows = servicePrices
    .map((service) => {
      const cells = vehicleTypes
        .map((type) => `<td>${service.prices[type.key]?.label || "-"}</td>`)
        .join("");
      return `<tr><th scope="row">${service.label}</th>${cells}</tr>`;
    })
    .join("");

  priceBoard.innerHTML = `
    <details class="price-details">
      <summary class="price-board-header">
        <span>
          <span class="eyebrow">Үнийн мэдээлэл</span>
          <strong>Авто угаалгын үнэ</strong>
        </span>
        <span class="pill">Харах / хураах</span>
      </summary>
      <div class="price-table-wrap">
        <table class="price-table">
          <thead>
            <tr>
              <th scope="col">Үйлчилгээ</th>
              ${vehicleTypes.map((type) => `<th scope="col">${type.label}</th>`).join("")}
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </details>
  `;
}

function renderCashRangeButtons() {
  cashRangeButtons.innerHTML = cashRanges
    .map((range) => {
      const isActive = range.key === selectedCashRange ? "active" : "";
      return `<button class="range-tab ${isActive}" type="button" data-cash-range="${range.key}">${range.label}</button>`;
    })
    .join("");
}

function renderMoneyRows(target, rows) {
  target.innerHTML = Object.entries(rows)
    .map(([label, amount]) => `<div><span>${label}</span><strong>${formatMoney(amount)}</strong></div>`)
    .join("");
}

function renderPayrollRangeButtons() {
  if (!payrollRangeButtons) return;

  payrollRangeButtons.innerHTML = payrollRanges
    .map((range) => {
      const isActive = range.key === selectedPayrollRange ? "active" : "";
      return `<button class="range-tab ${isActive}" type="button" data-payroll-range="${range.key}">${range.label}</button>`;
    })
    .join("");
}

function getPayrollRangeLabel(rangeKey = selectedPayrollRange) {
  return payrollRanges.find((range) => range.key === rangeKey)?.label || "Өнөөдөр";
}

function getDateKeysForLastDays(days) {
  return Array.from({ length: days }, (_, index) => getDateKey(index - (days - 1)));
}

function getPayrollDateKeys(rangeKey = selectedPayrollRange) {
  if (rangeKey === "today") return [getDateKey(0)];
  if (rangeKey === "sevenDays") return getDateKeysForLastDays(7);
  if (rangeKey === "oneMonth") return getDateKeysForLastDays(30);
  return Object.keys(cashArchive).sort();
}

function getTransactionWashAmount(transaction) {
  const washAmount = Number(transaction.washAmount);
  if (Number.isFinite(washAmount) && washAmount >= 0) return washAmount;

  const total = Number(transaction.amount) || 0;
  const shopAmount = Number(transaction.shopAmount) || 0;
  return Math.max(0, total - shopAmount);
}

function getPayrollSalary(washAmount) {
  return Math.round((Number(washAmount) || 0) * payrollRate);
}

function formatPayrollLastWork(value) {
  if (!value) return "-";

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "-";

  return date.toLocaleString("mn-MN", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function getPayrollStats(rangeKey = selectedPayrollRange) {
  const employees = new Map();
  const rangeDateKeys = getPayrollDateKeys(rangeKey);

  staffMembers.forEach((staff) => {
    const name = String(staff.name || "").trim();
    if (!name) return;
    employees.set(name, {
      name,
      role: String(staff.role || "-").trim() || "-",
      cars: 0,
      washRevenue: 0,
      salary: 0,
      lastWork: "",
    });
  });

  rangeDateKeys.forEach((dateKey) => {
    const transactions = Array.isArray(cashArchive[dateKey]) ? cashArchive[dateKey] : [];

    transactions.forEach((transaction) => {
      const name = String(transaction.employee || "Тодорхойгүй").trim() || "Тодорхойгүй";
      const washAmount = getTransactionWashAmount(transaction);
      const salary = getPayrollSalary(washAmount);
      const row = employees.get(name) || {
        name,
        role: "-",
        cars: 0,
        washRevenue: 0,
        salary: 0,
        lastWork: "",
      };
      const workDate = `${transaction.date || dateKey}T${String(transaction.time || "00:00").slice(0, 5)}:00`;

      row.cars += 1;
      row.washRevenue += washAmount;
      row.salary += salary;
      if (!row.lastWork || workDate > row.lastWork) row.lastWork = workDate;
      employees.set(name, row);
    });
  });

  const rows = [...employees.values()].sort((a, b) => b.salary - a.salary || b.cars - a.cars || a.name.localeCompare(b.name));

  return rows.reduce(
    (summary, row) => {
      summary.cars += row.cars;
      summary.washRevenue += row.washRevenue;
      summary.salary += row.salary;
      return summary;
    },
    { rangeLabel: getPayrollRangeLabel(rangeKey), cars: 0, washRevenue: 0, salary: 0, rows },
  );
}

function renderPayroll() {
  if (!payrollSummary || !payrollRows || !payrollEmpty) return;

  const stats = getPayrollStats();
  renderPayrollRangeButtons();

  payrollSummary.innerHTML = `
    <article class="payroll-summary-card salary">
      <span>Нийт цалин</span>
      <strong>${formatMoney(stats.salary)}</strong>
      <small>${stats.rangeLabel} · угаалгын үнийн 40%</small>
    </article>
    <article class="payroll-summary-card">
      <span>Угаалгын орлого</span>
      <strong>${formatMoney(stats.washRevenue)}</strong>
      <small>Дэлгүүрийн дүн ороогүй</small>
    </article>
    <article class="payroll-summary-card">
      <span>Угаасан машин</span>
      <strong>${stats.cars}</strong>
      <small>Цалин бодогдсон үйлчилгээ</small>
    </article>
  `;

  payrollRows.innerHTML = stats.rows
    .map(
      (row) => `
        <tr class="${row.cars ? "" : "is-empty"}">
          <td><strong>${escapeHtml(row.name)}</strong></td>
          <td>${escapeHtml(row.role || "-")}</td>
          <td>${row.cars}</td>
          <td>${formatMoney(row.washRevenue)}</td>
          <td><strong class="salary-text">${formatMoney(row.salary)}</strong></td>
          <td>${escapeHtml(formatPayrollLastWork(row.lastWork))}</td>
        </tr>
      `,
    )
    .join("");

  payrollEmpty.hidden = stats.rows.length > 0;
  payrollRows.closest("table").hidden = stats.rows.length === 0;
}

function getCashStats(rangeKey) {
  const trendLength = cashTrendLengths[rangeKey] || cashTrendLengths.sevenDays;
  const stats = {
    income: 0,
    expense: 0,
    orders: 0,
    payments: { card: 0, cash: 0, transfer: 0 },
    expenses: { supplies: 0, salary: 0, utilities: 0 },
    trend: Array.from({ length: trendLength }, () => 0),
    expenseTrend: Array.from({ length: trendLength }, () => 0),
  };

  const paymentKeys = { Карт: "card", Бэлэн: "cash", Данс: "transfer" };
  const addTransactions = (dateKey, bucketIndexResolver) => {
    const transactions = Array.isArray(cashArchive[dateKey]) ? cashArchive[dateKey] : [];
    transactions.forEach((transaction) => {
      const amount = Number(transaction.amount) || 0;
      const payment = getPaymentMethod(transaction.payment);
      const paymentKey = paymentKeys[payment] || "card";
      const bucketIndex = Math.min(trendLength - 1, Math.max(0, bucketIndexResolver(transaction)));

      stats.income += amount;
      stats.orders += 1;
      stats.payments[paymentKey] += amount;
      stats.trend[bucketIndex] += amount;
      const salaryExpense = getPayrollSalary(getTransactionWashAmount(transaction));
      stats.expense += salaryExpense;
      stats.expenses.salary += salaryExpense;
      stats.expenseTrend[bucketIndex] += salaryExpense;
    });
  };

  if (rangeKey === "yesterday") {
    addTransactions(getDateKey(-1), (transaction) => {
      const hour = Number(String(transaction.time || "00:00").split(":")[0]) || 0;
      return Math.floor(Math.max(0, hour - 8) / 2);
    });
    return stats;
  }

  if (rangeKey === "threeDays") {
    [-2, -1, 0].forEach((daysFromToday, index) => {
      addTransactions(getDateKey(daysFromToday), () => index);
    });
    return stats;
  }

  if (rangeKey === "sevenDays") {
    Array.from({ length: 7 }, (_, index) => index - 6).forEach((daysFromToday, index) => {
      addTransactions(getDateKey(daysFromToday), () => index);
    });
    return stats;
  }

  if (rangeKey === "oneMonth") {
    Array.from({ length: 28 }, (_, index) => index - 27).forEach((daysFromToday, index) => {
      addTransactions(getDateKey(daysFromToday), () => Math.floor(index / 7));
    });
    return stats;
  }

  if (rangeKey === "threeMonths") {
    const current = new Date();
    const firstMonth = new Date(current.getFullYear(), current.getMonth() - 2, 1);

    Array.from({ length: 93 }, (_, index) => index - 92).forEach((daysFromToday) => {
      const date = new Date();
      date.setHours(12, 0, 0, 0);
      date.setDate(date.getDate() + daysFromToday);
      if (date < firstMonth || date > current) return;

      const bucketIndex = (date.getFullYear() - firstMonth.getFullYear()) * 12 + date.getMonth() - firstMonth.getMonth();
      addTransactions(getDateKey(daysFromToday), () => bucketIndex);
    });
    return stats;
  }

  return stats;
}

function formatPercent(value) {
  if (!Number.isFinite(value)) return "0%";
  return `${Math.round(value)}%`;
}

function getCashRangeLabel(rangeKey = selectedCashRange) {
  return cashRanges.find((range) => range.key === rangeKey)?.label || "7 хоног";
}

function getTrendLabels(rangeKey, count) {
  if (rangeKey === "yesterday") {
    const hours = ["09:00", "11:00", "13:00", "15:00", "17:00", "19:00", "21:00"];
    return Array.from({ length: count }, (_, index) => hours[index] || `${index + 1}-р цаг`);
  }

  if (rangeKey === "oneMonth") {
    return Array.from({ length: count }, (_, index) => `${index + 1}-р 7 хоног`);
  }

  if (rangeKey === "threeMonths") {
    return Array.from({ length: count }, (_, index) => {
      const date = new Date();
      date.setMonth(date.getMonth() - (count - 1 - index));
      return `${date.getMonth() + 1}-р сар`;
    });
  }

  return Array.from({ length: count }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - (count - 1 - index));
    return `${date.getMonth() + 1}/${date.getDate()}`;
  });
}

function getExpenseTrend(stats) {
  const incomeTrend = Array.isArray(stats.trend) ? stats.trend : [];
  if (Array.isArray(stats.expenseTrend) && stats.expenseTrend.length === incomeTrend.length) {
    return stats.expenseTrend;
  }

  const totalExpense = Number(stats.expense) || 0;
  const totalIncomeTrend = incomeTrend.reduce((sum, amount) => sum + (Number(amount) || 0), 0);
  let distributedExpense = 0;

  return incomeTrend.map((income, index) => {
    if (index === incomeTrend.length - 1) {
      return Math.max(0, totalExpense - distributedExpense);
    }

    const ratio = totalIncomeTrend ? (Number(income) || 0) / totalIncomeTrend : 1 / Math.max(incomeTrend.length, 1);
    const amount = Math.round((totalExpense * ratio) / 5000) * 5000;
    distributedExpense += amount;
    return Math.max(0, amount);
  });
}

function getTrendRows(stats, rangeKey) {
  const incomeTrend = Array.isArray(stats.trend) ? stats.trend : [];
  const expenseTrend = getExpenseTrend(stats);
  const labels = getTrendLabels(rangeKey, incomeTrend.length);

  return incomeTrend.map((income, index) => {
    const expense = Number(expenseTrend[index]) || 0;
    const net = (Number(income) || 0) - expense;
    const margin = income ? (net / Number(income)) * 100 : 0;
    return {
      label: labels[index],
      income: Number(income) || 0,
      expense,
      net,
      margin,
    };
  });
}

function renderFinanceBars() {
  const stats = getCashStats(selectedCashRange);
  const trendRows = getTrendRows(stats, selectedCashRange);
  const maxValue = Math.max(...trendRows.flatMap((row) => [row.income, row.expense]), 1);
  const netTotal = (Number(stats.income) || 0) - (Number(stats.expense) || 0);
  const profitMargin = stats.income ? (netTotal / stats.income) * 100 : 0;
  const averageIncome = Math.round((Number(stats.income) || 0) / Math.max(trendRows.length, 1));
  const averageExpense = Math.round((Number(stats.expense) || 0) / Math.max(trendRows.length, 1));
  const bestIncome = trendRows.reduce((best, row) => (row.income > best.income ? row : best), trendRows[0] || { label: "-", income: 0 });
  const highestExpense = trendRows.reduce((high, row) => (row.expense > high.expense ? row : high), trendRows[0] || { label: "-", expense: 0 });
  const incomeExpenseRatio = stats.expense ? (stats.income / stats.expense).toFixed(1) : "0";
  const rangeLabel = getCashRangeLabel();

  const bars = trendRows
    .map((row) => {
      const incomeHeight = Math.max(8, Math.round((row.income / maxValue) * 100));
      const expenseHeight = Math.max(8, Math.round((row.expense / maxValue) * 100));
      return `
        <div class="finance-bar-item">
          <div class="finance-bar-group">
            <span class="finance-bar income" style="height:${incomeHeight}%" title="${row.label} орлого ${formatMoney(row.income)}" aria-label="${row.label} орлого ${formatMoney(row.income)}"></span>
            <span class="finance-bar expense" style="height:${expenseHeight}%" title="${row.label} зарлага ${formatMoney(row.expense)}" aria-label="${row.label} зарлага ${formatMoney(row.expense)}"></span>
          </div>
          <small>${row.label}</small>
        </div>
      `;
    })
    .join("");

  const tableRows = trendRows
    .map(
      (row) => `
        <tr>
          <td>${escapeHtml(row.label)}</td>
          <td><strong class="income-text">${formatMoney(row.income)}</strong></td>
          <td><strong class="expense-text">${formatMoney(row.expense)}</strong></td>
          <td><strong class="${row.net >= 0 ? "income-text" : "expense-text"}">${formatMoney(row.net)}</strong></td>
          <td>${formatPercent(row.margin)}</td>
        </tr>
      `,
    )
    .join("");

  financeBars.innerHTML = `
    <div class="panel-header compact">
      <div>
        <p class="eyebrow">Trend</p>
        <h3>${rangeLabel} хугацааны орлого, зарлагын нарийн статистик</h3>
      </div>
      <div class="finance-trend-totals">
        <span><i class="trend-dot income"></i>Орлого <strong>${formatMoney(stats.income)}</strong></span>
        <span><i class="trend-dot expense"></i>Зарлага <strong>${formatMoney(stats.expense)}</strong></span>
        <span><i class="trend-dot net"></i>Цэвэр <strong>${formatMoney(netTotal)}</strong></span>
      </div>
    </div>
    <div class="finance-bars-chart">${bars}</div>
    <div class="finance-trend-detail-grid">
      <article class="net">
        <span>Цэвэр ашиг</span>
        <strong>${formatMoney(netTotal)}</strong>
        <small>Ашгийн хувь ${formatPercent(profitMargin)}</small>
      </article>
      <article>
        <span>Дундаж орлого</span>
        <strong>${formatMoney(averageIncome)}</strong>
        <small>Нэг баганад ногдох</small>
      </article>
      <article class="expense">
        <span>Дундаж зарлага</span>
        <strong>${formatMoney(averageExpense)}</strong>
        <small>Нэг баганад ногдох</small>
      </article>
      <article>
        <span>Хамгийн өндөр орлого</span>
        <strong>${formatMoney(bestIncome.income)}</strong>
        <small>${escapeHtml(bestIncome.label)}</small>
      </article>
      <article class="expense">
        <span>Хамгийн өндөр зарлага</span>
        <strong>${formatMoney(highestExpense.expense)}</strong>
        <small>${escapeHtml(highestExpense.label)}</small>
      </article>
      <article>
        <span>Орлого / зарлага</span>
        <strong>${incomeExpenseRatio}x</strong>
        <small>Орлого зарлагаас хэд дахин их</small>
      </article>
    </div>
    <div class="finance-trend-table-wrap">
      <table class="finance-trend-table">
        <thead>
          <tr>
            <th scope="col">Хугацаа</th>
            <th scope="col">Орлого</th>
            <th scope="col">Зарлага</th>
            <th scope="col">Цэвэр</th>
            <th scope="col">Ашиг %</th>
          </tr>
        </thead>
        <tbody>${tableRows}</tbody>
      </table>
    </div>
  `;
}

function formatArchiveDate(dateKey) {
  const date = new Date(`${dateKey}T12:00:00`);
  const months = ["нэгдүгээр", "хоёрдугаар", "гуравдугаар", "дөрөвдүгээр", "тавдугаар", "зургадугаар", "долдугаар", "наймдугаар", "есдүгээр", "аравдугаар", "арван нэгдүгээр", "арван хоёрдугаар"];
  const weekdays = ["Ням", "Даваа", "Мягмар", "Лхагва", "Пүрэв", "Баасан", "Бямба"];
  return `${date.getFullYear()} оны ${months[date.getMonth()]} сарын ${date.getDate()}, ${weekdays[date.getDay()]}`;
}

function renderCashArchive() {
  const transactions = Array.isArray(cashArchive[selectedArchiveDate]) ? cashArchive[selectedArchiveDate] : [];
  const total = transactions.reduce((sum, transaction) => sum + (Number(transaction.amount) || 0), 0);
  const payments = transactions.reduce(
    (summary, transaction) => {
      const payment = archivePayments.includes(transaction.payment) ? transaction.payment : "Карт";
      summary[payment] += Number(transaction.amount) || 0;
      return summary;
    },
    { Карт: 0, Бэлэн: 0, Данс: 0 },
  );

  cashArchiveDate.max = getDateKey(0);
  cashArchiveDate.value = selectedArchiveDate;
  archiveNextDay.disabled = selectedArchiveDate >= getDateKey(0);

  cashArchiveSummary.innerHTML = `
    <article>
      <span>Сонгосон өдөр</span>
      <strong>${formatArchiveDate(selectedArchiveDate)}</strong>
    </article>
    <article>
      <span>Нийт орлого</span>
      <strong>${formatMoney(total)}</strong>
    </article>
    <article>
      <span>Үйлчилгээ</span>
      <strong>${transactions.length} машин</strong>
    </article>
    <article>
      <span>Төлбөрийн задаргаа</span>
      <small>Карт ${formatMoney(payments.Карт)} · Бэлэн ${formatMoney(payments.Бэлэн)} · Данс ${formatMoney(payments.Данс)}</small>
    </article>
  `;

  cashArchiveRows.innerHTML = transactions
    .map(
      (transaction) => {
        const payment = getPaymentMethod(transaction.payment);
        return `
          <tr>
            <td><time datetime="${escapeHtml(`${transaction.date}T${transaction.time}`)}">${escapeHtml(transaction.time)}</time></td>
            <td><strong>${escapeHtml(transaction.plate)}</strong></td>
            <td>${escapeHtml(transaction.service)}</td>
            <td>${escapeHtml(transaction.employee || "Тодорхойгүй")}</td>
            <td><span class="payment-badge ${getPaymentClass(payment)}">${escapeHtml(payment)}</span></td>
            <td><strong>${formatMoney(Number(transaction.amount) || 0)}</strong></td>
          </tr>
        `;
      },
    )
    .join("");

  cashArchiveEmpty.hidden = transactions.length > 0;
  cashArchiveRows.closest("table").hidden = transactions.length === 0;
}

function addCompletedTransaction(item, completedAt = new Date()) {
  const date = [
    completedAt.getFullYear(),
    String(completedAt.getMonth() + 1).padStart(2, "0"),
    String(completedAt.getDate()).padStart(2, "0"),
  ].join("-");
  const transactions = Array.isArray(cashArchive[date]) ? cashArchive[date] : [];
  const shopServiceSummary = getQueueShopServiceSummary(item);
  const washAmount = Number(item.price) || 0;
  const shopAmount = getQueueShopTotal(item);
  transactions.unshift({
    id: `${date}-${Date.now()}`,
    date,
    time: completedAt.toLocaleTimeString("mn-MN", { hour: "2-digit", minute: "2-digit", hour12: false }),
    plate: item.plate,
    service: `${item.service}${shopServiceSummary}`,
    employee: item.employee || "Тодорхойгүй",
    payment: item.payment || "Карт",
    amount: washAmount + shopAmount,
    washAmount,
    shopAmount,
    salaryAmount: getPayrollSalary(washAmount),
    salaryRate: payrollRate,
  });
  cashArchive[date] = transactions;
  saveCashArchive();
}

function completeQueueItem(item) {
  const index = queue.indexOf(item);
  if (index === -1) return;

  dashboardSettings.revenue = (Number(dashboardSettings.revenue) || 0) + getQueueItemTotal(item);
  const completedAt = new Date();
  addCompletedTransaction(item, completedAt);
  addCompletedBayCar(item, completedAt);
  queue.splice(index, 1);
  dashboardSettings.queueCount = queue.length;
  if (activeDashboardQueueId === item.bookingId) {
    activeDashboardQueueId = "";
  }
  if (activeDashboardShopId === item.bookingId) {
    activeDashboardShopId = "";
  }
  if (activeDashboardPaymentId === item.bookingId) {
    activeDashboardPaymentId = "";
  }
  saveQueue();
  saveDashboardSettings();
  renderAll();
}

function renderCashStats() {
  const stats = getCashStats(selectedCashRange);
  const averageTicket = stats.orders ? Math.round(stats.income / stats.orders) : 0;

  renderCashRangeButtons();
  financeStats.innerHTML = `
    <article class="finance-stat-card income">
      <span>Орлого</span>
      <strong>${formatMoney(stats.income)}</strong>
      <small>${stats.orders} үйлчилгээ</small>
    </article>
    <article class="finance-stat-card">
      <span>Үйлчилгээ</span>
      <strong>${stats.orders}</strong>
      <small>Бүртгэгдсэн машин</small>
    </article>
    <article class="finance-stat-card expense">
      <span>Цалин зардал</span>
      <strong>${formatMoney(stats.expenses.salary)}</strong>
      <small>Угаалгын үнийн 40%</small>
    </article>
    <article class="finance-stat-card income">
      <span>Дундаж төлбөр</span>
      <strong>${formatMoney(averageTicket)}</strong>
      <small>Нэг машинд ногдох</small>
    </article>
  `;
  renderMoneyRows(paymentBreakdown, {
    Карт: stats.payments.card,
    Бэлэн: stats.payments.cash,
    Данс: stats.payments.transfer,
  });
  renderFinanceBars();
}

function renderAll() {
  renderMetrics();
  renderQueue();
  renderDashboardQueue();
  renderBays();
  renderCompletedBayCars();
  renderCashStats();
  renderCashArchive();
  renderPayroll();
  renderStaff();
  renderGeneralSettings();
  syncAdminForms();
  renderAdminPriceGrid();
  renderAdminShopProducts();
  renderAdminBays();
  renderAccountRequests();
}

openSignupButton?.addEventListener("click", () => {
  setAccountFeedback("", "");
  openSignupModal();
});

closeSignupButton?.addEventListener("click", closeSignupModal);

signupModal?.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-signup]")) {
    closeSignupModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && signupModal?.classList.contains("open")) {
    closeSignupModal();
  }
});

accountLoginForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(accountLoginForm);
  const username = normalizeAccountUsername(data.get("username"));
  const password = String(data.get("password") || "");
  const account = accounts.find((item) => item.username === username);

  if (!account && hasPendingAccountRequest(username)) {
    setAccountFeedback("Таны account хүсэлт хүлээгдэж байна. 95723051 account зөвшөөрсний дараа нэвтэрнэ.", "error");
    return;
  }

  if (!account || account.password !== password) {
    setAccountFeedback("Нэвтрэх нэр эсвэл нууц үг буруу байна.", "error");
    return;
  }

  if (isAccountExpired(account)) {
    requestAccountRenewal(account);
    setAccountFeedback("Энэ account-ийн зөвшөөрлийн хугацаа дууссан байна. 95723051 account дахин зөвшөөрсний дараа нэвтэрнэ.", "error");
    renderAccountRequests();
    return;
  }

  accountLoginForm.reset();
  loginAccount(account);
});

accountSignupForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(accountSignupForm);
  const name = String(data.get("name") || "").trim();
  const username = normalizeAccountUsername(data.get("username"));
  const password = String(data.get("password") || "");
  const confirmPassword = String(data.get("confirmPassword") || "");

  if (name.length < 2) {
    setAccountFeedback("Нэрээ 2-оос дээш тэмдэгтээр оруулна уу.", "error");
    return;
  }

  if (username.length < 3) {
    setAccountFeedback("Нэвтрэх нэр 3-аас дээш тэмдэгттэй байна.", "error");
    return;
  }

  if (password.length < 4) {
    setAccountFeedback("Нууц үг хамгийн багадаа 4 тэмдэгт байна.", "error");
    return;
  }

  if (password !== confirmPassword) {
    setAccountFeedback("Давтсан нууц үг таарахгүй байна.", "error");
    return;
  }

  const existingSignupAccount = accounts.find((account) => account.username === username);

  if (existingSignupAccount && isAccountExpired(existingSignupAccount)) {
    if (hasPendingAccountRequest(username)) {
      setAccountFeedback("Энэ account-ийн сунгах хүсэлт аль хэдийн илгээгдсэн байна. 95723051 зөвшөөрөхийг хүлээнэ үү.", "error");
      return;
    }

    createPendingAccountRequest({
      name: existingSignupAccount.name || name,
      username,
      password: password || existingSignupAccount.password,
      kind: "renew",
      accountId: existingSignupAccount.id,
    });
    accountSignupForm.reset();
    closeSignupModal();
    setAccountFeedback("Account-ийн хугацаа дууссан тул сунгах хүсэлт илгээгдлээ. 95723051 зөвшөөрсний дараа нэвтэрнэ.", "success");
    renderAccountRequests();
    return;
  }

  if (existingSignupAccount) {
    setAccountFeedback("Энэ нэвтрэх нэрээр аккаунт аль хэдийн байна.", "error");
    return;
  }

  const account = {
    id: createAccountId(),
    name,
    username,
    password,
    createdAt: Date.now(),
    approvedAt: Date.now(),
    approvedBy: username === accountApproverUsername ? "system" : "",
    expiresAt: username === accountApproverUsername ? 0 : getApprovalExpiresAt({ minutes: 30 }),
  };

  if (username === accountApproverUsername) {
    accountRequests.forEach((request) => {
      if (request.username === username && request.status === "pending") {
        request.status = "approved";
        request.approvedAt = Date.now();
        request.approvedBy = account.id;
      }
    });
    accounts.unshift(account);
    saveAccounts();
    saveAccountRequests();
    accountSignupForm.reset();
    loginAccount(account, "95723051 удирдлагын account амжилттай нээгдлээ.");
    return;
  }

  if (hasPendingAccountRequest(username)) {
    setAccountFeedback("Энэ нэвтрэх нэрийн account хүсэлт аль хэдийн илгээгдсэн байна. 95723051 зөвшөөрөхийг хүлээнэ үү.", "error");
    return;
  }

  accountSignupForm.reset();
  createPendingAccountRequest({ name, username, password });
  closeSignupModal();
  setAccountFeedback("Account нээх хүсэлт илгээгдлээ. 95723051 account зөвшөөрсний дараа нэвтрэх боломжтой.", "success");
  renderAccountRequests();
});

logoutButton?.addEventListener("click", logoutAccount);
themeToggle?.addEventListener("click", toggleTheme);

accountRequestList?.addEventListener("click", (event) => {
  const approveButton = event.target.closest("[data-approve-account]");
  const rejectButton = event.target.closest("[data-reject-account]");

  if (approveButton) {
    const requestCard = approveButton.closest("[data-account-request-id]");
    approveAccountRequest(approveButton.dataset.approveAccount, {
      days: requestCard?.querySelector("[data-approval-days]")?.value,
      minutes: requestCard?.querySelector("[data-approval-minutes]")?.value,
      seconds: requestCard?.querySelector("[data-approval-seconds]")?.value,
    });
    return;
  }

  if (rejectButton) {
    rejectAccountRequest(rejectButton.dataset.rejectAccount);
  }
});

entryForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(entryForm);
  const plate = String(data.get("plate")).trim().toUpperCase();
  const vehicleTypeKey = String(data.get("vehicleType"));
  const serviceKey = String(data.get("service"));
  const employee = String(data.get("employee"));
  const vehicleType = getVehicle(vehicleTypeKey).label;
  const service = getService(serviceKey).label;
  const price = getPriceInfo(serviceKey, vehicleTypeKey).amount;
  const customerPhone = registerOrVerifyCustomer(data, plate, entryCustomerFeedback);
  if (!customerPhone) return;

  queue.unshift({
    bookingId: createBookingId(),
    plate,
    vehicleType,
    service,
    employee,
    customerPhone,
    price,
    status: "Хүлээж байна",
    eta: "шинэ",
    createdAt: Date.now(),
    acceptedAt: null,
  });

  dashboardSettings.queueCount = queue.length;
  saveQueue();
  saveDashboardSettings();
  renderAll();
  showDashboard("dashboard");
});

brandSkip.addEventListener("click", () => showDashboard("dashboard"));

brandBack.addEventListener("click", (event) => {
  event.preventDefault();
  showEntry();
});

if (intakeForm) {
  intakeForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(intakeForm);
    const vehicleTypeKey = String(data.get("vehicleType"));
    const serviceKey = String(data.get("service"));
    const employee = String(data.get("employee"));
    const plate = normalizePlate(data.get("plate"));
    const customerPhone = registerOrVerifyCustomer(data, plate, intakeCustomerFeedback);
    if (!customerPhone) return;

    queue.unshift({
      bookingId: createBookingId(),
      plate,
      vehicleType: getVehicle(vehicleTypeKey).label,
      service: getService(serviceKey).label,
      employee,
      customerPhone,
      price: getPriceInfo(serviceKey, vehicleTypeKey).amount,
      status: "Хүлээж байна",
      eta: "шинэ",
      createdAt: Date.now(),
      acceptedAt: null,
    });
    dashboardSettings.queueCount = queue.length;
    saveQueue();
    saveDashboardSettings();
    intakeForm.reset();
    updateFormPrice(intakeForm);
    renderAll();
  });
}

if (bookingCancelForm) {
  bookingCancelForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(bookingCancelForm);
    const plate = normalizePlate(data.get("plate"));
    const pin = String(data.get("pin") || "").trim();
    const index = queue.findIndex((item) => {
      const customer = customerProfiles[item.customerPhone];
      return item.plate === plate && customer?.pin === pin;
    });

    if (index === -1) {
      bookingCancelFeedback.className = "booking-cancel-feedback error";
      bookingCancelFeedback.textContent = "Улсын дугаар эсвэл устгах код буруу байна.";
      return;
    }

    const [removed] = queue.splice(index, 1);
    dashboardSettings.queueCount = queue.length;
    saveQueue();
    saveDashboardSettings();
    renderAll();
    bookingCancelForm.reset();
    bookingCancelFeedback.className = "booking-cancel-feedback success";
    bookingCancelFeedback.textContent = `${removed.plate} дугаартай захиалгыг устгалаа.`;
  });
}

recoveryForms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const method = form.dataset.recoveryMethod;
    const phone = normalizePhone(data.get("phone"));
    const customer = customerProfiles[phone];
    const output = form.querySelector("output");

    if (!customer) {
      setFormFeedback(output, "Энэ утас бүртгэлгүй байна.", "error");
      return;
    }

    if (method === "phone") {
      setFormFeedback(output, `${maskPhone(phone)} дугаарын устгах код: ${customer.pin}`, "success");
      return;
    }

    if (method === "word") {
      const recoveryWord = String(data.get("recoveryWord") || "").trim().toLowerCase();
      if (!recoveryWord || recoveryWord !== customer.recoveryWord) {
        setFormFeedback(output, "Сэргээх үг буруу байна.", "error");
        return;
      }
      setFormFeedback(output, `Таны устгах код: ${customer.pin}`, "success");
      return;
    }

    const plate = normalizePlate(data.get("plate"));
    const plates = Array.isArray(customer.plates) ? customer.plates : [];
    if (!plates.includes(plate)) {
      setFormFeedback(output, "Улсын дугаар тохирохгүй байна.", "error");
      return;
    }

    setFormFeedback(output, `Таны тогтмол устгах код: ${customer.pin}`, "success");
  });
});

if (nextButton) {
  nextButton.addEventListener("click", () => {
    const waiting = queue.find((item) => item.status === "Хүлээж байна");
    if (waiting) {
      waiting.status = "Ажиллаж байна";
      acceptQueueItem(waiting);
      saveQueue();
      renderQueue();
      renderDashboardQueue();
    }
  });
}

focusAdd.addEventListener("click", showEntry);

menuButton.addEventListener("click", () => {
  document.body.classList.toggle("menu-open");
});

document.querySelectorAll(".nav-item").forEach((item) => {
  item.addEventListener("click", () => {
    document.body.classList.remove("menu-open");
  });
});

pageLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showDashboard(link.dataset.pageLink);
  });
});

if (dashboardSettingsForm) {
  dashboardSettingsForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(dashboardSettingsForm);
    dashboardSettings = {
      revenue: Number(data.get("revenue")) || 0,
      revenueNote: String(data.get("revenueNote") || "").trim(),
      queueCount: Number(data.get("queueCount")) || 0,
      queueNote: String(data.get("queueNote") || "").trim(),
      freeBays: Number(data.get("freeBays")) || 0,
      totalBays: Number(data.get("totalBays")) || 1,
      bayNote: String(data.get("bayNote") || "").trim(),
      vipCount: Number(data.get("vipCount")) || 0,
      vipNote: String(data.get("vipNote") || "").trim(),
    };
    saveDashboardSettings();
    renderMetrics();
    showAdminFeedback(dashboardSettingsForm, "Самбарын үзүүлэлтийг хадгаллаа.");
  });
}

if (generalSettingsForm) {
  generalSettingsForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(generalSettingsForm);
    generalSettings = {
      shiftLabel: String(data.get("shiftLabel") || "").trim() || "Өнөөдрийн ээлж",
      shiftStart: String(data.get("shiftStart") || ""),
      shiftEnd: String(data.get("shiftEnd") || ""),
    };
    saveGeneralSettings();
    renderGeneralSettings();
    showAdminFeedback(generalSettingsForm, "Ээлжийн тохиргоог хадгаллаа.");
  });
}

priceSettingsForm.addEventListener("submit", (event) => {
  event.preventDefault();

  adminPriceGrid.querySelectorAll("[data-service-label]").forEach((input) => {
    const service = servicePrices.find((item) => item.key === input.dataset.serviceLabel);
    if (service && input.value.trim()) service.label = input.value.trim();
  });

  adminPriceGrid.querySelectorAll("[data-price-service]").forEach((input) => {
    const service = servicePrices.find((item) => item.key === input.dataset.priceService);
    if (!service) return;
    const amount = Math.max(0, Number(input.value) || 0);
    service.prices[input.dataset.priceVehicle] = {
      amount,
      label: formatter.format(amount),
    };
  });

  saveServicePrices();
  populatePriceControls();
  renderPriceBoard();
  updateFormPrice(entryForm);
  updateFormPrice(intakeForm);
  showAdminFeedback(priceSettingsForm, "Үйлчилгээний үнэ хадгалагдлаа.");
});

if (shopAddForm) {
  shopAddForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(shopAddForm);
    const name = String(data.get("name") || "").trim();
    const price = Math.max(0, Number(data.get("price")) || 0);
    const emoji = shopProductEmojis.includes(data.get("emoji")) ? String(data.get("emoji")) : "💧";

    if (!name) return;

    shopProducts.unshift({
      id: createShopProductId(),
      emoji,
      name,
      price,
    });

    saveShopProducts();
    renderAdminShopProducts();
    renderDashboardQueue();
    shopAddForm.reset();
    shopAddForm.elements.emoji.value = "💧";
    showAdminFeedback(shopSettingsForm, "💧🥤 Бүтээгдэхүүн нэмэгдлээ.");
  });
}

if (shopSettingsForm) {
  shopSettingsForm.addEventListener("submit", (event) => {
    event.preventDefault();
    shopProducts = [...adminShopList.querySelectorAll("[data-shop-id]")]
      .map((row) => ({
        id: row.dataset.shopId,
        emoji: shopProductEmojis.includes(row.querySelector("[name='emoji']").value) ? row.querySelector("[name='emoji']").value : "💧",
        name: row.querySelector("[name='name']").value.trim(),
        price: Math.max(0, Number(row.querySelector("[name='price']").value) || 0),
      }))
      .filter((product) => product.name);

    saveShopProducts();
    renderAdminShopProducts();
    renderDashboardQueue();
    showAdminFeedback(shopSettingsForm, "Дэлгүүрийн бүтээгдэхүүн хадгалагдлаа.");
  });
}

if (adminShopList) {
  adminShopList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-remove-shop-product]");
    if (!button) return;

    shopProducts = shopProducts.filter((product) => product.id !== button.dataset.removeShopProduct);
    saveShopProducts();
    renderAdminShopProducts();
    renderDashboardQueue();
    showAdminFeedback(shopSettingsForm, "Бүтээгдэхүүн устгагдлаа.");
  });
}

adminCollapseAllButton?.addEventListener("click", () => setAdminCollapses(false));
adminExpandAllButton?.addEventListener("click", () => setAdminCollapses(true));

if (baySettingsForm) {
  baySettingsForm.addEventListener("submit", (event) => {
    event.preventDefault();
    bays = [...adminBayList.querySelectorAll("[data-admin-bay]")].map((row) => ({
      name: row.querySelector("[name='name']").value.trim(),
      vehicle: row.querySelector("[name='vehicle']").value.trim(),
      state: row.querySelector("[name='state']").value.trim(),
      progress: Math.min(100, Math.max(0, Number(row.querySelector("[name='progress']").value) || 0)),
      tone: row.querySelector("[name='tone']").value,
    }));
    saveBays();
    renderBays();
    renderAdminBays();
    showAdminFeedback(baySettingsForm, "Угаалгын байрны мэдээллийг хадгаллаа.");
  });
}

staffForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(staffForm);
  staffMembers.push({
    name: String(data.get("name")).trim(),
    role: String(data.get("role")).trim(),
  });
  saveStaffMembers();
  staffForm.reset();
  renderStaff();
  renderPayroll();
});

staffList.addEventListener("input", (event) => {
  const input = event.target.closest("[data-staff-field]");
  if (!input) return;

  const row = input.closest("[data-staff-index]");
  const index = Number(row.dataset.staffIndex);
  const field = input.dataset.staffField;
  staffMembers[index][field] = input.value;
  saveStaffMembers();
  renderPayroll();
});

staffList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-remove-staff]");
  if (!button) return;

  const row = button.closest("[data-staff-index]");
  const index = Number(row.dataset.staffIndex);
  staffMembers.splice(index, 1);
  saveStaffMembers();
  renderStaff();
  renderPayroll();
});

completedBayList?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-delete-completed-bay]");
  if (!button) return;

  event.stopPropagation();
  deleteCompletedBayCar(button.dataset.deleteCompletedBay);
});

cashRangeButtons.addEventListener("click", (event) => {
  const button = event.target.closest("[data-cash-range]");
  if (!button) return;

  selectedCashRange = button.dataset.cashRange;
  renderCashStats();
});

payrollRangeButtons?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-payroll-range]");
  if (!button) return;

  selectedPayrollRange = button.dataset.payrollRange;
  renderPayroll();
});

cashArchiveDate.addEventListener("change", () => {
  if (!cashArchiveDate.value) return;
  selectedArchiveDate = cashArchiveDate.value;
  renderCashArchive();
});

archivePreviousDay.addEventListener("click", () => {
  const date = new Date(`${selectedArchiveDate}T12:00:00`);
  date.setDate(date.getDate() - 1);
  selectedArchiveDate = [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0"),
  ].join("-");
  renderCashArchive();
});

archiveNextDay.addEventListener("click", () => {
  const date = new Date(`${selectedArchiveDate}T12:00:00`);
  date.setDate(date.getDate() + 1);
  const nextDate = [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0"),
  ].join("-");
  selectedArchiveDate = nextDate > getDateKey(0) ? getDateKey(0) : nextDate;
  renderCashArchive();
});

entryForm.addEventListener("change", () => updateFormPrice(entryForm));
if (intakeForm) {
  intakeForm.addEventListener("change", () => updateFormPrice(intakeForm));
}
searchInput.addEventListener("input", () => {
  renderQueue();
  renderDashboardQueue();
});

initAdminCollapses();
renderClock();
applyTheme(activeTheme);
let initialAccount = getActiveAccount();
if (initialAccount && isAccountExpired(initialAccount)) {
  requestAccountRenewal(initialAccount);
  activeAccountId = "";
  saveActiveAccount();
  initialAccount = null;
  setAccountFeedback("Энэ account-ийн зөвшөөрлийн хугацаа дууссан байна. 95723051 account дахин зөвшөөрөх шаардлагатай.", "error");
}
if (initialAccount) {
  loadAccountData(initialAccount.id);
} else {
  applyAccountData(getDefaultAccountData());
}
refreshAccountUi();
if (initialAccount) {
  if (getPageFromHash()) {
    showDashboard(getPageFromHash());
  } else if (isApproverAccount(initialAccount)) {
    showDashboard("admin");
  } else {
    showEntry();
  }
} else {
  showAuth();
}
setInterval(renderClock, 30000);
setInterval(updateQueueTimers, 1000);
setInterval(enforceActiveAccountExpiry, 1000);
