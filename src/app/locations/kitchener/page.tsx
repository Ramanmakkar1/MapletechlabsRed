import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Software Development Company in Kitchener | Mapletech Labs',
  description: 'Mapletech Labs delivers custom software development, mobile apps, AI solutions, and web development in Kitchener, Ontario. Get a free quote today.',
  openGraph: {
    title: 'Software Development Company in Kitchener | Mapletech Labs',
    description: 'Mapletech Labs delivers custom software development, mobile apps, AI solutions, and web development in Kitchener, Ontario. Get a free quote today.',
    url: 'https://mapletechlabs.com/locations/kitchener',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.com/locations/kitchener',
  },
};

export default function Page() {
  return <PageClient />;
}
