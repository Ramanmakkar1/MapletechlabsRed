import { buildBreadcrumbSchema, type BreadcrumbItem } from '@/lib/seo/schema';
import { safeJsonLd } from '@/lib/seo/jsonLd';

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = buildBreadcrumbSchema(items);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }}
    />
  );
}
