import type { Metadata } from 'next';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { serviceBreadcrumbSchema, serviceHubSchema } from '@/lib/seo/serviceHubSchema';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';
import { DEFAULT_OG_IMAGES } from '@/lib/seo/og';

const TITLE = 'AI & ML Development Company in Canada';
const DESCRIPTION = 'AI development company in Canada: custom LLM apps, AI chatbots, automation, computer vision and predictive models, with 50+ AI products shipped.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    images: DEFAULT_OG_IMAGES,
    title: ogTitle(TITLE),
    description: DESCRIPTION,
    url: 'https://mapletechlabs.ca/services/ai-ml',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/ai-ml'),
  },
};

const serviceSchema = serviceHubSchema({
  slug: 'ai-ml',
  name: 'AI & Machine Learning Services',
  serviceType: 'AI Development',
  description: DESCRIPTION,
});

const breadcrumbSchema = serviceBreadcrumbSchema({ slug: 'ai-ml', label: 'AI & Machine Learning' });

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema).replace(/</g, '\\u003c') }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, '\\u003c') }} />
      <PageClient />
    </>
  );
}
