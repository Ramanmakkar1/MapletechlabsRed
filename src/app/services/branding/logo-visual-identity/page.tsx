import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: 'Logo & Visual Identity Design',
  description: 'Professional logo and visual identity design by Mapletech Labs. Memorable logos, color systems, and typography that define your brand.',
  openGraph: {
    title: 'Logo & Visual Identity Design | Mapletech Labs',
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
      <PageClient />
    </>
  );
}
