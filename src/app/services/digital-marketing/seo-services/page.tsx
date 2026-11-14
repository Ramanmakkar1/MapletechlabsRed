import type { Metadata } from 'next';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

const TITLE = 'SEO Services in Canada: Local SEO Experts for 2026';
const DESCRIPTION = 'SEO services in Canada from an Edmonton-based team: technical SEO, local SEO, link building and content strategy. 200% avg organic traffic growth.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
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
