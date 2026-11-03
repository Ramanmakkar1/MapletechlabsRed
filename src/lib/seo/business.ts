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
    areaServed: {
      '@type': 'City',
      name: opts.cityName,
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: opts.provinceName,
      },
    },
    sameAs: BUSINESS.sameAs,
    ...(opts.serviceType ? { serviceType: opts.serviceType } : {}),
    mainEntityOfPage: opts.url,
  };
}
