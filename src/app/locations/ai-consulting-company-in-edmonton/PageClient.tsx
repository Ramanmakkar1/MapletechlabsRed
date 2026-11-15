import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import CTASection from '@/components/CTASection';

export const FAQS = [
  {
    q: 'What does an AI consulting company in Edmonton do?',
    a: 'An AI consulting company in Edmonton helps you decide where artificial intelligence is genuinely useful, whether your data and systems can support it, and how to implement it safely. Mapletech Labs provides use-case selection, AI readiness assessments, build-versus-buy decisions, privacy and data-residency planning, feasibility testing and a discovery roadmap from our Edmonton headquarters.',
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
    q: 'What deliverables do we get from an AI discovery engagement?',
    a: 'A typical discovery ends with a prioritised use-case shortlist, AI readiness findings, a build-versus-buy recommendation, an architecture and integration outline, an indicative cost and timeline, and a phased delivery roadmap. You can use these outputs internally, evaluate vendors with them, or move into delivery with our AI and machine learning team.',
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
            <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Locations', href: '/locations' }, { label: 'AI Consulting in Edmonton' }]} />
            <h1 style={{ fontSize: 'var(--fs-display)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.04em', lineHeight: 1.05, margin: '24px 0 20px' }}>
              AI consulting company in Edmonton
            </h1>
            <p style={{ ...p, fontSize: 20, lineHeight: 1.65 }}>
              An AI consulting company helps Edmonton businesses decide where AI is worth building, whether their data is ready, and how to implement it without creating privacy or operational risk. Mapletech Labs does that from our Edmonton headquarters: readiness assessments, build-versus-buy decisions, data-residency planning and a discovery roadmap you can act on.
            </p>
            <p style={p}>
              We start with the task you want to improve and the result you need, then define what must be true before you invest in delivery. If the assessment supports implementation, our <A href="/services/ai-consulting">AI consulting team</A> and <A href="/services/ai-ml">AI and machine learning developers</A> can take the plan forward.
            </p>
            <p style={p}><A href="/contact">Book an Edmonton AI discovery call</A>.</p>
          </div>
        </section>

        <section style={{ paddingBottom: 'var(--section-y)' }}>
          <div className="cb-container">
            <h2 style={h2}>AI readiness assessment for Edmonton organisations</h2>
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
            <p style={p}>For model-powered product features, see our <A href="/services/ai-ml/llm-integration">LLM integration services</A>. For repeatable operational tasks, our <A href="/services/ai-ml/ai-automation">AI automation services</A> cover implementation after the workflow and controls are defined.</p>
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
            <h2 style={h2}>What a discovery engagement delivers</h2>
            <p style={p}>A typical AI discovery for an Edmonton client ends with decision-ready outputs rather than a slide deck of possibilities:</p>
            <ul style={{ ...p, paddingLeft: 22 }}>
              <li>A prioritised use-case shortlist scored on value, feasibility and risk.</li>
              <li>AI readiness findings across data, systems, skills and governance.</li>
              <li>A build-versus-buy recommendation with total-cost reasoning.</li>
              <li>An architecture and integration outline, including privacy and residency constraints.</li>
              <li>An indicative cost, timeline and phased delivery roadmap with named owners.</li>
            </ul>
            <p style={p}>You can use these outputs internally, evaluate vendors with them, or move straight into delivery with our team. See how we built an <A href="/case-studies/fintech-trading-platform">AI-powered trading platform</A>, and browse our other <A href="/case-studies">software case studies</A>.</p>
          </div>
        </section>

        <section style={{ paddingBottom: 'var(--section-y)' }}>
          <div className="cb-container" style={{ maxWidth: 900 }}>
            <h2 style={h2}>AI consulting in Edmonton: frequently asked questions</h2>
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
