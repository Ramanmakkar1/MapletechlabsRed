import Link from 'next/link';
import SubServicePageTemplate from '@/components/page/SubServicePageTemplate';

const stats = [
  { value: '50+', label: 'Predictive Models Built' },
  { value: '89%', label: 'Avg Forecast Accuracy' },
  { value: '$30M+', label: 'Revenue Impact Generated' },
  { value: '4wk', label: 'To First Working Model' },
];

const services = [
  { icon: '📈', title: 'Demand Forecasting', desc: 'Predict future demand at SKU, location, and channel level using historical sales, seasonality, promotions, and external signals. Reduce inventory costs while maintaining service levels.' },
  { icon: '🚪', title: 'Churn Prediction', desc: 'Identify customers at risk of leaving before they do. We build behavioral churn models that score your entire customer base daily, enabling targeted retention campaigns with measurable ROI.' },
  { icon: '🛡️', title: 'Fraud Detection', desc: 'Real-time fraud scoring for transactions, account creation, and insurance claims. Our models learn from your fraud patterns and adapt to new attack vectors continuously.' },
  { icon: '💲', title: 'Price Optimisation', desc: 'Dynamic pricing models that maximize revenue and margin by predicting price elasticity, competitor moves, and demand sensitivity. Used in e-commerce, SaaS, travel, and retail.' },
  { icon: '🎁', title: 'Recommendation Engines', desc: 'Collaborative and content-based filtering systems that drive product discovery, upsell, and cross-sell. Personalize experiences across email, web, and app touchpoints at scale.' },
  { icon: '⏱️', title: 'Time-Series Forecasting', desc: 'Advanced forecasting for any time-indexed metric — energy consumption, website traffic, sales pipelines, financial markets. We handle seasonality, trend, and external regressors.' },
];

const steps = [
  { num: '01', title: 'Data Audit', desc: 'We assess the quality, completeness, and history of your data sources, identify gaps, and define a data strategy — including what additional data collection or enrichment will improve model performance.' },
  { num: '02', title: 'Feature Engineering', desc: 'The most impactful phase. We transform raw data into predictive signals — lag features, rolling aggregates, external enrichment (weather, economics), and domain-specific derived metrics.' },
  { num: '03', title: 'Model Training', desc: 'We train, validate, and compare multiple model families (XGBoost, LightGBM, neural networks, Prophet) using rigorous cross-validation to select the most accurate and stable approach for your data.' },
  { num: '04', title: 'Business Integration', desc: 'We deploy models to production with APIs, integrate outputs into your dashboards and workflows, set up automated retraining schedules, and configure drift monitoring to maintain accuracy over time.' },
];

const faqs = [
  { q: 'How much historical data do I need to build a predictive model?', a: 'For most use cases, 1–2 years of historical data is a solid starting point. Demand forecasting with strong seasonality benefits from 2–3 years to capture seasonal cycles. Fraud detection can work with as little as 6 months if fraud events are frequent enough. We assess your data during the audit phase and recommend strategies to work effectively with what you have.' },
  { q: 'How accurate will the predictions actually be?', a: 'Accuracy varies by problem type and data quality. Our demand forecasting models typically achieve 80–92% accuracy (MAPE basis). Churn models typically achieve 75–90% AUC. No model is 100% accurate — the goal is to be significantly better than current heuristics or manual judgment. We always benchmark against your existing approach and report results honestly before deployment.' },
  { q: 'How do models stay accurate as business conditions change over time?', a: 'Model drift is real, and we design for it from day one. We implement automated monitoring that tracks prediction accuracy over time and alerts when drift is detected. Retraining pipelines are scheduled (weekly or monthly) to incorporate new data. For high-stakes models, we implement champion-challenger frameworks where new model versions are validated before replacing the incumbent.' },
  { q: 'When should I use an ML model versus a rules-based system?', a: 'Rules-based systems are better when your logic is well-understood, rarely changes, and needs to be fully explainable (e.g., regulatory compliance). ML models win when patterns are complex, data volume is high, conditions change frequently, or accuracy gains are commercially significant. In practice, many production systems combine both — ML for prediction, rules for hard constraints.' },
  { q: 'How do I explain AI-driven decisions to stakeholders and regulators?', a: 'We build explainability into every model using SHAP values, which show exactly which features drove each prediction. For regulated industries (finance, insurance, healthcare), we choose inherently interpretable models (logistic regression, decision trees) when accuracy trade-offs are acceptable. We also build business-facing dashboards that translate model outputs into plain-language explanations for non-technical audiences.' },
];

function BuyerContent() {
  return (
    <section aria-labelledby="predictive-buyer-guide" style={{ padding: 'var(--section-y) 0', background: 'var(--surface-alt)' }}>
      <div className="cb-container" style={{ color: 'var(--body)', lineHeight: 1.7 }}>
        <h2 id="predictive-buyer-guide">Scope and deliverables for predictive analytics</h2>
        <p className="lede">Most engagements start with one primary outcome—forecasting demand, scoring churn risk, or powering recommendations—and expand once the first model is validated in production. The sections below describe typical inputs you bring and what we deliver for each scope; your discovery session turns that into a written plan tied to your data and systems.</p>
        <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 24, margin: '28px 0' }}>
          <article>
            <h3>Demand forecasting</h3>
            <p><strong>Bring:</strong> historical sales or usage at the grain you need (SKU, store, channel, region), promotion and pricing history, known stockouts or data gaps, and how forecasts will be consumed (replenishment, staffing, finance).</p>
            <p><strong>Deliverables:</strong> a data-readiness report, baseline comparison against your current method, a validation report on held-out periods, forecast outputs integrated via API or scheduled files, and a monitoring handover with drift alerts and retraining guidance.</p>
          </article>
          <article>
            <h3>Churn scoring</h3>
            <p><strong>Bring:</strong> customer or subscription identifiers, tenure and billing events, product usage signals, support or cancellation reasons where available, and examples of customers you already consider at risk.</p>
            <p><strong>Deliverables:</strong> data-readiness and label-definition notes, baseline comparison to rules or heuristics you use today, a validation report with agreed ranking metrics, daily or batch scoring integrated into CRM or marketing tools, and monitoring handover for score stability and review queues.</p>
          </article>
          <article>
            <h3>Recommendation systems</h3>
            <p><strong>Bring:</strong> item or content catalog metadata, interaction logs (views, purchases, clicks), business rules (inventory, compliance, exclusions), and the surfaces where recommendations should appear.</p>
            <p><strong>Deliverables:</strong> data-readiness assessment, offline evaluation against a baseline (popular items or current rules), a validation report on representative users or sessions, scoring or ranking integration for web or app endpoints, and monitoring handover for coverage, freshness, and feedback loops.</p>
          </article>
        </div>
        <h3>Agree during discovery</h3>
        <p>Before build work starts, align on forecast horizon or scoring window, evaluation metrics that match the decision (not vanity accuracy), the business baseline the model must beat, and acceptance criteria for go-live. We document assumptions and test on representative data; we do not promise fixed accuracy or revenue outcomes in a proposal.</p>
        <p>Budget and timeline depend on data volume, integrations, and governance. See our <Link href="/blog/ai-development-cost-canada">AI development cost guide for Canada</Link> for typical ranges, and review broader <Link href="/services/ai-ml">AI and machine learning services</Link> if you need adjacent work such as LLM features or automation. For recommendation-engine proof, read our <Link href="/case-studies/real-estate-portal">real estate portal case study</Link>, where ML-powered recommendations operate across 850K+ active listings—that project illustrates personalization at scale, not demand forecasting or churn results.</p>
      </div>
    </section>
  );
}

export default function PageClient() {
  return (
    <SubServicePageTemplate
      parent={{ href: "/services/ai-ml", label: "AI & Machine Learning" }}
      name="Predictive Analytics"
      copy={{ badge: "AI & MACHINE LEARNING", title: <>Predictive Analytics That Drive <span style={{ color: 'var(--brand)' }}>Revenue</span></>, desc: <>We build production-grade ML models for demand forecasting, churn prediction, fraud detection, and price optimization — turning your historical data into competitive advantage with measurable business impact.</> }}
      stats={stats}
      services={services}
      steps={steps}
      faqs={faqs}
      capabilitiesTitle="Our Capabilities"
      buyerContent={<BuyerContent />}
    />
  );
}
