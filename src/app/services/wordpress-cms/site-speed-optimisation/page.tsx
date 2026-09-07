import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: 'WordPress Site Speed Optimisation Services',
  description: 'Transform slow WordPress sites into 90+ Lighthouse performers. Core Web Vitals fixes, caching, CDN setup, and image optimisation by Mapletech Labs, Canada.',
  openGraph: {
    title: 'WordPress Speed Optimisation | Mapletech Labs',
    description: 'Achieve 90+ PageSpeed scores with our WordPress speed optimisation — Core Web Vitals, caching, CDN, and image fixes.',
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
        description={'Transform slow WordPress sites into 90+ Lighthouse performers. Core Web Vitals fixes, caching, CDN setup, and image optimisation by Mapletech Labs, Canada.'}
        url={'https://mapletechlabs.ca/services/wordpress-cms/site-speed-optimisation'}
      />
      <PageClient />
    </>
  );
}
