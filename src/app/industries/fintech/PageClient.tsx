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
const cardStyle = { border: '1px solid var(--line, #e5e7eb)', borderRadius: 12, padding: 'clamp(16px, 4vw, 28px)', scrollMarginTop: 96, minWidth: 0 } as const;
const pStyle = { fontSize: 16, color: 'var(--body)', lineHeight: 1.7, margin: '0 0 12px' } as const;

const projectTypes = [
  {
    id: 'trading-platforms',
    title: 'Trading and investment platforms',
    desc: 'Real-time market data, order management, portfolio and risk engines for brokerages, wealth managers and trading firms.',
    extra: <>See the <Link href="/case-studies/fintech-trading-platform" style={linkStyle}>fintech trading platform case study</Link> for a rebuilt core engine handling 2M+ daily transactions.</>,
  },
  {
    id: 'payments-apis',
    title: 'Payments APIs and gateways',
    desc: 'Card, ACH and real-time payment flows with tokenisation, multi-provider failover and reconciliation your finance team can trust.',
    extra: <>See the <Link href="/case-studies/payments-api-platform" style={linkStyle}>PCI DSS payments API case study</Link> for the architecture behind it.</>,
  },
  {
    id: 'banking-wallets',
    title: 'Digital banking and wallets',
    desc: 'Mobile-first accounts, KYC/AML onboarding, biometric sign-in, multi-currency balances and core-banking integrations.',
    extra: <>Delivered by our <Link href="/services/mobile-app-development" style={linkStyle}>mobile app development</Link> team for iOS and Android.</>,
  },
  {
    id: 'kyc-regtech',
    title: 'KYC, AML and RegTech',
    desc: 'Customer screening, transaction monitoring, regulatory reporting and audit trails that keep evidence ready for reviewers.',
    extra: <>Built on the same <Link href="/services" style={linkStyle}>custom software development</Link> process we use for every regulated build.</>,
  },
  {
    id: 'risk-fraud',
    title: 'Risk and fraud analytics',
    desc: 'Real-time risk scoring, anomaly detection and portfolio stress testing that surface threats before they become losses.',
    extra: <>Our <Link href="/services/ai-ml" style={linkStyle}>AI and machine learning</Link> practice builds and validates the models.</>,
  },
  {
    id: 'lending-credit',
    title: 'Lending and credit platforms',
    desc: 'Application intake, decisioning, servicing and collections workflows for lenders, fintechs and credit unions.',
    extra: <>Scoped as a fixed-price build with your credit policy and compliance rules agreed up front.</>,
  },
];

const buildVsBuy = [
  ['Core ledger and banking', 'Buy a proven core-banking platform', 'Build only the differentiators around it', 'Buy, then integrate'],
  ['KYC and AML screening', 'Buy a licensed screening provider', 'Build the workflow and decisioning around it', 'Buy the data, build the workflow'],
  ['Card issuing and processing', 'Buy a licensed processor or issuer', 'Build your own card programme from scratch', 'Buy the rails'],
  ['Trading engine', 'Buy an off-the-shelf engine', 'Build when latency, asset class or workflow is your edge', 'Build when it is the product'],
  ['Customer app and portal', 'Buy a white-label app', 'Build for your brand, onboarding and advice model', 'Build'],
  ['Regulatory reporting', 'Buy a reporting tool', 'Build the data pipeline and controls that feed it', 'Buy the report, build the data'],
];

const buyerContent = (
  <section aria-labelledby="fintech-buyer-guide" style={{ padding: 'var(--section-y-sm) 0' }}>
    <div className="cb-container">
      <h2 id="fintech-buyer-guide" style={{ fontSize: 'var(--fs-h3)', marginBottom: 8 }}>What a Canadian fintech software development partner builds</h2>
      <p style={{ ...pStyle, maxWidth: 760 }}>A Canadian fintech software development partner builds the products and back-end systems that let people hold, move, lend, invest and account for money under Canadian privacy, payments and anti-money-laundering rules. At Mapletech Labs that usually means a trading or investment platform, a payments API or gateway, a digital wallet or banking app, or the KYC, risk and reporting tools behind them.</p>
      <p style={{ ...pStyle, maxWidth: 760 }}>We scope the work as a fixed-price project in CAD, build it with your compliance team involved, and hand over the source code and infrastructure on final payment. Start with our <Link href="/services" style={linkStyle}>software development services</Link>, or jump to <a href="#fintech-project-types" style={linkStyle}>common project types</a>, <a href="#fintech-security" style={linkStyle}>security and compliance</a>, <a href="#fintech-build-vs-buy" style={linkStyle}>build versus buy</a>, <a href="#fintech-process" style={linkStyle}>how we work</a> or <a href="#fintech-cost" style={linkStyle}>what affects cost</a>.</p>

      <h2 id="fintech-project-types" style={{ fontSize: 'var(--fs-h3)', margin: '32px 0 8px' }}>Common fintech project types</h2>
      <div style={{ display: 'grid', gap: 20, gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', marginTop: 20 }}>
        {projectTypes.map(t => (
          <article key={t.id} id={t.id} style={cardStyle}>
            <h3 style={{ marginTop: 0, marginBottom: 10 }}>{t.title}</h3>
            <p style={pStyle}>{t.desc}</p>
            <p style={{ ...pStyle, marginBottom: 0 }}>{t.extra}</p>
          </article>
        ))}
      </div>

      <div id="fintech-security" style={{ ...cardStyle, marginTop: 28 }}>
        <h2 style={{ fontSize: 'var(--fs-h3)', marginTop: 0, marginBottom: 8 }}>Security and compliance considerations</h2>
        <p style={pStyle}>Regulated money software is judged on the evidence it leaves behind, not only on the features it ships. We plan for these from discovery so they are built in rather than added before an audit:</p>
        <ul style={{ margin: 0, paddingLeft: 20, display: 'grid', gap: 10 }}>
          <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7 }}><strong>PCI DSS scope:</strong> keep card data out of your systems where possible, tokenise what remains, and document the controls auditors will test.</li>
          <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7 }}><strong>FINTRAC AML and KYC:</strong> identity verification, sanctions and PEP screening, transaction monitoring and reportable-event workflows.</li>
          <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7 }}><strong>OSFI expectations:</strong> where they apply to your product, we build the controls, change management and third-party oversight your reviewers expect.</li>
          <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7 }}><strong>Privacy:</strong> PIPEDA nationally and Quebec Law 25 where relevant, with Canadian data residency when your policy requires it.</li>
          <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7 }}><strong>Access and audit:</strong> least-privilege roles, key management, immutable audit logs and alerting on sensitive actions.</li>
          <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7 }}><strong>Assurance:</strong> independent penetration testing, dependency scanning and an incident-response runbook before launch.</li>
        </ul>
        <p style={{ ...pStyle, marginTop: 16, marginBottom: 0 }}>Your legal and compliance teams remain the authority on your obligations; we build to the requirements you confirm and give them the evidence to review.</p>
      </div>

      <div id="fintech-build-vs-buy" style={{ ...cardStyle, marginTop: 28 }}>
        <h2 style={{ fontSize: 'var(--fs-h3)', marginTop: 0, marginBottom: 8 }}>Build versus buy</h2>
        <p style={pStyle}>Most fintech products are a mix. Buy the licensed, commodity layers where a provider already carries the regulatory burden, and build the workflow, data and customer experience that make you different. This is the split we usually recommend:</p>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15, lineHeight: 1.6 }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', padding: '10px 12px', borderBottom: '1px solid var(--line, #e5e7eb)' }}>Capability</th>
                <th style={{ textAlign: 'left', padding: '10px 12px', borderBottom: '1px solid var(--line, #e5e7eb)' }}>Buy when</th>
                <th style={{ textAlign: 'left', padding: '10px 12px', borderBottom: '1px solid var(--line, #e5e7eb)' }}>Build when</th>
                <th style={{ textAlign: 'left', padding: '10px 12px', borderBottom: '1px solid var(--line, #e5e7eb)' }}>Usual call</th>
              </tr>
            </thead>
            <tbody>
              {buildVsBuy.map(([capability, buy, build, call]) => (
                <tr key={capability}>
                  <td style={{ padding: '10px 12px', borderBottom: '1px solid var(--line, #e5e7eb)', fontWeight: 600 }}>{capability}</td>
                  <td style={{ padding: '10px 12px', borderBottom: '1px solid var(--line, #e5e7eb)' }}>{buy}</td>
                  <td style={{ padding: '10px 12px', borderBottom: '1px solid var(--line, #e5e7eb)' }}>{build}</td>
                  <td style={{ padding: '10px 12px', borderBottom: '1px solid var(--line, #e5e7eb)' }}>{call}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div id="fintech-process" style={{ ...cardStyle, marginTop: 28 }}>
        <h2 style={{ fontSize: 'var(--fs-h3)', marginTop: 0, marginBottom: 8 }}>How we work with fintech teams</h2>
        <ol style={{ margin: 0, paddingLeft: 20, display: 'grid', gap: 10 }}>
          <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7 }}><strong>Discovery and compliance scoping:</strong> we map the money flows, user roles, integrations and regulatory requirements, and sign a mutual NDA before detailed work.</li>
          <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7 }}><strong>Architecture and fixed quote:</strong> you get a written scope, fixed milestones and a CAD price before code starts, with IP assignment on day one.</li>
          <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7 }}><strong>Build in short increments:</strong> working software every two weeks, with your compliance and operations leads reviewing as it develops.</li>
          <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7 }}><strong>Security review and acceptance testing:</strong> penetration testing, reconciliation checks and user acceptance against the criteria we agreed.</li>
          <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7 }}><strong>Launch and handover:</strong> repositories, credentials and runbooks transfer to you on final payment, with no licence retained on your systems.</li>
          <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7 }}><strong>Support and iteration:</strong> optional maintenance for monitoring, releases and the next set of features after launch.</li>
        </ol>
      </div>

      <div id="fintech-cost" style={{ ...cardStyle, marginTop: 28 }}>
        <h2 style={{ fontSize: 'var(--fs-h3)', marginTop: 0, marginBottom: 8 }}>What affects fintech project cost</h2>
        <p style={pStyle}>Two products with the same screen count can differ by several times in cost. The drivers we price in discovery are:</p>
        <ul style={{ margin: 0, paddingLeft: 20, display: 'grid', gap: 10 }}>
          <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7 }}><strong>Number and type of money flows:</strong> a single payment rail is simpler than cards, ACH, real-time payments and multi-currency settlement together.</li>
          <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7 }}><strong>Third-party integrations:</strong> core banking, card processors, KYC providers and market-data feeds each add access approvals, mapping and testing.</li>
          <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7 }}><strong>Compliance evidence:</strong> audit logging, reporting, screening and controls take design and testing time even when they are not visible to customers.</li>
          <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7 }}><strong>Data migration:</strong> moving balances, histories and customer records from a legacy system safely is often its own workstream.</li>
          <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7 }}><strong>Security assurance:</strong> penetration testing, remediation and the depth of review your regulator or partners require.</li>
          <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7 }}><strong>Platforms and support:</strong> web, iOS and Android, plus the monitoring and release cadence you need after launch.</li>
        </ul>
        <p style={{ ...pStyle, marginTop: 16, marginBottom: 0 }}>We quote fixed-scope projects in CAD, so the price is agreed before we write code. The FAQ below covers typical ranges and timelines. For a first release, see our <Link href="/services/software-development/mvp-development" style={linkStyle}>MVP development</Link> service.</p>
      </div>
    </div>
  </section>
);

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
      copy={{ badge: "FinTech", title: <>FinTech Software Development <span style={{ color: 'var(--brand)' }}>in Canada.</span></>, desc: <>FinTech software development in Canada — trading platforms, digital wallets, payment gateways and regulatory-compliant financial infrastructure built to PCI DSS and OSFI expectations. Privacy &amp; compliance: see our <Link href="/blog/app-privacy-compliance-canada" style={{ color: 'var(--brand)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 3 }}>PIPEDA and Quebec Law 25 checklist for Canadian apps</Link>.</> }}
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
      buyerContent={buyerContent}
      extra={extra}
    />
  );
}
