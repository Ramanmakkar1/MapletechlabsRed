import Link from 'next/link';
import SubServicePageTemplate from '@/components/page/SubServicePageTemplate';

const stats = [
  { value: '80+', label: 'Automation Workflows Built' },
  { value: '70%', label: 'Avg Time Saved' },
  { value: '500K+', label: 'Tasks Automated Monthly' },
  { value: '6wk', label: 'Avg Deployment Timeline' },
];

const services = [
  { icon: '⚙️', title: 'Workflow Automation with AI', desc: 'End-to-end automation of complex multi-step business workflows using AI decision-making. We map your processes and design intelligent pipelines that adapt to exceptions and edge cases.' },
  { icon: '📄', title: 'Document Processing & Extraction', desc: 'Automate extraction of structured data from invoices, contracts, forms, and reports using LLMs and OCR. Reduce manual data entry by up to 95% while improving accuracy.' },
  { icon: '📧', title: 'Email & Communication Automation', desc: 'AI-powered email triage, drafting, and routing. Auto-classify incoming messages, generate context-aware responses, and escalate priority issues without human intervention.' },
  { icon: '🔄', title: 'Data Pipeline Automation', desc: 'Intelligent ETL pipelines that clean, transform, and enrich data using AI models. Handle unstructured inputs, detect anomalies, and maintain data quality automatically at scale.' },
  { icon: '🧠', title: 'Decision Automation', desc: 'Replace manual approval workflows with AI-driven decision engines. Automate credit scoring, content moderation, lead qualification, and compliance checks with explainable AI.' },
  { icon: '🤖', title: 'RPA + AI Hybrid Workflows', desc: 'Combine traditional Robotic Process Automation with AI intelligence to handle both structured and unstructured tasks. We integrate with UiPath, Automation Anywhere, and custom RPA stacks.' },
];

const steps = [
  { num: '01', title: 'Process Audit', desc: 'We map your existing workflows, identify bottleneck tasks, quantify time costs, and rank automation opportunities by ROI potential and implementation feasibility.' },
  { num: '02', title: 'Automation Design', desc: 'We design the automation architecture — defining triggers, AI decision points, data flows, exception handling, and human-in-the-loop checkpoints for edge cases.' },
  { num: '03', title: 'AI Integration', desc: 'We build and integrate the automation system with your existing tools (CRM, ERP, Slack, email), train AI components on your data, and configure monitoring dashboards.' },
  { num: '04', title: 'Monitor & Optimise', desc: 'Post-launch, we monitor accuracy and throughput, retrain models as data drifts, and continuously add new automation use cases to grow your ROI over time.' },
];

const faqs = [
  { q: 'Which business processes are best suited for AI automation?', a: 'The best candidates are high-volume, repetitive tasks with clear rules or patterns — like data entry, invoice processing, email triage, report generation, and lead qualification. Processes that currently consume significant manual hours but don\'t require nuanced human judgment are ideal starting points. We conduct a process audit to rank your opportunities by ROI.' },
  { q: 'How is AI automation different from traditional RPA?', a: 'Traditional RPA follows rigid rules and breaks when interfaces or formats change. AI automation adds intelligence — it can understand unstructured data (PDFs, emails, images), make contextual decisions, handle variability, and improve over time through learning. We often combine both: RPA handles structured UI interactions while AI handles the cognitive tasks.' },
  { q: 'How do you handle exceptions and edge cases in automated workflows?', a: 'We design explicit exception handling into every workflow — with confidence thresholds, fallback logic, and human-in-the-loop escalation for cases where the AI is uncertain. You get a dashboard to review flagged exceptions, and we use those cases to continuously improve model accuracy over time.' },
  { q: 'What ROI can we realistically expect from AI automation?', a: 'Most clients see 50–80% reduction in manual processing time for automated tasks, with payback periods of 3–9 months. One document processing client reduced invoice processing costs from $12/invoice to $0.80. ROI depends on volume, current labor cost, and process complexity — we model this during the audit phase before you commit.' },
  { q: 'How long does it take to deploy a first automation?', a: 'A focused, well-scoped automation can be live in 4–6 weeks: 1–2 weeks for process analysis and design, 2–3 weeks for development and integration, and 1 week for testing and go-live. More complex multi-system automations typically take 8–12 weeks. We prioritize getting a first win into production quickly, then expand from there.' },
  { q: 'What system access is needed to scope and build an automation?', a: 'Start with a workflow walkthrough, redacted sample inputs, and a list of systems and owners. Before implementation, agree on API availability, sandbox accounts, minimum permissions, data retention, and who approves production access. Never send passwords or sensitive records through the consultation form.' },
  { q: 'What ongoing operating costs should we budget for?', a: 'Budget for model or API usage, OCR, hosting, integration subscriptions, monitoring, and maintenance. Volume, document length, retries, and human review affect cost per completed task. Agree on usage limits, alerts, evaluation checks, and support responsibilities during scoping; implementation cost and recurring operating cost should be estimated separately.' },
];

function BuyerContent() {
  return (
    <section aria-labelledby="automation-buyer-guide" style={{ padding: 'var(--section-y) 0', background: 'var(--surface-alt)' }}>
      <div className="cb-container" style={{ color: 'var(--body)', lineHeight: 1.7 }}>
        <h2 id="automation-buyer-guide">What is AI automation for Canadian businesses?</h2>
        <p className="lede">AI automation is software that completes repetitive business tasks — reading invoices, sorting email, routing leads, moving data between systems — by combining rules with AI models that handle messy, unstructured inputs. For a Canadian business it means fewer manual hours, fewer keying errors, and a documented process that keeps working as volume grows, with people approving the cases that matter.</p>
        <p>Mapletech Labs designs and builds these workflows for companies in Edmonton, Calgary, Toronto and Vancouver, connecting AI decision points to the tools your team already uses. Start with one repetitive bottleneck, its exceptions, and a measurable outcome. The workflow examples below are illustrative, not additional client projects or results.</p>

        <h2 id="automation-use-cases">AI automation use cases for Canadian businesses</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 24, margin: '28px 0' }}>
          <article>
            <h3>Example: invoice extraction</h3>
            <p><strong>Inputs:</strong> PDF invoices, scans, and purchase orders. <strong>Connected systems:</strong> an accounts-payable inbox, document storage, and accounting or ERP software.</p>
            <p><strong>Human review:</strong> check low-confidence fields, duplicates, and purchase-order mismatches before posting or approving payment. <strong>Success measures:</strong> field accuracy, exception rate, processing time, and cost per invoice.</p>
          </article>
          <article>
            <h3>Example: email triage</h3>
            <p><strong>Inputs:</strong> incoming messages, attachments, and support categories. <strong>Connected systems:</strong> a shared mailbox, help desk, and customer records.</p>
            <p><strong>Human review:</strong> review ambiguous or sensitive messages and approve drafted replies before sending. <strong>Success measures:</strong> routing accuracy, missed urgent messages, response time, and review workload.</p>
          </article>
          <article>
            <h3>Example: CRM lead routing</h3>
            <p><strong>Inputs:</strong> enquiry forms, lead emails, and territory or qualification criteria. <strong>Connected systems:</strong> your website forms, CRM, and sales notifications.</p>
            <p><strong>Human review:</strong> resolve duplicate records, uncertain matches, and ownership conflicts before assignment. <strong>Success measures:</strong> correct-owner rate, time to assignment, duplicate rate, and sales follow-up time.</p>
          </article>
        </div>
        <h3 id="automation-comparison">Rules, AI assistance, or a custom system?</h3>
        <p id="automation-table-help">Compare the options below; scroll horizontally on smaller screens.</p>
        <div role="region" aria-labelledby="automation-comparison" aria-describedby="automation-table-help" tabIndex={0} style={{ overflowX: 'auto', maxWidth: '100%', marginBottom: 32 }}>
          <table style={{ width: '100%', minWidth: 640, borderCollapse: 'collapse', textAlign: 'left' }}>
            <caption style={{ textAlign: 'left', paddingBottom: 12 }}>Automation approaches and when each fits</caption>
            <thead>
              <tr>{['Approach', 'When it fits', 'Review and maintenance'].map(label => <th key={label} scope="col" style={{ padding: 14, borderBottom: '2px solid var(--line)' }}>{label}</th>)}</tr>
            </thead>
            <tbody>
              {[
                ['Rules-based automation', 'Stable structured inputs and explicit if/then decisions, such as moving approved records between systems.', 'People handle exceptions; update rules when processes or system interfaces change.'],
                ['AI-assisted workflows', 'Variable documents or language inside a defined process, with people approving uncertain or consequential outputs.', 'Evaluate accuracy on representative samples; monitor confidence, errors, and review queues.'],
                ['Custom AI systems', 'Specialised logic, proprietary data, or complex integrations that packaged tools cannot meet.', 'Plan data preparation, custom evaluation, deployment, monitoring, and ongoing model maintenance.'],
              ].map(([approach, fit, review]) => (
                <tr key={approach}>
                  <th scope="row" style={{ padding: 14, borderBottom: '1px solid var(--line)' }}>{approach}</th>
                  <td style={{ padding: 14, borderBottom: '1px solid var(--line)' }}>{fit}</td>
                  <td style={{ padding: 14, borderBottom: '1px solid var(--line)' }}>{review}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h2 id="automation-integrations">Which systems can AI automation integrate with?</h2>
        <p>AI automation is only as useful as the systems it can reach. We connect workflows to the tools your team already runs, using official APIs where they exist and secure, permission-limited access where they do not. Typical integrations include:</p>
        <ul style={{ paddingLeft: 24, marginBottom: 28 }}>
          <li><strong>CRM and sales tools</strong> such as HubSpot, Salesforce and Pipedrive for lead capture, routing and record updates.</li>
          <li><strong>Accounting and ERP systems</strong> such as QuickBooks, Xero and Sage for invoice, expense and purchase-order processing.</li>
          <li><strong>Email and collaboration</strong> such as Microsoft 365, Google Workspace and Slack for triage, drafting and notifications.</li>
          <li><strong>Help desks and support platforms</strong> such as Zendesk and Freshdesk for ticket classification and response drafting.</li>
          <li><strong>Data stores and internal tools</strong> including databases, cloud storage, spreadsheets and custom admin systems.</li>
        </ul>
        <p>Where a workflow needs language understanding or an autonomous multi-step agent, we build it with our <Link href="/services/ai-ml/llm-integration">LLM integration services</Link> or <Link href="/services/ai-ml/ai-agent-development">AI agent development</Link> team. See the full <Link href="/services/ai-ml">AI and machine learning practice</Link> for related capabilities.</p>

        <h2 id="automation-delivery-process">How we deliver an AI automation project</h2>
        <p>Every engagement follows the same four stages, so you know what happens, who is involved and what you receive at each step:</p>
        <ol style={{ paddingLeft: 24, marginBottom: 28 }}>
          <li><strong>Process audit (1–2 weeks).</strong> We map the current workflow, quantify manual hours and error costs, and rank opportunities by ROI and feasibility. You get a written scope and success measures.</li>
          <li><strong>Automation design.</strong> We define triggers, AI decision points, data flows, exception handling and human-in-the-loop checkpoints, then agree on acceptance criteria before building.</li>
          <li><strong>Build and integration (2–3 weeks for a first workflow).</strong> We implement the workflow, connect your systems, test against representative samples and configure monitoring dashboards.</li>
          <li><strong>Launch, monitor and optimise.</strong> After go-live we track accuracy and throughput, retrain or adjust as data drifts, and add new use cases once the first is stable.</li>
        </ol>
        <p>A focused first automation is typically live in 4–6 weeks; multi-system programmes usually take 8–12 weeks. We prioritise getting one measurable win into production before expanding.</p>

        <h2 id="automation-pricing">What drives AI automation pricing in Canada?</h2>
        <p><strong>Workflow volume</strong> determines throughput and exception workload. <strong>Integrations</strong> depend on API access, permissions, and legacy systems. <strong>Data preparation</strong> includes cleaning, labelling, and handling inconsistent formats. <strong>Evaluation</strong> covers representative test cases, acceptance thresholds, and failure handling. <strong>Ongoing model usage</strong> varies with document length, request volume, and retries, alongside hosting and monitoring.</p>
        <p>Compare implementation and operating budgets in our <Link href="/blog/ai-development-cost-canada">AI development cost guide for Canada</Link> and review <Link href="/pricing">software development pricing and engagement options</Link>. A workflow scope is needed for a project estimate.</p>
        <h3>Scoping checklist for your consultation</h3>
        <ul style={{ paddingLeft: 24, marginBottom: 28 }}>
          <li>Choose one workflow, its owner, trigger, and desired output.</li>
          <li>Estimate monthly volume, peak loads, current processing time, and error costs.</li>
          <li>List connected systems, API availability, and access or privacy constraints.</li>
          <li>Prepare redacted sample inputs, including exceptions and difficult cases.</li>
          <li>Define human approvals, escalation owners, and measurable acceptance criteria.</li>
          <li>Set a budget range, target timeline, and owner for ongoing monitoring and usage costs.</li>
        </ul>
        <Link href="/contact#contact-form" className="btn btn--primary">Discuss your AI automation workflow with an engineer</Link>
      </div>
    </section>
  );
}

export default function PageClient() {
  return (
    <SubServicePageTemplate
      parent={{ href: "/services/ai-ml", label: "AI & Machine Learning" }}
      name="AI Automation"
      copy={{ badge: "AI & MACHINE LEARNING", title: <>AI Automation Services in <span style={{ color: 'var(--brand)' }}>Canada</span></>, desc: <>We design and deploy intelligent automation workflows that eliminate repetitive work, reduce errors, and free your team to focus on what matters — saving an average of 70% in manual processing time.</> }}
      stats={stats}
      services={services}
      steps={steps}
      faqs={faqs}
      capabilitiesTitle="Our Capabilities"
      buyerContent={<BuyerContent />}
    />
  );
}
