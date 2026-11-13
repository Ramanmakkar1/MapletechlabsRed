import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { seoDescription } from '@/lib/seo/description';

const DESCRIPTION = 'Headless WordPress with Next.js frontends for blazing-fast performance. WPGraphQL, ISR, CDN delivery by Edmonton-based Mapletech Labs. 40+ projects shipped';

export const metadata: Metadata = {
  title: 'Headless WordPress Development Services',
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: 'Headless WordPress Development | Mapletech Labs',
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
