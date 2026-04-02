import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Rebranding Services',
  description: 'Strategic rebranding services by Mapletech Labs. Refresh your brand identity, messaging, and visual language to stay relevant and competitive.',
  openGraph: {
    title: 'Rebranding Services | Mapletech Labs',
    description: 'Strategic rebranding services by Mapletech Labs. Refresh your brand identity, messaging, and visual language to stay relevant and competitive.',
    url: 'https://mapletechlabs.ca/services/branding/rebranding',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.ca/services/branding/rebranding',
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('branding', 'rebranding');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <PageClient />
    </>
  );
}
