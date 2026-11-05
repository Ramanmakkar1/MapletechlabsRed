import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { seoTitle } from '@/lib/seo/title';

const TITLE = 'Flutter App Development Company in Canada: Get Quote';

const description =
  'Hire a Flutter app development company in Canada for new iOS and Android apps, extensions and phased native migrations. One codebase. Get a quote.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description,
  openGraph: {
    title: TITLE,
    description,
    url: 'https://mapletechlabs.ca/services/mobile-app-development/flutter-development',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/mobile-app-development/flutter-development'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('mobile-app-development', 'flutter-development');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={'Flutter App Development Services'}
        description={description}
        url={'https://mapletechlabs.ca/services/mobile-app-development/flutter-development'}
      />
      <PageClient />
    </>
  );
}
