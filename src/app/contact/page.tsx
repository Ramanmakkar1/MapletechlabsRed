import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import ContactPage from '@/components/ContactPage';
import Footer from '@/components/Footer';
import { canonicalUrl } from '@/lib/seo/canonical';
import { seoTitle } from '@/lib/seo/title';

export const metadata: Metadata = {
  title: seoTitle('Contact Mapletech Labs | Get a Free Consultation'),
  description: 'Contact Mapletech Labs for a free project consultation. Custom software development company in Edmonton, Canada. Response within 4 hours.',
  openGraph: {
    title: 'Contact Mapletech Labs | Get a Free Consultation',
    description: 'Contact Mapletech Labs for a free project consultation. Custom software development company in Edmonton, Canada.',
    url: 'https://mapletechlabs.ca/contact',
    type: 'website',
  },
  alternates: {
    canonical: canonicalUrl('/contact'),
  },
};

export default function ContactRoute() {
  return (
    <>
      <Navbar />
      <main>
        <ContactPage />
      </main>
      <Footer />
    </>
  );
}
