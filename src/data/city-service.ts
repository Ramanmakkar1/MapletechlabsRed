import { type CityData, getCityBySlug, cities } from './cities';
import { getServiceBySlug, services } from './services';
import { canonicalUrl as buildCanonicalUrl } from '@/lib/seo/canonical';
import { getCityServiceIntersection, type IndustryApplication } from './city-service-content';

export interface CityServicePageData {
  // City data
  cityName: string;
  citySlug: string;
  province: string;
  provinceAbbr: string;
  isHQ: boolean;
  // Service data
  serviceName: string;
  serviceSlug: string;
  badge: string;
  // Merged content
  heroContext: string;
  heroDescription: string;
  stats: { value: string; label: string }[];
  largeServices: { icon: string; title: string; desc: string; tags?: string[] }[];
  smallServices: { icon: string; title: string; desc: string }[];
  whyCity: { icon: string; title: string; desc: string }[];
  steps: { num: string; title: string; duration: string; desc: string; deliverables: string[] }[];
  techCategories: { title: string; items: string[] }[];
  testimonials: { name: string; company: string; role: string; quote: string }[];
  pricingTiers: { name: string; range: string; features: string[] }[];
  faqs: { q: string; a: string }[];
  relatedSubServices: { name: string; slug: string }[];
  relatedCityServices: { name: string; citySlug: string; serviceSlug: string }[];
  sameServiceOtherCities: { cityName: string; citySlug: string; serviceSlug: string }[];
  // City x service intersection content
  intro: string;
  applications: IndustryApplication[];
  // SEO
  title: string;
  description: string;
  canonicalUrl: string;
}

function replacePlaceholders(text: string, city: CityData): string {
  return text
    .replace(/\{city\}/g, city.name)
    .replace(/\{province\}/g, city.province)
    .replace(/\{provinceAbbr\}/g, city.provinceAbbr);
}

export function getCityServiceData(
  citySlug: string,
  serviceSlug: string
): CityServicePageData | null {
  const city = getCityBySlug(citySlug);
  const service = getServiceBySlug(serviceSlug);

  if (!city || !service) return null;

  // Every other service in this city, not a fixed first-four slice. The slice
  // meant all 144 pages pointed at the same 4 destinations, so the remaining
  // city+service pages were reachable only from the sitemap — which is exactly
  // the shape that produces "Discovered - currently not indexed" at scale.
  // Linking the full set makes each city an internally complete mesh.
  const relatedCityServices = services
    .filter(s => s.slug !== serviceSlug)
    .map(s => ({
      name: s.shortName,
      citySlug: city.slug,
      serviceSlug: s.slug,
    }));

  // The same service in every other city. Gives the city axis its own crawl
  // path, so a service page in one city can lead a crawler to the other 11.
  const sameServiceOtherCities = cities
    .filter(c => c.slug !== city.slug)
    .map(c => ({ cityName: c.name, citySlug: c.slug, serviceSlug: service.slug }));

  // Content written for this city+service pairing specifically.
  const intersection = getCityServiceIntersection(city, service);

  // Process FAQs with city data, then append the pairing-specific ones. These
  // also flow into the FAQPage JSON-LD, so each page ships unique FAQ schema
  // instead of 12 cities sharing one service's answers verbatim.
  const processedFaqs = [
    ...service.faqs.map(faq => ({
      q: replacePlaceholders(faq.q, city),
      a: replacePlaceholders(faq.a, city),
    })),
    ...intersection.localFaqs,
  ];

  // Build hero description with city context
  const heroDescription = replacePlaceholders(service.heroDescription, city);

  // SEO metadata
  // Keep "Company" (the higher-intent keyword) wherever the title still fits
  // under ~60 chars once the layout appends " | Mapletech Labs" (17); drop it
  // only for the longest service prefixes so no title is truncated.
  const withCompany = `${service.heroHeadlinePrefix} Company in ${city.name}`;
  const title = withCompany.length <= 43 ? withCompany : `${service.heroHeadlinePrefix} in ${city.name}`;
  const description = `${service.heroHeadlinePrefix} in ${city.name}, ${city.province}. Mapletech Labs builds custom ${service.shortName.toLowerCase()} with fixed-scope, fixed-price delivery. Get a free quote.`;
  const canonicalUrl = buildCanonicalUrl(`/locations/${city.slug}/${service.slug}`);

  return {
    cityName: city.name,
    citySlug: city.slug,
    province: city.province,
    provinceAbbr: city.provinceAbbr,
    isHQ: city.isHQ,
    serviceName: service.name,
    serviceSlug: service.slug,
    badge: service.badge,
    heroContext: city.heroContext,
    heroDescription,
    stats: city.stats,
    largeServices: service.largeServices,
    smallServices: service.smallServices,
    whyCity: city.whyCity,
    steps: service.steps,
    techCategories: service.techCategories,
    testimonials: city.testimonials,
    pricingTiers: service.pricingTiers,
    faqs: processedFaqs,
    relatedSubServices: service.relatedSubServices,
    relatedCityServices,
    sameServiceOtherCities,
    intro: intersection.intro,
    applications: intersection.applications,
    title,
    description,
    canonicalUrl,
  };
}

// Generate all possible city+service combinations for static params
export function getAllCityServiceParams(): { city: string; service: string }[] {
  const params: { city: string; service: string }[] = [];
  for (const city of cities) {
    for (const service of services) {
      params.push({ city: city.slug, service: service.slug });
    }
  }
  return params;
}
