import { buildFaqSchema, buildServiceSchema } from '@/lib/seo/schema';

export { cleanServiceName } from '@/lib/seo/schema';

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
  areaServed,
  areaServedType = 'Country',
}: {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
  areaServed?: string | string[];
  areaServedType?: 'Country' | 'AdministrativeArea';
}) {
  const schema = buildServiceSchema({
    name,
    description,
    url,
    serviceType,
    areaServed,
    areaServedType,
  });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/** FAQPage for a page that already renders these questions on screen. */
export function FaqSchema({ faqs }: { faqs: { q: string; a: string }[] }) {
  const schema = buildFaqSchema(faqs);
  if (!schema) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
