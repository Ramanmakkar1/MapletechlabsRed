import { cities } from './cities';

/**
 * Priority "[service] company in [city]" landing pages, at keyword URLs:
 *   /locations/<kw>-company-in-<city>   e.g. /locations/ai-development-company-in-edmonton
 *
 * These are the money-keyword pages the business ranks for across Canada. The
 * software-development service is handled by the city landing page itself
 * (/locations/software-development-company-in-<city>), so it is not repeated here.
 */
export const PRIORITY_SERVICES = [
  { serviceSlug: 'ai-ml', kw: 'ai-development', label: 'AI Development' },
  { serviceSlug: 'saas-development', kw: 'saas-development', label: 'SaaS Development' },
  { serviceSlug: 'mobile-app-development', kw: 'app-development', label: 'App Development' },
  { serviceSlug: 'web-development', kw: 'web-development', label: 'Web Development' },
  { serviceSlug: 'digital-marketing', kw: 'seo', label: 'SEO & Digital Marketing' },
  { serviceSlug: 'product-design', kw: 'ui-ux-design', label: 'UI/UX Design' },
] as const;

/** Headline for “[X] Company in [City]” — keyword pages use the search phrase, not the full service label. */
export function priorityCompanyHeadline(serviceSlug: string, label: string): string {
  const ps = PRIORITY_SERVICES.find(p => p.serviceSlug === serviceSlug);
  if (ps?.kw === 'seo') return 'SEO';
  return label;
}

export interface ServiceCityCombo { slug: string; citySlug: string; serviceSlug: string; label: string }

export const serviceCityCombos: ServiceCityCombo[] = PRIORITY_SERVICES.flatMap(ps =>
  cities.map(c => ({ slug: `${ps.kw}-company-in-${c.slug}`, citySlug: c.slug, serviceSlug: ps.serviceSlug, label: ps.label }))
);

/** “Digital marketing agency in [city]” keyword pages — separate from seo-company URLs. */
export const AGENCY_CITIES = ['edmonton', 'calgary', 'toronto', 'vancouver', 'ottawa', 'montreal', 'winnipeg', 'mississauga', 'regina'] as const;

export const agencyCombos: ServiceCityCombo[] = AGENCY_CITIES.map(c => ({
  slug: `digital-marketing-agency-in-${c}`,
  citySlug: c,
  serviceSlug: 'digital-marketing',
  label: 'Digital Marketing Agency',
}));

export const WEB_DESIGN_CITIES = ['edmonton', 'calgary', 'toronto', 'vancouver', 'ottawa', 'winnipeg', 'montreal'] as const;

export const webDesignCombos: ServiceCityCombo[] = WEB_DESIGN_CITIES.map(c => ({
  slug: `web-design-company-in-${c}`,
  citySlug: c,
  serviceSlug: 'web-development',
  label: 'Web Design',
}));

const allServiceCityCombos = [...serviceCityCombos, ...agencyCombos, ...webDesignCombos];

const bySlug = new Map(allServiceCityCombos.map(c => [c.slug, c]));
export const getServiceCityCombo = (slug: string): ServiceCityCombo | undefined => bySlug.get(slug);
export const serviceCitySlugs = allServiceCityCombos.map(c => c.slug);

/** Cities where the /locations/<city>/<service> mesh pages are indexable. */
export const MESH_INDEX_CITIES = new Set(['edmonton', 'calgary', 'toronto', 'vancouver']);

// Search Console impressions outside the office cities; owner can add slugs.
export const DEMAND_LOCATION_SLUGS = new Set(['ai-development-company-in-regina']);

/**
 * Whether a /locations/<service>-company-in-<city> keyword page should be
 * indexed and listed in the sitemap. Unknown combos stay indexable. Marketing
 * pages are left to TML.ca, web-design pages are always kept, and every other
 * service is indexed only in the mesh cities or when it has real demand.
 */
export function isIndexableLocationSlug(slug: string): boolean {
  const combo = getServiceCityCombo(slug);
  if (!combo) return true;
  if (combo.serviceSlug === 'digital-marketing') return false;
  if (webDesignCombos.some(c => c.slug === combo.slug)) return true;
  return MESH_INDEX_CITIES.has(combo.citySlug) || DEMAND_LOCATION_SLUGS.has(slug);
}

const kwFor: Record<string, string> = Object.fromEntries(PRIORITY_SERVICES.map(p => [p.serviceSlug, p.kw]));
export const isPriorityService = (serviceSlug: string): boolean => serviceSlug in kwFor;

/**
 * Niche services whose /locations/<city>/<service> pages only earn a place in
 * the index in Canada's largest tech markets. In the other cities these pages
 * are near-duplicates with almost no local search demand, and GSC left them
 * "Discovered - currently not indexed". They stay reachable (noindex, follow)
 * but are kept out of the index and the sitemap so crawl budget goes to the
 * core service pages.
 */
const NICHE_SERVICES = new Set(['ar-vr', 'blockchain-web3', 'game-development']);
const MAJOR_TECH_CITIES = new Set(['toronto', 'vancouver', 'montreal', 'calgary', 'edmonton', 'ottawa']);

/** Whether a /locations/<city>/<service> mesh page is served (prerendered and reachable). */
export const isServedCityService = (citySlug: string, serviceSlug: string): boolean =>
  !NICHE_SERVICES.has(serviceSlug) || MAJOR_TECH_CITIES.has(citySlug);

export const EDMONTON_MESH_NOINDEX = new Set(['cloud-devops', 'product-design', 'digital-marketing', 'game-development']);

/**
 * Whether a /locations/<city>/<service> mesh page should be indexed and listed
 * in the sitemap. Owner decision 2026-11-22: only the four major cities are
 * indexed (plus priority services everywhere); branding is never indexed.
 */
export const isIndexableCityService = (citySlug: string, serviceSlug: string): boolean =>
  isServedCityService(citySlug, serviceSlug) &&
  !NICHE_SERVICES.has(serviceSlug) &&
  !(citySlug === 'edmonton' && EDMONTON_MESH_NOINDEX.has(serviceSlug)) &&
  (isPriorityService(serviceSlug) || (MESH_INDEX_CITIES.has(citySlug) && serviceSlug !== 'branding'));

/** Canonical path for a service in a city: keyword URL for priority services, else the mesh URL. */
export const serviceCityPath = (serviceSlug: string, citySlug: string): string =>
  kwFor[serviceSlug] ? `/locations/${kwFor[serviceSlug]}-company-in-${citySlug}` : `/locations/${citySlug}/${serviceSlug}`;

/**
 * Cities whose app-development keyword page canonicalises to the core
 * service+city page (/services/mobile-app-development/<city>). Links to those
 * /locations/app-development-company-in-<city> URLs must skip the 301 chain.
 */
export const MOBILE_APP_CITY_PAGES = new Set(['edmonton', 'calgary', 'toronto', 'vancouver']);

/**
 * Href for linking to a service in a city: the city+service page only when that
 * page is live and indexable, otherwise the core service page (never a 301 or
 * noindex city+service URL).
 */
export const serviceCityHref = (serviceSlug: string, citySlug: string): string => {
  if (serviceSlug === 'mobile-app-development' && MOBILE_APP_CITY_PAGES.has(citySlug)) return `/services/mobile-app-development/${citySlug}`;
  const kw = kwFor[serviceSlug];
  if (kw) {
    const slug = `${kw}-company-in-${citySlug}`;
    return isIndexableLocationSlug(slug) ? `/locations/${slug}` : `/services/${serviceSlug}`;
  }
  return isIndexableCityService(citySlug, serviceSlug)
    ? `/locations/${citySlug}/${serviceSlug}`
    : `/services/${serviceSlug}`;
};
