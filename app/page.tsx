import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { IMAGES } from "@/lib/images";
import { SERVICES_HOME } from "@/lib/services";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Forside",
  description: SITE.tagline,
};

function ServiceIcon({ name }: { name: (typeof SERVICES_HOME)[number]["icon"] }) {
  const common = "h-6 w-6 text-primary";
  switch (name) {
    case "tree":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 3v18M8 9l4-4 4 4M8 15l4 4 4-4" />
        </svg>
      );
    case "shears":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M9 6a3 3 0 106 0M6 9h12l-1 8H7L6 9z"
          />
        </svg>
      );
    case "height":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 4v16M8 8l4-4 4 4M8 16l4 4 4-4" />
        </svg>
      );
    case "tractor":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M4 16h3l2-6h6l2 4h3M7 16a2 2 0 11-4 0 2 2 0 014 0zm10 0a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      );
    default:
      return null;
  }
}

export default function HomePage() {
  return (
    <>
      <section className="relative flex min-h-[85svh] items-center justify-center px-[24px] py-20">
        <Image
          src={IMAGES.heroForest}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_28%]"
        />
        <div className="absolute inset-0 bg-white/50" aria-hidden />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <div className="mx-auto flex justify-center">
            <Image
              src={IMAGES.logo}
              alt={SITE.name}
              width={1024}
              height={1024}
              priority
              className="h-auto w-full max-w-[280px] object-contain md:max-w-[340px]"
              sizes="(max-width: 768px) 280px, 340px"
            />
          </div>
          <h1 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-on-surface md:mt-8 md:text-5xl md:leading-[1.1]">
            Professionel træpleje — præcist, sikkert og ansvarligt
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-on-surface-variant">
            Vi leverer kvalitetsarbejde til private og erhverv med fokus på sikkerhed, miljø og et resultat, du kan stole
            på i mange år.
          </p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
            <Link
              href="/kontakt"
              className="inline-flex justify-center rounded-base bg-accent-cta px-8 py-3.5 font-display text-base font-bold text-on-accent-cta shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary min-h-[48px]"
            >
              Få et tilbud
            </Link>
            <Link
              href="/ydelser"
              className="inline-flex justify-center rounded-base border-2 border-primary px-8 py-3.5 font-display text-base font-semibold text-primary hover:bg-primary/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary min-h-[48px]"
            >
              Læs mere
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-card-border bg-surface-container-lowest py-16 md:py-[7.5rem]">
        <div className="mx-auto grid max-w-[var(--container-max-width)] items-center gap-12 px-[24px] md:grid-cols-2 md:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-[0_12px_40px_var(--color-card-shadow)]">
            <Image
              src={IMAGES.erhverv}
              alt="Jens i sikkerhedsudstyr ved træfældning"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-[center_28%]"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">Hej, jeg er Jens.</h2>
            <p className="mt-6 text-on-surface-variant">
              Med års erfaring i træpleje og fældning hjælper jeg dig fra den første vurdering til området er ryddet og
              klar. Jeg arbejder kontrolleret, forklarer tydeligt og respekterer både din ejendom og naturen omkring os.
            </p>
            <Link
              href="/om-os"
              className="mt-8 inline-flex min-h-[44px] items-center gap-2 font-display text-sm font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary rounded-sm"
            >
              Jens Moesgaard
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-card-border bg-background py-16 md:py-[7.5rem]">
        <div className="mx-auto max-w-[var(--container-max-width)] px-[24px]">
          <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">Kerneydelser</h2>
          <p className="mt-4 max-w-2xl text-on-surface-variant">
            Fra enkelttræ til større oprydningsprojekter — vi har grejet og kompetencerne til opgaven.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:gap-8">
            {SERVICES_HOME.map((s) => (
              <Link
                key={s.id}
                href={s.href}
                className="group flex min-h-[44px] flex-col rounded-lg border border-card-border bg-surface-container-lowest p-6 shadow-[0_8px_28px_rgba(21,66,18,0.08)] transition hover:border-outline-variant focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary md:p-8"
              >
                <span className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-base bg-primary-container/25">
                  <ServiceIcon name={s.icon} />
                </span>
                <h3 className="font-display text-xl font-bold text-on-surface group-hover:text-primary">{s.title}</h3>
                <p className="mt-3 flex-1 text-on-surface-variant">{s.description}</p>
                <span className="mt-6 font-display text-sm font-semibold text-primary">
                  Læs mere <span aria-hidden>→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
