import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Game Development Services',
  description: 'Professional game development by Mapletech Labs. Mobile games, Unity, Unreal Engine, hyper-casual games, and multiplayer LiveOps solutions.',
  openGraph: {
    title: 'Game Development Services | Mapletech Labs',
    description: 'Professional game development by Mapletech Labs. Mobile games, Unity, Unreal Engine, hyper-casual games, and multiplayer LiveOps solutions.',
    url: 'https://www.mapletechlabs.com/services/game-development',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.mapletechlabs.com/services/game-development',
  },
};

export default function Page() {
  return <PageClient />;
}
