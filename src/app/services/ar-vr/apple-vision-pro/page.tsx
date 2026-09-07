import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

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
    canonical: canonicalUrl('/services/ar-vr/apple-vision-pro'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('ar-vr', 'apple-vision-pro');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={'Apple Vision Pro App Development | Canada'}
        description={'visionOS app development with SwiftUI and RealityKit. Mapletech Labs builds spatial computing apps for Apple Vision Pro from Toronto, Canada.'}
        url={'https://mapletechlabs.ca/services/ar-vr/apple-vision-pro'}
      />
      <PageClient />
    </>
  );
}
