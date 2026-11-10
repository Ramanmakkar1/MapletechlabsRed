import type { Metadata } from 'next';
import { seoTitle } from '@/lib/seo/title';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: seoTitle('Logo & Visual Identity Design in Canada'),
  description: 'Logo and visual identity design for Canadian brands by Mapletech Labs. Memorable logos, colour systems, and typography that define your brand. 200+ logos.',
  openGraph: {
    title: 'Logo & Visual Identity Design in Canada | Mapletech Labs',
    description: 'Professional logo and visual identity design by Mapletech Labs. Memorable logos, color systems, and typography that define your brand.',
    url: 'https://mapletechlabs.ca/services/branding/logo-visual-identity',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/branding/logo-visual-identity'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('branding', 'logo-visual-identity');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={'Logo & Visual Identity Design'}
        description={'Professional logo and visual identity design by Mapletech Labs. Memorable logos, color systems, and typography that define your brand.'}
        url={'https://mapletechlabs.ca/services/branding/logo-visual-identity'}
      />
      <PageClient />
    </>
  );
}
