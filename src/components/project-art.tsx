import Image from "next/image";
import type { Locale, Project } from "@/content/site";

/** A project's cover: its first screenshot in a window frame, or stand-in artwork until one is added. */
export function ProjectArt({
  project,
  lang,
  className = "",
  priority = false,
}: {
  project: Project;
  lang: Locale;
  className?: string;
  priority?: boolean;
}) {
  const cover = project.images?.[0];
  const glyph = project.arabicName ?? project.name.en.slice(0, 2);
  return (
    <div className={`relative overflow-hidden rounded-[1.25rem] ${className}`} style={{ background: project.shade }}>
      <div className="absolute inset-x-5 top-5 bottom-0 overflow-hidden rounded-t-2xl bg-white/45 shadow-[0_-1px_0_rgba(0,0,0,0.04)]">
        {cover ? (
          <Image
            src={cover.src}
            alt={cover.alt[lang]}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 600px, 100vw"
            className="object-cover object-top"
          />
        ) : (
          <div aria-hidden="true" className="p-3">
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
        )}
      </div>
      {!cover && (
        <span
          aria-hidden="true"
          lang={project.arabicName ? "ar" : "en"}
          className="absolute -bottom-3 end-4 font-display text-[7rem] leading-none font-extrabold text-ink"
        >
          {glyph}
        </span>
      )}
    </div>
  );
}
