import ServicePageTemplate from '@/components/page/ServicePageTemplate';

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
      name="AI & Machine Learning"
      copy={{ badge: "AI & Machine Learning", title: <>AI Development<br />That Moves Your <span style={{ color: 'var(--brand)' }}>Business Forward.</span></>, desc: <>An AI development company in Canada building custom AI models, LLM-powered products and intelligent automation — engineered for production, not demos. For a rough cost estimate, see our <a href="/blog/ai-development-cost-canada">AI development cost guide</a>.</> }}
      stats={stats}
      services={services}
      steps={steps}
      techCategories={techCategories}
      industries={industries}
      faqs={faqs}
    />
  );
}
