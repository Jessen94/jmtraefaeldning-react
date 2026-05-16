import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { IMAGES } from "@/lib/images";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Om os",
  description: `Lær ${SITE.name} bedre at kende — erfaren træpleje med fokus på sikkerhed og kundetæt samarbejde.`,
};

export default function OmOsPage() {
  return (
    <div className="border-t border-card-border bg-background pb-16 md:pb-[7.5rem]">
      <header className="border-b border-card-border bg-surface-container-lowest py-14 md:py-[4.5rem]">
        <div className="mx-auto max-w-[56rem] px-[24px] text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-wide text-primary">Om os</p>
          <h1 className="mt-3 font-display text-4xl font-bold text-primary md:text-5xl">Mennesket bag motorsaven</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-on-surface-variant">{SITE.tagline}</p>
        </div>
      </header>

      <section className="mx-auto grid max-w-[var(--container-max-width)] items-start gap-12 px-[24px] pt-16 md:grid-cols-2 md:gap-16 lg:items-center lg:pt-20">
        <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-card-border shadow-[0_12px_40px_rgba(21,66,18,0.09)] lg:sticky lg:top-32">
          <Image
            src={IMAGES.erhverv}
            alt="Portræt af Jens Moesgaard i fuld friluftsudrustning ved træfældning"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 45vw, 100vw"
            priority
          />
        </div>
        <div>
          <h2 className="font-display text-3xl font-bold text-primary md:text-[2rem] md:leading-10">
            Erfaring, ro og ordentlig kommunikation
          </h2>
          <p className="mt-6 text-on-surface-variant">
            Hos {SITE.name} er træerne ikke blot &quot;rå materiale&quot;. Hvert projekt kræver forberedelse, respekt for
            omgivelser og en klar aftale om, hvordan vi arbejder sikkert sammen på grunden.
          </p>
          <p className="mt-5 text-on-surface-variant">
            Jeg hedder Jens Moesgaard og driver virksomheden med ambitionen om at kombinere faglig stolthed og
            jordnær kontakt til kunder og naboer. Du møder den samme person fra rådgivning til nedtag og oprydning.
          </p>
          <p className="mt-5 text-on-surface-variant">
            Sikkerhed, miljøhensyn og dokumentation rundt om opgaven er en naturlig del af måden vi arbejder på —
            ikke noget du skal spørge særskilt efter.
          </p>

          <div className="mt-12 flex flex-wrap gap-4 rounded-lg border border-card-border bg-surface-container-lowest p-6">
            <div>
              <p className="font-display text-[0.6875rem] font-semibold uppercase tracking-wider text-on-surface-variant">
                Arbejdsgange
              </p>
              <p className="mt-2 text-sm text-on-surface-variant">
                Risikovurdering · afspærring · dokumenteret forsikring på forespørgsel
              </p>
            </div>
          </div>

          <Link
            href="/kontakt"
            className="mt-10 inline-flex min-h-[48px] items-center rounded-base bg-accent-cta px-8 py-3.5 font-display text-base font-bold text-on-accent-cta hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            Kontakt mig om din opgave
          </Link>
        </div>
      </section>
    </div>
  );
}
