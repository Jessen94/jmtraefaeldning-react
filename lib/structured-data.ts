import { ACCESS_LEVELS, FELLING_TIERS, PRICE_CURRENCY, priceBounds } from "@/lib/pricing";
import { SITE } from "@/lib/site";

const DAY_TO_SCHEMA: Record<string, string> = {
  Monday: "https://schema.org/Monday",
  Tuesday: "https://schema.org/Tuesday",
  Wednesday: "https://schema.org/Wednesday",
  Thursday: "https://schema.org/Thursday",
  Friday: "https://schema.org/Friday",
  Saturday: "https://schema.org/Saturday",
  Sunday: "https://schema.org/Sunday",
};

type ServiceEntry = {
  name: string;
  /** Felling-tier services share the matrix price range; other services omit price hints. */
  pricedByMatrix?: boolean;
};

const SERVICES: readonly ServiceEntry[] = [
  { name: "Træfældning", pricedByMatrix: true },
  { name: "Beskæring" },
  { name: "Topkapning", pricedByMatrix: true },
  { name: "Buskrydning" },
  { name: "Hækklipning" },
  { name: "Stubfræsning" },
  { name: "Flishugning" },
  { name: "Maskinkørsel" },
];

function priceRangeString() {
  const { min, max } = priceBounds();
  return `${min}-${max} ${PRICE_CURRENCY}`;
}

function aggregateOfferForMatrix() {
  const { min, max } = priceBounds();
  return {
    "@type": "AggregateOffer",
    priceCurrency: PRICE_CURRENCY,
    lowPrice: min,
    highPrice: max,
    availability: "https://schema.org/InStock",
    areaServed: { "@type": "Country", name: "Denmark" },
  } as const;
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE.url}/#business`,
    name: SITE.name,
    legalName: SITE.legalName,
    description: SITE.description,
    image: `${SITE.url}/opengraph-image.jpg`,
    logo: `${SITE.url}/images/logo_2.png`,
    url: SITE.url,
    telephone: SITE.tel,
    email: SITE.email,
    vatID: `DK${SITE.cvr}`,
    taxID: SITE.cvr,
    founder: {
      "@type": "Person",
      name: SITE.founder,
      jobTitle: SITE.founderTitle,
    },
    foundingDate: `${SITE.foundingYear}`,
    priceRange: priceRangeString(),
    currenciesAccepted: PRICE_CURRENCY,
    paymentAccepted: "Bankoverførsel, MobilePay",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      postalCode: SITE.address.postalCode,
      addressLocality: SITE.address.city,
      addressCountry: SITE.address.countryCode,
    },
    areaServed: {
      "@type": "Country",
      name: "Denmark",
    },
    openingHoursSpecification: SITE.openingHours.spec.map((slot) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: slot.days.map((d) => DAY_TO_SCHEMA[d]),
      opens: slot.opens,
      closes: slot.closes,
    })),
    sameAs: [SITE.social.facebook],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Træplejeydelser",
      itemListElement: SERVICES.map((service, index) => {
        const offer: Record<string, unknown> = {
          "@type": "Offer",
          position: index + 1,
          itemOffered: {
            "@type": "Service",
            name: service.name,
            areaServed: { "@type": "Country", name: "Denmark" },
            provider: { "@id": `${SITE.url}/#business` },
          },
        };
        if (service.pricedByMatrix) {
          offer.priceSpecification = {
            "@type": "PriceSpecification",
            minPrice: priceBounds().min,
            maxPrice: priceBounds().max,
            priceCurrency: PRICE_CURRENCY,
            valueAddedTaxIncluded: true,
          };
          offer.priceCurrency = PRICE_CURRENCY;
        }
        return offer;
      }),
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    inLanguage: SITE.language,
    publisher: { "@id": `${SITE.url}/#business` },
  } as const;
}

export function faqPageJsonLd(items: ReadonlyArray<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  } as const;
}

export function breadcrumbJsonLd(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  } as const;
}

/**
 * Service + AggregateOffer schema for the /priser page.
 * Emits one Offer per (height tier × access level) combination with a concrete price.
 */
export function priserServiceJsonLd() {
  const offers = FELLING_TIERS.flatMap((tier) =>
    ACCESS_LEVELS.map((level) => {
      const price = tier.prices[level.id];
      if (price === null) return null;
      return {
        "@type": "Offer",
        name: `Træfældning ${tier.heightLabel} — ${level.label}`,
        price,
        priceCurrency: PRICE_CURRENCY,
        availability: "https://schema.org/InStock",
        priceSpecification: {
          "@type": "PriceSpecification",
          price,
          priceCurrency: PRICE_CURRENCY,
          valueAddedTaxIncluded: true,
        },
        areaServed: { "@type": "Country", name: "Denmark" },
      };
    }),
  ).filter((o): o is NonNullable<typeof o> => o !== null);

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE.url}/priser/#service`,
    name: "Træfældning — vejledende priser",
    serviceType: "Træfældning",
    description:
      "Vejledende priser på træfældning efter træets højde og adgangsforhold. Inkluderer fældning, opskæring og oprydning på stedet. Alle priser er inkl. moms.",
    provider: { "@id": `${SITE.url}/#business` },
    areaServed: { "@type": "Country", name: "Denmark" },
    url: `${SITE.url}/priser/`,
    offers: {
      ...aggregateOfferForMatrix(),
      offerCount: offers.length,
      offers,
    },
  };
}

type JsonLdValue =
  | string
  | number
  | boolean
  | null
  | readonly JsonLdValue[]
  | { readonly [key: string]: JsonLdValue };

export function jsonLdScript(data: JsonLdValue | object) {
  return {
    __html: JSON.stringify(data).replace(/</g, "\\u003c"),
  };
}
