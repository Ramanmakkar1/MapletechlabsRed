import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getIndustryBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { seoTitle } from '@/lib/seo/title';

const TITLE = 'Enterprise Software Development Company in Canada';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: 'Enterprise software development in Canada by Mapletech Labs: ERP, CRM, workflow automation and BI solutions at enterprise scale, built for security.',
  openGraph: {
    title: 'Enterprise Software Development in Canada | Mapletech Labs',
    description: 'Enterprise software development in Canada by Mapletech Labs: ERP, CRM, workflow automation and BI solutions at enterprise scale, built for security.',
    url: 'https://mapletechlabs.ca/industries/enterprise',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/industries/enterprise'),
  },
};

export default function Page() {
  const breadcrumbs = getIndustryBreadcrumbs('Enterprise', 'enterprise');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={TITLE}
        description={'Enterprise software development in Canada by Mapletech Labs: ERP, CRM, workflow automation and BI solutions at enterprise scale.'}
        url={'https://mapletechlabs.ca/industries/enterprise'}
      />
      <PageClient />
    </>
  );
}
