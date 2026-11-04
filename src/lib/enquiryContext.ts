// Service + city context carried from a service/city page into /contact enquiries.
// Only allowlisted slugs are accepted; no personal information ever goes in the URL.

export interface ContextOption { slug: string; name: string }

/** Maps a service slug to the matching ContactPage PROJECT_TYPES option. */
export const SERVICE_PROJECT_TYPE: Record<string, string> = {
  'mobile-app-development': 'Mobile App',
  'web-development': 'Web Platform',
  'saas-development': 'Web Platform',
  'wordpress-cms': 'Web Platform',
  'ai-ml': 'AI / ML Solution',
  'product-design': 'Product Design',
  branding: 'Product Design',
  'blockchain-web3': 'Blockchain / Web3',
  'cloud-devops': 'Custom Engineering',
  'ar-vr': 'Custom Engineering',
  'game-development': 'Custom Engineering',
  'digital-marketing': 'SEO / Digital Marketing',
};

/** /contact link with validated service and city slugs; falls back to /contact. */
export function contactHrefFor(serviceSlug: string | undefined, citySlug: string | undefined, services: ContextOption[], cities: ContextOption[]): string {
  const params = new URLSearchParams();
  if (serviceSlug && services.some(s => s.slug === serviceSlug)) params.set('service', serviceSlug);
  if (citySlug && cities.some(c => c.slug === citySlug)) params.set('city', citySlug);
  const q = params.toString();
  return q ? `/contact?${q}` : '/contact';
}

/** Reads ?service=&city= and returns only values found in the allowlists. */
export function readEnquiryContext(search: string, services: ContextOption[], cities: ContextOption[]) {
  const params = new URLSearchParams(search);
  const service = services.find(s => s.slug === params.get('service'));
  const city = cities.find(c => c.slug === params.get('city'));
  return { service: service?.slug ?? '', city: city?.slug ?? '' };
}

/** Optional context fields added to the existing submission payload. */
export function contextFields(service: string, city: string, services: ContextOption[], cities: ContextOption[]): Record<string, string> {
  const out: Record<string, string> = {};
  const s = services.find(o => o.slug === service);
  const c = cities.find(o => o.slug === city);
  if (s) out.service = s.name;
  if (c) out.city = c.name;
  return out;
}
