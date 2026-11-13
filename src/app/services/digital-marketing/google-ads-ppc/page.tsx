import type { Metadata } from 'next';
import { seoTitle } from '@/lib/seo/title';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

const DESCRIPTION = 'Google Ads & PPC management across Canada, Edmonton to Toronto: Search, Shopping, Display and YouTube campaigns, 3.5x avg ROAS. Google Premier Partner.';

export const metadata: Metadata = {
  title: seoTitle('PPC & Google Ads Management in Canada'),
  description: DESCRIPTION,
  openGraph: {
    title: 'PPC & Google Ads Management in Canada | Mapletech Labs',
    description: DESCRIPTION,
    url: 'https://mapletechlabs.ca/services/digital-marketing/google-ads-ppc',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/digital-marketing/google-ads-ppc'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('digital-marketing', 'google-ads-ppc');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={'Google Ads & PPC Management'}
        description={DESCRIPTION}
        url={'https://mapletechlabs.ca/services/digital-marketing/google-ads-ppc'}
      />
      <PageClient />
    </>
  );
}
