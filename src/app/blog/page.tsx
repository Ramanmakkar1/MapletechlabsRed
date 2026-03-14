import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Blog & Insights',
  description: 'Tech insights and industry trends from Mapletech Labs. Articles on software development, AI, mobile apps, blockchain, and digital transformation.',
  openGraph: {
    title: 'Blog & Insights | Mapletech Labs',
    description: 'Tech insights and industry trends from Mapletech Labs. Articles on software development, AI, mobile apps, blockchain, and digital transformation.',
    url: 'https://mapletechlabs.ca/blog',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.ca/blog',
  },
};

export default function Page() {
  return <PageClient />;
}
