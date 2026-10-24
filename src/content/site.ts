export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];

export const hasLocale = (value: string): value is Locale => (locales as readonly string[]).includes(value);

type Localized = Record<Locale, string>;

export const profile = {
  name: { en: "Sulaiman Mokhaniq", ar: "سليمان مخانق" } satisfies Localized,
  firstName: { en: "Sulaiman", ar: "سليمان" } satisfies Localized,
  role: { en: "Product Engineer", ar: "مهندس منتجات" } satisfies Localized,
  city: { en: "Riyadh", ar: "الرياض" } satisfies Localized,
  email: "sulaimanmokhaniq@gmail.com",
  phone: "+966538432597",
  phoneLabel: "+966 53 843 2597",
  linkedin: "https://linkedin.com/in/sulaiman-mokhaniq",
  github: "https://github.com/sulaimanmokhaniq",
  cv: "/Sulaiman_Mokhaniq_CV.pdf",
  stack: ["Flutter", "Dart", "Next.js", "TypeScript", "Supabase", "Firebase", "Figma"],
};

export const ui = {
  en: {
    nav: { intro: "Intro", work: "Projects", clubs: "Clubs", about: "About", contact: "Contact" },
    switchLang: "عربي",
    switchLangLabel: "اقرأ الموقع بالعربية",
    themeLabel: "Toggle dark mode",
    menuLabel: "Menu",
    tagline: "Based in Riyadh",
    heroName: "Sulaiman Mokhaniq",
    heroRoles: ["Product Engineer", "Software Engineer", "Mobile App Developer"],
    heroBody:
      "Software Engineering graduate from King Saud University. I turn ideas into real products that people use.",
    seeProjects: "See projects",
    downloadCv: "Download CV",
    printingCv: "Printing my CV…",
    usersStat: "Users on an app I built auth for",
    stackLabel: "My stack",
    winsLabel: "Hackathon wins",
    openCase: "Open",
    projectsTitle: "Projects",
    caseStudy: "Read the case study",
    clubsTitle: "Clubs & volunteering",
    processTitle: "How I work",
    processSub: "Four steps, each from a real project.",
    myPart: "My part in",
    process: [
      {
        title: "Idea",
        text: "I sharpen the problem before writing any code.",
        slug: "cloudtrim",
        mine: "I shaped the idea, then built the first version.",
      },
      {
        title: "Design",
        text: "Screens people understand at first look.",
        slug: "oratory",
        mine: "I built the main app screens.",
      },
      {
        title: "Build",
        text: "Flutter and Next.js, built to last.",
        slug: "qalam",
        mine: "I was a Flutter developer on the app.",
      },
      {
        title: "Ship",
        text: "Live and in real hands, not just a demo.",
        slug: "smartschedule",
        mine: "I built parts of the UI and tested it before launch.",
      },
    ],
    clubsNow: "Now",
    workedTitle: "Where I’ve worked",
    communityLabel: "Community",
    communityBody:
      "hackathon participants led across 3+ events, with 130K+ SAR in prizes. I also headed the executive committee of BIG O’s national programming contest (300+ contestants).",
    notFoundTitle: "This page doesn’t exist.",
    notFoundBody: "The link may be old or mistyped.",
    backHome: "Back home",
    contactKicker: "Got an idea?",
    madeIn: "Made in Riyadh",
    contactTitle: ["Let’s build", "something."],
    footer: "Built with Next.js, by me.",
    back: "All projects",
    overview: "Overview",
    highlights: "What I built",
    stack: "Stack",
    period: "When",
    nextProject: "Next project",
    heroCards: [
      "Your idea, made real.",
      "I design it. I build it. I ship it.",
      "From Figma to production, pixel by pixel.",
      "Apps that feel right in Arabic and English.",
      "Fast, stable and built to last.",
    ],
    heroCardsLabel: "What I do",
    nowLabel: "Now",
    nowText: "Polishing this portfolio, one detail at a time.",
    clockLabel: "Riyadh time",
    clockAwake: "I usually reply the same day.",
    clockAsleep: "I'm probably asleep. I'll reply in the morning.",
    nextCard: "Show the next card",
    role: "My role",
    visit: "Visit the live site",
    code: "View the code",
    screens: "Screens",
    tryLive: "Try it live",
    openSite: "Open in a new tab",
    close: "Close",
    appScreens: "App screens",
    prevScreen: "Previous screen",
    nextScreen: "Next screen",
  },
  ar: {
    nav: { intro: "نبذة", work: "المشاريع", clubs: "الأندية", about: "عنّي", contact: "تواصل" },
    switchLang: "English",
    switchLangLabel: "Read the site in English",
    themeLabel: "تبديل الوضع الليلي",
    menuLabel: "القائمة",
    tagline: "مقيم في الرياض",
    heroName: "سليمان مخانق",
    heroRoles: ["مهندس منتجات", "مهندس برمجيات", "مطوّر تطبيقات جوال"],
    heroBody: "خريج هندسة برمجيات من جامعة الملك سعود، أحوّل الأفكار إلى منتجات حقيقية يستخدمها الناس.",
    seeProjects: "شاهد المشاريع",
    downloadCv: "حمّل السيرة الذاتية",
    printingCv: "جارٍ طباعة سيرتي…",
    usersStat: "مستخدم في تطبيق بنيت نظام دخوله",
    stackLabel: "أدواتي",
    winsLabel: "الفوز في الهاكاثونات",
    openCase: "افتح",
    projectsTitle: "المشاريع",
    caseStudy: "اقرأ دراسة الحالة",
    clubsTitle: "الأندية والتطوع",
    processTitle: "كيف أعمل",
    processSub: "أربع خطوات، لكل منها مثال من مشروع حقيقي.",
    myPart: "دوري في",
    process: [
      {
        title: "الفكرة",
        text: "أوضّح المشكلة قبل أن أكتب أي سطر برمجي.",
        slug: "cloudtrim",
        mine: "طوّرت الفكرة ثم بنيت النسخة الأولى.",
      },
      {
        title: "التصميم",
        text: "شاشات يفهمها الناس من أول نظرة.",
        slug: "oratory",
        mine: "بنيت شاشات التطبيق الرئيسية.",
      },
      { title: "البناء", text: "Flutter وNext.js، مبنية لتدوم.", slug: "qalam", mine: "كنت مطوّر Flutter في التطبيق." },
      {
        title: "الإطلاق",
        text: "منشور ويستخدمه الناس فعلاً، وليس مجرد عرض.",
        slug: "smartschedule",
        mine: "بنيت أجزاء من الواجهة واختبرته قبل الإطلاق.",
      },
    ],
    clubsNow: "حالياً",
    workedTitle: "أين عملت",
    communityLabel: "المجتمع",
    communityBody:
      "مشارك قدتُ تنظيمهم في أكثر من 3 هاكاثونات بجوائز تجاوزت 130 ألف ريال. وترأست اللجنة التنفيذية لمسابقة BIG O’s الوطنية للبرمجة (أكثر من 300 متسابق).",
    notFoundTitle: "هذه الصفحة غير موجودة.",
    notFoundBody: "ربما الرابط قديم أو فيه خطأ.",
    backHome: "العودة للرئيسية",
    contactKicker: "عندك فكرة؟",
    madeIn: "صُنع في الرياض",
    contactTitle: ["لنبنِ", "شيئاً معاً."],
    footer: "صُمّم وبُني بواسطتي باستخدام Next.js.",
    back: "كل المشاريع",
    overview: "نظرة عامة",
    highlights: "ما بنيته",
    stack: "التقنيات",
    period: "الفترة",
    nextProject: "المشروع التالي",
    heroCards: [
      "فكرتك، أحوّلها إلى واقع.",
      "أصمّم. أبني. أُطلق.",
      "من Figma إلى الإنتاج، بكل تفاصيله.",
      "تطبيقات مريحة بالعربية والإنجليزية.",
      "سريعة، مستقرة، ومبنية لتدوم.",
    ],
    heroCardsLabel: "ما أقدّمه",
    nowLabel: "الآن",
    nowText: "أصقل هذا الموقع، تفصيلة بعد تفصيلة.",
    clockLabel: "الوقت في الرياض",
    clockAwake: "عادةً أرد في نفس اليوم.",
    clockAsleep: "غالبًا نائم الآن، وأرد عليك صباحًا.",
    nextCard: "اعرض البطاقة التالية",
    role: "دوري",
    visit: "زُر الموقع",
    code: "شاهد الكود",
    screens: "لقطات",
    tryLive: "جرّبه مباشرة",
    openSite: "افتحه في تبويب جديد",
    close: "إغلاق",
    appScreens: "شاشات التطبيق",
    prevScreen: "الشاشة السابقة",
    nextScreen: "الشاشة التالية",
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
  /** Phone screenshots (9:19.5) shown in a tappable phone frame instead of the cover. */
  phone?: { src: string; alt: Localized }[];
  /** Set to false when the live site refuses to load inside a frame. */
  embed?: boolean;
  /** Three quick facts shown in a strip on the homepage card. */
  results?: { value: Localized; label: Localized }[];
  /** A round award sticker on the homepage card, shown instead of the badge. */
  sticker?: { big: Localized; small: Localized };
};

export const projects: Project[] = [
  {
    slug: "tahabeer",
    name: { en: "TAHABEER", ar: "تحابير" },
    arabicName: "تحابير",
    color: "#9BE3C1",
    shade: "#85D6AF",
    kind: { en: "Mobile app + website", ar: "تطبيق جوال + موقع" },
    period: { en: "2023 – present", ar: "2023 – الآن" },
    summary: {
      en: "A Quran recitation app, 99% crash-free for 18+ months.",
      ar: "تطبيق لتلاوة القرآن الكريم، خالٍ من الأعطال بنسبة 99% لأكثر من 18 شهراً.",
    },
    overview: {
      en: "TAHABEER brings the Quran into one calm, Arabic-first app: read the full Mushaf, listen to famous reciters, open the tafsir of any verse and find nearby mosques. It is built with strict OOP and Clean Architecture, which has kept it stable for well over a year, and it has its own landing website.",
      ar: "يجمع تحابير القرآن الكريم في تطبيق عربي هادئ واحد: قراءة المصحف كاملاً، والاستماع لأشهر القراء، وتفسير أي آية، والعثور على المساجد القريبة. بُني وفق مبادئ البرمجة الكائنية والبنية النظيفة مما حافظ على استقراره لأكثر من عام، وله موقع تعريفي خاص.",
    },
    highlights: {
      en: [
        "The full 604-page Mushaf with day and night reading modes, bookmarks and a page slider.",
        "Recitations from 8+ famous reciters, with offline downloads so you can listen without internet.",
        "Tafsir right next to each verse, including Al-Muyassar and Al-Jalalayn.",
        "A mosque finder: 148 mosques in Riyadh on a map, with their imams, filters and directions.",
        "Built with Clean Architecture, keeping a 99% crash-free session rate for 18+ months.",
      ],
      ar: [
        "المصحف كاملاً في 604 صفحات مع وضعين ليلي ونهاري وإشارات مرجعية وشريط للتنقل بين الصفحات.",
        "تلاوات لأكثر من 8 من أشهر القراء، مع التحميل للاستماع دون إنترنت.",
        "التفسير بجانب كل آية، ومنه الميسّر والجلالين.",
        "دليل للمساجد: 148 مسجداً في الرياض على الخريطة مع أئمتها وفلاتر للبحث والاتجاهات.",
        "مبني وفق البنية النظيفة، وحافظ على نسبة جلسات خالية من الأعطال تبلغ 99% لأكثر من 18 شهراً.",
      ],
    },
    stack: ["Flutter", "Dart", "Supabase", "Google Maps", "just_audio", "Clean Architecture"],
    results: [
      { value: { en: "99%", ar: "99%" }, label: { en: "crash-free sessions", ar: "جلسات بلا أعطال" } },
      {
        value: { en: "18+ months", ar: "18+" },
        label: { en: "of stable releases", ar: "شهراً من الإصدارات المستقرة" },
      },
      {
        value: { en: "148", ar: "148" },
        label: { en: "Riyadh mosques on the map", ar: "مسجداً في الرياض على الخريطة" },
      },
    ],
    wide: true,
    link: "https://tahabeer.vercel.app/",
    // The site sends X-Frame-Options: SAMEORIGIN.
    embed: false,
    phone: [
      {
        src: "/work/tahabeer/phone/home.jpg",
        alt: { en: "Home: search and pick a reciter", ar: "الرئيسية: ابحث عن قارئ واختره" },
      },
      {
        src: "/work/tahabeer/phone/quran.jpg",
        alt: { en: "Reading Surat Al-Baqarah in the Mushaf", ar: "قراءة سورة البقرة في المصحف" },
      },
      { src: "/work/tahabeer/phone/tafsir.jpg", alt: { en: "Tafsir of Al-Fatihah", ar: "تفسير سورة الفاتحة" } },
      {
        src: "/work/tahabeer/phone/mosques.jpg",
        alt: { en: "Mosque list with imams and filters", ar: "قائمة المساجد مع الأئمة والفلاتر" },
      },
      {
        src: "/work/tahabeer/phone/map.jpg",
        alt: { en: "Map of 148 mosques in Riyadh", ar: "خريطة 148 مسجداً في الرياض" },
      },
    ],
    images: [
      {
        src: "/work/tahabeer/app.png",
        alt: {
          en: "TAHABEER app: reciters, the Quran reader and tafsir",
          ar: "تطبيق تحابير: القراء وقارئ المصحف والتفسير",
        },
      },
      {
        src: "/work/tahabeer/mosques.png",
        alt: {
          en: "Mosque finder with a map of 148 mosques in Riyadh",
          ar: "دليل المساجد مع خريطة لـ 148 مسجداً في الرياض",
        },
      },
      { src: "/work/tahabeer/home.png", alt: { en: "TAHABEER website home page", ar: "الصفحة الرئيسية لموقع تحابير" } },
    ],
  },
  {
    slug: "wamdah",
    name: { en: "Wamdah", ar: "ومضة" },
    arabicName: "ومضة",
    color: "#FFD43B",
    shade: "#F3C61F",
    badge: { en: "1st place · DAICOthon", ar: "المركز الأول · DAICOthon" },
    kind: { en: "Web app", ar: "تطبيق ويب" },
    period: { en: "Jul 2026 – present", ar: "يوليو 2026 – الآن" },
    summary: {
      en: "Share files with a whole classroom using just a PIN or a QR code. No accounts, under 30 seconds.",
      ar: "شارك الملفات مع الفصل كاملاً برمز من 6 أرقام أو رمز QR. بلا حسابات، وفي أقل من 30 ثانية.",
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
        "مصادقة بلا تسجيل دخول عبر رموز من 6 أرقام ورموز QR في 3 أوضاع مشاركة، مع نقل للملفات في أقل من 30 ثانية.",
        "مسار رفع مباشر إلى التخزين باستخدام Supabase Realtime لتجاوز حدود حجم الطلبات في Vercel.",
        "دعم كامل للعربية والإنجليزية مع اتجاه RTL، وتعدد السمات، وحماية للملفات تنتهي صلاحيتها تلقائياً.",
      ],
    },
    stack: ["Next.js", "TypeScript", "Supabase", "Realtime", "Tailwind CSS"],
    results: [
      { value: { en: "1st", ar: "الأول" }, label: { en: "place at DAICOthon", ar: "في هاكاثون DAICOthon" } },
      { value: { en: "< 30s", ar: "30" }, label: { en: "to share a file", ar: "ثانية أو أقل لمشاركة ملف" } },
      { value: { en: "0", ar: "0" }, label: { en: "accounts needed", ar: "حسابات مطلوبة" } },
    ],
    sticker: { big: { en: "1st", ar: "الأول" }, small: { en: "DAICOthon", ar: "DAICOthon" } },
    wide: true,
    link: "https://wamdah-ksu.vercel.app/",
    images: [
      { src: "/work/wamdah/home.png", alt: { en: "Wamdah home page", ar: "الصفحة الرئيسية لومضة" } },
      {
        src: "/work/wamdah/send.png",
        alt: {
          en: "Send screen: enter the receiver’s 6-digit code",
          ar: "شاشة الإرسال: أدخل رمز المستقبل المكوّن من 6 أرقام",
        },
      },
      {
        src: "/work/wamdah/showcase.png",
        alt: { en: "App screens showcase on the landing page", ar: "عرض شاشات التطبيق في الصفحة الرئيسية" },
      },
    ],
  },
  {
    slug: "qalam",
    name: { en: "Qalam", ar: "قلم" },
    arabicName: "قلم",
    color: "#FF8A5B",
    shade: "#F57A49",
    kind: { en: "Mobile app + AI · team of 6", ar: "تطبيق جوال + ذكاء اصطناعي · فريق من 6" },
    period: { en: "Aug – Dec 2025", ar: "أغسطس – ديسمبر 2025" },
    summary: {
      en: "A home for Arabic calligraphy: share and discover artwork, and let Hebr AI name the style of any piece from a photo.",
      ar: "منصة للخط العربي: شارك الأعمال واكتشفها، ودع «حِبر AI» يتعرّف على نوع الخط من أي صورة.",
    },
    overview: {
      en: "Qalam bridges Arabic calligraphy and technology. Calligraphers share their work in high resolution, build a following and take custom commissions, while admirers discover art and connect with artists. Its AI tool, Hebr, recognises the calligraphy style in a photo and explains it. Our six-person team built it in four Agile sprints, from onboarding and community features to the AI scanner and commissions, and published a bilingual website for it.",
      ar: "قلم يربط الخط العربي بالتقنية. يشارك الخطاطون أعمالهم بدقة عالية، ويبنون جمهورهم ويستقبلون طلبات الأعمال المخصصة، بينما يكتشف المهتمون الأعمال ويتواصلون مع الفنانين. وأداة الذكاء الاصطناعي «حِبر» تتعرّف على نوع الخط من الصورة وتشرحه. بنى فريقنا المكوّن من ستة أعضاء التطبيق خلال أربع سبرنتات بمنهجية Agile، من التسجيل والمزايا الاجتماعية إلى ماسح الخط والطلبات، مع موقع تعريفي ثنائي اللغة.",
    },
    role: {
      en: "Flutter developer on the app. I also presented the technical setup and learning plan in Sprint 0, and added the calligraphy game to the website.",
      ar: "مطوّر Flutter في التطبيق. كما قدّمت الإعداد التقني وخطة التعلّم في السبرنت التمهيدي (Sprint 0)، وأضفت لعبة الخط العربي إلى الموقع.",
    },
    highlights: {
      en: [
        "Hebr AI: a custom computer-vision model that recognises 10+ Arabic calligraphy styles from a photo and explains each one.",
        "A social feed for calligraphy: upload artwork tagged by style, follow artists, like, comment and bookmark.",
        "Commission requests so artists can take custom orders directly.",
        "Built in Flutter and Firebase over four sprints from a 22-story backlog, plus a bilingual Arabic/English website with an interactive style game.",
      ],
      ar: [
        "«حِبر AI»: نموذج رؤية حاسوبية مخصص يتعرّف على أكثر من 10 أنواع من الخط العربي من الصورة ويشرح كل نوع.",
        "مجتمع للخط العربي: رفع الأعمال مصنّفة حسب نوع الخط، ومتابعة الفنانين، والإعجاب والتعليق والحفظ.",
        "طلبات الأعمال المخصصة ليستقبل الخطاطون الطلبات مباشرة.",
        "بُني بـ Flutter و Firebase خلال أربع سبرنتات من 22 قصة مستخدم، مع موقع ثنائي اللغة يضم لعبة تفاعلية لأنواع الخط.",
      ],
    },
    stack: ["Flutter", "Firebase", "Computer vision", "Roboflow", "FastAPI", "Agile"],
    results: [
      { value: { en: "6", ar: "6" }, label: { en: "people on the team", ar: "أشخاص في الفريق" } },
      { value: { en: "5 months", ar: "5" }, label: { en: "from plan to app", ar: "أشهر من الخطة إلى التطبيق" } },
      { value: { en: "AI", ar: "AI" }, label: { en: "names the calligraphy style", ar: "يتعرّف على نوع الخط" } },
    ],
    wide: true,
    link: "https://devsm7.github.io/qalam/",
    images: [
      {
        src: "/work/qalam/app.png",
        alt: { en: "Hebr AI style scanner and the community feed", ar: "ماسح «حِبر AI» لأنواع الخط وصفحة المجتمع" },
      },
      { src: "/work/qalam/website.png", alt: { en: "Qalam website home page", ar: "الصفحة الرئيسية لموقع قلم" } },
      {
        src: "/work/qalam/scanner.png",
        alt: { en: "Hebr AI calligraphy analyser on the website", ar: "محلل الخط العربي «حِبر AI» في الموقع" },
      },
    ],
  },
  {
    slug: "smartschedule",
    name: { en: "SmartSchedule", ar: "SmartSchedule" },
    color: "#B8C4FF",
    shade: "#A5B3FA",
    kind: { en: "Web app", ar: "تطبيق ويب" },
    period: { en: "Aug – Nov 2025", ar: "أغسطس – نوفمبر 2025" },
    summary: {
      en: "University timetables that fix their own conflicts, with live co-editing for 30+ users.",
      ar: "جداول جامعية تحل تعارضاتها بنفسها، مع تحرير جماعي مباشر لأكثر من 30 مستخدماً.",
    },
    overview: {
      en: "SmartSchedule is an intelligent academic scheduling platform. It resolves timetable conflicts automatically and lets several people edit the same schedule at once.",
      ar: "SmartSchedule منصة ذكية لجدولة المقررات الأكاديمية. تحل تعارضات الجداول تلقائياً وتتيح لعدة أشخاص تحرير الجدول نفسه في الوقت ذاته.",
    },
    role: {
      en: "Improved the product idea, built parts of the UI and tested the app.",
      ar: "طوّرت فكرة المنتج، وبنيت أجزاء من الواجهة، واختبرت التطبيق.",
    },
    highlights: {
      en: [
        "An automated conflict-resolution scheduling algorithm supporting 5 distinct user roles.",
        "Real-time collaborative editing with Yjs (CRDT), with zero data loss across 30+ concurrent sessions.",
      ],
      ar: [
        "خوارزمية جدولة تحل التعارضات تلقائياً وتدعم 5 أدوار مختلفة للمستخدمين.",
        "تحرير جماعي لحظي باستخدام Yjs (CRDT) دون أي فقدان للبيانات عبر أكثر من 30 جلسة متزامنة.",
      ],
    },
    stack: ["Next.js", "TypeScript", "Supabase", "Yjs", "Tailwind CSS"],
    results: [
      { value: { en: "30+", ar: "30+" }, label: { en: "people editing at once", ar: "مستخدماً يحررون معاً" } },
      { value: { en: "Auto", ar: "تلقائي" }, label: { en: "conflict fixing", ar: "حل التعارضات" } },
      { value: { en: "Live", ar: "مباشر" }, label: { en: "at smartschedule.xyz", ar: "على smartschedule.xyz" } },
    ],
    wide: true,
    link: "https://smartschedule.xyz/",
    images: [
      {
        src: "/work/smartschedule/home.png",
        alt: { en: "SmartSchedule home page", ar: "الصفحة الرئيسية لـ SmartSchedule" },
      },
      {
        src: "/work/smartschedule/scheduling.png",
        alt: { en: "Scheduling committee dashboard with zero conflicts", ar: "لوحة لجنة الجدولة بدون أي تعارضات" },
      },
      {
        src: "/work/smartschedule/teaching-load.png",
        alt: {
          en: "Teaching load dashboard balancing instructor hours",
          ar: "لوحة العبء التدريسي لموازنة ساعات أعضاء هيئة التدريس",
        },
      },
      {
        src: "/work/smartschedule/student.png",
        alt: { en: "A student's weekly schedule", ar: "الجدول الأسبوعي للطالب" },
      },
    ],
  },
  {
    slug: "cloudtrim",
    name: { en: "CloudTrim", ar: "CloudTrim" },
    color: "#FFB8C9",
    shade: "#F5A3B7",
    badge: { en: "VentureX 2026", ar: "VentureX 2026" },
    kind: { en: "Web app · AI FinOps", ar: "تطبيق ويب · ذكاء اصطناعي" },
    period: { en: "Oct 2026", ar: "أكتوبر 2026" },
    summary: {
      en: "An AI agent that finds wasted cloud spend for Saudi SMEs, and changes nothing until a human approves.",
      ar: "وكيل ذكاء اصطناعي يكتشف الهدر في تكاليف السحابة للمنشآت الصغيرة والمتوسطة في السعودية، ولا يغيّر شيئاً قبل موافقة إنسان.",
    },
    overview: {
      en: "CloudTrim is an AI FinOps product our team built for VentureX 2026. It scans a company’s cloud with read-only access, explains each saving in plain language, and only acts after an engineer approves with one click, on the web or WhatsApp. It’s designed for Saudi SMEs with 50 to 250 staff. The mentors praised the idea.",
      ar: "CloudTrim منتج لإدارة تكاليف السحابة بالذكاء الاصطناعي بنيناه كفريق لمسابقة VentureX 2026. يفحص سحابة الشركة بصلاحية قراءة فقط، ويشرح كل فرصة توفير بلغة بسيطة، ولا ينفّذ أي تغيير إلا بعد موافقة المهندس بنقرة واحدة عبر الويب أو واتساب. صُمّم للمنشآت السعودية التي يعمل بها بين 50 و250 موظفاً، وأشاد المرشدون بفكرته.",
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
        "مسار موافقة يضع الأمان أولاً: فحص بصلاحية قراءة فقط، وصلاحية لإجراء واحد تنتهي خلال 15 دقيقة، وإيقاف بدل الحذف مع تراجع بنقرة، وسجل تدقيق.",
        "شرح كل توصية بالذكاء الاصطناعي عبر Claude API، مع نص احتياطي حتى لا يتعطل العرض أبداً.",
        "عرض حي يعمل على بيانات تجريبية لشركة افتراضية، فلا يعتمد على حساب سحابي حقيقي.",
      ],
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Claude API", "Three.js", "Vercel"],
    results: [
      { value: { en: "VentureX", ar: "VentureX" }, label: { en: "2026 competition", ar: "مسابقة 2026" } },
      {
        value: { en: "50–250", ar: "50–250" },
        label: { en: "staff, the SMEs it serves", ar: "موظفاً في المنشآت المستهدفة" },
      },
      { value: { en: "1 click", ar: "1" }, label: { en: "to approve any change", ar: "نقرة لاعتماد أي تغيير" } },
    ],
    wide: true,
    link: "https://cloudtrim-sa.vercel.app",
    images: [
      { src: "/work/cloudtrim/home.png", alt: { en: "CloudTrim landing page", ar: "الصفحة التعريفية لـ CloudTrim" } },
      {
        src: "/work/cloudtrim/demo.png",
        alt: { en: "CloudTrim demo dashboard", ar: "لوحة العرض التجريبي لـ CloudTrim" },
      },
    ],
  },
  {
    slug: "keyboard-fixer",
    name: { en: "Keyboard Fixer", ar: "Keyboard Fixer" },
    color: "#D7C4FF",
    shade: "#C7B0FA",
    kind: { en: "Chrome extension", ar: "إضافة Chrome" },
    period: { en: "Jul 2026", ar: "يوليو 2026" },
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
    link: "https://github.com/sulaimanmokhaniq/keyboard-fixer",
    linkKind: "code",
    images: [
      {
        src: "/work/keyboard-fixer/demo.png",
        alt: {
          en: "Mistyped text converted to Arabic with Ctrl+Shift+E",
          ar: "تحويل نص مكتوب بالتخطيط الخطأ إلى العربية باختصار Ctrl+Shift+E",
        },
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
    period: { en: "Jan 2026", ar: "يناير 2026" },
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
        'واجهة متجاوبة بالكامل باتجاه RTL، تضم قسماً رئيسياً ومعرض منتجات وقسم "من نحن" ونموذج تواصل.',
        "معرض منتجات تفاعلي مع فلترة حسب الفئة، وشارات للمنتجات (جديد، الأكثر مبيعاً)، ونافذة للتفاصيل وزر للطلب.",
        "هوية بصرية تراثية: ألوان دافئة وخلفيات مزخرفة وثلاثة خطوط عربية (Amiri للعناوين، وCairo وTajawal للنصوص).",
        "حركات وتأثيرات سلسة بـ HTML وCSS وJavaScript فقط دون أي إطار عمل.",
      ],
    },
    stack: ["HTML", "CSS", "JavaScript"],
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
  {
    slug: "used-books-store",
    name: { en: "ReBook", ar: "ReBook" },
    color: "#C9E4A7",
    shade: "#B2D489",
    kind: { en: "Web app · training project", ar: "تطبيق ويب · مشروع تدريبي" },
    period: { en: "Dec 2025", ar: "ديسمبر 2025" },
    summary: {
      en: "A storefront for pre-loved books, with condition grades, discounts and a cart that remembers you.",
      ar: "متجر للكتب المستعملة، يعرض حالة كل كتاب ونسبة التوفير، مع سلة تحفظ مشترياتك.",
    },
    overview: {
      en: "ReBook is an online store for second-hand books, built as a training project. Every book shows its condition (Like New, Good, Fair) and how much you save compared with the new price, so buying used feels as clear as buying new.",
      ar: "ReBook متجر إلكتروني للكتب المستعملة، بنيته مشروعاً تدريبياً. يعرض كل كتاب حالته (كالجديد، جيد، مقبول) ومقدار التوفير مقارنة بسعره جديداً، ليكون شراء الكتاب المستعمل واضحاً كشراء الجديد.",
    },
    role: { en: "Solo project: design and code.", ar: "مشروع فردي: التصميم والبرمجة." },
    highlights: {
      en: [
        "A React single-page app with routes for the catalogue, a book details page and the cart.",
        "A shopping cart built with React Context: add books, change quantities, remove items, and see a live total and a count on the header icon. The cart is saved in the browser, so it survives a refresh.",
        "Category filters and book cards with condition badges and the original price crossed out.",
        "A details page that calculates the saving percentage and shows shipping and quality notes.",
      ],
      ar: [
        "تطبيق React من صفحة واحدة، بمسارات للكتب وصفحة تفاصيل الكتاب والسلة.",
        "سلة مشتريات مبنية بـ React Context: إضافة الكتب وتغيير الكمية والحذف، مع إجمالي مباشر وعدّاد على أيقونة السلة. تُحفظ السلة في المتصفح فلا تضيع عند تحديث الصفحة.",
        "فلترة حسب التصنيف، وبطاقات كتب تعرض شارة الحالة والسعر الأصلي مشطوباً.",
        "صفحة تفاصيل تحسب نسبة التوفير وتعرض معلومات الشحن والجودة.",
      ],
    },
    stack: ["React", "Vite", "React Router"],
    link: "https://github.com/sulaimanmokhaniq/used-books-store",
    linkKind: "code",
    images: [
      {
        src: "/work/used-books-store/home.png",
        alt: { en: "ReBook home page", ar: "الصفحة الرئيسية لمتجر ReBook" },
      },
    ],
  },
  {
    slug: "oratory",
    name: { en: "Oratory", ar: "Oratory" },
    color: "#A9DDF5",
    shade: "#86CBEB",
    badge: { en: "Graduation project · KSU", ar: "مشروع تخرّج · جامعة الملك سعود" },
    kind: { en: "Mobile app · team of 5", ar: "تطبيق جوال · فريق من 5" },
    period: { en: "Mar – Jun 2026", ar: "مارس – يونيو 2026" },
    summary: {
      en: "An AI public-speaking coach: record a speech and get scored on pace, pauses, clarity, energy, pitch and filler words.",
      ar: "مدرّب ذكي للإلقاء: سجّل خطابك واحصل على تقييم للسرعة والتوقفات والوضوح والطاقة ونبرة الصوت وكلمات الحشو.",
    },
    overview: {
      en: "Oratory helps people get better at public speaking. You record a speech in the app (or upload one), it’s transcribed with OpenAI Whisper, and a Python backend analyses the audio across six metrics. The app turns that into scores, charts and coaching tips, and tracks your progress across sessions. It was our team’s graduation project at King Saud University.",
      ar: "Oratory تطبيق يساعدك على تحسين مهارة الإلقاء. تسجّل خطابك في التطبيق أو ترفعه، فيُحوَّل إلى نص بتقنية Whisper من OpenAI، ويحلّل خادم Python الصوت عبر ستة مقاييس. يعرض التطبيق النتائج على شكل درجات ورسوم بيانية ونصائح للتحسين، ويتابع تقدّمك من جلسة لأخرى. كان مشروع تخرّج فريقنا في جامعة الملك سعود.",
    },
    role: {
      en: "Refined the idea and built UI screens, including progress history, session details and the speaking-pace (WPM) calculation.",
      ar: "تطوير الفكرة وبناء شاشات الواجهة، منها سجل التقدّم وتفاصيل الجلسة وحساب سرعة الكلام.",
    },
    highlights: {
      en: [
        "Records or imports a speech and sends it to a FastAPI backend running Whisper, keeping filler words in the transcript.",
        "Scores six metrics: speaking pace (WPM), pauses, pacing consistency, pronunciation clarity, vocal energy and pitch variation.",
        "Shows results as a six-point radar chart, score rings and trend lines, with filler words highlighted in the transcript and tips for each metric.",
        "An AI-generated daily speaking challenge based on your recent results, and every session saved with Firebase to track progress.",
      ],
      ar: [
        "تسجيل الخطاب أو رفعه وإرساله إلى خادم FastAPI يعمل بـ Whisper، مع الإبقاء على كلمات الحشو في النص.",
        "تقييم ستة مقاييس: سرعة الكلام، والتوقفات، وثبات الإيقاع، ووضوح النطق، وطاقة الصوت، وتنوّع النبرة.",
        "عرض النتائج برسم راداري سداسي ودوائر للدرجات وخطوط للتقدّم، مع تمييز كلمات الحشو في النص ونصائح لكل مقياس.",
        "تحدٍّ يومي للإلقاء يولّده الذكاء الاصطناعي بناءً على نتائجك الأخيرة، وحفظ كل جلسة في Firebase لمتابعة التقدّم.",
      ],
    },
    stack: ["Flutter", "Firebase", "Python", "FastAPI", "Whisper", "librosa"],
    link: "https://github.com/Devsm7/Oratory",
    linkKind: "code",
    images: [
      {
        src: "/work/oratory/screens.png",
        alt: {
          en: "Oratory home, recording, session report and progress screens",
          ar: "شاشات Oratory: الرئيسية والتسجيل وتقرير الجلسة والتقدّم",
        },
      },
      {
        src: "/work/oratory/history.png",
        alt: { en: "Session details and progress history screens", ar: "شاشتا تفاصيل الجلسة وسجل التقدّم" },
      },
    ],
  },
  {
    slug: "say",
    name: { en: "SAY", ar: "SAY" },
    color: "#FFE08A",
    shade: "#F5CC5C",
    kind: { en: "Web app · team of 4", ar: "تطبيق ويب · فريق من 4" },
    period: { en: "Dec 2025 – Jan 2026", ar: "ديسمبر 2025 – يناير 2026" },
    summary: {
      en: "Start All Yourself: a bilingual guide to the modern dev stack, from the first idea to launch.",
      ar: "ابدأ كل شيء بنفسك: دليل ثنائي اللغة لأدوات التطوير الحديثة، من الفكرة الأولى حتى الإطلاق.",
    },
    overview: {
      en: "SAY (“Start All Yourself”) helps new developers work out where to begin. It’s a curated directory of frameworks, AI coding and mockup tools, databases and deployment platforms, with side-by-side comparisons, recommended tech stacks, a step-by-step guide to starting a project, and a library of thousands of ready-made coding prompts.",
      ar: "SAY (“ابدأ كل شيء بنفسك”) يساعد المطوّرين الجدد على معرفة من أين يبدؤون. دليل منسّق لأطر العمل وأدوات البرمجة والتصميم بالذكاء الاصطناعي وقواعد البيانات ومنصات النشر، مع مقارنات جنباً إلى جنب، وحزم تقنية مقترحة، ودليل خطوة بخطوة لبدء أي مشروع، ومكتبة تضم آلاف الأوامر البرمجية الجاهزة.",
    },
    role: {
      en: "Built the light theme (theme switching across the whole site) and contributed to the idea and the presentation.",
      ar: "بناء الوضع الفاتح (التبديل بين الوضعين في الموقع كاملاً)، والمساهمة في الفكرة والعرض التقديمي.",
    },
    highlights: {
      en: [
        "A searchable tool directory across 16 categories, with a details page for every tool.",
        "A compare page that puts two tools side by side, plus recommended tech stacks and a “create your own stack” builder.",
        "A prompt library generated from templates (over 19,000 coding and project-spec prompts), filterable by domain, stack and style.",
        "A prompt tester that scores your prompt with Gemini, full Arabic and English support, and light and dark themes.",
      ],
      ar: [
        "دليل أدوات قابل للبحث في 16 تصنيفاً، مع صفحة تفاصيل لكل أداة.",
        "صفحة لمقارنة أداتين جنباً إلى جنب، وحزم تقنية مقترحة، وأداة لبناء حزمتك الخاصة.",
        "مكتبة أوامر مولّدة من قوالب (أكثر من 19 ألف أمر برمجي وأوامر لكتابة متطلبات المشاريع)، مع فلترة حسب المجال والتقنية والأسلوب.",
        "أداة لتقييم الأوامر باستخدام Gemini، ودعم كامل للعربية والإنجليزية، ووضعان فاتح وداكن.",
      ],
    },
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "i18next", "Firebase", "Gemini API"],
    link: "https://github.com/Yazeed-AK/SAY",
    linkKind: "code",
    images: [
      { src: "/work/say/home.png", alt: { en: "SAY home page", ar: "الصفحة الرئيسية لـ SAY" } },
      {
        src: "/work/say/tools.png",
        alt: { en: "Tool directory with category filters", ar: "دليل الأدوات مع التصنيفات" },
      },
      { src: "/work/say/prompts.png", alt: { en: "Prompt library with filters", ar: "مكتبة الأوامر مع الفلاتر" } },
    ],
  },
  {
    slug: "smart-attendance",
    name: { en: "Smart Attendance", ar: "Smart Attendance" },
    color: "#FFB3A7",
    shade: "#F59A8C",
    kind: { en: "Web app · course project", ar: "تطبيق ويب · مشروع مقرر" },
    period: { en: "Dec 2025", ar: "ديسمبر 2025" },
    summary: {
      en: "Class attendance without the paper sheet: GPS check-in for classrooms and QR codes for online lectures.",
      ar: "تحضير الطلاب دون كشف ورقي: تسجيل الحضور بالموقع في القاعة، وبرمز QR في المحاضرات عن بُعد.",
    },
    overview: {
      en: "Smart Attendance is a mobile-first prototype, built for a university course, that replaces roll call. A lecturer starts a session: in a classroom, nearby students find it by GPS and check in; in an online lecture, they scan a QR code on screen. Late arrivals are marked automatically using the lateness window the lecturer sets. It was built with Lovable, an AI app builder.",
      ar: "Smart Attendance نموذج أولي لتطبيق يُغني عن المناداة بالأسماء، بنيناه لمقرر جامعي. يبدأ المحاضر الجلسة؛ ففي القاعة يجدها الطلاب القريبون عبر الموقع ويسجّلون حضورهم، وفي المحاضرات عن بُعد يمسحون رمز QR المعروض. ويُحتسب التأخير تلقائياً حسب المهلة التي يحددها المحاضر. بُني التطبيق باستخدام Lovable، أداة لبناء التطبيقات بالذكاء الاصطناعي.",
    },
    role: { en: "The idea, the UI and testing.", ar: "الفكرة والواجهة والاختبار." },
    highlights: {
      en: [
        "Two roles, student and lecturer, each with their own dashboard.",
        "Lecturers create classroom (GPS) or online (QR) sessions, choose an allowed lateness of 5–20 minutes, and see a live timer and present count.",
        "Online sessions show a QR code that can be copied or regenerated, and students scan it with their camera.",
        "Students see nearby sessions with their distance and how many classmates are present, then check in with one tap. Each record is marked present, late or absent.",
      ],
      ar: [
        "دوران: طالب ومحاضر، لكل منهما لوحة خاصة.",
        "ينشئ المحاضر جلسة حضورية (بالموقع) أو عن بُعد (برمز QR)، ويحدد مهلة التأخير من 5 إلى 20 دقيقة، ويتابع مؤقت الجلسة وعدد الحاضرين مباشرة.",
        "تعرض الجلسات عن بُعد رمز QR يمكن نسخه أو تجديده، ويمسحه الطالب بالكاميرا.",
        "يرى الطالب الجلسات القريبة مع المسافة وعدد الحاضرين، ويسجّل حضوره بضغطة واحدة، ويُسجَّل الحضور بثلاث حالات: حاضر، متأخر، غائب.",
      ],
    },
    stack: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Lovable"],
    link: "https://github.com/yohanmkh/smart-attendance-system",
    linkKind: "code",
    images: [
      {
        src: "/work/smart-attendance/screens.png",
        alt: {
          en: "Role selection, live QR session, nearby sessions and check-in screens",
          ar: "شاشات اختيار الدور وجلسة QR والجلسات القريبة وتسجيل الحضور",
        },
      },
      {
        src: "/work/smart-attendance/lecturer.png",
        alt: {
          en: "Lecturer dashboard, create session and live session screens",
          ar: "لوحة المحاضر وإنشاء الجلسة والجلسة المباشرة",
        },
      },
    ],
  },
];

export const experience = [
  {
    org: { en: "Paseetah", ar: "بسيطة" },
    role: { en: "Flutter Developer", ar: "مطوّر Flutter" },
    period: { en: "2026", ar: "2026" },
  },
  {
    org: { en: "Nugttah", ar: "نقطة" },
    role: { en: "Frontend Mobile Developer", ar: "مطوّر واجهات تطبيقات الجوال" },
    period: { en: "2025", ar: "2025" },
  },
  {
    org: { en: "King Saud University", ar: "جامعة الملك سعود" },
    role: { en: "B.Sc. Software Engineering", ar: "بكالوريوس هندسة البرمجيات" },
    period: { en: "2022 – 2026", ar: "2022 – 2026" },
  },
];

// Student clubs and teams, laid out as bento tiles. Logos live in public/clubs/.
// Each tile is a soft tint of its club's logo colour (dark tiles for the clubs with dark logos).
// size: "big" is a 2×2 block on wide screens, "wide" spans two columns from tablets up,
// "half" spans two columns on desktop only, "small" is one column.
// The yellow stat tile, as a deck.
export const stats = [
  {
    kind: { en: "Users on an app I built auth for", ar: "مستخدم في تطبيق بنيت نظام دخوله" },
    place: { en: "100K+", ar: "100K+" },
    detail: { en: "", ar: "" },
    color: "#FFD43B",
  },
  {
    kind: { en: "Views on the launch of a test I built", ar: "مشاهدة لإطلاق اختبار بنيته" },
    place: { en: "1M+", ar: "1M+" },
    detail: {
      en: "FutureU: a 40-question career test that points students to their best-fit tech field.",
      ar: "FutureU: اختبار مسار من 40 سؤالاً يوجّه الطالب لمجال التقنية الأنسب له.",
    },
    color: "#DCCBFF",
  },
] as const;

// Wins, newest first. Add a card by adding an entry. Colours avoid flame, mint and sky (the hero deck above) and sun.
export const wins = [
  {
    kind: { en: "Hackathon win", ar: "فوز في هاكاثون" },
    place: { en: "1st place", ar: "المركز الأول" },
    event: { en: "DAICOthon 2026", ar: "هاكاثون DAICOthon 2026" },
    detail: { en: "Wamdah · Classroom file sharing", ar: "ومضة · مشاركة الملفات في الفصل" },
    color: "#B8C4FF",
  },
  {
    kind: { en: "Hackathon win", ar: "فوز في هاكاثون" },
    place: { en: "4th place", ar: "المركز الرابع" },
    event: { en: "Projecton Hackathon 2025", ar: "هاكاثون بروجيكتون 2025" },
    detail: {
      en: "3 days as project managers on 3 real challenges",
      ar: "3 أيام بدور مدير المشروع في 3 تحديات حقيقية",
    },
    color: "#D4F07A",
  },
  {
    kind: { en: "Robotics challenge", ar: "تحدي روبوتات" },
    place: { en: "2nd place", ar: "المركز الثاني" },
    event: { en: "Bingo Bot V2 2025", ar: "تحدي Bingo Bot V2 2025" },
    detail: {
      en: "Drones and Robotics Club · team of 3",
      ar: "نادي الدرونز والروبوت · فريق من 3",
    },
    color: "#F2D6A2",
  },
] as const;

export const clubs = [
  {
    name: { en: "Future Technology Club", ar: "Future Technology Club" },
    role: { en: "Vice President of Membership Affairs", ar: "نائب الرئيس لشؤون العضوية" },
    period: { en: "2025 – Now", ar: "2025 – الآن" },
    current: true,
    logo: "/clubs/ftc.png",
    color: "#DDD0F6",
    size: "big",
  },
  {
    name: { en: "3DC · 3D Printing Club", ar: "3DC · نادي الطباعة ثلاثية الأبعاد" },
    role: { en: "Technical Committee Member", ar: "عضو اللجنة التقنية" },
    period: { en: "2024 – Now", ar: "2024 – الآن" },
    current: true,
    logo: "/clubs/3dc.png",
    color: "#FDDCC6",
    size: "wide",
  },
  {
    name: { en: "BIG n", ar: "BIG n" },
    role: { en: "Member Affairs Team, HR Committee", ar: "فريق شؤون الأعضاء، لجنة الموارد البشرية" },
    period: { en: "2024 – 2025", ar: "2024 – 2025" },
    current: false,
    logo: "/clubs/bign.png",
    color: "#CDEFDF",
    size: "small",
  },
  {
    name: { en: "KSU CPC", ar: "KSU CPC" },
    role: { en: "Vice Leader, Executive Committee", ar: "نائب قائد اللجنة التنفيذية" },
    period: { en: "2025 – 2026", ar: "2025 – 2026" },
    current: false,
    logo: "/clubs/cpc.png",
    color: "#2E1A66",
    dark: true,
    size: "small",
  },
  {
    name: { en: "Artificial Intelligence Club", ar: "نادي الذكاء الاصطناعي" },
    role: { en: "Research Committee Member", ar: "عضو لجنة الأبحاث" },
    period: { en: "2025 – 2026", ar: "2025 – 2026" },
    current: false,
    logo: "/clubs/ai.png",
    color: "#1A2342",
    dark: true,
    size: "half",
    stat: { value: { en: "30", ar: "30" }, label: { en: "volunteer hours", ar: "ساعة تطوعية" } },
  },
  {
    name: { en: "Digital Innovation Unit", ar: "Digital Innovation Unit" },
    role: { en: "Technical Committee Member", ar: "عضو اللجنة التقنية" },
    period: { en: "2025 – 2026", ar: "2025 – 2026" },
    current: false,
    logo: "/clubs/diu.png",
    color: "#D6EBF8",
    size: "half",
  },
] as const;
