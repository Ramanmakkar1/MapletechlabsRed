import type { Metadata } from 'next';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

const TITLE = 'VR Application Development in Canada';
const DESCRIPTION = 'VR application development in Canada: immersive Meta Quest and HTC Vive apps, enterprise solutions, and VR training built by Mapletech Labs in Edmonton.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: ogTitle(TITLE),
    description: seoDescription(DESCRIPTION),
    url: 'https://mapletechlabs.ca/services/ar-vr/vr-applications',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/ar-vr/vr-applications'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('ar-vr', 'vr-applications');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={'VR Application Development'}
        description={DESCRIPTION}
        url={'https://mapletechlabs.ca/services/ar-vr/vr-applications'}
      />
      <PageClient />
    </>
  );
}
