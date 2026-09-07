import { Metadata } from 'next';
import PageClient from './PageClient';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { getCaseStudyBreadcrumbs } from '@/data/breadcrumbs';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: 'PCI DSS Payments API Case Study',
  description: 'How Mapletech Labs built PayBridge Solutions\' PCI DSS certified payments API, processing 12 million transactions a month securely and at scale.',
  openGraph: {
    title: 'PCI DSS Payments API | Mapletech Labs',
    description: 'Real client success story from Mapletech Labs.',
    url: 'https://mapletechlabs.ca/case-studies/payments-api-platform',
    type: 'website',
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
