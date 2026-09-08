import LocationPageTemplate from '@/components/page/LocationPageTemplate';

const whyCity = [
  { t: 'Health-sciences hub', d: 'McMaster University and Hamilton’s hospital network anchor a major health-sciences sector needing research, clinical and patient software built to PHIPA and PIPEDA.' },
  { t: 'Advanced manufacturing', d: 'A modern manufacturing base — well beyond steel — needs IoT, monitoring and operations platforms that make the plant floor measurable and predictable.' },
  { t: 'Affordable growth corridor', d: 'Lower costs than downtown Toronto with a fast-growing talent pool make Hamilton a practical home for startups and scale-ups.' },
  { t: 'Port and logistics', d: 'One of Canada’s largest ports drives demand for logistics, trade and supply-chain systems.' },
];
const neighborhoods = [
  { n: 'Downtown / Innovation District', d: 'The core around the McMaster Innovation Park and a growing startup and creative scene.' },
  { n: 'Ancaster', d: 'Established business and professional-services community on the west mountain.' },
  { n: 'Dundas', d: 'A creative and small-business town within the city, popular with studios and consultancies.' },
  { n: 'Stoney Creek', d: 'Manufacturing and industrial corridor along the lake.' },
  { n: 'Waterdown', d: 'Fast-growing north-end community with new commercial and tech employers.' },
  { n: 'McMaster / Westdale', d: 'University district driving research spin-offs and health-tech talent.' },
];
const trends = [
  { t: 'Health & research software', d: 'Clinical, research and patient-facing platforms for Hamilton’s hospitals and life-sciences groups.' },
  { t: 'Manufacturing IoT', d: 'Monitoring, predictive-maintenance and operations dashboards for advanced manufacturers.' },
  { t: 'E-commerce & DTC', d: 'Headless commerce and subscription platforms for the region’s growing consumer brands.' },
  { t: 'Public-sector & municipal', d: 'Accessible citizen services and internal tools built to public-sector standards.' },
];

export default function PageClient() {
  return (
    <LocationPageTemplate
      slug="hamilton"
      copy={{ badge: 'Software development in Hamilton', title: <>Software Development Company in <span style={{ color: 'var(--brand)' }}>Hamilton</span></>, desc: <>Hamilton has grown from steel town to a diversified economy of advanced manufacturing, a major health-sciences sector around McMaster, and a fast-growing tech and creative scene. We build custom software for the businesses driving that shift.</> }}
      whyCity={{ title: 'Why Hamilton for tech', intro: 'Advanced manufacturing and health sciences, in Canada’s fastest-changing mid-size city.', items: whyCity }}
      neighborhoods={{ title: 'Hamilton areas we serve', intro: '', items: neighborhoods }}
      trends={{ title: 'Hamilton tech focus', items: trends }}
    />
  );
}
