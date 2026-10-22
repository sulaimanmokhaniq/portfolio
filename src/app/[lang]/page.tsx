import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow } from "@/components/arrow";
import { GitHubIcon, LinkedInIcon, MailIcon, PrinterIcon } from "@/components/contact-icons";
import { CvButton } from "@/components/cv-button";
import { HeroCards } from "@/components/hero-cards";
import { ProjectVisual } from "@/components/project-visual";
import { StackChip } from "@/components/stack-chip";
import { WinDeck } from "@/components/win-deck";
import { Reveal } from "@/components/reveal";
import { RiyadhClock } from "@/components/riyadh-clock";
import { RoleCycler } from "@/components/role-cycler";
import Image from "next/image";
import { clubs, experience, hasLocale, profile, projects, stats, ui, wins } from "@/content/site";

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
              <span className="size-2 rounded-full bg-live" />
              {t.tagline}
            </span>
            <div className="space-y-5">
              <h1 className="font-display text-[clamp(2.6rem,5.6vw,5.25rem)] leading-[1.06] font-extrabold tracking-tight rtl:leading-[1.38]">
                {t.heroName}
                <span className="sr-only"> {t.heroRoles.join(", ")}.</span>
                <RoleCycler roles={[...t.heroRoles]} />
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-hero-muted">{t.heroBody}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href={`/${lang}#work`}
                className="swap inline-flex min-h-12 items-stretch rounded-full bg-flame font-semibold text-ink transition-transform hover:-translate-y-0.5"
              >
                <span className="swap-front flex items-center gap-2 px-6">
                  {t.seeProjects}
                  <Arrow />
                </span>
                <span aria-hidden="true" className="swap-back flex items-center justify-center bg-mint text-ink">
                  <Arrow className="size-6 rotate-90 rtl:-rotate-90" />
                </span>
              </Link>
              <CvButton
                href={profile.cv}
                label={
                  <>
                    <span className="swap-front flex h-full items-center px-6">{t.downloadCv}</span>
                    <span aria-hidden="true" className="swap-back flex items-center justify-center bg-sun text-ink">
                      <PrinterIcon className="size-6" />
                    </span>
                  </>
                }
                printingLabel={t.printingCv}
                className="swap inline-flex min-h-12 items-stretch rounded-full bg-ground font-medium text-text transition-transform hover:-translate-y-0.5 dark:bg-cream dark:text-ink"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <HeroCards lines={t.heroCards} label={t.heroCardsLabel} nextLabel={t.nextCard} rtl={lang === "ar"} />
        </Reveal>

        <Reveal delay={0.12}>
          <WinDeck
            wins={stats.map((st) => ({
              kind: st.kind[lang],
              place: st.place[lang],
              detail: st.detail[lang],
              color: st.color,
              stat: true,
            }))}
            label={t.usersStat}
            nextLabel={t.nextCard}
            interval={7000}
            effect="flip"
            rtl={lang === "ar"}
          />
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
          <WinDeck
            wins={wins.map((w) => ({
              kind: w.kind[lang],
              place: w.place[lang],
              event: w.event[lang],
              detail: w.detail[lang],
              color: w.color,
            }))}
            label={t.winsLabel}
            nextLabel={t.nextCard}
            rtl={lang === "ar"}
          />
        </Reveal>

        <Reveal delay={0.24} className="md:col-span-1 lg:col-span-2">
          <div className="flex h-full min-h-[210px] flex-col justify-between gap-6 rounded-tile bg-mint p-8 text-ink">
            <span className="inline-flex items-center gap-2 font-semibold">
              <span className="size-2.5 rounded-full bg-ink" />
              {t.nowLabel}
            </span>
            <p className="font-display text-[clamp(1.8rem,3vw,2.6rem)] leading-[1.15] font-extrabold tracking-tight rtl:leading-[1.45]">
              {t.nowText}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.28}>
          <RiyadhClock label={t.clockLabel} awake={t.clockAwake} asleep={t.clockAsleep} />
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
                  className="group swap-trigger relative flex flex-col gap-7 rounded-tile p-8 text-ink transition-transform hover:-translate-y-1 sm:p-10 lg:flex-row"
                  style={{ background: p.color }}
                >
                  <div className="flex flex-1 flex-col justify-center gap-4">
                    {p.badge && !p.sticker && (
                      <span className="self-start rounded-full bg-ink px-3 py-1.5 text-sm" style={{ color: p.color }}>
                        {p.badge[lang]}
                      </span>
                    )}
                    <span className="-mb-2 text-sm font-medium">{p.kind[lang]}</span>
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
                    {p.results && (
                      <dl className="grid max-w-lg grid-cols-3 rounded-2xl bg-ink py-4 text-cream">
                        {p.results.map((r, k) => (
                          <div key={k} className={`flex flex-col gap-1 px-3 sm:px-4 ${k ? "border-s border-white/15" : ""}`}>
                            <dt className="order-2 text-xs leading-snug sm:text-sm">{r.label[lang]}</dt>
                            <dd dir="auto" className="font-display text-xl leading-none font-extrabold sm:text-2xl rtl:text-right" style={{ color: p.color }}>
                              {r.value[lang]}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    )}
                    <span className="swap mt-2 self-start rounded-full bg-ink font-semibold" style={{ color: p.color }}>
                      <span className="swap-front flex items-center gap-2 px-4 py-2">
                        {t.caseStudy}
                        <Arrow />
                      </span>
                      <span
                        aria-hidden="true"
                        className="swap-back flex items-center justify-center gap-2 bg-cream text-ink"
                      >
                        {t.openCase}
                        <Arrow />
                      </span>
                    </span>
                  </div>
                  <ProjectVisual project={p} lang={lang} className="min-h-[280px] flex-1" />
                  {p.sticker && (
                    <span
                      aria-label={p.badge?.[lang]}
                      className="absolute -top-4 -end-2 z-[6] flex size-28 rotate-12 flex-col items-center justify-center rounded-full border-[3px] border-ink bg-flame text-ink sm:size-32"
                    >
                      <span className="font-display text-3xl leading-none font-extrabold sm:text-4xl">{p.sticker.big[lang]}</span>
                      <span className="text-[11px] font-extrabold tracking-wide uppercase sm:text-xs">{p.sticker.small[lang]}</span>
                    </span>
                  )}
                </div>
              </Reveal>
            ) : (
              <Reveal key={p.slug} delay={(i % 3) * 0.06}>
                <div
                  className="group swap-trigger relative flex h-full flex-col gap-4 rounded-tile p-8 text-ink transition-transform hover:-translate-y-1"
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
                  <span className="swap self-start rounded-full bg-ink font-semibold" style={{ color: p.color }}>
                    <span className="swap-front flex items-center gap-2 px-4 py-2">
                      {t.caseStudy}
                      <Arrow />
                    </span>
                    <span
                      aria-hidden="true"
                      className="swap-back flex items-center justify-center gap-2 bg-cream text-ink"
                    >
                      {t.openCase}
                      <Arrow />
                    </span>
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
                    } ${dark ? "text-cream dark:border dark:border-line" : "text-ink"}`}
                    style={{ background: c.color }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <Image
                        src={c.logo}
                        alt=""
                        width={big ? 160 : 96}
                        height={big ? 160 : 96}
                        className={`rounded-[1.4rem] object-cover shadow-[0_14px_30px_-14px_rgba(0,0,0,0.55)] ${
                          dark ? "ring-2 ring-white/35" : ""
                        } ${
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
                            <span className="absolute inline-flex size-full animate-ping rounded-full bg-live motion-reduce:hidden" />
                            <span className="relative inline-flex size-2 rounded-full bg-live" />
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
                    <div className="mt-auto flex flex-wrap items-end justify-between gap-x-6 gap-y-4 lg:flex-nowrap">
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
                          className={`flex shrink-0 items-baseline gap-2 rounded-2xl px-4 py-3 lg:px-3.5 lg:py-2.5 ${dark ? "bg-white text-ink" : "bg-ink text-white"}`}
                        >
                          <span className="font-display text-4xl leading-none lg:text-3xl font-extrabold">
                            {c.stat.value[lang]}
                          </span>
                          <span className="lg:text-sm">{c.stat.label[lang]}</span>
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
            <div className="flex flex-col gap-4 text-lg" dir="ltr">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 font-semibold underline-offset-4 hover:underline"
              >
                <MailIcon className="size-6 shrink-0" />
                {profile.email}
              </a>
              <div className="flex flex-wrap gap-x-7 gap-y-3">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 underline-offset-4 hover:underline"
                >
                  <LinkedInIcon className="size-[22px] shrink-0" />
                  LinkedIn
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 underline-offset-4 hover:underline"
                >
                  <GitHubIcon className="size-[22px] shrink-0" />
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
