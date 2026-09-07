import SubServicePageTemplate from '@/components/page/SubServicePageTemplate';

const stats = [
  { value: '15+', label: 'Industrial AR Deployments' },
  { value: '40%', label: 'Average Error Reduction' },
  { value: 'HoloLens & Magic Leap', label: 'Platforms Supported' },
  { value: '6 Months', label: 'Avg ROI Realisation' },
];

const services = [
  { icon: '🔵', title: 'HoloLens 2 Development', desc: 'Enterprise-grade mixed reality apps for Microsoft HoloLens 2 — using Mixed Reality Toolkit (MRTK), Unity, and Azure Spatial Anchors for persistent, shared AR experiences.' },
  { icon: '📡', title: 'Remote Expert Assistance (AR)', desc: 'AR-powered remote support tools — field workers see live expert annotations overlaid on equipment, reducing downtime and eliminating the need for on-site specialists.' },
  { icon: '🔧', title: 'AR-Guided Assembly & Maintenance', desc: 'Step-by-step AR work instructions overlaid directly on machinery and components. Reduce training time, eliminate paper manuals, and cut assembly errors by up to 40%.' },
  { icon: '🏭', title: 'Digital Twin Visualisation', desc: 'Live 3D digital twin overlays on physical assets — visualise sensor data, component status, and maintenance history spatially anchored to real equipment.' },
  { icon: '📊', title: 'IoT Data Overlay in AR', desc: 'Real-time IoT telemetry — temperature, pressure, vibration, throughput — displayed as spatial AR overlays directly on the machines generating that data.' },
  { icon: '🦺', title: 'Worker Safety AR Applications', desc: 'Hazard zone visualisation, PPE compliance checking, safety procedure guidance, and emergency exit wayfinding — AR applications that protect your workforce on the floor.' },
];

const steps = [
  { num: '01', title: 'Workflow Analysis', desc: 'Our team embeds with your operations team to map current workflows, identify pain points, and quantify the time and error costs that industrial AR can address.' },
  { num: '02', title: 'Use Case Selection', desc: 'We prioritise the highest-ROI use case for a focused pilot — assembly guidance, remote support, or IoT overlay — and define measurable success metrics.' },
  { num: '03', title: 'Pilot Development', desc: 'A working AR pilot is built and deployed in the actual factory environment. Real workers, real equipment, real conditions — tested iteratively until the use case is validated.' },
  { num: '04', title: 'Enterprise Rollout', desc: 'Validated pilots scale to full deployment — device fleet management, MDM integration, training programmes, and ongoing support to ensure enterprise-wide adoption.' },
];

const faqs = [
  {
    q: 'HoloLens vs tablet-based AR for industrial use?',
    a: 'HoloLens 2 wins when workers need both hands free — assembly, maintenance, surgery, and any task where holding a tablet is impractical. It\'s more expensive ($3,500/unit) but delivers true hands-free AR. Tablet-based AR (iPad with ARCore/ARKit) is lower cost, easier to deploy, and sufficient for inspection, training, and reference use cases where the worker can hold a device. We\'ll recommend the right hardware for your specific workflow.',
  },
  {
    q: 'How do you overlay real-time IoT data in AR?',
    a: 'We connect to your existing IoT infrastructure via REST APIs, MQTT, or OPC-UA. The AR app polls or subscribes to live data streams and renders them as spatial overlays anchored to physical asset locations using Azure Spatial Anchors or Vuforia Object Targets. Data refreshes at configurable intervals — typically 1–5 seconds for operational metrics, real-time for safety-critical alerts.',
  },
  {
    q: 'How do you measure ROI of industrial AR?',
    a: 'We establish baseline metrics before the pilot: average task completion time, error rate, rework hours, and training time per new employee. Post-deployment, we measure the same KPIs. Our clients typically see 25–45% reduction in task time, 30–60% reduction in errors, and 50%+ reduction in training time. These translate directly to cost savings that we document in a post-pilot ROI report.',
  },
  {
    q: 'How does connectivity work in factory environments?',
    a: 'Industrial environments often have patchy Wi-Fi and no cellular signal. We design AR apps to function offline-first — all work instructions and 3D content are cached on-device. IoT data overlays and remote expert features require connectivity, which we handle through Wi-Fi dead zone mapping and optional private 5G or LTE network integration. Azure Edge and on-premise server options are available for air-gapped facilities.',
  },
  {
    q: 'How do you train workers to use AR tools?',
    a: 'We design AR tools to be intuitive enough that formal training is minimal — the AR guidance itself is the training. For initial rollout, we provide train-the-trainer sessions, in-app onboarding flows, and video tutorial content. We also build AR-based training modules for the tools themselves, so workers learn the system in the same medium they\'ll use it. Adoption is tracked through usage analytics built into every deployment.',
  },
];

export default function PageClient() {
  return (
    <SubServicePageTemplate
      parent={{ href: "/services/ar-vr", label: "AR &amp; VR Development" }}
      name="Industrial AR Solutions"
      copy={{ badge: "AR &amp; VR DEVELOPMENT", title: <>Industrial AR That <span style={{ color: 'var(--brand)' }}>Transforms Operations</span></>, desc: <>We build enterprise-grade AR solutions for manufacturing, maintenance, and industrial operations — delivering measurable ROI through HoloLens 2, Magic Leap, and tablet AR deployments.</> }}
      stats={stats}
      services={services}
      steps={steps}
      faqs={faqs}
      capabilitiesTitle="Our Capabilities"
    />
  );
}
