import { serviceCityPath } from '@/data/serviceCity';
import Link from 'next/link';
import IndustryPageTemplate from '@/components/page/IndustryPageTemplate';
import { industryFaqs } from '@/data/industry-faqs';

const heroStats = ([['$2B+', 'Processed Daily'], ['PCI-DSS', 'Compliant'], ['Sub-50ms', 'Latency']] as [string, string][]).map(([value, label]) => ({ value, label }));
const challenges = [
                { icon: '🏛️', title: 'Regulatory Compliance', desc: 'Navigating PCI-DSS, SOX, and GDPR with architecture that satisfies auditors and keeps your business protected.' },
                { icon: '⚡', title: 'Real-time Processing', desc: 'Handling millions of concurrent transactions with sub-millisecond precision and zero tolerance for dropped events.' },
                { icon: '🔐', title: 'Security & Fraud', desc: 'Protecting financial data and preventing fraud at scale with multi-layered defences and adaptive threat detection.' },
              ];
const solutions = [
                { icon: '📈', title: 'Trading & Investment Platforms', desc: 'AI-driven analytics, real-time market data ingestion, order management systems, and portfolio risk engines built for institutional-grade performance.' },
                { icon: '🏦', title: 'Digital Banking & Wallets', desc: 'Mobile-first banking apps with KYC/AML workflows, multi-currency support, biometric auth, and seamless core-banking integrations.' },
                { icon: '💳', title: 'Payment Gateways', desc: 'Secure, PCI-compliant payment processing with multi-provider failover, tokenisation, and support for cards, ACH, and real-time payments.' },
                { icon: '📋', title: 'RegTech & Compliance', desc: 'Automated regulatory reporting, KYC/AML screening workflows, and audit-ready systems that keep you ahead of evolving financial regulations.' },
                { icon: '🔗', title: 'Crypto & DeFi', desc: 'Custodial and non-custodial wallet infrastructure, smart contract integration, and blockchain-based settlement for digital asset platforms.' },
                { icon: '📊', title: 'Risk Analytics', desc: 'Real-time risk scoring, portfolio stress testing, and anomaly detection engines that surface threats before they become losses.' },
              ];
const tech = [
                { cat: 'Core', items: ['Python', 'Go', 'Rust', 'Java'] },
                { cat: 'Data', items: ['Apache Kafka', 'TimescaleDB', 'Redis', 'Spark'] },
                { cat: 'Security', items: ['Vault', 'OAuth2', 'HSM', 'FIDO2'] },
                { cat: 'Cloud', items: ['AWS GovCloud', 'Azure', 'Kubernetes', 'Terraform'] },
              ];
const whyUs = [
                { icon: '🎓', title: 'Financial Domain Experts', desc: 'Our engineers have built systems for top-tier banks and trading firms. We speak your language and understand the stakes.' },
                { icon: '🔒', title: 'Security-First Architecture', desc: 'Security is designed in from day one — not bolted on. Every system we ship passes independent penetration testing.' },
                { icon: '📋', title: 'Regulatory Guidance', desc: 'We stay current with PCI-DSS, SOX, MiFID II, and emerging frameworks so your product launches compliant, not scrambling.' },
              ];
const related = [
  { name: 'Edmonton', href: serviceCityPath('mobile-app-development', 'edmonton'), desc: 'FinTech Software Development services in Edmonton.' },
  { name: 'Calgary', href: serviceCityPath('mobile-app-development', 'calgary'), desc: 'FinTech Software Development services in Calgary.' },
  { name: 'Toronto', href: serviceCityPath('mobile-app-development', 'toronto'), desc: 'FinTech Software Development services in Toronto.' },
  { name: 'Vancouver', href: serviceCityPath('mobile-app-development', 'vancouver'), desc: 'FinTech Software Development services in Vancouver.' },
  { name: 'Payments API case study', href: '/case-studies/payments-api-platform', desc: 'Explore the project case study.' },
                { name: 'Web Development', href: '/services/web-development', desc: 'High-performance trading dashboards and financial portals built with modern frameworks.' },
                { name: 'Mobile App Development', href: '/services/mobile-app-development', desc: 'Secure mobile banking and wallet apps with biometric auth and real-time notifications.' },
                { name: 'AI & Machine Learning', href: '/services/ai-ml', desc: 'Fraud detection models, risk scoring engines and predictive analytics for financial data.' },
                { name: 'Cloud & DevOps', href: '/services/cloud-devops', desc: 'PCI-DSS compliant cloud infrastructure with zero-downtime deployments and auto-scaling.' },
                { name: 'Blockchain Development', href: '/services/blockchain-web3', desc: 'Smart contracts, DeFi protocols and tokenised asset platforms on EVM-compatible chains.' },
              ];

const cityLinks = [
  { label: 'App Development Company in Toronto', href: serviceCityPath('mobile-app-development', 'toronto') },
  { label: 'App Development Company in Calgary', href: serviceCityPath('mobile-app-development', 'calgary') },
  { label: 'App Development Company in Montreal', href: serviceCityPath('mobile-app-development', 'montreal') },
  { label: 'Web Development Company in Toronto', href: serviceCityPath('web-development', 'toronto') },
  { label: 'Web Development Company in Calgary', href: serviceCityPath('web-development', 'calgary') },
  { label: 'Web Development Company in Montreal', href: serviceCityPath('web-development', 'montreal') },
  { label: 'AI Development Company in Toronto', href: serviceCityPath('ai-ml', 'toronto') },
  { label: 'AI Development Company in Calgary', href: serviceCityPath('ai-ml', 'calgary') },
  { label: 'AI Development Company in Montreal', href: serviceCityPath('ai-ml', 'montreal') },
];

const linkStyle = { color: 'var(--brand)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 3 } as const;

const extra = (
  <section style={{ padding: 'var(--section-y-sm) 0' }}>
    <div className="cb-container">
      <h2 style={{ fontSize: 'var(--fs-h3)', marginBottom: 8 }}>Related work</h2>
      <ul style={{ margin: '0 0 16px', paddingLeft: 20, display: 'grid', gap: 8 }}>
        <li><Link href="/case-studies/fintech-trading-platform" style={linkStyle}>Fintech trading platform case study</Link></li>
        <li><Link href="/case-studies/payments-api-platform" style={linkStyle}>PCI DSS payments API case study</Link></li>
      </ul>
      <h2 style={{ fontSize: 'var(--fs-h3)', marginBottom: 8 }}>Services for this sector</h2>
      <ul style={{ margin: 0, paddingLeft: 20, display: 'grid', gap: 8 }}>
        <li><Link href="/services/web-development" style={linkStyle}>Web development</Link></li>
        <li><Link href="/services/mobile-app-development" style={linkStyle}>Mobile app development</Link></li>
        <li><Link href="/services/ai-ml" style={linkStyle}>AI & machine learning</Link></li>
      </ul>
    </div>
  </section>
);

export default function PageClient() {
  return (
    <IndustryPageTemplate
      slug="fintech"
      name="FinTech"
      copy={{ badge: "FinTech", title: <>FinTech Development That <span style={{ color: 'var(--brand)' }}>Moves Money.</span></>, desc: <>FinTech software development in Canada — trading platforms, digital wallets, payment gateways and regulatory-compliant financial infrastructure built to PCI DSS and OSFI expectations. Privacy &amp; compliance: see our <Link href="/blog/app-privacy-compliance-canada" style={{ color: 'var(--brand)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 3 }}>PIPEDA and Quebec Law 25 checklist for Canadian apps</Link>.</> }}
      heroStats={heroStats}
      challenges={challenges}
      solutions={solutions}
      caseStudy={{ client: "Fintech Client", headline: "2M+ daily transactions, sub-50ms latency, 99.99% uptime", text: "We rebuilt their core trading engine from the ground up \u2014 new data pipeline, new order router, new risk management layer.", quote: "Mapletech Labs rebuilt our core trading engine. The performance gains were immediate and measurable.", cite: "CTO, Leading Canadian Fintech" }}
      tech={tech}
      whyUs={whyUs}
      related={related}
      cta={{ title: "Build Your FinTech Product.", sub: "From MVP to mission-critical infrastructure \u2014 we have the expertise to make it happen." }}
      faqs={industryFaqs.fintech}
      cityLinks={cityLinks}
      extra={extra}
    />
  );
}
