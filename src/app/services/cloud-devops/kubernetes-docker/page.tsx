import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Kubernetes & Docker Services | Toronto, Canada',
  description: 'Production-grade Kubernetes and Docker by Mapletech Labs. EKS, GKE, AKS cluster setup, Helm charts, and container security. 60+ K8s clusters deployed in Canada.',
  openGraph: {
    title: 'Kubernetes & Docker Services | Mapletech Labs',
    description: 'Production-grade Kubernetes and Docker by Mapletech Labs. EKS, GKE, AKS cluster setup, Helm charts, and container security. 60+ K8s clusters deployed in Canada.',
    url: 'https://mapletechlabs.ca/services/cloud-devops/kubernetes-docker',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.ca/services/cloud-devops/kubernetes-docker',
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('cloud-devops', 'kubernetes-docker');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <PageClient />
    </>
  );
}
