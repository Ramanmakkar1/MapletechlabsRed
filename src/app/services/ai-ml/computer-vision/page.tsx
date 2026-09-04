import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: 'Computer Vision Development',
  description: 'Custom computer vision solutions by Mapletech Labs. Image recognition, object detection, OCR, and visual AI for enterprise applications.',
  openGraph: {
    title: 'Computer Vision Development | Mapletech Labs',
    description: 'Custom computer vision solutions by Mapletech Labs. Image recognition, object detection, OCR, and visual AI for enterprise applications.',
    url: 'https://mapletechlabs.ca/services/ai-ml/computer-vision',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/ai-ml/computer-vision'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('ai-ml', 'computer-vision');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <PageClient />
    </>
  );
}
