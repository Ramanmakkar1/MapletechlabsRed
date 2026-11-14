import type { Metadata } from 'next';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { DEFAULT_OG_IMAGES } from '@/lib/seo/og';

const TITLE = 'WebXR Development Services in Canada';
const DESCRIPTION = 'WebXR development in Canada: browser-based AR/VR on any device, no install needed, with 20+ built by Mapletech Labs in Edmonton for immersive experiences.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    images: DEFAULT_OG_IMAGES,
    title: ogTitle(TITLE),
    description: seoDescription(DESCRIPTION),
    url: 'https://mapletechlabs.ca/services/ar-vr/webxr-experiences',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/ar-vr/webxr-experiences'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('ar-vr', 'webxr-experiences');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={'WebXR Development Services'}
        description={DESCRIPTION}
        url={'https://mapletechlabs.ca/services/ar-vr/webxr-experiences'}
      />
      <PageClient />
    </>
  );
}
