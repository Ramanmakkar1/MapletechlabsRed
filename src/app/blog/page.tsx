import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Blog | Software Development Insights | Mapletech Labs',
  description: 'Expert insights on software development, AI, web & mobile apps from Mapletech Labs. Tips, guides, and industry analysis to grow your business.',
  openGraph: {
    title: 'Blog | Software Development Insights | Mapletech Labs',
    description: 'Expert insights on software development, AI, web & mobile apps from Mapletech Labs. Tips, guides, and industry analysis.',
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
