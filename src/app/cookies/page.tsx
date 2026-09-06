import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Cookie Policy for Mapletech Labs. Learn how we use cookies on our website.',
  alternates: { canonical: canonicalUrl('/cookies') },
};

export default function CookiesPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--surface)', padding: 'var(--hero-top) 0 var(--section-y)', minHeight: '60vh' }}>
        <div className="cb-container">
          <Link href="/" style={{ fontSize: 14, color: 'var(--muted)', textDecoration: 'none', marginBottom: 40, display: 'inline-block' }}>← Back to Home</Link>
          <h1 style={{ fontSize: 'var(--fs-display)', fontWeight: 600, color: 'var(--ink)', marginBottom: 24 }}>Cookie Policy</h1>
          <p style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.8, maxWidth: 720 }}>
            Mapletech Labs uses cookies to improve your experience on our website. This policy explains what cookies we use and how you can manage them.
          </p>
          <div style={{ marginTop: 48, fontSize: 15, color: 'var(--body)', lineHeight: 1.9 }}>
            <p>Last updated: March 2025. For questions, contact us at <a href="mailto:hello@mapletechlabs.ca" style={{ color: 'var(--brand)' }}>hello@mapletechlabs.ca</a>.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
