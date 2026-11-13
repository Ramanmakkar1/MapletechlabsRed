import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { seoDescription } from '@/lib/seo/description';
import { ogTitle, seoTitle } from '@/lib/seo/title';

const DESCRIPTION = 'Headless WordPress with Next.js frontends for blazing-fast performance. WPGraphQL, ISR, CDN delivery by Edmonton-based Mapletech Labs. 40+ projects shipped';
const TITLE = 'Headless WordPress Development in Canada';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: ogTitle(TITLE),
    description: DESCRIPTION,
    url: 'https://mapletechlabs.ca/services/wordpress-cms/headless-wordpress',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/wordpress-cms/headless-wordpress'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('wordpress-cms', 'headless-wordpress');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={'Headless WordPress Development Services'}
        description={DESCRIPTION}
        url={'https://mapletechlabs.ca/services/wordpress-cms/headless-wordpress'}
      />
      <PageClient />
    </>
  );
}
