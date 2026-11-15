import type { Metadata } from 'next';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';
import PageClient from './PageClient';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { canonicalUrl } from '@/lib/seo/canonical';
import { DEFAULT_OG_IMAGES } from '@/lib/seo/og';

const TITLE = 'Software Development Services in Canada';
const DESCRIPTION = 'Software development services in Canada: 12 service lines, from custom software, mobile apps and AI to UI/UX, cloud and SaaS, by one Edmonton-based team.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: seoDescription(DESCRIPTION),
  openGraph: {
    images: DEFAULT_OG_IMAGES,
    title: ogTitle(TITLE),
    description: DESCRIPTION,
    url: 'https://mapletechlabs.ca/services',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/services'),
  },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { position: 1, name: 'Home', item: canonicalUrl('/') },
        { position: 2, name: 'Services', item: canonicalUrl('/services') },
      ]} />
      <nav aria-label="Core services" className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
          Explore our core service hubs
        </h2>
        <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <li><a href="/services/software-development" className="underline hover:no-underline">Custom software development services</a></li>
          <li><a href="/services/web-development" className="underline hover:no-underline">Web development company</a></li>
          <li><a href="/services/mobile-app-development" className="underline hover:no-underline">Mobile app development services</a></li>
          <li><a href="/services/ai-ml" className="underline hover:no-underline">AI and machine learning development</a></li>
          <li><a href="/services/product-design" className="underline hover:no-underline">UI/UX and product design services</a></li>
          <li><a href="/services/saas-development" className="underline hover:no-underline">SaaS platform development</a></li>
          <li><a href="/services/digital-marketing" className="underline hover:no-underline">Digital marketing services</a></li>
        </ul>
      </nav>
      <PageClient />
    </>
  );
}
