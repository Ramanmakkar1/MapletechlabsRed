import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { seoTitle, ogTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';

const TITLE = 'Computer Vision Development in Canada';
const DESCRIPTION =
  'Computer vision development in Canada: image recognition, object detection, OCR and visual AI for enterprise apps. Mapletech Labs deployed 40+ CV systems.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    title: ogTitle(TITLE),
    description: DESCRIPTION,
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
      <ServiceSchema
        name={'Computer Vision Development'}
        description={DESCRIPTION}
        url={'https://mapletechlabs.ca/services/ai-ml/computer-vision'}
      />
      <PageClient />
    </>
  );
}
