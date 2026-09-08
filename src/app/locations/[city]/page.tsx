import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getServiceCityCombo, serviceCitySlugs } from '@/data/serviceCity';
import { getCityServiceData } from '@/data/city-service';
import { canonicalUrl } from '@/lib/seo/canonical';
import ServiceCityTemplate from '@/components/page/ServiceCityTemplate';

interface PageProps {
  params: Promise<{ city: string }>;
}

// Single-segment /locations/<slug> handles the priority "[service] company in [city]"
// keyword pages. Static city-landing and province folders take precedence for their
// own paths; old bare /locations/<city> paths are 301-redirected in next.config.
export function generateStaticParams() {
  return serviceCitySlugs.map(slug => ({ city: slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: slug } = await params;
  const combo = getServiceCityCombo(slug);
  if (!combo) return {};
  const data = getCityServiceData(combo.citySlug, combo.serviceSlug);
  if (!data) return {};
  const base = `${combo.label} Company in ${data.cityName}`;
  const title = base.length <= 43 ? base : `${combo.label} in ${data.cityName}`;
  const url = canonicalUrl(`/locations/${slug}`);
  return {
    title,
    description: data.description,
    openGraph: { title: `${title} | Mapletech Labs`, description: data.description, url, type: 'website' },
    alternates: { canonical: url },
  };
}

export default async function ServiceCityPage({ params }: PageProps) {
  const { city: slug } = await params;
  const combo = getServiceCityCombo(slug);
  if (!combo) notFound();

  const raw = getCityServiceData(combo.citySlug, combo.serviceSlug);
  if (!raw) notFound();

  // Display the keyword label (e.g. "AI Development") rather than the formal
  // service name, so the H1 and headings match the target query.
  const data = { ...raw, serviceName: combo.label };
  const url = `https://mapletechlabs.ca/locations/${slug}`;
  const cityLanding = `https://mapletechlabs.ca/locations/software-development-company-in-${combo.citySlug}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: `${combo.label} in ${data.cityName}`,
        provider: { '@type': 'Organization', name: 'Mapletech Labs', url: 'https://mapletechlabs.ca' },
        areaServed: { '@type': 'City', name: data.cityName, containedInPlace: { '@type': 'AdministrativeArea', name: data.province } },
        serviceType: combo.label,
        description: data.description,
        url,
      },
      {
        '@type': 'ProfessionalService',
        name: `Mapletech Labs ${data.cityName}`,
        url: cityLanding,
        address: { '@type': 'PostalAddress', addressLocality: data.cityName, addressRegion: data.provinceAbbr, addressCountry: 'CA' },
        priceRange: '$$$',
        image: 'https://mapletechlabs.ca/logo.png',
      },
      {
        '@type': 'FAQPage',
        mainEntity: data.faqs.map(faq => ({ '@type': 'Question', name: faq.q, acceptedAnswer: { '@type': 'Answer', text: faq.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mapletechlabs.ca' },
          { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://mapletechlabs.ca/locations' },
          { '@type': 'ListItem', position: 3, name: data.cityName, item: cityLanding },
          { '@type': 'ListItem', position: 4, name: `${combo.label} in ${data.cityName}`, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServiceCityTemplate data={data} />
    </>
  );
}
