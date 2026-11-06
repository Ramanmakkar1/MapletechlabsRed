import SubServicePageTemplate from '@/components/page/SubServicePageTemplate';
import Link from 'next/link';

const stats = [
  { value: '50+', label: 'Design Systems Built' },
  { value: '60%', label: 'Faster Feature Delivery' },
  { value: 'Figma +', label: 'Storybook' },
  { value: '1000+', label: 'Engineers Using Our Systems' },
];

const services = [
  { icon: '🧩', title: 'Component Library Design', desc: 'A comprehensive set of reusable UI components with all states, variants, and responsive behaviours documented and ready to implement.' },
  { icon: '🎨', title: 'Design Token Architecture', desc: 'Semantic design tokens for colour, spacing, typography, and elevation — creating a single source of truth for design and code.' },
  { icon: '📐', title: 'Figma Component Library', desc: 'A fully organised Figma library with auto-layout components, variants, and interactive states that mirror your production component library.' },
  { icon: '📖', title: 'Storybook Documentation', desc: 'Interactive component documentation in Storybook so engineers can browse, test, and integrate components without guesswork.' },
  { icon: '♿', title: 'Accessibility Standards (WCAG 2.1)', desc: 'Every component built to WCAG 2.1 AA standards with colour contrast ratios, keyboard navigation, ARIA labels, and focus management.' },
  { icon: '🏛️', title: 'Design System Governance', desc: 'Contribution guidelines, versioning strategy, and governance processes so your system stays consistent as teams and products grow.' },
];

const steps = [
  { num: '01', title: 'Audit & Foundation', desc: 'We audit your existing UI for inconsistencies, establish design principles, and define the token architecture that underpins everything.' },
  { num: '02', title: 'Component Design', desc: 'Core components are designed in Figma with all states and variants, reviewed against accessibility standards before any code is written.' },
  { num: '03', title: 'Documentation', desc: 'Components are documented in Storybook with usage guidelines, do/don\'t examples, and prop specifications for engineering teams.' },
  { num: '04', title: 'Team Adoption', desc: 'We run adoption workshops, create onboarding guides, and establish contribution workflows so the system lives on after handoff.' },
];

const faqs = [
  { q: 'When does a company need a design system?', a: 'If you have more than one designer, more than one front-end engineer, or more than one product surface — you need a design system. Signs you\'re overdue: inconsistent button styles across pages, different teams rebuilding the same components, and designers spending time on pixel-pushing instead of product thinking.' },
  { q: 'Figma library vs Storybook — what\'s the difference?', a: 'A Figma component library is for designers — it\'s the source of truth for visual design, containing all components, variants, and tokens in a shared Figma workspace. Storybook is for engineers — it\'s a live, interactive documentation site where developers can view, test, and reference coded components. Both should exist and stay in sync.' },
  { q: 'How do you keep design and code in sync?', a: 'We implement design tokens as a shared layer — defined once and consumed by both Figma (via plugins like Tokens Studio) and code (as CSS variables or JSON). Combined with a defined contribution and review process, this keeps design and engineering aligned as the system evolves.' },
  { q: 'How long does it take to build a design system?', a: 'A foundational design system covering 30-50 core components typically takes eight to twelve weeks. Larger enterprise systems with extensive documentation, multiple themes, and Storybook integration can run sixteen to twenty weeks. The size depends heavily on the number of product surfaces and existing design debt.' },
  { q: 'Can you build on top of an existing system like MUI or Radix?', a: 'Absolutely. Building on top of established component libraries like Material UI, Radix UI, or Shadcn is often the fastest path to a production-ready system. We can theme and extend these libraries to match your brand while inheriting their accessibility foundations — saving significant build time.' },
  { q: 'What drives the cost of a design system?', a: 'We quote a scoped engagement rather than a fixed design-system price, and four factors move the number. Component complexity: a button and a card are quick, while data tables, date pickers, and multi-step forms with validation and every state are not. Platform coverage: web only versus web plus native iOS and Android, and whether you need Figma, code, or both kept in sync. Documentation depth: a prop table versus full usage guidance, do/don\'t examples, and contribution rules. Migration effort: how many live products and legacy components must be replaced before adoption. Discovery confirms these before we quote.' },
  { q: 'What happens at handover, and who owns the system afterwards?', a: 'Handover covers the Figma component library, the coded component package with design tokens, Storybook documentation, and governance material — contribution guidelines, versioning strategy, and release process — plus an adoption workshop for your designers and engineers. Your team owns the system afterwards: repository access, source files, and tokens all transfer to you, so nothing depends on us. Support or extension sprints are optional if you want us to stay involved, but the system runs without us.' },
];

const thCell = { padding: '12px 14px', borderLeft: '1px solid var(--line)', borderBottom: '1px solid var(--line)', verticalAlign: 'top' as const };

const comparison = [
  {
    dimension: 'Intended users',
    figma: 'Designers laying out screens and handing off specs. It holds no runtime code, so engineers are not its audience.',
    coded: 'Engineers building product UI in your framework, and QA testing against real states.',
    system: 'Designers, engineers, and QA working from one shared source — including new hires who onboard from it.',
  },
  {
    dimension: 'Documentation',
    figma: 'Component descriptions, variants, and usage notes inside Figma. Behaviour lives outside the file.',
    coded: 'Storybook pages with props, states, code snippets, and interactive examples.',
    system: 'Both, kept in sync through design tokens: Figma usage guidance, Storybook docs, plus contribution, versioning, and governance rules.',
  },
  {
    dimension: 'Ownership',
    figma: 'The design lead, informally. It needs publishing rights and someone to keep variants current.',
    coded: 'The engineering team, through your repository, review process, and release cycle.',
    system: 'A named owner and contribution process agreed at handover, so the system survives team and roadmap changes.',
  },
];

const procurement = [
  'Component inventory: every component and variant in the deliverable, marked in scope for phase one versus later.',
  'States: default, hover, focus, active, disabled, loading, empty, error, and success states defined per component — not just the happy path.',
  'Themes: colour modes, brand or white-label themes, and the token structure that drives them.',
  'Accessibility coverage: WCAG 2.1 AA conformance per component with contrast, keyboard, and screen-reader evidence you can verify.',
  'Supported products: which frameworks and platforms are covered (web, iOS, Android) and the versions supported at handover.',
  'Adoption responsibilities: who maintains each layer after handover, how contributions are approved, how versions are released, and what training is included.',
];

function BuyerContent() {
  return (
    <section aria-labelledby="ds-buyer-guide" style={{ padding: 'var(--section-y-sm) 0', background: 'var(--surface-alt)' }}>
      <div className="cb-container" style={{ maxWidth: 960, color: 'var(--body)', lineHeight: 1.7 }}>
        <h2 id="ds-buyer-guide">Choosing the right design system scope</h2>
        <p className="lede">Design system engagements start from three different places, and each one costs and plans differently. Discovery is where we settle which fits: which products are in scope, which components already exist, who owns the system after handover, and how accessibility will be verified. If inconsistency runs through the whole product rather than shared components, a <Link href="/services/product-design/ux-audit">UX audit</Link> usually comes first; if the system has to serve a wider roadmap, pair it with <Link href="/services/product-design/ui-ux-strategy">UI/UX strategy</Link>.</p>

        <h3>Scope 1 — Establish a first system</h3>
        <p className="lede">Suits teams with one product (or one team) whose UI has grown by accretion: buttons rebuilt per feature, no shared tokens, no library to inherit from. Discovery must establish the surfaces in scope, an inventory of components currently in production, the brand and token starting point, the accessibility baseline you must meet, and who will own the system once it exists. The output is a first Figma library plus coded components and Storybook documentation from scratch.</p>

        <h3>Scope 2 — Consolidate inconsistent libraries</h3>
        <p className="lede">Suits organisations where several teams each maintain their own near-duplicate components, so the same button exists four ways and nobody knows which is canonical. Discovery must audit every existing library and product surface, map where components have diverged, agree which version becomes the source of truth, define a deprecation and migration path for the rest, and name the team that approves changes. The hard part is migration, not design — which is why this scope is quoted around replacement effort as well as component work.</p>

        <h3>Scope 3 — Extend an existing component foundation</h3>
        <p className="lede">Suits teams already building on Material UI, Radix, Shadcn, or an in-house library that covers the basics. Discovery must establish which versions and customisations you run, where theming is applied, the gap between what the foundation gives you and what your products actually use, which accessibility guarantees you inherit versus must add, and whether extending or rebuilding is cheaper over two years. This is usually the fastest path to a production-ready system.</p>

        <h2>Figma library vs coded components vs a maintained design system</h2>
        <p className="lede">Buyers are often quoted for three different deliverables as if they were one thing. Here is what each covers — a maintained design system is the combination of the first two plus the rules that keep them aligned.</p>
        <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', border: '1px solid var(--line)', borderRadius: 16, background: 'var(--surface)', margin: '1rem 0 1.5rem' }}>
          <table style={{ width: '100%', minWidth: 640, borderCollapse: 'collapse', fontSize: 15, textAlign: 'left' }}>
            <caption className="sr-only">Comparison of a Figma library, coded components, and a maintained design system by intended users, documentation, and ownership</caption>
            <thead>
              <tr style={{ background: 'var(--surface-alt)' }}>
                <th scope="col" style={{ ...thCell, borderLeft: 'none', width: 140 }}><span className="sr-only">Dimension</span></th>
                <th scope="col" style={thCell}>Figma library</th>
                <th scope="col" style={thCell}>Coded components</th>
                <th scope="col" style={{ ...thCell, color: 'var(--brand)' }}>Maintained design system</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map(row => (
                <tr key={row.dimension}>
                  <th scope="row" style={{ ...thCell, borderLeft: 'none', fontWeight: 600, color: 'var(--ink)', background: 'var(--surface-alt)' }}>{row.dimension}</th>
                  <td style={thCell}>{row.figma}</td>
                  <td style={thCell}>{row.coded}</td>
                  <td style={thCell}>{row.system}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Procurement checklist for a design system engagement</h2>
        <p className="lede">Before you sign, make sure each of these is answered in the proposal — we answer all six in ours:</p>
        <ul style={{ paddingLeft: '1.25rem' }}>
          {procurement.map(item => <li key={item} style={{ marginBottom: '0.6rem' }}>{item}</li>)}
        </ul>

        <h2>Budget guidance: what moves the quote</h2>
        <p className="lede">We do not publish a design-system price because scopes differ too much to be honest about a single number. Four drivers set yours: component complexity (simple primitives cost far less than data tables, date pickers, and forms with full validation states), platform coverage (web only versus web plus iOS and Android, and whether Figma and code are both in scope), documentation depth (props versus complete usage guidance, examples, and governance), and migration effort (greenfield products cost less than replacing components across live applications). We scope each engagement after discovery and quote that scope — request one via <Link href="/contact?service=product-design">a product design consultation</Link>.</p>
      </div>
    </section>
  );
}

export default function PageClient() {
  return (
    <SubServicePageTemplate
      parent={{ href: "/services/product-design", label: "Product Design" }}
      name="Design Systems"
      copy={{ badge: "PRODUCT DESIGN", title: <>Design Systems That <span style={{ color: 'var(--brand)' }}>Scale Teams</span></>, desc: <>We build the single source of truth your design and engineering teams need to ship consistently, accessibly, and at speed.</> }}
      stats={stats}
      services={services}
      steps={steps}
      faqs={faqs}
      capabilitiesTitle="Our Capabilities"
      buyerContent={<BuyerContent />}
    />
  );
}
