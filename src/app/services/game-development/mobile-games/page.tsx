import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Mobile Game Development Services | iOS & Android',
  description: 'Professional mobile game development for iOS and Android. From hyper-casual to mid-core games with proven monetization. 50+ games shipped, 10M+ downloads.',
  openGraph: {
    title: 'Mobile Game Development | Mapletech Labs',
    description: 'Professional mobile game development for iOS and Android. From hyper-casual to mid-core games with proven monetization. 50+ games shipped.',
    url: 'https://www.mapletechlabs.com/services/game-development/mobile-games',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.mapletechlabs.com/services/game-development/mobile-games',
  },
};

export default function Page() {
  return <PageClient />;
}
