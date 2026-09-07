import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: 'Unity Game Development Services | C# Experts',
  description: 'Expert Unity game development with deep C# skills. 80+ projects across mobile, PC, and console. HDRP, URP, multiplayer, and cross-platform game studio in Canada.',
  openGraph: {
    title: 'Unity Game Development Services | Mapletech Labs',
    description: 'Expert Unity game development with deep C# skills. 80+ projects across mobile, PC, and console. HDRP, URP, and multiplayer.',
    url: 'https://mapletechlabs.ca/services/game-development/unity-development',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/game-development/unity-development'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('game-development', 'unity-development');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={'Unity Game Development Services | C# Experts'}
        description={'Expert Unity game development with deep C# skills. 80+ projects across mobile, PC, and console. HDRP, URP, multiplayer, and cross-platform game studio in Canada.'}
        url={'https://mapletechlabs.ca/services/game-development/unity-development'}
      />
      <PageClient />
    </>
  );
}
