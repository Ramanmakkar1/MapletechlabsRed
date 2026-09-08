import LocationPageTemplate from '@/components/page/LocationPageTemplate';

const whyCity = [
  { t: 'Canada’s high-tech capital', d: 'Markham holds one of the densest concentrations of technology employers in Canada — a market that understands software and expects it built well.' },
  { t: 'Fintech and enterprise', d: 'A strong fintech and corporate-HQ base drives demand for secure platforms, integrations and data systems.' },
  { t: 'Life sciences and manufacturing', d: 'Established life-sciences and advanced-manufacturing sectors need compliant, well-engineered software.' },
  { t: 'Deep talent pool', d: 'Proximity to the GTA’s engineering talent, with a local base built around decades of technology employers.' },
];
const neighborhoods = [
  { n: 'Downtown Markham', d: 'A purpose-built urban core of technology offices, startups and mixed-use development.' },
  { n: 'Unionville', d: 'Historic main street with professional services and small firms.' },
  { n: 'Thornhill', d: 'Established business and residential district on the west side.' },
  { n: 'Milliken', d: 'A diverse commercial and light-industrial area in the south.' },
  { n: 'Cornell', d: 'A growing east-side community near Markham Stouffville Hospital.' },
  { n: 'Buttonville', d: 'A business and light-industrial district with technology employers.' },
];
const trends = [
  { t: 'Enterprise & fintech platforms', d: 'Secure, integrated platforms for Markham’s dense base of technology and financial employers.' },
  { t: 'SaaS product engineering', d: 'Multi-tenant SaaS products, billing and analytics for the corridor’s software companies.' },
  { t: 'Life-sciences data', d: 'Compliant research, clinical and operations software for the life-sciences sector.' },
  { t: 'AI integration', d: 'LLM and automation woven into the systems Markham’s tech firms already run.' },
];

export default function PageClient() {
  return (
    <LocationPageTemplate
      slug="markham"
      copy={{ badge: 'Software development in Markham', title: <>Software Development Company in <span style={{ color: 'var(--brand)' }}>Markham</span></>, desc: <>Markham is often called Canada’s high-tech capital, with one of the country’s highest concentrations of technology companies alongside strong fintech, life-sciences and advanced-manufacturing sectors. We build custom software for the businesses at its centre.</> }}
      whyCity={{ title: 'Why Markham for tech', intro: 'One of the densest technology clusters in Canada, with deep fintech and life-sciences roots.', items: whyCity }}
      neighborhoods={{ title: 'Markham areas we serve', intro: '', items: neighborhoods }}
      trends={{ title: 'Markham tech focus', items: trends }}
    />
  );
}
