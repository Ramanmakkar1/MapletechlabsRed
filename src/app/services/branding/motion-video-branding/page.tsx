import type { Metadata } from 'next';
import { seoTitle } from '@/lib/seo/title';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: seoTitle('Motion & Video Branding Services in Canada'),
  description: 'Motion graphics and video branding by Mapletech Labs. Animated logos, brand videos, social media content, and product demos that captivate audiences.',
  openGraph: {
    title: 'Motion & Video Branding Services in Canada | Mapletech Labs',
    description: 'Motion graphics and video branding by Mapletech Labs. Animated logos, brand videos, social media content, and product demos that captivate audiences.',
    url: 'https://mapletechlabs.ca/services/branding/motion-video-branding',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/branding/motion-video-branding'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('branding', 'motion-video-branding');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={'Motion & Video Branding'}
        description={'Motion graphics and video branding by Mapletech Labs. Animated logos, brand videos, social media content, and product demos that captivate audiences.'}
        url={'https://mapletechlabs.ca/services/branding/motion-video-branding'}
      />
      <PageClient />
    </>
  );
}
