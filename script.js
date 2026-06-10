document.querySelectorAll('a[href="#"]').forEach((link) => {
  link.addEventListener("click", (event) => event.preventDefault());
});

const whatsappNumber = "601164370244";

function whatsappUrl(message) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function makeWhatsappLink(element, message) {
  if (!element) return;
  element.classList.add("whatsapp-link");
  element.dataset.whatsappMessage = message;
  element.setAttribute("role", "link");
  element.setAttribute("tabindex", "0");
}

document.addEventListener("click", (event) => {
  const target = event.target.closest(".whatsapp-link");
  if (!target) return;
  event.preventDefault();
  window.location.href = whatsappUrl(target.dataset.whatsappMessage);
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const target = event.target.closest(".whatsapp-link");
  if (!target) return;
  event.preventDefault();
  window.location.href = whatsappUrl(target.dataset.whatsappMessage);
});

const crispLauncher = document.querySelector(".crisp-launcher");
const crispGate = document.querySelector(".crisp-gate");
const crispGatePanel = document.querySelector(".crisp-gate-panel");
const crispGateClose = document.querySelector(".crisp-gate-close");
const crispNameInput = document.querySelector("#crisp-customer-name");
const crispPhoneInput = document.querySelector("#crisp-customer-phone");

function openCrispGate() {
  if (!crispGate) return;
  crispGate.hidden = false;
  crispGate.classList.add("is-open");
  crispGate.setAttribute("aria-hidden", "false");
  crispNameInput?.focus();
}

function closeCrispGate() {
  if (!crispGate) return;
  crispGate.classList.remove("is-open");
  crispGate.setAttribute("aria-hidden", "true");
  crispGate.hidden = true;
}

crispLauncher?.addEventListener("click", openCrispGate);
crispGateClose?.addEventListener("click", closeCrispGate);
crispGate?.addEventListener("click", (event) => {
  if (event.target === crispGate) closeCrispGate();
});

crispGatePanel?.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = crispNameInput?.value.trim();
  const phone = crispPhoneInput?.value.trim();
  if (!name || !phone) return;

  window.$crisp = window.$crisp || [];
  window.$crisp.push(["set", "user:nickname", [name]]);
  window.$crisp.push(["set", "user:phone", [phone]]);
  window.$crisp.push(["set", "session:data", [[["Name", name], ["Phone", phone]]]]);
  window.$crisp.push(["do", "chat:show"]);
  window.$crisp.push(["do", "chat:open"]);
  crispLauncher?.classList.add("is-hidden");
  closeCrispGate();
});

const platformWhatsappMessages = [
  "i nak mega88 id",
  "i nak pussy88 id",
  "i nak 918kiss id",
  "i nak newtown id",
  "i nak suncity id",
  "i nak ttgoal id"
];

document.querySelectorAll(".platform-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    document.querySelector(".platform-card.featured")?.classList.remove("featured");
    card.classList.add("featured");
  });
});

document.querySelectorAll(".platform-card").forEach((card, index) => {
  makeWhatsappLink(card, platformWhatsappMessages[index]);
});

const ttgoalSeriesFiles = [
  "01-creative-gaming.webp",
  "02-one-game.webp",
  "03-smartsoft.webp",
  "04-rich88.webp",
  "05-king-maker.webp",
  "06-dream-tech.webp",
  "07-virtual-tech.webp",
  "08-dragoon-soft.webp",
  "01-evo888.webp",
  "02-netent.webp",
  "03-ygr.webp",
  "04-i-bex.webp",
  "05-apollo.webp",
  "06-simple-play.webp",
  "07-fun-gaming.webp",
  "08-gfg.webp",
  "01-betsoft.webp",
  "02-relax-gaming.webp",
  "03-mimi-gaming.webp",
  "04-mega888.webp",
  "05-nlc.webp",
  "06-cq9.webp",
  "07-habanero.webp",
  "08-askmeslot.webp",
  "01-besoft.webp",
  "02-t1games.webp",
  "03-hacksaw.webp",
  "04-bt-gaming.webp",
  "05-ai-gaming.webp",
  "06-galaxsys.webp",
  "07-spribe-aviator.webp",
  "08-5g-games.webp",
  "01-uu-slots.webp",
  "02-fastspin.webp",
  "03-crowdplay.webp",
  "04-joker.webp",
  "05-es.webp",
  "06-playtech-slot.webp",
  "07-playstar.webp",
  "08-next-spin.webp",
  "01-ace-game.webp",
  "02-live22.webp",
  "03-bng-games.webp",
  "04-pragmatic.webp",
  "05-jili-games.webp",
  "06-advantplay.webp",
  "07-pegasus.webp",
  "08-spade-gaming.webp"
];

const ttgoalLiveCasinoFiles = [
  "01-playace.webp",
  "02-fair-guaranteed.webp",
  "03-big-gaming.webp",
  "04-astar.webp",
  "05-allbet.webp",
  "06-playtech-live.webp",
  "01-won-casino.webp",
  "02-creedroomz.webp",
  "03-sexy-baccarat.webp",
  "04-onlive.webp",
  "05-evo-casino.webp",
  "06-king855.webp",
  "07-dream-gaming.webp",
  "08-sa-gaming.webp"
];

const ttgoalSeriesTrack = document.querySelector("#ttgoal-series-track");
const ttgoalLiveCasinoTrack = document.querySelector("#ttgoal-live-casino-track");

function titleFromFileName(fileName) {
  return fileName
    .replace(/^\d+-/, "")
    .replace(".webp", "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function createTtgoalSeriesGroup(files, folderName, messagePrefix, altSuffix) {
  const group = document.createElement("div");
  group.className = "ttgoal-series-group";

  files.forEach((fileName) => {
    const title = titleFromFileName(fileName);
    const card = document.createElement("article");
    const image = document.createElement("img");
    const messageName = title.toLowerCase();
    card.className = "ttgoal-series-card whatsapp-link";
    card.dataset.whatsappMessage = `${messagePrefix} ${messageName}`;
    card.setAttribute("role", "link");
    card.setAttribute("tabindex", "0");
    image.src = `${folderName}/${fileName}`;
    image.alt = `${title} ${altSuffix}`;
    image.loading = "lazy";
    card.append(image);
    group.append(card);
  });

  return group;
}

function fillTtgoalTrack(track, files, folderName, messagePrefix, altSuffix) {
  if (!track) return;
  track.append(createTtgoalSeriesGroup(files, folderName, messagePrefix, altSuffix));
  const duplicateSeriesGroup = createTtgoalSeriesGroup(files, folderName, messagePrefix, altSuffix);
  duplicateSeriesGroup.setAttribute("aria-hidden", "true");
  track.append(duplicateSeriesGroup);
}

fillTtgoalTrack(ttgoalSeriesTrack, ttgoalSeriesFiles, "ttgoal-series", "i nak ttgoal", "TTGoal game provider");
fillTtgoalTrack(ttgoalLiveCasinoTrack, ttgoalLiveCasinoFiles, "ttgoal-live-casino", "i nak ttgoal live casino", "TTGoal live casino provider");

const proofTrack = document.querySelector(".proof-track");
const proofGroup = proofTrack?.querySelector(".proof-group");

if (proofGroup) {
  const duplicateProofGroup = proofGroup.cloneNode(true);
  duplicateProofGroup.setAttribute("aria-hidden", "true");
  proofTrack.append(duplicateProofGroup);
}

const benefitTrack = document.querySelector(".benefit-track");
const benefitGroup = benefitTrack?.querySelector(".benefit-group");

if (benefitGroup) {
  const benefitMessages = [
    "i nak claim recommend bonus",
    "i nak claim rebate bonus",
    "i nak claim deposit bonus",
    "i nak claim birthday bonus",
    "i nak claim vip bonus"
  ];
  benefitGroup.querySelectorAll(".benefit-card").forEach((card, index) => {
    makeWhatsappLink(card, benefitMessages[index]);
  });
  const duplicateBenefitGroup = benefitGroup.cloneNode(true);
  duplicateBenefitGroup.setAttribute("aria-hidden", "true");
  benefitTrack.append(duplicateBenefitGroup);
}

const promotionWhatsappMessages = [
  "i nak claim welcome bonus",
  "i nak claim 4d toto promotion"
];

document.querySelectorAll(".promotion-card").forEach((card, index) => {
  makeWhatsappLink(card, promotionWhatsappMessages[index]);
  card.removeAttribute("aria-pressed");
  card.addEventListener("pointerdown", () => {
    card.classList.add("is-active");
  });
  card.addEventListener("pointerup", () => {
    card.classList.remove("is-active");
  });
  card.addEventListener("pointerleave", () => {
    card.classList.remove("is-active");
  });
});

document.querySelectorAll(".proof-card").forEach((card) => {
  const gameName = card.querySelector(".proof-game")?.textContent.toLowerCase();
  makeWhatsappLink(card, `i nak ${gameName} id`);
});

const translations = {
  en: {
    pageTitle: "TGBET88 Gaming Center",
    heroKicker: "NEXT LEVEL ENTERTAINMENT",
    gamingCenter: "GAMING CENTER",
    heroCopy: "Instant access to top gaming platforms. Explore your favorite games and elevate your entertainment experience.",
    systemsOnline: "ALL SYSTEMS ONLINE",
    selectPlatform: "01 // SELECT PLATFORM",
    gamePortals: "GAME PORTALS",
    platformsAvailable: "6 PLATFORMS AVAILABLE",
    memberRewards: "02 // MEMBER REWARDS",
    hotPromotion: "HOT PROMOTION",
    newMemberExclusive: "NEW MEMBER EXCLUSIVE",
    welcomeOffer: "WELCOME OFFER",
    welcomeBonus: "WELCOME BONUS",
    welcomeCopy: "Exclusive rewards for new members. Join now and elevate your gaming experience.",
    claimPromotion: "CLAIM PROMOTION",
    totoTitle: "FREE 4D TOTO PROMOTION",
    totoLead: "Deposit RM100 every Monday - Friday",
    totoCopy: "Get 1 free Toto number for the Sunday draw.",
    totoHighlight: "The more you deposit, the more numbers and chances to win.",
    totoNote: "Limited weekly promotion. Deposit now and try your luck!",
    memberBenefits: "03 // MEMBER BENEFITS",
    exclusiveRewards: "EXCLUSIVE REWARDS",
    rewardsAvailable: "5 REWARDS AVAILABLE",
    recommendBonus: "RECOMMEND BONUS",
    weeklyRebate: "WEEKLY REBATE",
    weeklyRewards: "WEEKLY REWARDS",
    depositBonus: "DEPOSIT BONUS",
    birthdayBonus: "BIRTHDAY BONUS",
    birthdayReward: "SPECIAL REWARD",
    vipBonus: "VIP BONUS",
    verifiedPayouts: "04 // VERIFIED PAYOUTS",
    winningProof: "LIVE WINNING PROOF",
    payoutsLive: "PAYOUTS UPDATED LIVE",
    playResponsibly: "PLAY RESPONSIBLY",
    explorePlatforms: "EXPLORE PLATFORMS",
    popularPlatform: "POPULAR PLATFORM",
    enterPlatform: "ENTER PLATFORM",
    online: "ONLINE",
    cardDescriptions: [
      "Premium gaming experience",
      "Fast and seamless access",
      "Classic games, instant play",
      "Explore a new dimension",
      "Bright games, smooth journey",
      "Game on. Score big."
    ],
    deposit: "DEPOSIT",
    get: "GET",
    bankTransfer: "BANK TRANSFER",
    verifiedBankTransfer: "VERIFIED BANK TRANSFER",
    prizes: ["FIRST PRIZE", "SPECIAL", "SECOND PRIZE", "CONSOLATION", "THIRD PRIZE"],
    footerLinks: ["TERMS", "PRIVACY", "SUPPORT"]
  },
  zh: {
    pageTitle: "TGBET88 游戏中心",
    heroKicker: "次世代娱乐体验",
    gamingCenter: "游戏中心",
    heroCopy: "即时进入热门游戏平台，探索喜爱的游戏，全面升级您的娱乐体验。",
    systemsOnline: "所有系统在线",
    selectPlatform: "01 // 选择平台",
    gamePortals: "游戏平台",
    platformsAvailable: "6 个平台可用",
    memberRewards: "02 // 会员奖励",
    hotPromotion: "热门优惠",
    newMemberExclusive: "新会员专享",
    welcomeOffer: "欢迎优惠",
    welcomeBonus: "欢迎奖金",
    welcomeCopy: "新会员专属奖励。立即加入，升级您的游戏体验。",
    claimPromotion: "领取优惠",
    totoTitle: "免费 4D TOTO 优惠",
    totoLead: "星期一至星期五充值 RM100",
    totoCopy: "获得 1 个免费 Toto 号码，参与星期日开彩。",
    totoHighlight: "充值越多，获得的号码越多，中奖机会越高。",
    totoNote: "每周限时优惠。立即充值，试试您的运气！",
    memberBenefits: "03 // 会员福利",
    exclusiveRewards: "专属奖励",
    rewardsAvailable: "5 项福利可领取",
    recommendBonus: "推荐奖金",
    weeklyRebate: "每周返水",
    weeklyRewards: "每周奖励",
    depositBonus: "充值奖金",
    birthdayBonus: "生日奖金",
    birthdayReward: "特别奖励",
    vipBonus: "VIP 奖金",
    verifiedPayouts: "04 // 已验证提款",
    winningProof: "客户赢钱证明",
    payoutsLive: "提款记录实时更新",
    playResponsibly: "理性娱乐",
    explorePlatforms: "探索平台",
    popularPlatform: "热门平台",
    enterPlatform: "进入平台",
    online: "在线",
    cardDescriptions: [
      "优质游戏体验",
      "快速流畅进入平台",
      "经典游戏，即刻畅玩",
      "探索全新游戏空间",
      "精彩游戏，流畅体验",
      "立即开玩，争取高分"
    ],
    deposit: "充值",
    get: "获得",
    bankTransfer: "银行转账",
    verifiedBankTransfer: "已验证银行转账",
    prizes: ["一等奖", "特别奖", "二等奖", "安慰奖", "三等奖"],
    footerLinks: ["条款", "隐私", "客服"]
  },
  ms: {
    pageTitle: "Pusat Permainan TGBET88",
    heroKicker: "HIBURAN TAHAP SETERUSNYA",
    gamingCenter: "PUSAT PERMAINAN",
    heroCopy: "Akses segera ke platform permainan popular. Terokai permainan kegemaran anda dan tingkatkan pengalaman hiburan.",
    systemsOnline: "SEMUA SISTEM DALAM TALIAN",
    selectPlatform: "01 // PILIH PLATFORM",
    gamePortals: "PORTAL PERMAINAN",
    platformsAvailable: "6 PLATFORM TERSEDIA",
    memberRewards: "02 // GANJARAN AHLI",
    hotPromotion: "PROMOSI TERKINI",
    newMemberExclusive: "EKSKLUSIF AHLI BARU",
    welcomeOffer: "TAWARAN SELAMAT DATANG",
    welcomeBonus: "BONUS SELAMAT DATANG",
    welcomeCopy: "Ganjaran eksklusif untuk ahli baru. Sertai sekarang dan tingkatkan pengalaman permainan anda.",
    claimPromotion: "TUNTUT PROMOSI",
    totoTitle: "PROMOSI TOTO 4D PERCUMA",
    totoLead: "Deposit RM100 setiap Isnin - Jumaat",
    totoCopy: "Dapat 1 nombor Toto percuma untuk cabutan Ahad.",
    totoHighlight: "Lagi banyak deposit, lagi banyak nombor dan peluang menang.",
    totoNote: "Promosi terhad setiap minggu. Deposit sekarang dan cuba nasib anda!",
    memberBenefits: "03 // GANJARAN AHLI",
    exclusiveRewards: "GANJARAN EKSKLUSIF",
    rewardsAvailable: "5 GANJARAN TERSEDIA",
    recommendBonus: "BONUS REKEMEN",
    weeklyRebate: "REBATE MINGGUAN",
    weeklyRewards: "GANJARAN MINGGUAN",
    depositBonus: "BONUS DEPOSIT",
    birthdayBonus: "BONUS HARI JADI",
    birthdayReward: "GANJARAN ISTIMEWA",
    vipBonus: "BONUS VIP",
    verifiedPayouts: "04 // BAYARAN DISAHKAN",
    winningProof: "BUKTI KEMENANGAN",
    payoutsLive: "BAYARAN DIKEMAS KINI SECARA LANGSUNG",
    playResponsibly: "MAIN SECARA BERTANGGUNGJAWAB",
    explorePlatforms: "TEROKAI PLATFORM",
    popularPlatform: "PLATFORM POPULAR",
    enterPlatform: "MASUK PLATFORM",
    online: "DALAM TALIAN",
    cardDescriptions: [
      "Pengalaman permainan premium",
      "Akses pantas dan lancar",
      "Permainan klasik, main serta-merta",
      "Terokai dimensi baharu",
      "Permainan menarik, pengalaman lancar",
      "Mula bermain dan skor tinggi"
    ],
    deposit: "DEPOSIT",
    get: "DAPAT",
    bankTransfer: "PINDAHAN BANK",
    verifiedBankTransfer: "PINDAHAN BANK DISAHKAN",
    prizes: ["HADIAH PERTAMA", "SPECIAL", "HADIAH KEDUA", "CONSOLATION", "HADIAH KETIGA"],
    footerLinks: ["TERMA", "PRIVASI", "SOKONGAN"]
  }
};

const languageSelect = document.querySelector("#language-select");

function replaceLeadingText(element, text) {
  const textNode = [...element.childNodes].find((node) => node.nodeType === Node.TEXT_NODE);
  if (textNode) textNode.nodeValue = `${text} `;
}

function saveLanguage(language) {
  try {
    localStorage.setItem("tgbet88-language", language);
  } catch {
    // Some local preview environments disable storage for file URLs.
  }
}

function loadLanguage() {
  try {
    return localStorage.getItem("tgbet88-language") || "en";
  } catch {
    return "en";
  }
}

function applyLanguage(language) {
  const copy = translations[language] || translations.en;
  document.documentElement.lang = language === "zh" ? "zh-Hans" : language;
  document.title = copy.pageTitle;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const translatedText = copy[element.dataset.i18n];
    if (translatedText) element.textContent = translatedText;
  });

  replaceLeadingText(document.querySelector(".primary-button"), copy.explorePlatforms);
  document.querySelectorAll(".card-label").forEach((element) => {
    element.textContent = copy.popularPlatform;
  });
  document.querySelectorAll(".online").forEach((element) => {
    replaceLeadingText(element, copy.online);
  });
  document.querySelectorAll(".card-body p").forEach((element, index) => {
    element.textContent = copy.cardDescriptions[index];
  });
  document.querySelectorAll(".enter-button").forEach((element) => {
    replaceLeadingText(element, copy.enterPlatform);
  });
  document.querySelectorAll(".promotion-tiers > span").forEach((tier) => {
    const labels = tier.querySelectorAll("small");
    labels[0].textContent = copy.deposit;
    labels[1].textContent = copy.get;
  });
  document.querySelectorAll(".toto-prizes small").forEach((element, index) => {
    element.textContent = copy.prizes[index];
  });
  document.querySelectorAll(".footer-links a").forEach((element, index) => {
    element.textContent = copy.footerLinks[index];
  });

  saveLanguage(language);
}

if (languageSelect) {
  const savedLanguage = loadLanguage();
  languageSelect.value = savedLanguage;
  applyLanguage(savedLanguage);
  languageSelect.addEventListener("change", (event) => applyLanguage(event.target.value));
}
