export const AUTHOR_PERSON_ID = 'https://mapletechlabs.ca/about/raman-makkar#person';
export const BLOG_AUTHOR = {
  '@type': 'Person',
  '@id': AUTHOR_PERSON_ID,
  name: 'Raman Makkar',
  jobTitle: 'Founder & CEO',
  url: 'https://mapletechlabs.ca/about/raman-makkar',
} as const;

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

export const AWARDS = [
  "Top Generative AI Company, Clutch 2026",
  "Top App Development Company, Clutch 2024",
  "Webby Honoree 2024",
  "Best App Award, Personal Growth, Google 2024",
  "Advanced Tier Services Partner, AWS 2024",
  "Top 100 North America, Red Herring 2023",
  "Deloitte Fast 50, 2023",
] as const;

export const BLOG_IMAGE = { '@type': 'ImageObject', url: BUSINESS.image, width: 1200, height: 630 };

export const HQ_ADDRESS = {
  '@type': 'PostalAddress',
  // OWNER DECISION: street address pending — add streetAddress here once Raman confirms it.
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
  mainEntity?: boolean;
}) {
  const areaServed = [
    ...LOCAL_BUSINESS_AREA_SERVED,
    {
      '@type': 'City',
      name: opts.cityName,
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: opts.provinceName,
      },
    },
  ].filter(
    (area, index, all) => all.findIndex((other) => other.name === area.name) === index,
  );

  return {
    '@type': 'LocalBusiness',
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
    areaServed,
    sameAs: BUSINESS.sameAs,
    ...(opts.serviceType ? { knowsAbout: opts.serviceType } : {}),
    ...(opts.mainEntity === false ? {} : { mainEntityOfPage: opts.url }),
  };
}
