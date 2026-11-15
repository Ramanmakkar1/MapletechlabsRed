import Link from 'next/link';
import SubServicePageTemplate from '@/components/page/SubServicePageTemplate';
import { PROJECT_PRICING } from '@/data/pricing';
import { serviceCityPath } from '@/data/serviceCity';

const stats = [
  { value: '40+', label: 'CV Systems Deployed' },
  { value: '99.2%', label: 'Detection Accuracy' },
  { value: 'Real-Time', label: 'Processing Capability' },
  { value: 'Edge & Cloud', label: 'Deployment Options' },
];

const services = [
  { icon: '🎯', title: 'Object Detection & Classification', desc: 'Detect, locate, and classify objects in images and video in real time. We build custom models using YOLO, Detectron2, and vision transformers trained on your specific domain and data.' },
  { icon: '🖼️', title: 'Image Segmentation', desc: 'Pixel-level understanding of scenes with semantic and instance segmentation. Ideal for medical imaging, autonomous systems, satellite imagery analysis, and industrial quality control.' },
  { icon: '🎬', title: 'Video Analytics', desc: 'Extract intelligence from video streams — activity recognition, object tracking, crowd counting, anomaly detection, and behavioral analysis for security, retail, and industrial applications.' },
  { icon: '📝', title: 'OCR & Document Intelligence', desc: 'Extract and structure text from scanned documents, handwriting, receipts, and ID cards using deep learning OCR. Goes beyond text extraction to understand document layout and relationships.' },
  { icon: '🔍', title: 'Quality Inspection Systems', desc: 'Automated visual inspection for manufacturing — detect surface defects, dimensional errors, assembly mistakes, and contamination with superhuman consistency at production line speeds.' },
  { icon: '👤', title: 'Facial Recognition & Biometrics', desc: 'Compliant face detection, recognition, and liveness detection for access control, identity verification, and attendance systems. Built with privacy-by-design and regulatory compliance in mind.' },
];

const steps = [
  { num: '01', title: 'Data Assessment', desc: 'We evaluate your existing image/video data, identify annotation requirements, assess data quality, and determine if additional collection or augmentation is needed to train a reliable model.' },
  { num: '02', title: 'Model Selection', desc: 'We select the optimal architecture — YOLO variants for real-time detection, ViT for high-accuracy classification, SAM for segmentation — and choose between training from scratch or fine-tuning foundation models.' },
  { num: '03', title: 'Training & Validation', desc: 'Rigorous model training with cross-validation, precision/recall optimization, and domain-specific augmentation. We benchmark against your accuracy and latency requirements before signing off.' },
  { num: '04', title: 'Edge / Cloud Deploy', desc: 'Optimized deployment to your target environment — NVIDIA Jetson and Raspberry Pi for edge, or GPU cloud for scale. Model quantization and TensorRT optimization for maximum throughput.' },
];

const faqs = [
  { q: 'How much training data do I need for a computer vision model?', a: 'It varies by task complexity. Simple binary classifiers can work with 500–1,000 labeled images per class. Object detection typically needs 1,000–5,000 annotated images. Complex segmentation may require 10,000+. We always start with a data audit and often use transfer learning from foundation models to dramatically reduce data requirements — sometimes 100–200 examples are enough with the right approach.' },
  { q: 'Should I use real-time or batch processing for my use case?', a: 'Real-time processing (under 100ms latency) is essential for live video surveillance, autonomous systems, and production line inspection. Batch processing is more cost-effective for document analysis, post-event video review, and large-scale image datasets. We match the architecture to your latency and throughput requirements — and design systems that can scale from batch to real-time as needs evolve.' },
  { q: 'Edge vs cloud inference — which is better for my situation?', a: 'Edge inference (on-device) wins when you need ultra-low latency, have bandwidth constraints, or handle sensitive data that can\'t leave the facility. Cloud inference is better for high-complexity models, variable workloads, or when edge hardware costs are prohibitive. Many production systems use both — edge for fast initial detection, cloud for detailed analysis of flagged events.' },
  { q: 'Should I use a custom model or adapt a pre-trained foundation model?', a: 'In most cases, we fine-tune pre-trained models (CLIP, SAM, YOLO) on your data — this gives better accuracy with far less data and training time than building from scratch. Custom architectures from scratch are only justified for highly specialized domains where no suitable foundation model exists. We always benchmark both approaches before committing.' },
  { q: 'How do you handle poor image quality — low light, blur, or noise?', a: 'We apply preprocessing pipelines specifically designed for your imaging conditions: adaptive histogram equalization for low light, deblurring filters, and noise reduction. During training, we augment data with simulated degradation so the model learns robustness. For critical applications, we also recommend hardware improvements (lighting, optics) alongside software solutions.' },
];

const cad = (n: number) => `$${n.toLocaleString('en-CA')}`;
const ai = PROJECT_PRICING.ai;
const cityLinks = [['Edmonton', 'edmonton'], ['Calgary', 'calgary'], ['Toronto', 'toronto'], ['Vancouver', 'vancouver']] as const;
const h3 = { fontSize: 'var(--fs-h4)', margin: '0 0 8px', color: 'var(--ink)' } as const;

function BuyerContent() {
  return (
    <section style={{ padding: 'var(--section-y) 0', borderTop: '1px solid var(--line)' }}>
      <div className="cb-container" style={{ lineHeight: 1.7, color: 'var(--body)' }}>
        <h2 style={{ fontSize: 'var(--fs-h3)', margin: '0 0 12px' }}>Computer vision development for Canadian businesses</h2>
        <p style={{ margin: '0 0 24px' }}>
          Computer vision turns cameras and images into decisions: spotting defects on a production line, counting people or stock, reading text from documents and IDs, and flagging safety incidents in real time. Mapletech Labs has deployed 40+ CV systems for Canadian teams, and we build each one around your data, your accuracy target and the place it has to run — on a device at the edge or in the cloud. Start with our <Link href="/services/ai-ml">AI and machine learning services</Link> if you are still deciding which AI use case to fund first, or see <Link href="/services/ai-ml/predictive-analytics">predictive analytics</Link> when the question is forecasting rather than vision.
        </p>
        <div className="grid grid--2">
          <div>
            <h3 style={h3}>Budget guidance</h3>
            <p>
              Our published starting range for a first AI feature is {cad(ai.low)}–{cad(ai.high)} CAD over {ai.weeksLow}–{ai.weeksHigh} weeks. That is planning guidance for a focused first model, not a fixed computer vision quote: custom models are scoped after discovery, once we know your data volume, annotation needs, accuracy target and deployment hardware. The{' '}
              <Link href="/blog/ai-development-cost-canada">Canadian AI development cost guide</Link> explains what moves the number.
            </p>
            <p>
              Working with a local team? Explore AI development in{' '}
              {cityLinks.map(([name, slug], i) => (
                <span key={slug}>{i > 0 && (i === cityLinks.length - 1 ? ' and ' : ', ')}<Link href={serviceCityPath('ai-ml', slug)}>{name}</Link></span>
              ))}.
            </p>
          </div>
          <div>
            <h3 style={h3}>Edge or cloud?</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse', margin: '0 0 16px' }}>
              <caption style={{ textAlign: 'left', paddingBottom: 8, color: 'var(--body)' }}>Where to run inference for a computer vision system</caption>
              <thead>
                <tr>
                  <th scope="col" style={{ textAlign: 'left', padding: '8px 10px', borderBottom: '1px solid var(--line)' }}>Option</th>
                  <th scope="col" style={{ textAlign: 'left', padding: '8px 10px', borderBottom: '1px solid var(--line)' }}>Best for</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" style={{ textAlign: 'left', padding: '8px 10px', borderBottom: '1px solid var(--line)' }}>Edge</th>
                  <td style={{ padding: '8px 10px', borderBottom: '1px solid var(--line)' }}>Ultra-low latency, limited bandwidth or sensitive footage that must stay on site — NVIDIA Jetson or Raspberry Pi hardware.</td>
                </tr>
                <tr>
                  <th scope="row" style={{ textAlign: 'left', padding: '8px 10px' }}>Cloud</th>
                  <td style={{ padding: '8px 10px' }}>Large or variable workloads, complex models and centralised analysis across many cameras or sites.</td>
                </tr>
              </tbody>
            </table>
            <p>
              Ready to scope a system? <Link href="/contact">Contact us</Link> with your use case and we will reply within one working day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PageClient() {
  return (
    <SubServicePageTemplate
      parent={{ href: "/services/ai-ml", label: "AI & Machine Learning" }}
      name="Computer Vision"
      copy={{ badge: "AI & MACHINE LEARNING", title: <>Computer Vision <span style={{ color: 'var(--brand)' }}>Systems</span></>, desc: <>We build custom computer vision solutions — from real-time object detection and quality inspection to video analytics and document intelligence — deployed to edge devices or cloud at production scale.</> }}
      stats={stats}
      services={services}
      steps={steps}
      faqs={faqs}
      capabilitiesTitle="Our Capabilities"
      buyerContent={<BuyerContent />}
    />
  );
}
