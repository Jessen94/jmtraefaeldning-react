import type { Metadata } from "next";
import { Montserrat, Work_Sans } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SITE } from "@/lib/site";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  variable: "--font-montserrat",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-work-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: SITE.name,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="da"
      className={`h-full scroll-smooth antialiased ${montserrat.variable} ${workSans.variable}`}
    >
      <body className="min-h-full flex flex-col bg-background font-sans text-base leading-relaxed text-pretty text-on-surface">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
