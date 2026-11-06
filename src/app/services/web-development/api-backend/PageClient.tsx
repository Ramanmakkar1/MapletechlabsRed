import SubServicePageTemplate from '@/components/page/SubServicePageTemplate';
import Link from 'next/link';

function BuyerContent() {
  return (
    <section className="section-padding-sm" aria-labelledby="api-backend-engagements">
      <div className="cb-container">
        <div className="head">
          <div>
            <h2 id="api-backend-engagements">Choose the API engagement that fits your starting point</h2>
            <p className="lede">Start with what the API has to connect, who will use it and how the surrounding systems are run today. The inputs below are what we need at discovery to agree the contract, priorities and acceptance criteria before implementation begins.</p>
          </div>
        </div>
        <div className="grid grid--3">
          <div className="tile">
            <h3>Build a new product backend</h3>
            <p>Choose this when a new product, portal or mobile app needs its own data model and API behind it. Related work includes <Link href="/services/saas-development">SaaS product development</Link> for multi-tenant platforms.</p>
            <p><strong>Inputs to bring:</strong> user roles, the core workflows, expected traffic, data you already hold, third-party services, target environments and any security or compliance requirements.</p>
            <p><strong>Discovery decisions:</strong> REST or GraphQL, authentication and permissions, data ownership, versioning, environments and the launch scope.</p>
            <p><strong>You receive:</strong> the agreed API contract, a working implementation, documentation, integration tests, deployment notes and a handover session.</p>
          </div>
          <div className="tile">
            <h3>Connect existing systems</h3>
            <p>Choose this when a CRM, ERP, payments provider, data warehouse or other internal system needs to exchange data with your product. For customer-facing connected experiences, see our <Link href="/services/web-development/enterprise-portals">enterprise portal development services</Link>.</p>
            <p><strong>Inputs to bring:</strong> the systems and versions involved, available API documentation or sandbox access, sample payloads, data ownership, rate limits, approval contacts and the environments we can test against.</p>
            <p><strong>Discovery decisions:</strong> sync direction, real-time or scheduled exchange, source of truth, conflict and retry handling, idempotency and how failures are monitored.</p>
            <p><strong>You receive:</strong> the integration contract, mapped fields, a working integration, tests for agreed success and failure cases, deployment notes and a handover session.</p>
          </div>
          <div className="tile">
            <h3>Extend or modernise a legacy API</h3>
            <p>Choose this when an existing API needs new endpoints, narrower clients, better documentation or a path off an unsupported framework. Discovery maps current consumers so the extension can be planned around them.</p>
            <p><strong>Inputs to bring:</strong> repository and environment access, the current contract or documentation, known consumers, test coverage, incident history, dependency versions and hosting constraints.</p>
            <p><strong>Discovery decisions:</strong> wrap, refactor or replace, the compatibility window, versioning and deprecation approach, rollout stages and how to roll back.</p>
            <p><strong>You receive:</strong> an assessment of the current API, the agreed extension or migration scope, updated contracts and docs, integration tests, deployment notes and a handover session.</p>
          </div>
        </div>
        <h2 style={{ marginTop: 'var(--gap)' }}>What is included in the handover</h2>
        <ul>
          <li><strong>API contracts:</strong> the agreed OpenAPI or schema definition, including error and pagination behaviour.</li>
          <li><strong>Documentation:</strong> developer-facing reference plus authentication and integration steps.</li>
          <li><strong>Integration tests:</strong> automated checks for agreed success and failure paths, run against a test environment.</li>
          <li><strong>Deployment notes:</strong> environment variables, infrastructure dependencies, release steps and rollback guidance.</li>
          <li><strong>Handover:</strong> a walkthrough with your team and the open items list, so ownership can move cleanly.</li>
        </ul>
        <p className="lede">The project proof above includes the <Link href="/case-studies/payments-api-platform">PCI DSS payments API case study</Link>; further engagements are on the <Link href="/case-studies">case studies page</Link>.</p>
        <h2 style={{ marginTop: 'var(--gap)' }}>Separate implementation from hosting and maintenance</h2>
        <p className="lede">Our proposal covers the implementation work: discovery, API design, build, security review, testing and deployment preparation. Hosting, managed databases, monitoring, third-party licences and ongoing maintenance are separate running costs, whether you use your own cloud account or ask us to manage them. They depend on the infrastructure you choose, expected traffic and the support level you need.</p>
        <p className="lede">Implementation scope is driven by the number of endpoints and integrations, data migration, authentication and compliance requirements, the condition of the legacy system, the test coverage you expect and how many environments we must support. We confirm those drivers during discovery and quote the agreed scope; this page does not set a fixed price or promise a delivery date.</p>
        <p className="lede"><Link href="/contact?service=web-development">Tell our Web Development team about your API or backend project</Link> and include the systems involved, your target users and any compliance requirements.</p>
      </div>
    </section>
  );
}

const stats = [
  { value: '200+', label: 'APIs Built' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '<100ms', label: 'p95 Latency' },
  { value: 'REST & GraphQL', label: 'Protocol Coverage' },
];

const services = [
  { icon: '🔗', title: 'RESTful API Design', desc: 'We design clean, resource-oriented REST APIs following OpenAPI 3.0 specifications — with consistent error handling, pagination, versioning, and hypermedia links that are intuitive for any developer to integrate.' },
  { icon: '⚡', title: 'GraphQL APIs', desc: 'We build type-safe GraphQL APIs with efficient resolvers, DataLoader for N+1 prevention, persisted queries, real-time subscriptions, and schema-first development with codegen for client type safety.' },
  { icon: '🔐', title: 'Authentication & Authorization', desc: 'Robust auth systems using JWT, OAuth 2.0, and API keys — with role-based and attribute-based access control, token refresh strategies, and seamless integration with identity providers like Auth0 and Cognito.' },
  { icon: '🛡️', title: 'Rate Limiting & Security', desc: 'We implement layered security: rate limiting per user and IP, request validation with Zod/Joi, SQL injection prevention, CORS configuration, HTTPS enforcement, and security headers — protecting your API from abuse and attacks.' },
  { icon: '📖', title: 'API Documentation', desc: 'Auto-generated, interactive API documentation using Swagger UI and Redoc, supplemented with developer guides, authentication walkthroughs, code snippets in multiple languages, and a Postman collection for rapid testing.' },
  { icon: '🏗️', title: 'Microservices Architecture', desc: 'When a monolith is no longer sufficient, we architect and implement microservices with gRPC or REST communication, an API gateway, service mesh, distributed tracing, and centralised logging for operational clarity.' },
];

const steps = [
  { num: '01', title: 'API Design & Contract', desc: 'We define your API contract first — resource models, endpoint design, authentication flows, error codes, and pagination — producing an OpenAPI spec that serves as the single source of truth before any implementation begins.' },
  { num: '02', title: 'Build & Test', desc: 'We implement the API with a test-first approach: unit tests for business logic, integration tests for each endpoint, contract tests for external dependencies, and automated load tests to verify performance under realistic traffic.' },
  { num: '03', title: 'Security Audit', desc: 'Every API goes through a security review covering OWASP API Top 10 vulnerabilities, authentication bypass attempts, rate limit validation, injection testing, and mass assignment checks before any production exposure.' },
  { num: '04', title: 'Production Deploy', desc: 'We deploy with zero-downtime strategies, configure health checks and circuit breakers, set up distributed tracing with OpenTelemetry, and establish SLO-based alerting so you know about degradation before your customers do.' },
];

const faqs = [
  { q: 'REST vs GraphQL — which should we use?', a: 'REST is the right choice for most public APIs, simple CRUD operations, and when working with teams unfamiliar with GraphQL. GraphQL excels when clients have diverse data requirements, mobile apps need to minimise over-fetching, or you\'re building a BFF (Backend for Frontend) layer. Many of our projects use both — a public REST API and an internal GraphQL API for the product frontend.' },
  { q: 'How do you secure APIs against common attacks?', a: 'We implement defence in depth: input validation on every request, parameterised queries to prevent injection, JWT signature verification, CORS whitelisting, rate limiting per user and IP, brute-force protection, security headers (HSTS, CSP), and infrastructure-level WAF rules. All APIs undergo OWASP API Security Top 10 review before launch.' },
  { q: 'Monolith vs microservices — when does each make sense?', a: 'Start with a well-structured monolith — it is faster to build, easier to debug, and simpler to deploy. Migrate to microservices when you have identified specific bottlenecks, need independent scaling of particular domains, or have separate teams that cannot coordinate deployment safely. We actively discourage premature microservices for products under 12 months old.' },
  { q: 'How do you handle API versioning?', a: 'We use URL path versioning (v1, v2) for public APIs due to its explicitness and simplicity. For internal APIs, we use header-based versioning or GraphQL schema evolution with deprecation directives. We maintain deprecated versions for a minimum of 12 months after announcing sunset dates, giving integrators ample migration time.' },
  { q: 'How do you handle API rate limits at scale?', a: 'We implement distributed rate limiting using Redis with sliding window or token bucket algorithms, configurable per API key, user tier, and endpoint. Limits are communicated via standard headers (X-RateLimit-*), breaches return proper 429 responses with Retry-After headers, and we provide higher rate limit tiers for enterprise customers with SLA commitments.' },
  { q: 'How do you quote an API or backend project?', a: 'We quote after a discovery review of the systems involved, the endpoints and integrations you need, data migration, authentication and compliance requirements, and the environments we must support. The proposal covers the implementation work and states its assumptions and exclusions. Hosting, managed databases, monitoring, third-party licences and ongoing maintenance are quoted separately, because they depend on the infrastructure you choose, expected traffic and the support level you need.' },
  { q: 'What access do you need to existing systems?', a: 'We start with API documentation, sandbox or test environments and sample payloads. We also need a named approval contact, the data fields you permit us to use, rate-limit information and any firewall, VPN or vendor-approval steps. Credentials should be issued through your password manager for the agreed environment only; we do not need production access to begin scoping, and access is limited to what the integration requires.' },
  { q: 'What does handover include when the API is finished?', a: 'Handover covers the agreed API contracts, developer documentation, integration tests, deployment notes and a walkthrough with your team. We also list open items and the credentials or accounts you own. Ongoing support, infrastructure management and future changes are separate from the implementation engagement, so you can run the API in-house or agree a maintenance arrangement with us.' },
];

export default function PageClient() {
  return (
    <SubServicePageTemplate
      parent={{ href: "/services/web-development", label: "Web Development" }}
      name="API & Backend Development"
      copy={{ badge: "BACKEND ENGINEERING", title: <>APIs & Backends Built for{' '} <span style={{ color: 'var(--brand)' }}>Performance & Scale</span></>, desc: <>We design and build robust REST and GraphQL APIs with sub-100ms latency, 99.9% uptime, and bulletproof security. From single-purpose microservices to complex distributed backends, we engineer the foundation your product depends on.</> }}
      stats={stats}
      services={services}
      steps={steps}
      faqs={faqs}
      capabilitiesTitle="Complete Backend Engineering Services"
      buyerContent={<BuyerContent />}
    />
  );
}
