import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Mobile AR Development',
  description: 'Mobile augmented reality development with ARKit and ARCore. Mapletech Labs builds immersive AR experiences for iOS and Android applications.',
  openGraph: {
    title: 'Mobile AR Development | Mapletech Labs',
    description: 'Mobile augmented reality development with ARKit and ARCore. Mapletech Labs builds immersive AR experiences for iOS and Android applications.',
    url: 'https://mapletechlabs.ca/services/ar-vr/mobile-ar',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.ca/services/ar-vr/mobile-ar',
  },
};

export default function Page() {
  return <PageClient />;
}
