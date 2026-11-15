import type { Metadata } from 'next';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { serviceBreadcrumbSchema, serviceHubSchema } from '@/lib/seo/serviceHubSchema';
import { DEFAULT_OG_IMAGES } from '@/lib/seo/og';

const TITLE = 'Cloud & DevOps Services Company in Canada';
const DESCRIPTION = 'Cloud and DevOps services in Canada: AWS architecture, Kubernetes, CI/CD pipelines and infrastructure as code. Get a free infrastructure audit.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    images: DEFAULT_OG_IMAGES,
    title: ogTitle(TITLE),
    description: DESCRIPTION,
    url: 'https://mapletechlabs.ca/services/cloud-devops',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/cloud-devops'),
  },
};

const serviceSchema = serviceHubSchema({
  slug: 'cloud-devops',
  name: 'Cloud & DevOps Services',
  serviceType: 'Cloud & DevOps',
  description: DESCRIPTION,
});

const breadcrumbSchema = serviceBreadcrumbSchema({ slug: 'cloud-devops', label: 'Cloud & DevOps' });

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PageClient />
    </>
  );
}
