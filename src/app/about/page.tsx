import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'About Us | Mapletech Labs Canada',
  description: 'Mapletech Labs is a Canadian software development company. 300+ projects delivered, 150+ engineers, serving clients in 12 countries. Meet our team today.',
  openGraph: {
    title: 'About Us | Mapletech Labs Canada',
    description: 'Mapletech Labs is a Canadian software development company. 300+ projects delivered, 150+ engineers, serving clients in 12 countries.',
    url: 'https://mapletechlabs.ca/about',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.ca/about',
  },
};

export default function Page() {
  return <PageClient />;
}
