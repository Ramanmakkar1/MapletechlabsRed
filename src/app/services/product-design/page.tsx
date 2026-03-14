import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Product Design & UI/UX in Canada | Mapletech Labs',
  description: 'Product design & UI/UX services by Mapletech Labs. User research, wireframing & prototyping for apps in Canada. Get a free design audit for your product.',
  openGraph: {
    title: 'Product Design & UI/UX in Canada | Mapletech Labs',
    description: 'Product design & UI/UX services by Mapletech Labs. User research, wireframing & prototyping for apps in Canada.',
    url: 'https://mapletechlabs.ca/services/product-design',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.ca/services/product-design',
  },
};

export default function Page() {
  return <PageClient />;
}
