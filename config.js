/* ═══════════════════════════════════════════════════════════
   ملف التحكم الكامل — عدّل كل شيء من هنا بدون لمس الكود
   كل نص لديه 3 نسخ: ar (عربية) | en (إنجليزية) | fr (فرنسية)
   ═══════════════════════════════════════════════════════════ */

const CONFIG = {

  // ─── الملف الشخصي ───
  profile: {
    name: {
      ar: "زيد سيدنا محمد",
      en: "Zeyd Sidina Mohamed",
      fr: "Zeyd Sidina Mohamed"
    },
    title: {
      ar: "طالب هندسة — تقنيات التنقيب الجيولوجي والتعديني",
      en: "Engineering Student — Geological & Mining Exploration",
      fr: "Étudiant Ingénieur — Exploration Géologique & Minière"
    },
    university: {
      ar: "كلية العلوم والتقنيات — جامعة انواكشوط العصرية",
      en: "Faculty of Sciences & Technologies — University of Nouakchott",
      fr: "Faculté des Sciences & Technologies — Université de Nouakchott"
    },
    age: { ar: "18 سنة", en: "18 years old", fr: "18 ans" },

    // رابط صورة رمزية (اتركه فارغاً "" لاستخدام الأحرف الأولى من اسمك)
    avatar: "",

    // الحالة الحية — type: "available" | "study" | "sport" | "busy"
    status: {
      label: {
        ar: "متاح للتواصل",
        en: "Available to connect",
        fr: "Disponible pour échanger"
      },
      type: "available"
    }
  },

  // ─── نبذة عني ───
  about: {
    bio: {
      ar: "طالب جامعي في السنة الثانية بكلية العلوم والتقنيات، جامعة انواكشوط العصرية. شغوف بالجيولوجيا والتعدين، وأؤمن أن العلم والمعرفة هما مفتاح المستقبل. أبحث دائماً عن التطور والتحديات الجديدة.",
      en: "Second-year university student at the Faculty of Sciences & Technologies, University of Nouakchott. Passionate about geology and mining, I believe knowledge is the key to the future. Always seeking growth and new challenges.",
      fr: "Étudiant en deuxième année à la Faculté des Sciences & Technologies, Université de Nouakchott. Passionné de géologie et de mines, je crois que le savoir est la clé de l'avenir. Toujours en quête de progrès et de nouveaux défis."
    },
    facts: [
      { icon: "🎓", label: { ar: "التخصص", en: "Major", fr: "Spécialité" },
        value: { ar: "التنقيب الجيولوجي", en: "Geological Exploration", fr: "Exploration Géologique" } },
      { icon: "📍", label: { ar: "المدينة", en: "City", fr: "Ville" },
        value: { ar: "انواكشوط، موريتانيا", en: "Nouakchott, Mauritania", fr: "Nouakchott, Mauritanie" } },
      { icon: "🗣️", label: { ar: "اللغات", en: "Languages", fr: "Langues" },
        value: { ar: "العربية، الفرنسية، الإنجليزية", en: "Arabic, French, English", fr: "Arabe, Français, Anglais" } }
    ]
  },

  // ─── التعليم والشهادات ───
  education: [
    {
      title: { ar: "ليسانس هندسة — الجذع المشترك", en: "Bachelor of Engineering — Common Core", fr: "Licence d'Ingénierie — Tronc Commun" },
      org: { ar: "جامعة انواكشوط العصرية", en: "University of Nouakchott", fr: "Université de Nouakchott" },
      year: { ar: "2024 — الآن", en: "2024 — Present", fr: "2024 — Présent" },
      desc: { ar: "الجذع المشترك لعلوم الهندسة والتكنولوجيا، تخصص تقنيات التنقيب الجيولوجي والتعديني.", en: "Common core in engineering & technology, specializing in geological & mining exploration.", fr: "Tronc commun en sciences de l'ingénieur, spécialisation en exploration géologique et minière." }
    },
    {
      title: { ar: "شهادة البكالوريا", en: "Baccalaureate", fr: "Baccalauréat" },
      org: { ar: "الثانوية العامة", en: "High School", fr: "Lycée" },
      year: { ar: "2024", en: "2024", fr: "2024" },
      desc: { ar: "شهادة الثانوية العامة — شعبة العلوم.", en: "High school diploma — Science track.", fr: "Baccalauréat — série scientifique." }
    }
  ],

  // ─── التجارب والإنجازات ───
  experience: [
    {
      title: { ar: "أضف تجربتك الأولى هنا", en: "Add your first experience here", fr: "Ajoutez votre première expérience ici" },
      org: { ar: "اسم الجهة", en: "Organization name", fr: "Nom de l'organisation" },
      year: { ar: "2025", en: "2025", fr: "2025" },
      desc: { ar: "اكتب وصفاً موجزاً لتجربتك أو إنجازك...", en: "Write a short description of your experience...", fr: "Écrivez une brève description de votre expérience..." }
    }
  ],

  // ─── الحياة الشخصية ───
  personal: {
    hobbies: {
      ar: ["ألعاب الفيديو", "السفر", "كرة القدم", "الموسيقى", "الاسترخاء"],
      en: ["Video Games", "Travel", "Football", "Music", "Relaxation"],
      fr: ["Jeux Vidéo", "Voyage", "Football", "Musique", "Détente"]
    },
    health: {
      ar: "بصحة جيدة ولله الحمد — أهتم بالرياضة والتغذية المتوازنة.",
      en: "In good health — I care about sports and balanced nutrition.",
      fr: "En bonne santé — je pratique le sport et une alimentation équilibrée."
    },
    social: {
      ar: "أحب العلاقات البسيطة والإيجابية، وأنا منفتح على صداقات جديدة.",
      en: "I enjoy simple, positive relationships and I'm open to new friendships.",
      fr: "J'apprécie les relations simples et positives, je suis ouvert aux nouvelles amitiés."
    }
  },

  // ─── النصائح والحكم ───
  advice: [
    { ar: "اجعل هدفك واضحاً، وستجد الطريق أقصر مما تظن.", en: "Make your goal clear, and the path will be shorter than you think.", fr: "Clarifiez votre objectif, le chemin sera plus court que vous ne pensez." },
    { ar: "التعلم المستمر هو أقصر طريق للنجاح.", en: "Continuous learning is the shortest path to success.", fr: "L'apprentissage continu est le chemin le plus court vers le succès." },
    { ar: "لا تنتظر الفرصة — اصنعها بنفسك.", en: "Don't wait for opportunity — create it.", fr: "N'attendez pas l'opportunité — créez-la." },
    { ar: "الصحة تاج لا يراه إلا المرضى — حافظ عليها.", en: "Health is a crown only the sick can see — protect it.", fr: "La santé est une couronne que seuls les malades voient — protégez-la." }
  ],

  // ─── المعرض ───
  gallery: {
    categories: [
      { id: "all", label: { ar: "الكل", en: "All", fr: "Tout" } },
      { id: "travel", label: { ar: "سفر", en: "Travel", fr: "Voyage" } },
      { id: "sport", label: { ar: "رياضة", en: "Sport", fr: "Sport" } },
      { id: "study", label: { ar: "دراسة", en: "Study", fr: "Études" } },
      { id: "personal", label: { ar: "شخصي", en: "Personal", fr: "Personnel" } }
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800", category: "travel", caption: { ar: "ذكريات السفر", en: "Travel memories", fr: "Souvenirs de voyage" } },
      { src: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800", category: "sport", caption: { ar: "كرة القدم", en: "Football", fr: "Football" } },
      { src: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800", category: "study", caption: { ar: "وقت الدراسة", en: "Study time", fr: "Temps d'étude" } },
      { src: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800", category: "personal", caption: { ar: "لحظة هدوء", en: "Quiet moment", fr: "Moment calme" } }
    ]
  },

  // ─── روابط التواصل ───
  contact: [
    { icon: "✉️", label: { ar: "البريد", en: "Email", fr: "Email" }, url: "mailto:your@email.com", text: "your@email.com" },
    { icon: "📱", label: { ar: "واتساب", en: "WhatsApp", fr: "WhatsApp" }, url: "https://wa.me/222XXXXXXXX", text: "+222 XX XX XX XX" },
    { icon: "💼", label: { ar: "لينكدإن", en: "LinkedIn", fr: "LinkedIn" }, url: "https://linkedin.com/in/yourprofile", text: "in/yourprofile" },
    { icon: "📸", label: { ar: "إنستغرام", en: "Instagram", fr: "Instagram" }, url: "https://instagram.com/yourhandle", text: "@yourhandle" },
    { icon: "📘", label: { ar: "فيسبوك", en: "Facebook", fr: "Facebook" }, url: "https://facebook.com/yourprofile", text: "Facebook" },
    { icon: "💻", label: { ar: "غيت هاب", en: "GitHub", fr: "GitHub" }, url: "https://github.com/yourusername", text: "GitHub" }
  ]
};
