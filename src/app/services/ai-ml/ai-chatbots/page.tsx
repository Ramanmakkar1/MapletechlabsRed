import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { seoTitle, ogTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';

const TITLE = 'AI Chatbot Development Company in Canada';
const DESCRIPTION = 'AI chatbot development in Canada: custom support, sales and internal chatbots grounded in your documents, with human handoff and CRM integrations.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: ogTitle(TITLE),
    description: DESCRIPTION,
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
      <ServiceSchema
        name={'AI Chatbot Development'}
        description={DESCRIPTION}
        url={'https://mapletechlabs.ca/services/ai-ml/ai-chatbots'}
      />
      <PageClient />
    </>
  );
}
