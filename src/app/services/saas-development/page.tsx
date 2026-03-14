import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'SaaS Development Services',
  description: 'End-to-end SaaS development by Mapletech Labs. MVP launch, multi-tenant architecture, billing systems, auth/SSO, and analytics dashboards.',
  openGraph: {
    title: 'SaaS Development Services | Mapletech Labs',
    description: 'End-to-end SaaS development by Mapletech Labs. MVP launch, multi-tenant architecture, billing systems, auth/SSO, and analytics dashboards.',
    url: 'https://mapletechlabs.ca/services/saas-development',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.ca/services/saas-development',
  },
};

export default function Page() {
  return <PageClient />;
}
