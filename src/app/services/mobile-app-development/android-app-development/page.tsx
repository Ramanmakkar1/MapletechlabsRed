import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Android App Development Services',
  description: 'Professional Android app development with Kotlin & Jetpack Compose. Mapletech Labs creates scalable apps for phones, tablets, and foldables.',
  openGraph: {
    title: 'Android App Development Services | Mapletech Labs',
    description: 'Professional Android app development with Kotlin & Jetpack Compose. Mapletech Labs creates scalable apps for phones, tablets, and foldables.',
    url: 'https://mapletechlabs.com/services/mobile-app-development/android-app-development',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.com/services/mobile-app-development/android-app-development',
  },
};

export default function Page() {
  return <PageClient />;
}
