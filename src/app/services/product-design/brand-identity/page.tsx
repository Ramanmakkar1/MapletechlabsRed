import type { Metadata } from 'next';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

const TITLE = 'Brand Identity Design Agency in Canada';
const DESCRIPTION = 'Brand identity design agency in Canada: naming, logo systems, typography and guidelines that work across product, web and print, for 100+ brands so far.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: ogTitle(TITLE),
    description: seoDescription(DESCRIPTION),
    url: 'https://mapletechlabs.ca/services/product-design/brand-identity',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/product-design/brand-identity'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('product-design', 'brand-identity');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={'Brand Identity Design'}
        description={DESCRIPTION}
        url={'https://mapletechlabs.ca/services/product-design/brand-identity'}
      />
      <PageClient />
    </>
  );
}
