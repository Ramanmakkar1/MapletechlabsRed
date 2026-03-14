import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'AI & Machine Learning Services in Canada | Mapletech Labs',
  description: 'Custom AI & ML solutions by Mapletech Labs. LLM integration, computer vision & predictive analytics for enterprises in Canada. Request a free proposal.',
  openGraph: {
    title: 'AI & Machine Learning Services in Canada | Mapletech Labs',
    description: 'Custom AI & ML solutions by Mapletech Labs. LLM integration, computer vision & predictive analytics for enterprises in Canada.',
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
