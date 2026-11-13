import type { Metadata } from 'next';
import { seoDescription } from '@/lib/seo/description';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

const DESCRIPTION = 'Secure, SOC2-compliant enterprise portals with SSO, RBAC, and workflow automation. Built by Edmonton-based Mapletech Labs for 10,000+ daily active users.';

export const metadata: Metadata = {
  title: 'Enterprise Portal Development Services',
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: 'Enterprise Portal Development | Mapletech Labs',
    description: 'Custom enterprise portals with SSO integration, role-based access, audit logging, and workflow automation.',
    url: 'https://mapletechlabs.ca/services/web-development/enterprise-portals',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/web-development/enterprise-portals'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('web-development', 'enterprise-portals');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={'Enterprise Portal Development Services'}
        description={DESCRIPTION}
        url={'https://mapletechlabs.ca/services/web-development/enterprise-portals'}
      />
      <PageClient />
    </>
  );
}
