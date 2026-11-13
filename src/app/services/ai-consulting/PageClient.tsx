import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import CTASection from '@/components/CTASection';

export const FAQS = [
  {
    q: 'What does an AI consultant do?',
    a: 'An AI consultant helps you identify useful AI applications, assess your data and systems, compare build-versus-buy options and plan implementation. The goal is a practical decision and delivery roadmap, not a recommendation to use AI where it does not fit.',
  },
  {
    q: 'How do I know if my business is ready for AI?',
    a: 'Start with a specific business task, a way to measure its current performance and access to representative data. Readiness also depends on data quality, permission to use the data, system access, security requirements and someone who can own the process after launch.',
  },
  {
    q: 'Should we build a custom AI solution or buy an existing tool?',
    a: 'Buy or configure an existing tool when it meets your workflow, security and integration needs. Build when your requirements are not covered, you need deeper integration or the use case depends on your own data and processes. Compare total cost, control and maintenance before deciding.',
  },
  {
    q: 'What happens after an AI consulting engagement?',
    a: 'You receive agreed decision-making outputs, such as a prioritised use-case shortlist, data-readiness findings, a feasibility assessment and an implementation roadmap. You can use these to plan an internal project, evaluate products or move into delivery with a development team.',
  },
  {
    q: 'What should I ask an AI consultant before hiring them?',
    a: 'Ask how they will test the use case, what data they need, how they will measure quality, what build-versus-buy trade-offs they see, and which integration and security risks could change the plan. Also ask what you will receive and who owns the resulting work.',
  },
  {
    q: 'Do you work with businesses in Edmonton, Calgary, Toronto and Vancouver?',
    a: 'Yes. We are based in Edmonton, Alberta, and work with clients across Canada — Edmonton, Calgary, Toronto, Vancouver and beyond — remotely or on site for discovery and launch.',
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
            <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'AI Consulting' }]} />
            <h1 style={{ fontSize: 'var(--fs-display)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.04em', lineHeight: 1.05, margin: '24px 0 20px' }}>
              AI consulting services in Canada
            </h1>
            <p style={{ ...p, fontSize: 20, lineHeight: 1.65 }}>
              An AI consultant helps your business decide where artificial intelligence is useful, whether your data and systems can support it, and how to implement it safely. This includes use-case selection, data-readiness assessment, build-versus-buy decisions, feasibility testing and integration planning.
            </p>
            <p style={p}>
              Mapletech Labs provides AI consulting from our Edmonton base for businesses across Canada. We start with the task you want to improve and the result you need, then define what must be true before you invest in delivery. If the assessment supports implementation, our <A href="/services/ai-ml">AI and machine learning development team</A> can take the plan forward.
            </p>
            <p style={p}><A href="/contact">Discuss your AI goals and constraints with us</A>.</p>
          </div>
        </section>

        <section style={{ paddingBottom: 'var(--section-y)' }}>
          <div className="cb-container">
            <h2 style={h2}>Which AI use cases and data should you assess?</h2>
            <p style={p}>A useful assessment begins with the work your team already does, not with a particular model. We examine the candidate task and the information available to support it.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
              <article style={card}>
                <h3 style={h3}>Which use cases are worth pursuing?</h3>
                <p style={{ ...p, marginBottom: 0 }}>We clarify the user, task, current process and desired outcome. Each candidate use case is reviewed for business value, frequency, risk and measurable acceptance criteria so you can prioritise a practical first scope.</p>
              </article>
              <article style={card}>
                <h3 style={h3}>Is your data ready for AI?</h3>
                <p style={{ ...p, marginBottom: 0 }}>We review data sources, quality, coverage, formats, access permissions and retention requirements. The assessment identifies gaps such as missing labels, inconsistent records, restricted personal information or documents that need cleanup before they can support reliable outputs.</p>
              </article>
            </div>
          </div>
        </section>

        <section style={{ paddingBottom: 'var(--section-y)' }}>
          <div className="cb-container">
            <h2 style={h2}>Should you build or buy an AI solution?</h2>
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
            <h2 style={h2}>How do you test AI feasibility and plan integration?</h2>
            <p style={p}>Feasibility testing checks whether the proposed approach can meet agreed criteria using representative examples. Integration planning then establishes how the AI capability will fit your people, products and operational controls.</p>
            <ul style={{ ...p, paddingLeft: 22 }}>
              <li><strong>Evaluation:</strong> define test cases, reference answers where appropriate, quality thresholds and cases where the system should decline or escalate.</li>
              <li><strong>Technical fit:</strong> review source systems, APIs, authentication, data flows, hosting constraints and expected usage.</li>
              <li><strong>Risk and security:</strong> identify sensitive data, access boundaries, human approval points and fallback behaviour.</li>
              <li><strong>Delivery plan:</strong> sequence the work, name dependencies and assign ownership for monitoring, exceptions and future improvements.</li>
            </ul>
          </div>
        </section>

        <section style={{ paddingBottom: 'var(--section-y)' }}>
          <div className="cb-container" style={{ maxWidth: 900 }}>
            <h2 style={h2}>What are the steps in an AI consulting engagement?</h2>
            <ol style={{ ...p, paddingLeft: 24 }}>
              <li><strong>Define the decision.</strong> We agree the business problem, stakeholders, constraints and questions the engagement must answer.</li>
              <li><strong>Assess use cases and data.</strong> We review candidate tasks, representative information, current systems and the measures that matter.</li>
              <li><strong>Compare options and test feasibility.</strong> We evaluate build-versus-buy paths and test the important technical uncertainties where needed.</li>
              <li><strong>Document the roadmap.</strong> We set out the recommended scope, integrations, risks, decision points and next steps agreed for your project.</li>
            </ol>
            <p style={p}>When the product requirements also need definition, a <A href="/services/software-discovery">software discovery sprint</A> can turn the findings into user flows, requirements and a phased delivery scope.</p>
          </div>
        </section>

        <section style={{ paddingBottom: 'var(--section-y)' }}>
          <div className="cb-container" style={{ maxWidth: 900 }}>
            <h2 style={h2}>What questions should buyers ask an AI consultant?</h2>
            <ul style={{ ...p, paddingLeft: 22 }}>
              <li>Which use case would you test first, and which business measure will show whether it works?</li>
              <li>What representative data do you need, and how will you handle missing, poor-quality or sensitive data?</li>
              <li>How will you compare buying a product, integrating a model and building a custom solution?</li>
              <li>How will output quality be evaluated, including incorrect answers, edge cases and human review?</li>
              <li>Which systems must integrate, and which security, privacy or operational constraints could change the approach?</li>
              <li>What deliverables will we receive, who owns them and what ongoing monitoring or maintenance will be required?</li>
            </ul>
            <p style={p}>Bring these questions to an initial conversation so the proposal addresses a decision you need to make rather than a generic AI demonstration. <A href="/contact">Contact Mapletech Labs to scope an AI consultation</A>.</p>
          </div>
        </section>

        <section style={{ paddingBottom: 'var(--section-y)' }}>
          <div className="cb-container">
            <h2 style={h2}>AI consulting FAQ</h2>
            <div style={{ display: 'grid', gap: 16 }}>
              {FAQS.map(faq => (
                <article key={faq.q} style={card}>
                  <h3 style={h3}>{faq.q}</h3>
                  <p style={{ ...p, marginBottom: 0 }}>{faq.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
