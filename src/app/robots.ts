import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: "https://portfolio-phi-ashy-18.vercel.app/sitemap.xml" };
}
