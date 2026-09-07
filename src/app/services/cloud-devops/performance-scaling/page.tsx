import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: 'Performance Scaling & Optimization Services',
  description: 'Expert performance engineering and scaling solutions. Load testing, database optimization, CDN strategy, and autoscaling for Canadian businesses. 99.99% uptime.',
  openGraph: {
    title: 'Performance Scaling & Optimization | Mapletech Labs',
    description: 'Expert performance engineering and scaling solutions. Load testing, database optimization, CDN strategy, and autoscaling for Canadian businesses.',
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
        name={'Performance Scaling & Optimization Services'}
        description={'Expert performance engineering and scaling solutions. Load testing, database optimization, CDN strategy, and autoscaling for Canadian businesses. 99.99% uptime.'}
        url={'https://mapletechlabs.ca/services/cloud-devops/performance-scaling'}
      />
      <PageClient />
    </>
  );
}
