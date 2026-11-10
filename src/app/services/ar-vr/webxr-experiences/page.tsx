import type { Metadata } from 'next';
import { seoTitle } from '@/lib/seo/title';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: seoTitle('WebXR Development Services in Canada'),
  description: 'Browser-based AR and VR experiences with WebXR. Mapletech Labs builds immersive 3D web applications accessible on any device. 20+ built. Book a call.',
  openGraph: {
    title: 'WebXR Development Services in Canada | Mapletech Labs',
    description: 'Browser-based AR and VR experiences with WebXR. Mapletech Labs builds immersive 3D web apps accessible on any device, no install needed. 20+ built',
    url: 'https://mapletechlabs.ca/services/ar-vr/webxr-experiences',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/ar-vr/webxr-experiences'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('ar-vr', 'webxr-experiences');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={'WebXR Development Services'}
        description={'Browser-based AR and VR experiences with WebXR. Mapletech Labs builds immersive 3D web applications accessible on any device.'}
        url={'https://mapletechlabs.ca/services/ar-vr/webxr-experiences'}
      />
      <PageClient />
    </>
  );
}
