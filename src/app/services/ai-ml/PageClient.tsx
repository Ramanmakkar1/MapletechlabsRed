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

export default function PageClient() {
  return (
    <ServicePageTemplate
      slug="ai-ml"
      name="AI & Machine Learning"
      copy={{ badge: "AI & Machine Learning", title: <>AI That Moves Your<br /><span style={{ color: 'var(--brand)' }}>Business Forward.</span></>, desc: <>Custom AI models, intelligent automation, and LLM-powered products — built for production, not demos.</> }}
      stats={stats}
      services={services}
      steps={steps}
      techCategories={techCategories}
      industries={industries}
    />
  );
}
