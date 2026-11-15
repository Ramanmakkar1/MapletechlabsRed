import type { Metadata } from 'next';
import Link from 'next/link';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { serviceHubSchema } from '@/lib/seo/serviceHubSchema';
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

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mapletechlabs.ca' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://mapletechlabs.ca/services' },
    { '@type': 'ListItem', position: 3, name: 'AI & Machine Learning', item: 'https://mapletechlabs.ca/services/ai-ml' },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section style={{ maxWidth: 1120, margin: '0 auto', padding: '32px 24px 0' }}>
        <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--text-muted, #4b5563)', margin: 0 }}>
          Mapletech Labs provides AI development in Canada, building custom LLM apps, AI chatbots, automation and predictive models for businesses nationwide. Find a local team on our{' '}
          <Link href="/locations/ai-development-company-in-edmonton">AI development company in Edmonton</Link>,{' '}
          <Link href="/locations/ai-development-company-in-calgary">AI development company in Calgary</Link>,{' '}
          <Link href="/locations/ai-development-company-in-toronto">AI development company in Toronto</Link> and{' '}
          <Link href="/locations/ai-development-company-in-vancouver">AI development company in Vancouver</Link> pages.
        </p>
      </section>
      <PageClient />
    </>
  );
}
