import type { Metadata } from 'next';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { serviceHubSchema } from '@/lib/seo/serviceHubSchema';

export const metadata: Metadata = {
  title: 'Branding & Identity Services in Canada',
  description: 'Strategic branding by Mapletech Labs. Logo design, visual identity & brand guidelines for businesses in Canada. Request a free brand consultation today.',
  openGraph: {
    title: 'Branding & Identity Services in Canada | Mapletech Labs',
    description: 'Strategic branding by Mapletech Labs. Logo design, visual identity & brand guidelines for businesses in Canada. Request a free brand consultation today.',
    url: 'https://mapletechlabs.ca/services/branding',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/branding'),
  },
};

const serviceSchema = serviceHubSchema({
  slug: 'branding',
  name: 'Branding & Identity Services',
  serviceType: 'Branding & Identity',
  description: 'Strategic branding by Mapletech Labs. Logo design, visual identity & brand guidelines for businesses in Canada.',
});

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mapletechlabs.ca' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://mapletechlabs.ca/services' },
    { '@type': 'ListItem', position: 3, name: 'Branding & Identity', item: 'https://mapletechlabs.ca/services/branding' },
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
