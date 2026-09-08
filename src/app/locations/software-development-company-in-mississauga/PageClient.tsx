import LocationPageTemplate from '@/components/page/LocationPageTemplate';

const whyCity = [
  { t: 'Corporate head-office density', d: 'Mississauga has one of the largest concentrations of corporate head offices in Canada — enterprises that need internal platforms, integrations and tools built to hold up across complex organisations.' },
  { t: 'Pearson, aerospace and logistics', d: 'Proximity to Canada’s busiest airport anchors aerospace and a huge logistics sector, driving demand for tracking, scheduling and operations software.' },
  { t: 'Pharma and life sciences', d: 'A dense pharmaceutical and health-sciences cluster needs compliant, well-engineered data and workflow systems built to Canadian privacy law.' },
  { t: 'Toronto talent, lower overhead', d: 'All the depth of the GTA talent pool with lower operating costs — a practical base for scale-ups and enterprise teams alike.' },
];
const neighborhoods = [
  { n: 'City Centre / Square One', d: 'The downtown core around Square One — corporate offices, finance and a growing startup presence.' },
  { n: 'Meadowvale', d: 'A major business-park district with technology, pharma and R&D employers.' },
  { n: 'Malton', d: 'The aerospace and logistics hub next to Pearson International Airport.' },
  { n: 'Port Credit', d: 'Waterfront district with creative studios, agencies and small tech firms.' },
  { n: 'Erin Mills', d: 'Established commercial and health-sciences corridor in the city’s west.' },
  { n: 'Streetsville', d: 'A village-feel business community of professional services and small enterprises.' },
];
const trends = [
  { t: 'Enterprise platforms', d: 'Internal tools, portals and integrations for the head offices and large employers based in Mississauga.' },
  { t: 'Logistics & supply chain', d: 'Fleet, warehouse and shipment-tracking software built around Pearson and the region’s distribution corridors.' },
  { t: 'Pharma & health data', d: 'Compliant data, quality and workflow systems for the life-sciences sector.' },
  { t: 'Commerce & customer platforms', d: 'Headless commerce, customer portals and subscription systems for consumer-facing brands.' },
];

export default function PageClient() {
  return (
    <LocationPageTemplate
      slug="mississauga"
      copy={{ badge: 'Software development in Mississauga', title: <>Software Development Company in <span style={{ color: 'var(--brand)' }}>Mississauga</span></>, desc: <>Mississauga is home to hundreds of corporate head offices, a major aerospace and logistics cluster around Pearson, and a deep pharmaceutical and finance base. We build custom software for the enterprises and scale-ups that run there.</> }}
      whyCity={{ title: 'Why Mississauga for tech', intro: 'One of Canada’s biggest corporate and logistics hubs, on Toronto’s doorstep.', items: whyCity }}
      neighborhoods={{ title: 'Mississauga areas we serve', intro: '', items: neighborhoods }}
      trends={{ title: 'Mississauga tech focus', items: trends }}
    />
  );
}
