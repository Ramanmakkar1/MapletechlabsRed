import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { seoTitle, ogTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';

const TITLE = 'LLM Integration Services in Canada';
const DESCRIPTION =
  'LLM integration services in Canada: Mapletech Labs connects GPT, Claude and open-source models to apps and documents with RAG and production deployment.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: ogTitle(TITLE),
    description: DESCRIPTION,
    url: 'https://mapletechlabs.ca/services/ai-ml/llm-integration',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/ai-ml/llm-integration'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('ai-ml', 'llm-integration');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={'LLM Integration Services'}
        description={DESCRIPTION}
        url={'https://mapletechlabs.ca/services/ai-ml/llm-integration'}
      />
      <PageClient />
    </>
  );
}
