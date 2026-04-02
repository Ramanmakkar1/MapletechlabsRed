import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Predictive Analytics Services',
  description: 'Predictive analytics and machine learning services. Mapletech Labs builds data-driven models for forecasting, recommendations, and business intelligence.',
  openGraph: {
    title: 'Predictive Analytics Services | Mapletech Labs',
    description: 'Predictive analytics and machine learning services. Mapletech Labs builds data-driven models for forecasting, recommendations, and business intelligence.',
    url: 'https://mapletechlabs.ca/services/ai-ml/predictive-analytics',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.ca/services/ai-ml/predictive-analytics',
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('ai-ml', 'predictive-analytics');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <PageClient />
    </>
  );
}
