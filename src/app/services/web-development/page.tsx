import type { Metadata } from 'next';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { serviceHubSchema } from '@/lib/seo/serviceHubSchema';

export const metadata: Metadata = {
  title: 'Custom Web Development Company in Canada',
  description: 'Custom web development by Mapletech Labs. React, Next.js & Node.js experts. Fixed-price projects. 150+ apps shipped across Canada. Get a free quote today.',
  openGraph: {
    title: 'Custom Web Development Company in Canada | Mapletech Labs',
    description: 'Custom web development by Mapletech Labs. React, Next.js & Node.js experts. Fixed-price projects. 150+ apps shipped across Canada. Get a free quote today.',
    url: 'https://mapletechlabs.ca/services/web-development',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/web-development'),
  },
};

const serviceSchema = serviceHubSchema({
  slug: 'web-development',
  name: 'Web Development Services',
  serviceType: 'Web Development',
  description: 'Custom web development by Mapletech Labs. React, Next.js & Node.js experts. Fixed-price projects. 150+ apps shipped across Canada.',
});

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mapletechlabs.ca' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://mapletechlabs.ca/services' },
    { '@type': 'ListItem', position: 3, name: 'Web Development', item: 'https://mapletechlabs.ca/services/web-development' },
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
