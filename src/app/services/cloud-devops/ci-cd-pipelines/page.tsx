import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'CI/CD Pipeline Development Services | Canada',
  description: 'Automated CI/CD pipelines by Mapletech Labs Toronto. GitHub Actions, blue-green deploys, and zero-downtime releases. 100+ pipelines built for Canadian teams.',
  openGraph: {
    title: 'CI/CD Pipeline Development Services | Mapletech Labs',
    description: 'Automated CI/CD pipelines by Mapletech Labs Toronto. GitHub Actions, blue-green deploys, and zero-downtime releases. 100+ pipelines built for Canadian teams.',
    url: 'https://www.mapletechlabs.com/services/cloud-devops/ci-cd-pipelines',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.mapletechlabs.com/services/cloud-devops/ci-cd-pipelines',
  },
};

export default function Page() {
  return <PageClient />;
}
