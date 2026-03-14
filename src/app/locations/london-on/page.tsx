import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Software Development Company in London, Ontario | Mapletech Labs',
  description: 'Mapletech Labs delivers custom software development, mobile apps, AI solutions, and web development in London, Ontario. Get a free quote today.',
  openGraph: {
    title: 'Software Development Company in London, Ontario | Mapletech Labs',
    description: 'Mapletech Labs delivers custom software development, mobile apps, AI solutions, and web development in London, Ontario. Get a free quote today.',
    url: 'https://www.mapletechlabs.com/locations/london-on',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.mapletechlabs.com/locations/london-on',
  },
};

export default function Page() {
  return <PageClient />;
}
