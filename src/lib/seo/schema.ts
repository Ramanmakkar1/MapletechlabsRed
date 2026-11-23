import { PROJECT_PRICING } from '../../data/pricing.ts';
import { BUSINESS } from './business.ts';
import { siteOrigin } from './canonical.ts';

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

export interface ServiceSchemaInput {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
  areaServed?: string | string[];
  areaServedType?: 'Country' | 'AdministrativeArea';
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
