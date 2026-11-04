import type { Metadata } from 'next';
import { seoTitle } from '@/lib/seo/title';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: seoTitle('Social Media Marketing Agency in Canada'),
  description: 'Full-service social media marketing in Toronto. Strategy, content creation, community management, and paid social campaigns. 50M+ impressions generated.',
  openGraph: {
    title: 'Social Media Marketing Agency in Canada | Mapletech Labs',
    description: 'Full-service social media marketing in Toronto. Strategy, content creation, community management, and paid social campaigns.',
    url: 'https://mapletechlabs.ca/services/digital-marketing/social-media-marketing',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/digital-marketing/social-media-marketing'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('digital-marketing', 'social-media-marketing');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={'Social Media Marketing'}
        description={'Full-service social media marketing in Toronto. Strategy, content creation, community management, and paid social campaigns. 50M+ impressions generated.'}
        url={'https://mapletechlabs.ca/services/digital-marketing/social-media-marketing'}
      />
      <PageClient />
    </>
  );
}
