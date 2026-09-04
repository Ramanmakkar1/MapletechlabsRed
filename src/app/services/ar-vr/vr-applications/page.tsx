import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: 'VR Application Development',
  description: 'Virtual reality application development for Meta Quest, HTC Vive, and enterprise. Mapletech Labs creates immersive VR training and experiences.',
  openGraph: {
    title: 'VR Application Development | Mapletech Labs',
    description: 'Virtual reality application development for Meta Quest, HTC Vive, and enterprise. Mapletech Labs creates immersive VR training and experiences.',
    url: 'https://mapletechlabs.ca/services/ar-vr/vr-applications',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/ar-vr/vr-applications'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('ar-vr', 'vr-applications');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <PageClient />
    </>
  );
}
