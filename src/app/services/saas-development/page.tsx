import type { Metadata } from 'next';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { serviceHubSchema } from '@/lib/seo/serviceHubSchema';

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

const serviceSchema = serviceHubSchema({
  slug: 'saas-development',
  name: 'SaaS Development Services',
  serviceType: 'SaaS Development',
  description: 'End-to-end SaaS development by Mapletech Labs. MVP launch, multi-tenant architecture & billing systems for startups in Canada.',
});

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
