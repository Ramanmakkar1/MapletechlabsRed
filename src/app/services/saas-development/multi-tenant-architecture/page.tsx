import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';

const TITLE = 'Multi-Tenant SaaS Architecture in Canada';
const DESCRIPTION =
  'Multi-tenant SaaS architecture with tenant isolation, RBAC and custom domains, built by our Edmonton team for multi-tenant SaaS platforms across Canada.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: ogTitle(TITLE),
    description: seoDescription(DESCRIPTION),
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
      <ServiceSchema
        name={'Multi-Tenant SaaS Architecture'}
        description={DESCRIPTION}
        url={'https://mapletechlabs.ca/services/saas-development/multi-tenant-architecture'}
      />
      <PageClient />
    </>
  );
}
