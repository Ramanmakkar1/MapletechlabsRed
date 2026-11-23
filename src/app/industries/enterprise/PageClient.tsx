import IndustryPageTemplate from '@/components/page/IndustryPageTemplate';

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
                { name: 'Web Development', href: '/services/web-development', desc: 'Internal tools, admin dashboards and employee portals built for thousands of concurrent users.' },
                { name: 'Cloud & DevOps', href: '/services/cloud-devops', desc: 'Enterprise cloud migrations, Kubernetes orchestration and CI/CD pipelines for large teams.' },
                { name: 'AI & Machine Learning', href: '/services/ai-ml', desc: 'Business intelligence models, process automation and predictive analytics for enterprise data.' },
                { name: 'SaaS Development', href: '/services/saas-development', desc: 'Multi-tenant enterprise platforms with SSO, RBAC and audit-ready compliance tooling.' },
                { name: 'Blockchain Development', href: '/services/blockchain-web3', desc: 'Distributed ledger solutions for supply chain transparency and secure enterprise transactions.' },
              ];

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
    />
  );
}
