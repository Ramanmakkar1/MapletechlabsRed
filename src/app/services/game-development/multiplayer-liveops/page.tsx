import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Multiplayer & LiveOps Game Development',
  description: 'Real-time multiplayer infrastructure and LiveOps systems built for scale. Netcode, matchmaking, seasonal events, and anti-cheat from a Canadian game dev team.',
  openGraph: {
    title: 'Multiplayer & LiveOps Development | Mapletech Labs',
    description: 'We build scalable multiplayer game servers, matchmaking, and LiveOps systems that keep players engaged.',
    url: 'https://www.mapletechlabs.com/services/game-development/multiplayer-liveops',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.mapletechlabs.com/services/game-development/multiplayer-liveops',
  },
};

export default function Page() {
  return <PageClient />;
}
