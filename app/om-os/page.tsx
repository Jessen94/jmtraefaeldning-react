import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { IMAGES } from "@/lib/images";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Om os – Jens Mosegaard, skov- og naturtekniker",
  description: `Mød Jens Mosegaard, indehaver af ${SITE.name}. Uddannet skov- og naturtekniker med speciale i skov- og naturpleje. Base i Midtjylland — kører i hele Danmark.`,
  alternates: { canonical: "/om-os" },
  openGraph: {
    type: "profile",
    url: `${SITE.url}/om-os/`,
    title: `Om os – Jens Mosegaard og ${SITE.name}`,
    description: `Jens Mosegaard er uddannet skov- og naturtekniker og har arbejdet professionelt med fældning, beskæring og skovpleje siden 2019. Base i Midtjylland, kører i hele Danmark.`,
  },
  twitter: {
    card: "summary_large_image",
    title: `Om os – Jens Mosegaard og ${SITE.name}`,
    description: `Jens Mosegaard – uddannet skov- og naturtekniker. Professionelt arbejde med fældning, beskæring og skovpleje siden 2019.`,
  },
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
            src={IMAGES.jensCutting}
            alt={`${SITE.founder} fra ${SITE.name} i gang med professionel træfældning`}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 45vw, 100vw"
            priority
          />
        </div>
        <div>
          <h2 className="font-display text-3xl font-bold text-primary md:text-[2rem] md:leading-10">
            Fagmand med respekt for sikkerhed, kvalitet og natur
          </h2>
          <p className="mt-6 text-on-surface-variant">
            Mit navn er {SITE.founder}, og jeg er indehaver af {SITE.name}. Hos os får du en fagmand med hænderne
            skruet rigtigt på — med stor respekt for både sikkerhed, kvalitet og naturen.
          </p>
          <p className="mt-5 text-on-surface-variant">
            Jeg er uddannet <strong className="font-semibold text-on-surface">skov- og naturtekniker</strong> med
            speciale i skov- og naturpleje, og har siden 2019 arbejdet professionelt med fældning, beskæring og
            skovpleje rundt omkring i Danmark.
          </p>
          <p className="mt-5 text-on-surface-variant">
            Jeg går op i at levere et ordentligt stykke arbejde — uanset om det er en enkelt haveopgave eller en større
            fældningsopgave. Du kan derfor forvente en løsning, der er både sikker, effektiv og tilpasset dine behov.
          </p>
          <p className="mt-5 text-on-surface-variant">
            Jeg holder til i <strong className="font-semibold text-on-surface">Midtjylland</strong> — og jeg kører
            gerne ud i hele landet. Har du et træ, der skal fældes eller beskæres? Så er du altid velkommen til at tage
            fat i mig for en uforpligtende snak.
          </p>

          <div className="mt-12 grid gap-4 rounded-lg border border-card-border bg-surface-container-lowest p-6 sm:grid-cols-2">
            <div>
              <p className="font-display text-[0.6875rem] font-semibold uppercase tracking-wider text-on-surface-variant">
                Uddannelse
              </p>
              <p className="mt-2 text-sm text-on-surface-variant">
                Skov- og naturtekniker · speciale i skov- og naturpleje
              </p>
            </div>
            <div>
              <p className="font-display text-[0.6875rem] font-semibold uppercase tracking-wider text-on-surface-variant">
                Erfaring
              </p>
              <p className="mt-2 text-sm text-on-surface-variant">
                Professionelt arbejde med træ siden {SITE.foundingYear}
              </p>
            </div>
            <div>
              <p className="font-display text-[0.6875rem] font-semibold uppercase tracking-wider text-on-surface-variant">
                Område
              </p>
              <p className="mt-2 text-sm text-on-surface-variant">
                Base i Midtjylland · kører i hele Danmark
              </p>
            </div>
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
