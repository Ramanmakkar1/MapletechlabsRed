import SubServicePageTemplate from '@/components/page/SubServicePageTemplate';

const stats = [
  { value: '20+', label: 'WebXR Experiences Built' },
  { value: 'Browser-Native', label: 'AR & VR Delivery' },
  { value: 'Zero', label: 'App Install Barrier' },
  { value: 'Three.js & A-Frame', label: 'Expert Team' },
];

const services = [
  { icon: '🌐', title: 'WebXR API Development', desc: 'Native WebXR Device API integration for immersive AR and VR sessions directly in the browser — no plugins, no app downloads, maximum reach.' },
  { icon: '🔷', title: 'Three.js & A-Frame Scenes', desc: 'High-performance 3D scenes built with Three.js for programmatic control or A-Frame for declarative HTML-like markup. Both optimised for immersive WebXR sessions.' },
  { icon: '📱', title: 'Browser-Based AR', desc: 'AR overlays via WebXR AR Session — place 3D objects on real-world surfaces through the browser camera on supported Android devices and iOS via compatible apps.' },
  { icon: '🥽', title: 'Immersive VR in Browser', desc: 'Full 6DOF VR experiences delivered through the browser for Meta Quest, PC VR headsets, and desktop preview modes — zero friction entry for users.' },
  { icon: '⚡', title: 'WebGL Performance Optimisation', desc: 'Profiling and optimisation of WebGL render pipelines — draw call batching, texture compression, level of detail, and shader optimisation for smooth browser XR.' },
  { icon: '🔬', title: 'Cross-Device WebXR Testing', desc: 'Systematic testing across Chrome Android, Meta Quest Browser, Safari (iOS WebXR polyfill), and desktop browsers to ensure consistent experience quality.' },
];

const steps = [
  { num: '01', title: 'Experience Design', desc: 'We define the interaction model, content hierarchy, and performance budget based on target devices. WebXR experiences are designed for zero-friction access from day one.' },
  { num: '02', title: '3D Scene Build', desc: 'Our 3D team constructs optimised WebGL scenes — geometry, materials, lighting, and audio — built for browser performance constraints rather than native app luxury.' },
  { num: '03', title: 'WebXR Integration', desc: 'WebXR Device API integration for AR hit-testing, VR session management, controller input, hand tracking, and DOM overlay for hybrid 2D/3D interfaces.' },
  { num: '04', title: 'Cross-Device Testing', desc: 'Live testing on Meta Quest Browser, Chrome Android, iOS polyfill, and desktop. We validate frame rates, interaction fidelity, and graceful degradation on unsupported devices.' },
];

const faqs = [
  {
    q: 'What is WebXR and how is it different from native AR/VR?',
    a: 'WebXR is a browser API that enables immersive AR and VR experiences to run directly in a web browser — no app download required. Native AR/VR apps (ARKit, ARCore, Unity, Unreal) are installed from an app store and access platform APIs directly. WebXR trades some performance and device feature access for zero friction distribution. Users click a URL and they\'re in XR.',
  },
  {
    q: 'Which browsers support WebXR?',
    a: 'Chrome for Android and the Meta Quest Browser have the best WebXR AR and VR support. Firefox Reality (Quest) also supports WebXR. Safari on iOS does not natively support WebXR, but the WebXR Viewer app from Mozilla provides AR capabilities. Desktop Chrome and Edge support WebXR VR with connected headsets. We build with progressive enhancement so non-XR browsers receive a 3D preview fallback.',
  },
  {
    q: 'What are the performance limitations of WebXR?',
    a: 'WebXR runs inside a browser\'s JavaScript and WebGL sandbox, which means higher CPU overhead than native apps, limited access to platform-specific optimisations, and no direct GPU memory management. For most AR overlays and mid-complexity VR scenes these limits are acceptable. For highly complex simulations or AAA-quality visuals, native development is typically more appropriate. We\'ll advise which approach fits your requirements.',
  },
  {
    q: 'Can WebXR work on mobile phones?',
    a: 'Yes. WebXR AR is supported on Android devices running Chrome 81+, enabling real-world surface detection and 3D object placement through the browser camera. iOS support is more limited — native WebXR AR requires the Mozilla WebXR Viewer. WebXR VR (headset sessions) works on Meta Quest Browser and mobile VR viewers. We design experiences that degrade gracefully to 3D on unsupported mobile browsers.',
  },
  {
    q: 'Should I choose WebXR or a native app for my use case?',
    a: 'Choose WebXR when zero-friction distribution matters most — marketing campaigns, product configurators, event experiences, and demos where users won\'t install an app. Choose native AR/VR when you need maximum performance, access to platform-specific hardware (LiDAR, eye tracking, haptics), app store monetisation, or offline capability. Many projects benefit from a WebXR MVP that validates the concept before a native build.',
  },
];

export default function PageClient() {
  return (
    <SubServicePageTemplate
      parent={{ href: "/services/ar-vr", label: "AR &amp; VR Development" }}
      name="WebXR Development"
      copy={{ badge: "AR &amp; VR DEVELOPMENT", title: <>WebXR That Runs <span style={{ color: 'var(--brand)' }}>In Any Browser</span></>, desc: <>We build browser-native AR and VR experiences using the WebXR API, Three.js, and A-Frame — zero app install required, maximum audience reach.</> }}
      stats={stats}
      services={services}
      steps={steps}
      faqs={faqs}
      capabilitiesTitle="Our Capabilities"
    />
  );
}
