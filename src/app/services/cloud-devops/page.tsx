import type { Metadata } from 'next';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: 'Cloud & DevOps Services in Canada',
  description: 'AWS, Kubernetes & CI/CD pipeline services by Mapletech Labs. Cloud architecture and DevOps for scalable apps in Canada. Get a free infrastructure audit.',
  openGraph: {
    title: 'Cloud & DevOps Services in Canada | Mapletech Labs',
    description: 'AWS, Kubernetes & CI/CD pipeline services by Mapletech Labs. Cloud architecture and DevOps for scalable apps in Canada.',
    url: 'https://mapletechlabs.ca/services/cloud-devops',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/cloud-devops'),
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Cloud & DevOps Services',
  description: 'AWS, Kubernetes & CI/CD pipeline services by Mapletech Labs. Cloud architecture and DevOps for scalable apps in Canada.',
  provider: {
    '@type': 'Organization',
    name: 'Mapletech Labs',
    url: 'https://mapletechlabs.ca',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Canada',
  },
  url: 'https://mapletechlabs.ca/services/cloud-devops',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mapletechlabs.ca' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://mapletechlabs.ca/services' },
    { '@type': 'ListItem', position: 3, name: 'Cloud & DevOps', item: 'https://mapletechlabs.ca/services/cloud-devops' },
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
