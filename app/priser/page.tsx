import Link from "next/link";
import type { Metadata } from "next";
import {
  ACCESS_LEVELS,
  EXTRAS,
  FELLING_TIERS,
  QUICK_GUIDE,
  formatDkk,
} from "@/lib/pricing";
import { SITE } from "@/lib/site";
import { jsonLdScript, priserServiceJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Priser – Vejledende priser på træfældning",
  description:
    "Se vejledende priser på træfældning fra JM Træfældning. Pristrin efter træets højde og adgangsforhold — inkl. fældning, opskæring og oprydning. Alle priser er inkl. moms.",
  alternates: { canonical: "/priser" },
  openGraph: {
    type: "website",
    url: `${SITE.url}/priser/`,
    title: `Priser – Vejledende priser på træfældning · ${SITE.name}`,
    description:
      "Vejledende priser på træfældning efter højde og adgangsforhold. Inkl. fældning, opskæring og oprydning på stedet. Alle priser er inkl. moms.",
  },
  twitter: {
    card: "summary_large_image",
    title: `Priser – Vejledende priser på træfældning · ${SITE.name}`,
    description:
      "Vejledende priser på træfældning efter højde og adgangsforhold. Alle priser er inkl. moms.",
  },
};

function CheckCircleIcon() {
  return (
    <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
      <circle cx="12" cy="12" r="9" strokeWidth={1.75} />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M8.5 12.5l2.5 2.5 4.5-5" />
    </svg>
  );
}

function TreeAccessIcon() {
  return (
    <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 3l5 6h-3l4 5h-3l3 4H6l3-4H6l4-5H7l5-6zM12 18v3" />
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 3l10 18H2L12 3zM12 10v5M12 18h.01" />
    </svg>
  );
}

const ACCESS_ICONS = {
  easy: CheckCircleIcon,
  moderate: TreeAccessIcon,
  hard: AlertIcon,
} as const;

function ChipIcon({ id }: { id: "chip" | "truck" | "stump" | "siren" | "crane" }) {
  const common = "h-5 w-5 text-primary";
  switch (id) {
    case "chip":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 8h8l-3 4h7l-3 4h6M4 18h6" />
        </svg>
      );
    case "truck":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 7h11v9H3zM14 11h4l3 3v2h-7zM7 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm10 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        </svg>
      );
    case "stump":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M5 14h14M6 14l1 5h10l1-5M9 11v3M15 11v3M8 8l4-4 4 4" />
        </svg>
      );
    case "siren":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M5 18h14M7 18v-4a5 5 0 0110 0v4M12 5v3M5 9l-2-1M19 9l2-1" />
        </svg>
      );
    case "crane":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M5 20V6l13 2M5 6h13M11 11v6M8 17h6" />
        </svg>
      );
  }
}

const EXTRA_ICON_BY_ID: Record<string, "chip" | "truck" | "stump" | "siren" | "crane"> = {
  flishugning: "chip",
  bortskaffelse: "truck",
  stubfraesning: "stump",
  akut: "siren",
  kran: "crane",
};

function TreeBulletIcon() {
  return (
    <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2l4 6h-2.5l3 5H14l3 4H7l3-4H7l3-5H7.5L12 2zM11 17h2v5h-2z" />
    </svg>
  );
}

export default function PriserPage() {
  return (
    <div className="border-t border-card-border bg-background pb-16 md:pb-[7.5rem]">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(priserServiceJsonLd())} />

      <header className="border-b border-card-border bg-surface-container-lowest py-14 md:py-[4.5rem]">
        <div className="mx-auto max-w-[56rem] px-[24px] text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-wide text-primary">Priser</p>
          <h1 className="mt-3 font-display text-4xl font-bold text-primary md:text-5xl">
            Vejledende priser på træfældning
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-on-surface-variant">
            Priserne nedenfor er vejledende og inkluderer fældning, opskæring og oprydning på stedet. Du får altid et
            konkret tilbud efter besigtigelse — alle priser er inkl. moms.
          </p>
        </div>
      </header>

      <section
        aria-labelledby="prismatrix-titel"
        className="mx-auto max-w-[var(--container-max-width)] px-[24px] pt-12 md:pt-16"
      >
        <h2 id="prismatrix-titel" className="sr-only">
          Prismatrix
        </h2>

        <div className="overflow-hidden rounded-lg border border-card-border bg-surface-container-lowest shadow-[0_12px_40px_var(--color-card-shadow)]">
          <div className="hidden md:block">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-primary text-on-primary">
                  <th scope="col" className="w-[22%] px-6 py-5 font-display text-sm font-semibold uppercase tracking-wider">
                    Træets højde
                  </th>
                  {ACCESS_LEVELS.map((level) => (
                    <th
                      key={level.id}
                      scope="col"
                      className="w-[26%] px-6 py-5 align-top font-display text-sm font-semibold uppercase tracking-wider"
                    >
                      <span className="block">{level.label}</span>
                      <span className="mt-1 block text-[12px] font-normal normal-case tracking-normal text-on-primary/80">
                        {level.short}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {FELLING_TIERS.map((tier, i) => (
                  <tr
                    key={tier.id}
                    className={i % 2 === 0 ? "bg-surface-container-lowest" : "bg-surface-container/40"}
                  >
                    <th
                      scope="row"
                      className="border-t border-card-border px-6 py-5 font-display text-base font-bold text-primary"
                    >
                      {tier.heightLabel}
                    </th>
                    {ACCESS_LEVELS.map((level) => {
                      const price = tier.prices[level.id];
                      return (
                        <td
                          key={level.id}
                          className="border-t border-card-border px-6 py-5 font-display text-base font-semibold text-on-surface"
                        >
                          {price === null ? (
                            <span className="italic text-on-surface-variant">Tilbud gives</span>
                          ) : (
                            formatDkk(price)
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <ul className="divide-y divide-card-border md:hidden">
            {FELLING_TIERS.map((tier) => (
              <li key={tier.id} className="p-6">
                <p className="font-display text-lg font-bold text-primary">{tier.heightLabel}</p>
                <dl className="mt-4 space-y-3">
                  {ACCESS_LEVELS.map((level) => {
                    const price = tier.prices[level.id];
                    return (
                      <div
                        key={level.id}
                        className="flex items-baseline justify-between gap-4 border-t border-card-border pt-3 first:border-t-0 first:pt-0"
                      >
                        <dt className="font-display text-sm font-semibold text-on-surface-variant">{level.label}</dt>
                        <dd className="text-right font-display text-base font-semibold text-on-surface">
                          {price === null ? (
                            <span className="italic text-on-surface-variant">Tilbud gives</span>
                          ) : (
                            formatDkk(price)
                          )}
                        </dd>
                      </div>
                    );
                  })}
                </dl>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-[var(--container-max-width)] px-[24px] pt-12 md:pt-16">
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          <article className="rounded-lg border border-card-border bg-surface-container-lowest p-8 shadow-[0_8px_28px_rgba(21,66,18,0.06)]">
            <h2 className="font-display text-xl font-bold text-primary">Adgang — forklaring</h2>
            <ul className="mt-6 space-y-6">
              {ACCESS_LEVELS.map((level) => {
                const Icon = ACCESS_ICONS[level.id];
                return (
                  <li key={level.id} className="flex gap-4">
                    <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-base bg-primary-container/25">
                      <Icon />
                    </span>
                    <div>
                      <p className="font-display text-sm font-bold uppercase tracking-wide text-on-surface">
                        {level.label}
                      </p>
                      <ul className="mt-2 space-y-1 text-sm text-on-surface-variant">
                        {level.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  </li>
                );
              })}
            </ul>
          </article>

          <article className="rounded-lg border border-card-border bg-surface-container-lowest p-8 shadow-[0_8px_28px_rgba(21,66,18,0.06)]">
            <h2 className="font-display text-xl font-bold text-primary">Tilvalg / ekstra ydelser</h2>
            <ul className="mt-6 divide-y divide-card-border">
              {EXTRAS.map((extra) => (
                <li key={extra.id} className="flex items-start gap-4 py-4 first:pt-0 last:pb-0">
                  <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-base bg-primary-container/25">
                    <ChipIcon id={EXTRA_ICON_BY_ID[extra.id]} />
                  </span>
                  <div className="flex flex-1 flex-col gap-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                      <p className="font-display text-sm font-semibold text-on-surface">{extra.name}</p>
                      <p className="font-display text-sm font-semibold text-primary">{extra.price}</p>
                    </div>
                    {extra.note ? (
                      <p className="text-xs italic text-on-surface-variant">({extra.note})</p>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-lg border border-card-border bg-surface-container-lowest p-8 shadow-[0_8px_28px_rgba(21,66,18,0.06)]">
            <h2 className="font-display text-xl font-bold text-primary">Hurtig vejledning</h2>
            <ul className="mt-6 space-y-5">
              {QUICK_GUIDE.map((row) => (
                <li key={row.label} className="flex items-start gap-4">
                  <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-base bg-primary-container/25">
                    <TreeBulletIcon />
                  </span>
                  <div>
                    <p className="font-display text-sm font-semibold text-on-surface">{row.label}</p>
                    <p className="mt-1 font-display text-base font-semibold text-primary">{row.range}</p>
                  </div>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-[var(--container-max-width)] px-[24px] pt-10 md:pt-14">
        <div className="flex flex-col gap-4 rounded-lg border border-card-border bg-primary px-8 py-6 text-on-primary md:flex-row md:items-center md:justify-between">
          <p className="max-w-3xl text-sm leading-relaxed text-on-primary/90">
            Priserne er vejledende og afhænger af træets art, placering, opgaveomfang og adgangsforhold. Der gives
            altid et tilbud efter besigtigelse.
          </p>
          <p className="font-display text-sm font-bold uppercase tracking-wider">Alle priser er inkl. moms</p>
        </div>
      </section>

      <section className="mx-auto max-w-[var(--container-max-width)] px-[24px] pt-12 md:pt-16">
        <div className="rounded-lg bg-surface-container-lowest p-8 text-center shadow-[0_8px_28px_rgba(21,66,18,0.06)] md:p-12">
          <h2 className="font-display text-2xl font-bold text-primary md:text-3xl">
            Vil du have et konkret tilbud?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-on-surface-variant">
            Fortæl kort om opgaven — træets højde, placering og adgangsforhold — så vender vi hurtigt tilbage med et
            uforpligtende tilbud.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/kontakt"
              className="inline-flex min-h-[48px] items-center rounded-base bg-accent-cta px-8 py-3.5 font-display text-base font-bold text-on-accent-cta shadow-sm hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              Få et tilbud nu
            </Link>
            <Link
              href={`tel:${SITE.tel.replace(/\s/g, "")}`}
              className="inline-flex min-h-[48px] items-center rounded-base border-2 border-primary px-8 py-3.5 font-display text-base font-semibold text-primary hover:bg-primary/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary"
            >
              Ring {SITE.phoneDisplay}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
