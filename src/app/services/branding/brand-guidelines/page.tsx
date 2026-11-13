import type { Metadata } from 'next';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

const TITLE = 'Brand Guidelines Development in Canada';
const DESCRIPTION = 'Brand guidelines development in Canada: usage rules, asset libraries and style guides that keep your brand consistent across every touchpoint. Get a quote.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: ogTitle(TITLE),
    description: seoDescription(DESCRIPTION),
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
        description={DESCRIPTION}
        url={'https://mapletechlabs.ca/services/branding/brand-guidelines'}
      />
      <PageClient />
    </>
  );
}
