export const site = {
  name: 'Mansas Moguls',
  publicBrand: 'MANSAS MOGULS',
  legalName: 'Mansas Moguls L.L.C-FZ',
  tagline: "We Architect What's Next.",
  location: 'Dubai, United Arab Emirates.',
  url: 'https://mansasmoguls.com',
  email: 'intelligence@mansasmogules.com',
  phone: '+971561376535',
  phoneDisplay: '+971 56 137 6535',
  whatsappUrl: 'https://wa.me/971561376535',
  divisions: [
    'Moguls Digital',
    'Moguls AI',
    'Moguls Growth',
    'Moguls Creative',
    'Moguls Strategy',
  ],
} as const;

export const siteConfig = {
  brand: {
    name: site.name,
    publicBrand: site.publicBrand,
    tagline: site.tagline,
  },
  company: {
    legalName: site.legalName,
    location: site.location,
  },
  contact: {
    email: site.email,
    phone: site.phone,
    phoneDisplay: site.phoneDisplay,
    whatsappUrl: site.whatsappUrl,
  },
  divisions: site.divisions,
} as const;
