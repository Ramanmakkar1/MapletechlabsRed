import type { Metadata } from 'next';
import { seoTitle, ogTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

const TITLE = 'Rebranding Services for Canadian Businesses';
const DESCRIPTION = 'Rebranding services in Canada: refresh your brand identity, messaging and visual language so your business stays relevant and competitive. Book a call.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: ogTitle(TITLE),
    description: seoDescription(DESCRIPTION),
    url: 'https://mapletechlabs.ca/services/branding/rebranding',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/branding/rebranding'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('branding', 'rebranding');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={'Rebranding Services'}
        description={DESCRIPTION}
        url={'https://mapletechlabs.ca/services/branding/rebranding'}
      />
      <PageClient />
    </>
  );
}
