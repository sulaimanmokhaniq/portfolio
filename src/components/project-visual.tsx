import { LiveSite } from "@/components/live-site";
import { PhoneDemo } from "@/components/phone-demo";
import { ProjectArt } from "@/components/project-art";
import { ui, type Locale, type Project } from "@/content/site";

/** Whether the project's live site can be opened inside the page. */
export function canEmbed(project: Project) {
  return Boolean(project.link) && project.linkKind !== "code" && project.embed !== false;
}

/**
 * A project's picture: a tappable phone for apps with phone screens, otherwise its cover in a
 * browser window with a "Try it live" button when the real site can be loaded.
 * Sits above the card's stretched link (z-10) so its buttons work.
 */
export function ProjectVisual({
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
  const t = ui[lang];

  if (project.phone) {
    return (
      <div
        className={`relative z-10 flex items-center justify-center rounded-[1.25rem] px-4 py-7 ${className}`}
        style={{ background: project.shade }}
      >
        <PhoneDemo
          shots={project.phone.map((s) => ({ src: s.src, alt: s.alt[lang] }))}
          label={`${project.name[lang]} · ${t.appScreens}`}
          prevLabel={t.prevScreen}
          nextLabel={t.nextScreen}
          rtl={lang === "ar"}
        />
      </div>
    );
  }

  const live = canEmbed(project) ? project.link : undefined;
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0">
        <ProjectArt project={project} lang={lang} priority={priority} url={live} className="size-full" />
      </div>
      {live && (
        <LiveSite
          url={live}
          title={project.name[lang]}
          tryLabel={t.tryLive}
          openLabel={t.openSite}
          closeLabel={t.close}
        />
      )}
    </div>
  );
}
