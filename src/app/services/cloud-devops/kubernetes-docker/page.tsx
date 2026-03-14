import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Kubernetes & Docker Services | Toronto, Canada',
  description: 'Production-grade Kubernetes and Docker by Mapletech Labs. EKS, GKE, AKS cluster setup, Helm charts, and container security. 60+ K8s clusters deployed in Canada.',
  openGraph: {
    title: 'Kubernetes & Docker Services | Mapletech Labs',
    description: 'Production-grade Kubernetes and Docker by Mapletech Labs. EKS, GKE, AKS cluster setup, Helm charts, and container security. 60+ K8s clusters deployed in Canada.',
    url: 'https://mapletechlabs.com/services/cloud-devops/kubernetes-docker',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.com/services/cloud-devops/kubernetes-docker',
  },
};

export default function Page() {
  return <PageClient />;
}
