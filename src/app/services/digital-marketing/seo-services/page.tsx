import type { Metadata } from 'next';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { DEFAULT_OG_IMAGES } from '@/lib/seo/og';

// Approved SEO title: "SEO Services Canada for Business Growth | Maple Tech Labs".
// The title is already branded, so the helper renders it as-is at 57 chars.
const TITLE = 'SEO Services Canada for Business Growth | Maple Tech Labs';
const DESCRIPTION = 'SEO services in Canada from an Edmonton-based team: technical SEO, local SEO, link building and content strategy. 200% avg organic traffic growth.';

export const metadata: Metadata = {
  // Rendered title: "SEO Services Canada for Business Growth | Maple Tech Labs" (57 chars).
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    images: DEFAULT_OG_IMAGES,
    title: ogTitle(TITLE),
    description: seoDescription(DESCRIPTION),
    url: 'https://mapletechlabs.ca/services/digital-marketing/seo-services',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/digital-marketing/seo-services'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('digital-marketing', 'seo-services');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={'SEO Services'}
        description={seoDescription(DESCRIPTION)}
        url={'https://mapletechlabs.ca/services/digital-marketing/seo-services'}
      />
      <PageClient />
    </>
  );
}
