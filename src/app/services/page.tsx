import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Our Services | Mapletech Labs',
  description: 'Explore 12 service categories from Mapletech Labs — mobile app development, web development, AI & machine learning, blockchain, product design, cloud & DevOps, AR/VR, game development, digital marketing, branding, WordPress & CMS, and SaaS development.',
  openGraph: {
    title: 'Our Services | Mapletech Labs',
    description: 'Explore 12 service categories from Mapletech Labs — mobile app development, web development, AI & machine learning, blockchain, product design, cloud & DevOps, AR/VR, game development, digital marketing, branding, WordPress & CMS, and SaaS development.',
    url: 'https://www.mapletechlabs.com/services',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.mapletechlabs.com/services',
  },
};

export default function Page() {
  return <PageClient />;
}
