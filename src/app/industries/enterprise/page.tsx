import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getIndustryBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';

const TITLE = 'Enterprise Software Development Company in Canada';
const DESCRIPTION = 'Enterprise software development in Canada by Mapletech Labs: ERP, CRM, workflow automation and BI solutions at enterprise scale, built for security.';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: ogTitle('Enterprise Software Development in Canada'),
    description: seoDescription(DESCRIPTION),
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
        description={seoDescription(DESCRIPTION)}
        url={'https://mapletechlabs.ca/industries/enterprise'}
      />
      <PageClient />
    </>
  );
}
