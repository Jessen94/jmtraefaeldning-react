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

const SERVICES = [
  "Træfældning",
  "Beskæring",
  "Topkapning",
  "Buskrydning",
  "Hækklipning",
  "Stubfræsning",
  "Flishugning",
  "Maskinkørsel",
] as const;

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
    priceRange: "$$",
    currenciesAccepted: "DKK",
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
      itemListElement: SERVICES.map((service, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: service,
          areaServed: { "@type": "Country", name: "Denmark" },
          provider: { "@id": `${SITE.url}/#business` },
        },
      })),
    },
  } as const;
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

type JsonLdValue =
  | string
  | number
  | boolean
  | null
  | readonly JsonLdValue[]
  | { readonly [key: string]: JsonLdValue };

export function jsonLdScript(data: JsonLdValue) {
  return {
    __html: JSON.stringify(data).replace(/</g, "\\u003c"),
  };
}
