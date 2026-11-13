import type { Metadata } from 'next';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

const TITLE = 'Social Media Marketing Agency in Canada';
const DESCRIPTION = 'Social media marketing in Canada: strategy, content creation, community management and paid social from our Edmonton team, with 50M+ impressions generated.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: ogTitle(TITLE),
    description: seoDescription(DESCRIPTION),
    url: 'https://mapletechlabs.ca/services/digital-marketing/social-media-marketing',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/digital-marketing/social-media-marketing'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('digital-marketing', 'social-media-marketing');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={'Social Media Marketing'}
        description={DESCRIPTION}
        url={'https://mapletechlabs.ca/services/digital-marketing/social-media-marketing'}
      />
      <PageClient />
    </>
  );
}
