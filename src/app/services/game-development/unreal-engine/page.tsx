import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: 'Unreal Engine 5 Development | AAA Game Studio',
  description: 'Unreal Engine 5 game development with Lumen, Nanite, and Chaos Physics. AAA-quality games, simulations, and archviz. 30+ UE5 projects delivered in Canada.',
  openGraph: {
    title: 'Unreal Engine 5 Development | Mapletech Labs',
    description: 'Unreal Engine 5 game development with Lumen, Nanite, and Chaos Physics. AAA-quality games, simulations, and architectural visualization.',
    url: 'https://mapletechlabs.ca/services/game-development/unreal-engine',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mapletechlabs.ca/services/game-development/unreal-engine',
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('game-development', 'unreal-engine');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <PageClient />
    </>
  );
}
