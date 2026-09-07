/**
 * Service structured data for a service, sub-service or industry page.
 *
 * Sub-service and industry pages previously emitted only Organization and
 * BreadcrumbList, so Google had nothing telling it what the page actually
 * sells or where it is sold. Everything below comes from real page metadata —
 * no invented ratings, prices or review counts.
 */
export function ServiceSchema({
  name,
  description,
  url,
  serviceType,
  areaServed = 'Canada',
}: {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
  areaServed?: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    ...(serviceType && { serviceType }),
    provider: {
      '@type': 'Organization',
      name: 'Mapletech Labs',
      url: 'https://mapletechlabs.ca',
    },
    areaServed: {
      '@type': 'Country',
      name: areaServed,
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: url,
      servicePhone: {
        '@type': 'ContactPoint',
        telephone: '+1-403-604-8692',
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
