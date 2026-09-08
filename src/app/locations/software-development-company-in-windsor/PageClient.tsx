import LocationPageTemplate from '@/components/page/LocationPageTemplate';

const whyCity = [
  { t: 'Automotive and manufacturing', d: 'A deep automotive and tool-and-die base needs industrial software — monitoring, automation and operations platforms built for precision manufacturing.' },
  { t: 'Cross-border trade', d: 'Canada’s busiest trade corridor with Detroit drives demand for logistics, customs and supply-chain systems.' },
  { t: 'Growing tech and gaming', d: 'A rising tech and gaming scene, backed by the University of Windsor and St. Clair College, is diversifying the economy.' },
  { t: 'Cost-effective base', d: 'Lower operating costs than the GTA with a skilled engineering and trades workforce.' },
];
const neighborhoods = [
  { n: 'Downtown', d: 'The riverfront core, with professional services and a growing tech scene.' },
  { n: 'Walkerville', d: 'A historic district popular with creative studios and small firms.' },
  { n: 'Ford City', d: 'An industrial-heritage area seeing new investment.' },
  { n: 'South Windsor', d: 'Established residential-commercial district with professional services.' },
  { n: 'Tecumseh', d: 'A neighbouring town with manufacturing and agriculture.' },
  { n: 'LaSalle', d: 'A fast-growing community southwest of the city.' },
];
const trends = [
  { t: 'Automotive & manufacturing software', d: 'Automation, monitoring and operations platforms for the region’s automotive and tool-and-die base.' },
  { t: 'Cross-border logistics', d: 'Customs, tracking and supply-chain systems built around the Windsor-Detroit corridor.' },
  { t: 'Gaming & tech', d: 'Product engineering and game development for Windsor’s growing digital sector.' },
  { t: 'Agri-food', d: 'Traceability and operations software for Essex County’s large agriculture sector.' },
];

export default function PageClient() {
  return (
    <LocationPageTemplate
      slug="windsor"
      copy={{ badge: 'Software development in Windsor', title: <>Software Development Company in <span style={{ color: 'var(--brand)' }}>Windsor</span></>, desc: <>Windsor is the heart of Canada’s automotive industry, with a world-class advanced-manufacturing and tool-and-die base, the country’s busiest cross-border trade corridor, and a growing tech and gaming scene. We build custom software for the businesses driving it.</> }}
      whyCity={{ title: 'Why Windsor for tech', intro: 'Canada’s automotive and cross-border-trade capital, diversifying into tech.', items: whyCity }}
      neighborhoods={{ title: 'Windsor areas we serve', intro: '', items: neighborhoods }}
      trends={{ title: 'Windsor tech focus', items: trends }}
    />
  );
}
