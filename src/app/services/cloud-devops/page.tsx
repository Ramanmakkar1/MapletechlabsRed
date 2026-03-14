import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Cloud & DevOps Services',
  description: 'Cloud infrastructure and DevOps services by Mapletech Labs. AWS architecture, Kubernetes, CI/CD pipelines, and performance scaling for modern apps.',
  openGraph: {
    title: 'Cloud & DevOps Services | Mapletech Labs',
    description: 'Cloud infrastructure and DevOps services by Mapletech Labs. AWS architecture, Kubernetes, CI/CD pipelines, and performance scaling for modern apps.',
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
