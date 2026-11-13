import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { seoTitle, ogTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';

const TITLE = 'iOS App Development Company in Canada';
const DESCRIPTION = 'iOS app development company in Canada: native iPhone and iPad apps in Swift and SwiftUI, from MVP to launch. 200+ iOS apps delivered. Get a quote.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: ogTitle(TITLE),
    description: seoDescription(DESCRIPTION),
    url: 'https://mapletechlabs.ca/services/mobile-app-development/ios-app-development',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/mobile-app-development/ios-app-development'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('mobile-app-development', 'ios-app-development');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={'iOS App Development Services'}
        description={DESCRIPTION}
        url={'https://mapletechlabs.ca/services/mobile-app-development/ios-app-development'}
      />
      <PageClient />
    </>
  );
}
