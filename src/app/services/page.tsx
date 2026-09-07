import type { Metadata } from 'next';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Custom software, mobile apps, AI, cloud and SaaS development from Mapletech Labs. Twelve service lines, one accountable Canadian engineering team.',
  openGraph: {
    title: 'Our Services | Mapletech Labs',
    description: 'Explore 12 service categories from Mapletech Labs — mobile app development, web development, AI & machine learning, blockchain, product design, cloud & DevOps, AR/VR, game development, digital marketing, branding, WordPress & CMS, and SaaS development.',
    url: 'https://mapletechlabs.ca/services',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services'),
  },
};

export default function Page() {
  return <PageClient />;
}
