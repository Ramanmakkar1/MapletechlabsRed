export const BUSINESS = {
  name: 'Mapletech Labs',
  url: 'https://mapletechlabs.ca',
  telephone: '+1-403-604-8692',
  email: 'hello@mapletechlabs.ca',
  logo: 'https://mapletechlabs.ca/logo.png',
  image: 'https://mapletechlabs.ca/images/og-default.jpg',
  sameAs: [
    'https://www.linkedin.com/company/canadamapletechlabs/',
    'https://www.facebook.com/Mapletechlabs/',
    'https://www.instagram.com/mapletechlabs/',
  ],
} as const;

export const HQ_ADDRESS = {
  '@type': 'PostalAddress',
  addressLocality: 'Edmonton',
  addressRegion: 'AB',
  postalCode: 'T5J 1B9',
  addressCountry: 'CA',
} as const;

/** Stable LocalBusiness area — main Canadian markets (page Service nodes carry the city). */
export const LOCAL_BUSINESS_AREA_SERVED = [
  {
    '@type': 'City',
    name: 'Edmonton',
    containedInPlace: { '@type': 'AdministrativeArea', name: 'Alberta' },
  },
  {
    '@type': 'City',
    name: 'Calgary',
    containedInPlace: { '@type': 'AdministrativeArea', name: 'Alberta' },
  },
  {
    '@type': 'City',
    name: 'Toronto',
    containedInPlace: { '@type': 'AdministrativeArea', name: 'Ontario' },
  },
  {
    '@type': 'City',
    name: 'Vancouver',
    containedInPlace: {
      '@type': 'AdministrativeArea',
      name: 'British Columbia',
    },
  },
  {
    '@type': 'City',
    name: 'Ottawa',
    containedInPlace: { '@type': 'AdministrativeArea', name: 'Ontario' },
  },
  {
    '@type': 'City',
    name: 'Montreal',
    containedInPlace: { '@type': 'AdministrativeArea', name: 'Quebec' },
  },
] as const;

export function localServiceSchema(opts: {
  cityName: string;
  provinceName: string;
  url: string;
  serviceType?: string[];
  priceRange?: string;
}) {
  return {
    '@type': 'ProfessionalService',
    '@id': 'https://mapletechlabs.ca/#localbusiness',
    name: BUSINESS.name,
    url: BUSINESS.url,
    telephone: BUSINESS.telephone,
    email: BUSINESS.email,
    image: BUSINESS.image,
    logo: BUSINESS.logo,
    priceRange: opts.priceRange ?? '$$-$$$',
    address: HQ_ADDRESS,
    parentOrganization: { '@id': 'https://mapletechlabs.ca/#organization' },
    areaServed: LOCAL_BUSINESS_AREA_SERVED,
    sameAs: BUSINESS.sameAs,
    ...(opts.serviceType ? { serviceType: opts.serviceType } : {}),
    mainEntityOfPage: opts.url,
  };
}
