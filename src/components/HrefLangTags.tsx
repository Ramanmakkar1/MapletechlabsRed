'use client';

import { usePathname } from 'next/navigation';

/**
 * HrefLangTags Component
 *
 * Generates hreflang tags for bilingual content (English and French)
 * Supports the following language/region combinations:
 * - hreflang="en-ca" → https://mapletechlabs.ca{currentPath}
 * - hreflang="fr-ca" → https://mapletechlabs.ca/fr{currentPath}
 * - hreflang="x-default" → https://mapletechlabs.ca{currentPath}
 */
export default function HrefLangTags() {
  const pathname = usePathname();

  // Remove 'fr' prefix if the current path is French
  // e.g., /fr/services → /services
  const canonicalPath = pathname.startsWith('/fr/')
    ? pathname.slice(3)
    : pathname === '/fr'
      ? '/'
      : pathname;

  const baseUrl = 'https://mapletechlabs.ca';
  const enUrl = `${baseUrl}${canonicalPath}`;
  const frUrl = `${baseUrl}/fr${canonicalPath}`;

  return (
    <>
      <link rel="alternate" hrefLang="en-ca" href={enUrl} />
      <link rel="alternate" hrefLang="fr-ca" href={frUrl} />
      <link rel="alternate" hrefLang="x-default" href={enUrl} />
    </>
  );
}
