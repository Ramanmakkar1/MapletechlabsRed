import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Wireframing & UX Design Services | Canada',
  description: 'Professional wireframing and UX design by Mapletech Labs. Lo-fi to hi-fi wireframes in Figma, user flow mapping, and handoff-ready specs. 200+ products wireframed.',
  openGraph: {
    title: 'Wireframing & UX Design Services | Mapletech Labs',
    description: 'Professional wireframing and UX design by Mapletech Labs. Lo-fi to hi-fi wireframes in Figma, user flow mapping, and handoff-ready specs. 200+ products wireframed.',
    url: 'https://www.mapletechlabs.com/services/product-design/wireframing',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.mapletechlabs.com/services/product-design/wireframing',
  },
};

export default function Page() {
  return <PageClient />;
}
