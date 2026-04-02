import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Apple Vision Pro App Development | Canada',
  description: 'visionOS app development with SwiftUI and RealityKit. Mapletech Labs builds spatial computing apps for Apple Vision Pro from Toronto, Canada.',
  openGraph: {
    title: 'Apple Vision Pro App Development | Mapletech Labs',
    description: 'visionOS app development with SwiftUI and RealityKit for spatial computing experiences.',
    url: 'https://mapletechlabs.ca/services/ar-vr/apple-vision-pro',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.ca/services/ar-vr/apple-vision-pro',
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('ar-vr', 'apple-vision-pro');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <PageClient />
    </>
  );
}
