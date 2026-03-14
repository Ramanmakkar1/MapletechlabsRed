import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Enterprise Portal Development Services',
  description: 'Secure, SOC2-compliant enterprise portals with SSO, RBAC, and workflow automation. Built by Mapletech Labs in Toronto for 10,000+ daily active users.',
  openGraph: {
    title: 'Enterprise Portal Development | Mapletech Labs',
    description: 'Custom enterprise portals with SSO integration, role-based access, audit logging, and workflow automation.',
    url: 'https://www.mapletechlabs.com/services/web-development/enterprise-portals',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.mapletechlabs.com/services/web-development/enterprise-portals',
  },
};

export default function Page() {
  return <PageClient />;
}
