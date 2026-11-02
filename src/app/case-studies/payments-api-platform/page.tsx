import { Metadata } from 'next';
import PageClient from './PageClient';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { getCaseStudyBreadcrumbs } from '@/data/breadcrumbs';
import { canonicalUrl } from '@/lib/seo/canonical';
import { seoTitle } from '@/lib/seo/title';

const TITLE = 'PCI DSS Payments API Case Study';
const DESCRIPTION = 'How Mapletech Labs built PayBridge Solutions\' PCI DSS certified payments API, processing 12 million transactions a month securely and at scale.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://mapletechlabs.ca/case-studies/payments-api-platform',
    type: 'article',
  },
  alternates: { canonical: canonicalUrl('/case-studies/payments-api-platform') },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={getCaseStudyBreadcrumbs('PCI DSS Payments API', 'payments-api-platform')} />
      <PageClient />
    </>
  );
}
