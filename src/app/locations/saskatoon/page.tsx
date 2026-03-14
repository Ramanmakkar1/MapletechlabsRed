import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Software Development Company in Saskatoon | Mapletech Labs',
  description: 'Mapletech Labs delivers custom software development, mobile apps, AI solutions, and web development in Saskatoon, Saskatchewan. Get a free quote today.',
  openGraph: {
    title: 'Software Development Company in Saskatoon | Mapletech Labs',
    description: 'Mapletech Labs delivers custom software development, mobile apps, AI solutions, and web development in Saskatoon, Saskatchewan. Get a free quote today.',
    url: 'https://mapletechlabs.ca/locations/saskatoon',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.ca/locations/saskatoon',
  },
};

export default function Page() {
  return <PageClient />;
}
