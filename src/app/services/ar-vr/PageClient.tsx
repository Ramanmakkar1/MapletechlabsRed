import ServicePageTemplate from '@/components/page/ServicePageTemplate';

const stats = [
  { value: '60+', label: 'XR Apps Launched' },
  { value: 'Meta', label: 'Quest Partner' },
  { value: 'WebXR', label: 'Certified' },
  { value: '4.8★', label: 'User Rating' },
];

const services = [
  { icon: '📱', title: 'Mobile AR', desc: 'ARKit and ARCore experiences for iOS and Android — product visualisation, navigation overlays, face filters and interactive AR campaigns.' },
  { icon: '🥽', title: 'VR Applications', desc: 'Meta Quest, PCVR and standalone headset applications for training, simulation, entertainment and enterprise use cases.' },
  { icon: '🌐', title: 'WebXR Experiences', desc: 'Browser-based AR and VR that works without an app download — accessible on any device with a standards-compliant browser.' },
  { icon: '🔮', title: 'Spatial Computing', desc: 'Apple Vision Pro applications and spatial interfaces that blend digital content seamlessly with the physical world.' },
  { icon: '🏭', title: 'Industrial AR', desc: 'Enterprise AR for manufacturing, maintenance and field service — step-by-step overlay instructions, remote assistance and quality inspection.' },
  { icon: '📣', title: 'AR Marketing', desc: 'Snapchat Lenses, Instagram filters, AR product try-ons and immersive ad campaigns that drive engagement and conversion.' },
];

const steps = [
  { num: '01', title: 'Concept', desc: 'We define the XR experience — use case, platform selection, target hardware and the specific real-world problem or opportunity being addressed.' },
  { num: '02', title: '3D Design', desc: 'Environment design, 3D asset creation, interaction design and UX prototyping. We build the visual and spatial language before writing a line of code.' },
  { num: '03', title: 'Development', desc: 'Unity or Unreal Engine builds, ARKit/ARCore integration, WebXR implementation — engineered for performance on target hardware and network conditions.' },
  { num: '04', title: 'Deploy', desc: 'App store submission, enterprise MDM deployment or web hosting — plus performance monitoring, user feedback loops and iterative updates post-launch.' },
];

const results = [
  { value: '10x', label: 'User Engagement', sub: 'vs. standard 2D equivalents' },
  { value: '85%', label: 'Training Retention', sub: 'industrial AR vs. manual training' },
  { value: '3x', label: 'Commerce Conversion', sub: 'AR product try-on vs. static images' },
];

const faqs = [
  { q: 'What platforms do you build XR experiences for?', a: 'We develop for iOS (ARKit), Android (ARCore), Meta Quest 2/3/Pro, Apple Vision Pro, HTC Vive, Valve Index, web browsers (WebXR) and Snapchat/Instagram AR filters. Platform selection is guided by your audience and use case.' },
  { q: 'Do users need a headset to experience your AR products?', a: 'Not necessarily. Mobile AR works on any modern iPhone or Android device using the camera. WebXR works in a browser. VR and spatial computing experiences require headsets, but we can build progressive experiences that scale across device capabilities.' },
  { q: 'How long does an AR/VR project take to build?', a: 'Simple mobile AR filters take 2–4 weeks. Full mobile AR apps typically 8–16 weeks. Enterprise VR training simulations 12–20 weeks. Apple Vision Pro applications 10–18 weeks. Timeline depends heavily on 3D asset complexity and interaction depth.' },
  { q: 'Can you create the 3D assets and environments, or do we provide them?', a: 'We have an in-house 3D team that can create assets from scratch, work from reference images, or optimise assets you already have. We handle full 3D production including modelling, texturing, rigging and animation.' },
  { q: 'What is the ROI case for investing in AR/VR?', a: 'The strongest ROI cases are AR commerce (reduced returns, higher conversion), enterprise training (reduced training time and errors), and AR marketing (higher engagement and dwell time). We help you build the business case before scoping any project.' },
];

export default function PageClient() {
  return (
    <ServicePageTemplate
      slug="ar-vr"
      name="AR & VR Development"
      copy={{ badge: "AR & VR Development", title: <>AR/VR Development That <span style={{ color: 'var(--brand)' }}>Wows.</span></>, desc: <>An AR/VR development company in Canada building augmented, virtual and mixed reality applications for mobile, headset and web — engineered for real-world impact.</> }}
      stats={stats}
      services={services}
      steps={steps}
      results={results}
      faqs={faqs}
      servicesTitle="XR Development Services"
    />
  );
}
