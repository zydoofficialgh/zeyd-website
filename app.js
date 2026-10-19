/* ═══════════════════════════════════════════════════════════
   محرك الموقع — لا حاجة لتعديل هذا الملف
   ═══════════════════════════════════════════════════════════ */

// ═══ نصوص الواجهة ═══
const UI = {
  navAbout:      { ar: "نبذة", en: "About", fr: "À propos" },
  navEducation:  { ar: "التعليم", en: "Education", fr: "Formation" },
  navExperience: { ar: "التجارب", en: "Experience", fr: "Expérience" },
  navPersonal:   { ar: "شخصي", en: "Personal", fr: "Personnel" },
  navAdvice:     { ar: "نصائحي", en: "Advice", fr: "Conseils" },
  navGallery:    { ar: "الذكريات", en: "Gallery", fr: "Galerie" },
  navContact:    { ar: "تواصل", en: "Contact", fr: "Contact" },
  heroCta1:      { ar: "تعرّف عليّ", en: "About me", fr: "À propos" },
  heroCta2:      { ar: "تواصل معي", en: "Contact me", fr: "Contactez-moi" },
  contactSub:    { ar: "اختر الطريقة الأنسب لك للتواصل معي", en: "Choose the way that works best for you", fr: "Choisissez le moyen qui vous convient" },
  footerMade:    { ar: "صُنع بشغف", en: "Made with passion", fr: "Fait avec passion" },
  chatTitle:     { ar: "المساعد الذكي", en: "AI Assistant", fr: "Assistant IA" },
  chatPlaceholder:{ ar: "اسألني عن زيد...", en: "Ask me about Zaid...", fr: "Interrogez-moi sur Zaid..." },
  chatWelcome:   { ar: "مرحباً! أنا المساعد الذكي لزيد. اسألني عن تعليمه، اهتماماته، أو كيف تتواصل معه.", en: "Hi! I'm Zaid's AI assistant. Ask me about his education, interests, or how to reach him.", fr: "Bonjour! Je suis l'assistant IA de Zaid. Posez-moi des questions sur ses études, passions, ou comment le contacter." },
  health:        { ar: "الصحة", en: "Health", fr: "Santé" },
  social:        { ar: "العلاقات", en: "Social", fr: "Relations" },
  hobbies:       { ar: "الاهتمامات", en: "Hobbies", fr: "Loisirs" },
  noResults:     { ar: "لا توجد نتائج", en: "No results", fr: "Aucun résultat" }
};

const LANGS = {
  ar: { dir: "rtl", next: "en", font: "cairo" },
  en: { dir: "ltr", next: "fr", font: "inter" },
  fr: { dir: "ltr", next: "ar", font: "inter" }
};

let currentLang = localStorage.getItem("lang") || "ar";
let currentFilter = "all";

const t = (key) => (UI[key] || {})[currentLang] || key;
const L = (obj) => !obj ? "" : (typeof obj === "string" ? obj : (obj[currentLang] || obj.en || obj.ar || ""));

// ═══ i18n ═══
function applyI18n() {
  const meta = LANGS[currentLang];
  document.documentElement.lang = currentLang;
  document.documentElement.dir = meta.dir;
  
  document.querySelectorAll("[data-i18n]").forEach(el => {
    if (UI[el.dataset.i18n]) el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    if (UI[el.dataset.i18nPlaceholder]) el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  
  document.body.classList.remove("font-cairo", "font-inter");
  document.body.classList.add(meta.font === "cairo" ? "font-cairo" : "font-inter");
  document.getElementById("lang-btn").textContent = meta.next.toUpperCase();
  
  renderAll();
}

// ═══ Renderers ═══
function renderAll() {
  renderHero(); renderAbout(); renderEducation(); renderExperience();
  renderPersonal(); renderAdvice(); renderGallery(); renderContact();
}

function renderHero() {
  document.getElementById("hero-name").textContent = L(CONFIG.profile.name);
  document.getElementById("hero-title").textContent = L(CONFIG.profile.title);
  document.getElementById("hero-univ").textContent = L(CONFIG.profile.university);
  
  const av = document.getElementById("hero-avatar");
  if (CONFIG.profile.avatar) {
    av.innerHTML = `<img src="${CONFIG.profile.avatar}" alt="" class="w-full h-full object-cover">`;
  } else {
    av.textContent = L(CONFIG.profile.name).split(" ").map(w => w[0]).slice(0,2).join("");
  }
  
  const badge = document.getElementById("status-badge");
  const type = CONFIG.profile.status.type;
  const colors = {
    available: "bg-emerald-500/10 border-emerald-500/40 text-emerald-400",
    study:     "bg-blue-500/10 border-blue-500/40 text-blue-400",
    sport:     "bg-amber-500/10 border-amber-500/40 text-amber-400",
    busy:      "bg-red-500/10 border-red-500/40 text-red-400"
  };
  const dotColors = { available: "bg-emerald-400", study: "bg-blue-400", sport: "bg-amber-400", busy: "bg-red-400" };
  badge.className = `inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 border ${colors[type] || colors.available}`;
  badge.innerHTML = `<span class="w-2 h-2 rounded-full ${dotColors[type] || dotColors.available} animate-pulse"></span>${L(CONFIG.profile.status.label)}`;
}

function renderAbout() {
  document.getElementById("about-content").innerHTML = `
    <div class="md:col-span-2 bg-card border border-white/5 rounded-2xl p-6">
      <p class="text-slate-300 leading-relaxed">${L(CONFIG.about.bio)}</p>
    </div>
    <div class="space-y-3">
      ${CONFIG.about.facts.map(f => `
        <div class="bg-card border border-white/5 rounded-xl p-4 flex items-start gap-3">
          <div class="text-2xl">${f.icon}</div>
          <div>
            <div class="text-xs text-slate-500 mb-1">${L(f.label)}</div>
            <div class="text-sm font-semibold">${L(f.value)}</div>
          </div>
        </div>`).join("")}
    </div>`;
}

function renderEducation() {
  document.getElementById("education-content").innerHTML = CONFIG.education.map(e => `
    <div class="bg-card border border-white/5 rounded-2xl p-6 hover:border-primary/40 transition">
      <div class="flex justify-between items-start flex-wrap gap-2 mb-2">
        <h3 class="text-lg font-bold">${L(e.title)}</h3>
        <span class="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent whitespace-nowrap">${L(e.year)}</span>
      </div>
      <div class="text-sm text-primary mb-2 font-semibold">${L(e.org)}</div>
      <p class="text-sm text-slate-400 leading-relaxed">${L(e.desc)}</p>
    </div>`).join("");
}

function renderExperience() {
  document.getElementById("experience-content").innerHTML = CONFIG.experience.map(e => `
    <div class="bg-card border border-white/5 rounded-2xl p-6 hover:border-primary/40 transition">
      <div class="flex justify-between items-start flex-wrap gap-2 mb-2">
        <h3 class="text-lg font-bold">${L(e.title)}</h3>
        <span class="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary whitespace-nowrap">${L(e.year)}</span>
      </div>
      <div class="text-sm text-accent mb-2 font-semibold">${L(e.org)}</div>
      <p class="text-sm text-slate-400 leading-relaxed">${L(e.desc)}</p>
    </div>`).join("");
}

function renderPersonal() {
  const hobbies = CONFIG.personal.hobbies[currentLang] || CONFIG.personal.hobbies.en;
  document.getElementById("personal-content").innerHTML = `
    <div class="bg-card border border-white/5 rounded-2xl p-6">
      <div class="text-3xl mb-3">🎯</div>
      <h3 class="font-bold mb-3">${t("hobbies")}</h3>
      <div class="flex flex-wrap gap-2">
        ${hobbies.map(h => `<span class="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">${h}</span>`).join("")}
      </div>
    </div>
    <div class="bg-card border border-white/5 rounded-2xl p-6">
      <div class="text-3xl mb-3">💚</div>
      <h3 class="font-bold mb-3">${t("health")}</h3>
      <p class="text-sm text-slate-400">${L(CONFIG.personal.health)}</p>
    </div>
    <div class="bg-card border border-white/5 rounded-2xl p-6">
      <div class="text-3xl mb-3">🤝</div>
      <h3 class="font-bold mb-3">${t("social")}</h3>
      <p class="text-sm text-slate-400">${L(CONFIG.personal.social)}</p>
    </div>`;
}

function renderAdvice() {
  document.getElementById("advice-content").innerHTML = CONFIG.advice.map(a => `
    <div class="bg-card border border-white/5 rounded-2xl p-6 border-l-4 border-l-accent">
      <p class="text-slate-300 italic">"${L(a)}"</p>
    </div>`).join("");
}

function renderGallery() {
  const filters = document.getElementById("gallery-filters");
  filters.innerHTML = CONFIG.gallery.categories.map(c => `
    <button data-cat="${c.id}" class="filter-btn px-4 py-2 rounded-full text-xs font-semibold transition ${c.id === currentFilter ? 'bg-primary text-ink' : 'bg-card border border-white/10 hover:border-primary/50'}">${L(c.label)}</button>`).join("");
  
  filters.querySelectorAll(".filter-btn").forEach(b => {
    b.onclick = () => { currentFilter = b.dataset.cat; renderGallery(); };
  });
  
  const imgs = CONFIG.gallery.images.filter(i => currentFilter === "all" || i.category === currentFilter);
  const content = document.getElementById("gallery-content");
  
  if (imgs.length === 0) {
    content.innerHTML = `<p class="col-span-full text-center text-slate-500 py-10">${t("noResults")}</p>`;
    return;
  }
  
  content.innerHTML = imgs.map(i => `
    <div class="gallery-item group relative aspect-square rounded-xl overflow-hidden cursor-pointer bg-card border border-white/5" data-src="${i.src}">
      <img src="${i.src}" alt="${L(i.caption)}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy">
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-3">
        <span class="text-xs text-white">${L(i.caption)}</span>
      </div>
    </div>`).join("");
  
  content.querySelectorAll(".gallery-item").forEach(item => {
    item.onclick = () => {
      document.getElementById("lightbox-img").src = item.dataset.src;
      document.getElementById("lightbox").classList.remove("hidden");
    };
  });
}

function renderContact() {
  document.getElementById("contact-content").innerHTML = CONFIG.contact.map(c => `
    <a href="${c.url}" target="_blank" rel="noopener" class="bg-card border border-white/5 rounded-2xl p-5 hover:border-primary hover:scale-105 transition flex flex-col items-center gap-2">
      <div class="text-3xl">${c.icon}</div>
      <div class="text-sm font-bold">${L(c.label)}</div>
      <div class="text-xs text-slate-500 truncate max-w-full">${c.text}</div>
    </a>`).join("");
}

// ═══ Language switch ═══
document.getElementById("lang-btn").onclick = () => {
  currentLang = LANGS[currentLang].next;
  localStorage.setItem("lang", currentLang);
  applyI18n();
};

// ═══ Mobile menu ═══
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
menuBtn.onclick = () => mobileMenu.classList.toggle("hidden");
mobileMenu.innerHTML = ["navAbout","navEducation","navExperience","navPersonal","navAdvice","navGallery","navContact"]
  .map(k => `<a href="#${k.replace("nav","").toLowerCase()}" data-i18n="${k}" class="block py-2 border-b border-white/5 hover:text-primary"></a>`).join("");

// ═══ Lightbox ═══
document.getElementById("lightbox-close").onclick = () => document.getElementById("lightbox").classList.add("hidden");
document.getElementById("lightbox").onclick = (e) => {
  if (e.target.id === "lightbox") document.getElementById("lightbox").classList.add("hidden");
};

// ═══ Chatbot ═══
const chatToggle = document.getElementById("chat-toggle");
const chatPanel = document.getElementById("chat-panel");
const chatMessages = document.getElementById("chat-messages");
const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");

chatToggle.onclick = () => {
  chatPanel.classList.toggle("hidden");
  if (!chatPanel.classList.contains("hidden") && chatMessages.children.length === 0) {
    addChatMessage("bot", t("chatWelcome"));
  }
};
document.getElementById("chat-close").onclick = () => chatPanel.classList.add("hidden");

function addChatMessage(role, text) {
  const div = document.createElement("div");
  div.className = role === "user"
    ? "ml-auto max-w-[80%] bg-primary text-ink rounded-2xl rounded-br-sm px-4 py-2 whitespace-pre-line"
    : "mr-auto max-w-[85%] bg-ink/70 border border-white/10 rounded-2xl rounded-bl-sm px-4 py-2 whitespace-pre-line";
  div.textContent = text;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// منطق المساعد — يقرأ من config.js ويجيب بثلاث لغات
function chatbotReply(message) {
  const m = message.toLowerCase();
  const isAr = currentLang === "ar", isFr = currentLang === "fr";
  
  if (/(مرحب|سلام|اهلا|أهلا|hello|hi|hey|bonjour|salut)/.test(m)) return t("chatWelcome");
  if (/(عمر|سن|كم عمر|age|âge|ans)/.test(m)) return `${L(CONFIG.profile.name)}: ${L(CONFIG.profile.age)}`;
  if (/(اسم|من هو|name|nom|qui est)/.test(m)) return `${L(CONFIG.profile.name)} — ${L(CONFIG.profile.title)}`;
  if (/(جامعة|كلية|يدرس|دراس|تخصص|univ|study|étud|school|major)/.test(m)) {
    const e = CONFIG.education[0];
    return `${L(e.title)}\n${L(e.org)} (${L(e.year)})\n${L(e.desc)}`;
  }
  if (/(هواي|اهتمام|hobb|interest|loisir|passion)/.test(m)) {
    return (CONFIG.personal.hobbies[currentLang] || CONFIG.personal.hobbies.en).join(" • ");
  }
  if (/(تواصل|اتصال|contact|reach|joindre|email|بريد|واتس|whatsapp)/.test(m)) {
    return CONFIG.contact.map(c => `${c.icon} ${L(c.label)}: ${c.url}`).join("\n");
  }
  if (/(صحة|health|santé)/.test(m)) return L(CONFIG.personal.health);
  if (/(رياض|كورة|football|sport|كرة)/.test(m)) return isAr ? "كرة القدم من أكبر اهتماماتي! ⚽" : isFr ? "Le football est l'une de mes grandes passions ! ⚽" : "Football is one of my biggest passions! ⚽";
  if (/(صور|ألبوم|gallery|photo|image)/.test(m)) {
    const n = CONFIG.gallery.images.length;
    return isAr ? `لدي ${n} صورة في المعرض — تصفحها في قسم الذكريات.` : isFr ? `J'ai ${n} photos dans la galerie — section souvenirs.` : `I have ${n} photos in the gallery — check the memories section.`;
  }
  if (/(نصيح|حكم|advice|conseil)/.test(m)) return L(CONFIG.advice[Math.floor(Math.random() * CONFIG.advice.length)]);
  if (/(عن|about|parle|propos)/.test(m)) return L(CONFIG.about.bio);
  if (/(مساعدة|help|aide|قدرات)/.test(m)) {
    return isAr ? "يمكنك سؤالي عن: الاسم، العمر، الدراسة، الاهتمامات، التواصل، الصحة، النصائح، أو المعرض."
      : isFr ? "Demandez-moi : nom, âge, études, passions, contact, santé, conseils, ou galerie."
      : "You can ask me about: name, age, studies, hobbies, contact, health, advice, or gallery.";
  }
  return isAr ? "لم أفهم تماماً. جرب: من هو زيد؟ ما تخصصه؟ كيف أتواصل معه؟"
    : isFr ? "Je n'ai pas bien compris. Essayez : Qui est Zaid ? Comment le contacter ?"
    : "I didn't quite get that. Try: Who is Zaid? How to contact him?";
}

chatForm.onsubmit = (e) => {
  e.preventDefault();
  const msg = chatInput.value.trim();
  if (!msg) return;
  addChatMessage("user", msg);
  chatInput.value = "";
  setTimeout(() => addChatMessage("bot", chatbotReply(msg)), 350);
};

// ═══ Init ═══
document.getElementById("footer-year").textContent = new Date().getFullYear();
applyI18n();
