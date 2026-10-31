"use client";

import { Aref_Ruqaa } from "next/font/google";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Arrow } from "@/components/arrow";
import { hasLocale, ui } from "@/content/site";

const ruqaa = Aref_Ruqaa({ subsets: ["arabic"], weight: "700", preload: false });

export default function NotFound() {
  const params = useParams<{ lang: string }>();
  const lang = hasLocale(params.lang) ? params.lang : "en";
  const t = ui[lang];

  return (
    <main className="mx-auto max-w-[1280px] px-4 pt-4 pb-10 sm:px-6">
      <section className="flex min-h-[70vh] flex-col items-center justify-center gap-6 rounded-tile bg-hero p-8 text-center text-hero-text sm:p-14">
        <span
          lang="ar"
          aria-hidden="true"
          className={`${ruqaa.className} text-[clamp(5rem,16vw,11rem)] leading-none text-flame dark:text-[#ff6a2b]`}
        >
          سليمان
        </span>
        <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-tight font-extrabold tracking-tight rtl:leading-[1.4]">
          {t.notFoundTitle}
        </h1>
        <p className="text-lg text-hero-muted">{t.notFoundBody}</p>
        <Link
          href={`/${lang}`}
          className="inline-flex min-h-12 items-center gap-2 rounded-full bg-flame px-6 font-semibold text-ink transition-transform hover:-translate-y-0.5"
        >
          {t.backHome}
          <Arrow />
        </Link>
      </section>
    </main>
  );
}
