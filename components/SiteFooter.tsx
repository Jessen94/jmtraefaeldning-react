import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/lib/images";
import { SITE } from "@/lib/site";

const YEAR = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer className="bg-inverse-surface py-14 text-on-inverse-surface md:py-[4.5rem]">
      <div className="mx-auto grid max-w-[var(--container-max-width)] gap-12 px-[24px] md:grid-cols-12 md:gap-10">
        <div className="md:col-span-5 lg:col-span-4">
          <Link
            href="/"
            className="inline-block rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-cta"
          >
            <Image
              src={IMAGES.logo}
              alt={SITE.name}
              width={1024}
              height={1024}
              className="h-auto w-full max-w-[200px] object-contain object-left"
            />
          </Link>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-on-inverse-surface/85">{SITE.tagline}</p>
          <p className="mt-6 text-sm text-on-inverse-surface/70">
            © {YEAR} {SITE.name}.
          </p>
        </div>

        <div className="md:col-span-4 lg:col-span-3">
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-on-inverse-surface/90">
            Ydelser
          </h2>
          <p className="mt-5 text-[15px] text-on-inverse-surface/85">
            <Link
              href="/ydelser"
              className="font-semibold underline decoration-on-inverse-surface/40 underline-offset-4 hover:decoration-on-inverse-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-cta rounded-sm"
            >
              Se alle ydelser
            </Link>
          </p>
        </div>

        <div className="md:col-span-3 lg:col-span-5">
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-on-inverse-surface/90">
            Kontakt
          </h2>
          <ul className="mt-5 space-y-4 text-[15px]">
            <li className="flex items-start gap-3">
              <span className="mt-0.5 shrink-0 text-on-inverse-surface/70" aria-hidden>
                <PhoneIcon />
              </span>
              <a
                href={`tel:${SITE.tel.replace(/\s/g, "")}`}
                className="text-on-inverse-surface/85 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-cta rounded-sm"
              >
                {SITE.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 shrink-0 text-on-inverse-surface/70" aria-hidden>
                <MailIcon />
              </span>
              <a
                href={`mailto:${SITE.email}`}
                className="break-all text-on-inverse-surface/85 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-cta rounded-sm"
              >
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

function PhoneIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}
