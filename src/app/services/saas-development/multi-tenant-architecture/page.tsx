import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: 'Multi-Tenant SaaS Architecture | Toronto',
  description: 'Scalable multi-tenant architecture with tenant isolation, RBAC, and custom domains. Mapletech Labs builds enterprise SaaS platforms from Toronto, Canada.',
  openGraph: {
    title: 'Multi-Tenant SaaS Architecture | Mapletech Labs',
    description: 'Scalable multi-tenant architecture with tenant isolation, RBAC, and custom domains.',
    url: 'https://mapletechlabs.ca/services/saas-development/multi-tenant-architecture',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/saas-development/multi-tenant-architecture'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('saas-development', 'multi-tenant-architecture');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <PageClient />
    </>
  );
}
