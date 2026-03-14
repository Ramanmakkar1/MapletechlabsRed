import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Cloud & DevOps Services in Canada | Mapletech Labs',
  description: 'AWS, Kubernetes & CI/CD pipeline services by Mapletech Labs. Cloud architecture and DevOps for scalable apps in Canada. Get a free infrastructure audit.',
  openGraph: {
    title: 'Cloud & DevOps Services in Canada | Mapletech Labs',
    description: 'AWS, Kubernetes & CI/CD pipeline services by Mapletech Labs. Cloud architecture and DevOps for scalable apps in Canada.',
    url: 'https://mapletechlabs.ca/services/cloud-devops',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.ca/services/cloud-devops',
  },
};

export default function Page() {
  return <PageClient />;
}
