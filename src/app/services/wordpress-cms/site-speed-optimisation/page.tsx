import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'WordPress Site Speed Optimisation Services',
  description: 'Transform slow WordPress sites into 90+ Lighthouse performers. Core Web Vitals fixes, caching, CDN setup, and image optimisation by Mapletech Labs, Canada.',
  openGraph: {
    title: 'WordPress Speed Optimisation | Mapletech Labs',
    description: 'Achieve 90+ PageSpeed scores with our WordPress speed optimisation — Core Web Vitals, caching, CDN, and image fixes.',
    url: 'https://mapletechlabs.ca/services/wordpress-cms/site-speed-optimisation',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.ca/services/wordpress-cms/site-speed-optimisation',
  },
};

export default function Page() {
  return <PageClient />;
}
