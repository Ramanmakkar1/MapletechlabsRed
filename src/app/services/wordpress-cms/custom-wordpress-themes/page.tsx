import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Custom WordPress Theme Development',
  description: 'Custom WordPress theme development by Mapletech Labs. Pixel-perfect, fast-loading themes built from scratch with clean code and SEO best practices.',
  openGraph: {
    title: 'Custom WordPress Theme Development | Mapletech Labs',
    description: 'Custom WordPress theme development by Mapletech Labs. Pixel-perfect, fast-loading themes built from scratch with clean code and SEO best practices.',
    url: 'https://mapletechlabs.com/services/wordpress-cms/custom-wordpress-themes',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.com/services/wordpress-cms/custom-wordpress-themes',
  },
};

export default function Page() {
  return <PageClient />;
}
