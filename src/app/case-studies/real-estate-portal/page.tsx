import { Metadata } from 'next';
import PageClient from './PageClient';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { getCaseStudyBreadcrumbs } from '@/data/breadcrumbs';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: 'ML-Powered Real Estate Portal Case Study',
  description: 'How Mapletech Labs built PropConnect Canada\'s real estate platform, with machine-learning recommendations across 850,000+ active listings.',
  openGraph: {
    title: 'Real Estate Portal with ML | Mapletech Labs',
    description: 'Real client success story from Mapletech Labs.',
    url: 'https://mapletechlabs.ca/case-studies/real-estate-portal',
    type: 'website',
  },
  alternates: { canonical: canonicalUrl('/case-studies/real-estate-portal') },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={getCaseStudyBreadcrumbs('ML-Powered Real Estate Portal', 'real-estate-portal')} />
      <PageClient />
    </>
  );
}
