import type { Metadata } from 'next';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

const TITLE = 'Mobile AR App Development in Canada';
const DESCRIPTION = 'Mobile AR app development in Canada: ARKit and ARCore apps for iOS and Android, built by Mapletech Labs in Edmonton for augmented reality experiences.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: ogTitle(TITLE),
    description: seoDescription(DESCRIPTION),
    url: 'https://mapletechlabs.ca/services/ar-vr/mobile-ar',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/ar-vr/mobile-ar'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('ar-vr', 'mobile-ar');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={'Mobile AR Development'}
        description={DESCRIPTION}
        url={'https://mapletechlabs.ca/services/ar-vr/mobile-ar'}
      />
      <PageClient />
    </>
  );
}
