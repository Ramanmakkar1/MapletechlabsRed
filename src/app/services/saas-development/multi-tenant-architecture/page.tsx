import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Multi-Tenant SaaS Architecture | Toronto',
  description: 'Scalable multi-tenant architecture with tenant isolation, RBAC, and custom domains. Mapletech Labs builds enterprise SaaS platforms from Toronto, Canada.',
  openGraph: {
    title: 'Multi-Tenant SaaS Architecture | Mapletech Labs',
    description: 'Scalable multi-tenant architecture with tenant isolation, RBAC, and custom domains.',
    url: 'https://mapletechlabs.com/services/saas-development/multi-tenant-architecture',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.com/services/saas-development/multi-tenant-architecture',
  },
};

export default function Page() {
  return <PageClient />;
}
