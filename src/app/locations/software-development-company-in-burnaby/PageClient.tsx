import LocationPageTemplate from '@/components/page/LocationPageTemplate';

const whyCity = [
  { t: 'Games and visual effects', d: 'Burnaby anchors one of Canada’s densest games and VFX clusters — real demand for real-time, high-performance and content-pipeline tooling.' },
  { t: 'Telecom and clean tech', d: 'Major telecommunications and clean-technology operations need robust data platforms, dashboards and integrations.' },
  { t: 'SFU research base', d: 'Simon Fraser University drives research spin-offs and a steady pipeline of engineering talent.' },
  { t: 'Metro Vancouver access', d: 'Central in Metro Vancouver with lower overhead than downtown — a strong base for product teams.' },
];
const neighborhoods = [
  { n: 'Metrotown', d: 'A dense downtown-scale core of offices, retail and residential towers.' },
  { n: 'Brentwood', d: 'A fast-redeveloping town centre with new office and tech space.' },
  { n: 'Lougheed', d: 'A growing transit-hub district on the city’s northeast edge.' },
  { n: 'SFU / Burnaby Mountain', d: 'The university and UniverCity community — research, spin-offs and talent.' },
  { n: 'Big Bend', d: 'A light-industrial and studio district along the Fraser River.' },
  { n: 'Edmonds', d: 'An emerging mixed-use community in south Burnaby.' },
];
const trends = [
  { t: 'Real-time & games tooling', d: 'High-performance engines, pipelines and live-ops tooling for the games and VFX studios based here.' },
  { t: 'Media & streaming', d: 'Content, streaming and audience platforms for the region’s media sector.' },
  { t: 'Telecom data platforms', d: 'Large-scale data, monitoring and customer systems for telecommunications operations.' },
  { t: 'Clean-tech dashboards', d: 'Monitoring, reporting and analytics platforms for the growing clean-technology sector.' },
];

export default function PageClient() {
  return (
    <LocationPageTemplate
      slug="burnaby"
      copy={{ badge: 'Software development in Burnaby', title: <>Software Development Company in <span style={{ color: 'var(--brand)' }}>Burnaby</span></>, desc: <>Burnaby is a technology and media centre — home to Simon Fraser University, one of Canada’s largest games and visual-effects clusters, major telecommunications operations and a growing clean-tech sector. We build custom software for the teams behind it.</> }}
      whyCity={{ title: 'Why Burnaby for tech', intro: 'A games, media and telecom hub in the heart of Metro Vancouver.', items: whyCity }}
      neighborhoods={{ title: 'Burnaby areas we serve', intro: '', items: neighborhoods }}
      trends={{ title: 'Burnaby tech focus', items: trends }}
    />
  );
}
