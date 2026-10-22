"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import { projects, ui, type Locale } from "@/content/site";
import { NameCalligraphy } from "@/components/name-calligraphy";

const subscribe = () => () => {};
const sections = ["intro", "work", "clubs", "about", "contact"] as const;
type Section = (typeof sections)[number];

// Tracks which home-page section is on screen (the hero counts as "intro"); case pages count as "work", other pages (like 404) highlight nothing.
function useActiveSection(isHome: boolean, isCase: boolean) {
  const [active, setActive] = useState<Section | null>(null);

  useEffect(() => {
    if (!isHome) return;
    const update = () => {
      const line = window.innerHeight * 0.4;
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      let current: Section | null = null;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setActive(atBottom ? "contact" : current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [isHome]);

  return isHome ? active : isCase ? "work" : null;
}

export function Header({ lang }: { lang: Locale }) {
  const t = ui[lang];
  const pathname = usePathname();
  const other: Locale = lang === "en" ? "ar" : "en";
  const switchHref = pathname.replace(/^\/(en|ar)/, `/${other}`) || `/${other}`;
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
  const isDark = mounted && resolvedTheme === "dark";
  const isHome = /^\/(en|ar)\/?$/.test(pathname);
  const [calligraphy, setCalligraphy] = useState(false);
  const closeCalligraphy = useCallback(() => setCalligraphy(false), []);
  const isCase = projects.some((p) => new RegExp(`^/(en|ar)/work/${p.slug}/?$`).test(pathname));
  const active = useActiveSection(isHome, isCase);
  const reduce = useReducedMotion();

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const pill = "inline-flex min-h-11 items-center rounded-full px-4 text-[15px] transition-colors hover:bg-chip";
  const iconButton =
    "inline-flex size-10 shrink-0 items-center justify-center rounded-full transition-colors hover:bg-chip sm:size-11";
  const spring = reduce ? { duration: 0 } : { type: "spring" as const, stiffness: 120, damping: 22 };

  const langLink = (
    // A full page load, not a client navigation: swapping the root <html> on the fly drops the
    // theme for a frame, so the page flashed the other colour mode.
    <a
      href={switchHref}
      hrefLang={other}
      lang={other}
      aria-label={t.switchLangLabel}
      className="inline-flex min-h-10 items-center rounded-full px-3.5 text-[15px] transition-colors hover:bg-chip sm:min-h-11 sm:px-4"
    >
      {t.switchLang}
    </a>
  );
  const themeButton = (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={t.themeLabel}
      className={iconButton}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  );

  return (
    <header className="sticky top-0 z-40 bg-ground/80 backdrop-blur-md">
      <div className="relative mx-auto flex max-w-[1280px] items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
        {/* On the home page the name plays the calligraphy; on other pages it still goes home. */}
        {isHome ? (
          <button
            type="button"
            onClick={() => setCalligraphy(true)}
            aria-label={lang === "ar" ? "سليمان" : "sulaiman"}
            className="cursor-pointer font-display text-2xl font-extrabold tracking-tight"
          >
            {lang === "ar" ? "سليمان" : "sulaiman"}
            <span className="text-flame">.</span>
          </button>
        ) : (
          <Link href={`/${lang}`} className="font-display text-2xl font-extrabold tracking-tight">
            {lang === "ar" ? "سليمان" : "sulaiman"}
            <span className="text-flame">.</span>
          </Link>
        )}
        <NameCalligraphy open={calligraphy} onClose={closeCalligraphy} />

        {/* Wide screens: one pill with every section, the language and the theme. */}
        <nav
          aria-label="Main"
          className="hidden items-center gap-1 rounded-full border border-line bg-surface p-1.5 md:flex"
        >
          <LayoutGroup id="desktop-nav">
            {sections.map((id) => (
              <Link
                key={id}
                href={`/${lang}#${id}`}
                aria-current={active === id ? "location" : undefined}
                className={`${pill} relative ${active === id ? "text-ground hover:bg-transparent" : ""}`}
              >
                {active === id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-text"
                    transition={spring}
                  />
                )}
                <span className="relative">{t.nav[id]}</span>
              </Link>
            ))}
          </LayoutGroup>
          {langLink}
          {themeButton}
        </nav>

        {/* Phones: language, theme and a menu button in one small pill; the sections open below. */}
        <div className="flex items-center gap-0.5 rounded-full border border-line bg-surface p-1 md:hidden">
          {langLink}
          {themeButton}
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={t.menuLabel}
            className={`${iconButton} ${menuOpen ? "bg-text text-ground hover:bg-text" : ""}`}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              id="mobile-menu"
              aria-label="Main"
              initial={reduce ? false : { opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduce ? undefined : { opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.18 }}
              className="absolute inset-x-4 top-full flex origin-top flex-col gap-1 rounded-[1.5rem] border border-line bg-surface p-2 shadow-[0_24px_48px_-24px_rgba(0,0,0,0.35)] md:hidden"
            >
              <LayoutGroup id="mobile-nav">
                {sections.map((id) => (
                  <Link
                    key={id}
                    href={`/${lang}#${id}`}
                    onClick={() => setMenuOpen(false)}
                    aria-current={active === id ? "location" : undefined}
                    className={`relative flex min-h-12 items-center rounded-2xl px-4 text-lg font-medium transition-colors ${
                      active === id ? "text-ground" : "hover:bg-chip"
                    }`}
                  >
                    {active === id && (
                      <motion.span
                        layoutId="nav-pill-mobile"
                        className="absolute inset-0 rounded-2xl bg-text"
                        transition={spring}
                      />
                    )}
                    <span className="relative">{t.nav[id]}</span>
                  </Link>
                ))}
              </LayoutGroup>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}
