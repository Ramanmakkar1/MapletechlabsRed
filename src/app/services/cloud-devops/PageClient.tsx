import ServicePageTemplate from '@/components/page/ServicePageTemplate';

const stats = [
  { value: '99.99%', label: 'Uptime Delivered' },
  { value: '300+', label: 'Cloud Migrations' },
  { value: '70%', label: 'Avg Cost Reduction' },
  { value: 'SOC II', label: 'Compliant' },
];

const services: { title: string; tag: string; desc: string; chips?: string[] }[] = [
  {
    title: 'Cloud Architecture & Migration',
    tag: 'Multi-Cloud',
    desc: 'AWS, GCP and Azure architecture designed for resilience, cost efficiency and compliance. Full migration with zero data loss.',
    chips: ['AWS', 'Google Cloud', 'Azure', 'Terraform', 'Pulumi'],
  },
  {
    title: 'CI/CD & Platform Engineering',
    tag: 'DevOps',
    desc: 'End-to-end pipelines with automated testing, security scanning, container orchestration and self-healing infrastructure.',
    chips: ['Kubernetes', 'Docker', 'GitHub Actions', 'ArgoCD', 'Prometheus'],
  },
  { title: 'Infrastructure as Code', tag: 'IaC', desc: 'Fully declarative, version-controlled infrastructure with Terraform, Pulumi and AWS CDK.' },
  { title: 'Security & Compliance', tag: 'DevSecOps', desc: 'Shift-left security scanning, secrets management and continuous compliance for SOC II and ISO 27001.' },
  { title: 'Cost Optimisation', tag: 'FinOps', desc: 'Right-sizing, reserved instance planning and resource tagging to cut cloud bills without cutting corners.' },
  { title: 'Observability', tag: 'Monitoring', desc: 'Full-stack metrics, tracing and alerting with sub-minute incident detection and automated runbooks.' },
];

const steps = [
  {
    num: '01',
    title: 'Audit',
    desc: 'Deep assessment of your current infrastructure: cost analysis, security posture, reliability gaps and compliance status.',
    deliverables: ['Architecture Diagram', 'Cost Breakdown', 'Security Report', 'Gap Analysis'],
    duration: '1–2 weeks',
  },
  {
    num: '02',
    title: 'Architecture',
    desc: 'Target-state architecture design with multi-region redundancy, auto-scaling policies and disaster recovery runbooks.',
    deliverables: ['Target Architecture', 'DR Plan', 'Scaling Policy', 'Cost Projection'],
    duration: '1–2 weeks',
  },
  {
    num: '03',
    title: 'Migration',
    desc: 'Phased migration with blue-green deployments, database replication sync and zero-downtime DNS cutover.',
    deliverables: ['Migration Runbook', 'Data Sync Plan', 'Rollback Plan', 'Cutover Checklist'],
    duration: '2–8 weeks',
  },
  {
    num: '04',
    title: 'Automation',
    desc: 'Full IaC coverage, CI/CD pipelines, automated testing gates, security scanning and self-healing alert responses.',
    deliverables: ['IaC Codebase', 'CI/CD Pipelines', 'Security Gates', 'Runbook Automation'],
    duration: '2–4 weeks',
  },
  {
    num: '05',
    title: 'Optimise',
    desc: 'Continuous cost optimisation, performance tuning and compliance reporting. Monthly FinOps reviews included.',
    deliverables: ['FinOps Report', 'Performance Baselines', 'Compliance Dashboard', 'Monthly Reviews'],
    duration: 'Ongoing',
  },
];

const techCategories = [
  { label: 'Cloud', chips: ['AWS', 'Google Cloud', 'Azure', 'Cloudflare', 'Vercel'] },
  { label: 'Containers', chips: ['Kubernetes', 'Docker', 'Helm', 'Istio', 'EKS'] },
  { label: 'IaC', chips: ['Terraform', 'Pulumi', 'Ansible', 'CDK'] },
  { label: 'Observability', chips: ['Prometheus', 'Grafana', 'Datadog', 'OpenTelemetry', 'PagerDuty'] },
];

const industries = [
  { icon: '💳', title: 'FinTech', desc: 'PCI-DSS and SOC II compliant infrastructure built for high-frequency transaction workloads.' },
  { icon: '🏥', title: 'Healthcare', desc: 'HIPAA-compliant cloud architecture with encrypted data pipelines and audit logging.' },
  { icon: '🛒', title: 'E-Commerce', desc: 'Auto-scaling storefronts that handle flash sales and seasonal spikes without a blink.' },
  { icon: '📺', title: 'Media', desc: 'Global CDN distribution, video transcoding pipelines and sub-100ms content delivery.' },
  { icon: '🏢', title: 'Enterprise', desc: 'Hybrid cloud and multi-cloud setups with centralised governance and cost controls.' },
  { icon: '🚀', title: 'Startups', desc: 'Cost-optimised cloud foundations that scale from zero to millions without re-architecture.' },
];

export default function PageClient() {
  return (
    <ServicePageTemplate
      slug="cloud-devops"
      name="Cloud &amp; DevOps"
      copy={{ badge: "Cloud &amp; DevOps", title: <>Infrastructure That<br /><span style={{ color: 'var(--brand)' }}>Never Sleeps.</span></>, desc: <>Cloud architecture, CI/CD pipelines and DevSecOps — engineered for zero downtime, infinite scale and full observability.</> }}
      stats={stats}
      services={services}
      steps={steps}
      techCategories={techCategories}
      industries={industries}
      servicesTitle="Related Services"
    />
  );
}
