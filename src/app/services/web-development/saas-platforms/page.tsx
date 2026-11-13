import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { seoTitle, ogTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';

const TITLE = 'SaaS Platform Development in Canada';
const DESCRIPTION = 'SaaS platform development in Canada: scalable multi-tenant software-as-a-service apps with billing, auth and dashboards. Get a free quote today.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: ogTitle(TITLE),
    description: seoDescription(DESCRIPTION),
    url: 'https://mapletechlabs.ca/services/web-development/saas-platforms',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/web-development/saas-platforms'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('web-development', 'saas-platforms');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={'SaaS Platform Development'}
        description={DESCRIPTION}
        url={'https://mapletechlabs.ca/services/web-development/saas-platforms'}
      />
      <PageClient />
    </>
  );
}
