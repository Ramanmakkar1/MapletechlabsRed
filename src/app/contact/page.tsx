import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import ContactPage from '@/components/ContactPage';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import ContactInfo, { CONTACT_FAQS } from '@/components/ContactInfo';
import { FaqSchema } from '@/components/ServiceSchema';
import Footer from '@/components/Footer';
import { canonicalUrl } from '@/lib/seo/canonical';
import { seoTitle } from '@/lib/seo/title';
import { BUSINESS, HQ_ADDRESS, LOCAL_BUSINESS_AREA_SERVED } from '@/lib/seo/business';

const TITLE = 'Contact Mapletech Labs | Get a Free Consultation';
const DESCRIPTION = 'Contact Mapletech Labs for a free project consultation. Custom software development company in Edmonton, Canada. Response within one working day.';

export const metadata: Metadata = {
  title: seoTitle(TITLE),
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://mapletechlabs.ca/contact',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/contact'),
  },
};

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': `${canonicalUrl('/contact')}#contactpage`,
  url: canonicalUrl('/contact'),
  name: TITLE,
  description: DESCRIPTION,
  about: { '@id': 'https://mapletechlabs.ca/#organization' },
  mainEntity: {
    '@type': 'ProfessionalService',
    '@id': 'https://mapletechlabs.ca/#localbusiness',
    name: BUSINESS.name,
    url: BUSINESS.url,
    telephone: BUSINESS.telephone,
    email: BUSINESS.email,
    image: BUSINESS.image,
    logo: BUSINESS.logo,
    priceRange: '$$-$$$',
    address: HQ_ADDRESS,
    areaServed: LOCAL_BUSINESS_AREA_SERVED,
    parentOrganization: { '@id': 'https://mapletechlabs.ca/#organization' },
    sameAs: BUSINESS.sameAs,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: BUSINESS.telephone,
      email: BUSINESS.email,
      contactType: 'sales',
      areaServed: 'CA',
      availableLanguage: ['English'],
    },
  },
};

export default function ContactRoute() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <ContactPage />
        <ContactInfo />
      </main>
      <BreadcrumbSchema items={[
        { position: 1, name: 'Home', item: canonicalUrl('/') },
        { position: 2, name: 'Contact', item: canonicalUrl('/contact') },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <FaqSchema faqs={CONTACT_FAQS.map(({ question, answer }) => ({ q: question, a: answer }))} />
      <Footer />
    </>
  );
}
