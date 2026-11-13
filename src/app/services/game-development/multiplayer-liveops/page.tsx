import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';

export const metadata: Metadata = {
  title: seoTitle('Multiplayer & LiveOps Game Development'),
  description: seoDescription('Real-time multiplayer infrastructure & LiveOps systems built for scale. Netcode, matchmaking, seasonal events and anti-cheat from a Canadian game dev team.'),
  openGraph: {
    title: ogTitle('Multiplayer & LiveOps Development'),
    description: seoDescription('Real-time multiplayer infrastructure & LiveOps systems built for scale. Netcode, matchmaking, seasonal events and anti-cheat from a Canadian game dev team.'),
    url: 'https://mapletechlabs.ca/services/game-development/multiplayer-liveops',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/game-development/multiplayer-liveops'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('game-development', 'multiplayer-liveops');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={'Multiplayer & LiveOps Game Development'}
        description={'Real-time multiplayer infrastructure and LiveOps systems built for scale. Netcode, matchmaking, seasonal events, and anti-cheat from a Canadian game dev team.'}
        url={'https://mapletechlabs.ca/services/game-development/multiplayer-liveops'}
      />
      <PageClient />
    </>
  );
}
