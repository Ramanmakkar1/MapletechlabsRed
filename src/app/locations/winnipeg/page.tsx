import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Software Development Company in Winnipeg | Mapletech Labs',
  description: 'Mapletech Labs delivers custom software development, mobile apps, AI solutions, and web development in Winnipeg, Manitoba. Get a free quote today.',
  openGraph: {
    title: 'Software Development Company in Winnipeg | Mapletech Labs',
    description: 'Mapletech Labs delivers custom software development, mobile apps, AI solutions, and web development in Winnipeg, Manitoba. Get a free quote today.',
    url: 'https://mapletechlabs.com/locations/winnipeg',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.com/locations/winnipeg',
  },
};

export default function Page() {
  return <PageClient />;
}
