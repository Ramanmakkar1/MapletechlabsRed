import type { Metadata } from 'next';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { serviceBreadcrumbSchema, serviceHubSchema } from '@/lib/seo/serviceHubSchema';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';
import { DEFAULT_OG_IMAGES } from '@/lib/seo/og';

const TITLE = 'AR & VR Development Company in Canada';
const DESCRIPTION = 'AR and VR development in Canada from an Edmonton-based team: mobile AR, WebXR, Apple Vision Pro and industrial training apps. Book a free consultation.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    images: DEFAULT_OG_IMAGES,
    title: ogTitle(TITLE),
    description: seoDescription(DESCRIPTION),
    url: 'https://mapletechlabs.ca/services/ar-vr',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/ar-vr'),
  },
};

const serviceSchema = serviceHubSchema({
  slug: 'ar-vr',
  name: 'AR & VR Development Services',
  serviceType: 'AR & VR Development',
  description: seoDescription(DESCRIPTION),
});

const breadcrumbSchema = serviceBreadcrumbSchema({ slug: 'ar-vr', label: 'AR & VR Development' });

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageClient />
    </>
  );
}
