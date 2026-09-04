import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: 'Cross-Platform App Development',
  description: 'Cross-platform mobile app development services. Mapletech Labs builds apps that run on iOS and Android with shared codebases and native performance.',
  openGraph: {
    title: 'Cross-Platform App Development | Mapletech Labs',
    description: 'Cross-platform mobile app development services. Mapletech Labs builds apps that run on iOS and Android with shared codebases and native performance.',
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
      <PageClient />
    </>
  );
}
