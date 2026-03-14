import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'VR Application Development',
  description: 'Virtual reality application development for Meta Quest, HTC Vive, and enterprise. Mapletech Labs creates immersive VR training and experiences.',
  openGraph: {
    title: 'VR Application Development | Mapletech Labs',
    description: 'Virtual reality application development for Meta Quest, HTC Vive, and enterprise. Mapletech Labs creates immersive VR training and experiences.',
    url: 'https://mapletechlabs.com/services/ar-vr/vr-applications',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.com/services/ar-vr/vr-applications',
  },
};

export default function Page() {
  return <PageClient />;
}
