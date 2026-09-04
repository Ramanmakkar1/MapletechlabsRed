import type { Metadata } from 'next';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { seoTitle } from '@/lib/seo/title';

export const metadata: Metadata = {
  title: seoTitle('About Us | Mapletech Labs Canada'),
  description: 'Mapletech Labs is a Canadian software development company. 300+ projects delivered, 150+ engineers, serving clients in 12 countries. Meet our team today.',
  openGraph: {
    title: 'About Us | Mapletech Labs Canada',
    description: 'Mapletech Labs is a Canadian software development company. 300+ projects delivered, 150+ engineers, serving clients in 12 countries.',
    url: 'https://mapletechlabs.ca/about',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/about'),
  },
};

export default function Page() {
  return <PageClient />;
}
