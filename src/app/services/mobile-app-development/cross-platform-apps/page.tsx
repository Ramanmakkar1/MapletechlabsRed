import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Cross-Platform App Development',
  description: 'Cross-platform mobile app development services. Mapletech Labs builds apps that run on iOS and Android with shared codebases and native performance.',
  openGraph: {
    title: 'Cross-Platform App Development | Mapletech Labs',
    description: 'Cross-platform mobile app development services. Mapletech Labs builds apps that run on iOS and Android with shared codebases and native performance.',
    url: 'https://mapletechlabs.ca/services/mobile-app-development/cross-platform-apps',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.ca/services/mobile-app-development/cross-platform-apps',
  },
};

export default function Page() {
  return <PageClient />;
}
