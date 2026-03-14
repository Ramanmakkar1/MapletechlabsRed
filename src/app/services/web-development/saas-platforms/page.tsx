import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'SaaS Platform Development',
  description: 'Custom SaaS platform development services. Mapletech Labs builds scalable, multi-tenant software-as-a-service applications from concept to launch.',
  openGraph: {
    title: 'SaaS Platform Development | Mapletech Labs',
    description: 'Custom SaaS platform development services. Mapletech Labs builds scalable, multi-tenant software-as-a-service applications from concept to launch.',
    url: 'https://mapletechlabs.ca/services/web-development/saas-platforms',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.ca/services/web-development/saas-platforms',
  },
};

export default function Page() {
  return <PageClient />;
}
