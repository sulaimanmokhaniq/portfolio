import type { Locale, Project } from "@/content/site";

// Three quick facts about a project on a dark bar, values in the project's own colour.
export function ResultsStrip({
  project,
  lang,
  className = "",
}: {
  project: Project;
  lang: Locale;
  className?: string;
}) {
  if (!project.results) return null;
  return (
    <dl className={`grid grid-cols-3 rounded-2xl bg-ink py-4 text-cream ${className}`}>
      {project.results.map((r, k) => (
        <div key={k} className={`flex flex-col gap-1 px-3 sm:px-4 ${k ? "border-s border-white/15" : ""}`}>
          <dt className="order-2 text-xs leading-snug sm:text-sm">{r.label[lang]}</dt>
          <dd
            dir="auto"
            className="font-display text-xl leading-none font-extrabold sm:text-2xl rtl:text-right"
            style={{ color: project.color }}
          >
            {r.value[lang]}
          </dd>
        </div>
      ))}
    </dl>
  );
}
