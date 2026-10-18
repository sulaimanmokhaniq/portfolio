import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow } from "@/components/arrow";
import { CvButton } from "@/components/cv-button";
import { HeroCards } from "@/components/hero-cards";
import { ProjectVisual } from "@/components/project-visual";
import { StackChip } from "@/components/stack-chip";
import { Reveal } from "@/components/reveal";
import Image from "next/image";
import { clubs, experience, hasLocale, profile, projects, ui } from "@/content/site";

// The card title's link covers the whole card; the project visual sits above it so its buttons still work.
const stretched =
  "after:absolute after:inset-0 after:z-[5] after:rounded-tile focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-4 focus-visible:after:outline-ink";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = ui[lang];

  return (
    <main>
      {/* Hero bento */}
      <section
        id="intro"
        className="mx-auto grid max-w-[1280px] scroll-mt-24 grid-cols-1 gap-4 px-4 pt-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3"
      >
        <Reveal className="md:col-span-2">
          <div className="flex h-full min-h-[440px] flex-col justify-between gap-8 rounded-tile bg-hero p-8 text-hero-text sm:p-11">
            <span className="inline-flex items-center gap-2 self-start rounded-full bg-hero-chip px-3.5 py-2 text-sm">
              <span className="size-2 rounded-full bg-[#5BE38C]" />
              {t.tagline}
            </span>
            <div className="space-y-5">
              <h1 className="font-display text-[clamp(2.6rem,5.6vw,5.25rem)] leading-[1.06] font-extrabold tracking-tight rtl:leading-[1.38]">
                {t.heroTitle[0]}
                <br />
                {t.heroTitle[1]}
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-hero-muted">{t.heroBody}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href={`/${lang}#work`}
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-flame px-6 font-semibold text-ink transition-transform hover:-translate-y-0.5"
              >
                {t.seeProjects}
                <Arrow />
              </Link>
              <CvButton
                href={profile.cv}
                label={t.downloadCv}
                printingLabel={t.printingCv}
                className="inline-flex min-h-12 items-center rounded-full bg-ground px-6 font-medium text-text transition-transform hover:-translate-y-0.5"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <HeroCards lines={t.heroCards} label={t.heroCardsLabel} nextLabel={t.nextCard} rtl={lang === "ar"} />
        </Reveal>

        <Reveal delay={0.12}>
          <div className="flex h-full min-h-[210px] flex-col justify-between rounded-tile bg-sun p-8 text-ink">
            <span>{t.usersStat}</span>
            <span dir="ltr" className="font-display text-7xl leading-none font-extrabold">
              100K+
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="flex h-full min-h-[210px] flex-col gap-4 rounded-tile border border-line bg-surface p-8 dark-teal">
            <span className="text-muted">{t.stackLabel}</span>
            <ul className="flex flex-wrap gap-2" dir="ltr">
              {profile.stack.map((s) => (
                <StackChip key={s} name={s} />
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex h-full min-h-[210px] flex-col justify-between rounded-tile bg-peri p-8 text-ink">
            <span>{t.winLabel}</span>
            <span className="font-display text-4xl leading-tight font-extrabold rtl:leading-[1.4]">
              {t.winValue[0]}
              <br />
              {t.winValue[1]}
            </span>
          </div>
        </Reveal>
      </section>

      {/* Projects */}
      <section id="work" className="mx-auto max-w-[1280px] scroll-mt-24 px-4 pt-24 sm:px-6">
        <Reveal>
          <h2 className="mb-6 px-2 font-display text-5xl font-extrabold tracking-tight sm:text-6xl">
            {t.projectsTitle}
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) =>
            p.wide ? (
              <Reveal key={p.slug} className="md:col-span-2 lg:col-span-3">
                <div
                  className="group relative flex flex-col gap-7 rounded-tile p-8 text-ink transition-transform hover:-translate-y-1 sm:p-10 lg:flex-row"
                  style={{ background: p.color }}
                >
                  <div className="flex flex-1 flex-col justify-between gap-4">
                    {p.badge && (
                      <span className="self-start rounded-full bg-ink px-3 py-1.5 text-sm" style={{ color: p.color }}>
                        {p.badge[lang]}
                      </span>
                    )}
                    <h3 className="font-display text-[clamp(2.25rem,9vw,3rem)] font-extrabold [overflow-wrap:anywhere]">
                      <Link href={`/${lang}/work/${p.slug}`} className={stretched}>
                        {p.name.en}{" "}
                        {p.arabicName && (
                          <span lang="ar" className="font-sans text-3xl font-semibold">
                            {p.arabicName}
                          </span>
                        )}
                      </Link>
                    </h3>
                    <p className="max-w-md text-lg leading-relaxed">{p.summary[lang]}</p>
                    <span className="inline-flex items-center gap-2 font-semibold">
                      {t.caseStudy}
                      <Arrow className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                    </span>
                  </div>
                  <ProjectVisual project={p} lang={lang} className="min-h-[280px] flex-1" />
                </div>
              </Reveal>
            ) : (
              <Reveal key={p.slug} delay={(i % 3) * 0.06}>
                <div
                  className="group relative flex h-full flex-col gap-4 rounded-tile p-8 text-ink transition-transform hover:-translate-y-1"
                  style={{ background: p.color }}
                >
                  <ProjectVisual project={p} lang={lang} className="h-44" />
                  <span className="text-sm font-medium">{p.kind[lang]}</span>
                  <h3 className="font-display text-4xl font-extrabold [overflow-wrap:anywhere]">
                    <Link href={`/${lang}/work/${p.slug}`} className={stretched}>
                      {p.name[lang]}
                    </Link>
                  </h3>
                  <p className="flex-1 leading-relaxed">{p.summary[lang]}</p>
                  <span className="inline-flex items-center gap-2 font-semibold">
                    {t.caseStudy}
                    <Arrow className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                  </span>
                </div>
              </Reveal>
            ),
          )}
        </div>
      </section>

      {/* Clubs */}
      <section id="clubs" className="mx-auto max-w-[1280px] scroll-mt-24 px-4 pt-24 sm:px-6">
        <Reveal>
          <h2 className="mb-6 px-2 font-display text-5xl font-extrabold tracking-tight sm:text-6xl rtl:leading-[1.3]">
            {t.clubsTitle}
          </h2>
        </Reveal>
        <ul className="grid grid-flow-dense grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {clubs.map((c, i) => {
            const big = c.size === "big";
            const dark = "dark" in c;
            return (
              <li
                key={c.logo}
                className={
                  big
                    ? "md:col-span-2 lg:row-span-2"
                    : c.size === "wide"
                      ? "md:col-span-2"
                      : c.size === "half"
                        ? "lg:col-span-2"
                        : ""
                }
              >
                <Reveal delay={(i % 4) * 0.06} className="h-full">
                  <div
                    className={`flex h-full flex-col gap-6 rounded-tile p-7 transition-transform hover:-translate-y-1 sm:p-8 ${
                      big ? "lg:p-10" : ""
                    } ${dark ? "text-[#F3F1EC] dark:border dark:border-line" : "text-ink"}`}
                    style={{ background: c.color }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <Image
                        src={c.logo}
                        alt=""
                        width={big ? 160 : 96}
                        height={big ? 160 : 96}
                        className={`rounded-[1.4rem] object-cover shadow-[0_14px_30px_-14px_rgba(0,0,0,0.55)] ${
                          big ? "size-24 sm:size-36 lg:size-40 lg:rounded-[2rem]" : "size-20 sm:size-24"
                        }`}
                      />
                      {c.current ? (
                        <span
                          className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-semibold ${
                            dark ? "bg-white text-ink" : "bg-ink text-white"
                          }`}
                        >
                          <span className="relative flex size-2">
                            <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#5BE38C] motion-reduce:hidden" />
                            <span className="relative inline-flex size-2 rounded-full bg-[#5BE38C]" />
                          </span>
                          {t.clubsNow}
                        </span>
                      ) : (
                        <span
                          className={`rounded-full px-3 py-1.5 text-sm font-semibold ${
                            dark ? "bg-white text-ink" : "bg-ink text-white"
                          }`}
                        >
                          {c.period[lang]}
                        </span>
                      )}
                    </div>
                    <div className="mt-auto flex flex-wrap items-end justify-between gap-x-6 gap-y-4">
                      <div className="flex flex-col gap-2">
                        <h3
                          className={`font-display leading-tight font-extrabold tracking-tight rtl:leading-[1.4] ${
                            big ? "text-[clamp(2rem,7vw,3.25rem)] leading-[1.05]" : "text-2xl sm:text-[1.7rem]"
                          }`}
                        >
                          {c.name[lang]}
                        </h3>
                        <p className={big ? "text-xl" : "text-lg"}>{c.role[lang]}</p>
                        {c.current && <p className="font-medium">{c.period[lang]}</p>}
                      </div>
                      {"stat" in c && (
                        <p
                          className={`flex items-baseline gap-2 rounded-2xl px-4 py-3 ${dark ? "bg-white text-ink" : "bg-ink text-white"}`}
                        >
                          <span className="font-display text-4xl leading-none font-extrabold">
                            {c.stat.value[lang]}
                          </span>
                          <span>{c.stat.label[lang]}</span>
                        </p>
                      )}
                    </div>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </section>

      {/* About */}
      <section
        id="about"
        className="mx-auto grid max-w-[1280px] scroll-mt-24 grid-cols-1 gap-4 px-4 pt-24 sm:px-6 lg:grid-cols-3"
      >
        <Reveal className="lg:col-span-2">
          <div className="h-full rounded-tile border border-line bg-surface p-8 sm:p-10 dark-navy">
            <h2 className="mb-6 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">{t.workedTitle}</h2>
            <ol>
              {experience.map((e) => (
                <li
                  key={e.org.en}
                  className="flex flex-wrap items-baseline justify-between gap-2 border-t border-line py-5"
                >
                  <span>
                    <strong className="text-xl font-semibold">{e.org[lang]}</strong>
                    <span className="text-muted"> · {e.role[lang]}</span>
                  </span>
                  <span className="text-muted">{e.period[lang]}</span>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="flex h-full flex-col justify-between gap-5 rounded-tile bg-hero p-8 text-hero-text sm:p-10 dark-teal">
            <span className="text-hero-muted">{t.communityLabel}</span>
            <span dir="ltr" className="font-display text-6xl leading-none font-extrabold">
              500+
            </span>
            <p className="leading-relaxed text-hero-muted">{t.communityBody}</p>
          </div>
        </Reveal>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-[1280px] scroll-mt-24 px-4 pt-24 pb-6 sm:px-6">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-8 rounded-tile bg-flame p-8 text-ink sm:p-14">
            <h2 className="font-display text-[clamp(2.75rem,6vw,6rem)] leading-[1.02] rtl:leading-[1.35] font-extrabold tracking-tight">
              {t.contactTitle[0]}
              <br />
              {t.contactTitle[1]}
            </h2>
            <div className="flex flex-col gap-3 text-lg" dir="ltr">
              <a href={`mailto:${profile.email}`} className="font-semibold underline-offset-4 hover:underline">
                {profile.email}
              </a>
              <div className="flex gap-5">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="underline-offset-4 hover:underline"
                >
                  LinkedIn
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="underline-offset-4 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="mx-auto flex max-w-[1280px] flex-wrap justify-between gap-2 px-6 pt-6 pb-10 text-sm text-muted">
        <span>© 2026 {profile.name[lang]}</span>
        <span>{t.footer}</span>
      </footer>
    </main>
  );
}
