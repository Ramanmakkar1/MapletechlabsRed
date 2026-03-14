import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Logo & Visual Identity Design',
  description: 'Professional logo and visual identity design by Mapletech Labs. Memorable logos, color systems, and typography that define your brand.',
  openGraph: {
    title: 'Logo & Visual Identity Design | Mapletech Labs',
    description: 'Professional logo and visual identity design by Mapletech Labs. Memorable logos, color systems, and typography that define your brand.',
    url: 'https://mapletechlabs.com/services/branding/logo-visual-identity',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.com/services/branding/logo-visual-identity',
  },
};

export default function Page() {
  return <PageClient />;
}
