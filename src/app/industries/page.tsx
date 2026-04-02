import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Industries We Serve | Mapletech Labs',
  description: 'Specialized software development for FinTech, Healthcare, E-commerce, Enterprise, EdTech, and Media & Entertainment. 10+ years industry experience.',
  openGraph: {
    title: 'Industries We Serve | Mapletech Labs',
    description: 'Specialized software development for FinTech, Healthcare, E-commerce, Enterprise, EdTech, and Media & Entertainment.',
    url: 'https://mapletechlabs.ca/industries',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.ca/industries',
  },
};

export default function Page() {
  return <PageClient />;
}
