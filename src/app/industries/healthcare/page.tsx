import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Healthcare Software Development',
  description: 'HIPAA-compliant healthcare software by Mapletech Labs. Telehealth platforms, EHR systems, patient portals, and medical device integrations.',
  openGraph: {
    title: 'Healthcare Software Development | Mapletech Labs',
    description: 'HIPAA-compliant healthcare software by Mapletech Labs. Telehealth platforms, EHR systems, patient portals, and medical device integrations.',
    url: 'https://mapletechlabs.ca/industries/healthcare',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.ca/industries/healthcare',
  },
};

export default function Page() {
  return <PageClient />;
}
