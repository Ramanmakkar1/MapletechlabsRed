import LocationPageTemplate from '@/components/page/LocationPageTemplate';

const whyCity = [
  { t: 'Government and Crown corporations', d: 'As Saskatchewan’s capital, Regina needs accessible, secure citizen-facing services and internal systems built to public-sector standards.' },
  { t: 'Agriculture and agri-tech', d: 'The province’s agricultural core drives demand for precision-farming, traceability and supply-chain platforms.' },
  { t: 'Insurance and energy', d: 'Established insurance, potash and energy sectors need reliable, well-integrated data and workflow systems.' },
  { t: 'Central and cost-effective', d: 'A central Canadian base with lower operating costs and a loyal, stable talent pool.' },
];
const neighborhoods = [
  { n: 'Downtown', d: 'The government and financial core, with Crown corporations and professional services.' },
  { n: 'Warehouse District', d: 'Regina’s creative and startup quarter of converted warehouses.' },
  { n: 'Harbour Landing', d: 'A fast-growing residential-commercial community in the south.' },
  { n: 'Cathedral', d: 'A creative, small-business neighbourhood near downtown.' },
  { n: 'University of Regina', d: 'The campus district driving research and a young talent pool.' },
  { n: 'East Regina', d: 'Commercial and retail growth corridor with logistics and services.' },
];
const trends = [
  { t: 'Public-sector digital services', d: 'Accessible citizen portals and internal workflow automation for provincial government and Crown corporations.' },
  { t: 'Agri-tech & traceability', d: 'Precision-agriculture, traceability and supply-chain platforms for Saskatchewan’s farm economy.' },
  { t: 'Insurance & energy systems', d: 'Claims, policy and operations platforms for the insurance and energy sectors.' },
  { t: 'Data & analytics', d: 'Reporting and analytics systems that turn operational data into decisions.' },
];

export default function PageClient() {
  return (
    <LocationPageTemplate
      slug="regina"
      copy={{ badge: 'Software development in Regina', title: <>Software Development Company in <span style={{ color: 'var(--brand)' }}>Regina</span></>, desc: <>Regina is Saskatchewan’s capital, with an economy built on government and Crown corporations, a large agriculture and agri-tech sector, energy and potash, and insurance. We build custom software for the organisations that run it.</> }}
      whyCity={{ title: 'Why Regina for tech', intro: 'Saskatchewan’s capital — government, agriculture and insurance.', items: whyCity }}
      neighborhoods={{ title: 'Regina areas we serve', intro: '', items: neighborhoods }}
      trends={{ title: 'Regina tech focus', items: trends }}
    />
  );
}
