import type { Metadata } from 'next';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: 'AI & ML Development Company in Canada',
  description: 'Custom AI & ML solutions by Mapletech Labs. LLM integration, computer vision & predictive analytics for enterprises in Canada. Request a free proposal.',
  openGraph: {
    title: 'AI & ML Development Company in Canada | Mapletech Labs',
    description: 'Custom AI & ML solutions by Mapletech Labs. LLM integration, computer vision & predictive analytics for enterprises in Canada.',
    url: 'https://mapletechlabs.ca/services/ai-ml',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/ai-ml'),
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI & Machine Learning Services',
  serviceType: 'AI Development',
  description: 'Custom AI & ML solutions by Mapletech Labs. LLM integration, computer vision & predictive analytics for enterprises in Canada.',
  provider: { '@id': 'https://mapletechlabs.ca/#organization' },
  areaServed: {
    '@type': 'Country',
    name: 'Canada',
  },
  url: 'https://mapletechlabs.ca/services/ai-ml',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mapletechlabs.ca' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://mapletechlabs.ca/services' },
    { '@type': 'ListItem', position: 3, name: 'AI & Machine Learning', item: 'https://mapletechlabs.ca/services/ai-ml' },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageClient />
    </>
  );
}
