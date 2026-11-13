import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';

const TITLE = 'SaaS MVP Development in 8 Weeks, Canada';
const DESCRIPTION =
  'SaaS MVP development in 8 weeks with production-quality code, built by our Edmonton team for startups across Canada ready to launch to paying customers.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: ogTitle(TITLE),
    description: seoDescription(DESCRIPTION),
    url: 'https://mapletechlabs.ca/services/saas-development/saas-mvp-development',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/saas-development/saas-mvp-development'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('saas-development', 'saas-mvp-development');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={'SaaS MVP Development in 8 Weeks'}
        description={DESCRIPTION}
        url={'https://mapletechlabs.ca/services/saas-development/saas-mvp-development'}
      />
      <PageClient />
    </>
  );
}
