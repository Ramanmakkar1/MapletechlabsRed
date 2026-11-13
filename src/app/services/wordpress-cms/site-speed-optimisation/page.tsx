import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { seoTitle, ogTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';

const TITLE = 'WordPress Speed Optimisation Services in Canada';
const DESCRIPTION = 'WordPress speed optimisation in Canada: Core Web Vitals fixes, caching, CDN and image optimisation that turn slow sites into 90+ Lighthouse performers.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: ogTitle(TITLE),
    description: seoDescription(DESCRIPTION),
    url: 'https://mapletechlabs.ca/services/wordpress-cms/site-speed-optimisation',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/wordpress-cms/site-speed-optimisation'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('wordpress-cms', 'site-speed-optimisation');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={'WordPress Site Speed Optimisation Services'}
        description={DESCRIPTION}
        url={'https://mapletechlabs.ca/services/wordpress-cms/site-speed-optimisation'}
      />
      <PageClient />
    </>
  );
}
