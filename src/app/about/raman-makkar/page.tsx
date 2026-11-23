import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import PageClient from './PageClient';
import { canonicalUrl } from '@/lib/seo/canonical';
import { ogTitle, seoTitle } from '@/lib/seo/title';
import { seoDescription } from '@/lib/seo/description';

const profileUrl = canonicalUrl('/about/raman-makkar');
const title = 'Raman Makkar, Founder & CEO of Mapletech Labs, Edmonton';
const description =
  'Raman Makkar founded Mapletech Labs in Edmonton in 2018. 15+ years in software engineering and 500+ projects shipped across Canada. Meet the founder today.';

export const metadata: Metadata = {
  title: seoTitle(title),
  description: seoDescription(description),
  alternates: { canonical: profileUrl },
  openGraph: {
    title: ogTitle(title),
    description: seoDescription(description),
    url: profileUrl,
    type: 'profile',
  },
};

export default function RamanPage() {
  const personId = `${profileUrl}#person`;
  const profileSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfilePage',
        '@id': `${profileUrl}#profilepage`,
        url: profileUrl,
        name: title,
        dateModified: '2026-11-14',
        mainEntity: { '@id': personId },
      },
      {
        '@type': 'Person',
        '@id': personId,
        name: 'Raman Makkar',
        jobTitle: 'Founder & CEO',
        url: profileUrl,
        email: 'hello@mapletechlabs.ca',
        telephone: '+1-403-604-8692',
        worksFor: {
          '@type': 'Organization',
          '@id': `${canonicalUrl('/')}#organization`,
          name: 'Mapletech Labs',
          url: canonicalUrl('/'),
        },
        description:
          'Founded Mapletech Labs in 2018 with a mission to build world-class software without compromise. With 15+ years in software engineering, Raman Makkar has architected systems processing billions of transactions, scaled engineering teams, and mentored builders across fintech, healthcare, and enterprise.',
        knowsAbout: [
          'React',
          'Node.js',
          'Python',
          'PostgreSQL',
          'AWS',
          'Scaling systems',
          'Team architecture',
          'AI integration',
          'Web Development',
          'Custom Software Development',
          'Mobile App Development',
          'SaaS Product Strategy',
          'Cloud Architecture (AWS/GCP)',
          'Cloud & DevOps',
          'Software Maintenance',
          'Product Design',
          'AI & Machine Learning',
        ],
        homeLocation: {
          '@type': 'Place',
          name: 'Edmonton, Alberta, Canada',
        },
        workLocation: {
          '@type': 'Place',
          name: 'Edmonton, Alberta, Canada',
        },
      },
    ],
  };

  return (
    <>
      <BreadcrumbSchema
        items={[
          { position: 1, name: 'Home', item: canonicalUrl('/') },
          { position: 2, name: 'About', item: canonicalUrl('/about') },
          { position: 3, name: 'Raman Makkar', item: profileUrl },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema).replace(/</g, '\\u003c') }}
      />
      <PageClient />
    </>
  );
}
