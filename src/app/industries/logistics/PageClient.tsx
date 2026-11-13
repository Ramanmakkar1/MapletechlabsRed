import IndustryPageTemplate from '@/components/page/IndustryPageTemplate';
import Link from 'next/link';
import { industryFaqs } from '@/data/industry-faqs';
import { serviceCityPath } from '@/data/serviceCity';

const heroStats = ([['50M+', 'Shipments Tracked'], ['30%', 'Route Efficiency Gain'], ['99.8%', 'Delivery Accuracy']] as [string, string][]).map(([value, label]) => ({ value, label }));
const challenges = [
                { icon: '📍', title: 'Real-time Visibility', desc: 'End-to-end shipment tracking with sub-second updates, geo-fencing alerts, and live dashboards that give dispatchers full situational awareness.' },
                { icon: '🗺️', title: 'Route Optimisation', desc: 'ML-powered routing that accounts for traffic, weather, vehicle capacity, and time windows — continuously re-optimising as conditions change.' },
                { icon: '🚚', title: 'Last-Mile Delivery', desc: 'Consumer-facing tracking apps, proof-of-delivery workflows, dynamic ETAs, and driver performance tools that reduce failed deliveries.' },
              ];
const solutions = [
                { icon: '🚛', title: 'Fleet & Route Management', desc: 'GPS-integrated fleet tracking, ML route optimisation, driver mobile apps, maintenance scheduling, and real-time dispatch consoles that cut operational costs.' },
                { icon: '🏭', title: 'Warehouse Management Systems', desc: 'Full-featured WMS with barcode and RFID scanning, robotics integrations, slotting optimisation, pick-and-pack workflows, and ERP connectivity.' },
                { icon: '📦', title: 'Last-Mile Apps', desc: 'Driver-facing delivery apps with proof-of-delivery capture, dynamic ETAs, and customer notifications that reduce failed deliveries and improve satisfaction.' },
                { icon: '📊', title: 'Supply Chain Analytics', desc: 'Demand forecasting, inventory optimisation, and end-to-end visibility dashboards that help you make smarter decisions across your supply chain.' },
                { icon: '📡', title: 'IoT & Sensors', desc: 'Temperature monitoring, asset tracking, and condition-based alerts using GPS, RFID, and LoRaWAN sensors integrated into your logistics platform.' },
                { icon: '🔍', title: 'Customer Tracking Portals', desc: 'Branded, real-time shipment tracking portals with live maps, delivery notifications, and self-service tools that reduce support tickets.' },
              ];
const tech = [
                { cat: 'Mapping', items: ['Google Maps', 'HERE', 'Mapbox', 'OpenStreetMap'] },
                { cat: 'IoT', items: ['AWS IoT', 'MQTT', 'LoRaWAN', 'RFID'] },
                { cat: 'Backend', items: ['Python', 'Go', 'Kafka', 'PostgreSQL', 'Redis'] },
                { cat: 'Mobile', items: ['React Native', 'Kotlin', 'Swift'] },
              ];
const whyUs = [
                { icon: '🚛', title: 'Logistics Domain Experts', desc: 'We have built platforms for regional carriers, 3PLs, and global freight operators. We understand the operational realities of the road and warehouse floor.' },
                { icon: '📡', title: 'IoT Integration', desc: 'From GPS trackers to temperature sensors to RFID gates — we integrate hardware into software seamlessly, with real-time data pipelines that scale.' },
                { icon: '📦', title: 'Proven at Scale', desc: 'Our systems process tens of millions of events daily without breaking a sweat. We design for your peak volumes, not your average day.' },
              ];
const related = [
  { name: 'Software Development Company in Edmonton', href: '/locations/software-development-company-in-edmonton', desc: 'Fleet, tracking and warehouse software from our Edmonton development team.' },
  { name: 'Software Development Company in Calgary', href: '/locations/software-development-company-in-calgary', desc: 'Fleet, tracking and warehouse software from our Calgary development team.' },
  { name: 'Software Development Company in Toronto', href: '/locations/software-development-company-in-toronto', desc: 'Fleet, tracking and warehouse software from our Toronto development team.' },
  { name: 'Software Development Company in Vancouver', href: '/locations/software-development-company-in-vancouver', desc: 'Fleet, tracking and warehouse software from our Vancouver development team.' },
                { name: 'Mobile App Development', href: '/services/mobile-app-development', desc: 'Driver-facing delivery apps with GPS tracking, proof-of-delivery and offline support.' },
                { name: 'AI & Machine Learning', href: '/services/ai-ml', desc: 'ML-powered route optimisation, demand forecasting and anomaly detection for supply chains.' },
                { name: 'Cloud & DevOps', href: '/services/cloud-devops', desc: 'Scalable cloud infrastructure for real-time tracking with IoT data pipelines and auto-scaling.' },
                { name: 'SaaS Development', href: '/services/saas-development', desc: 'Multi-tenant fleet management and warehouse platforms with role-based dashboards.' },
                { name: 'AR & VR', href: '/services/ar-vr', desc: 'AR-powered warehouse picking, maintenance overlays and immersive training simulations.' },
              ];

const cityLinks = [
  { label: 'App Development Company in Calgary', href: serviceCityPath('mobile-app-development', 'calgary') },
  { label: 'App Development Company in Edmonton', href: serviceCityPath('mobile-app-development', 'edmonton') },
  { label: 'App Development Company in Vancouver', href: serviceCityPath('mobile-app-development', 'vancouver') },
  { label: 'Software Development Company in Calgary', href: '/locations/software-development-company-in-calgary' },
];

const linkStyle = { color: 'var(--brand)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 3 } as const;
const cardStyle = { border: '1px solid var(--line, #e5e7eb)', borderRadius: 12, padding: 'clamp(16px, 4vw, 28px)', scrollMarginTop: 96, minWidth: 0 } as const;
const pStyle = { fontSize: 16, color: 'var(--body)', lineHeight: 1.7, margin: '0 0 12px' } as const;

const projectTypes = [
  {
    id: 'fleet-dispatch',
    title: 'Fleet and dispatch management',
    desc: 'Live vehicle tracking, job assignment, driver scheduling and maintenance records in one dispatch console for carriers and 3PLs.',
    extra: <>See the <Link href="/case-studies/logistics-platform" style={linkStyle}>logistics platform case study</Link> for a dispatch system rebuilt for 2,000+ vehicles.</>,
  },
  {
    id: 'route-optimisation',
    title: 'Route optimisation',
    desc: 'Routing that accounts for traffic, time windows, vehicle capacity and weather, then re-optimises as conditions change.',
    extra: <>Our <Link href="/services/ai-ml" style={linkStyle}>AI and machine learning</Link> team builds and validates the routing models.</>,
  },
  {
    id: 'warehouse-management',
    title: 'Warehouse management systems (WMS)',
    desc: 'Barcode and RFID scanning, slotting, pick-and-pack workflows and ERP connectivity for warehouses and distribution centres.',
    extra: <>Replace an ageing WMS with our <Link href="/services/software-development/legacy-software-modernization" style={linkStyle}>legacy software modernization</Link> service.</>,
  },
  {
    id: 'last-mile-apps',
    title: 'Last-mile delivery and driver apps',
    desc: 'Driver apps with proof of delivery, dynamic ETAs, customer notifications and offline support for weak-signal routes.',
    extra: <>Delivered by our <Link href="/services/mobile-app-development" style={linkStyle}>mobile app development</Link> team for iOS and Android.</>,
  },
  {
    id: 'tracking-portals',
    title: 'Shipment tracking portals',
    desc: 'Branded, real-time tracking pages with live maps, delivery notifications and self-service tools that cut support tickets.',
    extra: <>Built on the <Link href="/services/cloud-devops" style={linkStyle}>cloud and DevOps</Link> pipelines that keep tracking fast at peak volume.</>,
  },
  {
    id: 'supply-chain-analytics',
    title: 'Supply chain analytics and forecasting',
    desc: 'Demand forecasting, inventory optimisation and end-to-end visibility dashboards for planners and operations leads.',
    extra: <>Shipped as a multi-tenant product with our <Link href="/services/saas-development" style={linkStyle}>SaaS development</Link> practice.</>,
  },
];

const buildVsBuy = [
  ['Transportation management (TMS)', 'Buy a proven TMS for standard freight', 'Build when your lanes, pricing or workflow are the edge', 'Buy, then integrate'],
  ['Warehouse management (WMS)', 'Buy for standard pick-and-pack operations', 'Build for unusual robotics, slotting or ERP rules', 'Buy unless the warehouse is the product'],
  ['Route optimisation engine', 'Buy a routing API or solver', 'Build when your constraints and data are unique', 'Build the model, buy the maps'],
  ['Driver app', 'Buy a white-label driver app', 'Build for your brand, proof-of-delivery and offline needs', 'Build'],
  ['Customer tracking portal', 'Buy a tracking widget', 'Build for your brand and account workflows', 'Build'],
  ['ELD and telematics hardware', 'Buy certified devices and their APIs', 'Build the integration and data pipeline around them', 'Buy the hardware, build the integration'],
];

const buyerContent = (
  <section aria-labelledby="logistics-buyer-guide" style={{ padding: 'var(--section-y-sm) 0' }}>
    <div className="cb-container">
      <h2 id="logistics-buyer-guide" style={{ fontSize: 'var(--fs-h3)', marginBottom: 8 }}>What a Canadian logistics software development company builds</h2>
      <p style={{ ...pStyle, maxWidth: 760 }}>Mapletech Labs is a Canadian software company headquartered in Edmonton that builds fleet management, route optimisation, warehouse management, last-mile delivery apps and shipment tracking portals for carriers, 3PLs and distributors across Canada, including Edmonton, Calgary, Toronto and Vancouver. The work covers the dispatch console, the driver app and the customer tracking page, so operations and customers see the same live data.</p>
      <p style={{ ...pStyle, maxWidth: 760 }}>We scope the work as a fixed-price project in CAD, and the client owns the source code at handover. Start with our <Link href="/services" style={linkStyle}>software development services</Link>, or jump to <a href="#logistics-project-types" style={linkStyle}>common project types</a>, <a href="#logistics-build-vs-buy" style={linkStyle}>build versus buy</a> or <a href="#logistics-choosing-partner" style={linkStyle}>how to choose a partner</a>.</p>

      <h2 id="logistics-project-types" style={{ fontSize: 'var(--fs-h3)', margin: '32px 0 8px' }}>Common logistics software project types</h2>
      <div style={{ display: 'grid', gap: 20, gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', marginTop: 20 }}>
        {projectTypes.map(t => (
          <article key={t.id} id={t.id} style={cardStyle}>
            <h3 style={{ marginTop: 0, marginBottom: 10 }}>{t.title}</h3>
            <p style={pStyle}>{t.desc}</p>
            <p style={{ ...pStyle, marginBottom: 0 }}>{t.extra}</p>
          </article>
        ))}
      </div>

      <div id="logistics-build-vs-buy" style={{ ...cardStyle, marginTop: 28 }}>
        <h2 style={{ fontSize: 'var(--fs-h3)', marginTop: 0, marginBottom: 8 }}>Build or buy: logistics software decisions</h2>
        <p style={pStyle}>Most logistics stacks are a mix. Buy the commodity layers where a vendor already carries the certification and maintenance burden, and build the workflow, data and customer experience that make you different. This is the split we usually recommend:</p>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15, lineHeight: 1.6 }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', padding: '10px 12px', borderBottom: '1px solid var(--line, #e5e7eb)' }}>Area</th>
                <th style={{ textAlign: 'left', padding: '10px 12px', borderBottom: '1px solid var(--line, #e5e7eb)' }}>Buy</th>
                <th style={{ textAlign: 'left', padding: '10px 12px', borderBottom: '1px solid var(--line, #e5e7eb)' }}>Build</th>
                <th style={{ textAlign: 'left', padding: '10px 12px', borderBottom: '1px solid var(--line, #e5e7eb)' }}>Our usual advice</th>
              </tr>
            </thead>
            <tbody>
              {buildVsBuy.map(([area, buy, build, call]) => (
                <tr key={area}>
                  <td style={{ padding: '10px 12px', borderBottom: '1px solid var(--line, #e5e7eb)', fontWeight: 600 }}>{area}</td>
                  <td style={{ padding: '10px 12px', borderBottom: '1px solid var(--line, #e5e7eb)' }}>{buy}</td>
                  <td style={{ padding: '10px 12px', borderBottom: '1px solid var(--line, #e5e7eb)' }}>{build}</td>
                  <td style={{ padding: '10px 12px', borderBottom: '1px solid var(--line, #e5e7eb)' }}>{call}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div id="logistics-choosing-partner" style={{ ...cardStyle, marginTop: 28 }}>
        <h2 style={{ fontSize: 'var(--fs-h3)', marginTop: 0, marginBottom: 8 }}>How to choose a logistics software development partner</h2>
        <p style={pStyle}>Ask these five questions before you sign. The answers tell you whether the team has shipped logistics software or only built generic apps:</p>
        <ul style={{ margin: 0, paddingLeft: 20, display: 'grid', gap: 10 }}>
          <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7 }}><strong>Integration experience:</strong> have they connected telematics and ELD providers, ERP systems and carrier APIs before, and can they show how?</li>
          <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7 }}><strong>Real-time data at scale:</strong> can the architecture handle live GPS and sensor events at your peak volume without falling behind?</li>
          <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7 }}><strong>Offline-capable driver apps:</strong> do the apps keep working when a truck loses signal, then sync cleanly when it reconnects?</li>
          <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7 }}><strong>Fixed-price scope in CAD:</strong> is the scope, milestones and price written down before code starts, with no open-ended hourly drift?</li>
          <li style={{ fontSize: 16, color: 'var(--body)', lineHeight: 1.7 }}><strong>Source code ownership and support:</strong> do you own the code and infrastructure at handover, and what post-launch support is included?</li>
        </ul>
        <p style={{ ...pStyle, marginTop: 16, marginBottom: 0 }}>Ready to scope a project? <Link href="/contact" style={linkStyle}>Talk to us about your logistics project</Link>, or see our <Link href="/pricing" style={linkStyle}>pricing</Link> for how fixed-price engagements work.</p>
      </div>
    </div>
  </section>
);

const extra = (
  <section style={{ padding: 'var(--section-y-sm) 0' }}>
    <div className="cb-container">
      <h2 style={{ fontSize: 'var(--fs-h3)', marginBottom: 8 }}>Related work</h2>
      <ul style={{ margin: '0 0 16px', paddingLeft: 20, display: 'grid', gap: 8 }}>
        <li><Link href="/case-studies/logistics-platform" style={linkStyle}>Logistics platform case study</Link></li>
      </ul>
      <h2 style={{ fontSize: 'var(--fs-h3)', marginBottom: 8 }}>Services for this sector</h2>
      <ul style={{ margin: 0, paddingLeft: 20, display: 'grid', gap: 8 }}>
        <li><Link href="/services/mobile-app-development" style={linkStyle}>Mobile app development</Link></li>
        <li><Link href="/services/ai-ml" style={linkStyle}>AI & machine learning</Link></li>
        <li><Link href="/services/cloud-devops" style={linkStyle}>Cloud & DevOps</Link></li>
      </ul>
    </div>
  </section>
);

export default function PageClient() {
  return (
    <IndustryPageTemplate
      slug="logistics"
      name="Logistics"
      copy={{ badge: "Logistics", title: <>Logistics Software Development That <span style={{ color: 'var(--brand)' }}>Never Stops.</span></>, desc: <>Logistics and supply-chain software development — fleet management, real-time tracking, route optimisation and warehouse automation for the modern supply chain.</> }}
      heroStats={heroStats}
      challenges={challenges}
      solutions={solutions}
      caseStudy={{ client: "LogiCore", headline: "50M shipments/year, 30% fuel savings, 12min avg delivery improvement", text: "We replaced their legacy dispatch system with a real-time ML platform \u2014 live GPS feeds, dynamic re-routing, and a new driver app adopted across 2,000+ vehicles.", quote: "We cut average delivery time by 12 minutes per route. Across 50 million shipments, that's transformative.", cite: "COO, LogiCore" }}
      tech={tech}
      whyUs={whyUs}
      related={related}
      cta={{ title: "Build Your Logistics Platform.", sub: "Real-time visibility, smarter routing, and supply chain intelligence \u2014 engineered to last." }}
      faqs={industryFaqs.logistics}
      cityLinks={cityLinks}
      buyerContent={buyerContent}
      extra={extra}
    />
  );
}
