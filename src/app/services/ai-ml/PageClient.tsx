import Link from 'next/link';
import ServicePageTemplate from '@/components/page/ServicePageTemplate';
import { serviceCaseMap } from '@/data/service-case-map';

const stats = [
  { value: '50+', label: 'AI Products Shipped' },
  { value: '2M+', label: 'Daily Predictions' },
  { value: '<100ms', label: 'Inference' },
  { value: '98%', label: 'Model Accuracy' },
];

const services: { title: string; tag: string; desc: string; chips?: string[] }[] = [
  {
    title: 'Custom LLM Applications',
    tag: 'Generative AI',
    desc: 'GPT-4, Claude and open-source LLMs integrated into your product — RAG pipelines, fine-tuning, prompt engineering and production deployment at scale.',
    chips: ['OpenAI', 'LangChain', 'Pinecone', 'Claude', 'HuggingFace'],
  },
  {
    title: 'ML Model Development',
    tag: 'Predictive AI',
    desc: 'End-to-end ML pipelines — from data prep and feature engineering to model training, evaluation and serving at scale with full monitoring in production.',
    chips: ['Python', 'TensorFlow', 'PyTorch', 'SageMaker', 'MLflow'],
  },
  { title: 'Computer Vision', tag: 'Vision AI', desc: 'Object detection, image classification, OCR and real-time video analysis for any industry.' },
  { title: 'NLP & Text Analytics', tag: 'NLP', desc: 'Sentiment analysis, entity extraction, document understanding and semantic search pipelines.' },
  { title: 'AI Automation', tag: 'Automation', desc: 'Intelligent workflow automation that eliminates manual tasks and scales with your operations.' },
  { title: 'Data Engineering', tag: 'Data', desc: 'Data pipelines, feature stores and warehouse architectures that feed reliable models.' },
];

const steps = [
  {
    num: '01',
    title: 'Data Audit',
    desc: 'We assess your existing data assets, identify gaps, and define the data strategy needed to build a model that actually performs in production.',
    deliverables: ['Data Inventory', 'Quality Report', 'Gap Analysis', 'Data Roadmap'],
    duration: '1–2 weeks',
  },
  {
    num: '02',
    title: 'Model Design',
    desc: 'Architecture selection, problem framing, and baseline benchmarking — choosing the right approach before committing to full training.',
    deliverables: ['Architecture Doc', 'Baseline Benchmarks', 'Feature Plan', 'Evaluation Criteria'],
    duration: '1–2 weeks',
  },
  {
    num: '03',
    title: 'Training',
    desc: 'Iterative model training with full experiment tracking, hyperparameter tuning, and version control on every run.',
    deliverables: ['Trained Models', 'Experiment Logs', 'Tuning Report', 'Version Registry'],
    duration: '2–6 weeks',
  },
  {
    num: '04',
    title: 'Evaluation',
    desc: 'Rigorous evaluation across accuracy, latency, fairness and robustness metrics. Red-teaming for LLM applications before any production exposure.',
    deliverables: ['Eval Report', 'Bias Audit', 'Latency Profile', 'Red-Team Results'],
    duration: '1–2 weeks',
  },
  {
    num: '05',
    title: 'Deployment',
    desc: 'Containerised model serving, A/B testing infrastructure, real-time monitoring dashboards and drift detection to keep your model accurate over time.',
    deliverables: ['Production API', 'A/B Framework', 'Monitoring Dashboard', 'Drift Alerts'],
    duration: 'Ongoing',
  },
];

const techCategories = [
  { label: 'Models', chips: ['GPT-4', 'Claude', 'Llama', 'Mistral', 'Gemini'] },
  { label: 'Frameworks', chips: ['TensorFlow', 'PyTorch', 'LangChain', 'Scikit-learn'] },
  { label: 'Infrastructure', chips: ['AWS SageMaker', 'Google Vertex AI', 'Azure ML', 'Kubernetes'] },
  { label: 'Data', chips: ['Pinecone', 'Weaviate', 'PostgreSQL', 'Spark', 'Airflow'] },
];

const industries = [
  { icon: '💰', title: 'FinTech', desc: 'Fraud detection, credit scoring, algorithmic trading and risk modelling at scale.' },
  { icon: '🏥', title: 'Healthcare', desc: 'Clinical NLP, medical imaging analysis, patient outcome prediction and drug discovery support.' },
  { icon: '🛍️', title: 'Retail', desc: 'Recommendation engines, demand forecasting, dynamic pricing and inventory optimisation.' },
  { icon: '⚖️', title: 'Legal', desc: 'Contract analysis, case outcome prediction, document review automation and due diligence tools.' },
  { icon: '📺', title: 'Media', desc: 'Content personalisation, automated tagging, sentiment monitoring and audience analytics.' },
  { icon: '🏭', title: 'Manufacturing', desc: 'Predictive maintenance, quality control vision systems and supply chain optimisation.' },
];

const faqs = [
  { q: 'How much does AI development cost in Canada?', a: 'Planning ranges in CAD: about $10,000–$35,000 for an LLM feature in an existing app, $15,000–$45,000 for a document chatbot (RAG), $25,000–$80,000 for workflow automation, and $40,000–$150,000+ for custom model training. These are planning ranges based on Canadian market rates, not quotes. After a short discovery call we give you a fixed quote for your scope.' },
  { q: 'How long does an AI project take?', a: 'A scoped LLM feature or RAG chatbot usually takes 6–12 weeks from discovery to production. Workflow automation and predictive models typically run 10–20 weeks. Custom model training with data preparation is longer, often 3–6 months. You get a timeline with the quote, and we demo working software every sprint.' },
  { q: 'Can you add AI (ChatGPT, Claude, Llama) to our existing app or website?', a: 'Yes. We integrate GPT-4, Claude, Llama and other models into products that are already live — chat interfaces, RAG over your documents, summarisation, classification and automation. We handle the integration, guardrails, evaluation and monitoring so the feature holds up in production, not just in a demo.' },
  { q: 'Is our data kept private and in Canada?', a: 'Yes. We plan for Canadian privacy law (PIPEDA) from the start, and you choose the model and hosting — API models, open-weight models, or Canadian cloud regions where data residency matters. We do not train models on your client data unless you ask us to, and data handling is written into the contract.' },
  { q: 'Do you build AI chatbots and automation for small businesses?', a: 'Yes. We build document chatbots, support assistants and workflow automation for businesses of every size, starting with the narrowest useful feature and expanding from there. Most small-business projects start with an API model so the build is fast and the running cost stays predictable.' },
  { q: 'Do you work with businesses in Edmonton, Calgary, Toronto and Vancouver?', a: 'Yes. We are based in Edmonton, Alberta, and work with clients across Canada — Edmonton, Calgary, Toronto, Vancouver and beyond — remotely or on site for discovery and launch.' },
];

export default function PageClient() {
  return (
    <ServicePageTemplate
      slug="ai-ml"
      caseStudySlugs={serviceCaseMap['ai-ml']}
      name="AI & Machine Learning"
      copy={{ badge: "AI & Machine Learning", title: <>AI Development<br />That Moves Your <span style={{ color: 'var(--brand)' }}>Business Forward.</span></>, desc: <>An AI development company in Canada building custom AI models, LLM-powered products and intelligent automation — engineered for production, not demos. For a rough cost estimate, see our <a href="/blog/ai-development-cost-canada">AI development cost guide</a>.</> }}
      stats={stats}
      services={services}
      steps={steps}
      techCategories={techCategories}
      industries={industries}
      faqs={faqs}
      buyerContent={(
        <section style={{ padding: 'var(--section-y-sm) 0' }}>
          <div className="cb-container" style={{ display: 'grid', gap: 20 }}>
            <h2>Choose an AI development approach</h2>
            <p className="lede">Start with the decision or task you want to improve. The right approach depends on whether your team needs reliable answers, coordinated actions or predictions from business data.</p>
            <h3 id="ai-project-fit">Which AI development service fits your project?</h3>
            <p id="ai-project-fit-help">Compare common business needs below; scroll horizontally on smaller screens.</p>
            <div role="region" aria-labelledby="ai-project-fit" aria-describedby="ai-project-fit-help" tabIndex={0} style={{ overflowX: 'auto', maxWidth: '100%', marginBottom: 32 }}>
              <table style={{ width: '100%', minWidth: 640, borderCollapse: 'collapse', textAlign: 'left' }}>
                <caption style={{ textAlign: 'left', paddingBottom: 12 }}>AI project needs and the service that fits each one</caption>
                <thead>
                  <tr>{['Project need', 'Suitable approach', 'Where to start'].map(label => <th key={label} scope="col" style={{ padding: 14, borderBottom: '2px solid var(--line)' }}>{label}</th>)}</tr>
                </thead>
                <tbody>
                  {[
                    ['Customers need instant answers to common questions, 24/7', 'AI chatbot or virtual assistant', <Link key="chatbots" href="/services/ai-ml/ai-chatbots">AI chatbot development</Link>],
                    ['Staff need reliable answers from policies, manuals or product documentation', 'Document retrieval and LLM integration (RAG)', <Link key="llm" href="/services/ai-ml/llm-integration">LLM integration</Link>],
                    ['Repeatable tasks such as triage, routing or data entry consume staff time', 'AI workflow automation', <Link key="automation" href="/services/ai-ml/ai-automation">AI automation</Link>],
                    ['You need forecasts, churn scores or demand predictions from business data', 'Custom predictive analytics model', <Link key="predictive" href="/services/ai-ml/predictive-analytics">Predictive analytics</Link>],
                  ].map(([need, approach, link]) => (
                    <tr key={String(need)}>
                      <th scope="row" style={{ padding: 14, borderBottom: '1px solid var(--line)' }}>{need}</th>
                      <td style={{ padding: 14, borderBottom: '1px solid var(--line)' }}>{approach}</td>
                      <td style={{ padding: 14, borderBottom: '1px solid var(--line)' }}>{link}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <h3>Document retrieval and LLM integration</h3>
            <p className="lede">Choose <Link href="/services/ai-ml/llm-integration">document retrieval and LLM integration</Link> when staff need answers from changing policies, manuals or product documentation. Prepare approved source documents, access permissions and realistic questions with reference answers. Agree how to score answer accuracy and source citations on a shared evaluation set, including questions the documents cannot answer. Define when the assistant should decline or escalate to a person.</p>
            <h3>Workflow automation</h3>
            <p className="lede">Choose <Link href="/services/ai-ml/ai-automation">AI workflow automation</Link> for repeatable tasks such as classifying incoming requests and routing them into your CRM for review. Bring sample requests, process rules, exception cases and API documentation. Agree acceptance criteria for correct routing, processing time and error rates. Specify which actions require human approval, who handles failures and how retries avoid duplicate records.</p>
            <h3>Custom predictive or computer-vision models</h3>
            <p className="lede">Choose a custom predictive model for demand forecasting from historical sales, or <Link href="/services/ai-ml/computer-vision">computer-vision development</Link> for detecting defects in inspection images. Prepare representative records or labelled images, known outcomes and examples of rare failures. Compare performance against your current process using held-out data. Agree acceptable forecast error or false-positive and missed-defect rates, inference time and human review thresholds before training.</p>
            <h3>Prepare for a scoping conversation</h3>
            <ul className="lede" style={{ paddingLeft: 24, margin: 0 }}>
              <li>Representative data, including difficult cases and permission to use it.</li>
              <li>Integration requirements: systems, APIs, access and process owners.</li>
              <li>Hosting constraints: residency, security and deployment environment.</li>
              <li>A measurable business outcome, such as reduced handling time, with a baseline.</li>
            </ul>
            <p className="lede">Not sure where AI fits yet? Our <Link href="/services/ai-consulting">AI consulting services</Link> help you pick the right use cases, check your data readiness and decide whether to build or buy before any development starts.</p>
            <p className="lede">Mapletech Labs is based in Edmonton and builds AI models, LLM-powered products and automation for businesses across Canada. See local use cases, privacy considerations and FAQs for your city:</p>
            <ul className="lede" style={{ paddingLeft: 24, margin: 0 }}>
              <li style={{ marginBottom: 8 }}><Link href="/locations/ai-development-company-in-edmonton">AI development company in Edmonton</Link>: our home city, with in-person discovery workshops available.</li>
              <li style={{ marginBottom: 8 }}><Link href="/locations/ai-development-company-in-calgary">AI development company in Calgary</Link>: local AI projects supported remotely or on site.</li>
              <li style={{ marginBottom: 8 }}><Link href="/locations/ai-development-company-in-toronto">AI development company in Toronto</Link>: local use cases, privacy considerations and FAQs for Toronto businesses.</li>
              <li style={{ marginBottom: 8 }}><Link href="/locations/ai-development-company-in-vancouver">AI development company in Vancouver</Link>: AI development for Vancouver businesses, delivered remotely or on site.</li>
            </ul>
            <p className="lede"><Link href="/contact">Discuss your AI project approach and acceptance criteria</Link>.</p>
          </div>
        </section>
      )}
    />
  );
}
