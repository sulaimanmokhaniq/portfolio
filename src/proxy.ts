import { NextResponse, type NextRequest } from "next/server";
import { projects } from "@/content/site";

const slugs = new Set(projects.map((p) => p.slug));

// Unknown case-study links get a real 404 status (the page itself streams, so it can't set one late).
export function proxy(request: NextRequest) {
  const [, lang, , slug] = request.nextUrl.pathname.split("/");
  if (slugs.has(slug)) return NextResponse.next();
  return NextResponse.rewrite(new URL(`/${lang}/missing`, request.url), { status: 404 });
}

export const config = { matcher: "/:lang(en|ar)/work/:slug" };
