import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { seoTitle, ogTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';

const TITLE = 'React Native App Development Company in Canada';
const DESCRIPTION = 'Hire a React Native app development company in Canada for new iOS and Android builds, existing app extensions and migration assessments. Get a quote.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: ogTitle(TITLE),
    description: seoDescription(DESCRIPTION),
    url: 'https://mapletechlabs.ca/services/mobile-app-development/react-native-apps',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/mobile-app-development/react-native-apps'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('mobile-app-development', 'react-native-apps');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={'React Native App Development'}
        description={DESCRIPTION}
        url={'https://mapletechlabs.ca/services/mobile-app-development/react-native-apps'}
      />
      <PageClient />
    </>
  );
}
