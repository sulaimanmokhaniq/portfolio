import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow } from "@/components/arrow";
import { ProjectArt } from "@/components/project-art";
import { Reveal } from "@/components/reveal";
import { hasLocale, locales, profile, projects, ui } from "@/content/site";

export function generateStaticParams() {
  return locales.flatMap((lang) => projects.map((p) => ({ lang, slug: p.slug })));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/work/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!hasLocale(lang) || !project) return {};
  return { title: project.name[lang], description: project.summary[lang] };
}

export default async function ProjectPage({ params }: PageProps<"/[lang]/work/[slug]">) {
  const { lang, slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (!hasLocale(lang) || index === -1) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];
  const t = ui[lang];

  return (
    <main className="mx-auto max-w-[1280px] px-4 pt-4 pb-10 sm:px-6">
      <Link
        href={`/${lang}#work`}
        className="mb-4 inline-flex min-h-11 items-center gap-2 rounded-full px-2 text-muted hover:text-text"
      >
        <Arrow className="rotate-180" />
        {t.back}
      </Link>

      <Reveal>
        <section
          className="grid grid-cols-1 gap-8 rounded-tile p-8 text-ink sm:p-12 lg:grid-cols-2"
          style={{ background: project.color }}
        >
          <div className="flex flex-col justify-end gap-5">
            {project.badge && (
              <span className="self-start rounded-full bg-ink px-3 py-1.5 text-sm" style={{ color: project.color }}>
                {project.badge[lang]}
              </span>
            )}
            <span className="font-medium">{project.kind[lang]}</span>
            <h1 className="font-display text-[clamp(3rem,7vw,6.5rem)] leading-[0.95] font-extrabold tracking-tight">
              {project.name[lang]}
            </h1>
            <p className="max-w-lg text-xl leading-relaxed">{project.summary[lang]}</p>
          </div>
          <ProjectArt project={project} className="min-h-[320px]" />
        </section>
      </Reveal>

      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Reveal className="lg:col-span-2">
          <article className="h-full rounded-tile border border-line bg-surface p-8 sm:p-10">
            <h2 className="mb-4 font-display text-3xl font-extrabold">{t.overview}</h2>
            <p className="mb-10 text-lg leading-relaxed text-muted">{project.overview[lang]}</p>
            <h2 className="mb-4 font-display text-3xl font-extrabold">{t.highlights}</h2>
            <ul className="space-y-4">
              {project.highlights[lang].map((h) => (
                <li key={h} className="flex gap-4 text-lg leading-relaxed">
                  <span className="mt-2.5 size-2.5 shrink-0 rounded-full" style={{ background: project.shade }} />
                  {h}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
        <Reveal delay={0.08}>
          <aside className="flex h-full flex-col gap-8 rounded-tile bg-hero p-8 text-hero-text sm:p-10">
            <div>
              <h2 className="mb-3 text-hero-muted">{t.stack}</h2>
              <ul className="flex flex-wrap gap-2" dir="ltr">
                {project.stack.map((s) => (
                  <li key={s} className="rounded-full bg-hero-chip px-3.5 py-2 text-[15px]">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-2 text-hero-muted">{t.period}</h2>
              <p className="text-xl">{project.period[lang]}</p>
            </div>
          </aside>
        </Reveal>
      </div>

      <Reveal>
        <Link
          href={`/${lang}/work/${next.slug}`}
          className="group mt-4 flex flex-wrap items-center justify-between gap-4 rounded-tile p-8 text-ink transition-transform hover:-translate-y-1 sm:p-10"
          style={{ background: next.color }}
        >
          <span>
            <span className="block font-medium">{t.nextProject}</span>
            <span className="font-display text-4xl font-extrabold sm:text-5xl">{next.name[lang]}</span>
          </span>
          <Arrow className="size-10 transition-transform group-hover:translate-x-2 rtl:group-hover:-translate-x-2" />
        </Link>
      </Reveal>

      <footer className="flex flex-wrap justify-between gap-2 px-2 pt-8 text-sm text-muted">
        <span>© 2026 {profile.name[lang]}</span>
        <a href={`mailto:${profile.email}`} className="hover:text-text">
          {profile.email}
        </a>
      </footer>
    </main>
  );
}
