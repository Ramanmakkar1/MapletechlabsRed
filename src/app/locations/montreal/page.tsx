import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Software Development Company in Montreal | Mapletech Labs',
  description: 'Mapletech Labs delivers custom software development, mobile apps, AI solutions, and web development in Montreal, Quebec. Get a free quote today.',
  openGraph: {
    title: 'Software Development Company in Montreal | Mapletech Labs',
    description: 'Mapletech Labs delivers custom software development, mobile apps, AI solutions, and web development in Montreal, Quebec. Get a free quote today.',
    url: 'https://mapletechlabs.com/locations/montreal',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.com/locations/montreal',
  },
};

export default function Page() {
  return <PageClient />;
}
