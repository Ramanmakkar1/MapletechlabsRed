import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { seoTitle, ogTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';
import { DEFAULT_OG_IMAGES } from '@/lib/seo/og';

const TITLE = 'AI Agent Development Company in Canada';
const DESCRIPTION = 'AI agent development in Canada: Mapletech Labs builds AI agents to plan steps, use your tools and take scoped actions, with evaluation and human approval.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    images: DEFAULT_OG_IMAGES,
    title: ogTitle(TITLE),
    description: seoDescription(DESCRIPTION),
    url: 'https://mapletechlabs.ca/services/ai-ml/ai-agent-development',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/ai-ml/ai-agent-development'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('ai-ml', 'ai-agent-development');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={'AI Agent Development'}
        description={DESCRIPTION}
        url={'https://mapletechlabs.ca/services/ai-ml/ai-agent-development'}
      />
      <PageClient />
    </>
  );
}
