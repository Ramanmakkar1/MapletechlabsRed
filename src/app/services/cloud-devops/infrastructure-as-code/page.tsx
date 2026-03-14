import type { Metadata } from 'next';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Infrastructure as Code Services | Terraform',
  description: 'Terraform and Pulumi IaC services by Mapletech Labs Toronto. GitOps workflows, state management, and security scanning. 70+ IaC projects delivered across Canada.',
  openGraph: {
    title: 'Infrastructure as Code Services | Mapletech Labs',
    description: 'Terraform and Pulumi IaC services by Mapletech Labs Toronto. GitOps workflows, state management, and security scanning. 70+ IaC projects delivered across Canada.',
    url: 'https://www.mapletechlabs.com/services/cloud-devops/infrastructure-as-code',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.mapletechlabs.com/services/cloud-devops/infrastructure-as-code',
  },
};

export default function Page() {
  return <PageClient />;
}
