"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IMAGES } from "@/lib/images";
import { SITE } from "@/lib/site";

const NAV = [
  { href: "/", label: "Forside" },
  { href: "/ydelser", label: "Ydelser" },
  { href: "/om-os", label: "Om os" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

function clsNav(active: boolean) {
  return active
    ? "text-primary underline decoration-primary underline-offset-8 decoration-2"
    : "text-on-surface hover:text-primary";
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-header-border bg-surface-container-lowest">
      <div className="mx-auto flex max-w-[var(--container-max-width)] items-center justify-between gap-4 px-[24px] py-4">
        <Link
          href="/"
          className="relative block shrink-0 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          <Image
            src={IMAGES.logo}
            alt={SITE.name}
            width={1024}
            height={319}
            className="h-[50px] w-auto object-contain object-left md:h-[50px]"
            priority
       
          />
        </Link>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Hovednavigation">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-display text-[15px] font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary rounded-sm ${clsNav(pathname === item.href)}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 md:gap-6">
          <Link
            href="/kontakt"
            className="hidden whitespace-nowrap rounded-base bg-accent-cta px-5 py-2.5 text-center font-display text-sm font-bold text-on-accent-cta shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:inline-flex"
          >
            Få et tilbud
          </Link>

          <button
            type="button"
            className="inline-flex rounded-base p-2 text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:hidden"
            aria-expanded={open}
            aria-controls="mobil-navigation"
            onClick={() => setOpen((x) => !x)}
          >
            <span className="sr-only">{open ? "Luk menu" : "Åbn menu"}</span>
            {!open ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobil-navigation"
          role="dialog"
          aria-modal
          aria-label="Navigation"
          className="fixed inset-0 top-[94.5px] z-40 overflow-y-auto bg-surface-container-lowest md:hidden"
        >
          <div className="flex flex-col gap-8 px-[24px] py-10 pb-24">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-display text-xl font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary rounded-sm ${clsNav(pathname === item.href)}`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="rounded-base bg-accent-cta px-5 py-3 text-center font-display text-base font-bold text-on-accent-cta focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-inverse-surface"
              onClick={() => setOpen(false)}
            >
              Få et tilbud
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
