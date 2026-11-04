import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { seoTitle } from '@/lib/seo/title';
import { canonicalUrl } from '@/lib/seo/canonical';

const title = 'AI Automation Services Canada: Workflows | Mapletech Labs';
const description = 'Compare AI automation approaches for invoices, email and CRM workflows. Explore cost drivers and plan your Canadian business automation with an engineer.';
const url = canonicalUrl('/services/ai-ml/ai-automation');

export const metadata: Metadata = {
  title: seoTitle(title),
  description,
  openGraph: {
    title,
    description,
    url,
    type: 'website',
  },
  alternates: {
    canonical: url,
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('ai-ml', 'ai-automation');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={'AI Automation Services Canada'}
        description={description}
        url={url}
      />
      <PageClient />
    </>
  );
}
