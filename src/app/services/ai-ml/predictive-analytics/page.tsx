import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Predictive Analytics Services',
  description: 'Predictive analytics and machine learning services. Mapletech Labs builds data-driven models for forecasting, recommendations, and business intelligence.',
  openGraph: {
    title: 'Predictive Analytics Services | Mapletech Labs',
    description: 'Predictive analytics and machine learning services. Mapletech Labs builds data-driven models for forecasting, recommendations, and business intelligence.',
    url: 'https://mapletechlabs.com/services/ai-ml/predictive-analytics',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.com/services/ai-ml/predictive-analytics',
  },
};

export default function Page() {
  return <PageClient />;
}
