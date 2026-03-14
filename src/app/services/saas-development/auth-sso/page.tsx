import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'SaaS Authentication & SSO Development',
  description: 'Enterprise-ready auth with SAML SSO, MFA, RBAC, and audit logs for SaaS products. Mapletech Labs builds secure auth systems from Toronto, Canada.',
  openGraph: {
    title: 'SaaS Authentication & SSO Development | Mapletech Labs',
    description: 'Enterprise-ready auth with SAML SSO, MFA, RBAC, and audit logs for SaaS products.',
    url: 'https://www.mapletechlabs.com/services/saas-development/auth-sso',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.mapletechlabs.com/services/saas-development/auth-sso',
  },
};

export default function Page() {
  return <PageClient />;
}
