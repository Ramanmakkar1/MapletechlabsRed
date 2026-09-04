import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: 'AI Chatbot Development',
  description: 'Custom AI chatbot development services. Mapletech Labs builds intelligent conversational agents for customer support, sales, and internal operations.',
  openGraph: {
    title: 'AI Chatbot Development | Mapletech Labs',
    description: 'Custom AI chatbot development services. Mapletech Labs builds intelligent conversational agents for customer support, sales, and internal operations.',
    url: 'https://mapletechlabs.ca/services/ai-ml/ai-chatbots',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/ai-ml/ai-chatbots'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('ai-ml', 'ai-chatbots');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <PageClient />
    </>
  );
}
