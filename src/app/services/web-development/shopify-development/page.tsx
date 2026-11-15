import type { Metadata } from 'next';
import { seoDescription } from '@/lib/seo/description';
import { seoTitle, ogTitle } from '@/lib/seo/title';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { DEFAULT_OG_IMAGES } from '@/lib/seo/og';

const TITLE = 'Shopify Development Company in Canada';
const DESCRIPTION = 'Shopify development in Canada by Edmonton-based Mapletech Labs: custom themes, headless Shopify, apps and migrations at fixed CAD price. Get a free quote.';

export const dynamic = 'force-static';
export const revalidate = false;

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    images: DEFAULT_OG_IMAGES,
    title: ogTitle(TITLE),
    description: seoDescription(DESCRIPTION),
    url: 'https://mapletechlabs.ca/services/web-development/shopify-development',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/web-development/shopify-development'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('web-development', 'shopify-development');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={'Shopify Development'}
        description={DESCRIPTION}
        url={'https://mapletechlabs.ca/services/web-development/shopify-development'}
      />
      <PageClient />
    </>
  );
}
