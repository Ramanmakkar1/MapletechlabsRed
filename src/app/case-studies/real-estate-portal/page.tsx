import { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'ML-Powered Real Estate Portal Case Study | Mapletech Labs',
  description: 'How we built PropConnect Canada\'s real estate platform with ML recommendations for 850K+ active listings.',
  openGraph: {
    title: 'Real Estate Portal with ML | Mapletech Labs',
    description: 'Real client success story from Mapletech Labs.',
    url: 'https://mapletechlabs.ca/case-studies/real-estate-portal',
    type: 'website',
  },
  alternates: { canonical: 'https://mapletechlabs.ca/case-studies/real-estate-portal' },
};

export default function Page() {
  return <PageClient />;
}
