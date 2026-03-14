import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Computer Vision Development',
  description: 'Custom computer vision solutions by Mapletech Labs. Image recognition, object detection, OCR, and visual AI for enterprise applications.',
  openGraph: {
    title: 'Computer Vision Development | Mapletech Labs',
    description: 'Custom computer vision solutions by Mapletech Labs. Image recognition, object detection, OCR, and visual AI for enterprise applications.',
    url: 'https://mapletechlabs.com/services/ai-ml/computer-vision',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.com/services/ai-ml/computer-vision',
  },
};

export default function Page() {
  return <PageClient />;
}
