import type { Metadata } from 'next';
import PageClient, { FAQS } from './PageClient';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FaqSchema, ServiceSchema } from '@/components/ServiceSchema';
import { canonicalUrl } from '@/lib/seo/canonical';

const TITLE = 'AI Consulting Services for Canada';
const DESCRIPTION = 'AI consulting for Canadian businesses: assess use cases and data readiness, compare build versus buy, and plan feasibility, integrations and next steps.';
const URL = canonicalUrl('/services/ai-consulting');

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: `${TITLE} | Mapletech Labs`,
    description: DESCRIPTION,
    url: URL,
    type: 'website',
  },
  alternates: {
    canonical: URL,
  },
};

export default function Page() {
  return (
    <>
      <ServiceSchema
        name="AI Consulting Services"
        description={DESCRIPTION}
        url={URL}
        serviceType="AI Consulting"
      />
      <BreadcrumbSchema
        items={[
          { position: 1, name: 'Home', item: canonicalUrl('/') },
          { position: 2, name: 'Services', item: canonicalUrl('/services') },
          { position: 3, name: 'AI Consulting', item: URL },
        ]}
      />
      <FaqSchema faqs={FAQS} />
      <PageClient />
    </>
  );
}
