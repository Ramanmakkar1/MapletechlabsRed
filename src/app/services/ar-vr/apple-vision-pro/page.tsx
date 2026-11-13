import type { Metadata } from 'next';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

const TITLE = 'Apple Vision Pro App Development | Canada';
const DESCRIPTION = 'Apple Vision Pro app development in Canada: visionOS apps built with SwiftUI and RealityKit for immersive spatial computing, from our Edmonton team.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: ogTitle(TITLE),
    description: seoDescription(DESCRIPTION),
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
        name={'Apple Vision Pro App Development'}
        description={DESCRIPTION}
        url={'https://mapletechlabs.ca/services/ar-vr/apple-vision-pro'}
      />
      <PageClient />
    </>
  );
}
