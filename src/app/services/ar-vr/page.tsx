import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'AR & VR Development Services',
  description: 'Augmented and virtual reality development by Mapletech Labs. Mobile AR, VR applications, WebXR, Apple Vision Pro, and industrial AR solutions.',
  openGraph: {
    title: 'AR & VR Development Services | Mapletech Labs',
    description: 'Augmented and virtual reality development by Mapletech Labs. Mobile AR, VR applications, WebXR, Apple Vision Pro, and industrial AR solutions.',
    url: 'https://www.mapletechlabs.com/services/ar-vr',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.mapletechlabs.com/services/ar-vr',
  },
};

export default function Page() {
  return <PageClient />;
}
