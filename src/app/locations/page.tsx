import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: '12 Locations Across Canada | Mapletech Labs',
  description: 'Mapletech Labs operates from 12 locations across Canada including Edmonton, Toronto, Vancouver, Calgary, Ottawa, and Montreal. Find a software development team near you.',
  openGraph: {
    title: '12 Locations Across Canada | Mapletech Labs',
    description: 'Mapletech Labs operates from 12 locations across Canada including Edmonton, Toronto, Vancouver, Calgary, Ottawa, and Montreal. Find a software development team near you.',
    url: 'https://mapletechlabs.com/locations',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.com/locations',
  },
};

export default function Page() {
  return <PageClient />;
}
