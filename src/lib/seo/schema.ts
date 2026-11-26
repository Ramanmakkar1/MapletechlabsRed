import { PROJECT_PRICING } from '../../data/pricing.ts';
import { AWARDS, BUSINESS, HQ_ADDRESS, LOCAL_BUSINESS_AREA_SERVED } from './business.ts';
import { siteOrigin } from './canonical.ts';
export { safeJsonLd } from './jsonLd.ts';

/**
 * Shared JSON-LD builders for Service, FAQPage and BreadcrumbList nodes.
 *
 * Everything below comes from real page metadata — no invented ratings,
 * prices or review counts. Components render these objects inside a
 * `<script type="application/ld+json">` tag.
 */

/** Service pages whose schema should carry the real CAD price ranges. */
const SERVICE_PRICING: Record<string, (keyof typeof PROJECT_PRICING)[]> = {
  '/services/web-development': ['website', 'webapp'],
  '/services/mobile-app-development': ['mobile'],
  '/services/saas-development': ['saas'],
  '/services/ai-ml': ['ai'],
};

/** Strip title suffixes (e.g. '| Toronto') so the schema name is the plain service name. */
export function cleanServiceName(name: string): string {
  const first = name.split(/\s+[|–—]\s+/)[0].trim();
  return first.replace(/\s*\|\s*Mapletech Labs$/i, '').trim() || name.trim();
}

/** Core Canadian markets every service page sells into. */
const SERVICE_AREA_SERVED = ['Edmonton', 'Calgary', 'Toronto', 'Vancouver'] as const;

const CITY_PROVINCE: Record<string, string> = {
  Edmonton: 'Alberta',
  Calgary: 'Alberta',
  Toronto: 'Ontario',
  Vancouver: 'British Columbia',
};

/**
 * areaServed City nodes for the four core markets, with the page's own city
 * first on a service+city page.
 */
export function coreCitiesAreaServed(primaryCity?: string) {
  const cities: string[] = [...SERVICE_AREA_SERVED];
  if (primaryCity && cities.includes(primaryCity)) {
    cities.splice(cities.indexOf(primaryCity), 1);
    cities.unshift(primaryCity);
  }
  return cities.map(city => ({
    '@type': 'City',
    name: city,
    containedInPlace: { '@type': 'AdministrativeArea', name: CITY_PROVINCE[city] },
  }));
}

/**
 * Organization JSON-LD for the homepage: the company's real entity facts —
 * name, logo, sameAs, foundingDate, numberOfEmployees, areaServed (Canadian
 * cities) and knowsAbout (services) — plus a customer-service contactPoint.
 */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteOrigin()}/#organization`,
    name: 'Mapletech Labs',
    alternateName: ['TML Branding Agency'],
    url: siteOrigin(),
    logo: BUSINESS.logo,
    telephone: BUSINESS.telephone,
    email: BUSINESS.email,
    image: BUSINESS.image,
    description:
      'Mapletech Labs is a custom software development company founded by Raman Makkar in Edmonton, Alberta in 2018 (formerly TML Branding Agency). Its team of 25+ engineers, designers and strategists has delivered 500+ projects, building web and mobile apps, AI solutions, SaaS platforms, UI/UX design and SEO for clients across Canada, with 12 locations across Canada and an experienced remote engineering team.',
    address: { ...HQ_ADDRESS },
    sameAs: [...BUSINESS.sameAs],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['English', 'French'],
      telephone: BUSINESS.telephone,
      email: BUSINESS.email,
    },
    areaServed: ['CA', 'US', ...LOCAL_BUSINESS_AREA_SERVED],
    foundingDate: '2018',
    foundingLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Edmonton',
        addressRegion: 'Alberta',
        addressCountry: 'CA',
      },
    },
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: 25,
      maxValue: 50,
    },
    founder: {
      '@type': 'Person',
      '@id': `${siteOrigin()}/about/raman-makkar#person`,
      name: 'Raman Makkar',
      jobTitle: 'Founder & CEO',
      url: `${siteOrigin()}/about/raman-makkar`,
    },
    award: [...AWARDS],
    knowsAbout: [
      'Custom software development',
      'Manufacturing software development',
      'Mobile app development',
      'AI development',
      'LLM integration',
      'UI/UX design',
      'Ecommerce systems',
      'SaaS development',
      'Search engine optimization (SEO)',
      'Digital marketing',
      'Google Ads management',
      'Software development',
      'App development',
      'SEO',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Software Development Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom Software Development',
            url: `${siteOrigin()}/services/software-development`,
            areaServed: { '@type': 'Country', name: 'Canada' },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Web Development',
            url: `${siteOrigin()}/services/web-development`,
          },
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'CAD',
            minPrice: PROJECT_PRICING.website.low,
            maxPrice: PROJECT_PRICING.website.high,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mobile App Development',
            url: `${siteOrigin()}/services/mobile-app-development`,
          },
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'CAD',
            minPrice: PROJECT_PRICING.mobile.low,
            maxPrice: PROJECT_PRICING.mobile.high,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI & Machine Learning',
            url: `${siteOrigin()}/services/ai-ml`,
          },
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'CAD',
            minPrice: PROJECT_PRICING.ai.low,
            maxPrice: PROJECT_PRICING.ai.high,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'UI/UX Design',
            url: `${siteOrigin()}/services/product-design`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SaaS Development',
            url: `${siteOrigin()}/services/saas-development`,
          },
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'CAD',
            minPrice: PROJECT_PRICING.saas.low,
            maxPrice: PROJECT_PRICING.saas.high,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SEO & Digital Marketing',
            url: `${siteOrigin()}/services/digital-marketing`,
          },
        },
      ],
    },
  };
}

/**
 * WebSite JSON-LD for the homepage, linked to the site's Organization entity.
 */
export function webSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteOrigin()}/#website`,
    name: 'Mapletech Labs',
    url: siteOrigin(),
    inLanguage: 'en-CA',
    publisher: { '@id': `${siteOrigin()}/#organization` },
  };
}

export interface ServiceSchemaInput {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
  areaServed?: string | string[];
  areaServedType?: 'Country' | 'AdministrativeArea';
}

/**
 * Service JSON-LD for a service detail page: @type Service, serviceType,
 * provider (Organization), areaServed (Place) and offers (price range) when
 * the page has real pricing data.
 */
export function serviceSchema(input: ServiceSchemaInput) {
  return buildServiceSchema(input);
}

/** Service structured data for a service, sub-service or industry page. */
export function buildServiceSchema({
  name,
  description,
  url,
  serviceType,
  areaServed = [...SERVICE_AREA_SERVED],
  areaServedType = 'Country',
}: ServiceSchemaInput) {
  const resolvedServiceType = serviceType ?? cleanServiceName(name);
  const areaServedNode = Array.isArray(areaServed)
    ? areaServed.map(city => ({
        '@type': 'City',
        name: city,
        ...(CITY_PROVINCE[city] && {
          containedInPlace: { '@type': 'AdministrativeArea', name: CITY_PROVINCE[city] },
        }),
      }))
    : {
        '@type': areaServedType,
        name: areaServed,
        ...(areaServedType === 'AdministrativeArea' && {
          containedInPlace: { '@type': 'Country', name: 'Canada' },
        }),
      };
  let offers: Record<string, unknown> | undefined;
  const pricingKeys = SERVICE_PRICING[new URL(url).pathname];
  if (pricingKeys) {
    const ranges = pricingKeys.map(key => PROJECT_PRICING[key]);
    offers = {
      '@type': 'AggregateOffer',
      priceCurrency: 'CAD',
      lowPrice: Math.min(...ranges.map(range => range.low)),
      highPrice: Math.max(...ranges.map(range => range.high)),
      offerCount: ranges.length,
    };
  }
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: cleanServiceName(name),
    description,
    url,
    ...(resolvedServiceType && { serviceType: resolvedServiceType }),
    ...(offers && { offers }),
    provider: {
      '@type': 'Organization',
      '@id': `${siteOrigin()}/#organization`,
      name: 'Mapletech Labs',
      url: siteOrigin(),
    },
    areaServed: areaServedNode,
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: url,
      servicePhone: {
        '@type': 'ContactPoint',
        telephone: BUSINESS.telephone,
        contactType: 'sales',
      },
    },
  };
}

/** FAQPage JSON-LD for a page that already renders these questions on screen. */
export function faqPageSchema(faqs: { question: string; answer: string }[]) {
  if (!faqs.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

/** FAQPage for a page that already renders these questions on screen. */
export function buildFaqSchema(faqs: { q: string; a: string }[]) {
  if (!faqs.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export interface BreadcrumbItem {
  position: number;
  name: string;
  item?: string;
}

/** BreadcrumbList for a page's visible breadcrumb trail. */
export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map(item => ({
      '@type': 'ListItem',
      position: item.position,
      name: item.name,
      ...(item.item && { item: item.item }),
    })),
  };
}
