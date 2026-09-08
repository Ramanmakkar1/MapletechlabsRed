import LocationPageTemplate from '@/components/page/LocationPageTemplate';

const whyCity = [
  { t: 'Logistics and distribution', d: 'Proximity to Pearson and the 400-series highways makes Brampton a national distribution hub, driving constant demand for fleet, warehouse and shipment-tracking software.' },
  { t: 'Advanced manufacturing', d: 'A large manufacturing and food-processing base needs IoT, quality and operations platforms built for the plant floor.' },
  { t: 'Young, diverse workforce', d: 'One of the youngest and most diverse populations in Canada — an advantage when building products for multilingual and global markets.' },
  { t: 'GTA depth, lower overhead', d: 'Full access to the GTA talent pool at lower cost — practical for scale-ups and enterprise teams alike.' },
];
const neighborhoods = [
  { n: 'Downtown Brampton', d: 'The historic core, with professional services and a growing small-business scene.' },
  { n: 'Bramalea', d: 'A major commercial and industrial district in the city’s east.' },
  { n: 'Springdale', d: 'One of Brampton’s fastest-growing communities.' },
  { n: 'Heart Lake', d: 'Established residential-commercial area to the north.' },
  { n: 'Mount Pleasant', d: 'A newer transit-oriented community on the west side.' },
  { n: 'Gore Meadows', d: 'Growing northeast district with logistics and services.' },
];
const trends = [
  { t: 'Logistics & supply chain', d: 'Fleet, warehouse and shipment-tracking platforms built around Brampton’s distribution corridors.' },
  { t: 'Manufacturing IoT', d: 'Monitoring, quality and operations dashboards for manufacturers and food processors.' },
  { t: 'Health & life sciences', d: 'Compliant data and workflow systems for the growing health and life-sciences sector.' },
  { t: 'Multilingual consumer apps', d: 'Mobile and web products built for Brampton’s young, diverse and multilingual population.' },
];

export default function PageClient() {
  return (
    <LocationPageTemplate
      slug="brampton"
      copy={{ badge: 'Software development in Brampton', title: <>Software Development Company in <span style={{ color: 'var(--brand)' }}>Brampton</span></>, desc: <>Brampton is one of Canada’s largest and fastest-growing cities, with a huge logistics and distribution sector near Pearson, a strong manufacturing and food-processing base, and a growing health and life-sciences presence. We build custom software for the businesses that run there.</> }}
      whyCity={{ title: 'Why Brampton for tech', intro: 'A national logistics and manufacturing hub with one of Canada’s youngest, most diverse workforces.', items: whyCity }}
      neighborhoods={{ title: 'Brampton areas we serve', intro: '', items: neighborhoods }}
      trends={{ title: 'Brampton tech focus', items: trends }}
    />
  );
}
