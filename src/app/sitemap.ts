import type { MetadataRoute } from "next";
import { locales, projects } from "@/content/site";

const base = "https://sulaiman.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((lang) => [
    { url: `${base}/${lang}` },
    ...projects.map((p) => ({ url: `${base}/${lang}/work/${p.slug}` })),
  ]);
}
