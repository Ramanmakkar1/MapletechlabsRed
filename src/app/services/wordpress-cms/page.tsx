import type { Metadata } from 'next';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { serviceBreadcrumbSchema, serviceHubSchema } from '@/lib/seo/serviceHubSchema';
import { DEFAULT_OG_IMAGES } from '@/lib/seo/og';

const TITLE = 'WordPress & CMS Development in Canada';
const DESCRIPTION = 'WordPress development in Canada: custom themes, WooCommerce stores, headless WordPress and Strapi CMS builds for Canadian businesses. Get a free quote.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    images: DEFAULT_OG_IMAGES,
    title: ogTitle(TITLE),
    description: DESCRIPTION,
    url: 'https://mapletechlabs.ca/services/wordpress-cms',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/wordpress-cms'),
  },
};

const serviceSchema = serviceHubSchema({
  slug: 'wordpress-cms',
  name: 'WordPress & CMS Development',
  serviceType: 'WordPress & CMS Development',
  description: DESCRIPTION,
});

const breadcrumbSchema = serviceBreadcrumbSchema({ slug: 'wordpress-cms', label: 'WordPress & CMS' });

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageClient />
    </>
  );
}
