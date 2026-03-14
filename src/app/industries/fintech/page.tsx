import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Fintech Software Development | Mapletech Labs',
  description: 'Fintech software by Mapletech Labs. Payment platforms, banking apps & compliant trading systems for Canadian finance. Request a free technical proposal.',
  openGraph: {
    title: 'Fintech Software Development | Mapletech Labs',
    description: 'Fintech software by Mapletech Labs. Payment platforms, banking apps & compliant trading systems for Canadian finance.',
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
