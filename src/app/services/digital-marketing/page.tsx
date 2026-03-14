import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Digital Marketing Services',
  description: 'Data-driven digital marketing by Mapletech Labs. SEO, Google Ads, social media marketing, content strategy, and performance analytics.',
  openGraph: {
    title: 'Digital Marketing Services | Mapletech Labs',
    description: 'Data-driven digital marketing by Mapletech Labs. SEO, Google Ads, social media marketing, content strategy, and performance analytics.',
    url: 'https://mapletechlabs.com/services/digital-marketing',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.com/services/digital-marketing',
  },
};

export default function Page() {
  return <PageClient />;
}
