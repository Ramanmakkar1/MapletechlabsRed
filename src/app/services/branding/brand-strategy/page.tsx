import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Brand Strategy Services',
  description: 'Strategic brand strategy consulting by Mapletech Labs. Market positioning, competitive analysis, and brand architecture for lasting market impact.',
  openGraph: {
    title: 'Brand Strategy Services | Mapletech Labs',
    description: 'Strategic brand strategy consulting by Mapletech Labs. Market positioning, competitive analysis, and brand architecture for lasting market impact.',
    url: 'https://www.mapletechlabs.com/services/branding/brand-strategy',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.mapletechlabs.com/services/branding/brand-strategy',
  },
};

export default function Page() {
  return <PageClient />;
}
