import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { seoTitle, ogTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';

const TITLE = 'Custom WordPress Theme Development in Canada';
const DESCRIPTION = 'Custom WordPress theme development in Canada: fast, pixel-perfect themes built from scratch with clean code and SEO best practices. Get a quote.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: ogTitle(TITLE),
    description: seoDescription(DESCRIPTION),
    url: 'https://mapletechlabs.ca/services/wordpress-cms/custom-wordpress-themes',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/wordpress-cms/custom-wordpress-themes'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('wordpress-cms', 'custom-wordpress-themes');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={'Custom WordPress Theme Development'}
        description={DESCRIPTION}
        url={'https://mapletechlabs.ca/services/wordpress-cms/custom-wordpress-themes'}
      />
      <PageClient />
    </>
  );
}
