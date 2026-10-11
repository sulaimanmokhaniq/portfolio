import type { Project } from "@/content/site";

/** Stand-in artwork until real screenshots are added for a project. */
export function ProjectArt({ project, className = "" }: { project: Project; className?: string }) {
  const glyph = project.arabicName ?? project.name.en.slice(0, 2);
  return (
    <div
      aria-hidden="true"
      className={`relative overflow-hidden rounded-[1.25rem] ${className}`}
      style={{ background: project.shade }}
    >
      <div className="absolute inset-x-5 top-5 bottom-0 rounded-t-2xl bg-white/45 p-3 shadow-[0_-1px_0_rgba(0,0,0,0.04)]">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-ink/25" />
          <span className="size-2.5 rounded-full bg-ink/25" />
          <span className="size-2.5 rounded-full bg-ink/25" />
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2">
          <span className="col-span-2 h-3 rounded-full bg-ink/15" />
          <span className="h-3 rounded-full bg-ink/10" />
          <span className="h-3 rounded-full bg-ink/10" />
          <span className="col-span-2 h-3 rounded-full bg-ink/15" />
        </div>
      </div>
      <span
        lang={project.arabicName ? "ar" : "en"}
        className="absolute -bottom-6 end-4 font-display text-[7rem] leading-none font-extrabold text-ink/85"
      >
        {glyph}
      </span>
    </div>
  );
}
