import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: 'Brand Guidelines Development',
  description: 'Comprehensive brand guidelines by Mapletech Labs. Usage rules, asset libraries, and style guides that maintain brand consistency across all touchpoints.',
  openGraph: {
    title: 'Brand Guidelines Development | Mapletech Labs',
    description: 'Comprehensive brand guidelines by Mapletech Labs. Usage rules, asset libraries, and style guides that maintain brand consistency across all touchpoints.',
    url: 'https://mapletechlabs.ca/services/branding/brand-guidelines',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/branding/brand-guidelines'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('branding', 'brand-guidelines');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={'Brand Guidelines Development'}
        description={'Comprehensive brand guidelines by Mapletech Labs. Usage rules, asset libraries, and style guides that maintain brand consistency across all touchpoints.'}
        url={'https://mapletechlabs.ca/services/branding/brand-guidelines'}
      />
      <PageClient />
    </>
  );
}
