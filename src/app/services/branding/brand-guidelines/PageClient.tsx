import SubServicePageTemplate from '@/components/page/SubServicePageTemplate';

const stats = [
  { value: '150+', label: 'Brand guidelines created' },
  { value: '2–2000', label: 'Team sizes served' },
  { value: 'Figma & PDF', label: 'Dual format delivery' },
  { value: 'Lifetime', label: 'Reference document value' },
];

const services = [
  { icon: '✅', title: 'Logo Usage Rules', desc: 'Clear documentation of correct and incorrect logo usage — spacing rules, minimum sizes, approved colour variations, and prohibited treatments to protect brand consistency.' },
  { icon: '🎨', title: 'Colour System Documentation', desc: 'Complete colour specifications for every brand colour in HEX, RGB, CMYK, and Pantone — with usage rules, hierarchy, and accessible combinations documented for every application.' },
  { icon: '🔤', title: 'Typography Guidelines', desc: 'Typography system documentation covering font families, weights, sizes, line heights, and hierarchy rules for headings, body, captions, and UI across digital and print contexts.' },
  { icon: '📸', title: 'Photography & Imagery Style', desc: 'Art direction guidelines defining your brand\'s photographic aesthetic — subject matter, composition, colour grading, mood, and what to avoid — ensuring visual consistency across all imagery.' },
  { icon: '💬', title: 'Voice & Tone Guide', desc: 'Written guidelines defining how your brand communicates — personality traits, vocabulary, sentence structure, and tone adjustments for different contexts such as social, formal comms, and advertising.' },
  { icon: '📐', title: 'Digital & Print Application Examples', desc: 'Real-world application examples showing how the brand system applies to business cards, email signatures, social templates, presentations, and advertising — giving teams immediate practical reference.' },
];

const steps = [
  { num: '01', title: 'Brand Asset Audit', desc: 'We audit all existing brand assets — logos, colours, fonts, photography — documenting what exists, what is inconsistent, and what needs to be created or standardised.' },
  { num: '02', title: 'Guidelines Structure', desc: 'We define the scope and structure of your guidelines document, mapping all sections required and aligning with your team on depth, format, and primary use cases.' },
  { num: '03', title: 'Documentation', desc: 'Our designers write and design the full guidelines document — clear, beautifully laid out, and written so that non-designers can apply the rules without ambiguity.' },
  { num: '04', title: 'Figma Library Setup', desc: 'A comprehensive Figma component library is built alongside the guidelines, giving your design and development teams a live, editable single source of truth for all brand components.' },
];

const faqs = [
  { q: 'What is included in brand guidelines?', a: 'Our standard brand guidelines cover logo usage, colour system, typography, photography and imagery style, iconography, voice and tone, and application examples across key digital and print touchpoints. The scope is tailored to your needs and the complexity of your identity system.' },
  { q: 'What format are guidelines delivered in?', a: 'We deliver brand guidelines in both an interactive Figma file (for design teams) and a polished PDF (for wider team distribution). Both formats are updated simultaneously and branded to match your identity.' },
  { q: 'How do we keep guidelines up to date?', a: 'The Figma file serves as your living brand document — easily updatable as your brand evolves. We build it with versioning in mind, and we offer ongoing brand management retainers for clients who update their identity regularly. The PDF can be regenerated from Figma at any time.' },
  { q: 'Do you create a Figma component library?', a: 'Yes — Figma library setup is included in our brand guidelines packages. We build a fully structured component library including colours, text styles, logos, icons, and core UI components, all connected to your brand variables for easy global updates.' },
  { q: 'Can you create guidelines for an existing brand?', a: 'Absolutely. Many of our guidelines projects are for established brands that have grown organically without a formal system. We audit what exists, standardise and codify the current identity, fill gaps, and create a definitive guidelines document from your existing assets.' },
];

export default function PageClient() {
  return (
    <SubServicePageTemplate
      parent={{ href: "/services/branding", label: "Branding & Identity" }}
      name="Brand Guidelines"
      copy={{ badge: "BRANDING & IDENTITY", title: <>Guidelines That <span style={{ color: 'var(--brand)' }}>Protect Your Brand</span></>, desc: <>Comprehensive brand guidelines in Figma and PDF that give every team member, agency, and partner the rules they need to represent your brand consistently and confidently.</> }}
      stats={stats}
      services={services}
      steps={steps}
      faqs={faqs}
      capabilitiesTitle="Our Capabilities"
    />
  );
}
