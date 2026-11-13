import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { seoTitle, ogTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';

const TITLE = 'Android App Development Company in Canada';
const DESCRIPTION = 'Android app development company in Canada: Kotlin and Jetpack Compose apps for phones, tablets and foldables, built to scale on Google Play. Get a quote.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: ogTitle(TITLE),
    description: seoDescription(DESCRIPTION),
    url: 'https://mapletechlabs.ca/services/mobile-app-development/android-app-development',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/mobile-app-development/android-app-development'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('mobile-app-development', 'android-app-development');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={'Android App Development Services'}
        description={DESCRIPTION}
        url={'https://mapletechlabs.ca/services/mobile-app-development/android-app-development'}
      />
      <PageClient />
    </>
  );
}
