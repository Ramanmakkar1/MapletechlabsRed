import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { seoDescription } from '@/lib/seo/description';
import { ogTitle, seoTitle } from '@/lib/seo/title';

const TITLE = 'Performance Scaling & Optimization Services';
const DESCRIPTION = 'Performance scaling and optimization in Canada: load testing, database tuning, CDN strategy and autoscaling that keep apps at 99.99% uptime. Free audit.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: ogTitle(TITLE),
    description: seoDescription(DESCRIPTION),
    url: 'https://mapletechlabs.ca/services/cloud-devops/performance-scaling',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/cloud-devops/performance-scaling'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('cloud-devops', 'performance-scaling');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={'Performance Scaling & Optimization'}
        description={DESCRIPTION}
        url={'https://mapletechlabs.ca/services/cloud-devops/performance-scaling'}
      />
      <PageClient />
    </>
  );
}
