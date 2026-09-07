import type { Metadata } from 'next';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: '12 Locations Across Canada',
  description: 'Mapletech Labs builds software for companies in twelve Canadian cities, from Vancouver to Halifax. Local delivery, national engineering bench.',
  openGraph: {
    title: '12 Locations Across Canada | Mapletech Labs',
    description: 'Mapletech Labs operates from 12 locations across Canada including Edmonton, Toronto, Vancouver, Calgary, Ottawa, and Montreal. Find a software development team near you.',
    url: 'https://mapletechlabs.ca/locations',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/locations'),
  },
};

export default function Page() {
  return <PageClient />;
}
