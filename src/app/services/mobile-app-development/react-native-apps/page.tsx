import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: 'React Native App Development Company',
  description: 'Hire a React Native app development company in Canada for new iOS and Android builds, existing app extensions and migration assessments. Get a quote.',
  openGraph: {
    title: 'React Native App Development Company | Mapletech Labs',
    description: 'Hire a React Native app development company in Canada for new iOS and Android builds, existing app extensions and migration assessments. Get a quote.',
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
        description={'Hire a React Native app development company in Canada for new iOS and Android builds, existing app extensions and migration assessments. Get a quote.'}
        url={'https://mapletechlabs.ca/services/mobile-app-development/react-native-apps'}
      />
      <PageClient />
    </>
  );
}
