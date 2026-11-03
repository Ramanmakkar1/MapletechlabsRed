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
  'app-development-company-in-calgary': {
    title: 'App Development Company in Calgary',
    description: 'iOS and Android app development for Calgary companies by Mapletech Labs, an Alberta team with on-site workshops and a fixed CAD price. Get a free quote.',
    intro: 'Mapletech Labs is an Alberta app development team headquartered in Edmonton, about three hours up the highway from Calgary, and we work with Calgary companies in person when a project needs it. We design and build iOS and Android apps for energy firms, fintech startups, carriers and growing businesses across the city. You work directly with the senior engineers who write your code, not account managers passing notes along. Before any work starts you get a fixed scope and a fixed price in CAD, so the budget does not drift. Call us on +1-403-604-8692 to talk through your app idea.',
    sections: [
      {
        heading: 'Apps for Calgary’s energy, fintech and logistics sectors',
        body: [
          'Calgary is home to the head offices of many energy and oilfield services companies, and their crews need field inspection, safety and work-order apps that keep working offline at a remote well site and sync when a signal returns. The city also has a growing fintech and payments startup scene that needs secure, well-tested mobile apps. Logistics and transport firms along the Calgary corridor need dispatch, live tracking and driver apps, and agtech and health teams need tools their staff can use in the field or the clinic.',
        ],
      },
      {
        heading: 'On-site in Calgary when it matters',
        body: [
          'The decisions that shape an app are best made in the same room. For Calgary clients we travel down to run discovery and design workshops at your office, where we map how your team works today and sketch the key screens with the people who will use them. You then get a written scope that lists every screen and every integration, so there are no surprises later. After that, the build runs on weekly calls and shared project boards, and we come back on site for major demos when they help.',
        ],
      },
      {
        heading: 'Native or cross-platform: picking the right build',
        body: [
          'Most Calgary projects need to reach both iPhone and Android users, so we usually suggest a cross-platform build in Flutter or React Native. One codebase ships to both app stores and typically costs 30-40% less than building two separate native apps. When an app depends on heavy device hardware, Bluetooth sensors, large offline data sets or top-end performance, we build natively in Swift and Kotlin instead. We walk you through that choice for your app in plain language before you sign anything.',
        ],
      },
      {
        heading: 'What an app costs and how long it takes',
        body: [
          'Based on our ',
          { href: '/blog/app-development-cost-canada', label: 'Canadian app development cost guide' },
          ', a simple single-platform app with 5-8 screens costs about $25,000-$50,000 CAD and takes 8-12 weeks. A mid-size iOS and Android app with 15-30 screens, payments and an admin panel is about $50,000-$150,000 over 12-24 weeks. Complex platforms with AI, IoT or compliance work start near $150,000 and take 6-18 months. Discovery is free, and your price is locked in before any code is written.',
        ],
      },
    ],
    proof: [
      { href: '/case-studies/fintech-trading-platform', label: 'Fintech trading platform', note: 'An AI-powered trading platform processing 50K+ transactions daily with 99.99% uptime for a Canadian fintech.' },
      { href: '/case-studies/payments-api-platform', label: 'Payments API platform', note: 'A PCI DSS certified payments API processing 12 million transactions a month.' },
      { href: '/case-studies/logistics-platform', label: 'Logistics & fleet platform', note: 'A real-time logistics platform handling 15K+ daily deliveries, with 25% fuel savings and a 98% on-time delivery rate.' },
    ],
    faqs: [
      {
        q: 'How much does app development cost in Calgary?',
        a: 'Using the ranges in our Canadian cost guide, a simple single-platform app costs about $25,000-$50,000 CAD, a mid-size iOS and Android app about $50,000-$150,000, and a complex platform $150,000 or more. After a free discovery phase you get a fixed price in CAD, so your budget is set before development begins.',
      },
      {
        q: 'Do you have developers in Calgary?',
        a: 'Our team is headquartered in Edmonton, about three hours from Calgary, and we do not have a Calgary office. We travel to Calgary for discovery workshops, design reviews and demos at your office, and run the rest of the project on weekly calls and shared project boards.',
      },
      {
        q: 'How long does it take to build an app?',
        a: 'A simple app with a handful of screens usually takes 8-12 weeks. A mid-size iOS and Android app with payments and an admin panel takes about 12-24 weeks, and complex platforms take 6-18 months. Your written scope includes a timeline with milestones such as beta and launch.',
      },
      {
        q: 'Can you build offline field apps for oil and gas crews?',
        a: 'Yes. We build inspection, safety and work-order apps that store data on the device, keep working with no signal at remote sites and sync to your systems when a connection returns. They can capture photos, signatures and GPS locations, and we plan the sync rules with your team during discovery.',
      },
      {
        q: 'Who owns the code for our app?',
        a: 'You do. All source code, app store accounts, cloud accounts and design files we create for your project belong to you, with no lock-in. You can keep working with us after launch or hand the code to your own team.',
      },
    ],
  },
  'ai-development-company-in-edmonton': {
    title: 'AI Development Company in Edmonton',
    description: 'Mapletech Labs is headquartered in Edmonton and builds AI chatbots, LLM features and automation for Alberta teams. Get a free quote.',
    intro: 'Mapletech Labs is headquartered in Edmonton, Alberta, so when you hire us for AI development you work with a local team. We build AI chatbots, large language model (LLM) features and workflow automation for Edmonton companies, public bodies and health providers. Our focus is practical AI that saves your staff time, answers from your own documents and keeps your data under control. You work directly with the senior engineers who build it, not a sales layer. Scope and price are fixed in CAD before any work starts, so the budget does not drift. Call us on +1-403-604-8692 to talk through your idea.',
    sections: [
      {
        heading: 'Where AI actually helps Edmonton organisations',
        body: [
          'Energy and field operations teams have thousands of pages of manuals and safety procedures, and AI search can find the right answer in seconds. It can also draft summaries of long inspection reports for a supervisor to check. Government and post-secondary teams can offer citizen or student help bots that show the source for every answer. Clinics can use AI to draft intake and triage notes, built to respect Alberta’s Health Information Act. Logistics firms can sort dispatch requests and triage busy email inboxes so staff spend less time on routine messages.',
        ],
      },
      {
        heading: 'Chatbots on your own documents, with sources',
        body: [
          'Most business chatbots should answer from your own content, not the open internet. We use retrieval-augmented generation (RAG): the bot first finds the relevant passages in your policies, manuals or knowledge base, then writes an answer and cites the source so staff can check it. Access control means each user only sees answers drawn from documents they are allowed to read. When a question is out of scope or the bot is not sure, it hands off to a person instead of guessing.',
        ],
      },
      {
        heading: 'Keeping data in Canada',
        body: [
          'Many Edmonton organisations need their data to stay in the country. We can host your AI system and its data in Canadian cloud regions, and we set up model providers so your data is not used to train their models. We design with PIPEDA and Alberta’s PIPA and Health Information Act in mind, with encryption, role-based access and audit logs. We can support your privacy impact assessment, but your own privacy officer should confirm the final compliance position before launch.',
        ],
      },
      {
        heading: 'What AI development costs',
        body: [
          'Our ',
          { href: '/blog/ai-development-cost-canada', label: 'AI development cost guide' },
          ' gives planning ranges for Canadian projects. Adding an LLM feature to an existing app is about $10,000-$35,000 CAD. A chatbot on your own documents, with sources, access control and hand-off, is about $15,000-$50,000. Custom model training starts around $75,000. These are planning ranges, not quotes. After a free discovery call we agree a fixed scope and a fixed price in CAD before any work starts.',
        ],
      },
    ],
    proof: [
      { href: '/case-studies/healthcare-telehealth', label: 'Telehealth platform', note: 'A HIPAA-compliant telehealth platform serving 200K+ patient sessions with 99.97% uptime for a leading Canadian healthcare provider.' },
      { href: '/case-studies/logistics-platform', label: 'Logistics & fleet platform', note: 'A real-time logistics platform handling 15K+ daily deliveries, with 25% fuel savings and a 98% on-time delivery rate.' },
      { href: '/case-studies/payments-api-platform', label: 'Payments API platform', note: 'A PCI DSS certified payments API processing 12 million transactions a month, securely and at scale.' },
    ],
    faqs: [
      {
        q: 'How much does AI development cost in Edmonton?',
        a: 'Using the planning ranges in our AI development cost guide, an LLM feature in an existing app is about $10,000-$35,000 CAD, a chatbot on your own documents about $15,000-$50,000, and custom model training $75,000 or more. These are not quotes. After a free discovery call you get a fixed price in CAD.',
      },
      {
        q: 'Can we meet your team in person in Edmonton?',
        a: 'Yes. Mapletech Labs is headquartered in Edmonton, so we can hold discovery workshops, reviews and demos at your office or site. Ongoing work runs on weekly calls and shared project boards, and we can meet in person again whenever a milestone needs it.',
      },
      {
        q: 'How long does it take to build a first AI chatbot?',
        a: 'A focused first version usually takes weeks rather than months, especially when your documents are already in good shape. Larger projects with many data sources, integrations or custom models take longer. Your written scope includes a timeline with clear milestones.',
      },
      {
        q: 'Does our data stay in Canada?',
        a: 'It can. We can host your AI system and its data in Canadian cloud regions and set up model providers so your data is not used for training. We design with PIPEDA, Alberta’s PIPA and the Health Information Act in mind, and your own privacy officer should confirm the final position.',
      },
      {
        q: 'Who owns the code and prompts?',
        a: 'You do. All source code, prompts, configuration and cloud accounts we create for your project belong to you, with no lock-in. You can keep working with us after launch or hand everything to your own team.',
      },
    ],
  },
  'app-development-company-in-toronto': {
    title: 'App Development Company in Toronto',
    description: 'Mapletech Labs is a Canadian team building iOS and Android apps for Toronto businesses, with a fixed CAD price agreed up front. Get a free quote.',
    intro: 'Mapletech Labs is a Canadian app development team headquartered in Edmonton, and we build iOS and Android apps for Toronto businesses. Edmonton is only two hours behind Toronto, so our working days overlap for most of yours and questions get answered the same day. We work with fintech firms, retailers, health providers and SaaS companies across the city. You deal directly with the senior engineers who write your code, and your contract is with a Canadian company, priced in CAD. Before any work starts you get a fixed scope and a fixed price. Call us on +1-403-604-8692 to talk through your app.',
    sections: [
      {
        heading: 'Apps Toronto businesses ask us for',
        body: [
          'Toronto is Canada’s financial centre, and fintech and banking-adjacent companies need secure mobile apps for payments, investing, lending and account access, built and tested with care. Retailers and e-commerce brands want shopping apps with fast checkout, loyalty programs and links to their store systems. Clinics and health providers need patient booking, telehealth and records apps that handle personal health information under Ontario’s PHIPA. B2B SaaS companies often need a companion iOS and Android app so their customers can use the core product on the go.',
        ],
      },
      {
        heading: 'Ontario rules your app has to meet',
        body: [
          'Public-facing apps from many Ontario organisations fall under the Accessibility for Ontarians with Disabilities Act (AODA), which points to WCAG 2.0 level AA. We design and test for it from the first screen: screen reader labels, colour contrast, text resizing and keyboard or switch access. Apps that hold health information need to meet PHIPA, and most private-sector apps that collect personal data fall under PIPEDA. We build in encryption, access control and audit logs, but your lawyer or privacy officer should confirm the final compliance position.',
        ],
      },
      {
        heading: 'Native or cross-platform: how we choose',
        body: [
          'Most Toronto apps have to reach both iPhone and Android users, so our usual advice is a cross-platform build in Flutter or React Native. A single codebase ships to both app stores and typically costs 30-40% less than paying for two separate native apps. If your app relies heavily on device hardware, Bluetooth sensors, large offline data sets or maximum performance, we build natively in Swift and Kotlin instead. Either way, we explain the trade-off for your app in plain language before you commit to a stack.',
        ],
      },
      {
        heading: 'What an app costs and how long it takes',
        body: [
          'Our ',
          { href: '/blog/app-development-cost-canada', label: 'Canadian app development cost guide' },
          ' puts a simple single-platform app with 5-8 screens at about $25,000-$50,000 CAD over 8-12 weeks. A mid-size iOS and Android app with 15-30 screens, payments and an admin panel is about $50,000-$150,000 over 12-24 weeks. Complex platforms with AI, IoT or compliance work start near $150,000 and take 6-18 months. If you are still comparing vendors, our ',
          { href: '/blog/software-development-companies-toronto', label: 'guide to choosing a Toronto software company' },
          ' lists the questions to ask. Discovery is free, and your price is fixed before coding starts.',
        ],
      },
    ],
    proof: [
      { href: '/case-studies/fintech-trading-platform', label: 'Fintech trading platform', note: 'An AI-powered trading platform processing 50K+ transactions daily with 99.99% uptime for a leading Canadian fintech.' },
      { href: '/case-studies/ecommerce-platform', label: 'E-commerce platform', note: 'A high-performance e-commerce platform driving 3x revenue growth and handling 2M+ monthly visitors for a leading Canadian retailer.' },
      { href: '/case-studies/healthcare-telehealth', label: 'Telehealth platform', note: 'A HIPAA-compliant telehealth platform serving 200K+ patient sessions with 99.97% uptime for a leading Canadian healthcare provider.' },
    ],
    faqs: [
      {
        q: 'How much does app development cost in Toronto?',
        a: 'Using the ranges in our Canadian cost guide, a simple single-platform app costs about $25,000-$50,000 CAD, a mid-size iOS and Android app about $50,000-$150,000, and a complex platform $150,000 or more. After a free discovery phase you get a fixed price in CAD, so your budget is set before development begins.',
      },
      {
        q: 'Do you have an office in Toronto?',
        a: 'No. Mapletech Labs is headquartered in Edmonton and we do not have a Toronto office. We serve Toronto clients remotely, with working hours that overlap for most of the day, and we come to Toronto for in-person workshops when a milestone needs one, with travel agreed up front.',
      },
      {
        q: 'Will our app meet AODA accessibility rules?',
        a: 'We design and test to WCAG 2.0 level AA, the standard the AODA points to, covering screen readers, colour contrast, text size and alternative input. We can share our accessibility test results with you, and your own legal team should confirm whether and how the AODA applies to your organisation.',
      },
      {
        q: 'How long does it take to build an app?',
        a: 'A simple app with a handful of screens usually takes 8-12 weeks. A mid-size iOS and Android app with payments and an admin panel takes about 12-24 weeks, and complex platforms take 6-18 months. Your written scope includes a timeline with milestones such as beta and launch.',
      },
      {
        q: 'Who owns the code for our app?',
        a: 'You do. All source code, app store accounts, cloud accounts and design files we create for your project belong to you, with no lock-in. You can keep working with us after launch or hand the code to your own team.',
      },
    ],
  },
  'ai-development-company-in-calgary': {
    title: 'AI Development Company in Calgary',
    description: 'Mapletech Labs builds AI chatbots, LLM features and automation for Calgary companies, from an Alberta team with fixed CAD pricing. Get a free quote.',
    intro: 'Mapletech Labs is an Alberta company headquartered in Edmonton, roughly a three-hour drive north of Calgary and in the same time zone, so our working days line up with yours. We build AI chatbots, large language model (LLM) features and workflow automation for Calgary businesses that want AI to take routine work off their staff. You work directly with the senior engineers who design and build your system, with no sales layer in between. Scope and price are fixed in CAD before any work begins, so your budget stays put. Call us on +1-403-604-8692 to discuss your project.',
    sections: [
      {
        heading: 'Where AI helps Calgary businesses',
        body: [
          'Energy and oil and gas head offices hold huge libraries of technical manuals, regulatory filings and safety procedures, and AI search lets staff find the right passage in seconds instead of digging through folders. It can also condense long reports into short summaries for an engineer to review. Financial services and insurance teams can use AI for document intake and claims triage, with a person checking each result before it moves on. Logistics and transportation firms can sort dispatch emails automatically, agribusinesses can pull answers from crop, equipment and supplier records, and Calgary’s growing tech and startup scene can add LLM features to their SaaS products.',
        ],
      },
      {
        heading: 'Chatbots that answer from your own documents',
        body: [
          'A useful business chatbot should answer from what your company actually knows, not from whatever is on the public web. We build them with retrieval-augmented generation (RAG): when someone asks a question, the system looks up the matching sections in your manuals, policies or knowledge base, writes a reply from them and links to the source so the answer can be checked. Permissions follow your existing access rules, so people only get answers from documents they are cleared to see. If the bot is unsure or the question falls outside its scope, it passes the conversation to a person rather than making something up.',
        ],
      },
      {
        heading: 'Data residency, privacy and Alberta rules',
        body: [
          'Many Calgary companies, especially in energy and finance, want their data kept inside Canada. We can run your AI system and store its data in Canadian cloud regions, and we configure model providers so your information is not used to train their models. We design with PIPEDA and Alberta’s PIPA in mind, using encryption, role-based access and audit logs that show who asked what and when. We can help you prepare for a privacy review, but your own privacy officer should confirm the final compliance position before launch.',
        ],
      },
      {
        heading: 'What AI development costs',
        body: [
          'Our ',
          { href: '/blog/ai-development-cost-canada', label: 'AI development cost guide' },
          ' sets out planning ranges for Canadian projects. An LLM feature in an existing app is about $10,000-$35,000 CAD. A document chatbot with sources, access control and hand-off to staff is about $15,000-$50,000. Custom model training starts around $75,000. These are planning ranges, not quotes: after a free discovery call we agree a fixed scope and a fixed price in CAD before work begins. If you are comparing vendors, our ',
          { href: '/blog/software-development-companies-calgary', label: 'guide to choosing a Calgary software company' },
          ' covers the questions worth asking.',
        ],
      },
    ],
    proof: [
      { href: '/case-studies/fintech-trading-platform', label: 'Fintech trading platform', note: 'An AI-powered trading platform processing 50K+ transactions daily with 99.99% uptime for a leading Canadian fintech.' },
      { href: '/case-studies/logistics-platform', label: 'Logistics & fleet platform', note: 'A real-time logistics platform handling 15K+ daily deliveries, with 25% fuel savings and a 98% on-time delivery rate.' },
      { href: '/case-studies/payments-api-platform', label: 'Payments API platform', note: 'A PCI DSS certified payments API processing 12 million transactions a month, securely and at scale.' },
    ],
    faqs: [
      {
        q: 'How much does AI development cost in Calgary?',
        a: 'Based on the planning ranges in our AI development cost guide, an LLM feature in an existing app costs about $10,000-$35,000 CAD, a document chatbot with sources and access control about $15,000-$50,000, and custom model training starts around $75,000. These are not quotes. After a free discovery call you get a fixed price in CAD.',
      },
      {
        q: 'Do you have an office in Calgary?',
        a: 'No. Mapletech Labs is headquartered in Edmonton, about a three-hour drive from Calgary and in the same time zone. We serve Calgary clients remotely through weekly calls and shared project boards, and our team can come to Calgary for in-person workshops by arrangement.',
      },
      {
        q: 'How long does a first AI chatbot take?',
        a: 'A focused first version is usually a matter of weeks, not months, particularly when your documents are already organised. Projects that pull from many data sources, connect to several systems or need custom models take longer. Your written scope sets out the timeline and milestones before work starts.',
      },
      {
        q: 'Does our data stay in Canada?',
        a: 'It can. We can host your AI system and its data in Canadian cloud regions and configure model providers so your data is not used for training. We design with PIPEDA and Alberta’s PIPA in mind, with encryption, role-based access and audit logs, and your own privacy officer should confirm the final position.',
      },
      {
        q: 'Who owns the code and prompts?',
        a: 'You do. All source code, prompts, configuration and cloud accounts we create for your project belong to you, with no lock-in. You can keep working with us after launch or move everything to your own team.',
      },
    ],
  },
};
