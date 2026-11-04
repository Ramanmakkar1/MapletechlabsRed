import type { Faq } from '@/data/faqs';
import { PROJECT_PRICING } from '@/data/pricing';

const { webapp, saas, mobile, website } = PROJECT_PRICING;

export const industryFaqs: Record<
  'fintech' | 'healthcare' | 'ecommerce' | 'enterprise' | 'edtech' | 'logistics',
  Faq[]
> = {
  fintech: [
    {
      q: 'How much does FinTech software development cost in Canada?',
      a: `We quote fixed-scope projects in CAD. A FinTech web application usually sits in our published web app range of $${webapp.low.toLocaleString('en-CA')} to $${webapp.high.toLocaleString('en-CA')}, while a SaaS MVP with billing and auth is often $${saas.low.toLocaleString('en-CA')} to $${saas.high.toLocaleString('en-CA')}. KYC, payments and audit logging add scope. You know the price before we write code.`,
    },
    {
      q: 'How long does a FinTech MVP take to build?',
      a: 'A focused MVP typically takes 8–12 weeks once discovery and regulatory scope are agreed. Every project starts with a scoping session where we give you a precise timeline with fixed milestones. Larger trading or core-banking integrations often need 16–24 weeks; we tell you upfront which timeline fits your release plan.',
    },
    {
      q: 'How do you handle Canadian FinTech compliance?',
      a: 'We architect for PCI DSS card-data controls, FINTRAC AML and KYC workflows, and OSFI expectations where they apply to your product. Our cloud and DevOps work includes encryption, key management, audit trails and least-privilege access from day one. We coordinate with your legal and compliance partners so auditors see evidence, not last-minute patches.',
    },
    {
      q: 'Will you sign an NDA, and who owns the code?',
      a: 'Yes. We sign mutual NDAs before detailed discovery and an IP assignment on day one. You own 100% of the source code and intellectual property on final payment — repositories, credentials and runbooks transfer to you. We retain no license on your trading, wallet or payments systems.',
    },
    {
      q: 'Do you work with FinTech companies in Edmonton, Calgary, Toronto and Vancouver?',
      a: 'Yes. We build for FinTech teams in Edmonton, Calgary, Toronto and Vancouver — workshops on site when useful, delivery remote the rest of the time. Our mobile app development group ships secure banking and wallet apps for Alberta and Ontario founders; we align on compliance reviews, time zones and release cadence from kickoff.',
    },
  ],
  healthcare: [
    {
      q: 'How much does healthcare software development cost in Canada?',
      a: `Fixed-price CAD quotes after scoping. Patient portals and provider web tools often fall in our web app range of $${webapp.low.toLocaleString('en-CA')} to $${webapp.high.toLocaleString('en-CA')}; telehealth and patient mobile apps typically align with our mobile app range of $${mobile.low.toLocaleString('en-CA')} to $${mobile.high.toLocaleString('en-CA')}. HL7 FHIR integrations and audit logging affect scope. No hourly billing surprises.`,
    },
    {
      q: 'How long does a healthcare platform MVP take?',
      a: 'A focused MVP typically takes 8–12 weeks after discovery, with fixed milestones in the statement of work. Telehealth with video, scheduling and a single EHR integration may need the full window; broader clinical modules often extend toward 16–24 weeks. We map dependencies early so your go-live date is realistic.',
    },
    {
      q: 'How do you meet Canadian healthcare privacy rules?',
      a: 'We build to PIPEDA nationally, PHIPA in Ontario, and HIA in Alberta, with Canadian data hosting when your policy requires it. PHI encryption, role-based access, audit logs and breach-ready documentation are standard. Our cloud and DevOps practice configures HIPAA-ready AWS or Azure environments with monitoring your privacy officer can review.',
    },
    {
      q: 'Will you sign an NDA and a BAA, and who owns the code?',
      a: 'Yes. We sign mutual NDAs, business associate agreements when PHI is involved, and IP assignment on day one. You own all source code and IP on final payment. We transfer repos and credentials; nothing stays on our servers without your written approval.',
    },
    {
      q: 'Do you work with healthcare companies in Edmonton, Calgary, Toronto and Vancouver?',
      a: 'Yes. We support hospitals, clinics and health-tech vendors in Edmonton, Calgary, Toronto and Vancouver. Our web development team delivers patient portals and clinician dashboards; mobile app development covers telehealth and engagement tools. We schedule around clinical stakeholders and provincial privacy reviews.',
    },
    {
      q: 'What should we prepare before requesting a healthcare software quote?',
      a: 'Bring the user roles (clinicians, admin staff, patients, caregivers), the systems you use today, whether your EHR or scheduling vendor offers sandbox API access, rough migration volumes, hosting and data residency expectations, the accessibility standard you follow and who will support the product after launch. We confirm each item in discovery and reflect it in the fixed quote.',
    },
    {
      q: 'Who arranges EHR vendor API access for an integration project?',
      a: 'Your organisation usually requests sandbox and production access from the EHR vendor, because the agreement is between you and them. We prepare the technical request, join vendor calls, build against the sandbox and agree the read and write-back flows and acceptance tests before production credentials are issued.',
    },
  ],
  ecommerce: [
    {
      q: 'How much does e-commerce platform development cost in Canada?',
      a: `We quote fixed CAD prices after discovery. Marketing sites and WooCommerce builds often map to our website range of $${website.low.toLocaleString('en-CA')} to $${website.high.toLocaleString('en-CA')}; headless storefronts and custom checkout usually sit in our web app range of $${webapp.low.toLocaleString('en-CA')} to $${webapp.high.toLocaleString('en-CA')}. Payments, ERP feeds and personalisation add scope. You approve the number before build starts.`,
    },
    {
      q: 'How long does an e-commerce MVP take to launch?',
      a: 'A focused MVP typically takes 8–12 weeks once catalog scope, payments and fulfilment flows are defined. Every project starts with a scoping session where we give you a precise timeline with fixed milestones. Peak-season hardening or multi-warehouse logic may push toward 16–24 weeks; we flag that during discovery, not mid-sprint.',
    },
    {
      q: 'Shopify, custom headless, payments and CASL — what do you recommend?',
      a: 'Shopify or WooCommerce fits many Canadian retailers; we extend them through our WordPress and CMS practice when speed to market matters. Custom headless builds earn their cost at high traffic or complex B2B rules. We integrate Stripe and Canadian payment methods, and we design email and SMS flows to respect CASL consent and unsubscribe rules.',
    },
    {
      q: 'Will you sign an NDA, and who owns the storefront code?',
      a: 'Yes. NDAs and IP assignment are signed before we access your catalog or customer data. You own 100% of custom theme, API and integration code on final payment. Third-party platform licenses stay with Shopify or your vendor; everything we write transfers to you.',
    },
    {
      q: 'Do you work with e-commerce companies in Edmonton, Calgary, Toronto and Vancouver?',
      a: 'Yes. We help retailers and D2C brands in Edmonton, Calgary, Toronto and Vancouver launch and scale. Our web development team builds headless storefronts; digital marketing support covers SEO and paid campaigns that feed the same conversion goals. Remote delivery is standard; on-site launch support is available for major go-lives.',
    },
  ],
  enterprise: [
    {
      q: 'How much does enterprise software development cost in Canada?',
      a: `Enterprise internal tools and portals are scoped fixed-price in CAD. Departmental web apps often start in our published web app range of $${webapp.low.toLocaleString('en-CA')} to $${webapp.high.toLocaleString('en-CA')}; multi-system SaaS platforms align with our SaaS MVP range of $${saas.low.toLocaleString('en-CA')} to $${saas.high.toLocaleString('en-CA')}. SSO, ERP connectors and legacy migration add effort. We agree on price before development.`,
    },
    {
      q: 'How long does an enterprise MVP or pilot take?',
      a: 'A focused MVP typically takes 8–12 weeks for a single workflow or business unit pilot. Every project starts with a scoping session where we give you a precise timeline with fixed milestones. Organisation-wide rollouts with SSO and ERP integration commonly run 16–24 weeks or longer; we phase delivery so you see value before the full cutover.',
    },
    {
      q: 'Can you integrate SSO, ERP, CRM and legacy systems?',
      a: 'Yes. We implement SAML and OIDC single sign-on, connect SAP, Oracle, Microsoft Dynamics and Salesforce through our SaaS development integrations, and wrap legacy APIs behind modern services. Data migration is staged with rollback plans so operations keep running while you retire old tools.',
    },
    {
      q: 'Will you sign an NDA, and who owns the code?',
      a: 'Yes. Enterprise engagements start with mutual NDAs and security questionnaires. You own 100% of deliverables on final payment, including infrastructure-as-code and documentation. We sign IP assignment on day one and follow your vendor onboarding process for access controls.',
    },
    {
      q: 'Do you work with enterprise teams in Edmonton, Calgary, Toronto and Vancouver?',
      a: 'Yes. We support IT and digital teams in Edmonton, Calgary, Toronto and Vancouver on internal platforms and automation. Cloud and DevOps engineers handle Azure or AWS landing zones; web development delivers admin portals employees actually use. We work in your change windows and security review cycles.',
    },
  ],
  edtech: [
    {
      q: 'How much does EdTech software development cost in Canada?',
      a: `We quote fixed CAD scopes after discovery. LMS and learning portals often fit our SaaS MVP range of $${saas.low.toLocaleString('en-CA')} to $${saas.high.toLocaleString('en-CA')}; native student apps align with our mobile app range of $${mobile.low.toLocaleString('en-CA')} to $${mobile.high.toLocaleString('en-CA')}. Video, proctoring and SIS integrations move the number. You approve the estimate before build.`,
    },
    {
      q: 'How long does an EdTech MVP take to build?',
      a: 'A focused MVP typically takes 8–12 weeks once curriculum flows and roles are defined. Every project starts with a scoping session where we give you a precise timeline with fixed milestones. Platforms with live classes, offline mobile and multiple integrations may extend toward 16–24 weeks; we show a phased roadmap during discovery.',
    },
    {
      q: 'How do you handle accessibility and student privacy in Canada?',
      a: 'Interfaces are built to WCAG 2.1 AA and Ontario AODA expectations, with keyboard navigation, captions and readable contrast tested before launch. Student data follows PIPEDA and provincial school privacy rules, with consent flows and retention policies documented. Our product design team validates flows with accessibility checklists early, not after launch.',
    },
    {
      q: 'Will you sign an NDA, and who owns the platform code?',
      a: 'Yes. We sign NDAs before reviewing your content or learner data and assign IP on day one. You own 100% of custom code, course logic and integrations on final payment. We hand over repositories and deployment pipelines so your institution or investors can audit the stack.',
    },
    {
      q: 'Do you work with EdTech companies in Edmonton, Calgary, Toronto and Vancouver?',
      a: 'Yes. We partner with schools, publishers and startups in Edmonton, Calgary, Toronto and Vancouver. SaaS development covers multi-tenant LMS billing; mobile app development ships offline-capable learner apps. We align releases with academic terms and procurement cycles across provinces.',
    },
  ],
  logistics: [
    {
      q: 'How much does logistics software development cost in Canada?',
      a: `Fleet and warehouse platforms are fixed-price in CAD after scoping. Dispatcher web consoles often sit in our web app range of $${webapp.low.toLocaleString('en-CA')} to $${webapp.high.toLocaleString('en-CA')}; driver mobile apps with GPS and offline sync align with our mobile app range of $${mobile.low.toLocaleString('en-CA')} to $${mobile.high.toLocaleString('en-CA')}. IoT feeds and ELD integrations add scope. Price is locked before development.`,
    },
    {
      q: 'How long does a logistics MVP take to deploy?',
      a: 'A focused MVP typically takes 8–12 weeks for dispatch, tracking and a driver app in one region. Every project starts with a scoping session where we give you a precise timeline with fixed milestones. Nationwide rollouts with ELD compliance and warehouse modules often need 16–24 weeks; we pilot one depot first when you need proof quickly.',
    },
    {
      q: 'Do you build offline driver apps, GPS tracking and ELD integrations?',
      a: 'Yes. Our mobile app development team builds offline-first driver apps that sync deliveries when connectivity returns. Real-time GPS and IoT telematics feed dispatch dashboards; we integrate Canadian ELD providers and fleet APIs your compliance team already uses. Route data is encrypted in transit and at rest.',
    },
    {
      q: 'Will you sign an NDA, and who owns the logistics platform?',
      a: 'Yes. NDAs cover carrier rates, routes and customer lists before we access your data. You own 100% of source code and IP on final payment, including mobile apps and integration layers. We transfer credentials and documentation; no hidden SaaS lock-in from our side.',
    },
    {
      q: 'Do you work with logistics companies in Edmonton, Calgary, Toronto and Vancouver?',
      a: 'Yes. We build for carriers, 3PLs and shippers in Edmonton, Calgary, Toronto and Vancouver. AI and machine learning features support route optimisation and demand forecasting on the same platforms. Field testing happens in your lanes and yards; remote stand-ups keep Alberta and BC ops aligned.',
    },
  ],
};
