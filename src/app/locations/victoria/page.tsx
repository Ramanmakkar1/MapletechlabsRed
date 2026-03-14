import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Software Development Company in Victoria | Mapletech Labs',
  description: 'Mapletech Labs delivers custom software development, mobile apps, AI solutions, and web development in Victoria, British Columbia. Get a free quote today.',
  openGraph: {
    title: 'Software Development Company in Victoria | Mapletech Labs',
    description: 'Mapletech Labs delivers custom software development, mobile apps, AI solutions, and web development in Victoria, British Columbia. Get a free quote today.',
    url: 'https://mapletechlabs.ca/locations/victoria',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.ca/locations/victoria',
  },
};

export default function Page() {
  return <PageClient />;
}
