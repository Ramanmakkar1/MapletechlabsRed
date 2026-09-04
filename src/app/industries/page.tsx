import type { Metadata } from 'next';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description: 'Specialized software development for FinTech, Healthcare, E-commerce, Enterprise, EdTech, and Media & Entertainment. 10+ years industry experience.',
  openGraph: {
    title: 'Industries We Serve | Mapletech Labs',
    description: 'Specialized software development for FinTech, Healthcare, E-commerce, Enterprise, EdTech, and Media & Entertainment.',
    url: 'https://mapletechlabs.ca/industries',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/industries'),
  },
};

export default function Page() {
  return <PageClient />;
}
