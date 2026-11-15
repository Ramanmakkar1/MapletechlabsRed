import type { Metadata } from 'next';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { serviceBreadcrumbSchema, serviceHubSchema } from '@/lib/seo/serviceHubSchema';
import { DEFAULT_OG_IMAGES } from '@/lib/seo/og';

const TITLE = 'Branding & Identity Services in Canada';
const DESCRIPTION = 'Branding agency in Canada: brand strategy, logo design, visual identity and brand guidelines for growing businesses. Request a free brand consultation.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    images: DEFAULT_OG_IMAGES,
    title: ogTitle(TITLE),
    description: DESCRIPTION,
    url: 'https://mapletechlabs.ca/services/branding',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/branding'),
  },
};

const serviceSchema = serviceHubSchema({
  slug: 'branding',
  name: 'Branding & Identity Services',
  serviceType: 'Branding & Identity',
  description: DESCRIPTION,
});

const breadcrumbSchema = serviceBreadcrumbSchema({ slug: 'branding', label: 'Branding & Identity' });

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageClient />
    </>
  );
}
