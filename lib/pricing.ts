/**
 * Pricing matrix for tree felling — used by /priser page and JSON-LD.
 * Prices are in DKK incl. VAT.
 */

export const PRICE_CURRENCY = "DKK" as const;

export type AccessLevel = "easy" | "moderate" | "hard";

export type FellingTier = {
  id: string;
  heightLabel: string;
  /** null = "Tilbud gives" (quote on request) */
  prices: Record<AccessLevel, number | null>;
};

export const FELLING_TIERS: readonly FellingTier[] = [
  {
    id: "op-til-8m",
    heightLabel: "Op til 8 m",
    prices: { easy: 2000, moderate: 2500, hard: 3500 },
  },
  {
    id: "8-12m",
    heightLabel: "8–12 m",
    prices: { easy: 3000, moderate: 4000, hard: 5500 },
  },
  {
    id: "12-18m",
    heightLabel: "12–18 m",
    prices: { easy: 4500, moderate: 6000, hard: 7500 },
  },
  {
    id: "18-25m",
    heightLabel: "18–25 m",
    prices: { easy: 6000, moderate: 8000, hard: 10000 },
  },
  {
    id: "over-25m",
    heightLabel: "Over 25 m",
    prices: { easy: null, moderate: null, hard: null },
  },
] as const;

export const ACCESS_LEVELS: ReadonlyArray<{
  id: AccessLevel;
  label: string;
  short: string;
  bullets: readonly string[];
}> = [
  {
    id: "easy",
    label: "Nem adgang",
    short: "Fri faldretning og god plads — ingen klatring",
    bullets: [
      "Fri plads omkring træet",
      "Ingen forhindringer",
      "Maskiner kan komme til",
      "Enkel fældning",
    ],
  },
  {
    id: "moderate",
    label: "Moderat adgang",
    short: "Begrænset plads — let klatring eller planlægning kan være nødvendig",
    bullets: [
      "Begrænset plads",
      "Træet står tæt på hegn, skure eller bede",
      "Let klatring kan være nødvendig",
    ],
  },
  {
    id: "hard",
    label: "Svær adgang / høj risiko",
    short: "Tæt på bygninger, veje eller elledninger — kræver klatring og nedtagning i sektioner",
    bullets: [
      "Tæt på bygninger, veje eller elledninger",
      "Kræver klatring og nedtagning i sektioner",
      "Eventuelt brug af specialudstyr",
    ],
  },
] as const;

export type Extra = {
  id: string;
  name: string;
  price: string;
  note?: string;
};

export const EXTRAS: readonly Extra[] = [
  {
    id: "flishugning",
    name: "Flishugning af grene",
    price: "750–2.250 kr.",
    note: "ekskl. leje af flishugger",
  },
  {
    id: "bortskaffelse",
    name: "Bortskaffelse af træ",
    price: "2 × fældningsprisen",
    note: "inkl. transport og deponi",
  },
  {
    id: "stubfraesning",
    name: "Stubfræsning",
    price: "1.000–3.000 kr.",
  },
  {
    id: "akut",
    name: "Akut udrykning",
    price: "+25–50 %",
  },
  {
    id: "kran",
    name: "Kranassistance",
    price: "+15 %",
    note: "ekskl. kranudgifter",
  },
] as const;

export const QUICK_GUIDE: ReadonlyArray<{ label: string; range: string }> = [
  { label: "Lille træ (op til 8 m)", range: "2.000–3.500 kr." },
  { label: "Mellemstort træ (8–18 m)", range: "3.500–6.000 kr." },
  { label: "Stort træ (18–25 m)", range: "6.000–8.000 kr." },
  { label: "Meget stort / høj risiko (25 m+)", range: "8.000–10.000 kr." },
] as const;

export function formatDkk(amount: number): string {
  return `${amount.toLocaleString("da-DK")} kr.`;
}

/** Min/max across all numeric prices in the matrix — used for LocalBusiness priceRange. */
export function priceBounds() {
  const numeric = FELLING_TIERS.flatMap((t) =>
    Object.values(t.prices).filter((p): p is number => p !== null),
  );
  return { min: Math.min(...numeric), max: Math.max(...numeric) };
}
