import type { Metadata } from 'next';
import { seoTitle } from '@/lib/seo/title';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: seoTitle('Rebranding Services for Canadian Businesses'),
  description: 'Strategic rebranding services by Mapletech Labs. Refresh your brand identity, messaging, and visual language to stay relevant and competitive.',
  openGraph: {
    title: 'Rebranding Services for Canadian Businesses | Mapletech Labs',
    description: 'Strategic rebranding services by Mapletech Labs. Refresh your brand identity, messaging, and visual language to stay relevant and competitive.',
    url: 'https://mapletechlabs.ca/services/branding/rebranding',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/branding/rebranding'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('branding', 'rebranding');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={'Rebranding Services'}
        description={'Strategic rebranding services by Mapletech Labs. Refresh your brand identity, messaging, and visual language to stay relevant and competitive.'}
        url={'https://mapletechlabs.ca/services/branding/rebranding'}
      />
      <PageClient />
    </>
  );
}
