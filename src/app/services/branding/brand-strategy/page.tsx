import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: 'Brand Strategy Services',
  description: 'Strategic brand strategy consulting by Mapletech Labs. Market positioning, competitive analysis, and brand architecture for lasting market impact.',
  openGraph: {
    title: 'Brand Strategy Services | Mapletech Labs',
    description: 'Strategic brand strategy consulting by Mapletech Labs. Market positioning, competitive analysis, and brand architecture for lasting market impact.',
    url: 'https://mapletechlabs.ca/services/branding/brand-strategy',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/branding/brand-strategy'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('branding', 'brand-strategy');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={'Brand Strategy Services'}
        description={'Strategic brand strategy consulting by Mapletech Labs. Market positioning, competitive analysis, and brand architecture for lasting market impact.'}
        url={'https://mapletechlabs.ca/services/branding/brand-strategy'}
      />
      <PageClient />
    </>
  );
}
