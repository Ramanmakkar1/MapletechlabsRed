import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';

const TITLE = 'SaaS Authentication & SSO Development';
const DESCRIPTION =
  'SaaS authentication and SSO development: SAML, MFA, RBAC and audit logs for enterprise-ready products, built by our Edmonton team for SaaS across Canada.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: ogTitle(TITLE),
    description: seoDescription(DESCRIPTION),
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
        description={DESCRIPTION}
        url={'https://mapletechlabs.ca/services/saas-development/auth-sso'}
      />
      <PageClient />
    </>
  );
}
