import type { Metadata } from 'next';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

const TITLE = 'Motion & Video Branding Services in Canada';
const DESCRIPTION = 'Motion and video branding in Canada: animated logos, brand videos, social media content and product demos that hold your audience. Get a free quote.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: ogTitle(TITLE),
    description: seoDescription(DESCRIPTION),
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
        description={DESCRIPTION}
        url={'https://mapletechlabs.ca/services/branding/motion-video-branding'}
      />
      <PageClient />
    </>
  );
}
