import SubServicePageTemplate from '@/components/page/SubServicePageTemplate';

const stats = [
  { value: '500+', label: 'Projects Delivered' },
  { value: '25+', label: 'Engineers & Designers' },
  { value: '2018', label: 'Founded in Edmonton' },
  { value: '24/7', label: 'Agent Availability' },
];

const services = [
  { icon: '🔌', title: 'Tool & API Calling Agents', desc: 'Agents that choose the right tool, call your APIs with validated inputs, and handle errors and retries instead of guessing. Every integration is documented and tested against real data.' },
  { icon: '🔁', title: 'Multi-Step Workflow Agents', desc: 'Agents that work across CRM, ticketing and ERP systems to complete a sequence of steps: look up a record, update a status, notify the right person and log the outcome.' },
  { icon: '📚', title: 'RAG + Action Agents', desc: 'Agents that answer from your documents with citations, then take the next approved action — create a ticket, draft a reply or update a record — using the same retrieved context.' },
  { icon: '✅', title: 'Human-in-the-Loop Approvals', desc: 'Risky or irreversible actions pause for a named approver. We define which steps always need sign-off, which are auto-approved, and how context is shown so decisions are quick.' },
  { icon: '🛡️', title: 'Agent Evaluation & Guardrails', desc: 'Test sets, red-teaming, prompt-injection checks and structured logging prove the agent behaves before launch. Guardrails limit scope, inputs and outputs in production.' },
  { icon: '📉', title: 'Monitoring & Cost Control', desc: 'Dashboards for success rate, tool errors and escalation, plus token budgets, rate limits and alerts so agent usage stays predictable as volume grows.' },
];

const steps = [
  { num: '01', title: 'Workflow & Risk Mapping', desc: 'We map the task end to end, list the systems and data involved, and classify each step by risk. That decides what the agent can do alone and what needs human approval.' },
  { num: '02', title: 'Permissions & Tool Design', desc: 'Each tool gets scoped credentials, validated inputs and a clear contract. We start read-only where possible and add write actions only where the workflow needs them.' },
  { num: '03', title: 'Build & Evaluate', desc: 'We build the agent loop, prompts and integrations, then run it against a test set of normal, edge and adversarial cases. Nothing ships until it meets agreed success and safety thresholds.' },
  { num: '04', title: 'Launch with Monitoring', desc: 'We launch in a limited scope, watch logs, tool errors, cost and approval rates, and expand permissions step by step once the agent proves stable in production.' },
];

const faqs = [
  { q: 'What is the difference between an AI chatbot and an AI agent?', a: 'A chatbot answers questions inside a conversation. An AI agent uses a language model to plan steps, call tools and take actions to complete a task. Our AI chatbot vs AI agent guide compares them side by side, including when each is the better fit.' },
  { q: 'When is an AI agent worth building?', a: 'When a task involves several steps across systems, decisions based on retrieved information, and enough repetition that automation saves real time. If the need is only to answer questions, a chatbot is usually simpler and cheaper.' },
  { q: 'How do you stop an agent taking the wrong action?', a: 'We scope each tool to the minimum permissions it needs, validate inputs, and require human approval for risky or irreversible steps. Evaluation, logging and a kill switch catch problems before they reach customers or production data.' },
  { q: 'Which systems can an AI agent connect to?', a: 'Any system with an API or a supported integration: CRM platforms, ticketing tools, ERP and accounting software, ecommerce, internal databases, email, Slack and Microsoft Teams. Where no API exists, we scope a safe alternative or a human step.' },
  { q: 'What drives the cost of an AI agent project?', a: 'The number and complexity of tools and integrations, permission and approval design, data quality, evaluation depth, and ongoing model usage. Our AI development cost guide for Canada covers typical ranges and cost drivers.' },
  { q: 'How do you measure whether an agent works?', a: 'We agree targets before launch: task success rate, tool error rate, approval and escalation rates, time saved per task, cost per completed task, and user feedback. These are reviewed weekly during the first months and used to decide what to expand.' },
];

function BuyerContent() {
  return (
    <section id="agent-buying-guide" aria-labelledby="agent-buying-guide-title" style={{ padding: 'var(--section-y) 0', background: 'var(--surface-alt)' }}>
      <div className="cb-container" style={{ color: 'var(--body)', lineHeight: 1.7 }}>
        <h2 id="agent-buying-guide-title">Chatbot, agent or automation: which do you need?</h2>
        <p className="lede">Start with the outcome: answer a question, complete a task, or run a fixed process without a conversation. Our <a href="/blog/ai-chatbot-vs-ai-agent-for-business">AI chatbot vs AI agent guide</a> explains the trade-offs in more depth.</p>
        <div style={{ overflowX: 'auto', marginBottom: 24 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15 }}>
            <caption style={{ textAlign: 'left', paddingBottom: 8, fontWeight: 600 }}>Chatbot vs AI agent vs AI automation</caption>
            <thead>
              <tr>
                <th scope="col" style={{ textAlign: 'left', padding: 10, borderBottom: '2px solid var(--border)' }}>Type</th>
                <th scope="col" style={{ textAlign: 'left', padding: 10, borderBottom: '2px solid var(--border)' }}>What it does</th>
                <th scope="col" style={{ textAlign: 'left', padding: 10, borderBottom: '2px solid var(--border)' }}>Best for</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" style={{ textAlign: 'left', padding: 10, borderBottom: '1px solid var(--border)' }}>Chatbot</th>
                <td style={{ padding: 10, borderBottom: '1px solid var(--border)' }}>Answers questions in a conversation, grounded in your documents.</td>
                <td style={{ padding: 10, borderBottom: '1px solid var(--border)' }}>Support and FAQ, lead qualification, internal knowledge lookup.</td>
              </tr>
              <tr>
                <th scope="row" style={{ textAlign: 'left', padding: 10, borderBottom: '1px solid var(--border)' }}>AI agent</th>
                <td style={{ padding: 10, borderBottom: '1px solid var(--border)' }}>Plans steps, calls tools and takes scoped actions to finish a task.</td>
                <td style={{ padding: 10, borderBottom: '1px solid var(--border)' }}>Multi-step tasks across systems that need judgement and follow-up.</td>
              </tr>
              <tr>
                <th scope="row" style={{ textAlign: 'left', padding: 10, borderBottom: '1px solid var(--border)' }}>AI automation</th>
                <td style={{ padding: 10, borderBottom: '1px solid var(--border)' }}>Runs a fixed process on triggers, with AI for classification or extraction.</td>
                <td style={{ padding: 10, borderBottom: '1px solid var(--border)' }}>High-volume, predictable workflows with clear rules and handoffs.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Most projects combine all three: an <a href="/services/ai-ml/ai-chatbots">AI chatbot development</a> layer for questions, an agent for tasks that need tools, and <a href="/services/ai-ml/ai-automation">AI automation services</a> for the repeatable path around them. Budget depends on scope — see our <a href="/blog/ai-development-cost-canada">AI development cost guide for Canada</a> for typical ranges.</p>
        <a href="/contact" className="btn btn--primary">Discuss your AI agent project</a>
      </div>
    </section>
  );
}

export default function PageClient() {
  return (
    <SubServicePageTemplate
      parent={{ href: "/services/ai-ml", label: "AI & Machine Learning" }}
      name="AI Agent Development"
      copy={{ badge: "AI & MACHINE LEARNING", title: <>AI Agents That <span style={{ color: 'var(--brand)' }}>Get Work Done</span></>, desc: <>An AI agent is software that uses a large language model to plan steps, call your tools and APIs, and complete a task, not just answer a question. We design, build and monitor AI agents for Canadian businesses with scoped permissions, human approval for risky actions and evaluation before launch.</> }}
      stats={stats}
      services={services}
      steps={steps}
      faqs={faqs}
      capabilitiesTitle="Our AI Agent Capabilities"
      buyerContent={<BuyerContent />}
    />
  );
}
