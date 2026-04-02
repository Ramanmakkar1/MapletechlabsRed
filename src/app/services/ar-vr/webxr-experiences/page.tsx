import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'WebXR Development Services',
  description: 'Browser-based AR and VR experiences with WebXR. Mapletech Labs builds immersive 3D web applications accessible on any device.',
  openGraph: {
    title: 'WebXR Development Services | Mapletech Labs',
    description: 'Browser-based AR and VR experiences with WebXR. Mapletech Labs builds immersive 3D web applications accessible on any device.',
    url: 'https://mapletechlabs.ca/services/ar-vr/webxr-experiences',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.ca/services/ar-vr/webxr-experiences',
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('ar-vr', 'webxr-experiences');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <PageClient />
    </>
  );
}
