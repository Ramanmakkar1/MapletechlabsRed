import type { Metadata } from 'next';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: 'SaaS Development Company in Canada',
  description: 'End-to-end SaaS development by Mapletech Labs. MVP launch, multi-tenant architecture & billing systems for startups in Canada. Book a free strategy call.',
  openGraph: {
    title: 'SaaS Development Company in Canada | Mapletech Labs',
    description: 'End-to-end SaaS development by Mapletech Labs. MVP launch, multi-tenant architecture & billing systems for startups in Canada.',
    url: 'https://mapletechlabs.ca/services/saas-development',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/saas-development'),
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'SaaS Development Services',
  serviceType: 'SaaS Development',
  description: 'End-to-end SaaS development by Mapletech Labs. MVP launch, multi-tenant architecture & billing systems for startups in Canada.',
  provider: { '@id': 'https://mapletechlabs.ca/#organization' },
  areaServed: {
    '@type': 'Country',
    name: 'Canada',
  },
  url: 'https://mapletechlabs.ca/services/saas-development',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mapletechlabs.ca' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://mapletechlabs.ca/services' },
    { '@type': 'ListItem', position: 3, name: 'SaaS Development', item: 'https://mapletechlabs.ca/services/saas-development' },
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
