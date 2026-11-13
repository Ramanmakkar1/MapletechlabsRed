import type { Metadata } from 'next';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

const TITLE = 'PPC & Google Ads Management in Canada';
const DESCRIPTION = 'Google Ads and PPC management in Canada: Search, Shopping, Display and YouTube campaigns with a 3.5x average ROAS from a Google Premier Partner agency.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: ogTitle(TITLE),
    description: seoDescription(DESCRIPTION),
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
