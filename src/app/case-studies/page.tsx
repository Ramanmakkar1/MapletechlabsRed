import { Metadata } from 'next';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

const DESCRIPTION = 'See how Mapletech Labs has helped Canadian businesses build scalable software. Real results from fintech, healthcare, e-commerce, and logistics projects.';

export const metadata: Metadata = {
  title: 'Case Studies | Client Success Stories',
  description: DESCRIPTION,
  openGraph: {
    title: 'Case Studies | Mapletech Labs',
    description: DESCRIPTION,
    url: 'https://mapletechlabs.ca/case-studies',
    type: 'website',
  },
  alternates: { canonical: canonicalUrl('/case-studies') },
};

export default function Page() {
  return <PageClient />;
}
