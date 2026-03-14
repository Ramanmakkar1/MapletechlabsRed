import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Product Design & UI/UX Services',
  description: 'Product design and UI/UX services by Mapletech Labs. User research, wireframing, prototyping, and design systems that drive user engagement.',
  openGraph: {
    title: 'Product Design & UI/UX Services | Mapletech Labs',
    description: 'Product design and UI/UX services by Mapletech Labs. User research, wireframing, prototyping, and design systems that drive user engagement.',
    url: 'https://www.mapletechlabs.com/services/product-design',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.mapletechlabs.com/services/product-design',
  },
};

export default function Page() {
  return <PageClient />;
}
