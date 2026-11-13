import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { seoTitle, ogTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';

const TITLE = 'Cross-Platform App Development in Canada';
const DESCRIPTION = 'Cross-platform app development in Canada: one shared codebase for iOS and Android with native performance, built in Flutter or React Native. Get a quote.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: ogTitle(TITLE),
    description: seoDescription(DESCRIPTION),
    url: 'https://mapletechlabs.ca/services/mobile-app-development/cross-platform-apps',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/mobile-app-development/cross-platform-apps'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('mobile-app-development', 'cross-platform-apps');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={'Cross-Platform App Development'}
        description={DESCRIPTION}
        url={'https://mapletechlabs.ca/services/mobile-app-development/cross-platform-apps'}
      />
      <PageClient />
    </>
  );
}
