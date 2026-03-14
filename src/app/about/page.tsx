import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'About Mapletech Labs',
  description: 'Learn about Mapletech Labs — a Toronto-based custom software development company. 300+ projects delivered, 150+ engineers, serving clients in 12 countries.',
  openGraph: {
    title: 'About Mapletech Labs | Mapletech Labs',
    description: 'Learn about Mapletech Labs — a Toronto-based custom software development company. 300+ projects delivered, 150+ engineers, serving clients in 12 countries.',
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
