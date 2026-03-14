import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'API & Backend Development Services',
  description: 'Scalable REST and GraphQL APIs with sub-100ms latency and 99.9% uptime. Secure backend engineering by Mapletech Labs, Toronto. 200+ APIs delivered.',
  openGraph: {
    title: 'API & Backend Development | Mapletech Labs',
    description: 'We design and build robust REST and GraphQL APIs with bulletproof security and enterprise-grade performance.',
    url: 'https://mapletechlabs.ca/services/web-development/api-backend',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.ca/services/web-development/api-backend',
  },
};

export default function Page() {
  return <PageClient />;
}
