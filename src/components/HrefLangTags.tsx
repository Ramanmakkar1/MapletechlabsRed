'use client';

import { usePathname } from 'next/navigation';
import { canonicalPath, siteOrigin } from '@/lib/seo/canonical';

/**
 * HrefLangTags Component
 *
 * Generates hreflang tags for bilingual content (English and French)
 * Supports the following language/region combinations:
 * - hreflang="en-ca" → {siteOrigin}{currentPath}
 * - hreflang="fr-ca" → {siteOrigin}/fr{currentPath}
 * - hreflang="x-default" → {siteOrigin}{currentPath}
 */
export default function HrefLangTags() {
  const pathname = usePathname();

  // Remove 'fr' prefix if the current path is French
  // e.g., /fr/services → /services
  const basePath = canonicalPath(
    pathname.startsWith('/fr/')
      ? pathname.slice(3)
      : pathname === '/fr'
        ? '/'
        : pathname
  );

  const baseUrl = siteOrigin();
  const enUrl = `${baseUrl}${basePath}`;
  const frUrl = `${baseUrl}/fr${basePath === '/' ? '' : basePath}`;

  return (
    <>
      <link rel="alternate" hrefLang="en-ca" href={enUrl} />
      <link rel="alternate" hrefLang="fr-ca" href={frUrl} />
      <link rel="alternate" hrefLang="x-default" href={enUrl} />
    </>
  );
}
