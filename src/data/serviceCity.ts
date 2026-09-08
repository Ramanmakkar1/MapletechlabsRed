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
] as const;

export interface ServiceCityCombo { slug: string; citySlug: string; serviceSlug: string; label: string }

export const serviceCityCombos: ServiceCityCombo[] = PRIORITY_SERVICES.flatMap(ps =>
  cities.map(c => ({ slug: `${ps.kw}-company-in-${c.slug}`, citySlug: c.slug, serviceSlug: ps.serviceSlug, label: ps.label }))
);

const bySlug = new Map(serviceCityCombos.map(c => [c.slug, c]));
export const getServiceCityCombo = (slug: string): ServiceCityCombo | undefined => bySlug.get(slug);
export const serviceCitySlugs = serviceCityCombos.map(c => c.slug);

const kwFor: Record<string, string> = Object.fromEntries(PRIORITY_SERVICES.map(p => [p.serviceSlug, p.kw]));
export const isPriorityService = (serviceSlug: string): boolean => serviceSlug in kwFor;

/** Canonical path for a service in a city: keyword URL for priority services, else the mesh URL. */
export const serviceCityPath = (serviceSlug: string, citySlug: string): string =>
  kwFor[serviceSlug] ? `/locations/${kwFor[serviceSlug]}-company-in-${citySlug}` : `/locations/${citySlug}/${serviceSlug}`;
