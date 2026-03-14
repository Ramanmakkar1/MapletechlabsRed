import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'AI & Machine Learning Development',
  description: 'Custom AI and machine learning solutions by Mapletech Labs. LLM integration, computer vision, predictive analytics, and AI automation for enterprises.',
  openGraph: {
    title: 'AI & Machine Learning Development | Mapletech Labs',
    description: 'Custom AI and machine learning solutions by Mapletech Labs. LLM integration, computer vision, predictive analytics, and AI automation for enterprises.',
    url: 'https://mapletechlabs.ca/services/ai-ml',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.ca/services/ai-ml',
  },
};

export default function Page() {
  return <PageClient />;
}
