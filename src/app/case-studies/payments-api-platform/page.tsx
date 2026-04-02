import { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'PCI DSS Payments API Case Study | Mapletech Labs',
  description: 'How we built PayBridge Solutions\' PCI DSS certified payments API processing 12M+ monthly transactions securely.',
  openGraph: {
    title: 'PCI DSS Payments API | Mapletech Labs',
    description: 'Real client success story from Mapletech Labs.',
    url: 'https://mapletechlabs.ca/case-studies/payments-api-platform',
    type: 'website',
  },
  alternates: { canonical: 'https://mapletechlabs.ca/case-studies/payments-api-platform' },
};

export default function Page() {
  return <PageClient />;
}
