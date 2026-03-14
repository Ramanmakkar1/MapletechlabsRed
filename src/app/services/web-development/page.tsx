import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Web Development Services in Canada | Mapletech Labs',
  description: 'Custom web development by Mapletech Labs. React, Next.js & Node.js experts. Fixed-price projects. 150+ apps shipped across Canada. Get a free quote today.',
  openGraph: {
    title: 'Web Development Services in Canada | Mapletech Labs',
    description: 'Custom web development by Mapletech Labs. React, Next.js & Node.js experts. 150+ apps shipped across Canada.',
    url: 'https://mapletechlabs.ca/services/web-development',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.ca/services/web-development',
  },
};

export default function Page() {
  return <PageClient />;
}
