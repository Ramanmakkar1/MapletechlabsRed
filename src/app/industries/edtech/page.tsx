import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'EdTech Software Development | Mapletech Labs',
  description: 'EdTech software by Mapletech Labs. LMS platforms, virtual classrooms & assessment tools for Canadian educators. Get a free consultation for your project.',
  openGraph: {
    title: 'EdTech Software Development | Mapletech Labs',
    description: 'EdTech software by Mapletech Labs. LMS platforms, virtual classrooms & assessment tools for Canadian educators.',
    url: 'https://mapletechlabs.ca/industries/edtech',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.ca/industries/edtech',
  },
};

export default function Page() {
  return <PageClient />;
}
