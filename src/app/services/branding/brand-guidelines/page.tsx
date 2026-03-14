import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Brand Guidelines Development',
  description: 'Comprehensive brand guidelines by Mapletech Labs. Usage rules, asset libraries, and style guides that maintain brand consistency across all touchpoints.',
  openGraph: {
    title: 'Brand Guidelines Development | Mapletech Labs',
    description: 'Comprehensive brand guidelines by Mapletech Labs. Usage rules, asset libraries, and style guides that maintain brand consistency across all touchpoints.',
    url: 'https://www.mapletechlabs.com/services/branding/brand-guidelines',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.mapletechlabs.com/services/branding/brand-guidelines',
  },
};

export default function Page() {
  return <PageClient />;
}
