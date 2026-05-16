import Image from "next/image";
import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { IMAGES } from "@/lib/images";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description: `Kontakt ${SITE.name} for et uforpligtende tilbud på træpleje eller fældning.`,
};

export default function KontaktPage() {
  return (
    <div className="border-t border-card-border bg-background">
      <section className="relative border-b border-card-border md:grid md:grid-cols-12">
        <div className="relative aspect-[4/5] md:col-span-5 md:aspect-auto md:min-h-[32rem]">
          <Image
            src={IMAGES.forside}
            alt="Grønt skovmiljø"
            fill
            className="object-cover object-center"
            sizes="(min-width: 768px) 42vw, 100vw"
            priority
          />
          <div className="absolute inset-0 bg-primary/55 mix-blend-multiply md:hidden" aria-hidden />
        </div>
        <div className="flex flex-col justify-center bg-surface-container-lowest px-[24px] py-14 md:col-span-7 md:py-20 md:pl-14 md:pr-20 lg:py-28">
          <div className="mx-auto max-w-xl">
            <p className="font-display text-sm font-semibold uppercase tracking-wide text-primary">Kontakt</p>
            <h1 className="mt-4 font-display text-4xl font-bold text-primary md:text-5xl">
              Lad os hjælpe med din træ­opgave
            </h1>
            <p className="mt-6 text-lg text-on-surface-variant">
              Du er velkommen til at sende besked herunder eller ringe, hvis det haster. Vi vender samme dag tilbage ved
              almindelige henvendelser.
            </p>
            <ul className="mt-10 space-y-6 text-[15px] text-on-surface">
              <li>
                <p className="font-display text-xs font-semibold uppercase tracking-wide text-on-surface-variant">
                  Ring
                </p>
                <a
                  className="mt-2 inline-block min-h-[44px] font-display text-xl font-semibold text-primary hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary rounded-sm"
                  href={`tel:${SITE.tel.replace(/\s/g, "")}`}
                >
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <p className="font-display text-xs font-semibold uppercase tracking-wide text-on-surface-variant">
                  Mail
                </p>
                <a
                  className="mt-2 inline-block min-h-[44px] text-lg hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary rounded-sm"
                  href={`mailto:${SITE.email}`}
                >
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-[24px] py-14 md:py-20 lg:pb-28">
        <h2 className="font-display text-2xl font-bold text-primary">Send en besked</h2>
        <ContactForm />
      </section>
    </div>
  );
}
