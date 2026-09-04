import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: 'Google Ads & PPC Management Services Toronto',
  description: 'Expert Google Ads & PPC management in Toronto. Search, Shopping, Display, and YouTube campaigns with 3.5x avg ROAS. Google Premier Partner agency.',
  openGraph: {
    title: 'Google Ads & PPC Management | Mapletech Labs',
    description: 'Expert Google Ads & PPC management in Toronto. Search, Shopping, Display, and YouTube campaigns with 3.5x avg ROAS.',
    url: 'https://mapletechlabs.ca/services/digital-marketing/google-ads-ppc',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/digital-marketing/google-ads-ppc'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('digital-marketing', 'google-ads-ppc');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <PageClient />
    </>
  );
}
