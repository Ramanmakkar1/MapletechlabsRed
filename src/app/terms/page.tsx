import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'The terms governing use of the Mapletech Labs website and services, including intellectual property, liability and governing law in Canada.',
  alternates: { canonical: canonicalUrl('/terms') },
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--surface)', padding: '140px 40px 80px', minHeight: '60vh' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <Link href="/" style={{ fontSize: '14px', color: 'var(--muted)', textDecoration: 'none', marginBottom: '40px', display: 'inline-block' }}>← Back to Home</Link>
          
          <h1 style={{ fontSize: 'var(--fs-display)', fontWeight: 600, color: 'var(--ink)', marginBottom: '24px' }}>Terms of Service</h1>
          
          <p style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '32px' }}>
            Last updated: April 2026
          </p>

          <div style={{ fontSize: '16px', color: 'var(--body)', lineHeight: 1.9 }}>
            
            <h2 style={{ fontSize: '24px', fontWeight: 600, color: 'var(--ink)', marginTop: '48px', marginBottom: '16px' }}>1. Agreement to Terms</h2>
            <p style={{ marginBottom: '20px' }}>
              By accessing and using mapletechlabs.ca and our services, you accept and agree to be bound by these Terms of Service. If you do not agree, please do not use our services.
            </p>

            <h2 style={{ fontSize: '24px', fontWeight: 600, color: 'var(--ink)', marginTop: '48px', marginBottom: '16px' }}>2. Services Description</h2>
            <p style={{ marginBottom: '20px' }}>
              Mapletech Labs provides custom software development services including mobile apps, web applications, AI/ML solutions, and blockchain systems. Services are delivered on a fixed-scope, fixed-price basis with defined timelines.
            </p>

            <h2 style={{ fontSize: '24px', fontWeight: 600, color: 'var(--ink)', marginTop: '48px', marginBottom: '16px' }}>3. Intellectual Property Rights</h2>
            <p style={{ marginBottom: '12px' }}>
              <strong>Client IP:</strong> Upon final payment, all source code, deliverables, and intellectual property are transferred to you. You own 100% of your project.
            </p>
            <p style={{ marginBottom: '20px' }}>
              <strong>Company IP:</strong> We retain rights to our tools, frameworks, and methodologies used in development (that are not client-specific).
            </p>

            <h2 style={{ fontSize: '24px', fontWeight: 600, color: 'var(--ink)', marginTop: '48px', marginBottom: '16px' }}>4. Payment & Billing</h2>
            <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
              <li>Projects are quoted and invoiced on a fixed-price basis</li>
              <li>Payment schedule: 50% upfront, 50% upon completion</li>
              <li>All prices are in Canadian dollars unless otherwise specified</li>
              <li>Late payments may incur additional fees or project delays</li>
              <li>Refunds are not available for completed work</li>
            </ul>

            <h2 style={{ fontSize: '24px', fontWeight: 600, color: 'var(--ink)', marginTop: '48px', marginBottom: '16px' }}>5. Project Timeline & Changes</h2>
            <p style={{ marginBottom: '12px' }}>
              <strong>Timeline:</strong> We commit to the agreed timeline. Delays due to client feedback are excluded from our SLA.
            </p>
            <p style={{ marginBottom: '20px' }}>
              <strong>Scope Changes:</strong> Any changes to project scope require written agreement and may result in timeline and cost adjustments.
            </p>

            <h2 style={{ fontSize: '24px', fontWeight: 600, color: 'var(--ink)', marginTop: '48px', marginBottom: '16px' }}>6. Warranties & Limitations</h2>
            <p style={{ marginBottom: '12px' }}>
              <strong>Services Warranty:</strong> We warrant that services will be performed in a professional manner according to industry standards.
            </p>
            <p style={{ marginBottom: '20px' }}>
              <strong>Limitation of Liability:</strong> Our liability is limited to the amount paid for services. We are not liable for indirect, consequential, or special damages.
            </p>

            <h2 style={{ fontSize: '24px', fontWeight: 600, color: 'var(--ink)', marginTop: '48px', marginBottom: '16px' }}>7. Confidentiality</h2>
            <p style={{ marginBottom: '20px' }}>
              Both parties agree to maintain confidentiality of proprietary information. This obligation survives contract termination for 3 years.
            </p>

            <h2 style={{ fontSize: '24px', fontWeight: 600, color: 'var(--ink)', marginTop: '48px', marginBottom: '16px' }}>8. Termination</h2>
            <p style={{ marginBottom: '20px' }}>
              Either party may terminate this agreement with 30 days written notice. Upon termination, all outstanding invoices become immediately due, and we will deliver completed work.
            </p>

            <h2 style={{ fontSize: '24px', fontWeight: 600, color: 'var(--ink)', marginTop: '48px', marginBottom: '16px' }}>9. Website Use License</h2>
            <p style={{ marginBottom: '20px' }}>
              Permission is granted to temporarily download material from our website for personal, non-commercial viewing. This is not a transfer of ownership and is subject to restrictions.
            </p>

            <h2 style={{ fontSize: '24px', fontWeight: 600, color: 'var(--ink)', marginTop: '48px', marginBottom: '16px' }}>10. Disclaimer</h2>
            <p style={{ marginBottom: '20px' }}>
              Our services and website are provided "as is" without warranties. We disclaim all warranties, express or implied, including fitness for a particular purpose.
            </p>

            <h2 style={{ fontSize: '24px', fontWeight: 600, color: 'var(--ink)', marginTop: '48px', marginBottom: '16px' }}>11. Modifications</h2>
            <p style={{ marginBottom: '20px' }}>
              We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of modified terms.
            </p>

            <h2 style={{ fontSize: '24px', fontWeight: 600, color: 'var(--ink)', marginTop: '48px', marginBottom: '16px' }}>12. Governing Law</h2>
            <p style={{ marginBottom: '20px' }}>
              These terms are governed by and construed in accordance with the laws of Alberta, Canada, and you agree to submit to the jurisdiction of the courts located there.
            </p>

            <h2 style={{ fontSize: '24px', fontWeight: 600, color: 'var(--ink)', marginTop: '48px', marginBottom: '16px' }}>13. Contact Information</h2>
            <p style={{ marginBottom: '20px' }}>
              For questions about these terms, contact us at:<br />
              <strong>Email:</strong> <a href="mailto:legal@mapletechlabs.ca" style={{ color: 'var(--brand)' }}>legal@mapletechlabs.ca</a><br />
              <strong>Address:</strong> Edmonton, Alberta, Canada
            </p>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
