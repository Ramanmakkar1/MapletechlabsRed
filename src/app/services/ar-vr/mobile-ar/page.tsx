import type { Metadata } from 'next';
import { seoTitle } from '@/lib/seo/title';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: seoTitle('Mobile AR App Development in Canada'),
  description: 'Mobile augmented reality development with ARKit and ARCore. Mapletech Labs builds immersive AR experiences for iOS and Android applications.',
  openGraph: {
    title: 'Mobile AR App Development in Canada | Mapletech Labs',
    description: 'Mobile augmented reality development with ARKit and ARCore. Mapletech Labs builds immersive AR experiences for iOS and Android applications.',
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
        description={'Mobile augmented reality development with ARKit and ARCore. Mapletech Labs builds immersive AR experiences for iOS and Android applications.'}
        url={'https://mapletechlabs.ca/services/ar-vr/mobile-ar'}
      />
      <PageClient />
    </>
  );
}
