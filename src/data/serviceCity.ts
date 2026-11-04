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
export const AGENCY_CITIES = ['edmonton', 'calgary', 'toronto', 'vancouver', 'ottawa', 'montreal'] as const;

export const agencyCombos: ServiceCityCombo[] = AGENCY_CITIES.map(c => ({
  slug: `digital-marketing-agency-in-${c}`,
  citySlug: c,
  serviceSlug: 'digital-marketing',
  label: 'Digital Marketing Agency',
}));

const allServiceCityCombos = [...serviceCityCombos, ...agencyCombos];

const bySlug = new Map(allServiceCityCombos.map(c => [c.slug, c]));
export const getServiceCityCombo = (slug: string): ServiceCityCombo | undefined => bySlug.get(slug);
export const serviceCitySlugs = allServiceCityCombos.map(c => c.slug);

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
const NICHE_SERVICES = new Set(['ar-vr', 'blockchain-web3']);
const MAJOR_TECH_CITIES = new Set(['toronto', 'vancouver', 'montreal', 'calgary', 'edmonton', 'ottawa']);

/** Whether a /locations/<city>/<service> mesh page should be indexed and listed in the sitemap. */
export const isIndexableCityService = (citySlug: string, serviceSlug: string): boolean =>
  !NICHE_SERVICES.has(serviceSlug) || MAJOR_TECH_CITIES.has(citySlug);

/** Canonical path for a service in a city: keyword URL for priority services, else the mesh URL. */
export const serviceCityPath = (serviceSlug: string, citySlug: string): string =>
  kwFor[serviceSlug] ? `/locations/${kwFor[serviceSlug]}-company-in-${citySlug}` : `/locations/${citySlug}/${serviceSlug}`;
