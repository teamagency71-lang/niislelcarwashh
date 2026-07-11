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
  { key: "today", label: "Өнөөдөр" },
  { key: "yesterday", label: "Өчигдөр" },
  { key: "threeDays", label: "3 хоног" },
  { key: "sevenDays", label: "7 хоног" },
  { key: "oneMonth", label: "1 сар" },
  { key: "threeMonths", label: "3 сар" },
];

const payrollRateOptions = [30, 40, 50, 60, 70];
const payrollRanges = [
  { key: "today", label: "Өнөөдөр" },
  { key: "sevenDays", label: "7 хоног" },
  { key: "oneMonth", label: "1 сар" },
  { key: "all", label: "Бүгд" },
];

const cashTrendLengths = {
  today: 7,
  yesterday: 7,
  threeDays: 3,
  sevenDays: 7,
  oneMonth: 4,
  threeMonths: 3,
};

const archivePayments = ["Карт", "Бэлэн", "Данс"];
const paymentAmountOptions = [
  { key: "cash", label: "Бэлэн" },
  { key: "card", label: "Карт" },
  { key: "transfer", label: "Данс" },
];

function getDateKey(daysFromToday = 0) {
  const date = new Date();
  date.setHours(12, 0, 0, 0);
  date.setDate(date.getDate() + daysFromToday);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getDateKeyFromTimestamp(value) {
  const date = new Date(Number(value) || Date.now());
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function shiftDateKey(dateKey, days) {
  const date = new Date(`${dateKey}T12:00:00`);
  date.setDate(date.getDate() + days);
  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0"),
  ].join("-");
}

function createDefaultCashArchive() {
  return {};
}

function normalizeCashPaymentOverrides(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};

  return Object.fromEntries(
    Object.entries(value)
      .filter(([dateKey]) => /^\d{4}-\d{2}-\d{2}$/.test(dateKey))
      .map(([dateKey, item]) => [
        dateKey,
        {
          card: Math.max(0, Number(item?.card) || 0),
          cash: Math.max(0, Number(item?.cash) || 0),
          transfer: Math.max(0, Number(item?.transfer) || 0),
          updatedAt: Number(item?.updatedAt) || 0,
        },
      ]),
  );
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

const shopProductEmojis = ["💧", "🥤", "🧃", "☕", "🍵", "🥛", "🍫", "🍪", "🌿", "🧽", "🪟", "🛞", "✨", "🧴"];
const defaultShopProducts = [
  { id: "car-air-freshener", emoji: "🌿", name: "Машины үнэртүүлэгч", price: 10000 },
  { id: "microfiber-cloth", emoji: "🧽", name: "Микрофайбер алчуур", price: 8000 },
  { id: "glass-cleaner", emoji: "🪟", name: "Шил цэвэрлэгч", price: 15000 },
  { id: "tire-shine", emoji: "🛞", name: "Дугуй өнгөлөгч", price: 20000 },
  { id: "interior-polish", emoji: "✨", name: "Салон өнгөлөгч", price: 18000 },
  { id: "washer-fluid", emoji: "🧴", name: "Шил арчигч шингэн", price: 12000 },
];

function normalizeShopProducts(items) {
  return (Array.isArray(items) ? items : []).map((item, index) => ({
    id: String(item.id || `shop-${Date.now()}-${index}`),
    emoji: shopProductEmojis.includes(item.emoji) ? item.emoji : "💧",
    name: String(item.name || "Бүтээгдэхүүн").trim(),
    price: Math.max(0, Number(item.price) || 0),
  }));
}

function mergeDefaultShopProducts(items) {
  const products = normalizeShopProducts(items);
  const productIds = new Set(products.map((product) => product.id));
  const productNames = new Set(products.map((product) => product.name.toLocaleLowerCase("mn-MN")));

  defaultShopProducts.forEach((defaultProduct) => {
    const normalizedName = defaultProduct.name.toLocaleLowerCase("mn-MN");
    if (!productIds.has(defaultProduct.id) && !productNames.has(normalizedName)) {
      products.push({ ...defaultProduct });
    }
  });

  return products;
}

let shopProducts = normalizeShopProducts(defaultShopProducts);

const defaultStaffShopPurchases = [];

function normalizeStaffShopPurchases(items) {
  return (Array.isArray(items) ? items : []).map((item, index) => {
    const quantity = Math.max(1, Number(item.quantity) || 1);
    const unitPrice = Math.max(0, Number(item.unitPrice) || 0);
    const createdAt = Number(item.createdAt) || Date.now();

    return {
      id: String(item.id || `staff-shop-${createdAt}-${index}`),
      employee: String(item.employee || "Тодорхойгүй").trim() || "Тодорхойгүй",
      productId: String(item.productId || ""),
      productName: String(item.productName || "Бүтээгдэхүүн").trim() || "Бүтээгдэхүүн",
      emoji: shopProductEmojis.includes(item.emoji) ? item.emoji : "🧴",
      quantity,
      unitPrice,
      total: unitPrice * quantity,
      createdAt,
      date: String(item.date || getDateKeyFromTimestamp(createdAt)),
      time: String(item.time || new Date(createdAt).toLocaleTimeString("mn-MN", { hour: "2-digit", minute: "2-digit", hour12: false })),
    };
  });
}

let staffShopPurchases = normalizeStaffShopPurchases(defaultStaffShopPurchases);

const defaultQueue = [];

function normalizeQueueItems(items) {
  const now = Date.now();

  return items.map((item, index) => {
    const customerPhone = String(item.customerPhone || "");
    if (customerPhone && !customerProfiles[customerPhone]) {
      customerProfiles[customerPhone] = {
        phone: customerPhone,
        pin: "0000",
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
    const itemTotal = (Number(item.price) || 0) + shopItems.reduce(
      (sum, product) => sum + (Number(product.price) || 0) * Math.max(1, Number(product.qty) || 1),
      0,
    );
    const paymentAmounts = normalizePaymentAmounts(item.paymentAmounts, itemTotal, item.payment);
    const payment = getPaymentAmountsMethod(paymentAmounts) || "";
    const { code, pin, ...safeItem } = item;
    return { ...safeItem, bookingId, customerPhone, createdAt, acceptedAt, shopItems, paymentAmounts, payment };
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
const bayMap = document.querySelector("#bayMap");
const bayGrid = document.querySelector("#bayGrid");
const bayMapCount = document.querySelector("#bayMapCount");
const removeBayButton = document.querySelector("#removeBayButton");
const addBayButton = document.querySelector("#addBayButton");
const dailyQueueRegisterCount = document.querySelector("#dailyQueueRegisterCount");
const dailyQueueDate = document.querySelector("#dailyQueueDate");
const dailyQueuePreviousDay = document.querySelector("#dailyQueuePreviousDay");
const dailyQueueNextDay = document.querySelector("#dailyQueueNextDay");
const dailyQueueList = document.querySelector("#dailyQueueList");
const dailyQueueEmpty = document.querySelector("#dailyQueueEmpty");
const completedBayList = document.querySelector("#completedBayList");
const completedBayEmpty = document.querySelector("#completedBayEmpty");
const completedBayCount = document.querySelector("#completedBayCount");
const completedDeleteModal = document.querySelector("#completedDeleteModal");
const completedDeleteForm = document.querySelector("#completedDeleteForm");
const completedDeletePlate = document.querySelector("#completedDeletePlate");
const completedDeleteFeedback = document.querySelector("#completedDeleteFeedback");
const closeCompletedDeleteButton = document.querySelector("#closeCompletedDeleteButton");
const queueMetric = document.querySelector("#queueMetric");
const revenueMetric = document.querySelector("#revenueMetric");
const bayMetric = document.querySelector("#bayMetric");
const vipMetric = document.querySelector("#vipMetric");
const revenueNote = document.querySelector("#revenueNote");
const queueNote = document.querySelector("#queueNote");
const bayNote = document.querySelector("#bayNote");
const vipNote = document.querySelector("#vipNote");
const intakeForm = document.querySelector("#intakeForm");
const bookingCancelForm = document.querySelector("#bookingCancelForm");
const bookingCancelFeedback = document.querySelector("#bookingCancelFeedback");
const entryCustomerFeedback = document.querySelector("#entryCustomerFeedback");
const intakeCustomerFeedback = document.querySelector("#intakeCustomerFeedback");
const staffList = document.querySelector("#staffList");
const staffForm = document.querySelector("#staffForm");
const staffCountPill = document.querySelector("#staffCountPill");
const nextButton = document.querySelector("#nextButton");
const menuButton = document.querySelector(".menu-button");
const mobileEntryButton = document.querySelector("#mobileEntryButton");
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
const cashStatus = document.querySelector("#cashStatus");
const cashStatusTime = document.querySelector("#cashStatusTime");
const cashToggleButton = document.querySelector("#cashToggleButton");
const cashCloseModal = document.querySelector("#cashCloseModal");
const cashCloseForm = document.querySelector("#cashCloseForm");
const cashCloseSummary = document.querySelector("#cashCloseSummary");
const cashCloseFeedback = document.querySelector("#cashCloseFeedback");
const closeCashCloseButton = document.querySelector("#closeCashCloseButton");
const cancelCashCloseButton = document.querySelector("#cancelCashCloseButton");
const confirmCashCloseButton = document.querySelector("#confirmCashCloseButton");
const editPaymentBreakdownButton = document.querySelector("#editPaymentBreakdownButton");
const paymentEditModal = document.querySelector("#paymentEditModal");
const paymentEditForm = document.querySelector("#paymentEditForm");
const paymentEditTotal = document.querySelector("#paymentEditTotal");
const paymentEditFeedback = document.querySelector("#paymentEditFeedback");
const closePaymentEditButton = document.querySelector("#closePaymentEditButton");
const cancelPaymentEditButton = document.querySelector("#cancelPaymentEditButton");
const confirmPaymentEditButton = document.querySelector("#confirmPaymentEditButton");
const staffShopForm = document.querySelector("#staffShopForm");
const staffShopProduct = document.querySelector("#staffShopProduct");
const staffShopPreview = document.querySelector("#staffShopPreview");
const staffShopTotal = document.querySelector("#staffShopTotal");
const staffShopList = document.querySelector("#staffShopList");
const staffShopEmpty = document.querySelector("#staffShopEmpty");
const staffShopFeedback = document.querySelector("#staffShopFeedback");
const staffShopDeleteModal = document.querySelector("#staffShopDeleteModal");
const staffShopDeleteForm = document.querySelector("#staffShopDeleteForm");
const staffShopDeleteDescription = document.querySelector("#staffShopDeleteDescription");
const staffShopDeleteFeedback = document.querySelector("#staffShopDeleteFeedback");
const closeStaffShopDeleteButton = document.querySelector("#closeStaffShopDeleteButton");
const mobileCashDetails = document.querySelector(".mobile-cash-details");
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
const payrollRateSelect = document.querySelector("#payrollRateSelect");
const payrollRateDescription = document.querySelector("#payrollRateDescription");
const payrollRateBadge = document.querySelector("#payrollRateBadge");
const payrollRateColumn = document.querySelector("#payrollRateColumn");
const payrollSummary = document.querySelector("#payrollSummary");
const payrollRows = document.querySelector("#payrollRows");
const payrollEmpty = document.querySelector("#payrollEmpty");
const dashboardSettingsForm = document.querySelector("#dashboardSettingsForm");
const generalSettingsForm = document.querySelector("#generalSettingsForm");
const coverImageAdminPanel = document.querySelector("#coverImageAdminPanel");
const coverImageForm = document.querySelector("#coverImageForm");
const coverImageInput = document.querySelector("#coverImageInput");
const coverImagePreview = document.querySelector("#coverImagePreview");
const coverImageStatus = document.querySelector("#coverImageStatus");
const resetCoverImageButton = document.querySelector("#resetCoverImageButton");
const entryCoverImage = document.querySelector("#entryCoverImage");
const dashboardCoverImage = document.querySelector("#dashboardCoverImage");
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
const accountDirectoryCount = document.querySelector("#accountDirectoryCount");
const accountDirectoryList = document.querySelector("#accountDirectoryList");
const directorPanel = document.querySelector("#directorPanel");
const directorLockStatus = document.querySelector("#directorLockStatus");
const directorLockButton = document.querySelector("#directorLockButton");
const directorLockScreen = document.querySelector("#directorLockScreen");
const directorLockPrompt = document.querySelector("#directorLockPrompt");
const directorLockHint = document.querySelector("#directorLockHint");
const directorUnlockForm = document.querySelector("#directorUnlockForm");
const directorUnlockSubmit = document.querySelector("#directorUnlockSubmit");
const directorLockFeedback = document.querySelector("#directorLockFeedback");
const directorProtectedContent = document.querySelector("#directorProtectedContent");
const directorChangePinButton = document.querySelector("#directorChangePinButton");
const directorCashStatus = document.querySelector("#directorCashStatus");
const directorSummary = document.querySelector("#directorSummary");
const directorShiftArchiveCount = document.querySelector("#directorShiftArchiveCount");
const directorShiftArchiveList = document.querySelector("#directorShiftArchiveList");
const directorShiftArchiveEmpty = document.querySelector("#directorShiftArchiveEmpty");
const directorCashTime = document.querySelector("#directorCashTime");
const accountRequestCount = document.querySelector("#accountRequestCount");
const refreshAccountRequests = document.querySelector("#refreshAccountRequests");
const accountApprovalNotice = document.querySelector("#accountApprovalNotice");
const accountRequestList = document.querySelector("#accountRequestList");
let selectedCashRange = "today";
let selectedPayrollRange = "today";
let selectedArchiveDate = getDateKey(0);
let selectedDailyQueueDate = getDateKey(0);
let mobileCashLayoutActive = null;
let directorPanelUnlocked = false;
const defaultCoverImage = "assets/wash-bay.png";
const coverImageStorageKey = "cwGlobalCoverImage";
let pendingCoverImage = "";

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
  payrollRate: 40,
  bayMapCount: 6,
  directorPinHash: "",
  cashRegisterOpen: false,
  cashRegisterOpenedAt: 0,
  cashRegisterClosedAt: 0,
  cashRegisterArchives: [],
};

let dashboardSettings = cloneValue(defaultDashboardSettings);
let staffMembers = cloneValue(defaultStaffMembers);
let cashArchive = createDefaultCashArchive();
let cashPaymentOverrides = {};
let generalSettings = cloneValue(defaultGeneralSettings);
const accountApproverUsername = "95723051";
const accountApprovalSecondMs = 1000;
const accountApprovalMinuteMs = 60 * accountApprovalSecondMs;
const accountApprovalDayMs = 24 * 60 * 60 * 1000;
let accounts = normalizeAccounts(loadJson("cwAccounts", []));
let accountRequests = normalizeAccountRequests(loadJson("cwAccountRequests", []));
let activeAccountId = localStorage.getItem("cwActiveAccountId") || "";
let activeTheme = localStorage.getItem("cwTheme") === "dark" ? "dark" : "light";
let accountApiAvailable = false;
let accountApiChecked = false;
let accountApiCheckPromise = null;
let accountRequestSyncPromise = null;
let accountApiUnavailableMessage = "";
let accountApiToken = localStorage.getItem("cwAccountApiToken") || sessionStorage.getItem("cwAccountApiToken") || "";
if (accountApiToken) localStorage.setItem("cwAccountApiToken", accountApiToken);
sessionStorage.removeItem("cwAccountApiToken");
const themeTogglePositionKey = "cwThemeTogglePosition";
let themeToggleDrag = null;
let themeToggleHold = null;
let ignoreThemeToggleClick = false;
let accountAdminVisible = false;
let pendingCompletedDeleteId = "";
let pendingStaffShopDeleteId = "";
const themeToggleAccountHoldMs = 850;
let desktopThemeToggleCount = 0;
let desktopThemeToggleResetTimer = 0;
const desktopThemeToggleWindowMs = 8000;

const pageCopy = {
  dashboard: { eyebrow: "Дотоод ажиллагаа", title: "Өнөөдрийн ажлын самбар" },
  bays: { eyebrow: "Бүртгэл", title: "Машины бүртгэл" },
  finance: { eyebrow: "Өнөөдрийн касс", title: "Касс" },
  director: { eyebrow: "Захирлын хэсэг", title: "Захирлын хяналт" },
  admin: { eyebrow: "Удирдлага", title: "Тохиргоо ба мэдээллийн удирдлага" },
};

function formatMoney(amount) {
  return `₮ ${formatter.format(amount)}`;
}

function getPaymentMethod(payment) {
  if (payment === "Хуваасан") return "Хуваасан";
  return archivePayments.includes(payment) ? payment : "Карт";
}

function getPaymentClass(payment) {
  const method = getPaymentMethod(payment);
  if (method === "Бэлэн") return "payment-cash";
  if (method === "Данс") return "payment-transfer";
  if (method === "Хуваасан") return "payment-split";
  return "payment-card";
}

function normalizePaymentAmounts(value, total = 0, fallbackPayment = "") {
  const hasSavedAmounts = value && typeof value === "object" && !Array.isArray(value);
  const amounts = {
    cash: Math.max(0, Math.round(Number(value?.cash) || 0)),
    card: Math.max(0, Math.round(Number(value?.card) || 0)),
    transfer: Math.max(0, Math.round(Number(value?.transfer) || 0)),
  };

  if (!hasSavedAmounts && archivePayments.includes(fallbackPayment)) {
    const key = paymentAmountOptions.find((option) => option.label === fallbackPayment)?.key || "card";
    amounts[key] = Math.max(0, Math.round(Number(total) || 0));
  }
  return amounts;
}

function getPaymentAmountsTotal(amounts) {
  return paymentAmountOptions.reduce((sum, option) => sum + (Number(amounts?.[option.key]) || 0), 0);
}

function getPaymentAmountsMethod(amounts) {
  const usedMethods = paymentAmountOptions.filter((option) => (Number(amounts?.[option.key]) || 0) > 0);
  if (usedMethods.length === 1) return usedMethods[0].label;
  return usedMethods.length > 1 ? "Хуваасан" : "";
}

function getPaymentAmountsLabel(amounts) {
  const usedMethods = paymentAmountOptions.filter((option) => (Number(amounts?.[option.key]) || 0) > 0);
  if (!usedMethods.length) return "Дүн оруулаагүй";
  if (usedMethods.length === 1) return usedMethods[0].label;
  return usedMethods.map((option) => `${option.label} ${formatMoney(amounts[option.key])}`).join(" + ");
}

function getTransactionPaymentAmounts(transaction) {
  return normalizePaymentAmounts(transaction?.paymentAmounts, Number(transaction?.amount) || 0, transaction?.payment);
}

function getDailyPaymentSummary(dateKey) {
  const transactions = Array.isArray(cashArchive[dateKey]) ? cashArchive[dateKey] : [];
  const actual = transactions.reduce(
    (summary, transaction) => {
      const amount = Number(transaction.amount) || 0;
      const paymentAmounts = getTransactionPaymentAmounts(transaction);
      summary.income += amount;
      summary.cash += paymentAmounts.cash;
      summary.card += paymentAmounts.card;
      summary.transfer += paymentAmounts.transfer;
      return summary;
    },
    { income: 0, card: 0, cash: 0, transfer: 0 },
  );
  const override = cashPaymentOverrides[dateKey];
  const overrideTotal = override
    ? (Number(override.card) || 0) + (Number(override.cash) || 0) + (Number(override.transfer) || 0)
    : -1;

  if (override && overrideTotal === actual.income) {
    return {
      ...actual,
      card: Number(override.card) || 0,
      cash: Number(override.cash) || 0,
      transfer: Number(override.transfer) || 0,
      overridden: true,
    };
  }
  return { ...actual, overridden: false };
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

function getAccountApiErrorMessage(error, fallback = "Сервертэй холбогдох үед алдаа гарлаа.") {
  return error?.body?.error || error?.message || fallback;
}

async function checkAccountApiAvailability(force = false) {
  if (!force && accountApiChecked) return accountApiAvailable;
  if (!force && accountApiCheckPromise) return accountApiCheckPromise;

  accountApiCheckPromise = (async () => {
    if (window.location.protocol === "file:") {
      accountApiAvailable = false;
      accountApiUnavailableMessage = "";
      accountApiChecked = true;
      accountApiCheckPromise = null;
      return false;
    }

    try {
      const response = await fetch("/api/health", {
        cache: "no-store",
        headers: { Accept: "application/json" },
      });
      const contentType = response.headers.get("content-type") || "";
      if (!contentType.includes("application/json")) {
        throw new Error("Account API олдсонгүй.");
      }
      const data = await response.json();
      accountApiAvailable = Boolean(response.ok && data.database);
      accountApiUnavailableMessage = accountApiAvailable
        ? ""
        : "Аккаунтын серверийн өгөгдлийн сан холбогдоогүй байна. Түр хүлээгээд дахин оролдоно уу.";
    } catch {
      accountApiAvailable = false;
      accountApiUnavailableMessage = "Аккаунтын серверт холбогдож чадсангүй. Холболтоо шалгаад дахин оролдоно уу.";
    }

    accountApiChecked = true;
    accountApiCheckPromise = null;
    return accountApiAvailable;
  })();

  return accountApiCheckPromise;
}

async function accountApiRequest(path, options = {}) {
  let response;
  try {
    response = await fetch(path, {
      ...options,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...(accountApiToken ? { Authorization: `Bearer ${accountApiToken}` } : {}),
        ...(options.headers || {}),
      },
    });
  } catch {
    const error = new Error("Аккаунтын серверт холбогдож чадсангүй. Холболтоо шалгаад дахин оролдоно уу.");
    error.network = true;
    throw error;
  }

  const contentType = response.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) {
    const error = new Error("Аккаунтын серверийн хариу буруу байна. Хуудсаа шинэчлээд дахин оролдоно уу.");
    error.status = response.status;
    error.apiUnavailable = true;
    throw error;
  }

  const body = await response.json().catch(() => ({}));

  if (!response.ok) {
    if (response.status === 401 && path !== "/api/accounts/login") {
      accountApiToken = "";
      localStorage.removeItem("cwAccountApiToken");
    }
    const error = new Error(body.error || "Сервертэй холбогдох үед алдаа гарлаа.");
    error.status = response.status;
    error.body = body;
    throw error;
  }

  return body;
}

function setAccountApiSession(session) {
  accountApiToken = String(session?.token || "");
  if (accountApiToken) localStorage.setItem("cwAccountApiToken", accountApiToken);
  else localStorage.removeItem("cwAccountApiToken");
}

function createApiManagedAccount(account, password = "") {
  return {
    ...account,
    password,
    apiManaged: true,
  };
}

function createApiManagedRequest(request) {
  return {
    ...request,
    password: "",
    apiManaged: true,
  };
}

function upsertAccount(account) {
  const normalized = normalizeAccounts([account])[0];
  if (!normalized) return null;

  const existingIndex = accounts.findIndex((item) => item.id === normalized.id || item.username === normalized.username);
  if (existingIndex >= 0) {
    const existing = accounts[existingIndex];
    accounts[existingIndex] = {
      ...existing,
      ...normalized,
      password: normalized.password || existing.password,
    };
    saveAccounts();
    return accounts[existingIndex];
  }

  accounts.unshift(normalized);
  saveAccounts();
  return accounts[0];
}

function upsertAccountRequest(request) {
  const normalized = normalizeAccountRequests([request])[0];
  if (!normalized) return null;

  const existingIndex = accountRequests.findIndex((item) => item.id === normalized.id);
  if (existingIndex >= 0) {
    accountRequests[existingIndex] = { ...accountRequests[existingIndex], ...normalized };
    saveAccountRequests();
    return accountRequests[existingIndex];
  }

  accountRequests.unshift(normalized);
  saveAccountRequests();
  return accountRequests[0];
}

function replaceApiAccountRequests(requests = []) {
  const apiRequests = normalizeAccountRequests(requests.map(createApiManagedRequest));
  const localRequests = accountRequests.filter((request) => !request.apiManaged);
  accountRequests = [...apiRequests, ...localRequests];
  saveAccountRequests();
}

async function ensureApproverApiSession(forceLogin = false) {
  if (!isApproverAccount()) return false;
  if (accountApiToken && !forceLogin) return true;
  if (forceLogin) setAccountApiSession(null);

  const account = getActiveAccount();
  const password = String(account?.password || "");
  if (!password) return false;

  try {
    const result = await accountApiRequest("/api/accounts/login", {
      method: "POST",
      body: JSON.stringify({
        username: accountApproverUsername,
        password,
        name: account?.name || "Удирдлага",
      }),
    });
    setAccountApiSession(result.session);
    if (account) {
      account.apiManaged = true;
      saveAccounts();
    }
    return Boolean(accountApiToken);
  } catch (error) {
    setAccountApiSession(null);
    return false;
  }
}

async function syncAccountRequestsFromApi(forceHealthCheck = false) {
  if (!isApproverAccount()) return false;
  if (accountRequestSyncPromise) return accountRequestSyncPromise;

  accountRequestSyncPromise = (async () => {
    if (!(await checkAccountApiAvailability(forceHealthCheck))) {
      renderAccountRequests();
      return false;
    }

    try {
      await ensureApproverApiSession();
      let data;
      try {
        data = await accountApiRequest(`/api/account-requests/pending?approverUsername=${encodeURIComponent(accountApproverUsername)}`);
      } catch (error) {
        if (error.status !== 401 || !(await ensureApproverApiSession(true))) throw error;
        data = await accountApiRequest(`/api/account-requests/pending?approverUsername=${encodeURIComponent(accountApproverUsername)}`);
      }
      replaceApiAccountRequests(data.requests || []);
      renderAccountRequests();
      return true;
    } catch (error) {
      if (error.network || error.apiUnavailable) {
        accountApiAvailable = false;
        accountApiChecked = false;
      }
      setAccountApprovalNotice(getAccountApiErrorMessage(error, "Account хүсэлтүүд уншихад алдаа гарлаа."), "error");
      return false;
    }
  })();

  try {
    return await accountRequestSyncPromise;
  } finally {
    accountRequestSyncPromise = null;
  }
}

const accountDataVersion = "account-data-v1";
const shopCatalogVersion = 1;
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
  "cwCashPaymentOverrides",
  "cwStaffShopPurchases",
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
    shopCatalogVersion,
    servicePrices: cloneValue(defaultServicePrices),
    customerProfiles: cloneValue(defaultCustomerProfiles),
    shopProducts: normalizeShopProducts(defaultShopProducts),
    staffShopPurchases: cloneValue(defaultStaffShopPurchases),
    queue: cloneValue(defaultQueue),
    bays: cloneValue(defaultBays),
    completedBayCars: [],
    dashboardSettings: { ...cloneValue(defaultDashboardSettings), queueCount: 0 },
    staffMembers: cloneValue(defaultStaffMembers),
    cashArchive: createDefaultCashArchive(),
    cashPaymentOverrides: {},
    generalSettings: cloneValue(defaultGeneralSettings),
  };
}

function getLegacyAccountData() {
  const hasLegacyData = legacyAccountDataKeys.some((key) => localStorage.getItem(key) !== null);
  if (!hasLegacyData) return null;

  return {
    dataVersion: accountDataVersion,
    shopCatalogVersion: 0,
    servicePrices: loadJson("cwServicePrices", defaultServicePrices),
    customerProfiles: loadJson("cwCustomerProfiles", defaultCustomerProfiles),
    shopProducts: loadJson("cwShopProducts", defaultShopProducts),
    staffShopPurchases: loadJson("cwStaffShopPurchases", defaultStaffShopPurchases),
    queue: loadJson("cwQueue", defaultQueue),
    bays: loadJson("cwBays", defaultBays),
    completedBayCars: loadJson("cwCompletedBayCars", []),
    dashboardSettings: loadJson("cwDashboardSettings", defaultDashboardSettings),
    staffMembers: loadJson("cwStaffMembers", defaultStaffMembers),
    cashArchive: loadJson("cwCashArchive", createDefaultCashArchive()),
    cashPaymentOverrides: loadJson("cwCashPaymentOverrides", {}),
    generalSettings: loadJson("cwGeneralSettings", defaultGeneralSettings),
  };
}

function buildAccountData() {
  return {
    dataVersion: accountDataVersion,
    shopCatalogVersion,
    servicePrices,
    customerProfiles,
    shopProducts,
    staffShopPurchases,
    queue,
    bays,
    completedBayCars,
    dashboardSettings,
    staffMembers,
    cashArchive,
    cashPaymentOverrides,
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
  shopProducts = Number(savedData.shopCatalogVersion || 0) < shopCatalogVersion
    ? mergeDefaultShopProducts(data.shopProducts)
    : normalizeShopProducts(data.shopProducts);
  staffShopPurchases = normalizeStaffShopPurchases(data.staffShopPurchases);
  queue = normalizeQueueItems(Array.isArray(data.queue) ? data.queue : []);
  bays = Array.isArray(data.bays) ? cloneValue(data.bays) : cloneValue(defaultBays);
  completedBayCars = Array.isArray(data.completedBayCars) ? cloneValue(data.completedBayCars) : [];
  dashboardSettings = { ...cloneValue(defaultDashboardSettings), ...(data.dashboardSettings || {}), queueCount: queue.length };
  staffMembers = Array.isArray(data.staffMembers) ? cloneValue(data.staffMembers) : cloneValue(defaultStaffMembers);
  cashArchive = data.cashArchive && typeof data.cashArchive === "object" && !Array.isArray(data.cashArchive)
    ? cloneValue(data.cashArchive)
    : createDefaultCashArchive();
  cashPaymentOverrides = normalizeCashPaymentOverrides(data.cashPaymentOverrides);
  generalSettings = { ...cloneValue(defaultGeneralSettings), ...(data.generalSettings || {}) };
  directorPanelUnlocked = false;
  accountAdminVisible = false;

  activeDashboardQueueId = "";
  activeDashboardShopId = "";
  activeDashboardPaymentId = "";
  selectedCashRange = "today";
  selectedPayrollRange = "today";
  selectedArchiveDate = getDateKey(0);
  selectedDailyQueueDate = getDateKey(0);
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

function saveCashPaymentOverrides() {
  saveAccountData();
}

function saveStaffShopPurchases() {
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
  const isDark = activeTheme === "dark";
  const themeColor = document.querySelector('meta[name="theme-color"]');
  if (themeColor) themeColor.content = isDark ? "#0f1713" : "#f5f6f1";

  if (themeToggle) {
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

function registerDesktopAdminThemeToggle() {
  if (window.matchMedia("(max-width: 760px)").matches || !isApproverAccount()) {
    desktopThemeToggleCount = 0;
    return;
  }

  desktopThemeToggleCount += 1;
  if (desktopThemeToggleResetTimer) window.clearTimeout(desktopThemeToggleResetTimer);

  if (desktopThemeToggleCount >= 4) {
    desktopThemeToggleCount = 0;
    desktopThemeToggleResetTimer = 0;
    accountAdminVisible = true;
    themeToggle?.classList.add("account-access-granted");
    showDashboard("admin");
    renderAccountRequests();
    syncAccountRequestsFromApi(true);
    window.setTimeout(() => themeToggle?.classList.remove("account-access-granted"), 650);
    return;
  }

  desktopThemeToggleResetTimer = window.setTimeout(() => {
    desktopThemeToggleCount = 0;
    desktopThemeToggleResetTimer = 0;
  }, desktopThemeToggleWindowMs);
}

function getThemeTogglePosition() {
  try {
    const position = JSON.parse(localStorage.getItem(themeTogglePositionKey));
    const left = Number(position?.left);
    const top = Number(position?.top);
    return Number.isFinite(left) && Number.isFinite(top) ? { left, top } : null;
  } catch {
    return null;
  }
}

function applyThemeTogglePosition() {
  if (!themeToggle) return;

  if (!window.matchMedia("(max-width: 760px)").matches) {
    themeToggle.style.left = "";
    themeToggle.style.top = "";
    themeToggle.style.right = "";
    themeToggle.style.bottom = "";
    return;
  }

  const position = getThemeTogglePosition();
  if (!position) return;

  const inset = 8;
  const maxLeft = Math.max(inset, window.innerWidth - themeToggle.offsetWidth - inset);
  const maxTop = Math.max(inset, window.innerHeight - themeToggle.offsetHeight - inset);
  const left = Math.round(Math.min(maxLeft, Math.max(inset, position.left * maxLeft)));
  const top = Math.round(Math.min(maxTop, Math.max(inset, position.top * maxTop)));

  themeToggle.style.left = `${left}px`;
  themeToggle.style.top = `${top}px`;
  themeToggle.style.right = "auto";
  themeToggle.style.bottom = "auto";
}

function beginThemeToggleDrag(event) {
  beginThemeToggleHold(event);
  if (!themeToggle || !window.matchMedia("(max-width: 760px)").matches) return;
  if (event.pointerType === "mouse" && event.button !== 0) return;

  const rect = themeToggle.getBoundingClientRect();
  themeToggleDrag = {
    pointerId: event.pointerId,
    startX: event.clientX,
    startY: event.clientY,
    left: rect.left,
    top: rect.top,
    moved: false,
  };
  themeToggle.setPointerCapture?.(event.pointerId);
}

function moveThemeToggle(event) {
  moveThemeToggleHold(event);
  if (!themeToggle || !themeToggleDrag || event.pointerId !== themeToggleDrag.pointerId) return;

  const deltaX = event.clientX - themeToggleDrag.startX;
  const deltaY = event.clientY - themeToggleDrag.startY;
  if (!themeToggleDrag.moved && Math.hypot(deltaX, deltaY) < 8) return;

  event.preventDefault();
  themeToggleDrag.moved = true;
  themeToggle.classList.add("is-dragging");

  const inset = 8;
  const maxLeft = Math.max(inset, window.innerWidth - themeToggle.offsetWidth - inset);
  const maxTop = Math.max(inset, window.innerHeight - themeToggle.offsetHeight - inset);
  const left = Math.min(maxLeft, Math.max(inset, themeToggleDrag.left + deltaX));
  const top = Math.min(maxTop, Math.max(inset, themeToggleDrag.top + deltaY));

  themeToggle.style.left = `${Math.round(left)}px`;
  themeToggle.style.top = `${Math.round(top)}px`;
  themeToggle.style.right = "auto";
  themeToggle.style.bottom = "auto";
}

function endThemeToggleDrag(event) {
  endThemeToggleHold(event);
  if (!themeToggle || !themeToggleDrag || event.pointerId !== themeToggleDrag.pointerId) return;

  const moved = themeToggleDrag.moved;
  themeToggle.releasePointerCapture?.(event.pointerId);
  themeToggleDrag = null;
  themeToggle.classList.remove("is-dragging");

  if (!moved) return;

  const inset = 8;
  const maxLeft = Math.max(inset, window.innerWidth - themeToggle.offsetWidth - inset);
  const maxTop = Math.max(inset, window.innerHeight - themeToggle.offsetHeight - inset);
  const rect = themeToggle.getBoundingClientRect();
  localStorage.setItem(themeTogglePositionKey, JSON.stringify({
    left: Math.min(1, Math.max(0, rect.left / maxLeft)),
    top: Math.min(1, Math.max(0, rect.top / maxTop)),
  }));
  ignoreThemeToggleClick = true;
  window.setTimeout(() => {
    ignoreThemeToggleClick = false;
  }, 0);
}

function clearThemeToggleHold() {
  if (themeToggleHold?.timer) window.clearTimeout(themeToggleHold.timer);
  themeToggleHold = null;
}

function beginThemeToggleHold(event) {
  if (!themeToggle || !isApproverAccount()) return;
  if (!window.matchMedia("(max-width: 760px)").matches) return;
  if (event.pointerType === "mouse" && event.button !== 0) return;

  clearThemeToggleHold();
  const hold = {
    pointerId: event.pointerId,
    startX: event.clientX,
    startY: event.clientY,
    triggered: false,
    timer: 0,
  };
  hold.timer = window.setTimeout(() => {
    if (themeToggleHold !== hold) return;
    hold.triggered = true;
    accountAdminVisible = true;
    ignoreThemeToggleClick = true;
    themeToggle.classList.add("account-access-granted");
    globalThis.navigator?.vibrate?.(35);
    showDashboard("admin");
    renderAccountRequests();
    syncAccountRequestsFromApi(true);
    window.setTimeout(() => themeToggle?.classList.remove("account-access-granted"), 650);
  }, themeToggleAccountHoldMs);
  themeToggleHold = hold;
}

function moveThemeToggleHold(event) {
  if (!themeToggleHold || event.pointerId !== themeToggleHold.pointerId || themeToggleHold.triggered) return;
  if (Math.hypot(event.clientX - themeToggleHold.startX, event.clientY - themeToggleHold.startY) >= 8) {
    clearThemeToggleHold();
  }
}

function endThemeToggleHold(event) {
  if (!themeToggleHold || event.pointerId !== themeToggleHold.pointerId) return;
  const triggered = themeToggleHold.triggered;
  clearThemeToggleHold();
  if (!triggered) return;

  ignoreThemeToggleClick = true;
  window.setTimeout(() => {
    ignoreThemeToggleClick = false;
  }, 350);
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
      apiManaged: Boolean(account.apiManaged),
      createdAt: Number(account.createdAt) || Date.now(),
      approvedAt: Number(account.approvedAt) || Number(account.createdAt) || Date.now(),
      approvedBy: String(account.approvedBy || ""),
      expiresAt: normalizeAccountUsername(account.username) === accountApproverUsername ? 0 : Number(account.expiresAt) || 0,
    }))
    .filter((account) => account.username && (account.password || account.apiManaged));
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
        apiManaged: Boolean(request.apiManaged),
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
    .filter((request) => request.username && (request.password || request.apiManaged));
}

function getPendingAccountRequests() {
  return accountRequests
    .filter((request) => request.status === "pending")
    .filter((request) => !accountApiAvailable || request.apiManaged);
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
    apiManaged: false,
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
  if (account.apiManaged) return;

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

async function approveAccountRequest(requestId, duration = { days: 0, minutes: 30, seconds: 0 }) {
  if (!isApproverAccount()) return;

  const request = accountRequests.find((item) => item.id === requestId && item.status === "pending");
  const approvedDuration = normalizeApprovalDurationParts(duration);
  const expiresAt = Date.now() + approvedDuration.totalMs;

  if (await checkAccountApiAvailability()) {
    try {
      setAccountApprovalNotice("Account зөвшөөрч байна...", "");
      const result = await accountApiRequest(`/api/account-requests/${encodeURIComponent(requestId)}/approve`, {
        method: "POST",
        body: JSON.stringify({
          approverUsername: accountApproverUsername,
          duration,
        }),
      });

      if (result.account) upsertAccount(createApiManagedAccount(result.account));
      if (result.request) upsertAccountRequest(createApiManagedRequest(result.request));
      await syncAccountRequestsFromApi();

      const approvedRequest = result.request || request;
      const approvedAccount = result.account || {};
      const apiDuration = approvedRequest
        ? {
            days: approvedRequest.durationDays,
            minutes: approvedRequest.durationMinutes,
            seconds: approvedRequest.durationSeconds,
          }
        : approvedDuration;
      setAccountApprovalNotice(`${approvedRequest?.name || "Account"} account ${formatApprovalDuration(apiDuration)} буюу ${formatAccountExpiry(approvedRequest?.expiresAt || approvedAccount.expiresAt)} хүртэл зөвшөөрөгдлөө.`, "success");
    } catch (error) {
      setAccountApprovalNotice(getAccountApiErrorMessage(error, "Account зөвшөөрөхөд алдаа гарлаа."), "error");
      await syncAccountRequestsFromApi();
    }
    return;
  }

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

async function rejectAccountRequest(requestId) {
  if (!isApproverAccount()) return;

  const request = accountRequests.find((item) => item.id === requestId && item.status === "pending");

  if (await checkAccountApiAvailability()) {
    try {
      setAccountApprovalNotice("Account хүсэлт татгалзаж байна...", "");
      const result = await accountApiRequest(`/api/account-requests/${encodeURIComponent(requestId)}/reject`, {
        method: "POST",
        body: JSON.stringify({ approverUsername: accountApproverUsername }),
      });

      if (result.request) upsertAccountRequest(createApiManagedRequest(result.request));
      await syncAccountRequestsFromApi();
      setAccountApprovalNotice(`${result.request?.name || request?.name || "Account"} хүсэлт татгалзагдлаа.`, "error");
    } catch (error) {
      setAccountApprovalNotice(getAccountApiErrorMessage(error, "Account хүсэлт татгалзахад алдаа гарлаа."), "error");
      await syncAccountRequestsFromApi();
    }
    return;
  }

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

  const canManageAccounts = isApproverAccount() && accountAdminVisible;
  accountApprovalPanel.hidden = !canManageAccounts;
  if (!canManageAccounts) {
    accountRequestList.innerHTML = "";
    if (accountDirectoryList) accountDirectoryList.innerHTML = "";
    if (accountDirectoryCount) accountDirectoryCount.textContent = "0 аккаунт";
    return;
  }

  renderAccountDirectory();
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
            <span>Нууц үг: ${request.password ? escapeHtml(request.password) : "Серверт хамгаалагдсан"}</span>
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

function formatAccountRemainingTime(expiresAt) {
  const timestamp = Number(expiresAt) || 0;
  if (!timestamp) return "Хугацаагүй";

  const remainingMs = timestamp - Date.now();
  if (remainingMs <= 0) return "Хугацаа дууссан";

  const totalSeconds = Math.max(1, Math.floor(remainingMs / 1000));
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  if (days) return `${days} өдөр ${hours} цаг үлдсэн`;
  if (hours) return `${hours} цаг ${minutes} минут үлдсэн`;
  if (minutes) return `${minutes} минут ${seconds} секунд үлдсэн`;
  return `${seconds} секунд үлдсэн`;
}

function renderAccountDirectory() {
  if (!accountDirectoryList || !accountDirectoryCount) return;
  if (!isApproverAccount() || !accountAdminVisible) {
    accountDirectoryList.innerHTML = "";
    accountDirectoryCount.textContent = "0 аккаунт";
    return;
  }

  const items = [...accounts].sort((a, b) => {
    if (isApproverAccount(a)) return -1;
    if (isApproverAccount(b)) return 1;
    return (Number(b.approvedAt) || Number(b.createdAt) || 0) - (Number(a.approvedAt) || Number(a.createdAt) || 0);
  });
  accountDirectoryCount.textContent = `${items.length} аккаунт`;

  if (!items.length) {
    accountDirectoryList.innerHTML = `<p class="account-request-empty">Нээгдсэн аккаунт алга.</p>`;
    return;
  }

  accountDirectoryList.innerHTML = items
    .map((account) => {
      const expiresAt = Number(account.expiresAt) || 0;
      const isExpired = Boolean(expiresAt && expiresAt <= Date.now());
      const password = String(account.password || "");
      const statusLabel = isExpired ? "Хугацаа дууссан" : expiresAt ? "Идэвхтэй" : "Хугацаагүй";
      const statusClass = isExpired ? "is-expired" : "is-active";
      return `
        <article class="account-directory-card ${statusClass}" data-account-directory-id="${escapeHtml(account.id)}">
          <div class="account-directory-primary">
            <strong>${escapeHtml(account.name || "Нэргүй")}</strong>
            <span class="account-directory-status">${escapeHtml(statusLabel)}</span>
          </div>
          <dl>
            <div><dt>Нэвтрэх нэр</dt><dd>${escapeHtml(account.username)}</dd></div>
            <div><dt>Нууц үг</dt><dd class="account-password-value">${password ? escapeHtml(password) : "Серверт хамгаалагдсан"}</dd></div>
            <div><dt>Үлдсэн хугацаа</dt><dd>${escapeHtml(formatAccountRemainingTime(expiresAt))}</dd></div>
            <div><dt>Дуусах огноо</dt><dd>${escapeHtml(formatAccountExpiry(expiresAt))}</dd></div>
          </dl>
          <form class="account-password-reset" data-account-password-reset="${escapeHtml(account.id)}">
            <label>
              <span>Шинэ нууц үг</span>
              <input name="newPassword" type="password" minlength="4" autocomplete="new-password" placeholder="4-өөс дээш тэмдэгт" required />
            </label>
            <button class="ghost-button compact" type="submit">Нууц үг солих</button>
          </form>
          <form class="account-director-reset" data-account-director-reset="${escapeHtml(account.id)}">
            <label>
              <span>Захирлын шинэ 4 оронтой код</span>
              <input name="directorPin" type="password" inputmode="numeric" pattern="[0-9]{4}" minlength="4" maxlength="4" autocomplete="new-password" placeholder="••••" required />
            </label>
            <button class="ghost-button compact" type="submit">Захирлын код солих</button>
          </form>
          ${isApproverAccount(account) ? "" : `<button class="ghost-button compact danger account-delete-button" type="button" data-delete-account="${escapeHtml(account.id)}">Account устгах</button>`}
        </article>
      `;
    })
    .join("");
}

async function changeAccountPassword(accountId, newPassword) {
  if (!isApproverAccount() || !accountAdminVisible) return;
  const account = accounts.find((item) => String(item.id) === String(accountId));
  if (!account) {
    setAccountApprovalNotice("Account олдсонгүй.", "error");
    return;
  }
  if (newPassword.length < 4) {
    setAccountApprovalNotice("Шинэ нууц үг хамгийн багадаа 4 тэмдэгт байна.", "error");
    return;
  }

  if (account.apiManaged && await checkAccountApiAvailability(true)) {
    try {
      setAccountApprovalNotice(`${account.name} account-ийн нууц үгийг сольж байна...`, "");
      const result = await accountApiRequest(`/api/accounts/${encodeURIComponent(account.id)}/password`, {
        method: "POST",
        body: JSON.stringify({
          approverUsername: accountApproverUsername,
          newPassword,
        }),
      });
      const updatedAccount = upsertAccount({
        ...result.account,
        password: newPassword,
        apiManaged: true,
      });
      setAccountApprovalNotice(`${updatedAccount?.name || account.name} account-ийн нууц үг солигдлоо.`, "success");
      renderAccountDirectory();
    } catch (error) {
      setAccountApprovalNotice(getAccountApiErrorMessage(error, "Нууц үг солиход алдаа гарлаа."), "error");
    }
    return;
  }

  if (account.apiManaged) {
    setAccountApprovalNotice("Аккаунтын сервертэй холбогдсоны дараа нууц үгийг солино уу.", "error");
    return;
  }

  account.password = newPassword;
  saveAccounts();
  setAccountApprovalNotice(`${account.name} account-ийн нууц үг солигдлоо.`, "success");
  renderAccountDirectory();
}

async function changeAccountDirectorPin(accountId, pin) {
  if (!isApproverAccount() || !accountAdminVisible) return;
  const account = accounts.find((item) => String(item.id) === String(accountId));
  if (!account) {
    setAccountApprovalNotice("Account олдсонгүй.", "error");
    return;
  }
  if (!/^\d{4}$/.test(pin)) {
    setAccountApprovalNotice("Захирлын код 4 оронтой тоо байна.", "error");
    return;
  }

  const directorPinHash = await createDirectorPinHash(pin, false, account.id);
  if (String(account.id) === String(activeAccountId)) {
    generalSettings = { ...generalSettings, directorPinHash };
    directorPanelUnlocked = false;
    saveGeneralSettings();
    renderDirectorPanel();
    setDirectorLockFeedback();
  } else {
    const key = getAccountDataKey(account.id);
    const defaults = getDefaultAccountData();
    const savedData = readStoredJson(key) || defaults;
    const nextData = {
      ...defaults,
      ...savedData,
      generalSettings: {
        ...defaults.generalSettings,
        ...(savedData.generalSettings || {}),
        directorPinHash,
      },
    };
    localStorage.setItem(key, JSON.stringify(nextData));
  }

  setAccountApprovalNotice(`${account.name} account-ийн Захирлын код солигдлоо.`, "success");
  renderAccountDirectory();
}

async function deleteAccountByAdmin(accountId) {
  if (!isApproverAccount() || !accountAdminVisible) return;
  const account = accounts.find((item) => String(item.id) === String(accountId));
  if (!account) {
    setAccountApprovalNotice("Account олдсонгүй.", "error");
    return;
  }
  if (isApproverAccount(account)) {
    setAccountApprovalNotice("95723051 үндсэн админ account-ийг устгах боломжгүй.", "error");
    return;
  }
  if (!globalThis.confirm(`${account.name} (${account.username}) account-ийг бүрэн устгах уу?`)) return;

  if (account.apiManaged && await checkAccountApiAvailability(true)) {
    try {
      setAccountApprovalNotice(`${account.name} account-ийг устгаж байна...`, "");
      await accountApiRequest(`/api/accounts/${encodeURIComponent(account.id)}`, {
        method: "DELETE",
        body: JSON.stringify({ approverUsername: accountApproverUsername }),
      });
    } catch (error) {
      setAccountApprovalNotice(getAccountApiErrorMessage(error, "Account устгахад алдаа гарлаа."), "error");
      return;
    }
  } else if (account.apiManaged) {
    setAccountApprovalNotice("Аккаунтын сервертэй холбогдсоны дараа устгана уу.", "error");
    return;
  }

  accounts = accounts.filter((item) => String(item.id) !== String(account.id));
  accountRequests = accountRequests.filter((request) => String(request.accountId || "") !== String(account.id));
  localStorage.removeItem(getAccountDataKey(account.id));
  saveAccounts();
  saveAccountRequests();
  setAccountApprovalNotice(`${account.name} account устгагдлаа.`, "success");
  renderAccountRequests();
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
  accountAdminVisible = false;
  pendingCoverImage = "";
  activeAccountId = account.id;
  saveActiveAccount();
  loadAccountData();
  refreshAccountUi();
  setAccountFeedback(message, "success");
  closeSignupModal();
  if (isApproverAccount(account)) {
    showDashboard("dashboard");
    syncAccountRequestsFromApi();
  } else {
    showEntry();
  }
}

function logoutAccount() {
  saveAccountData();
  if (accountApiToken && accountApiAvailable) {
    accountApiRequest("/api/accounts/logout", { method: "POST", body: "{}" }).catch(() => {});
  }
  setAccountApiSession(null);
  accountAdminVisible = false;
  pendingCoverImage = "";
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
  setAccountApiSession(null);
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

  if (!/^\d{8}$/.test(phone)) {
    setFormFeedback(output, "Утасны дугаар 8 оронтой тоо байна.", "error");
    return "";
  }

  const existing = customerProfiles[phone];

  if (!existing) {
    customerProfiles[phone] = { phone, pin: "0000", plates: [plate] };
  } else {
    const plates = Array.isArray(existing.plates) ? existing.plates : [];
    if (!plates.includes(plate)) plates.push(plate);
    existing.plates = plates;
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

function getQueuePaymentAmounts(item) {
  return normalizePaymentAmounts(item.paymentAmounts, getQueueItemTotal(item), item.payment);
}

function isQueuePaymentComplete(item) {
  return getPaymentAmountsTotal(getQueuePaymentAmounts(item)) === getQueueItemTotal(item);
}

function renderQueuePaymentPanel(item) {
  const amounts = getQueuePaymentAmounts(item);
  const enteredTotal = getPaymentAmountsTotal(amounts);
  const requiredTotal = getQueueItemTotal(item);
  const matches = enteredTotal === requiredTotal;

  return `
    <div class="dashboard-payment-panel" data-payment-panel="${escapeHtml(item.bookingId)}">
      <div class="dashboard-payment-methods" role="group" aria-label="Төлбөрийн хэлбэр">
        ${paymentAmountOptions
          .map(
            (option) => `
              <label class="dashboard-payment-method">
                <span>${option.label}</span>
                <input type="number" min="0" step="500" inputmode="numeric" value="${amounts[option.key]}" data-payment-amount="${option.key}" aria-label="${option.label} төлбөрийн дүн" />
              </label>
            `,
          )
          .join("")}
      </div>
      <output class="dashboard-payment-allocation ${matches ? "matches" : "mismatch"}" data-payment-allocation>
        ${formatMoney(enteredTotal)} / ${formatMoney(requiredTotal)}
      </output>
      <button class="dashboard-complete-button dashboard-payment-complete" type="button" data-complete-booking="${escapeHtml(item.bookingId)}" title="${matches ? (isCashRegisterOpen() ? "Машин дуусгах" : "Касс автоматаар нээгдэнэ") : "Төлбөрийн нийлбэрийг тааруулна уу"}" ${matches ? "" : "disabled"}>Дууслаа</button>
    </div>
  `;
}

function updateQueuePaymentPanelState(panel, item) {
  if (!panel) return;
  const amounts = { cash: 0, card: 0, transfer: 0 };
  panel.querySelectorAll("[data-payment-amount]").forEach((input) => {
    const key = input.dataset.paymentAmount;
    const amount = Math.max(0, Math.round(Number(input.value) || 0));
    amounts[key] = amount;
    if (Number(input.value) < 0) input.value = "0";
  });

  item.paymentAmounts = amounts;
  item.payment = getPaymentAmountsMethod(amounts);
  const enteredTotal = getPaymentAmountsTotal(amounts);
  const requiredTotal = getQueueItemTotal(item);
  const matches = enteredTotal === requiredTotal;
  const allocation = panel.querySelector("[data-payment-allocation]");
  const completeButton = panel.querySelector("[data-complete-booking]");
  const paymentCardLabel = panel.closest(".dashboard-queue-details")?.querySelector("[data-open-payment] small");

  if (allocation) {
    allocation.textContent = `${formatMoney(enteredTotal)} / ${formatMoney(requiredTotal)}`;
    allocation.className = `dashboard-payment-allocation ${matches ? "matches" : "mismatch"}`;
  }
  if (completeButton) {
    completeButton.disabled = !matches;
    completeButton.title = matches
      ? isCashRegisterOpen() ? "Машин дуусгах" : "Касс автоматаар нээгдэнэ"
      : "Төлбөрийн нийлбэрийг тааруулна уу";
  }
  if (paymentCardLabel) paymentCardLabel.textContent = getPaymentAmountsLabel(amounts);
  saveQueue();
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
  updateBayWashTimers();
}

function updateBayWashTimers() {
  document.querySelectorAll("[data-bay-wash-start]").forEach((timer) => {
    const startedAt = Number(timer.dataset.bayWashStart) || Date.now();
    timer.textContent = formatWaitDuration(Date.now() - startedAt);
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
  if (page === "payroll") return "director";
  return pageCopy[page] ? page : "";
}

function setActivePage(page) {
  document.body.dataset.page = page;
  pageEyebrow.textContent = pageCopy[page].eyebrow;
  pageTitle.textContent = pageCopy[page].title;

  pageLinks.forEach((link) => {
    const isActive = link.dataset.pageLink === page;
    link.classList.toggle("active", isActive);
    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function showDashboard(page = "dashboard") {
  if (!getActiveAccount()) {
    showAuth();
    return;
  }

  const nextPage = pageCopy[page] ? page : "dashboard";
  if (nextPage !== "admin" && accountAdminVisible) {
    accountAdminVisible = false;
    renderAccountRequests();
  }
  document.body.classList.remove("auth-mode");
  document.body.classList.remove("entry-mode");
  document.body.classList.add("dashboard-mode");
  authScreen?.setAttribute("aria-hidden", "true");
  entryScreen?.setAttribute("aria-hidden", "true");
  appShell.setAttribute("aria-hidden", "false");
  renderActiveAccount();
  setActivePage(nextPage);
  if (nextPage === "finance") {
    selectedCashRange = "today";
    renderCashStats();
  }
  history.replaceState(null, "", `${window.location.pathname}#${nextPage}`);
  window.scrollTo(0, 0);
}

function showEntry() {
  if (!getActiveAccount()) {
    showAuth();
    return;
  }

  accountAdminVisible = false;
  renderAccountRequests();

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

function formatDailyQueueTime(value) {
  const date = new Date(value);
  if (!Number.isFinite(date.getTime())) return "--:--";
  return date.toLocaleTimeString("mn-MN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

function renderDailyQueueRegister() {
  if (
    !dailyQueueRegisterCount ||
    !dailyQueueDate ||
    !dailyQueuePreviousDay ||
    !dailyQueueNextDay ||
    !dailyQueueList ||
    !dailyQueueEmpty
  ) {
    return;
  }

  const today = getDateKey(0);
  dailyQueueDate.max = today;
  dailyQueueDate.value = selectedDailyQueueDate;
  dailyQueueNextDay.disabled = selectedDailyQueueDate >= today;

  const activeItems = queue
    .filter((item) => getDateKeyFromTimestamp(item.createdAt) === selectedDailyQueueDate)
    .map((item) => ({
      id: item.bookingId,
      timestamp: Number(item.createdAt) || 0,
      time: formatDailyQueueTime(item.createdAt),
      plate: item.plate,
      service: item.service || "Үйлчилгээ",
      employee: item.employee || "Тодорхойгүй",
      status: item.status || "Хүлээж байна",
      completed: false,
    }));

  const completedItems = completedBayCars
    .filter((item) => String(item.date || getDateKeyFromTimestamp(item.completedAt)) === selectedDailyQueueDate)
    .map((item) => ({
      id: item.id || item.bookingId,
      timestamp: new Date(item.completedAt || `${item.date}T${item.time || "00:00"}`).getTime() || 0,
      time: item.time || formatDailyQueueTime(item.completedAt),
      plate: item.plate,
      service: item.service || "Үйлчилгээ",
      employee: item.employee || "Тодорхойгүй",
      status: "Дууссан",
      completed: true,
    }));

  const items = [...activeItems, ...completedItems].sort((a, b) => b.timestamp - a.timestamp);
  dailyQueueRegisterCount.textContent = `${items.length} машин`;
  dailyQueueList.hidden = items.length === 0;
  dailyQueueEmpty.hidden = items.length > 0;
  dailyQueueList.innerHTML = items
    .map((item) => {
      const statusClass = item.completed
        ? "is-completed"
        : item.status === "Ажиллаж байна"
          ? "is-working"
          : "is-waiting";
      return `
        <article class="daily-queue-row ${statusClass}" data-daily-queue-id="${escapeHtml(item.id || "")}">
          <time>${escapeHtml(item.time)}</time>
          <div class="daily-queue-main">
            <strong>${escapeHtml(item.plate)}</strong>
            <span>${escapeHtml(item.service)} · ${escapeHtml(item.employee)}</span>
          </div>
          <span class="daily-queue-status">${escapeHtml(item.status)}</span>
        </article>
      `;
    })
    .join("");
}

function renderQueue() {
  if (!queueList) return;
  renderBayMap();
  renderDailyQueueRegister();

  const items = queue;

  queueList.innerHTML = "";

  if (!items.length) {
    const empty = document.createElement("div");
    empty.className = "queue-item";
    empty.innerHTML = `
        <span class="queue-rank">0</span>
        <div class="queue-copy">
          <strong>Дараалал хоосон байна</strong>
          <span>Шинэ машин бүртгэхэд энд харагдана.</span>
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
        <button class="complete-button" type="button" aria-label="${item.plate} дуусгах" title="${isCashRegisterOpen() ? "Машин дуусгах" : "Касс автоматаар нээгдэнэ"}">
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

  const items = queue;

  dashboardQueueList.innerHTML = "";

  if (!items.length) {
    const empty = document.createElement("div");
    empty.className = "queue-item dashboard-queue-item";
    empty.innerHTML = `
      <span class="queue-rank">0</span>
      <div class="queue-copy">
        <strong>Дараалал хоосон байна</strong>
        <span>Шинэ машин бүртгэхэд энд шууд харагдана.</span>
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
                  <small>${escapeHtml(getPaymentAmountsLabel(getQueuePaymentAmounts(item)))}</small>
                </span>
              </button>
              ${activeDashboardShopId === item.bookingId ? renderQueueShopPanel(item) : ""}
              ${activeDashboardPaymentId === item.bookingId ? renderQueuePaymentPanel(item) : ""}
            </div>`
          : ""
      }
    `;

    row.addEventListener("click", (event) => {
      if (event.target.closest("button, input, select, textarea, label")) return;
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
      if (event.target.closest("button, input, select, textarea, label")) return;
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

    row.querySelectorAll("[data-payment-amount]").forEach((input) => {
      input.addEventListener("input", (event) => {
        event.stopPropagation();
        activeDashboardPaymentId = item.bookingId;
        updateQueuePaymentPanelState(input.closest("[data-payment-panel]"), item);
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
  renderBayMap();
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

function renderBayMapCar(colorIndex) {
  return `
    <svg class="bay-map-car car-color-${colorIndex}" viewBox="0 0 80 160" aria-hidden="true">
      <ellipse class="bay-car-shadow" cx="40" cy="82" rx="30" ry="67" />
      <rect class="bay-car-wheel" x="7" y="35" width="8" height="29" rx="4" />
      <rect class="bay-car-wheel" x="65" y="35" width="8" height="29" rx="4" />
      <rect class="bay-car-wheel" x="7" y="101" width="8" height="29" rx="4" />
      <rect class="bay-car-wheel" x="65" y="101" width="8" height="29" rx="4" />
      <path class="bay-car-body" d="M24 8h32l12 26v91l-10 27H22l-10-27V34L24 8Z" />
      <path class="bay-car-glass" d="m25 31 5-15h20l5 15 5 22H20l5-22Zm-5 78h40l-5 29H25l-5-29Z" />
      <rect class="bay-car-roof" x="21" y="59" width="38" height="43" rx="7" />
      <path class="bay-car-highlight" d="M21 37h4v66h-4V37Zm34 0h4v66h-4V37Z" />
      <rect class="bay-car-light" x="19" y="12" width="12" height="5" rx="2" />
      <rect class="bay-car-light" x="49" y="12" width="12" height="5" rx="2" />
      <rect class="bay-car-tail" x="18" y="142" width="13" height="5" rx="2" />
      <rect class="bay-car-tail" x="49" y="142" width="13" height="5" rx="2" />
    </svg>
  `;
}

function getBayMapCount() {
  return Math.max(1, Math.min(12, Number(generalSettings.bayMapCount) || 6));
}

function getMinimumBayMapCount() {
  const queueCount = queue.filter((item) => item.status !== "Захиалгатай").length;
  const lastOccupiedBay = bays.slice(0, 12).reduce((lastIndex, bay, index) => {
    return Number(bay?.progress) > 0 ? index + 1 : lastIndex;
  }, 0);
  return Math.min(12, Math.max(1, Math.min(queueCount, 12), lastOccupiedBay));
}

function renderBayCountControl(count = getBayMapCount()) {
  if (bayMapCount) bayMapCount.textContent = `${count} байр`;
  if (removeBayButton) {
    removeBayButton.disabled = count <= getMinimumBayMapCount();
  }
  if (addBayButton) {
    addBayButton.disabled = count >= 12;
  }
}

function changeBayMapCount(change) {
  const currentCount = getBayMapCount();
  const minimumCount = getMinimumBayMapCount();
  const nextCount = change < 0
    ? Math.max(minimumCount, currentCount - 1)
    : Math.min(12, currentCount + 1);
  if (nextCount === currentCount) return;

  generalSettings = { ...generalSettings, bayMapCount: nextCount };
  saveGeneralSettings();
  renderBays();
}

function renderBayMap() {
  if (!bayMap) return;

  const bayCount = getBayMapCount();
  renderBayCountControl(bayCount);
  const activeQueue = queue.filter((item) => item.status !== "Захиалгатай");
  const assignedBookingIds = new Set();
  const matchedQueueByBay = bays.slice(0, bayCount).map((bay) => {
    const match = activeQueue.find(
      (item) =>
        !assignedBookingIds.has(item.bookingId) &&
        normalizePlate(item.plate) === normalizePlate(bay?.vehicle),
    );
    if (match) assignedBookingIds.add(match.bookingId);
    return match || null;
  });
  const unassignedQueue = activeQueue.filter((item) => !assignedBookingIds.has(item.bookingId));
  let bayStartChanged = false;
  const slots = Array.from({ length: bayCount }, (_, index) => {
    const bay = bays[index] || null;
    const bayProgress = bay ? Math.max(0, Math.min(100, Number(bay.progress) || 0)) : 0;
    const queueItem = matchedQueueByBay[index] || (bayProgress === 0 ? unassignedQueue.shift() || null : null);
    const progress = bayProgress > 0 ? bayProgress : queueItem ? 18 : 0;
    const isOccupied = progress > 0;
    const vehicle = queueItem?.plate || bay?.vehicle || "";
    const state = queueItem
      ? queueItem.status === "Хүлээж байна"
        ? "Угаалгын байранд"
        : queueItem.status
      : bay?.state || "Сул";
    const slotName = bay?.name || `Байр ${index + 1}`;
    const matchedQueueItem = queueItem || (bay
      ? queue.find((item) => normalizePlate(item.plate) === normalizePlate(bay.vehicle))
      : null);
    const queueStartedAt = Number(queueItem?.acceptedAt) || Number(queueItem?.createdAt) || 0;

    if (bay && isOccupied && (!Number(bay.startedAt) || (queueStartedAt && Number(bay.startedAt) !== queueStartedAt))) {
      bay.startedAt = queueStartedAt || Number(matchedQueueItem?.acceptedAt) || Date.now();
      bayStartChanged = true;
    } else if (bay && !isOccupied && bay.startedAt) {
      bay.startedAt = null;
      bayStartChanged = true;
    }

    const startedAt =
      Number(matchedQueueItem?.acceptedAt) ||
      Number(matchedQueueItem?.createdAt) ||
      Number(bay?.startedAt) ||
      0;

    return `
      <article class="bay-map-slot ${isOccupied ? "is-occupied" : "is-empty"}">
        <header>
          <strong>${escapeHtml(slotName)}</strong>
          <span>${isOccupied ? `${progress}%` : "Сул"}</span>
        </header>
        <div class="bay-map-lane">
          <span class="bay-map-number" aria-hidden="true">${String(index + 1).padStart(2, "0")}</span>
          ${isOccupied && startedAt ? `<time class="bay-wash-timer" data-bay-wash-start="${startedAt}" aria-label="Угааж буй хугацаа">${formatWaitDuration(Date.now() - startedAt)}</time>` : ""}
          ${isOccupied ? `<span class="bay-wash-sweep" aria-hidden="true"></span>${renderBayMapCar(index % 6)}` : '<span class="bay-map-empty-mark" aria-hidden="true">P</span>'}
        </div>
        <footer>
          <strong>${isOccupied ? escapeHtml(vehicle || "Машин") : "Чөлөөтэй"}</strong>
          <span>${escapeHtml(isOccupied ? state : "Машин хүлээн авахад бэлэн")}</span>
        </footer>
      </article>
    `;
  });

  const occupiedCount = slots.filter((slot) => slot.includes("is-occupied")).length;
  bayMap.innerHTML = `
    <div class="bay-map-toolbar">
      <div>
        <span>Дээрээс харах</span>
        <strong>Угаалгын талбай</strong>
      </div>
      <span class="bay-map-occupancy">${occupiedCount}/${bayCount} ашиглагдаж байна</span>
    </div>
    <div class="bay-map-grid" style="--bay-map-columns:${Math.min(3, bayCount)}">${slots.join("")}</div>
  `;
  if (bayStartChanged) saveBays();
}

function renderCompletedBayCars() {
  if (!completedBayList || !completedBayEmpty || !completedBayCount) return;

  const items = completedBayCars.slice(0, 30);
  completedBayCount.textContent = `${completedBayCars.length} машин`;
  completedBayList.innerHTML = "";

  completedBayEmpty.hidden = items.length > 0;
  completedBayList.hidden = items.length === 0;

  items.forEach((item) => {
    const paymentAmounts = normalizePaymentAmounts(item.paymentAmounts, Number(item.amount) || 0, item.payment);
    const payment = getPaymentAmountsMethod(paymentAmounts) || getPaymentMethod(item.payment);
    const paymentDetails = getPaymentAmountsLabel(paymentAmounts);
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
        <span class="completed-payment-badge ${paymentClass}" title="${escapeHtml(paymentDetails)}">${escapeHtml(payment)}</span>
        <small>${escapeHtml(item.dateLabel || "Өнөөдөр")}</small>
        <button class="completed-bay-delete" type="button" data-delete-completed-bay="${escapeHtml(completedId)}" aria-label="${escapeHtml(item.plate)} машиныг Захирлын кодоор устгах" title="Захирлын код шаардана">Устгах</button>
      </div>
    `;
    completedBayList.append(row);
  });
}

function setCompletedDeleteFeedback(message = "", tone = "") {
  if (!completedDeleteFeedback) return;
  completedDeleteFeedback.textContent = message;
  completedDeleteFeedback.className = `completed-delete-feedback ${tone}`.trim();
}

function openCompletedDeleteModal(completedId) {
  if (!completedDeleteModal || !completedDeleteForm) return;
  const item = completedBayCars.find((completedItem) => {
    const itemId = String(completedItem.id || `${completedItem.bookingId || completedItem.plate}-${completedItem.completedAt || completedItem.time}`);
    return itemId === completedId;
  });
  if (!item) return;

  pendingCompletedDeleteId = completedId;
  completedDeleteForm.reset();
  if (completedDeletePlate) completedDeletePlate.textContent = item.plate || "-";
  setCompletedDeleteFeedback();
  completedDeleteModal.classList.add("open");
  completedDeleteModal.setAttribute("aria-hidden", "false");
  completedDeleteForm.elements.pin?.focus();
}

function closeCompletedDeleteModal() {
  pendingCompletedDeleteId = "";
  completedDeleteForm?.reset();
  setCompletedDeleteFeedback();
  completedDeleteModal?.classList.remove("open");
  completedDeleteModal?.setAttribute("aria-hidden", "true");
}

function deleteCompletedBayCar(completedId, directorApproved = false) {
  if (!directorApproved) return;
  const itemIndex = completedBayCars.findIndex((item) => {
    const itemId = String(item.id || `${item.bookingId || item.plate}-${item.completedAt || item.time}`);
    return itemId === completedId;
  });
  if (itemIndex === -1) return;

  const [removedItem] = completedBayCars.splice(itemIndex, 1);
  const removedAmount = removeCashTransactionForCompletedCar(removedItem);
  if (removedAmount > 0) {
    dashboardSettings.revenue = Math.max(0, (Number(dashboardSettings.revenue) || 0) - removedAmount);
  }

  saveCompletedBayCars();
  saveCashArchive();
  saveDashboardSettings();
  renderAll();
}

function removeCashTransactionForCompletedCar(completedItem) {
  const preferredDate = String(completedItem.date || "");
  const dateKeys = [preferredDate, ...Object.keys(cashArchive)].filter(
    (dateKey, index, values) => dateKey && values.indexOf(dateKey) === index,
  );
  const bookingId = String(completedItem.bookingId || "");
  const plate = normalizePlate(completedItem.plate);
  const time = String(completedItem.time || "").slice(0, 5);
  const employee = String(completedItem.employee || "").trim();

  for (const dateKey of dateKeys) {
    const transactions = Array.isArray(cashArchive[dateKey]) ? [...cashArchive[dateKey]] : [];
    const transactionIndex = transactions.findIndex((transaction) => {
      const transactionBookingId = String(transaction.bookingId || "");
      if (bookingId && transactionBookingId) return bookingId === transactionBookingId;
      if (transactionBookingId) return false;

      return (
        normalizePlate(transaction.plate) === plate &&
        String(transaction.time || "").slice(0, 5) === time &&
        String(transaction.employee || "").trim() === employee
      );
    });

    if (transactionIndex === -1) continue;
    const [removedTransaction] = transactions.splice(transactionIndex, 1);
    cashArchive[dateKey] = transactions;
    delete cashPaymentOverrides[dateKey];
    return Number(removedTransaction.amount) || 0;
  }

  return 0;
}

function addCompletedBayCar(item, completedAt = new Date()) {
  const dateKey = [
    completedAt.getFullYear(),
    String(completedAt.getMonth() + 1).padStart(2, "0"),
    String(completedAt.getDate()).padStart(2, "0"),
  ].join("-");

  const paymentAmounts = getQueuePaymentAmounts(item);
  completedBayCars.unshift({
    id: `${dateKey}-${Date.now()}`,
    bookingId: item.bookingId,
    plate: item.plate,
    service: item.service,
    employee: item.employee || "Тодорхойгүй",
    payment: getPaymentAmountsMethod(paymentAmounts) || "Карт",
    paymentAmounts,
    amount: getQueueItemTotal(item),
    washAmount: Number(item.price) || 0,
    salaryAmount: getPayrollSalary(Number(item.price) || 0),
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

  localStorage.removeItem("cwAdminCollapseState");

  adminCollapsePanels.forEach((panel, index) => {
    panel.open = false;
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

function getSavedCoverImage() {
  const value = String(localStorage.getItem(coverImageStorageKey) || "");
  return /^data:image\/(?:jpeg|png|webp);base64,/i.test(value) ? value : "";
}

function setCoverImageFeedback(message = "", tone = "") {
  const output = coverImageForm?.querySelector(".admin-feedback");
  if (!output) return;
  output.textContent = message;
  output.className = `admin-feedback ${tone}`.trim();
}

function renderCoverImageSettings() {
  const savedImage = getSavedCoverImage();
  const imageSource = pendingCoverImage || savedImage || defaultCoverImage;
  const isAdmin = isApproverAccount(getActiveAccount());

  if (entryCoverImage) entryCoverImage.src = savedImage || defaultCoverImage;
  if (dashboardCoverImage) dashboardCoverImage.src = savedImage || defaultCoverImage;
  if (coverImagePreview) coverImagePreview.src = imageSource;
  if (coverImageStatus) coverImageStatus.textContent = pendingCoverImage ? "Шинэ зураг" : savedImage ? "Өөрчилсөн" : "Анхны зураг";
  if (coverImageAdminPanel) coverImageAdminPanel.hidden = !isAdmin;
  if (resetCoverImageButton) resetCoverImageButton.disabled = !savedImage && !pendingCoverImage;
}

function prepareCoverImage(file) {
  return new Promise((resolve, reject) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
    if (!file || !allowedTypes.includes(file.type)) {
      reject(new Error("JPG, PNG эсвэл WEBP зураг сонгоно уу."));
      return;
    }
    if (file.size > 15 * 1024 * 1024) {
      reject(new Error("Зургийн хэмжээ 15 MB-аас бага байна."));
      return;
    }

    const reader = new FileReader();
    reader.onerror = () => reject(new Error("Зургийг уншиж чадсангүй."));
    reader.onload = () => {
      const image = new Image();
      image.onerror = () => reject(new Error("Зургийг нээж чадсангүй."));
      image.onload = () => {
        const maxWidth = 1400;
        const maxHeight = 900;
        const scale = Math.min(1, maxWidth / image.naturalWidth, maxHeight / image.naturalHeight);
        const width = Math.max(1, Math.round(image.naturalWidth * scale));
        const height = Math.max(1, Math.round(image.naturalHeight * scale));
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const context = canvas.getContext("2d");
        if (!context) {
          reject(new Error("Зургийг боловсруулах боломжгүй байна."));
          return;
        }
        context.fillStyle = "#15211c";
        context.fillRect(0, 0, width, height);
        context.drawImage(image, 0, 0, width, height);
        resolve(canvas.toDataURL("image/jpeg", 0.8));
      };
      image.src = String(reader.result || "");
    };
    reader.readAsDataURL(file);
  });
}

function isCashRegisterOpen() {
  return Boolean(generalSettings.cashRegisterOpen);
}

function formatCashRegisterTime(timestamp) {
  const value = Number(timestamp) || 0;
  if (!value) return "";

  return new Date(value).toLocaleString("mn-MN", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function renderCashRegister() {
  if (!cashStatus || !cashStatusTime || !cashToggleButton) return;

  const isOpen = isCashRegisterOpen();
  const timestamp = isOpen
    ? generalSettings.cashRegisterOpenedAt
    : generalSettings.cashRegisterClosedAt;

  cashStatus.textContent = isOpen ? "Нээлттэй" : "Хаалттай";
  cashStatus.className = `pill ${isOpen ? "green" : "cash-closed"}`;
  cashStatusTime.textContent = timestamp
    ? `${isOpen ? "Нээсэн" : "Хаасан"}: ${formatCashRegisterTime(timestamp)}`
    : isOpen
      ? "Касс нээлттэй"
      : "Касс нээгээгүй";
  cashToggleButton.textContent = isOpen ? "Касс хаах" : "Касс нээх";
  cashToggleButton.className = `${isOpen ? "ghost-button" : "primary-button"} cash-toggle-button`;
  cashToggleButton.setAttribute("aria-pressed", String(isOpen));
}

function setCashCloseFeedback(message = "", tone = "") {
  if (!cashCloseFeedback) return;
  cashCloseFeedback.textContent = message;
  cashCloseFeedback.className = `completed-delete-feedback ${tone}`.trim();
}

function openCashCloseModal() {
  if (!cashCloseModal || !cashCloseForm || !isCashRegisterOpen()) return;
  const now = Date.now();
  const openedAt = Number(generalSettings.cashRegisterOpenedAt) || now;
  const summary = createCashRegisterArchive(openedAt, now);

  cashCloseForm.reset();
  if (confirmCashCloseButton) confirmCashCloseButton.disabled = true;
  if (cashCloseSummary) {
    cashCloseSummary.innerHTML = `<strong>${escapeHtml(formatCashRegisterTime(openedAt))}</strong>-с эхэлсэн · ${summary.cars} машин · <strong>${formatMoney(summary.income)}</strong>`;
  }
  setCashCloseFeedback();
  cashCloseModal.classList.add("open");
  cashCloseModal.setAttribute("aria-hidden", "false");
  cashCloseForm.elements.note?.focus();
}

function closeCashCloseModal() {
  cashCloseForm?.reset();
  if (confirmCashCloseButton) confirmCashCloseButton.disabled = true;
  setCashCloseFeedback();
  cashCloseModal?.classList.remove("open");
  cashCloseModal?.setAttribute("aria-hidden", "true");
}

function setPaymentEditFeedback(message = "", tone = "") {
  if (!paymentEditFeedback) return;
  paymentEditFeedback.textContent = message;
  paymentEditFeedback.className = `completed-delete-feedback ${tone}`.trim();
}

function getPaymentEditAmounts() {
  return {
    card: Math.max(0, Math.round(Number(paymentEditForm?.elements.card?.value) || 0)),
    cash: Math.max(0, Math.round(Number(paymentEditForm?.elements.cash?.value) || 0)),
    transfer: Math.max(0, Math.round(Number(paymentEditForm?.elements.transfer?.value) || 0)),
  };
}

function updatePaymentEditState() {
  if (!paymentEditForm || !paymentEditTotal) return;
  const amounts = getPaymentEditAmounts();
  const total = amounts.card + amounts.cash + amounts.transfer;
  const income = getDailyPaymentSummary(getDateKey(0)).income;
  const pin = String(paymentEditForm.elements.pin?.value || "").replace(/\D/g, "").slice(0, 4);
  const matches = total === income;

  paymentEditTotal.textContent = `Нийт ${formatMoney(total)} / Орлого ${formatMoney(income)}`;
  paymentEditTotal.className = `payment-edit-total ${matches ? "matches" : "mismatch"}`;
  if (confirmPaymentEditButton) confirmPaymentEditButton.disabled = !matches || !/^\d{4}$/.test(pin) || income <= 0;
}

function openPaymentEditModal() {
  if (!paymentEditModal || !paymentEditForm) return;
  const payments = getDailyPaymentSummary(getDateKey(0));
  if (payments.income <= 0) return;

  paymentEditForm.reset();
  paymentEditForm.elements.card.value = String(payments.card);
  paymentEditForm.elements.cash.value = String(payments.cash);
  paymentEditForm.elements.transfer.value = String(payments.transfer);
  setPaymentEditFeedback();
  updatePaymentEditState();
  paymentEditModal.classList.add("open");
  paymentEditModal.setAttribute("aria-hidden", "false");
  paymentEditForm.elements.card?.focus();
}

function closePaymentEditModal() {
  paymentEditForm?.reset();
  if (confirmPaymentEditButton) confirmPaymentEditButton.disabled = true;
  setPaymentEditFeedback();
  paymentEditModal?.classList.remove("open");
  paymentEditModal?.setAttribute("aria-hidden", "true");
}

function getCashRegisterArchives() {
  return Array.isArray(generalSettings.cashRegisterArchives)
    ? generalSettings.cashRegisterArchives
    : [];
}

function createCashRegisterArchive(openedAt, closedAt) {
  const summary = {
    id: `cash-close-${closedAt}`,
    date: getDateKeyFromTimestamp(closedAt),
    openedAt: Number(openedAt) || closedAt,
    closedAt,
    cars: 0,
    income: 0,
    grossSalary: 0,
    shopDeductions: 0,
    salary: 0,
    net: 0,
    payments: { card: 0, cash: 0, transfer: 0 },
  };

  Object.entries(cashArchive).forEach(([dateKey, transactions]) => {
    if (!Array.isArray(transactions)) return;
    transactions.forEach((transaction) => {
      const transactionDate = String(transaction.date || dateKey);
      const transactionTime = String(transaction.time || "00:00").slice(0, 5);
      const exactTimestamp = Number(transaction.completedAt) || 0;
      const timestamp = exactTimestamp || new Date(`${transactionDate}T${transactionTime}:00`).getTime();
      const isBeforeShift = exactTimestamp
        ? timestamp < summary.openedAt
        : timestamp + 59999 < summary.openedAt;
      if (!Number.isFinite(timestamp) || isBeforeShift || timestamp > closedAt) return;

      const amount = Number(transaction.amount) || 0;
      const salary = Number(transaction.salaryAmount) || getPayrollSalary(getTransactionWashAmount(transaction));
      const paymentAmounts = getTransactionPaymentAmounts(transaction);
      summary.cars += 1;
      summary.income += amount;
      summary.salary += salary;
      summary.payments.cash += paymentAmounts.cash;
      summary.payments.card += paymentAmounts.card;
      summary.payments.transfer += paymentAmounts.transfer;
    });
  });

  summary.grossSalary = summary.salary;
  staffShopPurchases.forEach((purchase) => {
    const timestamp = Number(purchase.createdAt) || new Date(`${purchase.date}T${purchase.time || "00:00"}:00`).getTime();
    if (!Number.isFinite(timestamp) || timestamp < summary.openedAt || timestamp > closedAt) return;
    summary.shopDeductions += Number(purchase.total) || 0;
  });
  summary.salary = Math.max(0, summary.grossSalary - summary.shopDeductions);
  summary.net = summary.income - summary.salary;
  return summary;
}

function renderDirectorShiftArchive() {
  if (!directorShiftArchiveCount || !directorShiftArchiveList || !directorShiftArchiveEmpty) return;
  const items = getCashRegisterArchives().slice(0, 30);
  directorShiftArchiveCount.textContent = `${items.length} хаалт`;
  directorShiftArchiveList.hidden = items.length === 0;
  directorShiftArchiveEmpty.hidden = items.length > 0;
  directorShiftArchiveList.innerHTML = items
    .map((item) => `
      <article class="director-shift-archive-row">
        <div class="director-shift-archive-title">
          <strong>${escapeHtml(formatArchiveDate(item.date || getDateKeyFromTimestamp(item.closedAt)))}</strong>
          <span>${escapeHtml(formatCashRegisterTime(item.openedAt))} → ${escapeHtml(formatCashRegisterTime(item.closedAt))}</span>
        </div>
        <div class="director-shift-archive-summary">
          <span>Машин <strong>${Number(item.cars) || 0}</strong></span>
          <span>Орлого <strong>${formatMoney(Number(item.income) || 0)}</strong></span>
          <span>Цалин <strong>${formatMoney(Number(item.salary) || 0)}</strong></span>
          <span>Цэвэр <strong>${formatMoney(Number(item.net) || 0)}</strong></span>
        </div>
        <div class="director-shift-payment-summary">
          <small>Карт ${formatMoney(Number(item.payments?.card) || 0)}</small>
          <small>Бэлэн ${formatMoney(Number(item.payments?.cash) || 0)}</small>
          <small>Данс ${formatMoney(Number(item.payments?.transfer) || 0)}</small>
          <small>Shop суутгал ${formatMoney(Number(item.shopDeductions) || 0)}</small>
        </div>
        <p class="director-shift-note"><strong>Тайлбар:</strong> ${escapeHtml(item.note || "Тайлбаргүй")}</p>
      </article>
    `)
    .join("");
}

function getFallbackDirectorPinHash(source) {
  let hash = 2166136261;
  for (let index = 0; index < source.length; index += 1) {
    hash ^= source.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return `fallback:${(hash >>> 0).toString(16).padStart(8, "0")}`;
}

async function createDirectorPinHash(pin, useFallback = false, accountId = activeAccountId) {
  const source = `nc-director:${accountId}:${pin}`;
  if (!useFallback && globalThis.crypto?.subtle && globalThis.TextEncoder) {
    try {
      const digest = await globalThis.crypto.subtle.digest("SHA-256", new TextEncoder().encode(source));
      const hash = [...new Uint8Array(digest)].map((value) => value.toString(16).padStart(2, "0")).join("");
      return `sha256:${hash}`;
    } catch {
      return getFallbackDirectorPinHash(source);
    }
  }
  return getFallbackDirectorPinHash(source);
}

async function verifyDirectorPin(pin) {
  const storedHash = String(generalSettings.directorPinHash || "");
  if (!storedHash) return false;
  const useFallback = storedHash.startsWith("fallback:");
  try {
    return (await createDirectorPinHash(pin, useFallback)) === storedHash;
  } catch {
    return false;
  }
}

function setDirectorLockFeedback(message = "", tone = "") {
  if (!directorLockFeedback) return;
  directorLockFeedback.textContent = message;
  directorLockFeedback.className = `director-lock-feedback ${tone}`.trim();
}

function clearDirectorDetailedReport() {
  if (financeBars) financeBars.innerHTML = "";
  if (cashArchiveSummary) cashArchiveSummary.innerHTML = "";
  if (cashArchiveRows) cashArchiveRows.innerHTML = "";
  if (cashArchiveEmpty) cashArchiveEmpty.hidden = true;
  const archiveTable = cashArchiveRows?.closest("table");
  if (archiveTable) archiveTable.hidden = true;
}

function renderDirectorPanel() {
  if (
    !directorPanel ||
    !directorLockStatus ||
    !directorLockScreen ||
    !directorProtectedContent ||
    !directorCashStatus ||
    !directorSummary ||
    !directorCashTime
  ) return;

  const hasAccount = Boolean(getActiveAccount());
  directorPanel.hidden = !hasAccount;
  if (!hasAccount) return;

  const hasPin = Boolean(generalSettings.directorPinHash);
  directorLockStatus.textContent = directorPanelUnlocked ? "Нээлттэй" : "Түгжээтэй";
  directorLockStatus.className = `pill ${directorPanelUnlocked ? "green" : "cash-closed"}`;
  directorLockButton.hidden = !directorPanelUnlocked;
  directorLockScreen.hidden = directorPanelUnlocked;
  directorProtectedContent.hidden = !directorPanelUnlocked;

  if (!directorPanelUnlocked) {
    if (directorLockPrompt) directorLockPrompt.textContent = hasPin ? "Захирлын код оруулна уу" : "4 оронтой код үүсгэнэ үү";
    if (directorLockHint) {
      directorLockHint.textContent = hasPin
        ? "Тайлан харахын тулд кодоо оруулна уу."
        : "Энэ кодоор захирлын тайланг нээнэ.";
    }
    if (directorUnlockSubmit) directorUnlockSubmit.textContent = hasPin ? "Нээх" : "Код хадгалах";
    directorSummary.innerHTML = "";
    directorCashTime.textContent = "";
    if (directorShiftArchiveList) directorShiftArchiveList.innerHTML = "";
    if (directorShiftArchiveCount) directorShiftArchiveCount.textContent = "0 хаалт";
    if (directorShiftArchiveEmpty) directorShiftArchiveEmpty.hidden = false;
    clearDirectorDetailedReport();
    return;
  }

  const stats = getCashStats("today");
  const salary = Number(stats.expenses.salary) || 0;
  const netAmount = (Number(stats.income) || 0) - salary;
  const isOpen = isCashRegisterOpen();
  const statusTime = isOpen
    ? Number(generalSettings.cashRegisterOpenedAt) || 0
    : Number(generalSettings.cashRegisterClosedAt) || 0;

  directorCashStatus.textContent = isOpen ? "Касс нээлттэй" : "Касс хаалттай";
  directorCashStatus.className = `pill ${isOpen ? "green" : "cash-closed"}`;
  directorCashTime.textContent = statusTime
    ? `${isOpen ? "Нээсэн" : "Хаасан"}: ${formatCashRegisterTime(statusTime)}`
    : isOpen
      ? "Касс нээлттэй"
      : "Касс нээгээгүй";

  directorSummary.innerHTML = `
    <article class="income">
      <span>Өнөөдрийн орлого</span>
      <strong>${formatMoney(stats.income)}</strong>
      <small>${stats.orders} үйлчилгээ</small>
    </article>
    <article>
      <span>Үйлчилгээ</span>
      <strong>${stats.orders} машин</strong>
      <small>Өнөөдөр дууссан</small>
    </article>
    <article class="expense">
      <span>Цалингийн дүн</span>
      <strong>${formatMoney(salary)}</strong>
      <small>Бодсон ${formatMoney(stats.expenses.grossSalary)} · Shop -${formatMoney(stats.expenses.shopDeductions)}</small>
    </article>
    <article class="net">
      <span>Цэвэр үлдэгдэл</span>
      <strong>${formatMoney(netAmount)}</strong>
      <small>Орлогоос суутгалын дараах цалин хассан</small>
    </article>
    <article class="director-payment-summary">
      <span>Төлбөрийн задаргаа</span>
      <div>
        <small>Карт <strong>${formatMoney(stats.payments.card)}</strong></small>
        <small>Бэлэн <strong>${formatMoney(stats.payments.cash)}</strong></small>
        <small>Данс <strong>${formatMoney(stats.payments.transfer)}</strong></small>
      </div>
    </article>
  `;
  renderDirectorShiftArchive();
  renderFinanceBars();
  renderCashArchive();
}

function syncMobileCashDetails() {
  if (!mobileCashDetails) return;

  const isMobile = window.matchMedia("(max-width: 760px)").matches;
  if (isMobile === mobileCashLayoutActive) return;

  mobileCashDetails.open = false;
  mobileCashLayoutActive = isMobile;
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
  return [...new Set([...Object.keys(cashArchive), ...staffShopPurchases.map((purchase) => purchase.date)])].sort();
}

function getTransactionWashAmount(transaction) {
  const washAmount = Number(transaction.washAmount);
  if (Number.isFinite(washAmount) && washAmount >= 0) return washAmount;

  const total = Number(transaction.amount) || 0;
  const shopAmount = Number(transaction.shopAmount) || 0;
  return Math.max(0, total - shopAmount);
}

function getPayrollRatePercent() {
  const rate = Number(generalSettings?.payrollRate);
  return payrollRateOptions.includes(rate) ? rate : 40;
}

function getPayrollRate() {
  return getPayrollRatePercent() / 100;
}

function getPayrollRateLabel() {
  return `${getPayrollRatePercent()}%`;
}

function getPayrollSalary(washAmount) {
  return Math.round((Number(washAmount) || 0) * getPayrollRate());
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
      shopDeduction: 0,
      shopItems: [],
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
        shopDeduction: 0,
        shopItems: [],
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

  const rangeDateSet = new Set(rangeDateKeys);
  staffShopPurchases.forEach((purchase) => {
    if (!rangeDateSet.has(purchase.date)) return;
    const name = String(purchase.employee || "Тодорхойгүй").trim() || "Тодорхойгүй";
    const row = employees.get(name) || {
      name,
      role: "-",
      cars: 0,
      washRevenue: 0,
      salary: 0,
      shopDeduction: 0,
      shopItems: [],
      lastWork: "",
    };

    row.shopDeduction += Number(purchase.total) || 0;
    row.shopItems.push({
      id: purchase.id,
      emoji: purchase.emoji,
      name: purchase.productName,
      quantity: purchase.quantity,
      total: purchase.total,
      date: purchase.date,
      time: purchase.time,
    });
    employees.set(name, row);
  });

  employees.forEach((row) => {
    row.netSalary = row.salary - row.shopDeduction;
    row.shopItems.sort((a, b) => `${b.date}T${b.time}`.localeCompare(`${a.date}T${a.time}`));
  });

  const rows = [...employees.values()].sort((a, b) => b.netSalary - a.netSalary || b.cars - a.cars || a.name.localeCompare(b.name));

  return rows.reduce(
    (summary, row) => {
      summary.cars += row.cars;
      summary.washRevenue += row.washRevenue;
      summary.salary += row.salary;
      summary.shopDeduction += row.shopDeduction;
      summary.netSalary += row.netSalary;
      return summary;
    },
    { rangeLabel: getPayrollRangeLabel(rangeKey), cars: 0, washRevenue: 0, salary: 0, shopDeduction: 0, netSalary: 0, rows },
  );
}

function renderPayroll() {
  if (!payrollSummary || !payrollRows || !payrollEmpty) return;

  const stats = getPayrollStats();
  renderPayrollRangeButtons();
  const rateLabel = getPayrollRateLabel();

  if (payrollRateSelect) payrollRateSelect.value = String(getPayrollRatePercent());
  if (payrollRateDescription) payrollRateDescription.textContent = rateLabel;
  if (payrollRateBadge) payrollRateBadge.textContent = `Угаалгын үнийн ${rateLabel}`;
  if (payrollRateColumn) payrollRateColumn.textContent = `Цалин ${rateLabel}`;

  payrollSummary.innerHTML = `
    <article class="payroll-summary-card salary">
      <span>Гарт олгох цалин</span>
      <strong class="${stats.netSalary < 0 ? "negative" : ""}">${formatMoney(stats.netSalary)}</strong>
      <small>${stats.rangeLabel} · Shop-ийн суутгал хассан</small>
    </article>
    <article class="payroll-summary-card">
      <span>Нийт бодогдсон цалин</span>
      <strong>${formatMoney(stats.salary)}</strong>
      <small>Угаалгын үнийн ${rateLabel}</small>
    </article>
    <article class="payroll-summary-card deduction">
      <span>Shop-ийн суутгал</span>
      <strong>${formatMoney(stats.shopDeduction)}</strong>
      <small>Ажилтнуудын авсан бараа</small>
    </article>
    <article class="payroll-summary-card">
      <span>Угаасан машин</span>
      <strong>${stats.cars}</strong>
      <small>Цалин бодогдсон үйлчилгээ</small>
    </article>
  `;

  payrollRows.innerHTML = stats.rows
    .map(
      (row) => {
        const shopItems = row.shopItems.length
          ? `<div class="payroll-shop-items">${row.shopItems
              .map(
                (item) => `<span><b>${item.emoji} ${escapeHtml(item.name)} × ${item.quantity}</b><small>${formatMoney(item.total)} · ${escapeHtml(item.date)} ${escapeHtml(item.time)}</small></span>`,
              )
              .join("")}</div>`
          : `<span class="payroll-shop-none">Аваагүй</span>`;
        return `
        <tr class="${row.cars || row.shopDeduction ? "" : "is-empty"}">
          <td data-label="Ажилтан"><strong>${escapeHtml(row.name)}</strong></td>
          <td data-label="Үүрэг">${escapeHtml(row.role || "-")}</td>
          <td data-label="Угаасан машин">${row.cars}</td>
          <td data-label="Цалин ${rateLabel}"><strong class="salary-text">${formatMoney(row.salary)}</strong></td>
          <td class="payroll-shop-cell" data-label="Shop-оос авсан">${shopItems}</td>
          <td class="payroll-deduction-cell" data-label="Суутгал"><strong class="deduction-text">${formatMoney(row.shopDeduction)}</strong></td>
          <td class="payroll-net-cell" data-label="Гарт авах"><strong class="net-salary-text ${row.netSalary < 0 ? "negative" : ""}">${formatMoney(row.netSalary)}</strong></td>
          <td data-label="Сүүлийн ажил">${escapeHtml(formatPayrollLastWork(row.lastWork))}</td>
        </tr>
      `;
      },
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
    expenses: { supplies: 0, salary: 0, grossSalary: 0, shopDeductions: 0, utilities: 0 },
    trend: Array.from({ length: trendLength }, () => 0),
    expenseTrend: Array.from({ length: trendLength }, () => 0),
  };

  const addTransactions = (dateKey, bucketIndexResolver) => {
    const transactions = Array.isArray(cashArchive[dateKey]) ? cashArchive[dateKey] : [];
    transactions.forEach((transaction) => {
      const amount = Number(transaction.amount) || 0;
      const bucketIndex = Math.min(trendLength - 1, Math.max(0, bucketIndexResolver(transaction)));

      stats.income += amount;
      stats.orders += 1;
      stats.trend[bucketIndex] += amount;
      const salaryExpense = getPayrollSalary(getTransactionWashAmount(transaction));
      stats.expense += salaryExpense;
      stats.expenses.salary += salaryExpense;
      stats.expenseTrend[bucketIndex] += salaryExpense;
    });
    const payments = getDailyPaymentSummary(dateKey);
    stats.payments.card += payments.card;
    stats.payments.cash += payments.cash;
    stats.payments.transfer += payments.transfer;
  };
  const addShopDeductions = (dateKey) => {
    staffShopPurchases
      .filter((purchase) => purchase.date === dateKey)
      .forEach((purchase) => {
        const amount = Number(purchase.total) || 0;
        stats.expenses.shopDeductions += amount;
      });
  };
  const addCashDate = (dateKey, bucketIndexResolver) => {
    addTransactions(dateKey, bucketIndexResolver);
    addShopDeductions(dateKey);
  };
  const finalizeCashStats = () => {
    stats.expenses.grossSalary = stats.expenses.salary;
    stats.expenses.salary = Math.max(0, stats.expenses.grossSalary - stats.expenses.shopDeductions);
    stats.expense = stats.expenses.salary;
    let remainingDeduction = stats.expenses.shopDeductions;
    for (let index = stats.expenseTrend.length - 1; index >= 0 && remainingDeduction > 0; index -= 1) {
      const appliedDeduction = Math.min(stats.expenseTrend[index], remainingDeduction);
      stats.expenseTrend[index] -= appliedDeduction;
      remainingDeduction -= appliedDeduction;
    }
    return stats;
  };

  if (rangeKey === "today" || rangeKey === "yesterday") {
    addCashDate(getDateKey(rangeKey === "today" ? 0 : -1), (transaction) => {
      const hour = Number(String(transaction.time || "00:00").split(":")[0]) || 0;
      return Math.floor(Math.max(0, hour - 8) / 2);
    });
    return finalizeCashStats();
  }

  if (rangeKey === "threeDays") {
    [-2, -1, 0].forEach((daysFromToday, index) => {
      addCashDate(getDateKey(daysFromToday), () => index);
    });
    return finalizeCashStats();
  }

  if (rangeKey === "sevenDays") {
    Array.from({ length: 7 }, (_, index) => index - 6).forEach((daysFromToday, index) => {
      addCashDate(getDateKey(daysFromToday), () => index);
    });
    return finalizeCashStats();
  }

  if (rangeKey === "oneMonth") {
    Array.from({ length: 28 }, (_, index) => index - 27).forEach((daysFromToday, index) => {
      addCashDate(getDateKey(daysFromToday), () => Math.floor(index / 7));
    });
    return finalizeCashStats();
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
      addCashDate(getDateKey(daysFromToday), () => bucketIndex);
    });
    return finalizeCashStats();
  }

  return finalizeCashStats();
}

function formatPercent(value) {
  if (!Number.isFinite(value)) return "0%";
  return `${Math.round(value)}%`;
}

function getCashRangeLabel(rangeKey = selectedCashRange) {
  return cashRanges.find((range) => range.key === rangeKey)?.label || "7 хоног";
}

function getTrendLabels(rangeKey, count) {
  if (rangeKey === "today" || rangeKey === "yesterday") {
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
  if (!directorPanelUnlocked) {
    if (financeBars) financeBars.innerHTML = "";
    return;
  }

  const stats = getCashStats(selectedCashRange);
  const trendRows = getTrendRows(stats, selectedCashRange);
  const netTotal = (Number(stats.income) || 0) - (Number(stats.expense) || 0);
  const profitMargin = stats.income ? (netTotal / stats.income) * 100 : 0;
  const averageIncome = Math.round((Number(stats.income) || 0) / Math.max(trendRows.length, 1));
  const averageExpense = Math.round((Number(stats.expense) || 0) / Math.max(trendRows.length, 1));
  const bestIncome = trendRows.reduce((best, row) => (row.income > best.income ? row : best), trendRows[0] || { label: "-", income: 0 });
  const highestExpense = trendRows.reduce((high, row) => (row.expense > high.expense ? row : high), trendRows[0] || { label: "-", expense: 0 });
  const incomeExpenseRatio = stats.expense ? (stats.income / stats.expense).toFixed(1) : "0";
  const rangeLabel = getCashRangeLabel();
  const expenseShare = stats.income
    ? Math.min(100, Math.max(0, (Number(stats.expense) / Number(stats.income)) * 100))
    : stats.expense
      ? 100
      : 0;
  const hasTrendData = Boolean(stats.income || stats.expense);

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
        <h3>${rangeLabel} хугацааны орлого ба цалин</h3>
      </div>
    </div>
    <div class="finance-donut-layout">
      <div class="finance-donut ${hasTrendData ? "" : "is-empty"}" style="--expense-share:${expenseShare.toFixed(1)}%" role="img" aria-label="Цалин орлогын ${formatPercent(expenseShare)}, цэвэр үлдэгдэл ${formatMoney(netTotal)}">
        <div class="finance-donut-center">
          <span>Цэвэр үлдэгдэл</span>
          <strong>${formatMoney(netTotal)}</strong>
          <small>${formatPercent(profitMargin)}</small>
        </div>
      </div>
      <div class="finance-donut-breakdown">
        <article class="income">
          <i class="trend-dot income" aria-hidden="true"></i>
          <span>Нийт орлого</span>
          <strong>${formatMoney(stats.income)}</strong>
        </article>
        <article class="expense">
          <i class="trend-dot expense" aria-hidden="true"></i>
          <span>Цалингийн дүн</span>
          <strong>${formatMoney(stats.expense)}</strong>
        </article>
        <article class="net">
          <i class="trend-dot net" aria-hidden="true"></i>
          <span>Цэвэр үлдэгдэл</span>
          <strong>${formatMoney(netTotal)}</strong>
        </article>
      </div>
    </div>
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
        <span>Дундаж цалин</span>
        <strong>${formatMoney(averageExpense)}</strong>
        <small>Нэг баганад ногдох</small>
      </article>
      <article>
        <span>Хамгийн өндөр орлого</span>
        <strong>${formatMoney(bestIncome.income)}</strong>
        <small>${escapeHtml(bestIncome.label)}</small>
      </article>
      <article class="expense">
        <span>Хамгийн өндөр цалин</span>
        <strong>${formatMoney(highestExpense.expense)}</strong>
        <small>${escapeHtml(highestExpense.label)}</small>
      </article>
      <article>
        <span>Орлого / цалин</span>
        <strong>${incomeExpenseRatio}x</strong>
        <small>Орлого цалингаас хэд дахин их</small>
      </article>
    </div>
    <div class="finance-trend-table-wrap">
      <table class="finance-trend-table">
        <thead>
          <tr>
            <th scope="col">Хугацаа</th>
            <th scope="col">Орлого</th>
            <th scope="col">Цалин</th>
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
  if (!directorPanelUnlocked) {
    clearDirectorDetailedReport();
    return;
  }

  const transactions = Array.isArray(cashArchive[selectedArchiveDate]) ? cashArchive[selectedArchiveDate] : [];
  const payments = getDailyPaymentSummary(selectedArchiveDate);
  const total = payments.income;

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
      <small>Карт ${formatMoney(payments.card)} · Бэлэн ${formatMoney(payments.cash)} · Данс ${formatMoney(payments.transfer)}${payments.overridden ? " · Захирлаар зассан" : ""}</small>
    </article>
  `;

  cashArchiveRows.innerHTML = transactions
    .map(
      (transaction) => {
        const paymentAmounts = getTransactionPaymentAmounts(transaction);
        const payment = getPaymentAmountsMethod(paymentAmounts) || getPaymentMethod(transaction.payment);
        const paymentDetails = getPaymentAmountsLabel(paymentAmounts);
        return `
          <tr>
            <td data-label="Цаг"><time datetime="${escapeHtml(`${transaction.date}T${transaction.time}`)}">${escapeHtml(transaction.time)}</time></td>
            <td data-label="Улсын дугаар"><strong>${escapeHtml(transaction.plate)}</strong></td>
            <td data-label="Үйлчилгээ">${escapeHtml(transaction.service)}</td>
            <td data-label="Ажилтан">${escapeHtml(transaction.employee || "Тодорхойгүй")}</td>
            <td data-label="Төлбөр"><span class="payment-badge ${getPaymentClass(payment)}" title="${escapeHtml(paymentDetails)}">${escapeHtml(payment)}</span></td>
            <td data-label="Дүн"><strong>${formatMoney(Number(transaction.amount) || 0)}</strong></td>
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
  delete cashPaymentOverrides[date];
  const transactions = Array.isArray(cashArchive[date]) ? cashArchive[date] : [];
  const shopServiceSummary = getQueueShopServiceSummary(item);
  const washAmount = Number(item.price) || 0;
  const shopAmount = getQueueShopTotal(item);
  const paymentAmounts = getQueuePaymentAmounts(item);
  transactions.unshift({
    id: `${date}-${Date.now()}`,
    bookingId: item.bookingId,
    completedAt: completedAt.getTime(),
    date,
    time: completedAt.toLocaleTimeString("mn-MN", { hour: "2-digit", minute: "2-digit", hour12: false }),
    plate: item.plate,
    service: `${item.service}${shopServiceSummary}`,
    employee: item.employee || "Тодорхойгүй",
    payment: getPaymentAmountsMethod(paymentAmounts) || "Карт",
    paymentAmounts,
    amount: washAmount + shopAmount,
    washAmount,
    shopAmount,
    salaryAmount: getPayrollSalary(washAmount),
    salaryRate: getPayrollRate(),
  });
  cashArchive[date] = transactions;
  saveCashArchive();
}

function completeQueueItem(item) {
  const index = queue.indexOf(item);
  if (index === -1) return;

  if (!isQueuePaymentComplete(item)) {
    activeDashboardQueueId = item.bookingId;
    activeDashboardPaymentId = item.bookingId;
    renderDashboardQueue();
    showDashboard("dashboard");
    return;
  }

  if (!isCashRegisterOpen()) {
    const openedAt = Date.now();
    generalSettings = {
      ...generalSettings,
      cashRegisterOpen: true,
      cashRegisterOpenedAt: openedAt,
    };
    saveGeneralSettings();
  }

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

function updateStaffShopPreview() {
  if (!staffShopForm || !staffShopPreview) return;
  const product = shopProducts.find((item) => item.id === staffShopForm.elements.product?.value);
  const quantity = Math.max(1, Number(staffShopForm.elements.quantity?.value) || 1);
  staffShopPreview.textContent = formatMoney((Number(product?.price) || 0) * quantity);
}

function setStaffShopFeedback(message = "", tone = "success") {
  if (!staffShopFeedback) return;
  staffShopFeedback.textContent = message;
  staffShopFeedback.className = `admin-feedback staff-shop-feedback ${message ? tone : ""}`.trim();
}

function renderStaffShopPurchases() {
  if (!staffShopForm || !staffShopProduct || !staffShopTotal || !staffShopList || !staffShopEmpty) return;

  const selectedProductId = staffShopProduct.value;
  staffShopProduct.innerHTML = shopProducts.length
    ? shopProducts
        .map((product) => `<option value="${escapeHtml(product.id)}">${product.emoji} ${escapeHtml(product.name)} · ${formatMoney(product.price)}</option>`)
        .join("")
    : `<option value="">Shop-д бүтээгдэхүүн нэмнэ үү</option>`;
  if (shopProducts.some((product) => product.id === selectedProductId)) {
    staffShopProduct.value = selectedProductId;
  }

  const employeeSelect = staffShopForm.elements.employee;
  const submitButton = staffShopForm.querySelector('button[type="submit"]');
  if (employeeSelect) employeeSelect.disabled = staffMembers.length === 0;
  staffShopProduct.disabled = shopProducts.length === 0;
  if (submitButton) submitButton.disabled = staffMembers.length === 0 || shopProducts.length === 0;

  const today = getDateKey(0);
  const purchases = staffShopPurchases
    .filter((purchase) => purchase.date === today)
    .sort((a, b) => b.createdAt - a.createdAt);
  const total = purchases.reduce((sum, purchase) => sum + purchase.total, 0);
  staffShopTotal.textContent = formatMoney(total);
  staffShopTotal.title = `Өнөөдөр ${purchases.reduce((sum, purchase) => sum + purchase.quantity, 0)} ширхэг`;

  staffShopList.innerHTML = purchases
    .map(
      (purchase) => `
        <article class="staff-shop-row">
          <span class="staff-shop-emoji" aria-hidden="true">${purchase.emoji}</span>
          <div class="staff-shop-copy">
            <strong>${escapeHtml(purchase.employee)}</strong>
            <small>${escapeHtml(purchase.productName)} · ${formatMoney(purchase.unitPrice)} × ${purchase.quantity}</small>
          </div>
          <div class="staff-shop-row-total">
            <strong>${formatMoney(purchase.total)}</strong>
            <time datetime="${escapeHtml(`${purchase.date}T${purchase.time}`)}">${escapeHtml(purchase.time)}</time>
          </div>
          <button class="staff-shop-delete" type="button" data-delete-staff-shop="${escapeHtml(purchase.id)}" title="Захирлын кодоор устгах" aria-label="${escapeHtml(purchase.employee)}-ийн ${escapeHtml(purchase.productName)} бичлэгийг Захирлын кодоор устгах">×</button>
        </article>
      `,
    )
    .join("");
  staffShopList.hidden = purchases.length === 0;
  staffShopEmpty.hidden = purchases.length > 0;
  updateStaffShopPreview();
}

function setStaffShopDeleteFeedback(message = "", tone = "") {
  if (!staffShopDeleteFeedback) return;
  staffShopDeleteFeedback.textContent = message;
  staffShopDeleteFeedback.className = `completed-delete-feedback ${tone}`.trim();
}

function openStaffShopDeleteModal(purchaseId) {
  if (!staffShopDeleteModal || !staffShopDeleteForm) return;
  const purchase = staffShopPurchases.find((item) => item.id === purchaseId);
  if (!purchase) return;

  pendingStaffShopDeleteId = purchaseId;
  staffShopDeleteForm.reset();
  if (staffShopDeleteDescription) {
    staffShopDeleteDescription.innerHTML = `<strong>${escapeHtml(purchase.employee)}</strong> · ${purchase.emoji} ${escapeHtml(purchase.productName)} × ${purchase.quantity} · <strong>${formatMoney(purchase.total)}</strong> суутгалыг арилгана.`;
  }
  setStaffShopDeleteFeedback();
  staffShopDeleteModal.classList.add("open");
  staffShopDeleteModal.setAttribute("aria-hidden", "false");
  staffShopDeleteForm.elements.pin?.focus();
}

function closeStaffShopDeleteModal() {
  pendingStaffShopDeleteId = "";
  staffShopDeleteForm?.reset();
  setStaffShopDeleteFeedback();
  staffShopDeleteModal?.classList.remove("open");
  staffShopDeleteModal?.setAttribute("aria-hidden", "true");
}

function deleteStaffShopPurchase(purchaseId, directorApproved = false) {
  if (!directorApproved) return false;
  const purchase = staffShopPurchases.find((item) => item.id === purchaseId);
  if (!purchase) return false;

  staffShopPurchases = staffShopPurchases.filter((item) => item.id !== purchaseId);
  saveStaffShopPurchases();
  renderStaffShopPurchases();
  renderCashStats();
  renderPayroll();
  renderDirectorPanel();
  setStaffShopFeedback(`${purchase.employee}: ${purchase.productName} суутгалаас ариллаа.`);
  return true;
}

function renderCashStats() {
  const stats = getCashStats(selectedCashRange);
  const averageTicket = stats.orders ? Math.round(stats.income / stats.orders) : 0;
  const todayPayments = getDailyPaymentSummary(getDateKey(0));

  if (editPaymentBreakdownButton) {
    editPaymentBreakdownButton.disabled = todayPayments.income <= 0;
    editPaymentBreakdownButton.classList.toggle("is-overridden", todayPayments.overridden);
    const label = editPaymentBreakdownButton.querySelector("span");
    if (label) label.textContent = todayPayments.overridden ? "Зассан" : "Засах";
  }

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
      <small>Shop суутгал ${formatMoney(stats.expenses.shopDeductions)}</small>
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
  renderStaffShopPurchases();
  renderGeneralSettings();
  renderCoverImageSettings();
  syncAdminForms();
  renderAdminPriceGrid();
  renderAdminShopProducts();
  renderAdminBays();
  renderAccountRequests();
  renderCashRegister();
  renderDirectorPanel();
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

accountLoginForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const data = new FormData(accountLoginForm);
  const username = normalizeAccountUsername(data.get("username"));
  const password = String(data.get("password") || "");
  const savedAccount = accounts.find((item) => item.username === username);

  if (await checkAccountApiAvailability(true)) {
    try {
      setAccountFeedback("Нэвтэрч байна...", "");
      const result = await accountApiRequest("/api/accounts/login", {
        method: "POST",
        body: JSON.stringify({
          username,
          password,
          name: username === accountApproverUsername ? savedAccount?.name || "Удирдлага" : undefined,
        }),
      });
      const account = upsertAccount(createApiManagedAccount(result.account, password));
      if (!account) {
        setAccountFeedback("Account мэдээлэл уншихад алдаа гарлаа.", "error");
        return;
      }

      setAccountApiSession(result.session);
      accountLoginForm.reset();
      loginAccount(account, result.bootstrap
        ? "95723051 удирдлагын account серверт амжилттай бэлтгэгдлээ."
        : undefined);
    } catch (error) {
      setAccountFeedback(getAccountApiErrorMessage(error, "Нэвтрэх үед алдаа гарлаа."), "error");
    }
    return;
  }

  const account = savedAccount;

  if (!account && hasPendingAccountRequest(username)) {
    setAccountFeedback("Таны account хүсэлт хүлээгдэж байна. 95723051 account зөвшөөрсний дараа нэвтэрнэ.", "error");
    return;
  }

  if (account?.apiManaged || (!account && accountApiUnavailableMessage)) {
    setAccountFeedback(
      accountApiUnavailableMessage || "Аккаунтын серверт холбогдож чадсангүй. Түр хүлээгээд дахин оролдоно уу.",
      "error",
    );
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
  setAccountApiSession(null);
  loginAccount(account);
});

accountSignupForm?.addEventListener("submit", async (event) => {
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

  if (await checkAccountApiAvailability(true)) {
    try {
      setAccountFeedback("Account хүсэлт илгээж байна...", "");
      const result = await accountApiRequest("/api/accounts/signup", {
        method: "POST",
        body: JSON.stringify({ name, username, password }),
      });

      if (result.status === "approved" && result.account) {
        const account = upsertAccount(createApiManagedAccount(result.account, password));
        if (!account) {
          setAccountFeedback("Account мэдээлэл хадгалахад алдаа гарлаа.", "error");
          return;
        }

        setAccountApiSession(result.session);
        accountSignupForm.reset();
        loginAccount(account, username === accountApproverUsername
          ? "95723051 удирдлагын account амжилттай нээгдлээ."
          : "Account амжилттай нээгдлээ.");
        return;
      }

      if (result.request) {
        upsertAccountRequest(createApiManagedRequest(result.request));
      }

      accountSignupForm.reset();
      closeSignupModal();
      setAccountFeedback(result.request?.kind === "renew"
        ? "Account-ийн хугацаа дууссан тул сунгах хүсэлт илгээгдлээ. 95723051 зөвшөөрсний дараа нэвтэрнэ."
        : "Account нээх хүсэлт илгээгдлээ. 95723051 account зөвшөөрсний дараа нэвтрэх боломжтой.", "success");
      renderAccountRequests();
    } catch (error) {
      setAccountFeedback(getAccountApiErrorMessage(error, "Account хүсэлт үүсгэхэд алдаа гарлаа."), "error");
    }
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
themeToggle?.addEventListener("click", (event) => {
  if (ignoreThemeToggleClick) {
    event.preventDefault();
    ignoreThemeToggleClick = false;
    return;
  }
  toggleTheme();
  registerDesktopAdminThemeToggle();
});
themeToggle?.addEventListener("pointerdown", beginThemeToggleDrag);
themeToggle?.addEventListener("pointermove", moveThemeToggle);
themeToggle?.addEventListener("pointerup", endThemeToggleDrag);
themeToggle?.addEventListener("pointercancel", endThemeToggleDrag);
themeToggle?.addEventListener("contextmenu", (event) => {
  if (isApproverAccount()) event.preventDefault();
});

accountDirectoryList?.addEventListener("submit", async (event) => {
  const form = event.target.closest("[data-account-password-reset]");
  if (!form) return;
  event.preventDefault();

  const submitButton = form.querySelector('button[type="submit"]');
  const newPassword = String(new FormData(form).get("newPassword") || "");
  if (submitButton) submitButton.disabled = true;
  try {
    await changeAccountPassword(form.dataset.accountPasswordReset, newPassword);
  } finally {
    if (submitButton?.isConnected) submitButton.disabled = false;
  }
});

accountDirectoryList?.addEventListener("input", (event) => {
  const input = event.target.closest('[name="directorPin"]');
  if (!input) return;
  input.value = input.value.replace(/\D/g, "").slice(0, 4);
});

accountDirectoryList?.addEventListener("click", async (event) => {
  const deleteButton = event.target.closest("[data-delete-account]");
  if (!deleteButton) return;
  deleteButton.disabled = true;
  try {
    await deleteAccountByAdmin(deleteButton.dataset.deleteAccount);
  } finally {
    if (deleteButton.isConnected) deleteButton.disabled = false;
  }
});

accountDirectoryList?.addEventListener("submit", async (event) => {
  const form = event.target.closest("[data-account-director-reset]");
  if (!form) return;
  event.preventDefault();

  const submitButton = form.querySelector('button[type="submit"]');
  const pin = String(new FormData(form).get("directorPin") || "").replace(/\D/g, "").slice(0, 4);
  if (submitButton) submitButton.disabled = true;
  try {
    await changeAccountDirectorPin(form.dataset.accountDirectorReset, pin);
  } finally {
    if (submitButton?.isConnected) submitButton.disabled = false;
  }
});

accountRequestList?.addEventListener("click", async (event) => {
  const approveButton = event.target.closest("[data-approve-account]");
  const rejectButton = event.target.closest("[data-reject-account]");

  if (approveButton) {
    const requestCard = approveButton.closest("[data-account-request-id]");
    await approveAccountRequest(approveButton.dataset.approveAccount, {
      days: requestCard?.querySelector("[data-approval-days]")?.value,
      minutes: requestCard?.querySelector("[data-approval-minutes]")?.value,
      seconds: requestCard?.querySelector("[data-approval-seconds]")?.value,
    });
    return;
  }

  if (rejectButton) {
    await rejectAccountRequest(rejectButton.dataset.rejectAccount);
  }
});

refreshAccountRequests?.addEventListener("click", async () => {
  refreshAccountRequests.disabled = true;
  refreshAccountRequests.classList.add("is-loading");
  setAccountApprovalNotice("Хүсэлтүүдийг шинэчилж байна...", "");
  try {
    const updated = await syncAccountRequestsFromApi(true);
    if (updated) {
      const time = new Date().toLocaleTimeString("mn-MN", { hour: "2-digit", minute: "2-digit" });
      setAccountApprovalNotice(`Хүсэлтүүд шинэчлэгдлээ · ${time}`, "success");
    }
  } finally {
    refreshAccountRequests.disabled = false;
    refreshAccountRequests.classList.remove("is-loading");
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

mobileEntryButton?.addEventListener("click", showEntry);

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

removeBayButton?.addEventListener("click", () => changeBayMapCount(-1));
addBayButton?.addEventListener("click", () => changeBayMapCount(1));

dailyQueueDate?.addEventListener("change", () => {
  if (!dailyQueueDate.value) return;
  const today = getDateKey(0);
  selectedDailyQueueDate = dailyQueueDate.value > today ? today : dailyQueueDate.value;
  renderDailyQueueRegister();
});

dailyQueuePreviousDay?.addEventListener("click", () => {
  selectedDailyQueueDate = shiftDateKey(selectedDailyQueueDate, -1);
  renderDailyQueueRegister();
});

dailyQueueNextDay?.addEventListener("click", () => {
  const today = getDateKey(0);
  const nextDate = shiftDateKey(selectedDailyQueueDate, 1);
  selectedDailyQueueDate = nextDate > today ? today : nextDate;
  renderDailyQueueRegister();
});

directorUnlockForm?.addEventListener("input", (event) => {
  const input = event.target.closest('[name="pin"]');
  if (!input) return;
  input.value = input.value.replace(/\D/g, "").slice(0, 4);
  setDirectorLockFeedback();
});

directorUnlockForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const pinInput = directorUnlockForm.elements.pin;
  const pin = String(pinInput.value || "").replace(/\D/g, "").slice(0, 4);
  if (!/^\d{4}$/.test(pin)) {
    setDirectorLockFeedback("4 оронтой код оруулна уу.", "error");
    pinInput.focus();
    return;
  }

  directorUnlockSubmit.disabled = true;
  try {
    if (!generalSettings.directorPinHash) {
      generalSettings = { ...generalSettings, directorPinHash: await createDirectorPinHash(pin) };
      saveGeneralSettings();
      directorPanelUnlocked = true;
      directorUnlockForm.reset();
      setDirectorLockFeedback();
      renderDirectorPanel();
      return;
    }

    if (!(await verifyDirectorPin(pin))) {
      setDirectorLockFeedback("Код буруу байна.", "error");
      pinInput.select();
      return;
    }

    directorPanelUnlocked = true;
    directorUnlockForm.reset();
    setDirectorLockFeedback();
    renderDirectorPanel();
  } finally {
    directorUnlockSubmit.disabled = false;
  }
});

directorLockButton?.addEventListener("click", () => {
  directorPanelUnlocked = false;
  directorUnlockForm?.reset();
  setDirectorLockFeedback();
  renderDirectorPanel();
});

directorChangePinButton?.addEventListener("click", () => {
  generalSettings = { ...generalSettings, directorPinHash: "" };
  directorPanelUnlocked = false;
  saveGeneralSettings();
  directorUnlockForm?.reset();
  renderDirectorPanel();
  setDirectorLockFeedback("Шинэ 4 оронтой код үүсгэнэ үү.", "success");
  directorUnlockForm?.elements.pin?.focus();
});

cashToggleButton?.addEventListener("click", () => {
  if (isCashRegisterOpen()) {
    openCashCloseModal();
    return;
  }

  const now = Date.now();
  generalSettings = {
    ...generalSettings,
    cashRegisterOpen: true,
    cashRegisterOpenedAt: now,
  };
  saveGeneralSettings();
  renderAll();
});

cashCloseForm?.addEventListener("input", () => {
  const note = String(cashCloseForm.elements.note?.value || "").trim();
  if (confirmCashCloseButton) confirmCashCloseButton.disabled = !note;
  setCashCloseFeedback();
});

cashCloseForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!isCashRegisterOpen()) {
    closeCashCloseModal();
    return;
  }

  const note = String(cashCloseForm.elements.note?.value || "").trim();
  if (!note) {
    setCashCloseFeedback("Хаалтын тайлбар бичнэ үү.", "error");
    cashCloseForm.elements.note?.focus();
    return;
  }

  const now = Date.now();
  const openedAt = Number(generalSettings.cashRegisterOpenedAt) || now;
  const archive = { ...createCashRegisterArchive(openedAt, now), note };
  generalSettings = {
    ...generalSettings,
    cashRegisterOpen: true,
    cashRegisterOpenedAt: now,
    cashRegisterClosedAt: now,
    cashRegisterArchives: [archive, ...getCashRegisterArchives()].slice(0, 100),
  };
  selectedArchiveDate = getDateKeyFromTimestamp(now);
  saveGeneralSettings();
  closeCashCloseModal();
  renderAll();
  showDashboard("director");
});

closeCashCloseButton?.addEventListener("click", closeCashCloseModal);
cancelCashCloseButton?.addEventListener("click", closeCashCloseModal);
cashCloseModal?.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-cash-close]")) closeCashCloseModal();
});

editPaymentBreakdownButton?.addEventListener("click", openPaymentEditModal);
closePaymentEditButton?.addEventListener("click", closePaymentEditModal);
cancelPaymentEditButton?.addEventListener("click", closePaymentEditModal);
paymentEditModal?.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-payment-edit]")) closePaymentEditModal();
});

paymentEditForm?.addEventListener("input", (event) => {
  const pinInput = event.target.closest('[name="pin"]');
  if (pinInput) pinInput.value = pinInput.value.replace(/\D/g, "").slice(0, 4);
  setPaymentEditFeedback();
  updatePaymentEditState();
});

paymentEditForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const dateKey = getDateKey(0);
  const income = getDailyPaymentSummary(dateKey).income;
  const amounts = getPaymentEditAmounts();
  const total = amounts.card + amounts.cash + amounts.transfer;
  const pinInput = paymentEditForm.elements.pin;
  const pin = String(pinInput.value || "").replace(/\D/g, "").slice(0, 4);

  if (!generalSettings.directorPinHash) {
    setPaymentEditFeedback("Эхлээд Захирлын 4 оронтой код үүсгэнэ үү.", "error");
    return;
  }
  if (total !== income || income <= 0) {
    setPaymentEditFeedback("Задаргааны нийлбэр нийт орлоготой тэнцэх ёстой.", "error");
    return;
  }
  if (!/^\d{4}$/.test(pin)) {
    setPaymentEditFeedback("Захирлын 4 оронтой код оруулна уу.", "error");
    pinInput.focus();
    return;
  }

  if (confirmPaymentEditButton) confirmPaymentEditButton.disabled = true;
  try {
    if (!(await verifyDirectorPin(pin))) {
      setPaymentEditFeedback("Захирлын код буруу байна.", "error");
      pinInput.select();
      return;
    }

    cashPaymentOverrides[dateKey] = { ...amounts, updatedAt: Date.now() };
    saveCashPaymentOverrides();
    closePaymentEditModal();
    renderCashStats();
    renderDirectorPanel();
    renderCashArchive();
  } finally {
    if (confirmPaymentEditButton) confirmPaymentEditButton.disabled = false;
  }
});

coverImageInput?.addEventListener("change", async () => {
  if (!isApproverAccount(getActiveAccount())) {
    coverImageInput.value = "";
    setCoverImageFeedback("Зөвхөн админ зураг өөрчилнө.", "error");
    return;
  }

  const file = coverImageInput.files?.[0];
  if (!file) return;
  setCoverImageFeedback("Зургийг бэлтгэж байна...");
  coverImageInput.disabled = true;
  try {
    pendingCoverImage = await prepareCoverImage(file);
    renderCoverImageSettings();
    setCoverImageFeedback("Зураг бэлэн боллоо. Хадгалах товчийг дарна уу.", "success");
  } catch (error) {
    pendingCoverImage = "";
    coverImageInput.value = "";
    renderCoverImageSettings();
    setCoverImageFeedback(error.message || "Зураг боловсруулахад алдаа гарлаа.", "error");
  } finally {
    coverImageInput.disabled = false;
  }
});

coverImageForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!isApproverAccount(getActiveAccount())) {
    setCoverImageFeedback("Зөвхөн админ зураг өөрчилнө.", "error");
    return;
  }
  if (!pendingCoverImage) {
    setCoverImageFeedback("Эхлээд зураг сонгоно уу.", "error");
    return;
  }

  try {
    localStorage.setItem(coverImageStorageKey, pendingCoverImage);
    pendingCoverImage = "";
    coverImageInput.value = "";
    renderCoverImageSettings();
    setCoverImageFeedback("Нүүрний зураг хадгалагдлаа.", "success");
  } catch {
    setCoverImageFeedback("Зургийг хадгалах зай хүрэлцэхгүй байна.", "error");
  }
});

resetCoverImageButton?.addEventListener("click", () => {
  if (!isApproverAccount(getActiveAccount())) {
    setCoverImageFeedback("Зөвхөн админ зураг өөрчилнө.", "error");
    return;
  }
  localStorage.removeItem(coverImageStorageKey);
  pendingCoverImage = "";
  if (coverImageInput) coverImageInput.value = "";
  renderCoverImageSettings();
  setCoverImageFeedback("Анхны зураг сэргээгдлээ.", "success");
});

staffShopForm?.addEventListener("input", updateStaffShopPreview);
staffShopForm?.addEventListener("change", updateStaffShopPreview);

staffShopForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(staffShopForm);
  const employee = String(data.get("employee") || "").trim();
  const product = shopProducts.find((item) => item.id === String(data.get("product") || ""));
  const quantity = Math.min(99, Math.max(1, Number(data.get("quantity")) || 1));

  if (!employee || !staffMembers.some((staff) => staff.name === employee)) {
    setStaffShopFeedback("Ажилтан сонгоно уу.", "error");
    return;
  }
  if (!product) {
    setStaffShopFeedback("Shop-ийн бүтээгдэхүүн сонгоно уу.", "error");
    return;
  }

  const now = new Date();
  if (!isCashRegisterOpen()) {
    generalSettings = {
      ...generalSettings,
      cashRegisterOpen: true,
      cashRegisterOpenedAt: now.getTime(),
    };
  }

  staffShopPurchases.unshift({
    id: `staff-shop-${now.getTime()}`,
    employee,
    productId: product.id,
    productName: product.name,
    emoji: product.emoji,
    quantity,
    unitPrice: Number(product.price) || 0,
    total: (Number(product.price) || 0) * quantity,
    createdAt: now.getTime(),
    date: getDateKeyFromTimestamp(now.getTime()),
    time: now.toLocaleTimeString("mn-MN", { hour: "2-digit", minute: "2-digit", hour12: false }),
  });
  staffShopPurchases = staffShopPurchases.slice(0, 1000);
  saveStaffShopPurchases();
  staffShopForm.elements.quantity.value = "1";
  renderStaffShopPurchases();
  renderCashRegister();
  renderCashStats();
  renderPayroll();
  renderDirectorPanel();
  setStaffShopFeedback(`${employee}: ${product.name} × ${quantity} бүртгэгдлээ.`);
});

staffShopList?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-delete-staff-shop]");
  if (!button) return;
  openStaffShopDeleteModal(button.dataset.deleteStaffShop);
});

closeStaffShopDeleteButton?.addEventListener("click", closeStaffShopDeleteModal);

staffShopDeleteModal?.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-staff-shop-delete]")) closeStaffShopDeleteModal();
});

staffShopDeleteForm?.addEventListener("input", (event) => {
  const input = event.target.closest('[name="pin"]');
  if (!input) return;
  input.value = input.value.replace(/\D/g, "").slice(0, 4);
  setStaffShopDeleteFeedback();
});

staffShopDeleteForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!pendingStaffShopDeleteId) return;

  const pinInput = staffShopDeleteForm.elements.pin;
  const pin = String(pinInput.value || "").replace(/\D/g, "").slice(0, 4);
  if (!generalSettings.directorPinHash) {
    setStaffShopDeleteFeedback("Эхлээд Захирлын 4 оронтой код үүсгэнэ үү.", "error");
    return;
  }
  if (!/^\d{4}$/.test(pin)) {
    setStaffShopDeleteFeedback("Захирлын 4 оронтой код оруулна уу.", "error");
    pinInput.focus();
    return;
  }

  const submitButton = staffShopDeleteForm.querySelector('button[type="submit"]');
  if (submitButton) submitButton.disabled = true;
  try {
    if (!(await verifyDirectorPin(pin))) {
      setStaffShopDeleteFeedback("Захирлын код буруу байна.", "error");
      pinInput.select();
      return;
    }

    const purchaseId = pendingStaffShopDeleteId;
    deleteStaffShopPurchase(purchaseId, true);
    closeStaffShopDeleteModal();
  } finally {
    if (submitButton) submitButton.disabled = false;
  }
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
      payrollRate: getPayrollRatePercent(),
      bayMapCount: getBayMapCount(),
      directorPinHash: String(generalSettings.directorPinHash || ""),
      cashRegisterOpen: isCashRegisterOpen(),
      cashRegisterOpenedAt: Number(generalSettings.cashRegisterOpenedAt) || 0,
      cashRegisterClosedAt: Number(generalSettings.cashRegisterClosedAt) || 0,
      cashRegisterArchives: getCashRegisterArchives(),
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
    renderStaffShopPurchases();
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
    renderStaffShopPurchases();
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
    renderStaffShopPurchases();
    showAdminFeedback(shopSettingsForm, "Бүтээгдэхүүн устгагдлаа.");
  });
}

adminCollapseAllButton?.addEventListener("click", () => setAdminCollapses(false));
adminExpandAllButton?.addEventListener("click", () => setAdminCollapses(true));

if (baySettingsForm) {
  baySettingsForm.addEventListener("submit", (event) => {
    event.preventDefault();
    bays = [...adminBayList.querySelectorAll("[data-admin-bay]")].map((row, index) => {
      const progress = Math.min(100, Math.max(0, Number(row.querySelector("[name='progress']").value) || 0));
      return {
        name: row.querySelector("[name='name']").value.trim(),
        vehicle: row.querySelector("[name='vehicle']").value.trim(),
        state: row.querySelector("[name='state']").value.trim(),
        progress,
        tone: row.querySelector("[name='tone']").value,
        startedAt: progress > 0 ? Number(bays[index]?.startedAt) || Date.now() : null,
      };
    });
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
  renderStaffShopPurchases();
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
  populateEmployeeControls();
  renderStaffShopPurchases();
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
  renderStaffShopPurchases();
  renderPayroll();
});

completedBayList?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-delete-completed-bay]");
  if (!button) return;

  event.stopPropagation();
  openCompletedDeleteModal(button.dataset.deleteCompletedBay);
});

closeCompletedDeleteButton?.addEventListener("click", closeCompletedDeleteModal);

completedDeleteModal?.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-completed-delete]")) closeCompletedDeleteModal();
});

completedDeleteForm?.addEventListener("input", (event) => {
  const input = event.target.closest('[name="pin"]');
  if (!input) return;
  input.value = input.value.replace(/\D/g, "").slice(0, 4);
  setCompletedDeleteFeedback();
});

completedDeleteForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!pendingCompletedDeleteId) return;

  const pinInput = completedDeleteForm.elements.pin;
  const pin = String(pinInput.value || "").replace(/\D/g, "").slice(0, 4);
  if (!generalSettings.directorPinHash) {
    setCompletedDeleteFeedback("Эхлээд Захирлын 4 оронтой код үүсгэнэ үү.", "error");
    return;
  }
  if (!/^\d{4}$/.test(pin)) {
    setCompletedDeleteFeedback("Захирлын 4 оронтой код оруулна уу.", "error");
    pinInput.focus();
    return;
  }

  const submitButton = completedDeleteForm.querySelector('button[type="submit"]');
  if (submitButton) submitButton.disabled = true;
  try {
    if (!(await verifyDirectorPin(pin))) {
      setCompletedDeleteFeedback("Захирлын код буруу байна.", "error");
      pinInput.select();
      return;
    }

    const completedId = pendingCompletedDeleteId;
    deleteCompletedBayCar(completedId, true);
    closeCompletedDeleteModal();
  } finally {
    if (submitButton) submitButton.disabled = false;
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && completedDeleteModal?.classList.contains("open")) {
    closeCompletedDeleteModal();
  }
  if (event.key === "Escape" && staffShopDeleteModal?.classList.contains("open")) {
    closeStaffShopDeleteModal();
  }
  if (event.key === "Escape" && cashCloseModal?.classList.contains("open")) {
    closeCashCloseModal();
  }
  if (event.key === "Escape" && paymentEditModal?.classList.contains("open")) {
    closePaymentEditModal();
  }
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

payrollRateSelect?.addEventListener("change", () => {
  generalSettings = {
    ...generalSettings,
    payrollRate: Number(payrollRateSelect.value),
  };
  saveGeneralSettings();
  renderCashStats();
  renderPayroll();
  renderDirectorPanel();
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
initAdminCollapses();
renderClock();
applyTheme(activeTheme);
applyThemeTogglePosition();
syncMobileCashDetails();
window.addEventListener("resize", applyThemeTogglePosition);
window.addEventListener("resize", syncMobileCashDetails);
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
    showDashboard("dashboard");
  } else {
    showEntry();
  }
} else {
  showAuth();
}
checkAccountApiAvailability().then((available) => {
  if (available && isApproverAccount()) {
    syncAccountRequestsFromApi();
  }
});
document.addEventListener("visibilitychange", () => {
  if (!document.hidden && isApproverAccount()) {
    syncAccountRequestsFromApi(!accountApiAvailable);
  }
});
setInterval(renderClock, 30000);
setInterval(updateQueueTimers, 1000);
setInterval(() => {
  enforceActiveAccountExpiry();
}, 1000);
setInterval(() => {
  if (!document.hidden && isApproverAccount()) {
    syncAccountRequestsFromApi(!accountApiAvailable);
  }
}, 5000);
