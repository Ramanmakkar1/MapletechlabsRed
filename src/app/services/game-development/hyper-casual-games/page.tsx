import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: 'Hyper-Casual Game Development Services',
  description: 'We build and publish hyper-casual games fast — from 3-day prototypes to CPI-validated launches. 50M+ downloads shipped by our Toronto-based game studio.',
  openGraph: {
    title: 'Hyper-Casual Game Development | Mapletech Labs',
    description: 'Rapid hyper-casual game prototyping, CPI testing, and publishing. 40+ games shipped with 50M+ downloads.',
    url: 'https://mapletechlabs.ca/services/game-development/hyper-casual-games',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/game-development/hyper-casual-games'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('game-development', 'hyper-casual-games');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={'Hyper-Casual Game Development Services'}
        description={'We build and publish hyper-casual games fast — from 3-day prototypes to CPI-validated launches. 50M+ downloads shipped by our Toronto-based game studio.'}
        url={'https://mapletechlabs.ca/services/game-development/hyper-casual-games'}
      />
      <PageClient />
    </>
  );
}
