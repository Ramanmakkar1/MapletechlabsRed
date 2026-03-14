import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Performance Scaling & Optimization Services',
  description: 'Expert performance engineering and scaling solutions. Load testing, database optimization, CDN strategy, and autoscaling for Canadian businesses. 99.99% uptime.',
  openGraph: {
    title: 'Performance Scaling & Optimization | Mapletech Labs',
    description: 'Expert performance engineering and scaling solutions. Load testing, database optimization, CDN strategy, and autoscaling for Canadian businesses.',
    url: 'https://www.mapletechlabs.com/services/cloud-devops/performance-scaling',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.mapletechlabs.com/services/cloud-devops/performance-scaling',
  },
};

export default function Page() {
  return <PageClient />;
}
