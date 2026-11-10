import type { Metadata } from 'next';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Software Development by Industry in Canada',
  description: 'Specialized software development for FinTech, healthcare, e-commerce, enterprise, EdTech and logistics. Deep domain expertise in every vertical we serve.',
  openGraph: {
    title: 'Software Development by Industry in Canada | Mapletech Labs',
    description: 'Specialized software development for FinTech, healthcare, e-commerce, enterprise, EdTech and logistics — deep domain expertise in every vertical.',
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
