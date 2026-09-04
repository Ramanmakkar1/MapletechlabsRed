import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: 'LLM Integration Services',
  description: 'LLM and large language model integration services. Mapletech Labs helps you integrate GPT, Claude, and custom AI models into your applications.',
  openGraph: {
    title: 'LLM Integration Services | Mapletech Labs',
    description: 'LLM and large language model integration services. Mapletech Labs helps you integrate GPT, Claude, and custom AI models into your applications.',
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
      <PageClient />
    </>
  );
}
