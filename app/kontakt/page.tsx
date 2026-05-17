import Image from "next/image";
import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { FAQS } from "@/lib/faq";
import { IMAGES } from "@/lib/images";
import { SITE } from "@/lib/site";
import { faqPageJsonLd, jsonLdScript } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Kontakt – Få et uforpligtende tilbud på træfældning",
  description: `Kontakt ${SITE.name} på ${SITE.phoneDisplay} eller ${SITE.email} for et uforpligtende tilbud på træfældning, beskæring eller anden træpleje i hele Danmark.`,
  alternates: { canonical: "/kontakt" },
  openGraph: {
    type: "website",
    url: `${SITE.url}/kontakt/`,
    title: `Kontakt ${SITE.name} – Få et tilbud på træfældning`,
    description: `Ring ${SITE.phoneDisplay} eller skriv til ${SITE.email}. Vi vender hurtigt tilbage med et uforpligtende tilbud.`,
  },
  twitter: {
    card: "summary_large_image",
    title: `Kontakt ${SITE.name} – Få et tilbud på træfældning`,
    description: `Ring ${SITE.phoneDisplay} eller skriv til ${SITE.email}. Vi vender hurtigt tilbage med et uforpligtende tilbud.`,
  },
};

export default function KontaktPage() {
  return (
    <div className="border-t border-card-border bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(faqPageJsonLd(FAQS))} />
      <section className="relative border-b border-card-border md:grid md:grid-cols-12">
        <div className="relative aspect-[4/5] md:col-span-5 md:aspect-auto md:min-h-[32rem]">
          <Image
            src={IMAGES.jensWithCat}
            alt={`${SITE.founder}, indehaver af ${SITE.name}, med kat`}
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
              Få et uforpligtende tilbud på din træ­opgave
            </h1>
            <p className="mt-6 text-lg text-on-surface-variant">
              Har du et træ, der skal fældes eller beskæres? Ring eller skriv en kort besked om opgaven, så vender jeg
              hurtigt tilbage. Jeg kører i hele Danmark fra min base i Midtjylland.
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

      <section className="mx-auto max-w-2xl px-[24px] py-14 md:py-20">
        <h2 className="font-display text-2xl font-bold text-primary">Send en besked</h2>
        <ContactForm />
      </section>

      <section
        aria-labelledby="faq-titel"
        className="border-t border-card-border bg-surface-container-lowest py-14 md:py-20 lg:pb-28"
      >
        <div className="mx-auto max-w-3xl px-[24px]">
          <h2 id="faq-titel" className="font-display text-3xl font-bold text-primary md:text-4xl">
            Ofte stillede spørgsmål
          </h2>
          <p className="mt-4 text-on-surface-variant">
            Svar på de spørgsmål, vi oftest får om træfældning, priser, forsikring og områder.
          </p>
          <dl className="mt-10 divide-y divide-card-border border-y border-card-border">
            {FAQS.map((faq) => (
              <details
                key={faq.question}
                className="group py-5 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-start justify-between gap-6 font-display text-lg font-semibold text-on-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary rounded-sm">
                  <dt className="flex-1">{faq.question}</dt>
                  <span
                    aria-hidden
                    className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center text-primary transition-transform group-open:rotate-45"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <dd className="mt-3 pr-12 text-on-surface-variant">{faq.answer}</dd>
              </details>
            ))}
          </dl>
        </div>
      </section>
    </div>
  );
}
