"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { ui, type Locale } from "@/content/site";

const subscribe = () => () => {};

export function Header({ lang }: { lang: Locale }) {
  const t = ui[lang];
  const pathname = usePathname();
  const other: Locale = lang === "en" ? "ar" : "en";
  const switchHref = pathname.replace(/^\/(en|ar)/, `/${other}`) || `/${other}`;
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  const isDark = mounted && resolvedTheme === "dark";

  const pill =
    "inline-flex min-h-11 items-center rounded-full px-4 text-[15px] transition-colors hover:bg-chip";

  return (
    <header className="sticky top-0 z-40 bg-ground/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6">
        <Link href={`/${lang}`} className="font-display text-2xl font-extrabold tracking-tight">
          {lang === "ar" ? "سليمان" : "sulaiman"}
          <span className="text-flame">.</span>
        </Link>
        <nav
          aria-label="Main"
          className="flex flex-wrap items-center gap-1 rounded-full border border-line bg-surface p-1.5"
        >
          <Link href={`/${lang}#work`} className={`${pill} bg-hero text-hero-text hover:bg-hero`}>
            {t.nav.work}
          </Link>
          <Link href={`/${lang}#about`} className={pill}>
            {t.nav.about}
          </Link>
          <Link href={`/${lang}#contact`} className={pill}>
            {t.nav.contact}
          </Link>
          <Link href={switchHref} hrefLang={other} aria-label={t.switchLangLabel} className={pill}>
            {t.switchLang}
          </Link>
          <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label={t.themeLabel}
            className="inline-flex size-11 items-center justify-center rounded-full transition-colors hover:bg-chip"
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>
        </nav>
      </div>
    </header>
  );
}

function MoonIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}
