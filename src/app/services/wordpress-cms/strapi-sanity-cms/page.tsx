import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { seoDescription } from '@/lib/seo/description';
import { ogTitle, seoTitle } from '@/lib/seo/title';

const DESCRIPTION = 'Expert Strapi and Sanity headless CMS setup with Next.js integration, live preview, and content migration. Edmonton-based Mapletech Labs. 30+ CMS projects.';
const TITLE = 'Strapi & Sanity CMS Development in Canada';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: ogTitle(TITLE),
    description: DESCRIPTION,
    url: 'https://mapletechlabs.ca/services/wordpress-cms/strapi-sanity-cms',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/wordpress-cms/strapi-sanity-cms'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('wordpress-cms', 'strapi-sanity-cms');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={'Strapi & Sanity CMS Development Services'}
        description={DESCRIPTION}
        url={'https://mapletechlabs.ca/services/wordpress-cms/strapi-sanity-cms'}
      />
      <PageClient />
    </>
  );
}
