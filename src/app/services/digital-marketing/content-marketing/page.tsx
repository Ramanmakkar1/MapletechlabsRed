import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Content Marketing Services | Strategy & SEO',
  description: 'Strategic content marketing that drives organic traffic and conversions. Blog writing, video, email, and content distribution for Canadian brands. 400% avg growth.',
  openGraph: {
    title: 'Content Marketing Services | Mapletech Labs',
    description: 'Strategic content marketing that drives organic traffic and conversions. Blog writing, video, email, and content distribution for Canadian brands.',
    url: 'https://mapletechlabs.com/services/digital-marketing/content-marketing',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.com/services/digital-marketing/content-marketing',
  },
};

export default function Page() {
  return <PageClient />;
}
