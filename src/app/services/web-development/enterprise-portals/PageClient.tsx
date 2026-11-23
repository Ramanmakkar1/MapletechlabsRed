import SubServicePageTemplate from '@/components/page/SubServicePageTemplate';

const stats = [
  { value: '40+', label: 'Enterprise Portals' },
  { value: '10,000+', label: 'Daily Active Users' },
  { value: 'SSO/LDAP', label: 'Integration Ready' },
  { value: 'SOC2', label: 'Compliant Builds' },
];

const services = [
  { icon: '🔑', title: 'Role-Based Access Control', desc: 'We design granular RBAC systems with hierarchical roles, permission inheritance, and dynamic policy evaluation — ensuring every user sees exactly what they should, and nothing more, across every module of the portal.' },
  { icon: '🔐', title: 'SSO & LDAP Integration', desc: 'Seamless integration with your existing identity infrastructure — Active Directory, Azure AD, Okta, Ping Identity, and any SAML 2.0 or OIDC-compatible provider — giving employees a single sign-on experience across all corporate systems.' },
  { icon: '⚙️', title: 'Workflow Automation', desc: 'We build configurable approval workflows, notification chains, escalation rules, and task routing engines that digitise manual business processes — reducing processing times from days to minutes and eliminating paper-based bottlenecks.' },
  { icon: '📊', title: 'Data Dashboards & Reporting', desc: 'Executive and operational dashboards with real-time data visualisations, scheduled reports, custom KPI tracking, and drill-down analytics — built with tools like Recharts, Nivo, or embedded BI solutions like Metabase.' },
  { icon: '📁', title: 'Document Management', desc: 'Secure document storage with version control, access-controlled sharing, full-text search, approval workflows, and automated retention policies — integrated with SharePoint, Box, or a custom document store as required.' },
  { icon: '📋', title: 'Audit Logging & Compliance', desc: 'Immutable, tamper-evident audit logs capturing every user action, data access event, and system change — with compliance reporting for SOC2, ISO 27001, HIPAA, and GDPR requirements built in from day one.' },
];

const steps = [
  { num: '01', title: 'Requirements Gathering', desc: 'We run structured discovery with key stakeholders across IT, compliance, and business units to document functional requirements, integration needs, security policies, and success metrics before any design work begins.' },
  { num: '02', title: 'Architecture', desc: 'We design the system architecture covering identity integration, data model, permission structure, integration points with legacy systems, infrastructure topology, and disaster recovery strategy — fully documented and reviewed.' },
  { num: '03', title: 'Phased Build', desc: 'We build in phases aligned to your business priorities — typically core authentication and primary workflows first, then reporting and advanced features — delivering usable increments every 2–3 weeks for stakeholder validation.' },
  { num: '04', title: 'Rollout & Training', desc: 'We manage a controlled rollout with pilot user groups, monitor adoption metrics, provide admin and end-user training documentation, and offer hypercare support for the first 30 days post-launch.' },
];

const faqs = [
  { q: 'How do you handle legacy system integration?', a: 'We begin with a legacy system audit to understand available integration points — REST APIs, SOAP web services, direct database access, flat-file exports, or screen scraping as a last resort. We build adapter layers and transformation services that normalise data from legacy systems without requiring changes to the legacy system itself, protecting existing business continuity.' },
  { q: 'Can you integrate SSO with our existing identity provider?', a: 'Yes. We integrate with any SAML 2.0 or OIDC-compatible identity provider — including Active Directory Federation Services, Azure AD/Entra ID, Okta, Ping Identity, and Google Workspace. For environments without a modern IdP, we can configure LDAP-based authentication with the portal acting as the SSO-enabled front door.' },
  { q: 'How do you ensure compliance with regulations like SOC2 or HIPAA?', a: 'We design compliance in from the start rather than bolting it on. This includes encrypted data at rest and in transit, immutable audit logging, role-based access with least-privilege principles, session management controls, automated data retention and purge policies, and penetration testing before go-live. We produce compliance documentation artefacts to support your audit processes.' },
  { q: 'On-premise or cloud deployment — which do you support?', a: 'Both. We build cloud-native deployments on AWS, Azure, or GCP using containerised workloads with Kubernetes for scalability and resilience. For organisations with data sovereignty requirements or existing on-premise infrastructure, we support deployment to private cloud or on-premise Kubernetes clusters with the same architecture.' },
  { q: 'How do you handle change management for a new enterprise portal?', a: 'Change management is built into our delivery process. We involve business stakeholders throughout via regular demos and feedback sessions, run a controlled pilot with power users before broad rollout, provide role-specific training materials and video walkthroughs, and establish a feedback channel for the first 60 days. Adoption metrics are tracked and reported to leadership throughout.' },
];

export default function PageClient() {
  return (
    <SubServicePageTemplate
      parent={{ href: "/services/web-development", label: "Web Development" }}
      name="Enterprise Portal Development"
      copy={{ badge: "ENTERPRISE SOFTWARE", title: <>Enterprise Portals Built for{' '} <span style={{ color: 'var(--brand)' }}>Security & Scale</span></>, desc: <>We build secure, compliant enterprise portals that integrate with your existing identity infrastructure, automate complex workflows, and give thousands of users a modern, intuitive experience — with the audit trails and access controls your organisation demands.</> }}
      stats={stats}
      services={services}
      steps={steps}
      faqs={faqs}
      capabilitiesTitle="Enterprise-Grade Capabilities"
    />
  );
}
