import type { Metadata } from 'next';
import { seoTitle, ogTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

const TITLE = 'WooCommerce Store Development in Canada';
const DESCRIPTION = 'WooCommerce store development in Canada: online stores with custom plugins, Canadian payment gateways and shipping integrations. Get a free quote.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
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
