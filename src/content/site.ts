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
  featured?: boolean;
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
    featured: true,
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
