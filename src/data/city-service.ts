import { CityData, getCityBySlug, cities } from './cities';
import { ServiceData, getServiceBySlug, services } from './services';

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

  // Generate related city+service links (other services in same city)
  const relatedCityServices = services
    .filter(s => s.slug !== serviceSlug)
    .slice(0, 4)
    .map(s => ({
      name: s.shortName,
      citySlug: city.slug,
      serviceSlug: s.slug,
    }));

  // Process FAQs with city data
  const processedFaqs = service.faqs.map(faq => ({
    q: replacePlaceholders(faq.q, city),
    a: replacePlaceholders(faq.a, city),
  }));

  // Build hero description with city context
  const heroDescription = replacePlaceholders(service.heroDescription, city);

  // SEO metadata
  const title = `${service.heroHeadlinePrefix} Company in ${city.name}`;
  const description = `${service.heroHeadlinePrefix} company in ${city.name}, ${city.province}. Mapletech Labs delivers custom ${service.shortName.toLowerCase()} solutions. ${city.isHQ ? 'Headquartered in Edmonton.' : '12 locations across Canada.'} Get a free quote today.`;
  const canonicalUrl = `https://mapletechlabs.com/locations/${city.slug}/${service.slug}`;

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
