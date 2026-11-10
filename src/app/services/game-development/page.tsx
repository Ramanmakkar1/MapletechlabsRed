import type { Metadata } from 'next';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: 'Game Development Services in Canada',
  description: 'Unity & Unreal Engine game development by Mapletech Labs. Mobile, hyper-casual & multiplayer games built in Canada. Request a free project estimate today.',
  openGraph: {
    title: 'Game Development Services in Canada | Mapletech Labs',
    description: 'Unity & Unreal Engine game development by Mapletech Labs. Mobile, hyper-casual & multiplayer games built in Canada. Request a free project estimate today.',
    url: 'https://mapletechlabs.ca/services/game-development',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/game-development'),
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Game Development Services',
  serviceType: 'Game Development',
  description: 'Professional game development by Mapletech Labs. Mobile games, Unity, Unreal Engine, hyper-casual games, and multiplayer LiveOps solutions.',
  provider: { '@id': 'https://mapletechlabs.ca/#organization' },
  areaServed: {
    '@type': 'Country',
    name: 'Canada',
  },
  url: 'https://mapletechlabs.ca/services/game-development',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mapletechlabs.ca' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://mapletechlabs.ca/services' },
    { '@type': 'ListItem', position: 3, name: 'Game Development', item: 'https://mapletechlabs.ca/services/game-development' },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageClient />
    </>
  );
}
