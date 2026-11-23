import IndustryPageTemplate from '@/components/page/IndustryPageTemplate';

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
                { name: 'Mobile App Development', href: '/services/mobile-app-development', desc: 'Driver-facing delivery apps with GPS tracking, proof-of-delivery and offline support.' },
                { name: 'AI & Machine Learning', href: '/services/ai-ml', desc: 'ML-powered route optimisation, demand forecasting and anomaly detection for supply chains.' },
                { name: 'Cloud & DevOps', href: '/services/cloud-devops', desc: 'Scalable cloud infrastructure for real-time tracking with IoT data pipelines and auto-scaling.' },
                { name: 'SaaS Development', href: '/services/saas-development', desc: 'Multi-tenant fleet management and warehouse platforms with role-based dashboards.' },
                { name: 'AR & VR', href: '/services/ar-vr', desc: 'AR-powered warehouse picking, maintenance overlays and immersive training simulations.' },
              ];

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
    />
  );
}
