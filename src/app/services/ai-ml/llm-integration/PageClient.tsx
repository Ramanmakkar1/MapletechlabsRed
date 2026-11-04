import SubServicePageTemplate from '@/components/page/SubServicePageTemplate';
import { PROJECT_PRICING } from '@/data/pricing';

const stats = [
  { value: '60+', label: 'LLM Integrations Delivered' },
  { value: 'GPT/Claude/Gemini', label: 'Model Expertise' },
  { value: '3wk', label: 'Avg Integration Timeline' },
  { value: '10x', label: 'Productivity Boost' },
];

const services = [
  { icon: '🔌', title: 'OpenAI & Anthropic API Integration', desc: 'Seamless integration with leading LLM providers including GPT-4, Claude 3, and Gemini. We handle authentication, rate limiting, and error handling so your team can focus on features.' },
  { icon: '📚', title: 'RAG (Retrieval Augmented Generation)', desc: 'Combine the power of LLMs with your proprietary data using vector databases and semantic search. Give your AI grounded, accurate answers based on your knowledge base.' },
  { icon: '🎯', title: 'Fine-tuning & Custom Models', desc: 'Adapt foundation models to your specific domain and tone. We fine-tune models on your data to dramatically improve accuracy, reduce hallucinations, and lower per-token costs.' },
  { icon: '✍️', title: 'Prompt Engineering', desc: 'Expert prompt design and optimization to maximize model performance. We develop systematic prompt frameworks, chain-of-thought strategies, and few-shot examples tailored to your use case.' },
  { icon: '📊', title: 'LLM Observability & Monitoring', desc: 'Full-stack monitoring of your LLM pipelines with latency tracking, token usage dashboards, output quality scoring, and alerting to catch regressions before they reach users.' },
  { icon: '💰', title: 'Cost Optimization & Caching', desc: 'Reduce LLM API spend by up to 80% through intelligent prompt caching, model routing, response memoization, and selecting the right-sized model for each task.' },
];

const steps = [
  { num: '01', title: 'Use Case Scoping', desc: 'We assess your goals, data, and existing systems to define the optimal LLM integration approach — from simple API calls to complex multi-agent pipelines.' },
  { num: '02', title: 'Model Selection', desc: 'We evaluate GPT-4, Claude, Gemini, Llama, and open-source alternatives across accuracy, cost, latency, and compliance requirements to recommend the best fit.' },
  { num: '03', title: 'Integration & Testing', desc: 'Full implementation with rigorous evaluation — red-teaming for safety, accuracy benchmarking on your data, and end-to-end integration testing in staging environments.' },
  { num: '04', title: 'Production Deployment', desc: 'We ship to production with CI/CD pipelines, rate limit handling, fallback strategies, and observability dashboards configured for long-term reliability.' },
];

const faqs = [
  { q: 'GPT-4 vs Claude vs Gemini — which is right for my use case?', a: 'It depends on your specific needs. GPT-4 excels at complex reasoning and code generation. Claude is preferred for long-context tasks and safer outputs. Gemini is strong for multimodal applications. We benchmark all relevant models against your actual use case before recommending one — and often use multiple models in combination for best results.' },
  { q: 'How do I keep our data private when using LLMs?', a: 'Data privacy is configurable at multiple levels. Options include enterprise API tiers with zero data retention, private cloud deployments (Azure OpenAI, AWS Bedrock), and fully on-premise open-source models like Llama 3. We help you choose the right architecture based on your compliance requirements (GDPR, HIPAA, SOC 2).' },
  { q: 'What is RAG and when do I need it?', a: 'Retrieval Augmented Generation (RAG) connects an LLM to your own knowledge base — documentation, databases, PDFs — so it can answer questions accurately using your proprietary data rather than just its training data. You need RAG when you want the AI to have up-to-date, domain-specific knowledge without the cost and complexity of full fine-tuning.' },
  { q: 'How much does LLM API usage cost?', a: 'Costs vary widely by model and usage. GPT-4 Turbo runs around $0.01–0.03 per 1K tokens, while GPT-3.5 and Claude Haiku are 10–20x cheaper. For a typical customer support bot handling 10K queries/day, monthly costs typically range from $200–$2,000 depending on context length. We help you optimize architecture to minimize costs without sacrificing quality.' },
  { q: 'Can you fine-tune a model on our proprietary data?', a: 'Yes. Fine-tuning is ideal when you need consistent tone, specialized domain vocabulary, or structured output formats. We support fine-tuning on OpenAI models (GPT-3.5, GPT-4o) and open-source models (Llama 3, Mistral). The process typically takes 2–4 weeks and includes data preparation, training, evaluation, and deployment to your infrastructure.' },
];

function BuyerContent() {
  return (
    <section aria-labelledby="llm-buying-guide" style={{ padding: 'var(--section-y) 0', background: 'var(--surface-alt)' }}>
      <div className="cb-container" style={{ color: 'var(--body)', lineHeight: 1.7 }}>
        <h2 id="llm-buying-guide">Plan the scope and budget for LLM integration</h2>
        <p className="lede">A useful integration starts with a specific workflow, representative examples, and a clear definition of success. The right architecture and budget depend on the data, systems, and controls that workflow needs.</p>
        <h3>Choose between API integration, RAG, and fine-tuning</h3>
        <p>A direct model API integration can be enough for tasks such as summarising supplied text or drafting a response when the necessary context is already available. Retrieval-augmented generation (RAG) adds a search step to find relevant passages in approved sources and provide them to the model; it is useful when answers need current business information and citations. Plan how sources are updated, deleted, and filtered by user permissions.</p>
        <p>Fine-tuning adapts a model using prepared examples and may help with consistent formats, domain vocabulary, or behaviour. It requires suitable training and evaluation data and does not replace a process for retrieving current documents. Compare approaches on a representative test set before adding complexity; a project can combine them where each serves a defined purpose.</p>
        <h3>What to bring to discovery</h3>
        <p>Bring sample questions and desired answers, including difficult or sensitive cases. List document sources, formats, owners, and update frequency; explain which users may access each source and any retention restrictions. Identify integrations, available APIs, and whether the application needs to read information or take actions. Estimate expected request volume, peak traffic, and response sizes so the team can scope capacity and running costs.</p>
        <h3>Agree on acceptance criteria</h3>
        <p>Before implementation, select a test set and agree how answer quality will be measured, including what constitutes an incorrect or incomplete answer. Specify when citations are required and check that they support the response. Set a latency target under expected load, then test fallback behaviour for missing sources, provider errors, and uncertain answers. Define when users can request a human and what context is passed to the escalation team.</p>
        <h3>Separate implementation from ongoing costs</h3>
        <p>Our scoped AI-feature ballpark is CAD ${PROJECT_PRICING.ai.low.toLocaleString('en-CA')} to ${PROJECT_PRICING.ai.high.toLocaleString('en-CA')}. It is a starting range for a defined feature, not a quote for every LLM platform; integrations, data preparation, security, evaluation, and deployment can change the scope. Budget separately for recurring model usage, hosting, and maintenance, including monitoring, content updates, and testing as models or sources change. See our <a href="/blog/ai-development-cost-canada">AI development cost guide for Canada</a> for more cost factors.</p>
        <p>For an example of related ML recommendation work, explore our <a href="/case-studies/real-estate-portal">real estate portal case study</a>. Bring your requirements to <a href="/contact">discuss your LLM integration project</a> and develop a project-specific estimate.</p>
      </div>
    </section>
  );
}

export default function PageClient() {
  return (
    <SubServicePageTemplate
      parent={{ href: "/services/ai-ml", label: "AI & Machine Learning" }}
      name="LLM Integration"
      copy={{ badge: "AI & MACHINE LEARNING", title: <>LLM Integration <span style={{ color: 'var(--brand)' }}>Experts</span></>, desc: <>We integrate GPT-4, Claude, Gemini, and open-source LLMs into your products and workflows — from simple API wrappers to production-grade RAG pipelines and fine-tuned custom models.</> }}
      stats={stats}
      services={services}
      steps={steps}
      faqs={faqs}
      capabilitiesTitle="Our LLM Capabilities"
      buyerContent={<BuyerContent />}
    />
  );
}
