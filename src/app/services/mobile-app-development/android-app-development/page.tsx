import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: 'Android App Development Services',
  description: 'Professional Android app development with Kotlin & Jetpack Compose. Mapletech Labs creates scalable apps for phones, tablets, and foldables.',
  openGraph: {
    title: 'Android App Development Services | Mapletech Labs',
    description: 'Professional Android app development with Kotlin & Jetpack Compose. Mapletech Labs creates scalable apps for phones, tablets, and foldables.',
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
      <PageClient />
    </>
  );
}
