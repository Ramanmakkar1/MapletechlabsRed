import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { seoTitle, ogTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';

const TITLE = 'Next.js Development Company in Canada';
const DESCRIPTION = 'Next.js development company in Canada: fast, SEO-friendly React sites with server rendering, static generation and Core Web Vitals built in. Get a quote.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: ogTitle(TITLE),
    description: seoDescription(DESCRIPTION),
    url: 'https://mapletechlabs.ca/services/web-development/nextjs-development',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/web-development/nextjs-development'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('web-development', 'nextjs-development');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={'Next.js Development Services'}
        description={DESCRIPTION}
        url={'https://mapletechlabs.ca/services/web-development/nextjs-development'}
      />
      <PageClient />
    </>
  );
}
