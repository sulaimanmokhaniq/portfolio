import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Bricolage_Grotesque, Readex_Pro } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { hasLocale, locales, profile, ui } from "@/content/site";
import "../globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

const readex = Readex_Pro({
  variable: "--font-readex",
  subsets: ["latin", "arabic"],
  weight: ["400", "500", "600"],
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const title = `${profile.name[lang]} · ${profile.role[lang]}`;
  return {
    metadataBase: new URL("https://sulaiman.vercel.app"),
    title: { default: title, template: `%s · ${profile.name[lang]}` },
    description: ui[lang].heroBody,
    alternates: { languages: { en: "/en", ar: "/ar" } },
    openGraph: { title, description: ui[lang].heroBody, type: "website", locale: lang },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html
      lang={lang}
      dir={lang === "ar" ? "rtl" : "ltr"}
      className={`${bricolage.variable} ${readex.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen font-sans">
        <ThemeProvider>
          <Header lang={lang} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
