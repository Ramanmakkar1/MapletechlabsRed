/**
 * Hand-written local copy for priority /locations/<kw>-company-in-<city> pages.
 * When a slug has an entry here, the page uses its title, description, intro,
 * sections, proof links and FAQs instead of the shared generated copy.
 * Facts only: no invented clients, reviews or awards. Prices come from
 * /blog/app-development-cost-canada; proof numbers from each case study's DESCRIPTION.
 */
export type LocalTextPart = string | { href: string; label: string };

export interface ServiceCityLocal {
  /** Page title without the " | Mapletech Labs" suffix (the layout template adds it). */
  title: string;
  /** Meta description, 155 characters or less. */
  description: string;
  intro: string;
  sections: { heading: string; body: LocalTextPart[] }[];
  proof: { href: string; label: string; note: string }[];
  faqs: { q: string; a: string }[];
}

export const SERVICE_CITY_LOCAL: Record<string, ServiceCityLocal> = {
  'app-development-company-in-edmonton': {
    title: 'App Development Company in Edmonton',
    description: 'Mapletech Labs is headquartered in Edmonton and builds iOS & Android apps for Alberta teams, with a fixed CAD price agreed up front. Get a free quote.',
    intro: 'Mapletech Labs is headquartered in Edmonton, Alberta, so when you hire us for app development you are hiring a local team, not a sales office for developers somewhere else. We design and build iOS and Android apps for Edmonton companies, public bodies and startups, from field tools that work offline on a job site to patient and customer apps that need to pass a privacy review. You talk to the senior engineers who write the code, you get a fixed scope and price before work starts, and you can reach us on +1-403-604-8692.',
    sections: [
      {
        heading: 'The apps Edmonton organisations actually need',
        body: [
          'Edmonton runs on energy, petrochemicals, government, post-secondary, healthcare, logistics and agriculture, and each brings its own kind of app. Field crews need inspection, safety and work-order apps that keep working with no signal and sync later. Municipal and campus teams need booking, reporting and student or resident portals with accessible design. Clinics and health providers need apps that respect Alberta’s Health Information Act. Carriers and growers need tracking, dispatch and scheduling apps their drivers and staff will open every day.',
        ],
      },
      {
        heading: 'Workshops in person, here in Edmonton',
        body: [
          'Because our head office is in Edmonton, discovery does not have to happen over a video call. We can run scoping and design workshops at your office, plant or campus, watch how your staff work today and sketch the screens with the people who will use them. After the workshop you get a written scope with every screen and integration listed. Demos and user testing sessions can also be held in person, while day-to-day progress runs on shared boards and weekly calls.',
        ],
      },
      {
        heading: 'Native or cross-platform: how we choose',
        body: [
          'Most Edmonton projects need both iOS and Android, so we usually recommend a cross-platform build in Flutter or React Native: one codebase, both app stores, and typically 30-40% less cost than two separate apps. We go native with Swift or Kotlin when the app leans hard on device hardware, heavy offline data, Bluetooth sensors or top-end performance. We explain the trade-off for your app in plain language before you commit, rather than picking a stack by habit.',
        ],
      },
      {
        heading: 'What an app costs and how long it takes',
        body: [
          'In our ',
          { href: '/blog/app-development-cost-canada', label: 'Canadian app development cost guide' },
          ' a simple single-platform app with 5-8 screens runs about $25,000-$50,000 CAD over 8-12 weeks. A mid-size iOS and Android app with 15-30 screens, payments and an admin panel is about $50,000-$150,000 over 12-24 weeks. Complex platforms with AI, IoT or compliance work start near $150,000 and take 6-18 months. Discovery is free, and you get a locked-in price before any code is written.',
        ],
      },
    ],
    proof: [
      { href: '/case-studies/logistics-platform', label: 'Logistics & fleet platform', note: 'A real-time logistics platform handling 15K+ daily deliveries, with 25% fuel savings and a 98% on-time delivery rate.' },
      { href: '/case-studies/healthcare-telehealth', label: 'Telehealth platform', note: 'A compliant telehealth platform serving 200K+ patient sessions with 99.97% uptime for a Canadian healthcare provider.' },
      { href: '/case-studies/ecommerce-platform', label: 'E-commerce platform', note: 'A high-performance e-commerce platform driving 3x revenue growth and handling 2M+ monthly visitors for a Canadian retailer.' },
    ],
    faqs: [
      {
        q: 'How much does app development cost in Edmonton?',
        a: 'Using the ranges in our Canadian cost guide, a simple single-platform app is about $25,000-$50,000 CAD, a mid-size iOS and Android app about $50,000-$150,000, and a complex platform $150,000 or more. Because we are based in Edmonton, our overhead is lower than many Toronto or Vancouver agencies. After a free discovery phase you get a fixed price in CAD.',
      },
      {
        q: 'Can we meet your team in person in Edmonton?',
        a: 'Yes. Mapletech Labs is headquartered in Edmonton, so we can hold discovery workshops, design reviews and demos at your office or site. Ongoing work runs on weekly calls and shared project boards, and you can meet in person again whenever a milestone needs it.',
      },
      {
        q: 'How long does it take to build an app?',
        a: 'A simple app with a handful of screens usually takes 8-12 weeks. A mid-size iOS and Android app with payments and an admin panel takes about 12-24 weeks, and complex platforms take 6-18 months. Your written scope includes a timeline with milestones such as beta and launch.',
      },
      {
        q: 'Can you build an app that handles health information under Alberta’s HIA?',
        a: 'Yes. For apps that handle health information we plan for Alberta’s Health Information Act and PIPEDA from the start: Canadian data hosting, encryption, role-based access and audit logs, plus support for your privacy impact assessment. Your own privacy officer or lawyer should confirm the final compliance position.',
      },
      {
        q: 'Who owns the code for our app?',
        a: 'You do. All source code, app store accounts, cloud accounts and design files we create for your project belong to you, with no lock-in. You can keep working with us after launch or hand the code to your own team.',
      },
    ],
  },
};
