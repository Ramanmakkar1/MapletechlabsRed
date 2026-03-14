import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'SaaS Billing & Subscription Integration',
  description: 'Stripe billing integration for SaaS with subscriptions, dunning, and self-serve portals. Mapletech Labs builds payment infrastructure from Toronto, Canada.',
  openGraph: {
    title: 'SaaS Billing & Subscription Integration | Mapletech Labs',
    description: 'Stripe billing integration for SaaS with subscriptions, dunning, and self-serve portals.',
    url: 'https://mapletechlabs.ca/services/saas-development/billing-subscriptions',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.ca/services/saas-development/billing-subscriptions',
  },
};

export default function Page() {
  return <PageClient />;
}
