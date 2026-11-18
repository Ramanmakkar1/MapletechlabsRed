import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ServiceSchema } from '@/components/ServiceSchema';
import { getServiceBreadcrumbs } from '@/data/breadcrumbs';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { seoTitle, ogTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';
import { DEFAULT_OG_IMAGES } from '@/lib/seo/og';

const TITLE = 'Web Design Company in Canada: Custom Websites';
const DESCRIPTION = 'Web design company in Canada: we design and build fast, mobile-first custom websites with fixed CAD quotes. Request your free quote today, no obligation.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    images: DEFAULT_OG_IMAGES,
    title: ogTitle(TITLE),
    description: seoDescription(DESCRIPTION),
    url: 'https://mapletechlabs.ca/services/web-development/web-design',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services/web-development/web-design'),
  },
};

export default function Page() {
  const breadcrumbs = getServiceBreadcrumbs('web-development', 'web-design');

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ServiceSchema
        name={'Web Design Services'}
        description={seoDescription(DESCRIPTION)}
        url={'https://mapletechlabs.ca/services/web-development/web-design'}
      />
      <PageClient />
    </>
  );
}
