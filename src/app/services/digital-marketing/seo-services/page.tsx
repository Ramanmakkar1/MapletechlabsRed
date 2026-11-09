import type { Metadata } from 'next';
import { seoTitle } from '@/lib/seo/title';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: seoTitle('SEO Services Canada: Technical & Local'),
  description: 'Results-driven SEO services in Toronto & across Canada. Technical SEO, link building, local SEO, and content strategy. 200% avg organic traffic growth.',
  openGraph: {
    title: 'SEO Services Canada: Technical & Local | Mapletech Labs',
    description: 'Results-driven SEO services in Toronto & across Canada. Technical SEO, link building, local SEO, and content strategy.',
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
        description={'Results-driven SEO services in Toronto & across Canada. Technical SEO, link building, local SEO, and content strategy. 200% avg organic traffic growth.'}
        url={'https://mapletechlabs.ca/services/digital-marketing/seo-services'}
      />
      <PageClient />
    </>
  );
}
