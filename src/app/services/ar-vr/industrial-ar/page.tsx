import type { Metadata } from 'next';
import { seoTitle } from '@/lib/seo/title';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: seoTitle('Industrial AR Solutions | HoloLens Development'),
  description: 'Enterprise industrial AR for manufacturing and maintenance. HoloLens 2, digital twins, and IoT overlays by Mapletech Labs in Toronto, Canada.',
  openGraph: {
    title: 'Industrial AR Solutions | Mapletech Labs',
    description: 'Enterprise industrial AR for manufacturing and maintenance. HoloLens 2, digital twins and IoT overlays, 15+ deployments, 40% average error reduction',
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
        description={'Enterprise industrial AR for manufacturing and maintenance. HoloLens 2, digital twins, and IoT overlays by Mapletech Labs in Toronto, Canada.'}
        url={'https://mapletechlabs.ca/services/ar-vr/industrial-ar'}
      />
      <PageClient />
    </>
  );
}
