import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import CTASection from '@/components/CTASection';

export const FAQS = [
  {
    q: 'What does an AI consulting company in Toronto do?',
    a: 'An AI consulting company in Toronto helps you decide where artificial intelligence is genuinely useful, whether your data and systems can support it, and how to implement it safely. Mapletech Labs provides use-case selection, AI readiness assessments, build-versus-buy decisions, privacy and data-residency planning, feasibility testing and a discovery roadmap for Toronto businesses.',
  },
  {
    q: 'How does an AI readiness assessment work?',
    a: 'We start with the task you want to improve, not with a model. The assessment reviews whether the data exists and is usable, how the current process is measured, who will own the system after launch, and what security or regulatory constraints apply. You get a prioritised use-case shortlist and a clear view of the gaps to close before investing in delivery.',
  },
  {
    q: 'Should we build a custom AI solution or buy an existing tool?',
    a: 'Buy or configure an existing product when it already fits your workflow, security and integration needs. Build when your requirements are not covered, you need deeper integration, or the use case depends on your own data and processes. We compare total cost, control, maintenance and lock-in before recommending either path.',
  },
  {
    q: 'How do you handle privacy and data residency for AI projects?',
    a: 'Canadian data residency is our default. We map what personal or sensitive data a use case touches, where it is stored and which vendors process it, then choose hosting and model options that keep data in Canada where required. We also define access controls, retention rules and human approval points before anything goes live.',
  },
  {
    q: 'What does an AI discovery engagement cost in Toronto?',
    a: 'Discovery is a fixed-price, fixed-scope engagement quoted in CAD before work starts, so there is no open-ended hourly billing. The exact fee depends on the number of use cases and systems reviewed. You leave with a prioritised shortlist, readiness findings, a build-versus-buy recommendation and an indicative delivery cost and timeline.',
  },
];

const h2 = { fontSize: 'var(--fs-h3)', fontWeight: 600 as const, color: 'var(--ink)', letterSpacing: '-0.03em', margin: '0 0 16px' };
const h3 = { color: 'var(--ink)', marginTop: 0, fontSize: 18 };
const p = { fontSize: 17, color: 'var(--body)', lineHeight: 1.75, margin: '0 0 16px' };
const card = { padding: 22, border: '1px solid var(--line)', borderRadius: 16 };

function A({ href, children }: { href: string; children: string }) {
  return <Link href={href} style={{ color: 'var(--brand)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>{children}</Link>;
}

export default function PageClient() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <section style={{ paddingTop: 'clamp(100px, 12vw, 140px)', paddingBottom: 'var(--section-y)' }}>
          <div className="cb-container" style={{ maxWidth: 900 }}>
            <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Locations', href: '/locations' }, { label: 'AI Consulting in Toronto' }]} />
            <h1 style={{ fontSize: 'var(--fs-display)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.04em', lineHeight: 1.05, margin: '24px 0 20px' }}>
              AI consulting company in Toronto
            </h1>
            <p style={{ ...p, fontSize: 20, lineHeight: 1.65 }}>
              An AI consulting company helps Toronto businesses decide where AI is worth building, whether their data is ready, and how to implement it without creating privacy or operational risk. Mapletech Labs provides readiness assessments, build-versus-buy decisions, data-residency planning and a fixed-CAD discovery roadmap you can act on.
            </p>
            <p style={p}>
              We start with the task you want to improve and the result you need, then define what must be true before you invest in delivery. If the assessment supports implementation, our <A href="/services/ai-consulting">AI consulting team</A> and <A href="/services/ai-ml">AI and machine learning developers</A> can take the plan forward, including a local <A href="/locations/ai-development-company-in-toronto">AI development company in Toronto</A> page for build scoping.
            </p>
            <p style={p}><A href="/contact">Book a Toronto AI discovery call</A>.</p>
          </div>
        </section>

        <section style={{ paddingBottom: 'var(--section-y)' }}>
          <div className="cb-container">
            <h2 style={h2}>AI use cases for Toronto fintech, health, SaaS and public-sector teams</h2>
            <p style={p}>Toronto&rsquo;s economy concentrates financial services, healthcare, software and public-sector organisations, and each brings different constraints. We scope AI around the work your staff already do rather than a generic demo.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
              <article style={card}>
                <h3 style={h3}>Fintech and banking</h3>
                <p style={{ ...p, marginBottom: 0 }}>Document review, fraud-alert triage, customer support with human handoff, and analyst summaries. Work is designed around OSFI model-risk expectations, audit logs and human approval for high-impact decisions.</p>
              </article>
              <article style={card}>
                <h3 style={h3}>Healthcare and life sciences</h3>
                <p style={{ ...p, marginBottom: 0 }}>Intake summarisation, referral triage and knowledge search, planned around Ontario&rsquo;s PHIPA and PIPEDA. Sensitive data can stay in Canadian cloud regions with role-based access and retention rules.</p>
              </article>
              <article style={card}>
                <h3 style={h3}>SaaS and product teams</h3>
                <p style={{ ...p, marginBottom: 0 }}>AI features inside an existing product, retrieval over customer content, and evaluation and fallback behaviour before launch. We help decide what to build versus what an existing model API already covers.</p>
              </article>
              <article style={card}>
                <h3 style={h3}>Public sector and agencies</h3>
                <p style={{ ...p, marginBottom: 0 }}>Knowledge search across policy documents, case-triage support and staff productivity tools, with accessibility, procurement and records-retention requirements defined up front.</p>
              </article>
            </div>
          </div>
        </section>

        <section style={{ paddingBottom: 'var(--section-y)' }}>
          <div className="cb-container">
            <h2 style={h2}>AI readiness assessment for Toronto organisations</h2>
            <p style={p}>A useful assessment begins with the work your team already does, not with a particular model. We examine the candidate task, the data available to support it, and the constraints that decide whether it can run in production.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
              <article style={card}>
                <h3 style={h3}>Use-case fit</h3>
                <p style={{ ...p, marginBottom: 0 }}>We clarify the user, task, current process and desired outcome. Each candidate is reviewed for business value, frequency, risk and measurable acceptance criteria so you can prioritise a practical first scope.</p>
              </article>
              <article style={card}>
                <h3 style={h3}>Data readiness</h3>
                <p style={{ ...p, marginBottom: 0 }}>We review data sources, quality, coverage, formats, access permissions and retention. The assessment names gaps such as missing labels, inconsistent records or personal information that must be handled before reliable outputs are possible.</p>
              </article>
              <article style={card}>
                <h3 style={h3}>Operational readiness</h3>
                <p style={{ ...p, marginBottom: 0 }}>We identify who owns the system after launch, how exceptions are handled, what human approval is needed, and how quality will be monitored once the pilot ends.</p>
              </article>
            </div>
          </div>
        </section>

        <section style={{ paddingBottom: 'var(--section-y)' }}>
          <div className="cb-container">
            <h2 style={h2}>Build versus buy: which AI path fits?</h2>
            <p style={p}>The right choice depends on your workflow, control requirements, integrations and ongoing ownership. Compare the whole operating cost and constraints, not only the initial subscription or development estimate.</p>
            <div role="region" aria-label="Build versus buy comparison" tabIndex={0} style={{ overflowX: 'auto', maxWidth: '100%', marginBottom: 24 }}>
              <table style={{ width: '100%', minWidth: 680, borderCollapse: 'collapse', textAlign: 'left' }}>
                <caption style={{ textAlign: 'left', paddingBottom: 12 }}>Common AI implementation options and what to evaluate</caption>
                <thead>
                  <tr>{['Option', 'When it can fit', 'What to check'].map(label => <th key={label} scope="col" style={{ padding: 14, borderBottom: '2px solid var(--line)' }}>{label}</th>)}</tr>
                </thead>
                <tbody>
                  {[
                    ['Buy or configure a product', 'An existing product covers the workflow and required controls.', 'Data handling, configuration limits, integrations, exports and total subscription cost.'],
                    ['Integrate an AI model', 'Your product needs AI inside an established user experience or workflow.', 'Model quality, latency, usage costs, guardrails, evaluation and fallback behaviour.'],
                    ['Build a custom AI solution', 'Your data, process or integration needs are not covered by available products.', 'Data preparation, development effort, infrastructure, monitoring and long-term maintenance.'],
                  ].map(([option, fit, check]) => (
                    <tr key={option}>
                      <th scope="row" style={{ padding: 14, borderBottom: '1px solid var(--line)' }}>{option}</th>
                      <td style={{ padding: 14, borderBottom: '1px solid var(--line)' }}>{fit}</td>
                      <td style={{ padding: 14, borderBottom: '1px solid var(--line)' }}>{check}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={p}>For model-powered product features, see our <A href="/services/ai-ml">AI and machine learning services</A>. For repeatable operational tasks, our AI automation work covers implementation after the workflow and controls are defined.</p>
          </div>
        </section>

        <section style={{ paddingBottom: 'var(--section-y)' }}>
          <div className="cb-container" style={{ maxWidth: 900 }}>
            <h2 style={h2}>Privacy, security and Canadian data residency</h2>
            <p style={p}>AI projects often touch customer records, documents or operational data. We plan for that before choosing a model or vendor, with Canadian data residency as the default.</p>
            <ul style={{ ...p, paddingLeft: 22 }}>
              <li><strong>Data mapping:</strong> identify what personal or sensitive information a use case touches, where it lives and which vendors process it.</li>
              <li><strong>Residency:</strong> prefer Canadian hosting and model options where data must stay in Canada, and document any cross-border processing.</li>
              <li><strong>Access and retention:</strong> define who can see data, how long it is kept and how it is deleted.</li>
              <li><strong>Human oversight:</strong> set approval points and fallback behaviour for high-impact decisions.</li>
            </ul>
            <p style={p}>Your IP and code are protected under Canadian law, and everything we build for you is yours to keep.</p>
          </div>
        </section>

        <section style={{ paddingBottom: 'var(--section-y)' }}>
          <div className="cb-container" style={{ maxWidth: 900 }}>
            <h2 style={h2}>Fixed-CAD discovery process for Toronto AI projects</h2>
            <p style={p}>Discovery is a fixed-price, fixed-scope engagement agreed in CAD before work starts, so you can evaluate AI without an open-ended hourly commitment.</p>
            <ol style={{ ...p, paddingLeft: 22 }}>
              <li><strong>Free scoping call:</strong> we discuss the task, the outcome and the constraints, and confirm whether a short discovery is worth doing.</li>
              <li><strong>Fixed proposal:</strong> you receive the scope, deliverables, timeline and one fixed CAD fee, with no hourly surprises.</li>
              <li><strong>Assessment:</strong> we review use-case fit, data readiness, privacy, integrations and operational ownership.</li>
              <li><strong>Decision pack:</strong> you get a prioritised shortlist, build-versus-buy recommendation, architecture outline and indicative delivery cost and timeline.</li>
              <li><strong>Optional build:</strong> if the case is sound, our <A href="/services/ai-ml">AI development team</A> can deliver it; you are free to take the plan elsewhere.</li>
            </ol>
            <p style={p}>We work from our Edmonton headquarters with overlap across the Toronto working day, and travel to Toronto for workshops when a milestone needs one, agreed up front.</p>
          </div>
        </section>

        <section style={{ paddingBottom: 'var(--section-y)' }}>
          <div className="cb-container" style={{ maxWidth: 900 }}>
            <h2 style={h2}>Proof: fintech and telehealth systems we have shipped</h2>
            <p style={p}>Our AI and software work is already in production for regulated Canadian organisations:</p>
            <ul style={{ ...p, paddingLeft: 22 }}>
              <li><A href="/case-studies/fintech-trading-platform">Fintech trading platform</A>: an AI-powered trading platform processing 50K+ transactions daily with 99.99% uptime for a leading Canadian fintech.</li>
              <li><A href="/case-studies/payments-api-platform">Payments API platform</A>: a PCI DSS certified payments API processing 12 million transactions a month.</li>
              <li><A href="/case-studies/healthcare-telehealth">Telehealth platform</A>: a HIPAA-compliant telehealth platform serving 200K+ patient sessions with 99.97% uptime for a leading Canadian healthcare provider.</li>
            </ul>
            <p style={p}>Browse more <A href="/case-studies">software case studies</A> or see how we scope local builds on our <A href="/locations/ai-development-company-in-toronto">AI development company in Toronto</A> page.</p>
          </div>
        </section>

        <section style={{ paddingBottom: 'var(--section-y)' }}>
          <div className="cb-container" style={{ maxWidth: 900 }}>
            <h2 style={h2}>AI consulting in Toronto: frequently asked questions</h2>
            <div style={{ display: 'grid', gap: 16, marginTop: 8 }}>
              {FAQS.map((faq) => (
                <article key={faq.q} style={card}>
                  <h3 style={h3}>{faq.q}</h3>
                  <p style={{ ...p, marginBottom: 0 }}>{faq.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <CTASection />
      <Footer />
    </>
  );
}
