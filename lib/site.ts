/** Contact, brand and SEO constants. Swap any placeholder values before launch. */

export const SITE = {
  name: "JM Træfældning",
  legalName: "JM Træfældning v/Jens Mosegaard",
  tagline:
    "Professionel træpleje og sikker fældning med tryghed, respekt for naturen og høj standard.",
  description:
    "JM Træfældning v/Jens Mosegaard tilbyder professionel træfældning, beskæring, topkapning, buskrydning og skovpleje i hele Danmark. Uddannet skov- og naturtekniker — fagligt og sikkert arbejde siden 2019.",
  phoneDisplay: "+45 22 28 97 89",
  tel: "+4522289789",
  email: "jmtraefaeldning@gmail.com",
  url: "https://jmtraefaeldning.dk",
  cvr: "40691448",
  founder: "Jens Mosegaard",
  founderTitle: "Skov- og naturtekniker, speciale i skov- og naturpleje",
  foundingYear: 2019,
  baseRegion: "Midtjylland",
  locale: "da_DK",
  language: "da",
  address: {
    co: "Jens Mosegaard",
    street: "Blåmejsevej 27",
    postalCode: "2600",
    city: "Glostrup",
    country: "Danmark",
    countryCode: "DK",
  },
  openingHours: {
    /** Human-readable for display in footer/contact. */
    label: "Man–Fre 08–17 · Weekendarbejde efter aftale",
    /** Schema.org openingHoursSpecification entries. */
    spec: [
      { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "17:00" },
      { days: ["Saturday", "Sunday"], opens: "09:00", closes: "16:00" },
    ],
  },
  serviceArea: {
    label: "Hele Danmark — base i Midtjylland",
    countryCode: "DK",
  },
  social: {
    facebook: "https://www.facebook.com/JMtraefaeldning/",
  },
  keywords: [
    "træfældning",
    "professionel træfældning",
    "træfælder",
    "beskæring af træer",
    "topkapning",
    "buskrydning",
    "hækklipning",
    "stubfræsning",
    "flishugning",
    "træpleje",
    "skovpleje",
    "skov- og naturtekniker",
    "arborist",
    "maskinkørsel",
    "JM Træfældning",
    "Jens Mosegaard",
    "træfældning Midtjylland",
    "træfældning Danmark",
    "træfældning erhverv",
    "træfældning private",
  ],
} as const;
