import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: 'SaaS Authentication & SSO Development',
  description: 'Enterprise-ready auth with SAML SSO, MFA, RBAC, and audit logs for SaaS products. Mapletech Labs builds secure auth systems from Toronto, Canada.',
  openGraph: {
    title: 'SaaS Authentication & SSO Development | Mapletech Labs',
    description: 'Enterprise-ready auth with SAML SSO, MFA, RBAC, and audit logs for SaaS products.',
    url: 'https://mapletechlabs.ca/services/saas-development/auth-sso',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/saas-development/auth-sso'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('saas-development', 'auth-sso');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={'SaaS Authentication & SSO Development'}
        description={'Enterprise-ready auth with SAML SSO, MFA, RBAC, and audit logs for SaaS products. Mapletech Labs builds secure auth systems from Toronto, Canada.'}
        url={'https://mapletechlabs.ca/services/saas-development/auth-sso'}
      />
      <PageClient />
    </>
  );
}
