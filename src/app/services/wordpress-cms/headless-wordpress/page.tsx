import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Headless WordPress Development Services',
  description: 'Headless WordPress with Next.js frontends for blazing-fast performance. WPGraphQL, ISR, and CDN delivery by Mapletech Labs, Toronto. 40+ projects shipped.',
  openGraph: {
    title: 'Headless WordPress Development | Mapletech Labs',
    description: 'Combine WordPress CMS with Next.js speed. Decoupled architecture for 3x faster load times and global CDN delivery.',
    url: 'https://mapletechlabs.ca/services/wordpress-cms/headless-wordpress',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.ca/services/wordpress-cms/headless-wordpress',
  },
};

export default function Page() {
  return <PageClient />;
}
