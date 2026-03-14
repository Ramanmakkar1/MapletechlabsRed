import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Software Development Company in Calgary | Mapletech Labs',
  description: 'Mapletech Labs delivers custom software development, mobile apps, AI solutions, and web development in Calgary, Alberta. Get a free quote today.',
  openGraph: {
    title: 'Software Development Company in Calgary | Mapletech Labs',
    description: 'Mapletech Labs delivers custom software development, mobile apps, AI solutions, and web development in Calgary, Alberta. Get a free quote today.',
    url: 'https://mapletechlabs.ca/locations/calgary',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.ca/locations/calgary',
  },
};

export default function Page() {
  return <PageClient />;
}
