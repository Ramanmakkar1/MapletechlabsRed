import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Branding & Identity Services',
  description: 'Strategic branding services by Mapletech Labs. Brand strategy, logo design, visual identity, brand guidelines, rebranding, and motion graphics.',
  openGraph: {
    title: 'Branding & Identity Services | Mapletech Labs',
    description: 'Strategic branding services by Mapletech Labs. Brand strategy, logo design, visual identity, brand guidelines, rebranding, and motion graphics.',
    url: 'https://mapletechlabs.ca/services/branding',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.ca/services/branding',
  },
};

export default function Page() {
  return <PageClient />;
}
