import SubServicePageTemplate from '@/components/page/SubServicePageTemplate';

const stats = [
  { value: '80+', label: 'AWS Environments' },
  { value: '$2M+', label: 'Cloud Cost Saved' },
  { value: 'AWS', label: 'Certified Architects' },
  { value: '99.99%', label: 'Uptime Achieved' },
];

const services = [
  { icon: '🏗️', title: 'AWS Solution Architecture', desc: 'End-to-end AWS solution design tailored to your workload — selecting the right services, sizing resources, and planning for growth.' },
  { icon: '🌍', title: 'Multi-Region & HA Design', desc: 'Highly available, fault-tolerant architectures with multi-region failover, Route 53 health checks, and cross-region replication.' },
  { icon: '💰', title: 'Cost Optimisation & Reserved Instances', desc: 'Rightsizing compute, implementing Savings Plans, and architecting for cost efficiency without sacrificing performance or reliability.' },
  { icon: '🔒', title: 'Security & IAM Design', desc: 'Least-privilege IAM policies, SCPs, VPC design, WAF configuration, and AWS Security Hub integration for defence in depth.' },
  { icon: '📊', title: 'Data Lake & Analytics Architecture', desc: 'Scalable data lake architectures using S3, Glue, Athena, Redshift, and Lake Formation for analytics and ML workloads.' },
  { icon: '🚚', title: 'Migration to AWS', desc: 'Lift-and-shift and re-architecture migrations from on-premise or other clouds, including cutover planning and rollback strategies.' },
];

const steps = [
  { num: '01', title: 'Architecture Assessment', desc: 'We review your existing infrastructure, workloads, and requirements against the AWS Well-Architected Framework to identify gaps and opportunities.' },
  { num: '02', title: 'Design & Proposal', desc: 'A detailed architecture design is produced with service selection rationale, cost estimates, and a phased implementation plan.' },
  { num: '03', title: 'Build & Configure', desc: 'Infrastructure is provisioned using Terraform or AWS CDK, with all configuration managed as code and peer-reviewed before deployment.' },
  { num: '04', title: 'Handover & Training', desc: 'Full documentation is delivered alongside training sessions for your team, ensuring you can operate and evolve the architecture independently.' },
];

const faqs = [
  { q: 'Which AWS services do you specialise in?', a: 'We have deep expertise across compute (EC2, ECS, EKS, Lambda), storage (S3, EFS, RDS, DynamoDB), networking (VPC, CloudFront, Route 53, ALB), security (IAM, KMS, WAF, Shield), and analytics (Redshift, Glue, Athena, Kinesis). We are AWS-certified across Solutions Architect Associate, Professional, and Specialty tracks.' },
  { q: 'How do you optimise AWS costs?', a: 'Cost optimisation starts with rightsizing — matching instance types to actual workload requirements. We then apply Savings Plans or Reserved Instances for predictable workloads, implement auto-scaling to eliminate idle capacity, move cold data to S3 Glacier, and set up AWS Cost Explorer and budget alerts for ongoing visibility.' },
  { q: 'Multi-region vs single-region — which do I need?', a: 'Single-region with multi-AZ is sufficient for most applications and achieves 99.99% availability. Multi-region is warranted when you need sub-50ms latency globally, strict data residency compliance in multiple geographies, or zero-RPO disaster recovery. It adds significant complexity and cost, so the business justification must be clear.' },
  { q: 'How do you migrate from on-premise to AWS?', a: 'We follow a phased migration approach: discovery and dependency mapping, wave planning, proof-of-concept migration of a low-risk workload, then progressive migration of remaining workloads. We use AWS Migration Hub, Application Migration Service (MGN), and Database Migration Service (DMS) depending on the workload type.' },
  { q: 'AWS vs Azure vs GCP — which cloud should I use?', a: 'AWS offers the broadest service catalogue and largest ecosystem — it\'s the default choice for most greenfield workloads. Azure is preferable for organisations heavily invested in Microsoft (Active Directory, .NET, Office 365). GCP excels for data analytics and ML workloads (BigQuery, Vertex AI). We work across all three and can advise based on your specific requirements.' },
];

export default function PageClient() {
  return (
    <SubServicePageTemplate
      parent={{ href: "/services/cloud-devops", label: "Cloud & DevOps" }}
      name="AWS Architecture"
      copy={{ badge: "CLOUD & DEVOPS", title: <>AWS Architecture Built for <span style={{ color: 'var(--brand)' }}>Scale & Resilience</span></>, desc: <>Expert AWS solution architects who design, build, and optimise cloud environments that are secure, cost-efficient, and ready for any scale.</> }}
      stats={stats}
      services={services}
      steps={steps}
      faqs={faqs}
      capabilitiesTitle="Our Capabilities"
    />
  );
}
