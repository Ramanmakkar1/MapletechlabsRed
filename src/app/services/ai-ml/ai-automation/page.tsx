import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'AI Automation Solutions',
  description: 'AI-powered automation solutions by Mapletech Labs. Automate workflows, processes, and decision-making with custom artificial intelligence systems.',
  openGraph: {
    title: 'AI Automation Solutions | Mapletech Labs',
    description: 'AI-powered automation solutions by Mapletech Labs. Automate workflows, processes, and decision-making with custom artificial intelligence systems.',
    url: 'https://www.mapletechlabs.com/services/ai-ml/ai-automation',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.mapletechlabs.com/services/ai-ml/ai-automation',
  },
};

export default function Page() {
  return <PageClient />;
}
