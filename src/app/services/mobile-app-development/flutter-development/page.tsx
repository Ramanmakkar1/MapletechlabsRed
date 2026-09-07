import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: 'Flutter App Development Services',
  description: 'Cross-platform Flutter app development by Mapletech Labs. Build beautiful, natively compiled apps for mobile, web, and desktop from a single codebase.',
  openGraph: {
    title: 'Flutter App Development Services | Mapletech Labs',
    description: 'Cross-platform Flutter app development by Mapletech Labs. Build beautiful, natively compiled apps for mobile, web, and desktop from a single codebase.',
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
        description={'Cross-platform Flutter app development by Mapletech Labs. Build beautiful, natively compiled apps for mobile, web, and desktop from a single codebase.'}
        url={'https://mapletechlabs.ca/services/mobile-app-development/flutter-development'}
      />
      <PageClient />
    </>
  );
}
