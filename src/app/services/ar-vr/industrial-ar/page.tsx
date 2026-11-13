import type { Metadata } from 'next';
import { seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

const DESCRIPTION = 'Enterprise industrial AR for manufacturing and maintenance. HoloLens 2, digital twins, and IoT overlays by Edmonton-based Mapletech Labs in Canada.';

export const metadata: Metadata = {
  title: seoTitle('Industrial AR Solutions | HoloLens Development'),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: 'Industrial AR Solutions | Mapletech Labs',
    description: DESCRIPTION,
    url: 'https://mapletechlabs.ca/services/ar-vr/industrial-ar',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/ar-vr/industrial-ar'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('ar-vr', 'industrial-ar');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={'Industrial AR Solutions | HoloLens Development'}
        description={DESCRIPTION}
        url={'https://mapletechlabs.ca/services/ar-vr/industrial-ar'}
      />
      <PageClient />
    </>
  );
}
