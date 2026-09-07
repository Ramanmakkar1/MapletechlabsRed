import SubServicePageTemplate from '@/components/page/SubServicePageTemplate';

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
    />
  );
}
