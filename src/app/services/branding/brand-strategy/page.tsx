import type { Metadata } from 'next';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

const TITLE = 'Brand Strategy Services for Canadian Firms';
const DESCRIPTION = 'Brand strategy services for Canadian firms: market positioning, competitive analysis and brand architecture that build lasting market impact. Book a call.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: ogTitle(TITLE),
    description: seoDescription(DESCRIPTION),
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
        description={DESCRIPTION}
        url={'https://mapletechlabs.ca/services/branding/brand-strategy'}
      />
      <PageClient />
    </>
  );
}
