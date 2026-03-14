import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'AWS Architecture & Cloud Solutions | Canada',
  description: 'Certified AWS architects at Mapletech Labs Toronto. Cloud migration, cost optimisation, and multi-region HA design. $2M+ saved for Canadian businesses. Free audit.',
  openGraph: {
    title: 'AWS Architecture & Cloud Solutions | Mapletech Labs',
    description: 'Certified AWS architects at Mapletech Labs Toronto. Cloud migration, cost optimisation, and multi-region HA design. $2M+ saved for Canadian businesses. Free audit.',
    url: 'https://www.mapletechlabs.com/services/cloud-devops/aws-architecture',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.mapletechlabs.com/services/cloud-devops/aws-architecture',
  },
};

export default function Page() {
  return <PageClient />;
}
