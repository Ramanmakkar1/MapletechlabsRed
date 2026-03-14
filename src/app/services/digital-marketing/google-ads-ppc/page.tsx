import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Google Ads & PPC Management Services Toronto',
  description: 'Expert Google Ads & PPC management in Toronto. Search, Shopping, Display, and YouTube campaigns with 3.5x avg ROAS. Google Premier Partner agency.',
  openGraph: {
    title: 'Google Ads & PPC Management | Mapletech Labs',
    description: 'Expert Google Ads & PPC management in Toronto. Search, Shopping, Display, and YouTube campaigns with 3.5x avg ROAS.',
    url: 'https://mapletechlabs.com/services/digital-marketing/google-ads-ppc',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.com/services/digital-marketing/google-ads-ppc',
  },
};

export default function Page() {
  return <PageClient />;
}
