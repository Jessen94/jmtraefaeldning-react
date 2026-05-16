import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { IMAGES } from "@/lib/images";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ydelser",
  description: "Træfældning, beskæring, topkapning, buskrydning og maskinkørsel med fokus på sikkerhed og kvalitet.",
};

function TreeIcon() {
  return (
    <svg className="h-7 w-7 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 4v16M8 10l4-4 4 4M8 14l4 4 4-4" />
    </svg>
  );
}

function ShearsIcon() {
  return (
    <svg className="h-7 w-7 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
      <circle cx="9" cy="7" r="3" strokeWidth={1.75} />
      <circle cx="15" cy="7" r="3" strokeWidth={1.75} />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M6 21l8-14M14 21L6 7" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg className="h-7 w-7 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M4 20c8-4 12-14 12-18S8 6 4 20z"
      />
    </svg>
  );
}

function TractorIcon() {
  return (
    <svg className="h-7 w-7 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M5 17h2.5l1.8-6h7.4l1.8 4H19M9 17a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zm5.5 0h2.5M17 17a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0z"
      />
    </svg>
  );
}

export default function YdelserPage() {
  return (
    <>
      <section className="border-b border-card-border bg-surface-container-lowest py-16 md:py-20">
        <div className="mx-auto max-w-[56rem] px-[24px] text-center">
          <h1 className="font-display text-4xl font-bold text-primary md:text-5xl">Vores professionelle ydelser</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-on-surface-variant">
            Vi kombinerer specialudstyr, erfaring og planlægning, så træerne fjernes eller plejes sikkert — uanset om
            det er på smalle bygrunde, ved bebyggelse eller på større arealer.
          </p>
        </div>
      </section>

      <section
        id="traeffelding-beskaering"
        className="scroll-mt-28 border-b border-card-border bg-background py-16 md:py-[7.5rem]"
      >
        <div className="mx-auto max-w-[var(--container-max-width)] px-[24px]">
          <div className="overflow-hidden rounded-lg border border-card-border bg-surface-container-lowest shadow-[0_12px_40px_rgba(21,66,18,0.1)] lg:grid lg:grid-cols-12">
            <div className="relative aspect-[16/14] lg:col-span-5 lg:aspect-auto lg:min-h-[26rem]">
              <Image
                src={IMAGES.erhverv}
                alt="Professionel træfældning med motorsav"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 41vw, 100vw"
                priority
              />
            </div>
            <div className="flex flex-col justify-center p-8 lg:col-span-7 lg:p-12">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-base bg-primary-container/25">
                <TreeIcon />
              </span>
              <h2 className="mt-8 font-display text-3xl font-bold text-primary">Træfældning &amp; beskæring</h2>
              <p className="mt-4 text-on-surface-variant">
                Sikker nedtagning med kontrollerede snit, afspærring hvor der er behov og løbende dialog med dig som
                kunde. Beskæring tilpasses træets art og vækstforhold, så det forbliver sundt og balanceret i mange år.
              </p>
              <Link
                href="/kontakt"
                className="mt-8 inline-flex w-fit items-center gap-2 font-display text-sm font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary rounded-sm"
              >
                Læs mere om træfældning <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="border-b border-card-border bg-background py-16 md:py-[7.5rem]">
        <div className="mx-auto grid max-w-[var(--container-max-width)] grid-cols-1 gap-8 px-[24px] sm:grid-cols-2 sm:gap-x-10 sm:gap-y-10 lg:gap-12">
          <article
            id="topkapning"
            className="flex scroll-mt-28 flex-col rounded-lg border border-card-border bg-surface-container-lowest p-8 shadow-[0_8px_28px_rgba(21,66,18,0.06)]"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-base bg-primary-container/25">
              <ShearsIcon />
            </span>
            <h2 className="mt-8 font-display text-2xl font-bold text-primary">Topkapning</h2>
            <p className="mt-4 flex-1 text-on-surface-variant">
              Når hele træet ikke kan fældes på én gang, arbejder vi sektion for sektion — ideelt i tætte haver eller
              langs bygninger.
            </p>
            <Link
              href="/kontakt"
              className="mt-6 font-display text-sm font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary rounded-sm"
            >
              Læs mere <span aria-hidden>→</span>
            </Link>
          </article>

          <article
            id="buskrydning"
            className="flex scroll-mt-28 flex-col rounded-lg border border-card-border bg-surface-container-lowest p-8 shadow-[0_8px_28px_rgba(21,66,18,0.06)]"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-base bg-primary-container/25">
              <LeafIcon />
            </span>
            <h2 className="mt-8 font-display text-2xl font-bold text-primary">Buskrydning &amp; hæk</h2>
            <p className="mt-4 flex-1 text-on-surface-variant">
              Effektiv klipning af buske og klargøring af hæk med pæne kanter og fokus på et ensartet resultat år efter år.
            </p>
            <Link
              href="/kontakt"
              className="mt-6 font-display text-sm font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary rounded-sm"
            >
              Læs mere <span aria-hidden>→</span>
            </Link>
          </article>

          <article
            id="maskinkoersel"
            className="flex scroll-mt-28 flex-col rounded-lg border border-card-border bg-surface-container-lowest p-8 shadow-[0_8px_28px_rgba(21,66,18,0.06)] sm:col-span-2 sm:w-full sm:max-w-xl sm:justify-self-center"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-base bg-primary-container/25">
              <TractorIcon />
            </span>
            <h2 className="mt-8 font-display text-2xl font-bold text-primary">Maskinkørsel</h2>
            <p className="mt-4 flex-1 text-on-surface-variant">
              Ved større mængder grene eller flistræk hjælper maskiner med at friholde dit areal hurtigt og skånsomt for
              omgivelserne.
            </p>
            <Link
              href="/kontakt"
              className="mt-6 font-display text-sm font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary rounded-sm"
            >
              Læs mere <span aria-hidden>→</span>
            </Link>
          </article>
        </div>
      </div>

      <section className="relative overflow-hidden px-[24px] py-16 md:py-28">
        <div className="absolute inset-0 bg-primary" aria-hidden />
        <Image
          src={IMAGES.banner}
          alt=""
          fill
          className="object-cover opacity-[0.15]"
          sizes="100vw"
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.55]"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.16) 1px, transparent 1px)",
            backgroundSize: "14px 14px",
          }}
          aria-hidden
        />

        <div className="relative z-10 mx-auto max-w-3xl py-10 text-center text-on-primary">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Klar til at komme videre?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-on-primary/90">
            Fortæl kort om opgaven, så vender vi hurtigt tilbage med sparring og et uforpligtende tilbud.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/kontakt"
              className="inline-flex min-h-[48px] items-center rounded-base bg-accent-cta px-8 py-3.5 font-display text-base font-bold text-on-accent-cta shadow-sm hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-on-primary"
            >
              Få et tilbud nu
            </Link>
            <Link
              href={`tel:${SITE.tel.replace(/\s/g, "")}`}
              className="inline-flex min-h-[48px] items-center rounded-base border-2 border-on-primary px-8 py-3.5 font-display text-base font-semibold text-on-primary hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-on-primary"
            >
              Ring til os
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
