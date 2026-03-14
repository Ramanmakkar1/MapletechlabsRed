import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Fintech Software Development',
  description: 'Custom fintech software development by Mapletech Labs. Payment platforms, banking apps, trading systems, and regulatory-compliant financial technology.',
  openGraph: {
    title: 'Fintech Software Development | Mapletech Labs',
    description: 'Custom fintech software development by Mapletech Labs. Payment platforms, banking apps, trading systems, and regulatory-compliant financial technology.',
    url: 'https://mapletechlabs.ca/industries/fintech',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.ca/industries/fintech',
  },
};

export default function Page() {
  return <PageClient />;
}
