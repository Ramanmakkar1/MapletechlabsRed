import IndustryPageTemplate from '@/components/page/IndustryPageTemplate';
import Link from 'next/link';
import { industryFaqs } from '@/data/industry-faqs';
import { serviceCityPath } from '@/data/serviceCity';

const heroStats = ([['5,000+', 'Enterprise Users'], ['SOC II', 'Certified'], ['Zero', 'Critical Downtime']] as [string, string][]).map(([value, label]) => ({ value, label }));
const challenges = [
                { icon: '🔗', title: 'Legacy System Integration', desc: 'Connecting decades-old ERP, CRM, and mainframe systems to modern interfaces and APIs — without the big-bang migration risk that derails projects.' },
                { icon: '🔐', title: 'Enterprise Security', desc: 'SSO, RBAC, audit trails, and zero-trust networking that satisfies your CISO, passes penetration tests, and keeps sensitive business data protected at rest and in transit.' },
                { icon: '👥', title: 'Change Management', desc: 'Software that employees actually adopt. We conduct user research, run change champions programmes, and design onboarding flows that drive real utilisation.' },
              ];
const solutions = [
                { icon: '🏢', title: 'Custom ERP & CRM Systems', desc: 'Multi-department workflow automation, approval chains, reporting dashboards, and deep integrations with SAP, Salesforce, and Oracle — tailored to your exact processes.' },
                { icon: '🔗', title: 'Enterprise Integration & APIs', desc: 'REST and GraphQL API platforms, ESB implementations, legacy middleware bridges, and SSO unification that connects your entire technology estate.' },
                { icon: '🛠️', title: 'Internal Tooling', desc: 'Custom admin panels, operations dashboards, and employee-facing apps that replace spreadsheets and manual processes with streamlined workflows.' },
                { icon: '📊', title: 'Business Intelligence', desc: 'Real-time reporting dashboards, data warehousing, and self-service analytics that empower every department to make data-driven decisions.' },
                { icon: '⚙️', title: 'Workflow Automation', desc: 'End-to-end process automation with approval chains, notifications, and integrations that eliminate repetitive tasks and reduce human error.' },
                { icon: '🔐', title: 'MDM & Compliance', desc: 'Master data management, audit trails, and regulatory compliance tooling that keeps your organisation aligned with industry standards.' },
              ];
const tech = [
                { cat: 'Integration', items: ['MuleSoft', 'Apache Camel', 'REST', 'GraphQL', 'gRPC'] },
                { cat: 'Auth', items: ['Okta', 'Azure AD', 'SAML', 'OAuth2', 'LDAP'] },
                { cat: 'Backend', items: ['Java', '.NET', 'Python', 'Go', 'Kubernetes'] },
                { cat: 'BI', items: ['Power BI', 'Tableau', 'Looker', 'dbt', 'Snowflake'] },
              ];
const whyUs = [
                { icon: '🏛️', title: 'Enterprise Architecture Experts', desc: 'We design for maintainability, extensibility, and the organisational realities of large companies — multiple teams, multiple stakeholders, multi-year roadmaps.' },
                { icon: '🔒', title: 'Security & Compliance', desc: 'SOC II Type II, ISO 27001 alignment, penetration testing, and security architecture reviews that keep your enterprise software out of the headlines.' },
                { icon: '🤝', title: 'Long-term Partnership', desc: 'We don\'t disappear after launch. Our retainer teams provide ongoing development, support, and strategic guidance as your business evolves.' },
              ];
const related = [
  { name: 'Edmonton', href: '/locations/software-development-company-in-edmonton', desc: 'Enterprise Software Development services in Edmonton.' },
  { name: 'Calgary', href: '/locations/software-development-company-in-calgary', desc: 'Enterprise Software Development services in Calgary.' },
  { name: 'Toronto', href: '/locations/software-development-company-in-toronto', desc: 'Enterprise Software Development services in Toronto.' },
  { name: 'Vancouver', href: '/locations/software-development-company-in-vancouver', desc: 'Enterprise Software Development services in Vancouver.' },
  { name: 'Real estate portal case study', href: '/case-studies/real-estate-portal', desc: 'Explore the project case study.' },
                { name: 'Web Development', href: '/services/web-development', desc: 'Internal tools, admin dashboards and employee portals built for thousands of concurrent users.' },
                { name: 'Cloud & DevOps', href: '/services/cloud-devops', desc: 'Enterprise cloud migrations, Kubernetes orchestration and CI/CD pipelines for large teams.' },
                { name: 'AI & Machine Learning', href: '/services/ai-ml', desc: 'Business intelligence models, process automation and predictive analytics for enterprise data.' },
                { name: 'SaaS Development', href: '/services/saas-development', desc: 'Multi-tenant enterprise platforms with SSO, RBAC and audit-ready compliance tooling.' },
                { name: 'Blockchain Development', href: '/services/blockchain-web3', desc: 'Distributed ledger solutions for supply chain transparency and secure enterprise transactions.' },
              ];

const cityLinks = [
  { label: 'SaaS Development Company in Toronto', href: serviceCityPath('saas-development', 'toronto') },
  { label: 'SaaS Development Company in Ottawa', href: serviceCityPath('saas-development', 'ottawa') },
  { label: 'SaaS Development Company in Calgary', href: serviceCityPath('saas-development', 'calgary') },
  { label: 'AI Development Company in Toronto', href: serviceCityPath('ai-ml', 'toronto') },
  { label: 'AI Development Company in Ottawa', href: serviceCityPath('ai-ml', 'ottawa') },
  { label: 'AI Development Company in Calgary', href: serviceCityPath('ai-ml', 'calgary') },
];

const linkStyle = { color: 'var(--brand)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 3 } as const;
const cardStyle = { border: '1px solid var(--line, #e5e7eb)', borderRadius: 12, padding: 'clamp(16px, 4vw, 28px)', scrollMarginTop: 96, minWidth: 0 } as const;
const pStyle = { fontSize: 16, color: 'var(--body)', lineHeight: 1.7, margin: '0 0 12px' } as const;

const projectTypes = [
  {
    id: 'erp-crm',
    title: 'Custom ERP and CRM systems',
    desc: 'Multi-department workflow automation, approval chains and reporting dashboards tailored to how your organisation actually operates.',
    extra: <>Delivered by our <Link href="/services/software-development" style={linkStyle}>custom software development</Link> team.</>,
  },
  {
    id: 'legacy-modernization',
    title: 'Legacy system modernization',
    desc: 'Replace or wrap ageing ERP, CRM and mainframe systems in phases, with data migration and integrations that keep the business running.',
    extra: <>See our <Link href="/services/software-development/legacy-software-modernization" style={linkStyle}>legacy software modernization</Link> service.</>,
  },
  {
    id: 'integrations-apis',
    title: 'Enterprise integrations and APIs',
    desc: 'REST and GraphQL API platforms, middleware bridges and SSO unification that connect your whole technology estate.',
    extra: <>We build SAP, Salesforce and Oracle integrations that keep data consistent across the systems your teams already use.</>,
  },
  {
    id: 'internal-tools',
    title: 'Internal tools and portals',
    desc: 'Custom admin panels, operations dashboards and employee-facing apps that replace spreadsheets and manual processes.',
    extra: <>See the <Link href="/case-studies/real-estate-portal" style={linkStyle}>real estate portal case study</Link> for an example.</>,
  },
  {
    id: 'bi-data',
    title: 'Business intelligence and data platforms',
    desc: 'Data warehousing, real-time reporting dashboards and self-service analytics that give every department trusted numbers.',
    extra: <>Our <Link href="/services/ai-ml" style={linkStyle}>AI and machine learning</Link> practice builds the models behind it.</>,
  },
  {
    id: 'cloud-migration',
    title: 'Cloud migration and DevOps',
    desc: 'Move enterprise workloads to the cloud with Kubernetes orchestration, CI/CD pipelines and monitoring built for large teams.',
    extra: <>Delivered by our <Link href="/services/cloud-devops" style={linkStyle}>cloud and DevOps services</Link> team.</>,
  },
];

const buildVsBuy = [
  ['ERP core (finance, HR)', 'Buy a proven ERP platform', 'Build only the workflows that are your edge', 'Buy, then integrate'],
  ['CRM', 'Buy a mature CRM product', 'Build when your sales process is genuinely unique', 'Buy, then customise'],
  ['Industry-specific workflows', 'Buy a vertical package if one fits', 'Build when the workflow is how you compete', 'Build'],
  ['Integrations between systems', 'Buy an iPaaS or middleware product', 'Build the connectors and data rules that are specific to you', 'Buy the platform, build the connectors'],
  ['Reporting and BI', 'Buy a BI tool and connect it', 'Build the data pipeline and models that feed it', 'Buy the tool, build the data'],
  ['Employee and customer portals', 'Buy a white-label portal', 'Build for your brand, roles and processes', 'Build'],
];

const buyerContent = (
  <section aria-labelledby="enterprise-buyer-guide" style={{ padding: 'var(--section-y-sm) 0' }}>
    <div className="cb-container">
      <h2 id="enterprise-buyer-guide" style={{ fontSize: 'var(--fs-h3)', marginBottom: 8 }}>What an enterprise software development company in Canada builds</h2>
      <p style={{ ...pStyle, maxWidth: 760 }}>An enterprise software development company in Canada builds the custom systems large organisations run on: ERP and CRM platforms, integrations between existing systems, internal tools and portals, business intelligence and workflow automation. At Mapletech Labs that means software for Canadian enterprises with many departments, many stakeholders and years of legacy systems behind them. We scope the work as fixed-price milestones in CAD and hand over the source code and infrastructure on final payment.</p>
      <p style={{ ...pStyle, maxWidth: 760 }}>Start with our <Link href="/services" style={linkStyle}>software development services</Link>, or jump to <a href="#enterprise-project-types" style={linkStyle}>common project types</a>, <a href="#enterprise-security" style={linkStyle}>security and compliance</a>, <a href="#enterprise-build-vs-buy" style={linkStyle}>build versus buy</a>, <a href="#enterprise-process" style={linkStyle}>how we work</a> or <a href="#enterprise-cost" style={linkStyle}>what affects cost</a>.</p>

      <h2 id="enterprise-project-types" style={{ fontSize: 'var(--fs-h3)', margin: '32px 0 8px' }}>Common enterprise project types</h2>
      <div style={{ display: 'grid', gap: 20, gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', marginTop: 20 }}>
        {projectTypes.map(t => (
          <article key={t.id} id={t.id} style={cardStyle}>
            <h3 style={{ marginTop: 0, marginBottom: 10 }}>{t.title}</h3>
            <p style={pStyle}>{t.desc}</p>
            <p style={{ ...pStyle, marginBottom: 0 }}>{t.extra}</p>
          </article>
        ))}
      </div>

      <div id="enterprise-security" style={{ ...cardStyle, marginTop: 28 }}>
        <h2 style={{ fontSize: 'var(--fs-h3)', marginTop: 0, marginBottom: 8 }}>Security, access and compliance</h2>
        <p style={pStyle}>Enterprise software is judged on the evidence it leaves behind, not only on the features it ships. We plan for these from discovery so they are built in rather than added before an audit:</p>
        <ul style={{ margin: 0, paddingLeft: 20, display: 'grid', gap: 10 }}>
          <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7 }}><strong>Single sign-on:</strong> SSO with Okta or Azure AD so staff use their existing corporate identity.</li>
          <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7 }}><strong>Role-based access:</strong> least-privilege roles that match your departments, teams and approval chains.</li>
          <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7 }}><strong>Audit trails:</strong> immutable logs of who changed what, ready for internal and external reviewers.</li>
          <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7 }}><strong>SOC 2 and ISO 27001 alignment:</strong> controls, change management and evidence mapped to the frameworks your security team uses.</li>
          <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7 }}><strong>Privacy:</strong> PIPEDA nationally and Quebec Law 25 where relevant, with Canadian data residency when your policy requires it.</li>
          <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7 }}><strong>Assurance:</strong> independent penetration testing, dependency scanning and an incident-response runbook before launch.</li>
        </ul>
        <p style={{ ...pStyle, marginTop: 16, marginBottom: 0 }}>Your legal and compliance teams remain the authority on your obligations; we build to the requirements you confirm and give them the evidence to review.</p>
      </div>

      <div id="enterprise-build-vs-buy" style={{ ...cardStyle, marginTop: 28 }}>
        <h2 style={{ fontSize: 'var(--fs-h3)', marginTop: 0, marginBottom: 8 }}>Build versus buy</h2>
        <p style={pStyle}>Most enterprise estates are a mix. Buy the commodity layers where a vendor already carries the maintenance burden, and build the workflows, data and integrations that make you different. This is the split we usually recommend:</p>
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

      <div id="enterprise-process" style={{ ...cardStyle, marginTop: 28 }}>
        <h2 style={{ fontSize: 'var(--fs-h3)', marginTop: 0, marginBottom: 8 }}>How we work with enterprise teams</h2>
        <ol style={{ margin: 0, paddingLeft: 20, display: 'grid', gap: 10 }}>
          <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7 }}><strong>Discovery with stakeholders:</strong> we map departments, user roles, systems and constraints, and sign a mutual NDA before detailed work.</li>
          <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7 }}><strong>Architecture and fixed quote:</strong> you get a written scope, fixed milestones and a CAD price before code starts.</li>
          <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7 }}><strong>Phased rollout:</strong> we replace or wrap legacy systems in stages instead of a big-bang migration that puts the business at risk.</li>
          <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7 }}><strong>Build in two-week increments:</strong> working software every two weeks, with your operations and security leads reviewing as it develops.</li>
          <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7 }}><strong>Security review and user acceptance testing:</strong> penetration testing, access checks and acceptance against the criteria we agreed.</li>
          <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7 }}><strong>Launch, training and long-term support:</strong> repositories, credentials and runbooks transfer to you, with optional support for releases and the next set of features.</li>
        </ol>
      </div>

      <div id="enterprise-cost" style={{ ...cardStyle, marginTop: 28 }}>
        <h2 style={{ fontSize: 'var(--fs-h3)', marginTop: 0, marginBottom: 8 }}>What affects enterprise software cost</h2>
        <p style={pStyle}>Two systems with the same screen count can differ by several times in cost. The drivers we price in discovery are:</p>
        <ul style={{ margin: 0, paddingLeft: 20, display: 'grid', gap: 10 }}>
          <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7 }}><strong>Number of departments and user roles:</strong> more roles, approval chains and permissions mean more workflow and testing.</li>
          <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7 }}><strong>Integrations with legacy systems:</strong> each ERP, CRM or mainframe connection adds access approvals, mapping and testing.</li>
          <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7 }}><strong>Data migration:</strong> moving records and histories from old systems safely is often its own workstream.</li>
          <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7 }}><strong>Security and compliance evidence:</strong> audit logging, access controls and reporting take design and testing time even when they are not visible to users.</li>
          <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7 }}><strong>Change management and training:</strong> user research, onboarding and champion programmes decide whether the software is actually adopted.</li>
          <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7 }}><strong>Support level:</strong> the monitoring, release cadence and response times you need after launch.</li>
        </ul>
        <p style={{ ...pStyle, marginTop: 16, marginBottom: 0 }}>We quote fixed-scope projects in CAD, so the price is agreed before we write code. The FAQ below covers typical ranges and timelines. For ongoing work after launch, see our <Link href="/services/software-maintenance" style={linkStyle}>software maintenance</Link> service.</p>
      </div>
    </div>
  </section>
);

const extra = (
  <section style={{ padding: 'var(--section-y-sm) 0' }}>
    <div className="cb-container">
      <h2 style={{ fontSize: 'var(--fs-h3)', marginBottom: 8 }}>Related work</h2>
      <ul style={{ margin: '0 0 16px', paddingLeft: 20, display: 'grid', gap: 8 }}>
        <li><Link href="/case-studies/logistics-platform" style={linkStyle}>Logistics platform case study</Link></li>
      </ul>
      <h2 style={{ fontSize: 'var(--fs-h3)', marginBottom: 8 }}>Services for this sector</h2>
      <ul style={{ margin: 0, paddingLeft: 20, display: 'grid', gap: 8 }}>
        <li><Link href="/services/web-development" style={linkStyle}>Web development</Link></li>
        <li><Link href="/services/cloud-devops" style={linkStyle}>Cloud & DevOps</Link></li>
        <li><Link href="/services/saas-development" style={linkStyle}>SaaS development</Link></li>
      </ul>
    </div>
  </section>
);

export default function PageClient() {
  return (
    <IndustryPageTemplate
      slug="enterprise"
      name="Enterprise"
      copy={{ badge: "Enterprise", title: <>Enterprise Software Development That <span style={{ color: 'var(--brand)' }}>Actually Works.</span></>, desc: <>Enterprise software development in Canada — internal tools, workflow automation, ERP and CRM integrations and mission-critical systems for companies with thousands of employees.</> }}
      heroStats={heroStats}
      challenges={challenges}
      solutions={solutions}
      caseStudy={{ client: "EnterpriseX", headline: "8,000 employees onboarded, 60% reduction in manual tasks, $2.1M annual savings", text: "We replaced a patchwork of 14 internal tools with a unified platform \u2014 single sign-on, role-based access, and workflow automation that eliminated thousands of hours of manual work per month.", quote: "We went from 14 disconnected tools to one platform. The productivity gain was immediate and the cost savings exceeded our projections.", cite: "CIO, EnterpriseX" }}
      tech={tech}
      whyUs={whyUs}
      related={related}
      cta={{ title: "Build Your Enterprise System.", sub: "Mission-critical software that scales with your organisation and stands the test of time." }}
      faqs={industryFaqs.enterprise}
      cityLinks={cityLinks}
      buyerContent={buyerContent}
      extra={extra}
    />
  );
}
