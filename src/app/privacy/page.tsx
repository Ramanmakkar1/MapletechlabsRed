import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';
import { canonicalUrl } from '@/lib/seo/canonical';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Mapletech Labs. Learn how we collect, use, and protect your information.',
  alternates: { canonical: canonicalUrl('/privacy') },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#000', padding: '140px 40px 80px', minHeight: '60vh' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <Link href="/" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', marginBottom: '40px', display: 'inline-block' }}>← Back to Home</Link>
          
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 600, color: '#fff', marginBottom: '24px' }}>Privacy Policy</h1>
          
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: '32px' }}>
            Last updated: April 2026. Effective Date: April 1, 2026
          </p>

          <div style={{ fontSize: '16px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.9 }}>
            
            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#fff', marginTop: '48px', marginBottom: '16px' }}>1. Introduction</h2>
            <p style={{ marginBottom: '20px' }}>
              Mapletech Labs ("Company", "we", "us", "our") operates the mapletechlabs.ca website and related services ("Service"). We are committed to protecting your privacy and ensuring you have a positive experience on our website and when using our services.
            </p>

            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#fff', marginTop: '48px', marginBottom: '16px' }}>2. Information We Collect</h2>
            <p style={{ marginBottom: '12px' }}><strong>Information You Provide Directly:</strong></p>
            <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
              <li>Contact information (name, email, phone number)</li>
              <li>Project details and requirements you submit</li>
              <li>Communication records (emails, messages, call logs)</li>
              <li>Payment and billing information (processed securely)</li>
            </ul>

            <p style={{ marginBottom: '12px' }}><strong>Information Collected Automatically:</strong></p>
            <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
              <li>Browser type and device information</li>
              <li>IP address and location data</li>
              <li>Pages visited and time spent</li>
              <li>Referral source and interactions</li>
              <li>Cookies and analytics data</li>
            </ul>

            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#fff', marginTop: '48px', marginBottom: '16px' }}>3. How We Use Your Information</h2>
            <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
              <li>Provide and improve our services</li>
              <li>Communicate with you about projects and updates</li>
              <li>Process payments and transactions</li>
              <li>Comply with legal obligations</li>
              <li>Analyze usage patterns and improve user experience</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Prevent fraud and enhance security</li>
            </ul>

            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#fff', marginTop: '48px', marginBottom: '16px' }}>4. Data Protection & Security</h2>
            <p style={{ marginBottom: '20px' }}>
              We implement industry-standard security measures including SSL encryption, secure databases, and access controls. All payment information is processed through PCI DSS-compliant payment processors. We do not store full credit card information on our servers.
            </p>

            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#fff', marginTop: '48px', marginBottom: '16px' }}>5. GDPR & Privacy Regulations</h2>
            <p style={{ marginBottom: '12px' }}>
              <strong>For EU Residents (GDPR):</strong> You have the right to access, correct, delete, or port your personal data. We process data based on your consent or legitimate business interests. You can withdraw consent at any time.
            </p>
            <p style={{ marginBottom: '20px' }}>
              <strong>For California Residents (CCPA):</strong> You have the right to know what personal information is collected, delete your data, and opt-out of data sales. We do not sell personal information.
            </p>

            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#fff', marginTop: '48px', marginBottom: '16px' }}>6. Cookies & Tracking</h2>
            <p style={{ marginBottom: '20px' }}>
              We use cookies for authentication, preferences, and analytics. You can control cookie settings in your browser. Third-party services (Google Analytics, Clarity) may collect data subject to their privacy policies.
            </p>

            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#fff', marginTop: '48px', marginBottom: '16px' }}>7. Data Retention</h2>
            <p style={{ marginBottom: '20px' }}>
              We retain your information as long as necessary to provide services or comply with legal obligations. You can request deletion of your data at any time, subject to legal requirements.
            </p>

            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#fff', marginTop: '48px', marginBottom: '16px' }}>8. Third-Party Services</h2>
            <p style={{ marginBottom: '20px' }}>
              We may share information with service providers (hosting, analytics, payments) who are contractually bound to protect your data. We do not sell your information to third parties.
            </p>

            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#fff', marginTop: '48px', marginBottom: '16px' }}>9. Children's Privacy</h2>
            <p style={{ marginBottom: '20px' }}>
              Our services are not directed to children under 13. We do not knowingly collect information from children. If we become aware of such collection, we will delete it immediately.
            </p>

            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#fff', marginTop: '48px', marginBottom: '16px' }}>10. Updates to This Policy</h2>
            <p style={{ marginBottom: '20px' }}>
              We may update this policy periodically. We will notify you of material changes via email or prominent notice on our website. Your continued use constitutes acceptance of updates.
            </p>

            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#fff', marginTop: '48px', marginBottom: '16px' }}>11. Contact Us</h2>
            <p style={{ marginBottom: '20px' }}>
              For privacy inquiries, data requests, or concerns, contact us at:<br />
              <strong>Email:</strong> <a href="mailto:privacy@mapletechlabs.ca" style={{ color: '#f5290d' }}>privacy@mapletechlabs.ca</a><br />
              <strong>Address:</strong> Edmonton, Alberta, Canada<br />
              <strong>Response Time:</strong> We aim to respond to all requests within 30 days.
            </p>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
