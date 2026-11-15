import type { Metadata } from 'next';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { serviceBreadcrumbSchema, serviceHubSchema } from '@/lib/seo/serviceHubSchema';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';
import { DEFAULT_OG_IMAGES } from '@/lib/seo/og';

const TITLE = 'SaaS Development Company in Canada';
const DESCRIPTION = 'SaaS development company in Canada: MVP launch, multi-tenant architecture, subscription billing and SSO for startups. Book a free strategy call.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    images: DEFAULT_OG_IMAGES,
    title: ogTitle(TITLE),
    description: DESCRIPTION,
    url: 'https://mapletechlabs.ca/services/saas-development',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/saas-development'),
  },
};

const serviceSchema = serviceHubSchema({
  slug: 'saas-development',
  name: 'SaaS Development Services',
  serviceType: 'SaaS Development',
  description: DESCRIPTION,
});

const breadcrumbSchema = serviceBreadcrumbSchema({ slug: 'saas-development', label: 'SaaS Development' });

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageClient />
    </>
  );
}
