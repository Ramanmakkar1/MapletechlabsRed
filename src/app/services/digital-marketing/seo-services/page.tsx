import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'SEO Services Toronto | Search Engine Optimization',
  description: 'Results-driven SEO services in Toronto & across Canada. Technical SEO, link building, local SEO, and content strategy. 200% avg organic traffic growth.',
  openGraph: {
    title: 'SEO Services Toronto | Mapletech Labs',
    description: 'Results-driven SEO services in Toronto & across Canada. Technical SEO, link building, local SEO, and content strategy.',
    url: 'https://mapletechlabs.com/services/digital-marketing/seo-services',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.com/services/digital-marketing/seo-services',
  },
};

export default function Page() {
  return <PageClient />;
}
