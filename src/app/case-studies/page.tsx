import { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Case Studies | Client Success Stories',
  description: 'Explore how Mapletech Labs has helped Canadian businesses build scalable software. Real results from fintech, healthcare, e-commerce, and logistics projects.',
  openGraph: {
    title: 'Case Studies | Mapletech Labs',
    description: 'Real client success stories from Mapletech Labs.',
    url: 'https://mapletechlabs.ca/case-studies',
    type: 'website',
  },
  alternates: { canonical: 'https://mapletechlabs.ca/case-studies' },
};

export default function Page() {
  return <PageClient />;
}
