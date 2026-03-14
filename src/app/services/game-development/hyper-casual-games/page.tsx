import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Hyper-Casual Game Development Services',
  description: 'We build and publish hyper-casual games fast — from 3-day prototypes to CPI-validated launches. 50M+ downloads shipped by our Toronto-based game studio.',
  openGraph: {
    title: 'Hyper-Casual Game Development | Mapletech Labs',
    description: 'Rapid hyper-casual game prototyping, CPI testing, and publishing. 40+ games shipped with 50M+ downloads.',
    url: 'https://www.mapletechlabs.com/services/game-development/hyper-casual-games',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.mapletechlabs.com/services/game-development/hyper-casual-games',
  },
};

export default function Page() {
  return <PageClient />;
}
