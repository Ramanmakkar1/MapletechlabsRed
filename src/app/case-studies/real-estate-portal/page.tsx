import { Metadata } from 'next';
import PageClient from './PageClient';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { getCaseStudyBreadcrumbs } from '@/data/breadcrumbs';
import { canonicalUrl } from '@/lib/seo/canonical';
import { seoTitle } from '@/lib/seo/title';

const TITLE = 'ML-Powered Real Estate Portal Case Study';
const DESCRIPTION = 'How Mapletech Labs built PropConnect Canada\'s real estate platform, with machine-learning recommendations across 850,000+ active listings.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://mapletechlabs.ca/case-studies/real-estate-portal',
    type: 'article',
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
