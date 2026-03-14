import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Next.js Development Services',
  description: 'Expert Next.js development by Mapletech Labs. Build fast, SEO-friendly React applications with server-side rendering and static site generation.',
  openGraph: {
    title: 'Next.js Development Services | Mapletech Labs',
    description: 'Expert Next.js development by Mapletech Labs. Build fast, SEO-friendly React applications with server-side rendering and static site generation.',
    url: 'https://mapletechlabs.com/services/web-development/nextjs-development',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.com/services/web-development/nextjs-development',
  },
};

export default function Page() {
  return <PageClient />;
}
