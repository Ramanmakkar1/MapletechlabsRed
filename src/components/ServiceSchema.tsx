import { BUSINESS } from '@/lib/seo/business';
import { siteOrigin } from '@/lib/seo/canonical';

/**
 * Service structured data for a service, sub-service or industry page.
 *
 * Sub-service and industry pages previously emitted only Organization and
 * BreadcrumbList, so Google had nothing telling it what the page actually
 * sells or where it is sold. Everything below comes from real page metadata —
 * no invented ratings, prices or review counts.
 */
/** Strip title suffixes (e.g. '| Toronto') so the schema name is the plain service name. */
export function cleanServiceName(name: string): string {
  const first = name.split(/\s+[|–—]\s+/)[0].trim();
  return first.replace(/\s*\|\s*Mapletech Labs$/i, '').trim() || name.trim();
}

export function ServiceSchema({
  name,
  description,
  url,
  serviceType,
  areaServed = 'Canada',
  areaServedType = 'Country',
}: {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
  areaServed?: string;
  areaServedType?: 'Country' | 'AdministrativeArea';
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: cleanServiceName(name),
    description,
    url,
    ...(serviceType && { serviceType }),
    provider: {
      '@type': 'Organization',
      '@id': `${siteOrigin()}/#organization`,
      name: 'Mapletech Labs',
      url: siteOrigin(),
    },
    areaServed: {
      '@type': areaServedType,
      name: areaServed,
      ...(areaServedType === 'AdministrativeArea' && {
        containedInPlace: { '@type': 'Country', name: 'Canada' },
      }),
    },
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

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/** FAQPage for a page that already renders these questions on screen. */
export function FaqSchema({ faqs }: { faqs: { q: string; a: string }[] }) {
  if (!faqs.length) return null;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
