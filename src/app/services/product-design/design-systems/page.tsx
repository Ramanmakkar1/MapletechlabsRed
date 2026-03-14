import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Design System Development | Figma & Storybook',
  description: 'Scalable design systems built by Mapletech Labs in Toronto. Figma component libraries, Storybook docs, and WCAG 2.1 accessibility. 50+ systems delivered in Canada.',
  openGraph: {
    title: 'Design System Development | Mapletech Labs',
    description: 'Scalable design systems built by Mapletech Labs in Toronto. Figma component libraries, Storybook docs, and WCAG 2.1 accessibility. 50+ systems delivered in Canada.',
    url: 'https://mapletechlabs.com/services/product-design/design-systems',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.com/services/product-design/design-systems',
  },
};

export default function Page() {
  return <PageClient />;
}
