import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'SaaS MVP Development in 8 Weeks | Toronto',
  description: 'Launch your SaaS MVP in 8 weeks with production-quality code. Mapletech Labs builds scalable MVPs for startups from Toronto, Canada.',
  openGraph: {
    title: 'SaaS MVP Development in 8 Weeks | Mapletech Labs',
    description: 'Launch your SaaS MVP in 8 weeks with production-quality code built to scale.',
    url: 'https://mapletechlabs.com/services/saas-development/saas-mvp-development',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.com/services/saas-development/saas-mvp-development',
  },
};

export default function Page() {
  return <PageClient />;
}
