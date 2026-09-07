import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: 'iOS App Development Services',
  description: 'Expert iOS app development with Swift & SwiftUI. Mapletech Labs builds high-performance native iPhone and iPad apps. 200+ iOS apps delivered.',
  openGraph: {
    title: 'iOS App Development Services | Mapletech Labs',
    description: 'Expert iOS app development with Swift & SwiftUI. Mapletech Labs builds high-performance native iPhone and iPad apps. 200+ iOS apps delivered.',
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
        description={'Expert iOS app development with Swift & SwiftUI. Mapletech Labs builds high-performance native iPhone and iPad apps. 200+ iOS apps delivered.'}
        url={'https://mapletechlabs.ca/services/mobile-app-development/ios-app-development'}
      />
      <PageClient />
    </>
  );
}
