import type { Locale, Project } from "@/content/site";

// Three quick facts about a project on a dark bar, values in the project's own colour.
// Phones list them as rows so long words never break; wider screens show three columns.
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
    <dl
      className={`grid grid-cols-1 rounded-2xl bg-ink px-4 py-1 text-cream sm:grid-cols-3 sm:px-0 sm:py-4 ${className}`}
    >
      {project.results.map((r, k) => (
        <div
          key={k}
          className={`flex items-baseline gap-3 py-3 sm:flex-col sm:items-stretch sm:gap-1 sm:px-4 sm:py-0 ${k ? "border-t border-white/15 sm:border-t-0 sm:border-s" : ""}`}
        >
          <dt className="order-2 min-w-0 text-sm leading-snug break-words">{r.label[lang]}</dt>
          <dd
            dir="auto"
            className="min-w-20 shrink-0 font-display text-xl leading-none font-extrabold whitespace-nowrap sm:min-w-0 sm:text-2xl sm:whitespace-normal rtl:text-right"
            style={{ color: project.color }}
          >
            {r.value[lang]}
          </dd>
        </div>
      ))}
    </dl>
  );
}
