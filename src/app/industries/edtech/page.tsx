import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { getIndustryBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: 'EdTech Software Development',
  description: 'EdTech software by Mapletech Labs. LMS platforms, virtual classrooms & assessment tools for Canadian educators. Get a free consultation for your project.',
  openGraph: {
    title: 'EdTech Software Development | Mapletech Labs',
    description: 'EdTech software by Mapletech Labs. LMS platforms, virtual classrooms & assessment tools for Canadian educators.',
    url: 'https://mapletechlabs.ca/industries/edtech',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/industries/edtech'),
  },
};

export default function Page() {
  const breadcrumbs = getIndustryBreadcrumbs('EdTech', 'edtech');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <PageClient />
    </>
  );
}
