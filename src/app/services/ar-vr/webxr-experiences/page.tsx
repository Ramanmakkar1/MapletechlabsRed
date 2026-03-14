import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'WebXR Development Services',
  description: 'Browser-based AR and VR experiences with WebXR. Mapletech Labs builds immersive 3D web applications accessible on any device.',
  openGraph: {
    title: 'WebXR Development Services | Mapletech Labs',
    description: 'Browser-based AR and VR experiences with WebXR. Mapletech Labs builds immersive 3D web applications accessible on any device.',
    url: 'https://www.mapletechlabs.com/services/ar-vr/webxr-experiences',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.mapletechlabs.com/services/ar-vr/webxr-experiences',
  },
};

export default function Page() {
  return <PageClient />;
}
