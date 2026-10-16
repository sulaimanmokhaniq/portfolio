export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

type Localized = Record<Locale, string>;

export const profile = {
  name: { en: "Sulaiman Mokhaniq", ar: "سليمان مخانق" } satisfies Localized,
  firstName: { en: "Sulaiman", ar: "سليمان" } satisfies Localized,
  role: { en: "Product Engineer", ar: "مهندس منتجات" } satisfies Localized,
  city: { en: "Riyadh", ar: "الرياض" } satisfies Localized,
  email: "sulaimanmokhaniq@gmail.com",
  linkedin: "https://linkedin.com/in/sulaiman-mokhaniq",
  github: "https://github.com/sulaimanmokhaniq",
  cv: "/Sulaiman_Mokhaniq_CV.pdf",
  stack: ["Flutter", "Dart", "Next.js", "TypeScript", "Supabase", "Firebase", "Figma"],
};

export const ui = {
  en: {
    nav: { work: "Work", about: "About", contact: "Contact" },
    switchLang: "عربي",
    switchLangLabel: "اقرأ الموقع بالعربية",
    themeLabel: "Toggle dark mode",
    tagline: "Product Engineer · Riyadh",
    heroTitle: ["Hi, I’m Sulaiman.", "I ship apps people love to open."],
    heroBody:
      "I turn Figma designs into production features with Flutter and Next.js, for apps with 100K+ users and hackathon-winning tools alike.",
    seeProjects: "See projects",
    downloadCv: "Download CV",
    usersStat: "Users on an app I built auth for",
    stackLabel: "My stack",
    winLabel: "Hackathon win",
    winValue: ["1st place", "DAICOthon 2026"],
    projectsTitle: "Projects",
    caseStudy: "Read the case study",
    workedTitle: "Where I’ve worked",
    communityLabel: "Community",
    communityBody:
      "hackathon participants led across 3+ events, with 130K+ SAR in prizes. I also headed the executive committee of BIG O’s national programming contest (300+ contestants).",
    contactTitle: ["Let’s make", "something."],
    footer: "Built with Next.js, by me.",
    back: "All projects",
    overview: "Overview",
    highlights: "What I built",
    stack: "Stack",
    period: "When",
    nextProject: "Next project",
    photoAlt: "Portrait of Sulaiman",
    role: "My role",
    visit: "Visit the live site",
    code: "View the code",
    screens: "Screens",
  },
  ar: {
    nav: { work: "الأعمال", about: "عنّي", contact: "تواصل" },
    switchLang: "English",
    switchLangLabel: "Read the site in English",
    themeLabel: "تبديل الوضع الليلي",
    tagline: "مهندس منتجات · الرياض",
    heroTitle: ["أهلاً، أنا سليمان.", "أبني تطبيقات يحب الناس فتحها."],
    heroBody:
      "أحوّل تصاميم Figma إلى مزايا جاهزة للإنتاج باستخدام Flutter و Next.js، من تطبيقات يستخدمها أكثر من ١٠٠ ألف مستخدم إلى أدوات فازت في الهاكاثونات.",
    seeProjects: "شاهد المشاريع",
    downloadCv: "حمّل السيرة الذاتية",
    usersStat: "مستخدم في تطبيق بنيت نظام دخوله",
    stackLabel: "أدواتي",
    winLabel: "فوز في هاكاثون",
    winValue: ["المركز الأول", "هاكاثون DAICOthon ٢٠٢٦"],
    projectsTitle: "المشاريع",
    caseStudy: "اقرأ دراسة الحالة",
    workedTitle: "أين عملت",
    communityLabel: "المجتمع",
    communityBody:
      "مشارك قدتُ تنظيمهم في أكثر من ٣ هاكاثونات بجوائز تجاوزت ١٣٠ ألف ريال. وترأست اللجنة التنفيذية لمسابقة BIG O’s الوطنية للبرمجة (أكثر من ٣٠٠ متسابق).",
    contactTitle: ["لنصنع", "شيئاً معاً."],
    footer: "صُمّم وبُني بواسطتي باستخدام Next.js.",
    back: "كل المشاريع",
    overview: "نظرة عامة",
    highlights: "ما بنيته",
    stack: "التقنيات",
    period: "الفترة",
    nextProject: "المشروع التالي",
    photoAlt: "صورة سليمان",
    role: "دوري",
    visit: "زر الموقع",
    code: "شاهد الكود",
    screens: "لقطات",
  },
} satisfies Record<Locale, unknown>;

export type Project = {
  slug: string;
  name: Localized;
  arabicName?: string;
  color: string;
  shade: string;
  badge?: Localized;
  kind: Localized;
  period: Localized;
  summary: Localized;
  overview: Localized;
  highlights: Record<Locale, string[]>;
  stack: string[];
  /** Full-width card on the homepage. */
  wide?: boolean;
  role?: Localized;
  link?: string;
  /** What the link points to; defaults to a live site. */
  linkKind?: "site" | "code";
  images?: { src: string; alt: Localized }[];
};

export const projects: Project[] = [
  {
    slug: "wamdah",
    name: { en: "Wamdah", ar: "ومضة" },
    arabicName: "ومضة",
    color: "#FFD43B",
    shade: "#F3C61F",
    badge: { en: "1st place · DAICOthon", ar: "المركز الأول · DAICOthon" },
    kind: { en: "Web app", ar: "تطبيق ويب" },
    period: { en: "Jul 2026 – present", ar: "يوليو ٢٠٢٦ – الآن" },
    summary: {
      en: "Share files with a whole classroom using just a PIN or a QR code. No accounts, under 30 seconds.",
      ar: "شارك الملفات مع الفصل كاملاً برمز من ٦ أرقام أو رمز QR. بلا حسابات، وفي أقل من ٣٠ ثانية.",
    },
    overview: {
      en: "Wamdah is a classroom file-sharing utility built for speed: teachers and students exchange files without creating accounts. It won 1st place at the DAICOthon Hackathon at King Saud University.",
      ar: "ومضة أداة لمشاركة الملفات داخل الفصل صُممت للسرعة: يتبادل المعلمون والطلاب الملفات دون إنشاء حسابات. فازت بالمركز الأول في هاكاثون DAICOthon بجامعة الملك سعود.",
    },
    highlights: {
      en: [
        "Zero-login authentication with 6-digit PINs and QR codes across 3 sharing modes, with transfers in under 30 seconds.",
        "A direct-to-storage upload pipeline with Supabase Realtime that bypasses Vercel’s serverless payload limits.",
        "Full Arabic/English internationalization with RTL support, theming, and auto-expiring file security.",
      ],
      ar: [
        "مصادقة بلا تسجيل دخول عبر رموز من ٦ أرقام ورموز QR في ٣ أوضاع مشاركة، مع نقل للملفات في أقل من ٣٠ ثانية.",
        "مسار رفع مباشر إلى التخزين باستخدام Supabase Realtime لتجاوز حدود حجم الطلبات في Vercel.",
        "دعم كامل للعربية والإنجليزية مع اتجاه RTL، وتعدد السمات، وحماية للملفات تنتهي صلاحيتها تلقائياً.",
      ],
    },
    stack: ["Next.js", "TypeScript", "Supabase", "Realtime", "Tailwind CSS"],
    wide: true,
  },
  {
    slug: "qalam",
    name: { en: "Qalam", ar: "قلم" },
    arabicName: "قلم",
    color: "#FF8A5B",
    shade: "#F57A49",
    kind: { en: "Mobile + ML", ar: "تطبيق جوال + تعلم آلي" },
    period: { en: "Aug – Dec 2025", ar: "أغسطس – ديسمبر ٢٠٢٥" },
    summary: {
      en: "An Arabic calligraphy platform with a vision model that recognises 10+ styles.",
      ar: "منصة للخط العربي مع نموذج رؤية حاسوبية يتعرّف على أكثر من ١٠ أنماط.",
    },
    overview: {
      en: "Qalam is a digital platform for Arabic calligraphy. Our six-person team delivered it over a four-month Agile sprint, combining a Flutter app with a custom computer-vision model.",
      ar: "قلم منصة رقمية للخط العربي. أنجزها فريقنا المكوّن من ستة أعضاء خلال أربعة أشهر بمنهجية Agile، بدمج تطبيق Flutter مع نموذج رؤية حاسوبية مخصص.",
    },
    highlights: {
      en: [
        "Built and trained a custom computer-vision model that recognises 10+ distinct Arabic calligraphy styles.",
        "Delivered full-stack features in Flutter and Firebase across a 4-month Agile sprint in a 6-member team.",
      ],
      ar: [
        "بناء وتدريب نموذج رؤية حاسوبية يتعرّف على أكثر من ١٠ أنماط مختلفة من الخط العربي.",
        "تطوير مزايا متكاملة بـ Flutter و Firebase خلال ٤ أشهر ضمن فريق من ٦ أعضاء.",
      ],
    },
    stack: ["Flutter", "Firebase", "Computer vision", "Agile"],
  },
  {
    slug: "smartschedule",
    name: { en: "SmartSchedule", ar: "SmartSchedule" },
    color: "#B8C4FF",
    shade: "#A5B3FA",
    kind: { en: "Web app", ar: "تطبيق ويب" },
    period: { en: "Aug – Nov 2025", ar: "أغسطس – نوفمبر ٢٠٢٥" },
    summary: {
      en: "University timetables that fix their own conflicts, with live co-editing for 30+ users.",
      ar: "جداول جامعية تحل تعارضاتها بنفسها، مع تحرير جماعي مباشر لأكثر من ٣٠ مستخدماً.",
    },
    overview: {
      en: "SmartSchedule is an intelligent academic scheduling platform. It resolves timetable conflicts automatically and lets several people edit the same schedule at once.",
      ar: "SmartSchedule منصة ذكية لجدولة المقررات الأكاديمية. تحل تعارضات الجداول تلقائياً وتتيح لعدة أشخاص تحرير الجدول نفسه في الوقت ذاته.",
    },
    highlights: {
      en: [
        "An automated conflict-resolution scheduling algorithm supporting 5 distinct user roles.",
        "Real-time collaborative editing with Yjs (CRDT), with zero data loss across 30+ concurrent sessions.",
      ],
      ar: [
        "خوارزمية جدولة تحل التعارضات تلقائياً وتدعم ٥ أدوار مختلفة للمستخدمين.",
        "تحرير جماعي لحظي باستخدام Yjs (CRDT) دون أي فقدان للبيانات عبر أكثر من ٣٠ جلسة متزامنة.",
      ],
    },
    stack: ["Next.js", "TypeScript", "Supabase", "Yjs", "Tailwind CSS"],
  },
  {
    slug: "tahabeer",
    name: { en: "TAHABEER", ar: "تحابير" },
    arabicName: "تحابير",
    color: "#9BE3C1",
    shade: "#85D6AF",
    kind: { en: "Mobile app", ar: "تطبيق جوال" },
    period: { en: "2023 – present", ar: "٢٠٢٣ – الآن" },
    summary: {
      en: "A Quran recitation app, 99% crash-free for 18+ months.",
      ar: "تطبيق لتلاوة القرآن الكريم، خالٍ من الأعطال بنسبة ٩٩٪ لأكثر من ١٨ شهراً.",
    },
    overview: {
      en: "TAHABEER is a Quran recitation application built with strict OOP and Clean Architecture principles, which has kept it stable for well over a year.",
      ar: "تحابير تطبيق لتلاوة القرآن الكريم بُني وفق مبادئ البرمجة الكائنية والبنية النظيفة، مما حافظ على استقراره لأكثر من عام.",
    },
    highlights: {
      en: [
        "Secure authentication, audio playback and file handling, architected with Clean Architecture.",
        "A 99% crash-free session rate sustained over 18+ months.",
      ],
      ar: [
        "مصادقة آمنة وتشغيل صوتي وإدارة للملفات وفق البنية النظيفة.",
        "نسبة جلسات خالية من الأعطال تبلغ ٩٩٪ لأكثر من ١٨ شهراً.",
      ],
    },
    stack: ["Flutter", "Dart", "OOP", "Clean Architecture"],
  },
  {
    slug: "cloudtrim",
    name: { en: "CloudTrim", ar: "CloudTrim" },
    color: "#FFB8C9",
    shade: "#F5A3B7",
    badge: { en: "VentureX 2026", ar: "VentureX ٢٠٢٦" },
    kind: { en: "Web app · AI FinOps", ar: "تطبيق ويب · ذكاء اصطناعي" },
    period: { en: "Oct 2026", ar: "أكتوبر ٢٠٢٦" },
    summary: {
      en: "An AI agent that finds wasted cloud spend for Saudi SMEs, and changes nothing until a human approves.",
      ar: "وكيل ذكاء اصطناعي يكتشف الهدر في تكاليف السحابة للمنشآت الصغيرة والمتوسطة في السعودية، ولا يغيّر شيئاً قبل موافقة إنسان.",
    },
    overview: {
      en: "CloudTrim is an AI FinOps product our team built for VentureX 2026. It scans a company’s cloud with read-only access, explains each saving in plain language, and only acts after an engineer approves with one click, on the web or WhatsApp. It’s designed for Saudi SMEs with 50 to 250 staff. The mentors praised the idea.",
      ar: "CloudTrim منتج لإدارة تكاليف السحابة بالذكاء الاصطناعي بنيناه كفريق لمسابقة VentureX 2026. يفحص سحابة الشركة بصلاحية قراءة فقط، ويشرح كل فرصة توفير بلغة بسيطة، ولا ينفّذ أي تغيير إلا بعد موافقة المهندس بنقرة واحدة عبر الويب أو واتساب. صُمّم للمنشآت السعودية التي يعمل بها بين ٥٠ و٢٥٠ موظفاً، وأشاد المرشدون بفكرته.",
    },
    role: {
      en: "Shaped and refined the product idea, then built the MVP and designed the UI.",
      ar: "طوّرت فكرة المنتج وصقلتها، ثم بنيت النسخة الأولى (MVP) وصمّمت الواجهة.",
    },
    highlights: {
      en: [
        "A landing page and an interactive MVP demo in one Next.js app, fully in English and Arabic with RTL.",
        "A safety-first approval flow: read-only scanning, a single-action permission that expires after 15 minutes, stop-instead-of-delete with one-click rollback, and an audit log.",
        "AI explanations for every finding through the Claude API, with cached fallbacks so the demo never breaks.",
        "A live demo on seeded data for a fictional company, so it never depends on a real cloud account.",
      ],
      ar: [
        "صفحة تعريفية وعرض تفاعلي للمنتج في تطبيق Next.js واحد، بالعربية والإنجليزية مع دعم كامل لاتجاه RTL.",
        "مسار موافقة يضع الأمان أولاً: فحص بصلاحية قراءة فقط، وصلاحية لإجراء واحد تنتهي خلال ١٥ دقيقة، وإيقاف بدل الحذف مع تراجع بنقرة، وسجل تدقيق.",
        "شرح كل توصية بالذكاء الاصطناعي عبر Claude API، مع نص احتياطي حتى لا يتعطل العرض أبداً.",
        "عرض حي يعمل على بيانات تجريبية لشركة افتراضية، فلا يعتمد على حساب سحابي حقيقي.",
      ],
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Claude API", "Three.js", "Vercel"],
    wide: true,
    link: "https://cloudtrim-sa.vercel.app",
    images: [
      { src: "/work/cloudtrim/home.png", alt: { en: "CloudTrim landing page", ar: "الصفحة التعريفية لـ CloudTrim" } },
      { src: "/work/cloudtrim/demo.png", alt: { en: "CloudTrim demo dashboard", ar: "لوحة العرض التجريبي لـ CloudTrim" } },
    ],
  },
  {
    slug: "keyboard-fixer",
    name: { en: "Keyboard Fixer", ar: "Keyboard Fixer" },
    color: "#D7C4FF",
    shade: "#C7B0FA",
    kind: { en: "Chrome extension", ar: "إضافة Chrome" },
    period: { en: "Jul 2026", ar: "يوليو ٢٠٢٦" },
    summary: {
      en: "Typed a whole sentence in the wrong keyboard layout? Select it, press Ctrl+Shift+E, and it’s fixed.",
      ar: "كتبت جملة كاملة واللغة غلط؟ حدّدها واضغط Ctrl+Shift+E وتنصلح فوراً.",
    },
    overview: {
      en: "Every bilingual typist knows “hgsghl ugd;l” (السلام عليكم typed on the English layout). Keyboard Fixer is a Chrome extension that converts mistyped text between the Arabic and English keyboard layouts in place, on any website.",
      ar: "كل من يكتب بلغتين يعرف “hgsghl ugd;l” (أي السلام عليكم مكتوبة بالتخطيط الإنجليزي). Keyboard Fixer إضافة لمتصفح Chrome تحوّل النص المكتوب بالتخطيط الخطأ بين العربية والإنجليزية في مكانه، وفي أي موقع.",
    },
    role: { en: "Solo project: idea, design and code.", ar: "مشروع فردي: الفكرة والتصميم والبرمجة." },
    highlights: {
      en: [
        "A full Arabic ↔ English key map, including shifted keys, diacritics and the لا / لأ / لإ / لآ ligatures that share a single key.",
        "Automatic direction detection that counts Arabic and English letters to decide which way to convert.",
        "Works in text fields and on selected page text, from the right-click menu or the Ctrl+Shift+E shortcut, without breaking the page’s own input handling.",
        "Built on Manifest V3 with minimal permissions.",
      ],
      ar: [
        "خريطة كاملة للمفاتيح بين العربية والإنجليزية، تشمل مفاتيح Shift والتشكيل وحروف لا / لأ / لإ / لآ.",
        "اكتشاف تلقائي لاتجاه التحويل بعدّ الحروف العربية والإنجليزية.",
        "تعمل في حقول الكتابة وعلى النص المحدد في الصفحة، من قائمة الزر الأيمن أو باختصار Ctrl+Shift+E، دون التأثير على عمل الصفحة.",
        "مبنية على Manifest V3 بأقل الصلاحيات الممكنة.",
      ],
    },
    stack: ["JavaScript", "Chrome Extensions", "Manifest V3"],
    wide: true,
    link: "https://github.com/sulaimanmokhaniq/keyboard-fixer",
    linkKind: "code",
    images: [
      {
        src: "/work/keyboard-fixer/demo.png",
        alt: { en: "Mistyped text converted to Arabic with Ctrl+Shift+E", ar: "تحويل نص مكتوب بالتخطيط الخطأ إلى العربية باختصار Ctrl+Shift+E" },
      },
    ],
  },
  {
    slug: "handcraft",
    name: { en: "Handcraft", ar: "نسيج الأصالة" },
    arabicName: "نسيج الأصالة",
    color: "#F2D3A9",
    shade: "#E2B97F",
    kind: { en: "Website · training project", ar: "موقع · مشروع تدريبي" },
    period: { en: "Jan 2026", ar: "يناير ٢٠٢٦" },
    summary: {
      en: "An Arabic-first storefront for handmade wool textiles, with a warm heritage look.",
      ar: "متجر إلكتروني عربي للمنسوجات الصوفية اليدوية، بطابع تراثي دافئ.",
    },
    overview: {
      en: "نسيج الأصالة (“Authentic Weave”) is a storefront website for handmade wool rugs, blankets and textiles, built as a training project. It’s Arabic-first and right-to-left, with earthy, gold and bronze colours and traditional patterns that match the products.",
      ar: "نسيج الأصالة موقع متجر للسجاد والبطانيات والمنسوجات الصوفية المصنوعة يدوياً، بنيته مشروعاً تدريبياً. صُمّم بالعربية أولاً وباتجاه من اليمين لليسار، بألوان ترابية وذهبية وبرونزية وزخارف تراثية تناسب المنتجات.",
    },
    role: { en: "Solo project: design and code.", ar: "مشروع فردي: التصميم والبرمجة." },
    highlights: {
      en: [
        "A fully responsive RTL layout with a hero, product gallery, about section and contact form.",
        "An interactive product gallery with category filters, product badges (new, best seller), a details modal and an order action.",
        "A heritage visual identity: a warm palette, patterned backgrounds and three Arabic typefaces (Amiri for headings, Cairo and Tajawal for text).",
        "Smooth scroll effects and animations in plain HTML, CSS and JavaScript, with no framework.",
      ],
      ar: [
        "واجهة متجاوبة بالكامل باتجاه RTL، تضم قسماً رئيسياً ومعرض منتجات وقسم \"من نحن\" ونموذج تواصل.",
        "معرض منتجات تفاعلي مع فلترة حسب الفئة، وشارات للمنتجات (جديد، الأكثر مبيعاً)، ونافذة للتفاصيل وزر للطلب.",
        "هوية بصرية تراثية: ألوان دافئة وخلفيات مزخرفة وثلاثة خطوط عربية (Amiri للعناوين، وCairo وTajawal للنصوص).",
        "حركات وتأثيرات سلسة بـ HTML وCSS وJavaScript فقط دون أي إطار عمل.",
      ],
    },
    stack: ["HTML", "CSS", "JavaScript"],
    wide: true,
    link: "https://github.com/sulaimanmokhaniq/handcraft",
    linkKind: "code",
    images: [
      {
        src: "/work/handcraft/home.png",
        alt: { en: "Handcraft storefront home page", ar: "الصفحة الرئيسية لمتجر نسيج الأصالة" },
      },
      {
        src: "/work/handcraft/products.png",
        alt: { en: "Product gallery with category filters", ar: "معرض المنتجات مع فلترة حسب الفئة" },
      },
    ],
  },
];

export const experience = [
  {
    org: { en: "Paseetah", ar: "بسيطة" },
    role: { en: "Flutter Developer", ar: "مطوّر Flutter" },
    period: { en: "2026", ar: "٢٠٢٦" },
  },
  {
    org: { en: "Nugttah", ar: "نقطة" },
    role: { en: "Frontend Mobile Developer", ar: "مطوّر واجهات تطبيقات الجوال" },
    period: { en: "2025", ar: "٢٠٢٥" },
  },
  {
    org: { en: "King Saud University", ar: "جامعة الملك سعود" },
    role: { en: "B.Sc. Software Engineering", ar: "بكالوريوس هندسة البرمجيات" },
    period: { en: "2022 – 2026", ar: "٢٠٢٢ – ٢٠٢٦" },
  },
];
