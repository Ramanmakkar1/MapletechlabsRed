import type { Metadata } from 'next';
import { seoTitle, ogTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { DEFAULT_OG_IMAGES } from '@/lib/seo/og';

const TITLE = 'WooCommerce Store Development in Canada';
const DESCRIPTION = 'WooCommerce store development in Canada: online stores with custom plugins, Canadian payment gateways and shipping integrations. Get a free quote.';

// Fully content-driven: prerender at build time and serve statically until the next deployment.
export const dynamic = 'force-static';
// Numeric window so the host emits a long s-maxage instead of its 300 s default.
export const revalidate = 31536000;

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    images: DEFAULT_OG_IMAGES,
    title: ogTitle(TITLE),
    description: seoDescription(DESCRIPTION),
    url: 'https://mapletechlabs.ca/services/wordpress-cms/woocommerce-stores',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/wordpress-cms/woocommerce-stores'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('wordpress-cms', 'woocommerce-stores');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={'WooCommerce Store Development'}
        description={DESCRIPTION}
        url={'https://mapletechlabs.ca/services/wordpress-cms/woocommerce-stores'}
      />
      <PageClient />
    </>
  );
}
