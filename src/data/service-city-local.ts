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
  'app-development-company-in-vancouver': {
    title: 'App Development Company in Vancouver',
    description: 'Mapletech Labs builds iOS and Android apps for Vancouver and BC businesses, with a Canadian contract and a fixed CAD price up front. Get a free quote.',
    intro: 'Mapletech Labs is a Canadian app development team headquartered in Edmonton, and we build iOS and Android apps for Vancouver businesses. Edmonton is just one hour ahead of Vancouver, so our working days almost fully overlap and you rarely wait for an answer. We work with Vancouver startups, retailers, health providers, tourism operators and film and creative companies. You speak directly with the senior engineers who build your app, and you sign with a Canadian company, priced in CAD. Scope and price are fixed before any work starts. Call us on +1-403-604-8692 to talk about your app.',
    sections: [
      {
        heading: 'Apps Vancouver businesses ask us for',
        body: [
          'Vancouver’s tech startups and SaaS companies often come to us for a companion mobile app for their web product, or for a lean MVP to test with early users and investors. Retail, outdoor and apparel brands want shopping and loyalty apps that tie into their online store and reward repeat customers. Health and wellness providers need appointment booking and telehealth apps that keep personal health information private. Tourism, hospitality and events businesses ask for booking and visitor guide apps, and port, logistics and trades firms need field apps for crews and tracking apps for shipments and jobs.',
        ],
      },
      {
        heading: 'BC privacy rules your app has to meet',
        body: [
          'Most private-sector apps in British Columbia fall under BC’s Personal Information Protection Act (PIPA), and apps built for BC public bodies fall under the Freedom of Information and Protection of Privacy Act (FIPPA). We plan for Canadian data hosting where your project needs it, and we build in encryption, access control and audit logs from the start. We also design and test for accessibility to WCAG 2.1 level AA. Our ',
          { href: '/blog/app-privacy-compliance-canada', label: 'Canadian app privacy checklist' },
          ' explains the basics, but your lawyer or privacy officer should confirm the final compliance position.',
        ],
      },
      {
        heading: 'Native or cross-platform: how we choose',
        body: [
          'For most Vancouver clients we recommend Flutter or React Native, because one shared codebase reaches both the App Store and Google Play. That usually costs 30-40% less than building and maintaining two separate native apps. We switch to native Swift for iOS and Kotlin for Android when your app leans hard on device hardware or Bluetooth, has to store large amounts of data offline, or needs the best possible performance. We walk you through the reasons for our recommendation before you choose.',
        ],
      },
      {
        heading: 'What an app costs and how long it takes',
        body: [
          'Our ',
          { href: '/blog/app-development-cost-canada', label: 'Canadian app development cost guide' },
          ' puts a simple single-platform app with 5-8 screens at about $25,000-$50,000 CAD over 8-12 weeks. A mid-size iOS and Android app with 15-30 screens, payments and an admin panel is about $50,000-$150,000 over 12-24 weeks. Complex platforms with AI, IoT or compliance work start near $150,000 and take 6-18 months. If you are still weighing up vendors, our ',
          { href: '/blog/software-development-companies-vancouver', label: 'guide to choosing a Vancouver software company' },
          ' covers the questions to ask. Discovery is free, and your price is fixed before coding starts.',
        ],
      },
    ],
    proof: [
      { href: '/case-studies/ecommerce-platform', label: 'E-commerce platform', note: 'A high-performance e-commerce platform driving 3x revenue growth and handling 2M+ monthly visitors for a leading Canadian retailer.' },
      { href: '/case-studies/healthcare-telehealth', label: 'Telehealth platform', note: 'A HIPAA-compliant telehealth platform serving 200K+ patient sessions with 99.97% uptime for a leading Canadian healthcare provider.' },
      { href: '/case-studies/real-estate-portal', label: 'Real estate portal', note: 'A real estate platform for PropConnect Canada with machine-learning recommendations across 850,000+ active listings.' },
    ],
    faqs: [
      {
        q: 'How much does app development cost in Vancouver?',
        a: 'Based on the ranges in our Canadian cost guide, a simple single-platform app costs about $25,000-$50,000 CAD, a mid-size iOS and Android app about $50,000-$150,000, and a complex platform $150,000 or more. After a free discovery phase you get a fixed price in CAD, so your budget is settled before development begins.',
      },
      {
        q: 'Do you have an office in Vancouver?',
        a: 'No. Mapletech Labs is headquartered in Edmonton and we do not have a Vancouver office. We serve Vancouver and BC clients remotely, with working hours that almost fully overlap, and we can hold in-person workshops in Vancouver by arrangement, with travel agreed up front.',
      },
      {
        q: 'Will our app meet BC privacy rules?',
        a: 'We build with BC’s PIPA in mind for private-sector apps, and FIPPA for apps used by BC public bodies, with Canadian data hosting where needed, encryption, access control and audit logs. We can document how your app handles personal information, and your lawyer or privacy officer should confirm the final compliance position.',
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
  'ai-development-company-in-toronto': {
    title: 'AI Development Company in Toronto',
    description: 'Mapletech Labs builds AI chatbots, LLM features and automation for Toronto businesses, with a fixed CAD price agreed up front. Get a free quote.',
    intro: 'Mapletech Labs is a Canadian AI development team headquartered in Edmonton, and we build AI chatbots, large language model (LLM) features and workflow automation for Toronto businesses. Edmonton is two hours behind Toronto, so most of your working day overlaps with ours and questions get answered the same day. We focus on practical AI that saves staff time and answers from your own documents. You work directly with the senior engineers who build your system, not a sales layer. Your contract is with a Canadian company, priced in CAD, with a fixed scope and a fixed price agreed before work starts. Call us on +1-403-604-8692 to talk through your idea.',
    sections: [
      {
        heading: 'Where AI helps Toronto businesses',
        body: [
          'Banks and fintech firms use AI to review documents faster, run customer support bots that hand off to a person when needed, and triage fraud alerts so analysts check the most urgent ones first. Insurance teams can turn long claims intake files into short summaries for an adjuster to review. Legal and professional services firms can search across contracts and precedents in seconds. Retail and e-commerce brands use AI for smarter product search and customer support, and SaaS companies add AI features directly inside their product.',
        ],
      },
      {
        heading: 'Chatbots on your own documents, with sources',
        body: [
          'A business chatbot is only useful if it answers from what your company actually knows. We build them with retrieval-augmented generation (RAG): when someone asks a question, the system first pulls the matching passages from your policies, manuals or knowledge base, then writes a reply from them and cites the source so it can be checked. Permissions follow your existing access rules, so each person only gets answers from documents they are allowed to see. When the bot is unsure, it passes the question to a person instead of guessing.',
        ],
      },
      {
        heading: 'Privacy and financial-sector rules',
        body: [
          'Most private-sector personal data in Ontario falls under PIPEDA, and personal health information falls under Ontario’s PHIPA. Federally regulated financial institutions follow OSFI guidance on model risk, so we document each model, test it before launch and keep audit logs of what it was asked and how it answered. We can host your AI system and its data in Canadian cloud regions, and we set up model providers so they do not train on your data. Your privacy officer or lawyer should confirm the final compliance position.',
        ],
      },
      {
        heading: 'What AI development costs',
        body: [
          'Our ',
          { href: '/blog/ai-development-cost-canada', label: 'AI development cost guide' },
          ' gives planning ranges for Canadian projects. Adding an LLM feature to an existing app is about $10,000-$35,000 CAD. A chatbot on your own documents is about $15,000-$50,000. Custom model training starts around $75,000. If you are still comparing vendors, our ',
          { href: '/blog/ai-development-companies-canada', label: 'guide to AI development companies in Canada' },
          ' lists the questions to ask. Discovery is free, and your price is fixed before coding starts.',
        ],
      },
    ],
    proof: [
      { href: '/case-studies/fintech-trading-platform', label: 'Fintech trading platform', note: 'An AI-powered trading platform processing 50K+ transactions daily with 99.99% uptime for a leading Canadian fintech.' },
      { href: '/case-studies/payments-api-platform', label: 'Payments API platform', note: 'A PCI DSS certified payments API processing 12 million transactions a month, securely and at scale.' },
      { href: '/case-studies/healthcare-telehealth', label: 'Telehealth platform', note: 'A HIPAA-compliant telehealth platform serving 200K+ patient sessions with 99.97% uptime for a leading Canadian healthcare provider.' },
    ],
    faqs: [
      {
        q: 'How much does AI development cost in Toronto?',
        a: 'Using the planning ranges in our AI development cost guide, an LLM feature in an existing app is about $10,000-$35,000 CAD, a chatbot on your own documents about $15,000-$50,000, and custom model training starts around $75,000. These are not quotes. After a free discovery call you get a fixed price in CAD.',
      },
      {
        q: 'Do you have an office in Toronto?',
        a: 'No. Mapletech Labs is headquartered in Edmonton and we do not have a Toronto office. We serve Toronto clients remotely, with working hours that overlap for most of the day, and we come to Toronto for in-person workshops when a milestone needs one, with travel agreed up front.',
      },
      {
        q: 'Can AI be used in a regulated bank or fintech?',
        a: 'Yes, with the right controls. We build in human review for important decisions, audit logs of every question and answer, documentation of each model and how it was tested, and Canadian hosting. Your compliance team should confirm the final position for your organisation.',
      },
      {
        q: 'Does our data stay in Canada?',
        a: 'It can. We can host your AI system and its data in Canadian cloud regions and set up model providers so your data is not used for training. We design with PIPEDA and Ontario’s PHIPA in mind, with encryption, role-based access and audit logs, and your own privacy officer should confirm the final position.',
      },
      {
        q: 'Who owns the code and prompts?',
        a: 'You do. All source code, prompts, configuration and cloud accounts we create for your project belong to you, with no lock-in. You can keep working with us after launch or hand everything to your own team.',
      },
    ],
  },
  'ai-development-company-in-vancouver': {
    title: 'AI Development Company in Vancouver',
    description: 'Mapletech Labs builds AI chatbots, LLM features and automation for Vancouver and BC businesses, with a fixed CAD price agreed up front. Free quote.',
    intro: 'Mapletech Labs is a Canadian AI development team headquartered in Edmonton, and we build AI chatbots, large language model (LLM) features and workflow automation for Vancouver businesses. Vancouver is one hour behind Edmonton, so our working days almost fully overlap and questions get answered the same day. You work directly with the senior engineers who design and build your system, not a sales layer. Your contract is with a Canadian company, priced in CAD, with a fixed scope and a fixed price agreed before work starts. Call us on +1-403-604-8692 to talk through your idea.',
    sections: [
      {
        heading: 'Where AI helps Vancouver businesses',
        body: [
          'Tech and SaaS startups add AI features directly inside their product and run support bots that answer common questions around the clock. Film, VFX and gaming studios can search large asset libraries and production documents in seconds instead of digging through folders. Tourism and hospitality businesses can offer multilingual guest help. Port, logistics and trade companies can sort shipping documents and busy email inboxes automatically. Clean-tech and real estate teams can turn long reports into short summaries for staff to check.',
        ],
      },
      {
        heading: 'Chatbots on your own documents, with sources',
        body: [
          'A useful business chatbot answers from your own material, not from whatever the open internet says. We build it with retrieval-augmented generation (RAG). In plain words, the system first looks up the right passages in your manuals, policies or help centre, then writes its reply from those passages and shows where each answer came from. Access rules decide which documents each person can draw on. If a question falls outside what the bot knows, it passes the conversation to a member of your team.',
        ],
      },
      {
        heading: 'BC privacy rules and keeping data in Canada',
        body: [
          'Private-sector organisations in British Columbia fall under BC’s Personal Information Protection Act (PIPA). BC public bodies fall under the Freedom of Information and Protection of Privacy Act (FIPPA), which has its own rules on storing personal information outside Canada. We can host your AI system and its data in Canadian cloud regions and set up model providers so they do not train on your data, with encryption, role-based access and audit logs. Your privacy officer should confirm the final compliance position.',
        ],
      },
      {
        heading: 'What AI development costs',
        body: [
          'Our ',
          { href: '/blog/ai-development-cost-canada', label: 'AI development cost guide' },
          ' gives planning ranges for Canadian projects. Adding an LLM feature to an existing app is about $10,000-$35,000 CAD. A chatbot on your own documents is about $15,000-$50,000. Custom model training starts around $75,000. If you are comparing local vendors, our ',
          { href: '/blog/software-development-companies-vancouver', label: 'guide to Vancouver software companies' },
          ' lists the questions to ask. Discovery is free, and your price is fixed before coding starts.',
        ],
      },
    ],
    proof: [
      { href: '/case-studies/ecommerce-platform', label: 'E-commerce platform', note: 'A high-performance e-commerce platform driving 3x revenue growth and handling 2M+ monthly visitors for a Canadian retailer.' },
      { href: '/case-studies/logistics-platform', label: 'Logistics & fleet platform', note: 'A real-time logistics platform handling 15K+ daily deliveries, with 25% fuel savings and a 98% on-time delivery rate.' },
      { href: '/case-studies/fintech-trading-platform', label: 'Fintech trading platform', note: 'An AI-powered trading platform processing 50K+ transactions daily with 99.99% uptime for a leading Canadian fintech.' },
    ],
    faqs: [
      {
        q: 'How much does AI development cost in Vancouver?',
        a: 'Using the planning ranges in our AI development cost guide, an LLM feature in an existing app is about $10,000-$35,000 CAD, a chatbot on your own documents about $15,000-$50,000, and custom model training starts around $75,000. These are not quotes. After a free discovery call you get a fixed price in CAD.',
      },
      {
        q: 'Do you have an office in Vancouver?',
        a: 'No. Mapletech Labs is headquartered in Edmonton and we do not have a Vancouver office. Edmonton is one hour ahead of Vancouver, so we serve Vancouver clients remotely with almost the same working day, and we come to Vancouver for in-person workshops when a milestone needs one, with travel agreed up front.',
      },
      {
        q: 'Can our data stay in Canada under BC rules?',
        a: 'Yes. We can host your AI system and its data in Canadian cloud regions and set up model providers so your data is not used for training. We design with BC’s PIPA and, for public bodies, FIPPA in mind, with encryption, role-based access and audit logs. Your privacy officer should confirm the final position.',
      },
      {
        q: 'How long does a first AI chatbot take?',
        a: 'A focused first version usually takes weeks rather than months, especially when your documents are already in good shape. Larger projects with many data sources, integrations or custom models take longer. Your written scope includes a timeline with clear milestones.',
      },
      {
        q: 'Who owns the code and prompts?',
        a: 'You do. All source code, prompts, configuration and cloud accounts we create for your project belong to you, with no lock-in. You can keep working with us after launch or hand everything to your own team.',
      },
    ],
  },
  'digital-marketing-agency-in-edmonton': {
    title: 'Digital Marketing Agency in Edmonton',
    description: 'Mapletech Labs in Edmonton runs SEO, Google Ads, social and content for Alberta businesses — one local team, CAD retainers. +1-403-604-8692.',
    intro: 'Mapletech Labs is headquartered in Edmonton, so when you hire us for digital marketing you get one local team covering SEO, Google Ads, social media and content — not a rotating account manager and not separate vendors for each channel. We align search, paid and organic social to the leads you actually need in Alberta, with reporting you can read without a glossary. Call +1-403-604-8692 to talk about your mix.',
    sections: [
      {
        heading: 'One Edmonton team for SEO, Google Ads, social and content',
        body: [
          'Your SEO, PPC, social and content work sits with the same specialists who know your site and your market, so messaging stays consistent and budget does not fight itself. We plan campaigns around Edmonton and Alberta search behaviour, seasonality in energy and trades, and the channels that fit your sales cycle. Focused on search only? See our ',
          { href: '/locations/seo-company-in-edmonton', label: 'SEO Company in Edmonton' },
          ' page for a SEO-first scope.',
        ],
      },
      {
        heading: 'How we split your budget across channels',
        body: [
          'Most Alberta businesses need a base of technical SEO and local visibility, then paid search or social where competition or speed demands it. We scope ',
          { href: '/services/digital-marketing/google-ads-ppc', label: 'Google Ads and PPC' },
          ', ',
          { href: '/services/digital-marketing/social-media-marketing', label: 'social media marketing' },
          ', and ',
          { href: '/services/digital-marketing/content-marketing', label: 'content marketing' },
          ' as separate line items with clear KPIs, so you can ramp one channel without guessing what the retainer covers.',
        ],
      },
      {
        heading: 'What digital marketing costs in Edmonton',
        body: [
          'Typical Canadian agency ranges — not quotes from us — are published in our ',
          { href: '/blog/digital-marketing-cost-canada', label: 'digital marketing cost guide for Canada' },
          ': SEO about $1,500-$10,000 per month, PPC management about $2,000-$15,000 per month plus ad spend, social media about $1,000-$8,000 per month, content marketing about $2,000-$10,000 per month, and full-service packages about $5,000-$25,000 per month. After a free review we quote a fixed monthly scope in CAD for the channels you choose.',
        ],
      },
      {
        heading: 'Reporting you can read',
        body: [
          'Each cycle you get rankings, traffic, spend, conversions and the work completed, with plain-language notes on what we changed and what we are testing next. Deeper funnel and attribution views live on our ',
          { href: '/services/digital-marketing/performance-analytics', label: 'performance analytics' },
          ' service when you need executive-ready dashboards, not only export screenshots.',
        ],
      },
    ],
    proof: [
      { href: '/case-studies/ecommerce-platform', label: 'E-commerce platform', note: 'A high-performance e-commerce platform driving 3x revenue growth and handling 2M+ monthly visitors for a Canadian retailer.' },
      { href: '/case-studies/real-estate-portal', label: 'Real estate portal', note: 'PropConnect Canada\'s real estate platform, with machine-learning recommendations across 850,000+ active listings.' },
      { href: '/case-studies/logistics-platform', label: 'Logistics & fleet platform', note: 'A real-time logistics platform handling 15K+ daily deliveries, with 25% fuel savings and a 98% on-time delivery rate.' },
    ],
    faqs: [
      {
        q: 'How much does digital marketing cost in Edmonton?',
        a: 'In our Canadian digital marketing cost guide, SEO typically runs about $1,500-$10,000 per month, PPC management about $2,000-$15,000 per month plus ad spend, social media about $1,000-$8,000 per month, content marketing about $2,000-$10,000 per month, and full-service packages about $5,000-$25,000 per month in CAD. Your quote depends on which channels you need and how competitive your market is. We confirm a fixed monthly scope in CAD after a free review.',
      },
      {
        q: 'Is there a minimum contract term?',
        a: 'We work on monthly retainers with clear scope and reporting. Most clients stay because the work produces measurable traffic and leads, but we do not use multi-year lock-ins. If you need a defined end date for a project phase, such as a technical audit or a one-time campaign build, we can scope that separately.',
      },
      {
        q: 'Should we start with SEO or paid ads?',
        a: 'If you need leads quickly and have budget for ad spend, Google Ads often complements a thin organic base. If your site has technical blockers or weak local visibility, we usually fix SEO and Google Business Profile first so paid traffic lands on pages that convert. We recommend a mix based on where your revenue comes from today, not a generic package.',
      },
      {
        q: 'How soon will we see results?',
        a: 'Paid search can produce leads within weeks once campaigns and landing pages are live. SEO and content usually need several months before trend lines are fair to judge; local gains often show in 8-16 weeks when the site has no major technical blockers. We set expectations in the first report and track leading indicators such as impressions and conversions, not only position charts.',
      },
      {
        q: 'Can we meet your team in person in Edmonton?',
        a: 'Yes. Mapletech Labs is headquartered in Edmonton, so we can hold strategy sessions, reviews and workshops at your office or site. Day-to-day work runs on calls and shared reports, and you can meet in person again whenever a milestone needs it.',
      },
    ],
  },
  'digital-marketing-agency-in-calgary': {
    title: 'Digital Marketing Agency in Calgary',
    description: 'Calgary digital marketing from one Alberta team: SEO, Google Ads, social and content on clear CAD retainers. Call +1-403-604-8692.',
    intro: 'Mapletech Labs is an Alberta team headquartered in Edmonton, and we work with Calgary businesses that want one partner for their digital marketing. The same team covers SEO, Google Ads, social media and content, so your channels share one plan and one set of numbers instead of four vendors pointing at each other. When a project needs it, we travel to Calgary for discovery meetings and reviews in person; day-to-day work runs on calls and shared reports. Retainers are priced in CAD with a written monthly scope. Call +1-403-604-8692 to talk about growing your Calgary leads.',
    sections: [
      {
        heading: 'Calgary markets we market for',
        body: [
          'Each Calgary industry buys differently, so the channel plan changes with it. Energy and oilfield services firms sell through long B2B buying cycles, where search visibility, LinkedIn and useful technical content keep you on the shortlist for months. Fintech startups need fast paid tests and clear landing pages to prove demand. Construction and trades companies win on the local pack and “near me” searches across Calgary, Airdrie and Cochrane. Real estate teams and professional services firms need steady referral-style leads from search and social. Only need search work? See our ',
          { href: '/locations/seo-company-in-calgary', label: 'SEO Company in Calgary' },
          ' page for an SEO-only scope.',
        ],
      },
      {
        heading: 'Picking the right channel mix',
        body: [
          'We do not sell every channel to every client. A Calgary trades company may only need local SEO plus a small search campaign, while a fintech launch may lean on paid ads and content first. We scope ',
          { href: '/services/digital-marketing/google-ads-ppc', label: 'Google Ads and PPC' },
          ', ',
          { href: '/services/digital-marketing/social-media-marketing', label: 'social media marketing' },
          ' and ',
          { href: '/services/digital-marketing/content-marketing', label: 'content marketing' },
          ' as separate line items with their own goals, so you can see what each one returns and move budget to the channel that is working.',
        ],
      },
      {
        heading: 'What digital marketing costs in Calgary',
        body: [
          'These are typical Canadian ranges from our ',
          { href: '/blog/digital-marketing-cost-canada', label: 'digital marketing cost guide for Canada' },
          ', not quotes: SEO about $1,500-$10,000 per month, PPC management about $2,000-$15,000 per month plus ad spend, social media about $1,000-$8,000 per month, content marketing about $2,000-$10,000 per month, and full-service packages about $5,000-$25,000 per month. Your Calgary scope is quoted in CAD after a free review of your site, ads accounts and competitors.',
        ],
      },
      {
        heading: 'Reports tied to leads, not vanity numbers',
        body: [
          'Every month you see what the budget did: rankings, traffic, ad spend, cost per lead, conversions and the work we completed, with short notes on what we are changing next. When you need attribution across channels or dashboards for leadership, our ',
          { href: '/services/digital-marketing/performance-analytics', label: 'performance analytics' },
          ' service connects your ads, analytics and CRM data in one view.',
        ],
      },
    ],
    proof: [
      { href: '/case-studies/ecommerce-platform', label: 'E-commerce platform', note: 'A high-performance e-commerce platform driving 3x revenue growth and handling 2M+ monthly visitors for a Canadian retailer.' },
      { href: '/case-studies/real-estate-portal', label: 'Real estate portal', note: 'PropConnect Canada\'s real estate platform, with machine-learning recommendations across 850,000+ active listings.' },
      { href: '/case-studies/fintech-trading-platform', label: 'Fintech trading platform', note: 'An AI-powered trading platform processing 50K+ transactions daily with 99.99% uptime for a leading Canadian fintech.' },
    ],
    faqs: [
      {
        q: 'How much does a digital marketing agency cost in Calgary?',
        a: 'Our Canadian cost guide puts typical monthly ranges at about $1,500-$10,000 for SEO, $2,000-$15,000 for PPC management plus ad spend, $1,000-$8,000 for social media, $2,000-$10,000 for content marketing, and $5,000-$25,000 for full-service packages, all in CAD. These are market ranges, not quotes. Your Calgary price depends on the channels you pick and how competitive your industry is, and we confirm a fixed monthly scope after a free review.',
      },
      {
        q: 'Should a Calgary business start with SEO or Google Ads?',
        a: 'If you need leads this quarter and have ad budget, Google Ads gets you in front of buyers while SEO builds. If your site is slow, poorly indexed or missing from the Calgary map pack, we usually fix that first so paid clicks land on pages that convert. Many clients run both: a lean search campaign for fast leads and SEO for lower cost per lead over time.',
      },
      {
        q: 'How soon will we see results?',
        a: 'Google Ads can bring leads within the first few weeks once campaigns and landing pages are live. SEO and content take longer: local map-pack gains often show in 8-16 weeks if the site has no major technical blockers, and competitive terms take several months. Your first report sets clear expectations and tracks early signals such as impressions, calls and form fills.',
      },
      {
        q: 'Can we meet your team in person in Calgary?',
        a: 'Yes. We are headquartered in Edmonton and drive down to Calgary for discovery meetings, strategy sessions and reviews when your project needs it. Between visits, work runs on video calls and shared reports, so you always know what is happening without waiting for the next meeting.',
      },
      {
        q: 'Do you manage our Google Business Profile for the Calgary map pack?',
        a: 'Yes. We set up or clean up your Google Business Profile with honest service-area settings, accurate categories and services, and the same name, address and phone across directories. We never create fake Calgary addresses or virtual offices, because those get profiles suspended. A clean profile with consistent citations and real reviews is what keeps you in the map pack.',
      },
    ],
  },
  'digital-marketing-agency-in-toronto': {
    title: 'Digital Marketing Agency in Toronto',
    description: 'SEO, Google Ads, social and content for Toronto and the GTA from one Canadian team. Monthly retainers in CAD. Call +1-403-604-8692.',
    intro: 'Mapletech Labs is a Canadian team headquartered in Edmonton, working with Toronto and GTA businesses that want one partner for SEO, Google Ads, social media and content. We do not have a Toronto office. Edmonton is two hours behind Toronto, so most of the working day overlaps, and we come to Toronto for workshops and milestone reviews when a project needs it, with travel agreed up front. One team covers SEO, Google Ads, social and content — not separate vendors for each channel. Retainers are priced in CAD. Call +1-403-604-8692 to talk about your channel mix.',
    sections: [
      {
        heading: 'Why the Toronto and GTA paid-search market is tough',
        body: [
          'The GTA is one of Canada\'s most crowded advertising markets: cost per click runs high in finance, legal, real estate and SaaS, and buyers compare vendors before they ever fill a form. Search intent also splits by suburb — what works for downtown Toronto often differs from Mississauga, Brampton, Markham or Vaughan. We plan budgets around those splits instead of one generic metro campaign. Need search only? See our ',
          { href: '/locations/seo-company-in-toronto', label: 'SEO Company in Toronto' },
          ' page for an SEO-only scope.',
        ],
      },
      {
        heading: 'One plan across search, paid and social',
        body: [
          'We align organic search, paid campaigns and social posts to the same lead goals, so messaging and landing pages stay consistent when someone moves from an ad to your site or from a post to a service page. Each channel is scoped separately with clear KPIs: ',
          { href: '/services/digital-marketing/google-ads-ppc', label: 'Google Ads and PPC' },
          ', ',
          { href: '/services/digital-marketing/social-media-marketing', label: 'social media marketing' },
          ', and ',
          { href: '/services/digital-marketing/content-marketing', label: 'content marketing' },
          '. You can ramp one channel without guessing what the retainer covers.',
        ],
      },
      {
        heading: 'What digital marketing costs in Toronto',
        body: [
          'Typical Canadian agency ranges — not quotes from us — are published in our ',
          { href: '/blog/digital-marketing-cost-canada', label: 'digital marketing cost guide for Canada' },
          ': SEO about $1,500-$10,000 per month, PPC management about $2,000-$15,000 per month plus ad spend, social media about $1,000-$8,000 per month, content marketing about $2,000-$10,000 per month, and full-service packages about $5,000-$25,000 per month. Ad spend in the GTA often runs higher than smaller markets because clicks are more competitive. After a free review we quote a fixed monthly scope in CAD for the channels you choose.',
        ],
      },
      {
        heading: 'Reporting you can act on',
        body: [
          'Each cycle you get rankings, traffic, ad spend, conversions and the work completed, with plain-language notes on what we changed and what we are testing next. When leadership needs attribution across channels, our ',
          { href: '/services/digital-marketing/performance-analytics', label: 'performance analytics' },
          ' service connects ads, analytics and CRM data in one view instead of export screenshots alone.',
        ],
      },
    ],
    proof: [
      { href: '/case-studies/ecommerce-platform', label: 'E-commerce platform', note: 'A high-performance e-commerce platform driving 3x revenue growth and handling 2M+ monthly visitors for a Canadian retailer.' },
      { href: '/case-studies/real-estate-portal', label: 'Real estate portal', note: 'PropConnect Canada\'s real estate platform, with machine-learning recommendations across 850,000+ active listings.' },
      { href: '/case-studies/fintech-trading-platform', label: 'Fintech trading platform', note: 'An AI-powered trading platform processing 50K+ transactions daily with 99.99% uptime for a leading Canadian fintech.' },
    ],
    faqs: [
      {
        q: 'How much does digital marketing cost in Toronto?',
        a: 'In our Canadian digital marketing cost guide, SEO typically runs about $1,500-$10,000 per month, PPC management about $2,000-$15,000 per month plus ad spend, social media about $1,000-$8,000 per month, content marketing about $2,000-$10,000 per month, and full-service packages about $5,000-$25,000 per month in CAD. GTA ad spend often sits above smaller cities because clicks cost more. We confirm a fixed monthly scope in CAD after a free review.',
      },
      {
        q: 'Do you have an office in Toronto?',
        a: 'No. Mapletech Labs is headquartered in Edmonton. We do not maintain a Toronto office. Edmonton is two hours behind Toronto, so most of our working day overlaps with yours for calls and reviews. When a project needs it, we travel to Toronto for workshops and milestone reviews with travel agreed up front.',
      },
      {
        q: 'Should we start with SEO or Google Ads in the GTA?',
        a: 'In a competitive GTA market, Google Ads can produce leads while SEO and content build. If your site is slow, thin or missing from local search, we usually fix that first so paid traffic lands on pages that convert. Many Toronto clients run both: a focused search campaign for near-term leads and SEO for lower cost per lead over time.',
      },
      {
        q: 'How soon will we see results?',
        a: 'Paid search can produce leads within weeks once campaigns and landing pages are live. SEO and content usually need several months before trend lines are fair to judge; local gains often show in 8-16 weeks when the site has no major technical blockers. We set expectations in the first report and track leading indicators such as impressions and conversions, not only position charts.',
      },
      {
        q: 'Can you run campaigns for several GTA cities?',
        a: 'Yes. We build separate landing pages and location targeting per city or suburb — for example Mississauga, Brampton, Markham or Vaughan — so ads and organic pages match local search intent instead of one generic Toronto page. Reporting rolls up to your account level while still showing performance by location.',
      },
    ],
  },
  'digital-marketing-agency-in-vancouver': {
    title: 'Digital Marketing Agency in Vancouver',
    description: 'Vancouver digital marketing: SEO, Google Ads, social and content from a Canadian team. CAD retainers. Call +1-403-604-8692.',
    intro: 'Mapletech Labs is a Canadian team headquartered in Edmonton, serving Vancouver and the Lower Mainland. We do not have a Vancouver office. Vancouver is one hour behind Edmonton, so our working days almost fully overlap. When a project needs it, we come to Vancouver for workshops and reviews, with travel agreed up front. One team covers SEO, Google Ads, social and content, and retainers are priced in CAD. Call +1-403-604-8692.',
    sections: [
      {
        heading: 'Digital marketing across Vancouver and the Lower Mainland',
        body: [
          'Tech and SaaS startups, real estate businesses, tourism and hospitality operators, and e-commerce brands reach different buyers. Searches in Burnaby, Surrey and Richmond can differ from those downtown, so we consider each service area when planning pages and campaigns. Many Vancouver audiences are on Instagram and LinkedIn; the right approach depends on whom you need to reach. For an SEO-only scope, see ',
          { href: '/locations/seo-company-in-vancouver', label: 'SEO Company in Vancouver' },
          '.',
        ],
      },
      {
        heading: 'Choosing channels for your goals',
        body: [
          'Search can capture existing demand while paid campaigns test offers and social and content build familiarity with your business. We select and scope the work around your audience and budget, including ',
          { href: '/services/digital-marketing/google-ads-ppc', label: 'Google Ads and PPC' },
          ', ',
          { href: '/services/digital-marketing/social-media-marketing', label: 'social media marketing' },
          ' and ',
          { href: '/services/digital-marketing/content-marketing', label: 'content marketing' },
          ', with a clear role for each channel.',
        ],
      },
      {
        heading: 'What digital marketing costs in Vancouver',
        body: [
          'Our ',
          { href: '/blog/digital-marketing-cost-canada', label: 'digital marketing cost guide for Canada' },
          ' gives typical Canadian ranges in CAD, not quotes: SEO about $1,500-$10,000 per month, PPC management about $2,000-$15,000 per month plus ad spend, social media about $1,000-$8,000 per month, content marketing about $2,000-$10,000 per month, and full-service packages about $5,000-$25,000 per month. Your scope depends on the channels and work you need.',
        ],
      },
      {
        heading: 'Reporting that guides the next decision',
        body: [
          'Reports bring together traffic, rankings, ad spend, conversions and completed work, with context on what changed and where to focus next. For a closer view of campaign and funnel data, explore our ',
          { href: '/services/digital-marketing/performance-analytics', label: 'performance analytics' },
          ' service.',
        ],
      },
    ],
    proof: [
      { href: '/case-studies/logistics-platform', label: 'Logistics & fleet platform', note: 'A real-time logistics platform handling 15K+ daily deliveries, with 25% fuel savings and a 98% on-time delivery rate.' },
      { href: '/case-studies/ecommerce-platform', label: 'E-commerce platform', note: 'A high-performance e-commerce platform driving 3x revenue growth and handling 2M+ monthly visitors for a Canadian retailer.' },
      { href: '/case-studies/real-estate-portal', label: 'Real estate portal', note: 'PropConnect Canada\'s real estate platform, with machine-learning recommendations across 850,000+ active listings.' },
    ],
    faqs: [
      {
        q: 'How much does digital marketing cost in Vancouver?',
        a: 'Typical Canadian monthly ranges in CAD are $1,500-$10,000 for SEO, $2,000-$15,000 for PPC management plus ad spend, $1,000-$8,000 for social media, $2,000-$10,000 for content marketing and $5,000-$25,000 for a full-service package. These are market estimates, not quotes; your scope depends on your goals and channels.',
      },
      {
        q: 'Do you have a Vancouver office?',
        a: 'No. Mapletech Labs is headquartered in Edmonton. Vancouver is one hour behind Edmonton, so working hours almost fully overlap. We visit Vancouver for workshops and reviews when a project needs them, with travel agreed up front.',
      },
      {
        q: 'Which social channels work for Vancouver businesses?',
        a: 'Instagram can suit visual products, hospitality and local experiences, while LinkedIn can help reach professional and B2B audiences. Many Vancouver audiences use both; the choice depends on your customers, content and goals.',
      },
      {
        q: 'Should a Vancouver business start with SEO or Google Ads?',
        a: 'Google Ads can help reach people searching now if you have a suitable ad budget and landing pages. SEO builds organic visibility over time. We assess your site, competition and lead goals before recommending either or a combination.',
      },
      {
        q: 'How soon can Vancouver campaigns show results?',
        a: 'Google Ads can generate leads within weeks after campaigns and landing pages launch. SEO and content generally take several months to assess, depending on competition and the condition of your site. Reporting tracks early signals as well as conversions.',
      },
    ],
  },
  'seo-company-in-edmonton': {
    title: 'SEO Company in Edmonton',
    description: 'Mapletech Labs is headquartered in Edmonton and runs SEO for Alberta businesses: local search, technical fixes and content that ranks. +1-403-604-8692.',
    intro: 'Mapletech Labs is headquartered in Edmonton, Alberta, so when you hire us for SEO you work with a local team that knows how Alberta businesses get found on Google and Bing. We improve local visibility, fix technical issues on Next.js and WordPress sites, and build content and service pages that match what your customers actually search. You talk to the people doing the work, not a rotating account manager. Call us on +1-403-604-8692 to discuss your goals.',
    sections: [
      {
        heading: 'Local SEO and Google Business Profile for Alberta businesses',
        body: [
          'Most Edmonton and Alberta leads still start with a map pack or a “near me” search, so we start with Google Business Profile setup and cleanup, NAP consistency across directories, and location pages that reflect the neighbourhoods and cities you serve. We align your site with how people search for your services in Alberta, from Edmonton and Calgary to smaller markets, so local intent sends qualified traffic rather than empty clicks.',
        ],
      },
      {
        heading: 'Technical SEO for Next.js and WordPress sites',
        body: [
          'Rankings stall when the site is slow, poorly structured or hard for crawlers to read. We audit Core Web Vitals, indexation, canonical tags, schema and internal linking on ',
          { href: '/services/digital-marketing/seo-services', label: 'Next.js, headless and WordPress builds' },
          ', then fix the issues that block visibility. That includes performance work on modern stacks, not only plugin tweaks on legacy themes.',
        ],
      },
      {
        heading: 'Content and service-page strategy',
        body: [
          'We map the keywords that matter for your services and build or refine pages that answer those searches with clear proof and calls to action. Our approach matches what we outline for Canadian teams in ',
          { href: '/blog/top-seo-companies-canada', label: 'our guide to SEO companies in Canada' },
          ', with internal links from blog and service content so authority flows to the pages that should rank.',
        ],
      },
      {
        heading: 'Reporting and what results to expect',
        body: [
          'You get regular reporting on rankings, organic traffic, conversions and the work completed, with plain-language notes on what moved and what we are testing next. SEO is not overnight: local gains often show in a few months, while competitive national terms take longer. In our ',
          { href: '/blog/digital-marketing-cost-canada', label: 'Canadian digital marketing cost guide' },
          ', SEO retainers typically run $1,500-$10,000 per month depending on scope. Typical SEO budgets in CAD are outlined in the cost guide above, and you can compare our project prices on ',
          { href: '/pricing', label: 'our pricing page' },
          ' before you commit.',
        ],
      },
      {
        heading: 'Full-service digital marketing',
        body: [
          'Need ads and social too? See our ',
          { href: '/locations/digital-marketing-agency-in-edmonton', label: 'Digital Marketing Agency in Edmonton' },
          '.',
        ],
      },
    ],
    proof: [
      { href: '/case-studies/ecommerce-platform', label: 'E-commerce platform', note: 'A high-performance e-commerce platform driving 3x revenue growth and handling 2M+ monthly visitors for a Canadian retailer.' },
      { href: '/case-studies/real-estate-portal', label: 'Real estate portal', note: 'PropConnect Canada\'s real estate platform, with machine-learning recommendations across 850,000+ active listings.' },
      { href: '/case-studies/logistics-platform', label: 'Logistics & fleet platform', note: 'A real-time logistics platform handling 15K+ daily deliveries, with 25% fuel savings and a 98% on-time delivery rate.' },
    ],
    faqs: [
      {
        q: 'How much does SEO cost in Edmonton?',
        a: 'In our Canadian digital marketing cost guide, dedicated SEO typically runs about $1,500-$10,000 per month in CAD, depending on competition, site size and whether you need local search, technical work, content or all three. Smaller local campaigns sit at the lower end; multi-location or national programs sit higher. After a free review we quote a fixed monthly retainer or project scope in CAD.',
      },
      {
        q: 'How long until we see rankings improve?',
        a: 'Local SEO and Google Business Profile work often shows movement in 8-16 weeks when the site has no major technical blockers. New content and competitive national keywords usually need 4-9 months before you can judge trend lines fairly. We set expectations in the first report and track leading indicators such as impressions and indexed pages, not only position charts.',
      },
      {
        q: 'Do you focus on local Edmonton SEO or national campaigns?',
        a: 'Both, depending on your market. Alberta service businesses usually need strong local and map visibility first, then supporting pages for the provinces and cities you serve. SaaS and e-commerce clients often need national or category-level SEO as well. We recommend a mix based on where your revenue actually comes from, not a one-size package.',
      },
      {
        q: 'Are you locked into a long contract?',
        a: 'We work on monthly retainers with clear scope and reporting. Most clients stay because the work produces measurable traffic and leads, but we do not use multi-year lock-ins. If you need a defined end date for a project phase, such as a technical audit and fix sprint, we can scope that separately.',
      },
      {
        q: 'What do we see in SEO reports?',
        a: 'Each reporting cycle covers keyword visibility, organic sessions and conversions, completed tasks and the plan for the next period. We tie metrics to business outcomes where analytics allow, and we explain changes in plain language so your team does not need to be SEO specialists to follow along.',
      },
    ],
  },
  'seo-company-in-calgary': {
    title: 'SEO Company in Calgary',
    description: 'Mapletech Labs runs Calgary SEO: local map-pack and “near me” search, technical fixes and CAD retainers. Alberta team. Call +1-403-604-8692.',
    intro: 'Mapletech Labs is an Alberta SEO team headquartered in Edmonton, and we work with Calgary businesses across energy, construction, real estate and professional services. Calgary clients get the same setup as everyone we serve: you deal directly with the specialists doing the keyword research, the technical fixes and the content, not a salesperson reading a script. When a project calls for it, we travel to Calgary for discovery meetings and audits in person, and day-to-day work runs on calls and shared reports. SEO retainers are priced in CAD with a fixed monthly scope. Call +1-403-604-8692 to talk about your Calgary search goals.',
    sections: [
      {
        heading: 'Calgary search markets we work in',
        body: [
          'Calgary buyers search before they call, and the queries change by industry. Energy and oilfield services companies research vendors over long buying cycles, fintech startups compare providers quickly, and construction and trades companies live on local-pack and “near me” searches across Calgary, Airdrie and Cochrane. Real estate agents, mortgage teams and professional services firms search the same way. We map the searches that actually lead to a call in your market first, then build the pages and profile signals that make you visible for them, instead of chasing vanity keywords that never bring work.',
        ],
      },
      {
        heading: 'Google Business Profile and NAP done honestly',
        body: [
          'For Calgary service businesses, the map pack often matters more than the classic blue links, so we start there. That means a properly set up Google Business Profile, category and service-area settings that describe what you really cover, and NAP consistency — the same name, address and phone everywhere — across directories and citations. What we will not do is invent fake Calgary addresses or claim downtown offices that do not exist. Those tricks get profiles suspended and cost you months of visibility. A clean service-area profile with consistent citations keeps ranking and keeps its place.',
        ],
      },
      {
        heading: 'Technical SEO done by engineers',
        body: [
          'Mapletech Labs is a software development company first, so the technical side of your SEO is handled by the engineers who build Next.js and WordPress sites every week. We audit Core Web Vitals, crawling and indexation, canonical tags, schema markup and internal linking on our ',
          { href: '/services/digital-marketing/seo-services', label: 'SEO services' },
          ' page, then fix what is actually blocking crawlers or slowing pages. Fixes are made in your codebase or CMS rather than patched over with plugins, so they survive the next platform update instead of quietly unravelling a month later.',
        ],
      },
      {
        heading: 'Retainers, reporting and what results cost',
        body: [
          'SEO is quoted as a monthly retainer in CAD. In our ',
          { href: '/blog/digital-marketing-cost-canada', label: 'digital marketing cost guide for Canada' },
          ', SEO retainers typically run $1,500-$10,000 CAD per month, depending on competition, site size and scope. Each month you get a report with rankings, organic traffic and conversions, the work completed, and plain-language notes on what moved and what we are testing next. You can sanity-check our rates on ',
          { href: '/pricing', label: 'our pricing page' },
          ' before you commit, and the scope is confirmed in writing before the first invoice.',
        ],
      },
      {
        heading: 'Full-service digital marketing',
        body: [
          'Need ads and social too? See our ',
          { href: '/locations/digital-marketing-agency-in-calgary', label: 'Digital Marketing Agency in Calgary' },
          '.',
        ],
      },
    ],
    proof: [
      { href: '/case-studies/ecommerce-platform', label: 'E-commerce platform', note: 'A high-performance e-commerce platform driving 3x revenue growth and handling 2M+ monthly visitors for a Canadian retailer.' },
      { href: '/case-studies/real-estate-portal', label: 'Real estate portal', note: 'PropConnect Canada\'s real estate platform, with machine-learning recommendations across 850,000+ active listings.' },
      { href: '/case-studies/fintech-trading-platform', label: 'Fintech trading platform', note: 'An AI-powered trading platform processing 50K+ transactions daily with 99.99% uptime for a leading Canadian fintech.' },
    ],
    faqs: [
      {
        q: 'How much does SEO cost in Calgary?',
        a: 'Most Calgary SEO engagements are monthly retainers of about $1,500-$10,000 CAD, the range we publish in our Canadian digital marketing cost guide. A single-location local campaign sits at the lower end; energy-sector B2B or national-competition keywords sit higher. After a free review of your site and your Calgary competitors, we quote one fixed monthly number in CAD rather than hourly billing.',
      },
      {
        q: 'How long until our Calgary rankings move?',
        a: 'Technical fixes and Google Business Profile cleanup can produce visible movement in 8-16 weeks when the site has no major blockers. Content built for competitive Calgary terms usually needs 4-9 months before trend lines are fair to judge. From the first report we track impressions, indexed pages and leads so you can see progress building before the position charts catch up.',
      },
      {
        q: 'Do I need to be in Calgary to rank in the Calgary map pack?',
        a: 'You need either a real staffed address in the area or a genuine service-area setup. Google removes or down-ranks profiles built on virtual offices and fake addresses, so we will not suggest those. If your crews serve Calgary, Airdrie and Cochrane from elsewhere in Alberta, we configure your profile as a service-area business, keep NAP consistent across directories and prove coverage through your site and reviews. It is also simply what keeps the profile alive.',
      },
      {
        q: 'Can we meet your team in person in Calgary?',
        a: 'Yes, when it helps. Our team is headquartered in Edmonton, so for Calgary clients we can drive down for discovery meetings, audits and milestone reviews at your office. Day-to-day work runs on calls, shared documents and monthly reports, and you always have direct access to the specialists on your account at +1-403-604-8692.',
      },
      {
        q: 'What does the monthly SEO report include?',
        a: 'A plain-language summary of keyword movements that matter for your Calgary market, organic sessions and leads from analytics, the tasks completed that month, and the plan for the next period. We flag anything that needs a decision from your side, such as content approvals or profile changes. It is the same report format whether you serve Calgary, Airdrie or Cochrane.',
      },
    ],
  },
  'seo-company-in-toronto': {
    title: 'SEO Company in Toronto',
    description: 'Mapletech Labs runs Toronto SEO from Edmonton: local search, technical fixes and CAD retainers with monthly reporting. Call +1-403-604-8692.',
    intro: 'Mapletech Labs is a Canadian SEO team headquartered in Edmonton, working with Toronto and GTA businesses that want more calls and leads from Google and Bing. We do not have a Toronto office. Edmonton is two hours behind Toronto, so our working days overlap for most of yours, and we come to Toronto for in-person workshops, audits and milestone reviews when a project needs one, with travel agreed up front. You work directly with the specialists doing the keyword research, technical fixes and content, not a salesperson. Retainers are priced in CAD. Call +1-403-604-8692 to talk through your Toronto search goals.',
    sections: [
      {
        heading: 'Toronto search markets we know',
        body: [
          'Toronto is not one search market. Bay Street finance and fintech buyers compare vendors over long, compliance-heavy cycles, tech and SaaS companies chase category terms their competitors already bid on, and clinics, law firms, accountants and other professional services live on “near me” and neighbourhood searches. Real estate teams and trades compete for suburb-level terms across Mississauga, Brampton, Markham and Vaughan. We map both sides: the competitive city-wide terms that put you next to the biggest names in Toronto, and the neighbourhood terms where a smaller budget can win calls first.',
        ],
      },
      {
        heading: 'Google Business Profile and NAP across the GTA',
        body: [
          'For Toronto service businesses the map pack is often where the call starts, so the profile has to be honest. We set your Google Business Profile up as a real service-area business if you serve the GTA from outside downtown, choose categories and service areas that match what you actually cover, and keep the same name, address and phone — NAP — across your site, directories and citations. We will not rent a virtual office on Bay Street or claim a downtown address you do not use; those profiles get suspended and take months to recover. Consistent, truthful listings are what hold their position.',
        ],
      },
      {
        heading: 'Technical SEO done by engineers',
        body: [
          'Mapletech Labs is a software development company first, so the technical work is done by the engineers who build Next.js and WordPress sites every week. We audit Core Web Vitals, crawling and indexation, canonical tags, schema markup and internal linking on our ',
          { href: '/services/digital-marketing/seo-services', label: 'SEO services' },
          ' page, then fix what is slowing pages or blocking crawlers. Changes go into your codebase or CMS rather than on top of it with plugins, so they survive the next platform update.',
        ],
      },
      {
        heading: 'SEO costs and monthly reporting',
        body: [
          'SEO is quoted as a monthly retainer in CAD. In our ',
          { href: '/blog/digital-marketing-cost-canada', label: 'digital marketing cost guide for Canada' },
          ', SEO retainers typically run $1,500-$10,000 CAD per month, depending on competition, site size and scope. Each month you get a report with rankings, organic traffic and conversions, the work completed, and plain-language notes on what moved and what we are testing next. Toronto is a competitive market, so we agree the scope in writing before the first invoice. You can compare our rates on ',
          { href: '/pricing', label: 'our pricing page' },
          ' before you commit.',
        ],
      },
      {
        heading: 'Full-service digital marketing',
        body: [
          'Need ads and social too? See our ',
          { href: '/locations/digital-marketing-agency-in-toronto', label: 'Digital Marketing Agency in Toronto' },
          '.',
        ],
      },
    ],
    proof: [
      { href: '/case-studies/ecommerce-platform', label: 'E-commerce platform', note: 'A high-performance e-commerce platform driving 3x revenue growth and handling 2M+ monthly visitors for a Canadian retailer.' },
      { href: '/case-studies/real-estate-portal', label: 'Real estate portal', note: 'PropConnect Canada\'s real estate platform, with machine-learning recommendations across 850,000+ active listings.' },
      { href: '/case-studies/fintech-trading-platform', label: 'Fintech trading platform', note: 'An AI-powered trading platform processing 50K+ transactions daily with 99.99% uptime for a leading Canadian fintech.' },
    ],
    faqs: [
      {
        q: 'How much does SEO cost in Toronto?',
        a: 'Most Toronto SEO engagements are monthly retainers of about $1,500-$10,000 CAD, the range we publish in our Canadian digital marketing cost guide. A single-location local campaign in the GTA sits at the lower end; Bay Street finance, SaaS or national-competition keywords sit higher. After a free review of your site and your Toronto competitors, we quote one fixed monthly number in CAD rather than hourly billing.',
      },
      {
        q: 'How long until we see results in Toronto?',
        a: 'Technical fixes and Google Business Profile cleanup often show movement in 8-16 weeks when the site has no major blockers. New content for competitive Toronto terms usually needs 4-9 months before trend lines are fair to judge. From the first report we track impressions, indexed pages and leads, so you can see progress building before the position charts catch up.',
      },
      {
        q: 'Can we rank in the Toronto map pack without a downtown address?',
        a: 'Yes, if the address and service area are real. You need either a staffed address in the area or a genuine service-area setup. Google removes or down-ranks profiles built on virtual offices and fake addresses, so we will not suggest those. If your team serves Toronto and the GTA from elsewhere, we configure your profile as a service-area business, keep NAP consistent across directories and show coverage through your site, service pages and reviews.',
      },
      {
        q: 'Can we meet your team in Toronto?',
        a: 'Yes, when it helps. Our team is headquartered in Edmonton and we do not have a Toronto office, so we come to Toronto for discovery meetings, audits and milestone reviews at your office or a convenient location, with travel agreed up front. Day-to-day work runs on calls, shared documents and monthly reports, and you always have direct access to the specialists on your account at +1-403-604-8692.',
      },
      {
        q: 'What is in the monthly SEO report?',
        a: 'A plain-language summary of the keyword movements that matter for your Toronto market, organic sessions and leads from analytics, the tasks completed that month, and the plan for the next period. We flag anything that needs a decision from your side, such as content approvals or profile changes. It is the same report format whether you serve downtown Toronto, Mississauga or Vaughan.',
      },
    ],
  },
  'web-development-company-in-toronto': {
    title: 'Web Development Company in Toronto',
    description: 'Mapletech Labs builds fast custom websites and web apps for Toronto businesses, with a fixed CAD price agreed up front. Get a free quote.',
    intro: 'Mapletech Labs is a Canadian web development team headquartered in Edmonton, building business websites, e-commerce stores and web apps for Toronto companies. Edmonton is two hours behind Toronto, so our working days overlap for most of yours, making it straightforward to review designs and discuss decisions together. You work directly with the senior engineers who build your website. Your contract is with a Canadian company, priced in CAD, with a fixed scope and a fixed price agreed before work starts, so you know what is included. Call us on +1-403-604-8692 to talk through your project.',
    sections: [
      {
        heading: 'Websites and web apps Toronto businesses ask us for',
        body: [
          'We build professional-services and B2B websites designed to generate leads, with clear service pages and enquiry forms that help prospective customers take the next step. For retailers, we develop e-commerce stores using headless Shopify or a custom build, with Stripe or Square for payments. Customer portals and dashboards give clients and staff access to the information and tasks they need. We also build SaaS web apps, with the scope shaped around how your customers will use the product.',
        ],
      },
      {
        heading: 'Built for speed and search',
        body: [
          'We build on Next.js and React, with pages rendered on the server so Google and Bing can read their content. Core Web Vitals are a target from day one, guiding decisions about images, scripts and page layout as we develop the site. We add clean URLs and structured data (schema) that describe your pages to search engines. A content management system (CMS) lets your team edit pages without a developer, so service details and other business information can stay current.',
        ],
      },
      {
        heading: 'AODA accessibility for Ontario sites',
        body: [
          'Many Ontario organisations must make their public websites meet WCAG 2.0 level AA under the Accessibility for Ontarians with Disabilities Act (AODA). We design and test for keyboard access, screen readers, colour contrast and text resizing, so accessibility is considered throughout the build. That includes checking how visitors navigate menus, understand forms and use pages without a mouse. Your legal team confirms how the AODA applies to your organisation and website, and we can share accessibility test results to support that review.',
        ],
      },
      {
        heading: 'What a website costs and how long it takes',
        body: [
          'Our ',
          { href: '/blog/website-cost-canada', label: 'Canadian website cost guide' },
          ' puts a template or WordPress site at about $2,000-$10,000 CAD (2-4 weeks), a custom business website at $10,000-$50,000 (4-10 weeks), an e-commerce platform at $25,000-$100,000 (8-16 weeks) and an enterprise web application at $100,000-$500,000+ (4-12 months). If you are comparing vendors, our ',
          { href: '/blog/web-development-companies-toronto', label: 'guide to Toronto web development companies' },
          ' lists the questions to ask. Discovery is free, and your price is fixed before coding starts.',
        ],
      },
    ],
    proof: [
      { href: '/case-studies/ecommerce-platform', label: 'E-commerce platform', note: 'A high-performance e-commerce platform driving 3x revenue growth and handling 2M+ monthly visitors for a leading Canadian retailer.' },
      { href: '/case-studies/real-estate-portal', label: 'Real estate portal', note: 'A real estate platform for PropConnect Canada with machine-learning recommendations across 850,000+ active listings.' },
      { href: '/case-studies/fintech-trading-platform', label: 'Fintech trading platform', note: 'An AI-powered trading platform processing 50K+ transactions daily with 99.99% uptime for a leading Canadian fintech.' },
    ],
    faqs: [
      {
        q: 'How much does a website cost in Toronto?',
        a: 'Our Canadian website cost guide puts a template or WordPress site at about $2,000-$10,000 CAD, a custom business website at $10,000-$50,000, an e-commerce platform at $25,000-$100,000 and an enterprise web application at $100,000-$500,000+. After free discovery you get a fixed price in CAD before coding starts.',
      },
      {
        q: 'Do you have an office in Toronto?',
        a: 'No. Mapletech Labs is headquartered in Edmonton and we do not have a Toronto office. We serve Toronto clients remotely, with working hours that overlap for most of the day, and we come to Toronto for in-person workshops when a milestone needs one, with travel agreed up front.',
      },
      {
        q: 'Will our website meet AODA rules?',
        a: 'We design and test to WCAG 2.0 level AA, the standard the AODA points to for public websites, covering keyboard access, screen readers, colour contrast and text resizing. We can share our accessibility test results with you, and your own legal team should confirm whether and how the AODA applies to your organisation.',
      },
      {
        q: 'Can we edit the website ourselves?',
        a: 'Yes. We provide a CMS so your team can edit pages and content without a developer. At handover we train your team to use it, so you can keep your website current after launch.',
      },
      {
        q: 'Who owns the website code and domain?',
        a: 'You do. All source code, design files and the domain for your website belong to you, with no lock-in. You can keep working with us after launch or hand the website to your own team.',
      },
    ],
  },
  'web-development-company-in-edmonton': {
    title: 'Web Development Company in Edmonton',
    description: 'Mapletech Labs is headquartered in Edmonton and builds custom fast, SEO-ready websites and web apps, with a fixed CAD price. Get a free quote.',
    intro: 'Mapletech Labs is headquartered in Edmonton, Alberta, so when you hire us for web development you are working with a local team at our head office, not a sales desk for developers somewhere else. We build fast, SEO-ready business websites, e-commerce stores and web apps for Edmonton companies, public bodies and growing teams across the city. You talk directly to the senior engineers who write the code, you get a fixed scope and price before work starts, and you can reach us on +1-403-604-8692.',
    sections: [
      {
        heading: 'The websites Edmonton organisations need',
        body: [
          'Edmonton runs on energy and industrial services, municipal and post-secondary institutions, healthcare clinics, trades contractors and logistics firms, and each needs a different kind of site. Industrial and field-services teams need clear service pages, safety content and enquiry forms that turn searches into qualified leads. Campus and civic teams need booking flows, resident or student portals and accessible information architecture. Clinics need trustworthy pages that respect privacy expectations, while carriers and trades businesses need dispatch-friendly contact paths, customer portals and, where it fits, e-commerce that ties into how they already sell and schedule work.',
        ],
      },
      {
        heading: 'Workshops in person, here in Edmonton',
        body: [
          'Because our head office is in Edmonton, discovery does not have to happen only over a video call. We can run scoping and design workshops at your office, plant or campus, watch how your staff and customers use your current site today, and sketch page flows with the people who will maintain them. After the workshop you get a written scope with every page, integration and content milestone listed. Demos and content reviews can also be held in person, while day-to-day build progress runs on shared boards and weekly calls with the same engineers who attended the workshop.',
        ],
      },
      {
        heading: 'Speed, SEO and accessibility from the first commit',
        body: [
          'We build on Next.js and React, with server rendering so Google and Bing can read your content on first load. Core Web Vitals guide image sizes, fonts and script loading as we develop, not as a last-minute patch. Clean URLs and structured data (schema) describe your services and locations to search engines, and we design and test to WCAG so keyboard users, screen-reader users and visitors who need strong colour contrast can use the site. A CMS lets your Edmonton team update service details, blog posts and seasonal offers without opening a developer ticket for every change.',
        ],
      },
      {
        heading: 'What a website costs and how long it takes',
        body: [
          'Our ',
          { href: '/blog/website-cost-canada', label: 'Canadian website cost guide' },
          ' puts a template or WordPress site at about $2,000-$10,000 CAD (2-4 weeks), a custom business website at $10,000-$50,000 (4-10 weeks), an e-commerce platform at $25,000-$100,000 (8-16 weeks) and an enterprise web application at $100,000-$500,000+ (4-12 months). Discovery is free, and your price is fixed before coding starts.',
        ],
      },
    ],
    proof: [
      { href: '/case-studies/ecommerce-platform', label: 'E-commerce platform', note: 'A high-performance e-commerce platform driving 3x revenue growth and handling 2M+ monthly visitors for a Canadian retailer.' },
      { href: '/case-studies/real-estate-portal', label: 'Real estate portal', note: 'PropConnect Canada\'s real estate platform, with machine-learning recommendations across 850,000+ active listings.' },
      { href: '/case-studies/logistics-platform', label: 'Logistics & fleet platform', note: 'A real-time logistics platform handling 15K+ daily deliveries, with 25% fuel savings and a 98% on-time delivery rate.' },
    ],
    faqs: [
      {
        q: 'How much does a website cost in Edmonton?',
        a: 'Our Canadian website cost guide puts a template or WordPress site at about $2,000-$10,000 CAD, a custom business website at $10,000-$50,000, an e-commerce platform at $25,000-$100,000 and an enterprise web application at $100,000-$500,000+. After free discovery you get a fixed price in CAD before coding starts.',
      },
      {
        q: 'Can we meet your team in person in Edmonton?',
        a: 'Yes. Mapletech Labs is headquartered in Edmonton, so we can hold discovery workshops, design reviews and demos at your office or site. Ongoing work runs on weekly calls and shared project boards, and you can meet in person again whenever a milestone needs it.',
      },
      {
        q: 'How long does it take to build a website?',
        a: 'A template or WordPress site usually takes 2-4 weeks, a custom business website about 4-10 weeks, an e-commerce platform 8-16 weeks and an enterprise web application 4-12 months, matching the timelines in our Canadian website cost guide. Your written scope includes milestones such as design approval, content lock and launch.',
      },
      {
        q: 'Can you redesign our existing site without losing Google rankings?',
        a: 'Yes, when we plan the migration carefully. We audit which URLs earn traffic today, keep or redirect them with 301s, preserve titles and headings where they still match search intent, and avoid launching large structural changes without a staging review. Technical SEO checks cover indexation, sitemaps, schema and Core Web Vitals so the new site can inherit authority rather than starting from zero.',
      },
      {
        q: 'Who owns the website code and domain?',
        a: 'You do. All source code, design files and the domain for your website belong to you, with no lock-in. You can keep working with us after launch or hand the website to your own team.',
      },
    ],
  },
  'web-development-company-in-calgary': {
    title: 'Web Development Company in Calgary',
    description: 'Calgary custom websites and web apps by Mapletech Labs, with a fixed CAD price agreed up front. Get a free quote.',
    intro: 'Mapletech Labs is an Alberta web development team headquartered in Edmonton, building websites and web apps for Calgary businesses. We do not have a Calgary office, but we work in the same time zone and travel to Calgary for in-person workshops when needed. You work directly with the senior engineers building your project, making it easy to discuss decisions and review progress throughout the work. We agree on a fixed scope and price in CAD before work begins, so you know what is included. Call +1-403-604-8692 to discuss your website or web app.',
    sections: [
      {
        heading: 'Websites and web apps Calgary businesses ask us for',
        body: [
          'Calgary businesses need websites that help customers find information and take action. We build sites and web apps for energy and oilfield services, fintech, logistics, agriculture and professional services, with content and workflows shaped around each project. A field-services business might need clear service pages and enquiry forms, while a logistics team may need a portal for customers and staff. We also develop e-commerce stores that make it easier for customers to browse and buy.',
        ],
      },
      {
        heading: 'Built for speed and search',
        body: [
          'We use Next.js and React with server rendering to make page content accessible to Google and Bing. Core Web Vitals guide our decisions on images, scripts and layout throughout development, so speed is considered from the start. We structure pages with clear URLs and schema to help search engines understand their content. A CMS gives your team a way to update service information and other content without needing a developer for every change.',
        ],
      },
      {
        heading: 'Same time zone, in-person workshops in Calgary',
        body: [
          'Edmonton and Calgary share a time zone, making it easy to schedule calls, reviews and working sessions during your business day. You can speak directly with the senior engineers working on your project as questions come up. When a project benefits from an in-person workshop, we travel down Highway 2 to Calgary, with travel agreed up front. Workshops can bring your team together to discuss requirements, review designs and make decisions before the next stage of work.',
        ],
      },
      {
        heading: 'What a website costs and how long it takes',
        body: [
          'Our ',
          { href: '/blog/website-cost-canada', label: 'Canadian website cost guide' },
          ' puts a template or WordPress site at about $2,000-$10,000 CAD (2-4 weeks), a custom business website at $10,000-$50,000 (4-10 weeks), an e-commerce platform at $25,000-$100,000 (8-16 weeks) and an enterprise web application at $100,000-$500,000+ (4-12 months). The scope and features you need determine where your project falls. Discovery is free, and your price is fixed before coding starts, so your team can plan with a clear budget and timeline.',
        ],
      },
    ],
    proof: [
      { href: '/case-studies/ecommerce-platform', label: 'E-commerce platform', note: 'A high-performance e-commerce platform driving 3x revenue growth and handling 2M+ monthly visitors for a leading Canadian retailer.' },
      { href: '/case-studies/real-estate-portal', label: 'Real estate portal', note: 'A real estate platform for PropConnect Canada with machine-learning recommendations across 850,000+ active listings.' },
      { href: '/case-studies/fintech-trading-platform', label: 'Fintech trading platform', note: 'An AI-powered trading platform processing 50K+ transactions daily with 99.99% uptime for a leading Canadian fintech.' },
    ],
    faqs: [
      {
        q: 'How much does a website cost in Calgary?',
        a: 'Our Canadian website cost guide puts a template or WordPress site at about $2,000-$10,000 CAD, a custom business website at $10,000-$50,000, an e-commerce platform at $25,000-$100,000 and an enterprise web application at $100,000-$500,000+. After free discovery you get a fixed price in CAD before coding starts.',
      },
      {
        q: 'Do you have an office in Calgary?',
        a: 'No. Mapletech Labs is headquartered in Edmonton and does not have a Calgary office. We work remotely with Calgary clients and travel to Calgary for in-person workshops, with travel agreed up front.',
      },
      {
        q: 'Can we edit the website ourselves?',
        a: 'Yes. We provide a CMS so your team can edit pages and content without a developer. At handover we train your team to use it, so you can keep your website current after launch.',
      },
      {
        q: 'Who owns the website code and domain?',
        a: 'You do. All source code, design files and the domain for your website belong to you, with no lock-in. You can keep working with us after launch or hand the website to your own team.',
      },
      {
        q: 'Can you build websites for Calgary energy and field-services companies?',
        a: 'Yes. We can build service pages, enquiry forms and web apps around the information and workflows your energy or field-services business needs to share with customers and staff.',
      },
    ],
  },
  'web-development-company-in-vancouver': {
    title: 'Web Development Company in Vancouver',
    description: 'Mapletech Labs builds custom websites and web apps for Vancouver businesses, with a fixed CAD price agreed up front. Get a free quote.',
    intro: 'Mapletech Labs is a Canadian web development team headquartered in Edmonton, building business websites, e-commerce stores and web apps for Vancouver companies. We do not have a Vancouver office. Vancouver is one hour behind Edmonton, so our working days almost fully overlap and questions get answered the same day. You work directly with the senior engineers who build your website, not a sales layer. Your contract is with a Canadian company, priced in CAD, with a fixed scope and a fixed price agreed before work starts. Call us on +1-403-604-8692 to talk through your project.',
    sections: [
      {
        heading: 'Websites and web apps Vancouver businesses ask us for',
        body: [
          'Vancouver tech startups and SaaS teams need marketing sites and product dashboards that explain a complex offer and convert trials into paid accounts. Film, VFX and creative studios want portfolio sites and client review flows that load quickly with large media. Tourism and hospitality operators need booking pages and seasonal campaigns that stay easy to update. Real estate brokerages need listing search and lead capture, port and logistics firms need shipment tracking and customer portals, and e-commerce and DTC brands need storefronts that tie cleanly into inventory and fulfilment.',
        ],
      },
      {
        heading: 'Built for speed and search',
        body: [
          'We develop on Next.js and React, rendering key pages on the server so crawlers and visitors get fast first loads. Core Web Vitals shape image sizes, fonts and script loading as we build, not as a last-minute audit. Semantic HTML, sensible URLs and structured data help search engines understand your services and locations. A CMS lets your team publish updates to offers, listings and blog posts without opening a ticket with a developer every time.',
        ],
      },
      {
        heading: 'BC privacy and Canadian hosting',
        body: [
          'Private-sector websites that collect personal information in British Columbia often fall under BC’s Personal Information Protection Act (PIPA). When residency matters, we plan Canadian hosting for your site, database, backups and third-party integrations from discovery onward, with encryption and role-based access where appropriate. We document data flows so compliance and legal review are straightforward; your legal team confirms what applies.',
        ],
      },
      {
        heading: 'What a website costs and how long it takes',
        body: [
          'Our ',
          { href: '/blog/website-cost-canada', label: 'Canadian website cost guide' },
          ' puts a template or WordPress site at about $2,000-$10,000 CAD (2-4 weeks), a custom business website at $10,000-$50,000 (4-10 weeks), an e-commerce platform at $25,000-$100,000 (8-16 weeks) and an enterprise web application at $100,000-$500,000+ (4-12 months). If you are comparing vendors, our ',
          { href: '/blog/software-development-companies-vancouver', label: 'guide to choosing a Vancouver software company' },
          ' lists the questions to ask. Discovery is free, and your price is fixed before coding starts.',
        ],
      },
    ],
    proof: [
      { href: '/case-studies/ecommerce-platform', label: 'E-commerce platform', note: 'A high-performance e-commerce platform driving 3x revenue growth and handling 2M+ monthly visitors for a leading Canadian retailer.' },
      { href: '/case-studies/real-estate-portal', label: 'Real estate portal', note: 'A real estate platform for PropConnect Canada with machine-learning recommendations across 850,000+ active listings.' },
      { href: '/case-studies/fintech-trading-platform', label: 'Fintech trading platform', note: 'An AI-powered trading platform processing 50K+ transactions daily with 99.99% uptime for a leading Canadian fintech.' },
    ],
    faqs: [
      {
        q: 'How much does a website cost in Vancouver?',
        a: 'Our Canadian website cost guide puts a template or WordPress site at about $2,000-$10,000 CAD, a custom business website at $10,000-$50,000, an e-commerce platform at $25,000-$100,000 and an enterprise web application at $100,000-$500,000+. After free discovery you get a fixed price in CAD before coding starts.',
      },
      {
        q: 'Do you have an office in Vancouver?',
        a: 'No. Mapletech Labs is headquartered in Edmonton and we do not have a Vancouver office. We serve Vancouver and BC clients remotely, with working hours that almost fully overlap, and we can hold in-person workshops in Vancouver by arrangement, with travel agreed up front.',
      },
      {
        q: 'How do you handle BC privacy rules (PIPA)?',
        a: 'We build with BC’s PIPA in mind for private-sector sites that handle personal information, planning Canadian data hosting, encryption and access controls where your project needs them. We document how data is collected, stored and shared so your team can review it, and your legal team confirms the obligations that apply to your business.',
      },
      {
        q: 'Can we edit the website ourselves?',
        a: 'Yes. We provide a CMS so your team can edit pages and content without a developer. At handover we train your team to use it, so you can keep your website current after launch.',
      },
      {
        q: 'Who owns the website code and domain?',
        a: 'You do. All source code, design files and the domain for your website belong to you, with no lock-in. You can keep working with us after launch or hand the website to your own team.',
      },
    ],
  },
  'seo-company-in-vancouver': {
    title: 'SEO Company in Vancouver',
    description: 'Vancouver SEO from Mapletech Labs: local map-pack search, technical fixes and CAD retainers with monthly reporting. Call +1-403-604-8692.',
    intro: 'Mapletech Labs is a Canadian SEO team headquartered in Edmonton, working with Vancouver and Lower Mainland businesses that want more calls and leads from Google and Bing. We do not have a Vancouver office. Vancouver is one hour behind Edmonton, so our working days almost fully overlap and questions get answered the same day. You work directly with the specialists doing the keyword research, technical fixes and content, not a salesperson, and we come to Vancouver for in-person workshops, audits and milestone reviews when a project needs one, with travel agreed up front. Retainers are priced in CAD. Call +1-403-604-8692 to talk through your Vancouver search goals.',
    sections: [
      {
        heading: 'Vancouver search markets we know',
        body: [
          'Vancouver is several search markets stacked on top of each other. Tech and SaaS companies chase category and comparison terms their competitors already bid on, film, VFX and digital media studios get found through portfolio and production-service searches, and tourism and hospitality businesses live on seasonal “near me” and itinerary queries. Real estate teams, clean-tech firms and trades contractors compete at the neighbourhood level across Burnaby, Surrey, Richmond and North Vancouver. Add multilingual searchers — Punjabi, Mandarin, Cantonese and Tagalog among them — and one keyword list is never enough. We map the English and non-English queries that actually produce enquiries, then build the pages and profile signals for each.',
        ],
      },
      {
        heading: 'Google Business Profile and NAP across Metro Vancouver',
        body: [
          'For Vancouver service businesses the map pack often decides who gets the call, so the profile has to be truthful. We set your Google Business Profile up as a genuine service-area business when you serve Metro Vancouver from elsewhere, choose categories and service areas that match the work you actually take, and keep the same name, address and phone — NAP — across your site, directories and citations. We will not rent a virtual office downtown or claim a Vancouver address you do not use. Those profiles get suspended and take months to recover, which is why a clean service-area setup with consistent citations holds its position.',
        ],
      },
      {
        heading: 'Technical SEO done by engineers',
        body: [
          'Mapletech Labs is a software development company first, so the technical work is done by the engineers who build Next.js and WordPress sites every week. We audit Core Web Vitals, crawling and indexation, canonical tags, schema markup and internal linking on our ',
          { href: '/services/digital-marketing/seo-services', label: 'SEO services' },
          ' page, then fix what is slowing pages or blocking crawlers. Changes go into your codebase or CMS rather than bolted on with plugins, so they survive the next platform update.',
        ],
      },
      {
        heading: 'SEO costs and monthly reporting',
        body: [
          'SEO is quoted as a monthly retainer in CAD. In our ',
          { href: '/blog/digital-marketing-cost-canada', label: 'digital marketing cost guide for Canada' },
          ', SEO retainers typically run $1,500-$10,000 CAD per month, depending on competition, site size and scope. Each month you get a report with rankings, organic traffic and conversions, the work completed, and plain-language notes on what moved and what we are testing next. Metro Vancouver is a competitive market, so we agree the scope in writing before the first invoice. You can compare our rates on ',
          { href: '/pricing', label: 'our pricing page' },
          ' before you commit.',
        ],
      },
      {
        heading: 'Full-service digital marketing',
        body: [
          'Need ads and social too? See our ',
          { href: '/locations/digital-marketing-agency-in-vancouver', label: 'Digital Marketing Agency in Vancouver' },
          '.',
        ],
      },
    ],
    proof: [
      { href: '/case-studies/logistics-platform', label: 'Logistics & fleet platform', note: 'A real-time logistics platform handling 15K+ daily deliveries, with 25% fuel savings and a 98% on-time delivery rate.' },
      { href: '/case-studies/ecommerce-platform', label: 'E-commerce platform', note: 'A high-performance e-commerce platform driving 3x revenue growth and handling 2M+ monthly visitors for a Canadian retailer.' },
      { href: '/case-studies/real-estate-portal', label: 'Real estate portal', note: 'PropConnect Canada\'s real estate platform, with machine-learning recommendations across 850,000+ active listings.' },
    ],
    faqs: [
      {
        q: 'What does SEO cost in Vancouver?',
        a: 'Retainers for Vancouver campaigns usually fall between $1,500 and $10,000 CAD per month, the range we publish in our Canadian digital marketing cost guide. A single-location trades or hospitality business sits near the bottom; SaaS, film and real estate brands fighting for competitive Metro Vancouver terms sit higher. After a free review of your site and your competitors we quote one fixed monthly figure in CAD rather than an hourly estimate.',
      },
      {
        q: 'How long before we see movement in Vancouver search results?',
        a: 'Profile and technical fixes usually show up within 8-16 weeks for a site without serious blockers. Competitive category terms — SaaS comparisons, real estate or tourism — more often need 4-9 months before the trend is worth judging. The first report already tracks impressions, indexed pages and enquiries, so you can see direction before the position charts catch up.',
      },
      {
        q: 'Can we rank in the Vancouver map pack without a Vancouver address?',
        a: 'Yes, as long as the address and service area are real. You need either a staffed location in Metro Vancouver or a genuine service-area business setup covering the cities you serve. Virtual offices and invented addresses get profiles suspended or pushed down, so we will not use them. If your crews cover Burnaby, Surrey, Richmond and North Vancouver from elsewhere, we configure the profile honestly, keep your name, address and phone identical everywhere, and back the coverage with location pages and real reviews.',
      },
      {
        q: 'Can we meet your team in person in Vancouver?',
        a: 'Yes, when a project benefits from it. We are headquartered in Edmonton, keep Vancouver hours that almost match ours, and travel to Vancouver for discovery sessions, audits and milestone reviews. Travel is agreed up front, so there are no surprises on the invoice. Between visits, day-to-day work runs on calls, shared documents and monthly reports, and you can always reach the specialists on your account at +1-403-604-8692.',
      },
      {
        q: 'What is in the monthly Vancouver SEO report?',
        a: 'A short, plain-language summary of the keyword movements that matter in Metro Vancouver, organic sessions and enquiries from analytics, the tasks finished that month, and what we are testing next. Anything needing your sign-off — content approvals, profile edits, new service pages — is flagged separately. The format is the same whether you serve downtown Vancouver, Surrey or the North Shore.',
      },
    ],
  },
  'ui-ux-design-company-in-calgary': {
    title: 'UI/UX Design Company in Calgary',
    description: 'UX research, UI design and clickable prototypes for Calgary teams from an Alberta studio, at a fixed CAD price. Get a free quote.',
    intro: 'Mapletech Labs is an Alberta UI/UX design team headquartered in Edmonton, and we work with Calgary companies that need software people can actually use. We do not have a Calgary office. Our designers sit with the engineers who build the product, so what we draw is what gets shipped, not a set of screens thrown over a wall. When a project calls for it, we travel to Calgary for research and design workshops in person, with travel agreed up front. Day-to-day work runs on calls and shared Figma files. Call +1-403-604-8692.',
    sections: [
      {
        heading: 'Products Calgary teams ask us to design',
        body: [
          'Calgary’s economy gives us a particular mix of design work. Energy and oilfield services companies need field tools that hold up on a tablet in gloves, with large touch targets, offline states and data that syncs when the crew is back in range. Fintech and trading teams need dashboards where the numbers are legible at a glance and every action is reversible. Logistics and transport firms need dispatch and tracking screens their drivers can use without training. Health providers need patient and clinic tools that protect privacy, and SaaS companies need onboarding and admin areas that reduce support tickets instead of creating them.',
        ],
      },
      {
        heading: 'Research, wireframes and clickable prototypes',
        body: [
          'Every project starts with a free UX audit: a heuristic review of what exists, a look at your analytics and interviews with the people who use the product. From there we write the flows and information architecture, then build low-fidelity wireframes for each key screen so the structure can be argued about before anyone spends time on visuals. Those wireframes become a clickable Figma prototype, and we put it in front of five to eight real users on set tasks. What they hesitate on gets fixed in the design, not discovered after launch.',
        ],
      },
      {
        heading: 'Design that engineers can actually ship',
        body: [
          'Because the same team designs and builds, handoff is not a folder of screens emailed to a stranger. We keep a component library and design tokens, annotate every state and edge case, and review the build against the design as it is coded. Designs target WCAG 2.2 AA: contrast, focus states, keyboard paths, text sizes and screen-reader labels are decided in the design files rather than bolted on later. You can see how we run research, prototyping and design systems on our ',
          { href: '/services/product-design', label: 'UI/UX and product design' },
          ' page.',
        ],
      },
      {
        heading: 'What UI/UX design costs',
        body: [
          'Design is quoted as a fixed price in CAD after the free audit. The ranges we publish are about $1,500-$5,000 for an MVP design of up to roughly 15 screens, $5,000-$12,000 for a full product design with 30+ screens, research and a design system foundation, and $12,000-$30,000+ for an enterprise design system with a full research program and accessibility work. Most projects take 6-11 weeks. You can compare how Canadian studios price this work in our ',
          { href: '/blog/ui-ux-design-companies-canada', label: 'guide to UI/UX design companies in Canada' },
          '.',
        ],
      },
    ],
    proof: [
      { href: '/case-studies/fintech-trading-platform', label: 'Fintech trading platform', note: 'An AI-powered trading platform processing 50K+ transactions daily with 99.99% uptime for a leading Canadian fintech.' },
      { href: '/case-studies/healthcare-telehealth', label: 'Telehealth platform', note: 'A HIPAA-compliant telehealth platform serving 200K+ patient sessions with 99.97% uptime for a leading Canadian healthcare provider.' },
      { href: '/case-studies/real-estate-portal', label: 'Real estate portal', note: 'A real estate platform for PropConnect Canada with machine-learning recommendations across 850,000+ active listings.' },
    ],
    faqs: [
      {
        q: 'How much does UI/UX design cost in Calgary?',
        a: 'We quote a fixed price in CAD after a free UX audit. The ranges we publish are about $1,500-$5,000 for an MVP design of up to roughly 15 screens, $5,000-$12,000 for a full product design with 30+ screens, research and a design system foundation, and $12,000-$30,000+ for an enterprise design system. Number of screens, interaction complexity, research depth and whether branding is included all move the number, and Calgary projects are priced the same way as our Edmonton work.',
      },
      {
        q: 'How long does a UI/UX design project take?',
        a: 'Most projects take 6-11 weeks across research, strategy, wireframes, visual design and handoff. A small MVP can be faster, while a multi-product design system or a large research program takes longer. Your written scope lists the milestones and the review points, so you know when research, the prototype and the final handoff are due.',
      },
      {
        q: 'Can we meet your designers in person in Calgary?',
        a: 'Yes, when it helps. We are headquartered in Edmonton and do not have a Calgary office, so for Calgary clients we drive down to run discovery, research and design workshops at your office, with travel agreed up front. Between visits, work runs on calls and shared Figma files, and you can reach the designers and engineers on your project directly at +1-403-604-8692.',
      },
      {
        q: 'Do you also build the product you design?',
        a: 'Yes. The same team that designs the product builds it, whether that is a mobile app, a web app or a marketing site. That means the design system maps to real components, edge cases are settled with the engineers who will code them, and there is no gap between the prototype and what launches. You can see the build side on our UI/UX and product design page.',
      },
      {
        q: 'Who owns the design files at the end of the project?',
        a: 'You do. The editable Figma files, clickable prototypes, component library, design tokens, research findings and usability test notes are handed over and belong to you, with no lock-in. If you have an in-house team, we can hand off in a working session so they can keep extending the system after launch.',
      },
    ],
  },
  'ui-ux-design-company-in-edmonton': {
    title: 'UI/UX Design Company in Edmonton',
    description: 'Mapletech Labs is headquartered in Edmonton and delivers UX research, UI design and prototypes at a fixed CAD price. Get a free quote.',
    intro: 'Mapletech Labs is headquartered in Edmonton, so when you hire us for UI/UX design you are working with a local Alberta team, not a remote sales desk. Our designers sit beside the engineers who build the product, which keeps flows, components and handoff aligned from the first wireframe through launch. You get a fixed scope and price in CAD before visual design starts. We run discovery workshops and usability sessions at your Edmonton office, plant or campus when in-person work helps, and day-to-day collaboration runs on shared Figma files and weekly calls. Call +1-403-604-8692 to book a free UX audit.',
    sections: [
      {
        heading: 'What Edmonton teams need designed',
        body: [
          'Edmonton organisations ask us to design SaaS dashboards where operators can scan KPIs quickly, field and inspection apps that stay usable on a tablet in cold weather, and patient and resident portals that pass a privacy review. Campus and municipal teams need booking, reporting and service portals that work for staff and the public alike. Every flow is planned for accessible design to WCAG 2.2 AA: contrast, focus states, keyboard paths and screen-reader labels are decided in the design files, not patched in after development.',
        ],
      },
      {
        heading: 'Our process from discovery to handoff',
        body: [
          'We start with discovery and user interviews, a review of analytics and a clear picture of the jobs your product must do. Wireframes map each key screen before visual polish, then we build clickable prototypes and run usability testing on real tasks. What users stumble on gets fixed in the design. We document a design system your developers can implement and stay with the build through annotated specs and review. See our ',
          { href: '/services/product-design', label: 'UI/UX and product design services' },
          ' and ',
          { href: '/services/product-design/design-systems', label: 'design systems' },
          ' pages for how we run research, prototyping and component libraries.',
        ],
      },
      {
        heading: 'In-person workshops and user testing in Edmonton',
        body: [
          'Because our head office is in Edmonton, research does not have to happen only on a video call. We can facilitate discovery workshops at your site, watch how staff use today’s tools and sketch flows with the people who will live in the product. Usability tests can be run in person with local participants when that gives clearer feedback than a remote session. Between visits, you share Figma links, comment on prototypes and join short review calls so decisions do not stall.',
        ],
      },
      {
        heading: 'Cost and timeline for UI/UX design',
        body: [
          'Design is quoted as a fixed price in CAD after a free audit. The ranges we publish are about $1,500-$5,000 for an MVP design of up to roughly 15 screens, $5,000-$12,000 for a full product design with 30+ screens, research and a design system foundation, and $12,000-$30,000+ for an enterprise design system with a full research program and accessibility work. Most projects take 6-11 weeks. Compare how Canadian studios price this work in our ',
          { href: '/blog/ui-ux-design-companies-canada', label: 'guide to choosing a UI/UX design company in Canada' },
          ', and see build ranges on ',
          { href: '/pricing', label: 'our pricing page' },
          '.',
        ],
      },
    ],
    proof: [
      { href: '/case-studies/healthcare-telehealth', label: 'Telehealth platform', note: 'A HIPAA-compliant telehealth platform serving 200K+ patient sessions with 99.97% uptime for a leading Canadian healthcare provider.' },
      { href: '/case-studies/real-estate-portal', label: 'Real estate portal', note: 'A real estate platform for PropConnect Canada with machine-learning recommendations across 850,000+ active listings.' },
      { href: '/case-studies/ecommerce-platform', label: 'E-commerce platform', note: 'A high-performance e-commerce platform driving 3x revenue growth and handling 2M+ monthly visitors for a leading Canadian retailer.' },
    ],
    faqs: [
      {
        q: 'How much does UI/UX design cost in Edmonton?',
        a: 'We quote a fixed price in CAD after a free UX audit. The ranges we publish are about $1,500-$5,000 for an MVP design of up to roughly 15 screens, $5,000-$12,000 for a full product design with 30+ screens, research and a design system foundation, and $12,000-$30,000+ for an enterprise design system. Screen count, interaction complexity, research depth and branding all move the number, and Edmonton projects are priced the same way as our other Alberta work.',
      },
      {
        q: 'How long does a UI/UX design project take in Edmonton?',
        a: 'Most Edmonton design projects take 6-11 weeks across research, strategy, wireframes, visual design and handoff. A small MVP can finish faster, while a multi-product design system or a large research program takes longer. Your written scope lists milestones and review dates so you know when the prototype and final handoff are due.',
      },
      {
        q: 'Can you also build the product you design for our Edmonton team?',
        a: 'Yes. The same Mapletech Labs team that designs your product builds it, whether that is a mobile app, a web app or an internal tool. Design tokens map to real components, edge cases are settled with the engineers who will code them, and there is no handoff gap between the Figma prototype and what launches.',
      },
      {
        q: 'Do you design for accessibility standards used in Alberta?',
        a: 'Yes. We design to WCAG 2.2 AA, which covers contrast, focus indicators, keyboard navigation, text sizing and screen-reader labels in the design files themselves. That supports public-sector and healthcare clients in Edmonton who need accessible portals and apps, alongside requirements such as Ontario’s AODA when you serve users nationally.',
      },
      {
        q: 'Who owns the Figma files when the project ends?',
        a: 'You do. The editable Figma files, clickable prototypes, component library, design tokens, research findings and usability test notes are handed over and belong to your organisation, with no lock-in. If you have an in-house team, we can run a handoff session in Edmonton or remotely so they can extend the system after launch.',
      },
    ],
  },
  'ui-ux-design-company-in-vancouver': {
    title: 'UI/UX Design Company in Vancouver',
    description: 'UI/UX design in Vancouver from CAD $1,500, with fixed-price project quotes. Get a free quote.',
    intro: 'Mapletech Labs is headquartered in Edmonton, working with Vancouver and Lower Mainland companies that need useful, accessible digital products. Our designers and engineers work on one team, keeping research, screen flows and implementation connected from the first wireframe through handoff. We serve Vancouver clients remotely, with working hours that almost fully overlap, and come to Vancouver for in-person workshops when a milestone needs one, with travel agreed up front. Between meetings, your team can review shared designs and prototypes and discuss decisions directly with the people doing the work. Call +1-403-604-8692 to talk through your project.',
    sections: [
      {
        heading: 'Products Vancouver teams ask us to design',
        body: [
          'SaaS and tech startups need onboarding, dashboards and workflows that help people reach value quickly. Digital media teams need clear navigation and content experiences across devices, while health tech products need thoughtful patient and provider flows. Clean tech teams may need interfaces for monitoring and managing complex information; tourism and booking businesses need search, availability and reservation journeys that are easy to follow. We shape each product around its users and the tasks they need to complete.',
        ],
      },
      {
        heading: 'Research, wireframes and clickable prototypes',
        body: [
          'We start by learning about your users, business goals and existing product. Research and interviews inform the key journeys, then wireframes make the structure of each screen visible before visual design begins. Clickable prototypes let your team and users try those flows and identify friction early. We refine the design from feedback and document the components and states engineers need for implementation.',
        ],
      },
      {
        heading: 'Accessible design for BC users',
        body: [
          'We design for WCAG 2.1 AA with attention to contrast, keyboard navigation, focus states and screen-reader labels. Multilingual layouts allow space for translated content and clear navigation across languages. Privacy-friendly flows make consent and personal information choices understandable, with BC PIPA requirements considered during planning. Explore our ',
          { href: '/services/product-design', label: 'UI/UX and product design' },
          ' page for more on our approach.',
        ],
      },
      {
        heading: 'What UI/UX design costs',
        body: [
          'Design is quoted as a fixed price in CAD after the free audit. The ranges we publish are about $1,500-$5,000 for an MVP design of up to roughly 15 screens, $5,000-$12,000 for a full product design with 30+ screens, research and a design system foundation, and $12,000-$30,000+ for an enterprise design system with a full research program and accessibility work. Compare Canadian studio pricing in our ',
          { href: '/blog/ui-ux-design-companies-canada', label: 'guide to UI/UX design companies in Canada' },
          '.',
        ],
      },
    ],
    proof: [
      { href: '/case-studies/fintech-trading-platform', label: 'Fintech trading platform', note: 'An AI-powered trading platform processing 50K+ transactions daily with 99.99% uptime for a leading Canadian fintech.' },
      { href: '/case-studies/healthcare-telehealth', label: 'Telehealth platform', note: 'A HIPAA-compliant telehealth platform serving 200K+ patient sessions with 99.97% uptime for a leading Canadian healthcare provider.' },
      { href: '/case-studies/real-estate-portal', label: 'Real estate portal', note: 'A real estate platform for PropConnect Canada with machine-learning recommendations across 850,000+ active listings.' },
    ],
    faqs: [
      {
        q: 'How much does UI/UX design cost in Vancouver?',
        a: 'We quote a fixed price in CAD after a free UX audit. Published ranges start at $1,500-$5,000 for an MVP design, $5,000-$12,000 for a full product design and $12,000-$30,000+ for an enterprise design system. Screen count, research and accessibility needs shape the scope.',
      },
      {
        q: 'Can we meet your designers in Vancouver?',
        a: 'Yes. We are headquartered in Edmonton and serve Vancouver remotely, but can come to Vancouver for in-person workshops when a milestone needs one, with travel agreed up front. Between visits, we work through calls and shared design files.',
      },
      {
        q: 'Can you design a booking experience for a Vancouver tourism business?',
        a: 'Yes. We can map the journey from finding an experience to checking availability and completing a reservation, then test a clickable prototype before development.',
      },
      {
        q: 'How do you approach accessibility and privacy for BC users?',
        a: 'We consider WCAG 2.1 AA in the design of navigation, contrast, focus states and labels. We also plan privacy-friendly flows with BC PIPA requirements in mind and make choices about personal information clear to users.',
      },
      {
        q: 'Can you build the product for our Lower Mainland team too?',
        a: 'Yes. Our designers and engineers work on the same team, so the people building the product can help resolve implementation details throughout design and handoff.',
      },
    ],
  },
  'ui-ux-design-company-in-toronto': {
    title: 'UI/UX Design Company in Toronto',
    description: 'UI/UX design for web and mobile apps in Toronto from Mapletech Labs. Fixed CAD pricing and a free consultation.',
    intro: 'Mapletech Labs is headquartered in Edmonton and partners with Toronto and GTA teams that need UI/UX design for products people actually use. Our designers work beside the engineers who build the software, so research, screen flows and handoff stay on one thread from wireframes through launch. We serve Toronto clients remotely with hours that overlap Eastern time, and we travel to the GTA for discovery and design workshops when in-person work helps, with travel agreed up front. Between visits, you review shared Figma files and talk directly with the people doing the work. Call +1-403-604-8692 to book a free UX audit.',
    sections: [
      {
        heading: 'What Toronto product teams need designed',
        body: [
          'Toronto and GTA companies bring us fintech and banking dashboards where trades, balances and approvals must be scannable under pressure. SaaS teams need onboarding, admin and reporting that cut support load. Health and retail apps need patient, shopper and staff flows that respect privacy and conversion goals alike. Ontario public-facing products often need to meet AODA expectations, so we plan accessible design to WCAG 2.0 AA: contrast, focus states, keyboard paths, text sizing and screen-reader labels are decided in the design files, not patched after development.',
        ],
      },
      {
        heading: 'Research, wireframes, prototypes and handoff',
        body: [
          'We start with a free UX audit: heuristic review, analytics and interviews with the people who use the product. User research and journey mapping inform wireframes for each key screen before visual design begins. Those wireframes become a clickable prototype, and we run usability testing on real tasks so hesitation shows up in Figma, not after launch. We document components and states in a design system your developers can implement, then stay with annotated specs and review through developer handoff.',
        ],
      },
      {
        heading: 'Design that the same team ships',
        body: [
          'Because Mapletech Labs designs and builds on one team, handoff is not a zip file sent to strangers. We keep a component library and design tokens, annotate edge cases and review the build as it is coded. Designs target accessible patterns your engineers can implement without rework. You can see how we run research, prototyping and design systems on our ',
          { href: '/services/product-design', label: 'UI/UX and product design' },
          ' page.',
        ],
      },
      {
        heading: 'Cost and timeline for UI/UX design',
        body: [
          'Design is quoted as a fixed price in CAD after the free audit. The ranges we publish are about $1,500-$5,000 for an MVP design of up to roughly 15 screens, $5,000-$12,000 for a full product design with 30+ screens, research and a design system foundation, and $12,000-$30,000+ for an enterprise design system with a full research program and accessibility work. Most projects take 6-11 weeks. You can compare how Canadian studios price this work in our ',
          { href: '/blog/ui-ux-design-companies-canada', label: 'guide to UI/UX design companies in Canada' },
          '.',
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
        q: 'How much does UI/UX design cost in Toronto?',
        a: 'We quote a fixed price in CAD after a free UX audit. The ranges we publish are about $1,500-$5,000 for an MVP design of up to roughly 15 screens, $5,000-$12,000 for a full product design with 30+ screens, research and a design system foundation, and $12,000-$30,000+ for an enterprise design system. Screen count, interaction complexity, research depth and branding all move the number, and Toronto projects are priced the same way as our Alberta work.',
      },
      {
        q: 'Do you design for AODA and Ontario accessibility requirements?',
        a: 'Yes. We design to WCAG 2.0 AA, which supports AODA-aligned expectations for public-facing Ontario products: contrast, focus indicators, keyboard navigation, text sizing and screen-reader labels are built into the design files. If your users span provinces, we can note where Ontario requirements differ from other markets during planning.',
      },
      {
        q: 'How long does a UI/UX design project take for a Toronto team?',
        a: 'Most projects take 6-11 weeks across research, strategy, wireframes, visual design and handoff. A small MVP can be faster, while a multi-product design system or a large research program takes longer. Your written scope lists the milestones and review points, so you know when the prototype and final handoff are due.',
      },
      {
        q: 'Can you also build the web or mobile app you design for our GTA team?',
        a: 'Yes. The same team that designs the product builds it, whether that is a mobile app, a web app or an internal tool. That means the design system maps to real components, edge cases are settled with the engineers who will code them, and there is no gap between the prototype and what launches. You can see the build side on our UI/UX and product design page.',
      },
      {
        q: 'Who owns the design files when the Toronto project ends?',
        a: 'You do. The editable Figma files, clickable prototypes, component library, design tokens, research findings and usability test notes are handed over and belong to you, with no lock-in. If you have an in-house team, we can hand off in a working session so they can keep extending the system after launch.',
      },
    ],
  },
  'saas-development-company-in-edmonton': {
    title: 'SaaS Development Company in Edmonton',
    description: 'Mapletech Labs is headquartered in Edmonton and builds multi-tenant SaaS products with a fixed CAD price. Get a free quote.',
    intro: 'Mapletech Labs is headquartered in Edmonton, so your SaaS project is supported by a local team you can meet in person. We build products from an initial MVP through to a platform ready to scale, whether you are testing a new idea or expanding an existing service. You talk directly to the senior engineers who build your product and can work with us in person at discovery workshops. Before development starts, we agree on a fixed scope and price in CAD, so you know what the project includes. Call us on +1-403-604-8692 to discuss your SaaS idea.',
    sections: [
      {
        heading: 'SaaS products Edmonton founders and companies build with us',
        body: [
          'We build B2B SaaS tools for teams in energy, agriculture, construction, healthcare and education. A product might help customers manage field work, coordinate schedules, share information or track the work that matters to their organisation. We also help companies turn internal tools into products that other businesses can use. Whether the idea starts with a founder or an established team, we shape the first release around the users and workflows it needs to serve.',
        ],
      },
      {
        heading: 'The SaaS foundations we get right first',
        body: [
          'A SaaS product needs foundations that support both its users and the people running it. We plan multi-tenant architecture to separate customer data, authentication and SSO for access, and Stripe billing with GST/HST for subscriptions. An admin dashboard gives your team a place to manage the product, while APIs connect it with other systems. Testing covers the key workflows and integrations, helping the team find problems before customers encounter them and prepare for growth.',
        ],
      },
      {
        heading: 'Workshops in person, here in Edmonton',
        body: [
          'We can hold discovery at your Edmonton office, bringing the people who understand the business and the engineers building the product into the same room. Together we map users, workflows, integrations and the first release. After the workshop, you receive a written scope so the features and decisions are clear before development starts. For a closer look at planning an early release, read ',
          { href: '/blog/build-saas-mvp-8-weeks', label: 'our 8-week SaaS MVP playbook' },
          '. We keep reviews and communication open throughout the build.',
        ],
      },
      {
        heading: 'What SaaS development costs',
        body: [
          'Our ',
          { href: '/blog/saas-development-cost-canada', label: 'Canadian SaaS development cost guide' },
          ' puts an MVP at $30,000-$75,000 CAD over 3-4 months, a growth-stage product at $75,000-$200,000 over 4-8 months, and an enterprise platform at $200,000-$500,000+ over 8-18 months. Your scope and integrations affect the estimate; we agree on a fixed CAD price before development. ',
          { href: '/blog/sred-software-development-canada', label: 'SR&ED' },
          ' and ',
          { href: '/blog/nrc-irap-funding-software-canada', label: 'NRC IRAP' },
          ' may help with eligible work, subject to their requirements and your circumstances.',
        ],
      },
    ],
    proof: [
      { href: '/case-studies/payments-api-platform', label: 'Payments API platform', note: 'PayBridge Solutions’ PCI DSS certified payments API, processing 12 million transactions a month securely and at scale.' },
      { href: '/case-studies/fintech-trading-platform', label: 'Fintech trading platform', note: 'An AI-powered trading platform processing 50K+ transactions daily with 99.99% uptime for a leading Canadian fintech.' },
      { href: '/case-studies/real-estate-portal', label: 'Real estate portal', note: 'A real estate platform for PropConnect Canada with machine-learning recommendations across 850,000+ active listings.' },
    ],
    faqs: [
      {
        q: 'How much does SaaS development cost in Edmonton?',
        a: 'Our Canadian cost guide puts an MVP at $30,000-$75,000 CAD, a growth-stage product at $75,000-$200,000, and an enterprise platform at $200,000-$500,000+. Your features and integrations shape the scope, and we agree on a fixed CAD price before development starts.',
      },
      {
        q: 'How long does it take to build a SaaS MVP?',
        a: 'Our Canadian cost guide gives an MVP timeline of 3-4 months. The written scope sets out the work and timeline for your particular product.',
      },
      {
        q: 'Can we meet your team in person in Edmonton?',
        a: 'Yes. We are headquartered in Edmonton and can hold discovery workshops at your office, so your team can discuss the product directly with ours.',
      },
      {
        q: 'Can SR&ED or IRAP help pay for our SaaS build?',
        a: 'Your project may qualify for SR&ED or NRC IRAP support, depending on the work and program requirements. Your accountant confirms whether your circumstances qualify.',
      },
      {
        q: 'Who owns the code?',
        a: 'You do. The source code and design files we create for your project belong to you, so you can continue with us or hand the code to your own team.',
      },
    ],
  },
  'saas-development-company-in-toronto': {
    title: 'SaaS Development Company in Toronto',
    description: 'Mapletech Labs builds multi-tenant SaaS from MVP to scale for Toronto teams, with a fixed CAD price agreed up front. Get a free quote.',
    intro: 'Mapletech Labs is a Canadian team headquartered in Edmonton, building multi-tenant SaaS products for Toronto businesses from MVP to scale. We do not have a Toronto office. Edmonton is two hours behind Toronto, so our working days overlap for product reviews, planning and decisions. You work directly with the senior engineers building your platform, with a written scope and a fixed CAD price agreed before development starts. We can travel to Toronto for discovery workshops, with travel agreed up front. Call +1-403-604-8692 to discuss your users, integrations and the first release your business needs.',
    sections: [
      {
        heading: 'SaaS products Toronto teams build with us',
        body: [
          'Toronto product teams bring different workflows to SaaS development: fintech needs transaction tools and reporting, insurtech needs policy and claims workflows, and health tech needs careful handling of patient information. We build B2B SaaS for professional services, including client portals, scheduling and shared workspaces. AI-powered SaaS can add document processing, search or assisted analysis where it serves a clear user need. Together we define the core workflow, tenant boundaries and subscription model before expanding the roadmap.',
        ],
      },
      {
        heading: 'Built for enterprise buyers from day one',
        body: [
          'Enterprise procurement questions shape the architecture early. We plan SSO/SAML for company sign-in, role-based access for different responsibilities and audit logs that make sensitive actions traceable. Tenant isolation and SOC 2-ready testing help prepare the product for security reviews, with test evidence your team can examine. Canadian data residency is planned across hosting, storage, backups and connected services. We agree these requirements during discovery so the first release has a clear path to enterprise adoption as customer needs grow.',
        ],
      },
      {
        heading: 'Ontario rules your SaaS may need to meet',
        body: [
          'For SaaS handling health data, PHIPA requirements can affect access, consent, retention and how information moves between providers. Public-facing parts may need to meet AODA/WCAG 2.0 AA accessibility requirements, including keyboard navigation, readable forms and screen reader support. PIPEDA may also apply to personal information handled through commercial activities. We map data flows and technical controls during discovery, using our ',
          { href: '/blog/app-privacy-compliance-canada', label: 'Canadian app privacy checklist' },
          ' to support planning and review; your legal team confirms what applies',
        ],
      },
      {
        heading: 'What SaaS development costs',
        body: [
          'Our ',
          { href: '/blog/saas-development-cost-canada', label: 'Canadian SaaS development cost guide' },
          ' puts an MVP at $30,000-$75,000 CAD over 3 - 4 months, a growth-stage product at $75,000-$200,000 over 4 - 8 months, and an enterprise platform at $200,000-$500,000+ over 8 - 18 months. Integrations, security requirements and the scope of the first release shape your fixed CAD price. Before choosing a partner, use our ',
          { href: '/blog/software-development-companies-toronto', label: 'guide to choosing a Toronto software company' },
          ' to compare scope, delivery responsibilities and ownership terms.',
        ],
      },
    ],
    proof: [
      { href: '/case-studies/payments-api-platform', label: 'Payments API platform', note: 'PayBridge Solutions’ PCI DSS certified payments API, processing 12 million transactions a month securely and at scale.' },
      { href: '/case-studies/fintech-trading-platform', label: 'Fintech trading platform', note: 'An AI-powered trading platform processing 50K+ transactions daily with 99.99% uptime for a leading Canadian fintech.' },
      { href: '/case-studies/healthcare-telehealth', label: 'Telehealth platform', note: 'A compliant telehealth platform serving 200K+ patient sessions with 99.97% uptime for a Canadian healthcare provider.' },
    ],
    faqs: [
      {
        q: 'How much does SaaS development cost in Toronto?',
        a: 'Our Canadian SaaS development cost guide puts an MVP at $30,000-$75,000 CAD, a growth-stage product at $75,000-$200,000, and an enterprise platform at $200,000-$500,000+. We agree on the scope and a fixed CAD price before development starts.',
      },
      {
        q: 'How long does it take to build a SaaS MVP?',
        a: 'Our Canadian cost guide gives an MVP timeline of 3 - 4 months. Discovery defines the core workflow, integrations and acceptance criteria, and your written scope sets the timeline for your product.',
      },
      {
        q: 'Do you have an office in Toronto?',
        a: 'No. Mapletech Labs is headquartered in Edmonton and we do not have a Toronto office. Edmonton is two hours behind Toronto, so our working days overlap. We travel to Toronto for workshops when needed, with travel agreed up front.',
      },
      {
        q: 'Can you build SaaS that handles health data under PHIPA?',
        a: 'Yes. We can build access controls, audit logs and data handling workflows around the PHIPA requirements identified for your product. We plan Canadian data residency and review hosting, backups and integrations with your team. Your legal team confirms the obligations that apply and reviews the product alongside the technical testing.',
      },
      {
        q: 'Who owns the code?',
        a: 'You do. The source code and design files we create for your project belong to you, so you can continue with us or hand the code to your own team.',
      },
    ],
  },
  'saas-development-company-in-calgary': {
    title: 'SaaS Development Company in Calgary',
    description:
      'Mapletech Labs builds multi-tenant SaaS for Calgary energy, logistics and fintech teams, from MVP to scale, with a fixed CAD price. Get a free quote.',
    intro:
      'Mapletech Labs is a Canadian software team headquartered in Edmonton, about a three-hour drive from Calgary and in the same time zone. We build multi-tenant SaaS from first MVP through products ready to grow with your customer base. We do not maintain a Calgary office; when it helps, we travel to Calgary for discovery workshops arranged in advance. You speak with the senior engineers who write your code, not a sales layer. A written scope and a fixed price in CAD are agreed before development begins. Call +1-403-604-8692 to discuss your SaaS idea.',
    sections: [
      {
        heading: 'SaaS products Calgary teams build with us',
        body: [
          'Calgary companies often need B2B SaaS tied to Alberta industries. We build products for energy and oil and gas services, including field operations dashboards and asset and maintenance tracking that keep crews and equipment aligned. Logistics and transportation teams use our platforms for dispatch, routing and customer visibility. Agtech and fintech founders bring billing, compliance and reporting needs we plan into the architecture. When an internal spreadsheet or portal has outgrown the office, we help teams productize it for paying customers with clear tenant boundaries and onboarding.',
        ],
      },
      {
        heading: 'SaaS foundations we plan first',
        body: [
          'Before features pile up, we align on foundations that keep the product maintainable. Multi-tenant architecture separates each customer\'s data with isolation your security reviewers can trace. SSO and role-based access match how Calgary enterprises sign in and delegate work. Stripe subscription billing includes GST handling suited to Canadian invoices. An admin dashboard lets your staff manage tenants, plans and support without developer tickets. APIs and integrations connect ERP, CRM and industry systems, and automated tests cover the workflows that must not break on release.',
        ],
      },
      {
        heading: 'Discovery workshops in Calgary',
        body: [
          'When an in-person session helps, we come to your Calgary office for discovery. Product owners, operators and our engineers map users, day-to-day workflows, integrations and what belongs in the first release. You leave with decisions captured, not a vague slide deck. After the workshop we deliver a written scope that lists features, assumptions and timeline before coding starts. For how we structure an early release, read ',
          { href: '/blog/build-saas-mvp-8-weeks', label: 'our 8-week SaaS MVP playbook' },
          '. We keep status updates and review calls on a rhythm that fits your team.',
        ],
      },
      {
        heading: 'What SaaS development costs',
        body: [
          'Our ',
          { href: '/blog/saas-development-cost-canada', label: 'Canadian SaaS development cost guide' },
          ' puts an MVP at $30,000-$75,000 CAD over 3-4 months, a growth-stage product at $75,000-$200,000 over 4-8 months, and an enterprise platform at $200,000-$500,000+ over 8-18 months. Your scope and integrations affect the estimate; we agree on a fixed CAD price before development. ',
          { href: '/blog/sred-software-development-canada', label: 'SR&ED' },
          ' and ',
          { href: '/blog/nrc-irap-funding-software-canada', label: 'NRC IRAP' },
          ' may help with eligible work, subject to their requirements.',
        ],
      },
    ],
    proof: [
      { href: '/case-studies/payments-api-platform', label: 'Payments API platform', note: 'PayBridge Solutions’ PCI DSS certified payments API, processing 12 million transactions a month securely and at scale.' },
      { href: '/case-studies/fintech-trading-platform', label: 'Fintech trading platform', note: 'An AI-powered trading platform processing 50K+ transactions daily with 99.99% uptime for a leading Canadian fintech.' },
      { href: '/case-studies/logistics-platform', label: 'Logistics & fleet platform', note: 'A real-time logistics platform handling 15K+ daily deliveries, with 25% fuel savings and a 98% on-time delivery rate.' },
    ],
    faqs: [
      {
        q: 'How much does SaaS development cost in Calgary?',
        a: 'Our Canadian cost guide puts an MVP at $30,000-$75,000 CAD, a growth-stage product at $75,000-$200,000, and an enterprise platform at $200,000-$500,000+. Your features and integrations shape the scope, and we agree on a fixed CAD price before development starts.',
      },
      {
        q: 'How long does it take to build a SaaS MVP?',
        a: 'Our Canadian cost guide gives an MVP timeline of 3-4 months. The written scope sets out the work and timeline for your particular product.',
      },
      {
        q: 'Do you have an office in Calgary?',
        a: 'No. Mapletech Labs is headquartered in Edmonton, about a three-hour drive from Calgary and in the same time zone. We do not have a Calgary office. We travel to Calgary for discovery workshops when you need them, arranged in advance.',
      },
      {
        q: 'Can SR&ED or IRAP help pay for our SaaS build?',
        a: 'Your project may qualify for SR&ED or NRC IRAP support, depending on the work and program requirements. Your accountant confirms whether your circumstances qualify.',
      },
      {
        q: 'Who owns the code?',
        a: 'You do. The source code and design files we create for your project belong to you, so you can continue with us or hand the code to your own team.',
      },
    ],
  },
  'saas-development-company-in-vancouver': {
    title: 'SaaS Development Company in Vancouver',
    description:
      'Mapletech Labs builds multi-tenant SaaS for Vancouver and BC teams, with Canadian data residency and a fixed CAD price agreed up front. Get a free quote.',
    intro:
      'Mapletech Labs is a Canadian team headquartered in Edmonton, building multi-tenant SaaS products for Vancouver and BC businesses. We do not have a Vancouver office, but Edmonton is one hour ahead of Vancouver, so our working days almost fully overlap and you rarely wait for an answer. We come to Vancouver for discovery workshops by arrangement, with travel agreed up front. You work directly with the senior engineers who build your platform, and a written scope with a fixed CAD price is agreed before development begins. Call +1-403-604-8692 to discuss your SaaS idea.',
    sections: [
      {
        heading: 'SaaS products Vancouver teams build with us',
        body: [
          'Vancouver product teams bring their own mix of B2B SaaS needs. We build platforms for clean tech and sustainability reporting, where customers track emissions, energy use and supply-chain data in one place. Health tech teams need careful handling of patient information and appointment workflows. Creative and media companies ask for tools that manage projects, assets and client reviews. E-commerce operations teams use our platforms for order, inventory and fulfilment visibility. Where AI-assisted features serve a clear user need, we add them, and we define the core workflow, tenant boundaries and subscription model before the roadmap expands.',
        ],
      },
      {
        heading: 'Ready for enterprise and international customers',
        body: [
          'Many Vancouver SaaS companies sell into the US early, so we plan for it from the start. We build SSO/SAML for company sign-in, role-based access for different responsibilities, and audit logs that make sensitive actions traceable. Tenant isolation and SOC 2-ready testing prepare the product for security reviews, with test evidence your team can examine. For billing, we set up multi-currency Stripe so US customers pay in USD, and we plan taxes, including GST and PST in BC, so invoices are correct from the first sale. We agree these requirements during discovery so the first release has a clear path to enterprise adoption.',
        ],
      },
      {
        heading: 'BC privacy rules your SaaS may need to meet',
        body: [
          'SaaS handling personal information in British Columbia usually falls under BC’s Personal Information Protection Act (PIPA), and products sold to BC public bodies also need to meet FIPPA. We plan Canadian data residency across hosting, backups and connected services, and we build in encryption, access control and audit logs from the start. Our ',
          { href: '/blog/app-privacy-compliance-canada', label: 'Canadian app privacy checklist' },
          ' covers the basics, but your legal team confirms what applies.',
        ],
      },
      {
        heading: 'What SaaS development costs',
        body: [
          'Our ',
          { href: '/blog/saas-development-cost-canada', label: 'Canadian SaaS development cost guide' },
          ' puts an MVP at $30,000-$75,000 CAD over 3-4 months, a growth-stage product at $75,000-$200,000 over 4-8 months, and an enterprise platform at $200,000-$500,000+ over 8-18 months. Integrations, security requirements and the scope of the first release shape your fixed CAD price. If you are still comparing partners, our ',
          { href: '/blog/software-development-companies-vancouver', label: 'guide to choosing a Vancouver software company' },
          ' covers the questions to ask before you sign.',
        ],
      },
    ],
    proof: [
      { href: '/case-studies/payments-api-platform', label: 'Payments API platform', note: 'PayBridge Solutions’ PCI DSS certified payments API, processing 12 million transactions a month securely and at scale.' },
      { href: '/case-studies/healthcare-telehealth', label: 'Telehealth platform', note: 'A HIPAA-compliant telehealth platform serving 200K+ patient sessions with 99.97% uptime for a leading Canadian healthcare provider.' },
      { href: '/case-studies/real-estate-portal', label: 'Real estate portal', note: 'A real estate platform for PropConnect Canada with machine-learning recommendations across 850,000+ active listings.' },
    ],
    faqs: [
      {
        q: 'How much does SaaS development cost in Vancouver?',
        a: 'Our Canadian SaaS development cost guide puts an MVP at $30,000-$75,000 CAD, a growth-stage product at $75,000-$200,000, and an enterprise platform at $200,000-$500,000+. Your features and integrations shape the scope, and we agree on a fixed CAD price before development starts.',
      },
      {
        q: 'How long does it take to build a SaaS MVP?',
        a: 'Our Canadian cost guide gives an MVP timeline of 3-4 months. The written scope sets out the work and timeline for your particular product.',
      },
      {
        q: 'Do you have an office in Vancouver?',
        a: 'No. Mapletech Labs is headquartered in Edmonton, one hour ahead of Vancouver, and we do not have a Vancouver office. We come to Vancouver for in-person discovery workshops by arrangement, with travel agreed up front.',
      },
      {
        q: 'Can you keep our SaaS data in Canada?',
        a: 'Yes. We plan Canadian hosting, storage and backups for your SaaS, and we review connected services with you so personal information stays in Canada where your project needs it.',
      },
      {
        q: 'Who owns the code?',
        a: 'You do. The source code and design files we create for your project belong to you, so you can continue with us or hand the code to your own team.',
      },
    ],
  },
  'app-development-company-in-ottawa': {
    title: 'App Development Company in Ottawa',
    description: 'iOS and Android app development for Ottawa businesses by a Canadian team headquartered in Edmonton, with a fixed CAD price. Get a free quote.',
    intro: 'Mapletech Labs is a Canadian app development team headquartered in Edmonton that builds iOS and Android apps for Ottawa businesses and organisations. Edmonton is two hours behind Ottawa, so most of the working day overlaps and questions get answered the same day. We work with teams in government, tech, health and fintech across the city. You deal directly with the senior engineers who write your code, not account managers passing notes along. Your contract is with a Canadian company, priced in CAD, and you get a fixed scope and price before any work starts. Call us on +1-403-604-8692 to talk through your app idea.',
    sections: [
      {
        heading: 'Apps for Ottawa’s government, tech and health sectors',
        body: [
          'Ottawa’s economy mixes federal departments and the suppliers that support them, the Kanata North tech park, fintech and payments companies, and health and university teams that need reliable mobile tools. Field and operations staff need apps that work on the go, sync when a connection returns and respect strict access rules. Product and IT teams at growing software firms need iOS and Android apps that match their web platform. Clinics and campus services need booking, intake and patient or student portals. We scope each build around how your staff and users actually work.',
        ],
      },
      {
        heading: 'Security, bilingual and accessible by default',
        body: [
          'Many Ottawa apps serve the public sector or regulated industries, so security expectations run high from day one. We plan for strong authentication, encryption in transit and at rest, and audit logs that show who changed what. English and French bilingual content is built in when your users need it, not patched on later. We design and test to WCAG 2.1 level AA, the bar Ontario’s Accessibility for Ontarians with Disabilities Act (AODA) expects for many organisations. Personal and operational data can stay in Canadian cloud regions so residency requirements are met. If you are comparing vendors, our ',
          { href: '/blog/software-development-companies-ottawa', label: 'guide to choosing a software development company in Ottawa' },
          ' covers the questions worth asking on a first call.',
        ],
      },
      {
        heading: 'Native or cross-platform: picking the right build',
        body: [
          'Most Ottawa projects need to reach both iPhone and Android users, so we usually recommend a cross-platform build in Flutter or React Native. One shared codebase ships to both app stores and is typically 30-40% less expensive than building separate Swift and Kotlin apps. When your product leans on device hardware, Bluetooth sensors, large offline datasets or maximum performance, we build natively instead. We explain that trade-off for your app in plain language before you sign off on a stack, rather than defaulting to one approach every time.',
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
      { href: '/case-studies/payments-api-platform', label: 'Payments API platform (Ottawa)', note: 'A PCI DSS certified payments API for Ottawa-based PayBridge Solutions, processing 12 million transactions a month.' },
      { href: '/case-studies/fintech-trading-platform', label: 'Fintech trading platform', note: 'An AI-powered trading platform processing 50K+ transactions daily with 99.99% uptime for a Canadian fintech.' },
      { href: '/case-studies/logistics-platform', label: 'Logistics & fleet platform', note: 'A real-time logistics platform handling 15K+ daily deliveries, with 25% fuel savings and a 98% on-time delivery rate.' },
    ],
    faqs: [
      {
        q: 'How much does app development cost in Ottawa?',
        a: 'Using the ranges in our Canadian cost guide, a simple single-platform app costs about $25,000-$50,000 CAD, a mid-size iOS and Android app about $50,000-$150,000, and a complex platform $150,000 or more. After a free discovery phase you get a fixed price in CAD, so your budget is set before development begins.',
      },
      {
        q: 'Do you have developers in Ottawa?',
        a: 'No. Mapletech Labs is headquartered in Edmonton and we do not have an Ottawa office or Ottawa staff. We work with Ottawa clients through video workshops, weekly calls and shared project boards, with Edmonton two hours behind Ottawa so most of the working day overlaps.',
      },
      {
        q: 'Can you build bilingual English and French apps?',
        a: 'Yes. When your users need both official languages, we build English and French content into the app from the start: labels, menus, notifications and in-app copy, with a clear way to switch languages. We plan the content model during discovery so translations stay maintainable after launch.',
      },
      {
        q: 'Can you meet public-sector security and Canadian data residency requirements?',
        a: 'We design for strong authentication, encryption, role-based access and audit logging, and we can host app data in Canadian cloud regions when your project requires it. Public-sector and supplier projects often need extra review steps; we document our approach for your security team, and your own officers should confirm the final compliance position.',
      },
      {
        q: 'Who owns the code for our app?',
        a: 'You do. All source code, app store accounts, cloud accounts and design files we create for your project belong to you, with no lock-in. You can keep working with us after launch or hand the code to your own team.',
      },
    ],
  },
  'web-development-company-in-montreal': {
    title: 'Web Development Company in Montreal',
    description: 'Mapletech Labs offers web development for Montreal businesses: fast, SEO-ready custom sites with a fixed CAD price agreed up front. Get a free quote.',
    intro: 'Mapletech Labs is a Canadian web development team headquartered in Edmonton, building fast, SEO-ready business websites, e-commerce stores and web apps for Montreal companies across retail, tech and hospitality. We do not have a Montreal office; you work directly with the senior engineers who write your code and join video workshops when a milestone needs your team in the room. Your contract is with a Canadian company, priced in CAD, with a fixed scope and a fixed price agreed before work starts, so you know what is included from day one. Call us on +1-403-604-8692 to talk through your project.',
    sections: [
      {
        heading: 'Websites for Montreal’s retail, AI and creative sectors',
        body: [
          'Montreal’s economy mixes strong retail and e-commerce, AI and tech startups, gaming and creative studios, and tourism and hospitality operators who need sites that convert searches into bookings and sales. Retailers need product catalogs, secure checkout and inventory-friendly storefronts. AI and SaaS teams need marketing sites and product dashboards that explain a complex offer clearly. Creative and gaming studios need portfolio and showcase pages that stay fast with rich media. Hotels, venues and tour operators need seasonal campaigns and booking flows your team can update without a developer for every change.',
        ],
      },
      {
        heading: 'French-first and Law 25 ready',
        body: [
          'Quebec’s Charter of the French Language means French must be available on commercial websites serving Quebec customers. We build bilingual FR/EN from the start, with proper hreflang tags so Google and Bing understand each language version. Quebec Law 25 covers consent banners, privacy policies and how personal data is collected and stored. We implement the consent, cookie and privacy features your site needs; your legal counsel confirms how the law applies to your business and reviews final policy wording. For vendor comparisons, see our ',
          { href: '/blog/software-development-companies-montreal', label: 'guide to software development companies in Montreal' },
          '.',
        ],
      },
      {
        heading: 'Fast, search-ready builds',
        body: [
          'We develop on Next.js and React, rendering key pages on the server so crawlers and visitors get readable content on first load. Core Web Vitals guide image sizes, fonts and script loading as we build, not as a last-minute patch. Semantic HTML, clean URLs and structured data describe your services and locations to search engines. A CMS lets your Montreal team publish updates to offers, blog posts and seasonal pages without opening a developer ticket every time, so the site can keep ranking on Google and Bing as your business changes.',
        ],
      },
      {
        heading: 'What a website costs in Montreal',
        body: [
          'Our ',
          { href: '/blog/website-cost-canada', label: 'Canadian website cost guide' },
          ' puts a template or WordPress site at about $2,000-$10,000 CAD (2-4 weeks), a custom business website at $10,000-$50,000 (4-10 weeks), an e-commerce platform at $25,000-$100,000 (8-16 weeks) and an enterprise web application at $100,000-$500,000+ (4-12 months). Discovery is free, and your price is fixed in CAD before coding starts, so your team can plan with a clear budget and timeline.',
        ],
      },
    ],
    proof: [
      { href: '/case-studies/ecommerce-platform', label: 'E-commerce platform (Montréal)', note: 'A checkout redesign for Montréal-based NorthStar E-Commerce that lifted conversion from 2.1% to 3.8% in 90 days, on a site with 2M+ monthly visitors.' },
      { href: '/case-studies/real-estate-portal', label: 'Real estate portal', note: 'ML-powered property recommendations across 850K+ active listings nationwide.' },
      { href: '/case-studies/fintech-trading-platform', label: 'Fintech trading platform', note: 'An AI-powered trading platform processing 50K+ transactions daily with 99.99% uptime for a leading Canadian fintech.' },
    ],
    faqs: [
      {
        q: 'How much does a website cost in Montreal?',
        a: 'Our Canadian website cost guide puts a template or WordPress site at about $2,000-$10,000 CAD, a custom business website at $10,000-$50,000, an e-commerce platform at $25,000-$100,000 and an enterprise web application at $100,000-$500,000+. After free discovery you get a fixed price in CAD before coding starts.',
      },
      {
        q: 'Can you build a bilingual French and English website?',
        a: 'Yes. When your customers need both languages, we build French and English content into the site from the start: navigation, page copy, forms and metadata, with hreflang tags and a clear way to switch languages. We plan the content model during discovery so translations stay maintainable after launch.',
      },
      {
        q: 'Is the site compliant with Quebec Law 25?',
        a: 'We build the consent banners, cookie controls and privacy-policy pages your site needs, and we structure data collection so you can explain it to users. Your legal counsel should review how Law 25 applies to your business and sign off on final policy wording; we do not provide legal advice.',
      },
      {
        q: 'Do you have an office in Montreal?',
        a: 'No. Mapletech Labs is headquartered in Edmonton and we do not have a Montreal office. We deliver remotely with video workshops, weekly calls and shared project boards, and you work directly with the senior engineers building your site.',
      },
      {
        q: 'Who owns the website code and domain?',
        a: 'You do. All source code, design files and the domain for your website belong to you, with no lock-in. You can keep working with us after launch or hand the website to your own team.',
      },
    ],
  },
  'ai-development-company-in-montreal': {
    title: 'AI Development Company in Montreal',
    description: 'Mapletech Labs offers AI development for Montreal businesses: LLM features, AI chatbots and automation at a fixed CAD price. Get a free quote.',
    intro: 'Mapletech Labs is a Canadian AI development team headquartered in Edmonton, and we build practical AI for Montreal businesses: large language model (LLM) integration, chatbots and AI agents, document automation and predictive models. We do not have a Montreal office; we deliver remotely, and you work directly with the senior engineers who design and build your system, not a sales layer. Our focus is AI that saves staff time and answers from your own data. Your contract is with a Canadian company, priced in CAD, with a fixed scope and a fixed price agreed before work starts. Call us on +1-403-604-8692 to talk through your idea.',
    sections: [
      {
        heading: 'Applied AI for Montreal companies',
        body: [
          'Montreal has one of the deepest AI research communities in the world, anchored by Mila, the city’s well-known AI research institute. Research is only half the story, though: most Montreal businesses need AI that works inside their daily operations. Retailers use AI for smarter product search and customer support. Finance teams use it to review documents faster and triage alerts so analysts see the urgent ones first. Logistics companies sort shipping documents and busy inboxes automatically. Health teams turn long intake files into short summaries for a clinician to check. We turn these ideas into working products your staff actually use.',
        ],
      },
      {
        heading: 'Law 25, French and data residency',
        body: [
          'Quebec’s Law 25 sets rules for personal information, including telling people when a decision about them is made only by automated processing and letting them ask for a person to review it. We build in that notice, human review and audit logs from the start. Under Quebec’s Charter of the French Language, customer-facing chatbots and interfaces should work in French, so we design and test them in French and English. We can host your AI system and its data in Canadian cloud regions. Your privacy officer or lawyer should confirm the final compliance position. For vendor comparisons, see our ',
          { href: '/blog/software-development-companies-montreal', label: 'Montreal software development guide' },
          '.',
        ],
      },
      {
        heading: 'From pilot to production',
        body: [
          'We start small and prove value before you commit a large budget. First, we build a prototype on your own data, so you can see real answers to real questions within weeks. Next, we measure it against a test set of questions your team agrees on, so accuracy is a number rather than a feeling. Then we add guardrails: sources shown with each answer, permission checks, hand-off to a person when the system is unsure, and logs of what it was asked. Only then do we move to production, with monitoring and a clear plan for updates. Our guide to ',
          { href: '/blog/agentic-ai-in-production', label: 'agentic AI in production' },
          ' explains this approach in more depth.',
        ],
      },
      {
        heading: 'What AI development costs',
        body: [
          'Our ',
          { href: '/blog/ai-development-cost-canada', label: 'AI development cost guide' },
          ' gives planning ranges for Canadian projects. Adding an LLM feature to an existing app is about $10,000-$35,000 CAD. A chatbot on your own documents is about $15,000-$50,000. Custom model training starts around $75,000. If you are still comparing vendors, our ',
          { href: '/blog/ai-development-companies-canada', label: 'guide to AI development companies in Canada' },
          ' lists the questions to ask before you sign. Discovery is free, and your price is fixed before coding starts, so your Montreal team can plan with a clear budget.',
        ],
      },
    ],
    proof: [
      { href: '/case-studies/fintech-trading-platform', label: 'Fintech trading platform', note: 'An AI-powered trading platform processing 50K+ transactions daily with 99.99% uptime for a leading Canadian fintech.' },
      { href: '/case-studies/payments-api-platform', label: 'Payments API platform', note: 'A PCI DSS certified payments API processing 12 million transactions a month, securely and at scale.' },
      { href: '/case-studies/ecommerce-platform', label: 'E-commerce platform (Montréal)', note: 'A checkout redesign for Montréal-based NorthStar E-Commerce that lifted conversion from 2.1% to 3.8% in 90 days.' },
    ],
    faqs: [
      {
        q: 'How much does AI development cost in Montreal?',
        a: 'Using the planning ranges in our AI development cost guide, an LLM feature in an existing app is about $10,000-$35,000 CAD, a chatbot on your own documents about $15,000-$50,000, and custom model training starts around $75,000. These are not quotes. After a free discovery call you get a fixed price in CAD.',
      },
      {
        q: 'Can you build French-language AI chatbots?',
        a: 'Yes. Current language models handle French well, and we build and test chatbots in French and English from the start: prompts, answers, buttons and hand-off messages. We check answers with French-speaking reviewers from your team before launch, so the bot sounds natural to your Quebec customers.',
      },
      {
        q: 'How do you handle Law 25 and automated decisions?',
        a: 'When a decision about a person is made only by automated processing, Law 25 requires telling them and letting them ask for a person to review it. We build in that notice, human review for important decisions, audit logs and Canadian hosting. Your privacy officer or lawyer should confirm the final position; we do not provide legal advice.',
      },
      {
        q: 'Do you have an office in Montreal?',
        a: 'No. Mapletech Labs is headquartered in Edmonton and we do not have a Montreal office. We serve Montreal clients remotely with video workshops, weekly calls and shared project boards, and you work directly with the senior engineers building your system.',
      },
      {
        q: 'Who owns the code, models and data?',
        a: 'You do. All source code, prompts, fine-tuned models, configuration and your data belong to you, with no lock-in. You can keep working with us after launch or hand everything to your own team.',
      },
    ],
  },
  'seo-company-in-ottawa': {
    title: 'SEO Company in Ottawa',
    description: 'SEO services for Ottawa businesses from a Canadian team headquartered in Edmonton. Local, technical and bilingual SEO. Get a free SEO audit.',
    intro: 'Mapletech Labs is a Canadian SEO and digital marketing team headquartered in Edmonton that works with Ottawa businesses and organisations that want more calls, leads and sales from Google and Bing. We do not have an Ottawa office, but Edmonton is only two hours behind Ottawa, so our working days overlap for most of yours and questions get answered the same day. You work directly with the senior specialists who do the keyword research, technical fixes and content, not a salesperson. Retainers are priced in CAD with monthly reporting. Call +1-403-604-8692 to talk through your Ottawa search goals.',
    sections: [
      {
        heading: 'SEO for Ottawa’s government, tech and service sectors',
        body: [
          'Ottawa does not search like one big market. Federal departments buy through suppliers, so government suppliers compete for the terms procurement and contracting managers actually type. Kanata North technology companies fight for category keywords against well-funded competitors. Law firms, accountants, consultants and other professional services live on “near me” and neighbourhood searches, while clinics, local trades and retailers win on suburb-level terms across Nepean, Kanata, Orléans and Barrhaven. We map both sides of that market: the competitive city-wide terms that put you next to the biggest names in Ottawa, and the neighbourhood terms where a smaller budget can win calls first.',
        ],
      },
      {
        heading: 'Local SEO from Google Business Profile to the Gatineau side',
        body: [
          'For Ottawa service businesses the map pack is often where the call starts, so the profile has to be honest. We set up and optimise your Google Business Profile and Bing Places as a real service-area business, choose categories and service areas that match what you actually cover, and keep the same name, address and phone — NAP — across your site, directories and citations. Searches do not stop at the river: Gatineau-side and francophone queries change the wording you need to rank for, and franco-Ontarian customers around the capital search in both languages. Our English and French keyword research covers both sides, so a bilingual audience finds you in the language they actually search in.',
        ],
      },
      {
        heading: 'Technical SEO and content that answers buyers',
        body: [
          'Mapletech Labs is a software development company first, so technical work is done by the engineers who build Next.js and WordPress sites every week. We audit Core Web Vitals, crawling and indexation, canonical tags, schema markup and internal links, then fix what is slowing pages or blocking crawlers in your codebase or CMS, so changes survive the next platform update. On the content side, we build pages around what Ottawa buyers actually search for, answering the questions that come up before they call. Where it helps, that work plugs into our broader ',
          { href: '/services/digital-marketing', label: 'SEO and digital marketing services' },
          ', so search, ads and content support each other instead of competing.',
        ],
      },
      {
        heading: 'SEO costs and monthly reporting',
        body: [
          'SEO is quoted as a monthly retainer in CAD. In our ',
          { href: '/blog/digital-marketing-cost-canada', label: 'digital marketing cost guide for Canada' },
          ', SEO retainers typically run $1,500-$10,000 CAD per month, depending on competition, site size and scope. Each month you get a report with rankings, organic traffic and conversions, the work completed, and plain-language notes on what moved and what we are testing next. Ottawa spans government suppliers, professional services and competitive tech keywords, so we agree the scope in writing before the first invoice. You can compare our rates on ',
          { href: '/pricing', label: 'our pricing page' },
          ' before you commit.',
        ],
      },
    ],
    proof: [
      { href: '/case-studies/ecommerce-platform', label: 'E-commerce platform', note: 'A high-performance e-commerce platform driving 3x revenue growth and handling 2M+ monthly visitors for a Canadian retailer.' },
      { href: '/case-studies/real-estate-portal', label: 'Real estate portal', note: 'PropConnect Canada\'s real estate platform, with machine-learning recommendations across 850,000+ active listings.' },
      { href: '/case-studies/fintech-trading-platform', label: 'Fintech trading platform', note: 'An AI-powered trading platform processing 50K+ transactions daily with 99.99% uptime for a leading Canadian fintech.' },
    ],
    faqs: [
      {
        q: 'How much does SEO cost in Ottawa?',
        a: 'Most Ottawa SEO engagements are monthly retainers of about $1,500-$10,000 CAD, the range we publish in our Canadian digital marketing cost guide. A single-location local campaign sits at the lower end; government suppliers, Kanata North tech companies or national-competition keywords sit higher. After a free review of your site and your Ottawa competitors, we quote one fixed monthly number in CAD rather than hourly billing.',
      },
      {
        q: 'Do you have an office in Ottawa?',
        a: 'No. Mapletech Labs is headquartered in Edmonton and we do not have an Ottawa office. We serve Ottawa clients remotely, with Edmonton two hours behind Ottawa so most of the working day overlaps, through calls, shared documents and monthly reports, and you always have direct access to the specialists on your account at +1-403-604-8692.',
      },
      {
        q: 'How long until we see results in Ottawa?',
        a: 'Technical fixes and Google Business Profile cleanup often show movement in 8-16 weeks when the site has no major blockers. New content for competitive Ottawa terms usually needs 4-9 months before trend lines are fair to judge. From the first report we track impressions, indexed pages and leads, so you can see progress building before the position charts catch up.',
      },
      {
        q: 'Do you do French and bilingual SEO?',
        a: 'Yes. Ottawa serves a bilingual audience and sits next to a French-speaking market across the river, so our keyword research runs in both English and French, clear about which terms each language actually wins. We build French pages that stand on their own rather than machine-translated duplicates, and keep the site structure and hreflang tidy so search engines show the right page to the right visitor.',
      },
      {
        q: 'Do you optimise for Bing and AI answers like ChatGPT and Perplexity?',
        a: 'Yes. Bing still powers a meaningful share of Canadian desktop search and it feeds some AI assistants. We submit sitemaps to Bing Webmaster Tools, keep Bing Places current and check how your pages render there. For AI answers we work on what assistants read: clear facts about your business, structured data, straightforward question-and-answer content and consistent NAP, so tools like ChatGPT and Perplexity can quote you accurately.',
      },
    ],
  },
  'web-development-company-in-ottawa': {
    title: 'Web Development Company in Ottawa',
    description: 'Web development company in Ottawa: our Canadian team builds fast custom sites and web apps at a fixed CAD price. Get a free quote.',
    intro: 'Mapletech Labs is a Canadian web development team headquartered in Edmonton, building fast, SEO-ready business websites, e-commerce stores and web apps for Ottawa companies. Edmonton is two hours behind Ottawa, so our working days overlap for most of yours, making it simple to review designs and settle decisions together. You work directly with the senior engineers who build your website, not a sales layer. Your contract is with a Canadian company, priced in CAD, with a fixed scope and a fixed price agreed before work starts, so you know what is included from day one. Call us on +1-403-604-8692 to talk through your project.',
    sections: [
      {
        heading: 'Websites and web apps for Ottawa’s government suppliers, Kanata tech firms and professional services',
        body: [
          'Ottawa’s economy mixes federal departments and the suppliers that support them, the Kanata North tech park, and health, legal and consulting firms that rely on a dependable online presence. Government suppliers need sites that make credentials, security practices and past work easy for procurement teams to check. Kanata tech firms need marketing sites and product dashboards that explain a complex platform clearly. Health and professional practices need booking, intake and client portals that respect confidentiality. Sellers need fast, secure e-commerce or B2B storefronts. We scope each build around how your Ottawa customers actually find and choose you.',
        ],
      },
      {
        heading: 'Accessible, bilingual and secure for the capital',
        body: [
          'Many Ottawa organisations serve the federal government or the public, so accessibility, bilingualism and security expectations run high from the start. We design and test to WCAG 2.1 level AA, the bar Ontario’s Accessibility for Ontarians with Disabilities Act (AODA) expects for many organisations, covering keyboard access, screen readers, colour contrast and text resizing. When your customers use both official languages, we build English and French content into the site from the start, with hreflang tags so search engines show the right version, rather than patching on translations later. Data can stay in Canadian hosting regions when residency matters. If you are comparing vendors, our ',
          { href: '/blog/software-development-companies-ottawa', label: 'guide to choosing a software development company in Ottawa' },
          ' lists the questions worth asking on a first call.',
        ],
      },
      {
        heading: 'Stack, performance and search-ready structure',
        body: [
          'We develop on Next.js and React, rendering key pages on the server so Google, Bing and visitors get readable content on first load. Core Web Vitals guide image sizes, fonts and script loading as we build, not as a last-minute patch, and semantic HTML, clean URLs and structured data describe your services and locations to search engines. A CMS lets your Ottawa team publish updates to services, posts and seasonal pages without opening a developer ticket every time. For the full range of what we build, see our ',
          { href: '/services/web-development', label: 'web development services' },
          '.',
        ],
      },
      {
        heading: 'What a website costs and how long it takes',
        body: [
          'Our ',
          { href: '/blog/website-cost-canada', label: 'Canadian website cost guide' },
          ' puts a template or WordPress site at about $2,000-$10,000 CAD (2-4 weeks), a custom business website at $10,000-$50,000 (4-10 weeks), an e-commerce platform at $25,000-$100,000 (8-16 weeks) and an enterprise web application at $100,000-$500,000+ (4-12 months). Discovery is free, and your price is fixed in CAD before coding starts, so your team can plan with a clear budget and timeline.',
        ],
      },
    ],
    proof: [
      { href: '/case-studies/payments-api-platform', label: 'Payments API platform (Ottawa)', note: 'A PCI DSS certified payments API for Ottawa-based PayBridge Solutions, processing 12 million transactions a month.' },
      { href: '/case-studies/ecommerce-platform', label: 'E-commerce platform', note: 'A high-performance e-commerce platform driving 3x revenue growth and handling 2M+ monthly visitors for a leading Canadian retailer.' },
      { href: '/case-studies/real-estate-portal', label: 'Real estate portal', note: 'A real estate platform for PropConnect Canada with machine-learning recommendations across 850,000+ active listings.' },
    ],
    faqs: [
      {
        q: 'How much does a website cost in Ottawa?',
        a: 'Our Canadian website cost guide puts a template or WordPress site at about $2,000-$10,000 CAD, a custom business website at $10,000-$50,000, an e-commerce platform at $25,000-$100,000 and an enterprise web application at $100,000-$500,000+. After free discovery you get a fixed price in CAD before coding starts.',
      },
      {
        q: 'Do you have developers in Ottawa?',
        a: 'No. Mapletech Labs is headquartered in Edmonton, and we do not have an Ottawa office or Ottawa staff. We build for Ottawa clients remotely through video workshops, weekly calls and shared project boards, with Edmonton two hours behind Ottawa so most of the working day overlaps.',
      },
      {
        q: 'Can you build a bilingual English and French website?',
        a: 'Yes. When your customers need both official languages, we build English and French content into the site from the start: navigation, page copy, forms and metadata, with hreflang tags and a clear way to switch languages. We plan the content model during discovery so translations stay maintainable after launch.',
      },
      {
        q: 'Will our website meet WCAG and AODA accessibility rules?',
        a: 'We design and test to WCAG 2.1 level AA, the standard Ontario’s Accessibility for Ontarians with Disabilities Act (AODA) points to for many public websites, covering keyboard access, screen readers, colour contrast and text resizing. We can share our accessibility test results, and your own legal team should confirm how the AODA applies to your organisation.',
      },
      {
        q: 'Who owns the website code and domain?',
        a: 'You do. All source code, design files and the domain for your website belong to you, with no lock-in. You can keep working with us after launch or hand the website to your own team.',
      },
    ],
  },
  'app-development-company-in-montreal': {
    title: 'App Development Company in Montreal',
    description: 'App development company in Montreal: our Canadian team builds French-first iOS and Android apps at a fixed CAD price. Get a free quote.',
    intro: 'Mapletech Labs is a Canadian app development team headquartered in Edmonton that designs and builds iOS and Android apps for Montreal startups, studios and established companies. Edmonton runs two hours behind Montreal, so your mornings and our afternoons line up for reviews, demos and quick decisions. There is no account manager in the middle: you speak directly with the senior engineers who write your app. You sign a Canadian contract priced in CAD, and the scope and price are fixed before development begins, so there are no surprise invoices. Call us on +1-403-604-8692 to talk through your app idea.',
    sections: [
      {
        heading: 'Apps for Montreal’s AI, gaming, aerospace and life sciences teams',
        body: [
          'Montreal has one of Canada’s busiest AI and tech startup scenes, a deep pool of gaming and creative studios, a major aerospace cluster, and a growing life sciences sector, alongside retailers and e-commerce brands selling across Quebec. AI startups need mobile apps that put a model in front of real users with fast, clear interfaces. Studios want companion apps and fan experiences that feel as polished as their main product. Aerospace and manufacturing teams need field, inspection and maintenance apps that work offline on the shop floor. Life sciences companies need study, patient and lab tools with tight access control, and retailers need shopping apps with loyalty, payments and push offers. We scope every build around the people who will use it each day.',
        ],
      },
      {
        heading: 'French-first and bilingual apps for Quebec',
        body: [
          'Quebec’s Charter of the French Language, as updated by Bill 96, means French must be at least as available as English for Quebec users, so we design French-first or fully bilingual apps from the first wireframe: screens, onboarding, push notifications, emails and app store listings. Quebec’s Law 25 shapes how you collect personal information, so we build clear consent screens, privacy-by-default settings and simple ways for users to see or delete their data. When residency matters, app data can be hosted in Canadian cloud regions. We implement these features carefully, but please confirm the final legal position with your own advisers. If you are still comparing vendors, our ',
          { href: '/blog/software-development-companies-montreal', label: 'guide to software development companies in Montreal' },
          ' lists what to check before you sign.',
        ],
      },
      {
        heading: 'Cross-platform or native: choosing your stack',
        body: [
          'For most Montreal apps that must launch on iPhone and Android together, a single Flutter or React Native codebase is the practical choice: one team, one release cycle, and a lower total cost than two separate apps. Native Swift for iOS and Kotlin for Android earns its extra cost when an app depends on advanced camera or AR features, heavy graphics, background Bluetooth or the smoothest possible performance, which matters for some gaming and hardware products. We recommend a stack only after we understand your features and budget, and we explain the reasoning in plain terms. For a deeper comparison, read our ',
          { href: '/blog/native-vs-cross-platform-vs-pwa', label: 'native vs cross-platform vs PWA guide' },
          '.',
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
      { href: '/case-studies/fintech-trading-platform', label: 'Fintech trading platform', note: 'An AI-powered trading platform processing 50K+ transactions daily with 99.99% uptime for a leading Canadian fintech.' },
      { href: '/case-studies/logistics-platform', label: 'Logistics & fleet platform', note: 'A real-time logistics platform handling 15K+ daily deliveries, with 25% fuel savings and a 98% on-time delivery rate.' },
      { href: '/case-studies/payments-api-platform', label: 'Payments API platform', note: 'A PCI DSS certified payments API processing 12 million transactions a month, securely and at scale.' },
    ],
    faqs: [
      {
        q: 'How much does app development cost in Montreal?',
        a: 'Our Canadian cost guide puts a simple single-platform app at about $25,000-$50,000 CAD, a mid-size iOS and Android app at about $50,000-$150,000, and a complex platform at $150,000 or more. After a free discovery phase you receive a fixed price in CAD, so your budget is settled before development starts.',
      },
      {
        q: 'Do you have developers in Montreal?',
        a: 'No. Mapletech Labs is headquartered in Edmonton, and we do not have a Montreal office or Montreal-based staff. We work with Montreal clients remotely through video workshops, weekly demos and shared project boards, and with Edmonton two hours behind Montreal, most of the working day overlaps.',
      },
      {
        q: 'Can you build a French-first app that meets Bill 96?',
        a: 'Yes. We build French-first or bilingual apps where French is at least as available as English: every screen, notification, email and app store listing, with a simple language switch. We plan the content structure during discovery so translations stay easy to maintain. Your own advisers should confirm how Bill 96 applies to your business.',
      },
      {
        q: 'How do you handle Law 25 privacy and keep data in Canada?',
        a: 'We build in clear consent screens, privacy-by-default settings, access controls and ways for users to view or delete their personal information, and we can host app data in Canadian cloud regions. We document how the app handles personal data for your team, and your legal advisers should confirm the final Law 25 position.',
      },
      {
        q: 'Who owns the code for our app?',
        a: 'You do. The source code, design files, app store listings and cloud accounts created for your project belong to you, with no lock-in. You can keep working with us after launch or hand everything to your own development team.',
      },
    ],
  },
  'ai-development-company-in-ottawa': {
    title: 'AI Development Company in Ottawa',
    description: 'AI development for Ottawa businesses: LLM features, chatbots on your own documents and automation at a fixed CAD price. Get a free quote.',
    intro: 'Mapletech Labs is a Canadian AI development team headquartered in Edmonton, and we build practical AI for Ottawa businesses and organisations: LLM features, chatbots and assistants that answer from your own documents, and workflow automation. We do not have an Ottawa office; Edmonton is two hours behind Ottawa, so our working days overlap for most of yours and questions get answered the same day. You work directly with the senior engineers who design and build your system, not a sales layer. We travel to Ottawa for workshops when a project needs it. Your contract is with a Canadian company, priced in CAD, with a fixed scope and price agreed before work starts. Call us on +1-403-604-8692 to talk through your idea.',
    sections: [
      {
        heading: 'Applied AI for Ottawa organisations',
        body: [
          'Ottawa buyers split into government suppliers bidding on federal procurement, Kanata North technology companies building and selling software, and professional services firms that win on reputation and referral. For government suppliers we build LLM features that search tender documents, past contracts and compliance files so proposals answer faster. Kanata North tech teams add AI chatbots and assistants trained on your own documents to products and internal knowledge bases, with sources shown for every answer. Professional services firms use workflow automation to sort inboxes, draft engagement summaries and route routine requests to the right person. Everything answers from your data, not the open internet.',
        ],
      },
      {
        heading: 'Security, bilingual and data residency',
        body: [
          'Security and data residency come first for Ottawa organisations. We can host your AI system and its data in Canadian cloud regions and set up model providers so your data is not used to train their models. We design with PIPEDA in mind, with encryption, role-based access and audit logs. Customer-facing interfaces work in English and French, and prompts, answers and buttons are tested in both languages. A person reviews important AI output before it reaches a client or the public, and your own legal team confirms the final compliance position.',
        ],
      },
      {
        heading: 'From pilot to production',
        body: [
          'We start with a short pilot on your own data so you can see real answers to real questions within weeks. Next we evaluate it against a test set your team agrees on, so accuracy is a number, not a feeling. Then we launch to a small group of users with hand-off to a person when the system is unsure. Finally we move to full production with monitoring, logs of every question and answer, and a clear plan for updates.',
        ],
      },
      {
        heading: 'What AI development costs',
        body: [
          'Our ',
          { href: '/blog/ai-development-cost-canada', label: 'AI development cost guide' },
          ' gives planning ranges for Canadian projects. Adding an LLM feature to an existing app is about $10,000-$35,000 CAD. A chatbot on your own documents is about $15,000-$50,000. Custom model training starts around $75,000. These are planning ranges, not quotes: after a free discovery call we agree a fixed scope and a fixed price in CAD before work begins.',
        ],
      },
    ],
    proof: [
      { href: '/case-studies/fintech-trading-platform', label: 'Fintech trading platform', note: 'An AI-powered trading platform processing 50K+ transactions daily with 99.99% uptime for a leading Canadian fintech.' },
      { href: '/case-studies/payments-api-platform', label: 'Payments API platform', note: 'A PCI DSS certified payments API processing 12 million transactions a month, securely and at scale.' },
      { href: '/case-studies/healthcare-telehealth', label: 'Telehealth platform', note: 'A HIPAA-compliant telehealth platform serving 200K+ patient sessions with 99.97% uptime for a leading Canadian healthcare provider.' },
    ],
    faqs: [
      {
        q: 'How much does AI development cost in Ottawa?',
        a: 'Using the planning ranges in our AI development cost guide, an LLM feature in an existing app is about $10,000-$35,000 CAD, a chatbot on your own documents about $15,000-$50,000, and custom model training starts around $75,000. These are not quotes. After a free discovery call you get a fixed price in CAD.',
      },
      {
        q: 'How long does a first AI chatbot take?',
        a: 'A focused first version usually takes weeks rather than months, especially when your documents are already in good shape. Larger projects with many data sources, integrations or custom models take longer. Your written scope includes a timeline with clear milestones.',
      },
      {
        q: 'Can you build French-language AI chatbots for Ottawa?',
        a: 'Yes. We build and test chatbots in English and French from the start: prompts, answers, buttons and hand-off messages. French-speaking reviewers from your team check answers before launch, so the bot sounds natural to your Ottawa and Gatineau customers.',
      },
      {
        q: 'Does our data stay in Canada?',
        a: 'It can. We can host your AI system and its data in Canadian cloud regions and set up model providers so your data is not used for training. We design with PIPEDA in mind, with encryption, role-based access and audit logs. Your own legal team should confirm the final compliance position before launch.',
      },
      {
        q: 'Do you have an office in Ottawa?',
        a: 'No. Mapletech Labs is headquartered in Edmonton and we do not have an Ottawa office. Edmonton is two hours behind Ottawa, so most of the working day overlaps, and we serve Ottawa clients remotely through video workshops, weekly calls and shared boards. We travel to Ottawa for in-person workshops when a project needs it, and you can reach us on +1-403-604-8692.',
      },
    ],
  },
  'seo-company-in-montreal': {
    title: 'SEO Company in Montreal',
    description: 'SEO for Montreal businesses on Google and Bing, with French and English search strategies and clear monthly CAD retainers.',
    intro: 'Mapletech Labs is a Canadian SEO and digital marketing team headquartered in Edmonton, helping Montreal businesses reach customers searching on Google and Bing. We have no Montreal office, and work remotely with your team through calls and shared documents. Edmonton is two hours behind Montreal, so there is plenty of overlap for planning and reviewing progress together. You work directly with the specialists who research search terms, improve your website and develop content. We agree on the scope and a monthly retainer in CAD before work begins, and report on progress each month. Call +1-403-604-8692 to discuss your Montreal search goals.',
    sections: [
      {
        heading: 'How Montreal searches',
        body: [
          'Montreal has French-first searchers alongside people who search in both French and English across the Plateau, Laval, the West Island and the South Shore. The words customers use can change by neighbourhood, language and service. AI and tech startups may need to explain a new product category, while gaming studios reach players and potential partners. Retailers need to connect product searches with nearby stores, and professional services need pages that answer questions before a prospect calls. We research those distinct searches and prioritise pages around the customers and locations you serve.',
        ],
      },
      {
        heading: 'French SEO and Quebec\'s Charter of the French Language',
        body: [
          'French keyword research is done natively, not machine-translated from English terms. We build separate French pages that answer the needs of French-speaking customers and use hreflang to help search engines understand the language versions. We keep Google Business Profile and Bing Places information consistent in both languages, including your business details and services. Your own counsel confirms the legal requirements that apply to your business under Quebec\'s Charter of the French Language.',
        ],
      },
      {
        heading: 'Technical SEO and content',
        body: [
          'We review crawling, indexing, page speed, structured data and internal links so Google and Bing can find and understand your pages. We then address technical barriers and plan useful service and location content around the questions Montreal customers ask. French and English pages each get appropriate titles, descriptions and links, with performance checked as the site changes.',
        ],
      },
      {
        heading: 'Pricing and reporting',
        body: [
          'SEO retainers are typically about $1,500-$10,000 CAD per month, depending on your site, competition and scope. Our ',
          { href: '/blog/digital-marketing-cost-canada', label: 'Canadian digital marketing cost guide' },
          ' explains the planning range. Each month we report on rankings, organic traffic and conversions, the work completed and the next priorities. We agree on the scope before the campaign starts.',
        ],
      },
    ],
    proof: [
      { href: '/case-studies/ecommerce-platform', label: 'E-commerce platform', note: 'A high-performance e-commerce platform driving 3x revenue growth and handling 2M+ monthly visitors for a Canadian retailer.' },
      { href: '/case-studies/real-estate-portal', label: 'Real estate portal', note: 'PropConnect Canada\'s real estate platform, with machine-learning recommendations across 850,000+ active listings.' },
      { href: '/case-studies/fintech-trading-platform', label: 'Fintech trading platform', note: 'An AI-powered trading platform processing 50K+ transactions daily with 99.99% uptime for a leading Canadian fintech.' },
    ],
    faqs: [
      {
        q: 'How much does SEO cost in Montreal?',
        a: 'SEO retainers typically run about $1,500-$10,000 CAD per month. The scope depends on your website, languages, locations and competition. We agree on a monthly price before work starts.',
      },
      {
        q: 'How long does SEO take to show results in Montreal?',
        a: 'Technical and local profile improvements can show movement in 8-16 weeks, while competitive content often takes 4-9 months to judge. Timing depends on your site and competitors, and we track early indicators as well as leads.',
      },
      {
        q: 'Do we need separate French and English pages?',
        a: 'For a bilingual audience, separate pages let each language answer customer questions naturally. We research French terms natively and use hreflang to connect the language versions. Your counsel can confirm your legal obligations.',
      },
      {
        q: 'How can a Montreal business appear in the local map pack?',
        a: 'A complete Google Business Profile, accurate business details, suitable categories and relevant local pages help search engines understand your business. We also maintain consistent information in Bing Places. Map placement depends on factors including relevance, distance and prominence.',
      },
      {
        q: 'What will our Montreal SEO reports include?',
        a: 'Monthly reports cover rankings, organic traffic, conversions, completed work and next steps. We review the results with you so your team can see how the campaign is progressing.',
      },
    ],
  },
  'ui-ux-design-company-in-ottawa': {
    title: 'UI/UX Design Company in Ottawa',
    description: 'UI/UX design for Ottawa businesses: user research, product design, design systems and accessible, bilingual interfaces at a fixed CAD price.',
    intro: 'Mapletech Labs is a Canadian UI/UX design team headquartered in Edmonton, helping Ottawa organisations build products people can actually use. We do not have an Ottawa office; Edmonton is two hours behind Ottawa, so most of the working day overlaps. You work directly with senior designers and engineers who keep research, screen flows and implementation aligned. We travel to Ottawa for workshops when a project needs it, with travel agreed up front. Your contract is with a Canadian company, priced in CAD, with a fixed scope and price agreed before work starts. Call +1-403-604-8692 to book a free UX audit.',
    sections: [
      {
        heading: 'UI/UX design for Ottawa organisations',
        body: [
          'Government suppliers need clear forms and dashboards for procurement and compliance-heavy work, where people must understand what to submit, review and approve. Kanata North software companies need product UX, onboarding and design systems that make complex software easier to learn and extend. Professional services firms need sites that turn visits into enquiries through clear service information, useful navigation and straightforward contact flows. We shape the research and screen flows around the people doing those tasks.',
        ],
      },
      {
        heading: 'Accessible and bilingual by default',
        body: [
          "We target WCAG 2.1 AA and plan accessibility work around the AODA and Accessible Canada Act context relevant to your organisation. English and French layouts are tested for longer French strings in navigation, forms, buttons and error messages. Keyboard and screen-reader checks cover focus order, labels and key user journeys in the implemented interface. Your own team confirms final compliance with the requirements that apply to your organisation before launch.",
        ],
      },
      {
        heading: 'Our design process',
        body: [
          'Research and interviews with your team and users establish the tasks the product needs to support. We turn those findings into wireframes, then a clickable prototype tested with real users so confusing steps can be revised before development. The design system and developer hand-off in Figma document components, states, spacing and interaction details, with designers and engineers reviewing the build together. Read more about our ',
          { href: '/services/product-design', label: 'UI/UX design services' },
          '.',
        ],
      },
      {
        heading: 'What UI/UX design costs',
        body: [
          'Our published CAD ranges are about $1,500-$5,000 for an MVP design of up to roughly 15 screens, $5,000-$12,000 for a full product design with 30+ screens, research and a design system foundation, and $12,000-$30,000+ for an enterprise design system with a full research program and accessibility work. These are planning ranges, not quotes. After a free UX audit, we agree a fixed scope and price in CAD before work begins. Compare Canadian pricing in our ',
          { href: '/blog/ui-ux-design-companies-canada', label: 'guide to UI/UX design companies in Canada' },
          '.',
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
        q: 'How much does UI/UX design cost in Ottawa?',
        a: 'The planning ranges are about $1,500-$5,000 CAD for an MVP design of up to roughly 15 screens, $5,000-$12,000 for a full product design with 30+ screens, research and a design system foundation, and $12,000-$30,000+ for an enterprise design system. These are planning ranges, not quotes. Screen count, research depth and interaction complexity affect the scope. After a free UX audit, you get a fixed scope and price in CAD.',
      },
      {
        q: 'How long does a UI/UX design project take?',
        a: 'Most projects take 6-11 weeks across research, strategy, wireframes, visual design and hand-off. A small MVP can be faster, while a multi-product design system or a large research program takes longer. Your written scope lists the milestones and review points, so your team knows when the prototype and final hand-off are due.',
      },
      {
        q: 'Can you design French and bilingual interfaces for Ottawa?',
        a: 'Yes. We plan English and French layouts from the start and test longer French strings in navigation, buttons, forms and error messages. We check both language versions in the clickable prototype, and French-speaking reviewers from your team confirm the wording before launch.',
      },
      {
        q: 'Do you design for WCAG and AODA accessibility?',
        a: 'Yes. We target WCAG 2.1 AA with contrast, visible focus states, keyboard navigation and screen-reader labels considered from the wireframes onward. We check keyboard and screen-reader behaviour in the implemented interface and consider the AODA and Accessible Canada Act context during planning. Your own team confirms final compliance before launch.',
      },
      {
        q: 'Do you have an office in Ottawa?',
        a: 'No. Mapletech Labs is headquartered in Edmonton and we do not have an Ottawa office. Edmonton is two hours behind Ottawa, so most of the working day overlaps, and we serve Ottawa clients remotely through video workshops, weekly calls and shared Figma files. We travel to Ottawa for in-person workshops when a project needs it, and you can reach us on +1-403-604-8692.',
      },
    ],
  },
  'ui-ux-design-company-in-montreal': {
    title: 'UI/UX Design Company in Montreal',
    description: 'UI/UX design for Montreal companies: French-first, bilingual interfaces, tested prototypes and design systems at a fixed CAD price.',
    intro: 'Mapletech Labs is a Canadian UI/UX design team headquartered in Edmonton, and we design web and mobile products for Montreal startups, studios and established businesses. We do not have a Montreal office; we deliver remotely, and you work directly with the designers and engineers shaping your product. Edmonton is two hours behind Montreal, so most of the working day overlaps for video workshops and reviews in shared Figma files. Your contract is with a Canadian company, priced in CAD, with a fixed scope and a fixed price agreed before work starts. Call us on +1-403-604-8692 to talk through your product and book a free UX audit.',
    sections: [
      {
        heading: 'UI/UX design for Montreal companies',
        body: [
          'Montreal\'s startup and SaaS teams need product UX that helps people reach their first useful result without a support call. Gaming and creative companies need clear navigation around rich visual experiences, while AI companies need interfaces that explain model outputs and make review steps easy to follow. Retailers and e-commerce teams need product discovery, checkout and account flows that work for French and English shoppers. We map these journeys, simplify onboarding and build design systems so new screens stay consistent as the product grows.',
        ],
      },
      {
        heading: 'French-first, bilingual interfaces',
        body: [
          'We design French layouts first: French text runs about 15-30% longer than English, so navigation, buttons, forms and mobile screens need room before the visual design is settled. We keep French and English versions consistent through shared components, matching interaction states and a clear language switch, then test the key journeys in both languages. Quebec\'s Charter of the French Language and Bill 96 shape French-language requirements for customer-facing interfaces; we plan for French to be at least as available as English. Your legal team confirms how Bill 96 applies to your business and signs off on compliance.',
        ],
      },
      {
        heading: 'Our design process',
        body: [
          'We start with research: a UX audit, analytics review and interviews to understand your users and the tasks that matter. Journey maps lead to wireframes, then a clickable prototype tested with users on realistic tasks before we refine the visual design. Your Figma design system documents components, design tokens, responsive layouts and interaction states for both languages. Developer hand-off includes annotated specifications, edge cases and a working review with the engineers implementing the screens. See our ',
          { href: '/services/product-design', label: 'UI/UX design services' },
          ' for how research, prototyping and implementation fit together.',
        ],
      },
      {
        heading: 'What UI/UX design costs',
        body: [
          'For planning, our published CAD ranges are about $1,500-$5,000 for an MVP design of up to roughly 15 screens, $5,000-$12,000 for a full product design with 30+ screens, research and a design system foundation, and $12,000-$30,000+ for an enterprise design system with a full research program and accessibility work. These are planning ranges, not quotes; screen count, interaction complexity, research depth and bilingual content determine the scope. After a free UX audit, we agree a fixed price in CAD before design starts. Compare the ranges and deliverables in our ',
          { href: '/blog/ui-ux-design-companies-canada', label: 'guide to UI/UX design companies in Canada' },
          '.',
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
        q: 'How much does UI/UX design cost in Montreal?',
        a: 'Our CAD planning ranges are about $1,500-$5,000 for an MVP design of up to roughly 15 screens, $5,000-$12,000 for a full product design with 30+ screens, research and a design system foundation, and $12,000-$30,000+ for an enterprise design system with a full research program and accessibility work. These are not quotes. After a free UX audit, we scope your screens, research and bilingual needs and agree a fixed price in CAD.',
      },
      {
        q: 'How long does a UI/UX design project take?',
        a: 'Most projects take 6-11 weeks across research, wireframes, prototyping, visual design and developer hand-off. A small MVP can be faster, while a larger design system or research program takes longer. We plan French and English content reviews into the milestones so your Montreal team knows when feedback and translations are needed.',
      },
      {
        q: 'Can you design French-first interfaces for Bill 96?',
        a: 'Yes. We design French layouts first, allowing for text that runs about 15-30% longer than English, and keep both languages consistent across navigation, forms, error states and onboarding. We plan for French to be at least as available as English under Quebec\'s Charter of the French Language. Your legal team confirms Bill 96 compliance and how the requirements apply to your business.',
      },
      {
        q: 'Do you design accessible interfaces to WCAG?',
        a: 'Yes. We design to WCAG 2.0 AA, documenting colour contrast, focus indicators, keyboard paths, text sizing and screen-reader labels in the design files. We include accessible component states in the Figma design system and review their implementation with developers. The finished product needs accessibility testing as well as design review, in both French and English.',
      },
      {
        q: 'Do you have an office in Montreal?',
        a: 'No. Mapletech Labs is headquartered in Edmonton and we do not have a Montreal office. We serve Montreal clients remotely through video workshops, weekly calls and shared Figma files, and you work directly with the designers and engineers shaping your product. Edmonton is two hours behind Montreal, so most of the working day overlaps.',
      },
    ],
  },
  'saas-development-company-in-ottawa': {
    title: 'SaaS Development Company in Ottawa',
    description: 'SaaS development for Ottawa teams: multi-tenant platforms, subscription billing and a fixed CAD price agreed up front. Get a free quote.',
    intro: 'Mapletech Labs is a Canadian software team headquartered in Edmonton, building multi-tenant SaaS products for Ottawa businesses from MVP to scale. We do not have an Ottawa office; Edmonton is two hours behind Ottawa, so our working days overlap for product reviews, planning and decisions. You work directly with the senior engineers building your platform, not a sales layer. We travel to Ottawa for discovery workshops when a project needs it, with travel agreed up front. Your contract is with a Canadian company, priced in CAD, with a fixed scope and price agreed before development starts. Call +1-403-604-8692 to discuss your users, integrations and the first release your business needs.',
    sections: [
      {
        heading: 'SaaS for Ottawa founders and software companies',
        body: [
          'Ottawa buyers split into Kanata North B2B software teams building and selling platforms, GovTech products sold to public-sector buyers, and founders backed by Invest Ottawa and the local startup scene who are building an MVP. For Kanata North software teams we build multi-tenant platforms with clear tenant boundaries, onboarding and admin tooling. GovTech products need procurement-ready features: SSO, audit logs and bilingual interfaces, which we plan from the first release. Founders building an MVP get a written scope that defines the core workflow, the subscription model and what ships first, so the first release is something real users will pay for.',
        ],
      },
      {
        heading: 'Built for enterprise and government buyers',
        body: [
          'Enterprise and government procurement questions shape the architecture early. We build SSO with SAML and OIDC for company and agency sign-in, role-based access for different responsibilities, and audit logs that make sensitive actions traceable. Canadian data hosting is planned across hosting, storage, backups and connected services, and we design with PIPEDA in mind: encryption, access control and clear data flows. Customer-facing interfaces work in English and French, and prompts, forms and buttons are tested in both languages. Your own legal and security team confirms the final compliance position before launch.',
        ],
      },
      {
        heading: 'From MVP to scale',
        body: [
          'We start with the MVP scope: the core workflow, tenant boundaries and the first integrations, defined in a written scope with a fixed CAD price. The architecture is multi-tenant from day one, so adding customers does not mean rebuilding. Stripe subscription billing handles plans, upgrades and renewals with GST on Canadian invoices. Product analytics show activation, usage and churn, and we review them with you each release. When usage grows, we scale the platform: performance, tenant limits, support tooling and the roadmap features your customers ask for. For the full service, see our ',
          { href: '/services/saas-development', label: 'SaaS development services' },
          '.',
        ],
      },
      {
        heading: 'What SaaS development costs',
        body: [
          'Our ',
          { href: '/blog/saas-development-cost-canada', label: 'Canadian SaaS development cost guide' },
          ' puts an MVP at $30,000-$75,000 CAD over 3 - 4 months, a growth-stage product at $75,000-$200,000 over 4 - 8 months, and an enterprise platform at $200,000-$500,000+ over 8 - 18 months. These are planning ranges, not quotes: integrations, security requirements and the scope of the first release shape your fixed CAD price, which we agree before development starts.',
        ],
      },
    ],
    proof: [
      { href: '/case-studies/payments-api-platform', label: 'Payments API platform', note: 'PayBridge Solutions’ PCI DSS certified payments API, processing 12 million transactions a month securely and at scale.' },
      { href: '/case-studies/fintech-trading-platform', label: 'Fintech trading platform', note: 'An AI-powered trading platform processing 50K+ transactions daily with 99.99% uptime for a leading Canadian fintech.' },
      { href: '/case-studies/healthcare-telehealth', label: 'Telehealth platform', note: 'A compliant telehealth platform serving 200K+ patient sessions with 99.97% uptime for a Canadian healthcare provider.' },
    ],
    faqs: [
      {
        q: 'How much does SaaS development cost in Ottawa?',
        a: 'Our Canadian SaaS development cost guide puts an MVP at $30,000-$75,000 CAD, a growth-stage product at $75,000-$200,000, and an enterprise platform at $200,000-$500,000+. These are planning ranges, not quotes: we agree on the scope and a fixed CAD price before development starts.',
      },
      {
        q: 'How long does it take to build a SaaS MVP?',
        a: 'Our Canadian cost guide gives an MVP timeline of 3 - 4 months. Discovery defines the core workflow, integrations and acceptance criteria, and your written scope sets the timeline for your product.',
      },
      {
        q: 'Can you build SaaS that passes enterprise and government security reviews?',
        a: 'Yes. We build SSO with SAML and OIDC, role-based access and audit logs, plan Canadian data hosting, and design with PIPEDA in mind. We prepare test evidence your security reviewers can examine, and your own legal and security team confirms the final compliance position before launch.',
      },
      {
        q: 'Do you keep documentation SR&ED and IRAP friendly?',
        a: 'Yes. We keep development logs, technical risk notes and test evidence organised in a way that is friendly to SR&ED and NRC IRAP claims, subject to each program’s requirements. Your accountant or consultant confirms whether your circumstances qualify; we do not promise funding.',
      },
      {
        q: 'Do you have an office in Ottawa?',
        a: 'No. Mapletech Labs is headquartered in Edmonton and we do not have an Ottawa office. Edmonton is two hours behind Ottawa, so most of the working day overlaps, and we serve Ottawa clients remotely through video workshops, weekly calls and shared boards. We travel to Ottawa for in-person workshops when a project needs it, and you can reach us on +1-403-604-8692.',
      },
    ],
  },
  'saas-development-company-in-montreal': {
    title: 'SaaS Development Company in Montreal',
    description: 'Mapletech Labs builds multi-tenant SaaS for Montreal startups and businesses, French-first and Law 25 ready, with a fixed CAD price. Get a free quote.',
    intro: 'Mapletech Labs is a Canadian software team headquartered in Edmonton, building multi-tenant SaaS products for Montreal startups and businesses, from a first MVP to a platform ready to scale. We do not have a Montreal office. Edmonton is two hours behind Montreal, so our working days overlap for product reviews, sprint planning and quick decisions. You work directly with the senior engineers who design and build your platform, not a sales layer. Before development starts, we agree a written scope and a fixed price in CAD, so you know what the first release includes. Call +1-403-604-8692 to talk through your users, integrations and roadmap.',
    sections: [
      {
        heading: 'SaaS products Montreal teams build with us',
        body: [
          'Montreal’s SaaS demand comes from several directions. AI and machine learning startups need products that turn models into reliable features customers will pay for, such as dashboards, data pipelines and usage-based plans. Gaming and creative studios need tools for asset review, collaboration and client delivery. Fintech teams need secure account workflows, reporting and transaction views. E-commerce and retail businesses need B2B tools for wholesale ordering, inventory and supplier portals. Whatever the product, we start by defining the core workflow, the tenant boundaries and the subscription model, then plan the roadmap around them.',
        ],
      },
      {
        heading: 'French-first SaaS and Quebec Law 25',
        body: [
          'If your SaaS serves Quebec customers, Quebec’s Charter of the French Language means the French interface needs to be complete, not an afterthought. We build bilingual FR/EN products from the first sprint, covering screens, onboarding, error messages and transactional emails in both languages. For Quebec Law 25, we build consent flows, privacy-by-default settings and a data inventory that records what personal information the product collects and where it is stored. Our ',
          { href: '/blog/app-privacy-compliance-canada', label: 'Canadian app privacy checklist' },
          ' supports planning and review, and your legal counsel confirms what applies to your business.',
        ],
      },
      {
        heading: 'Built for enterprise buyers from day one',
        body: [
          'Larger customers ask security and procurement questions before they sign, so we plan the answers into the architecture. SSO/SAML lets employees sign in with their company accounts, role-based access matches permissions to responsibilities, and audit logs record sensitive actions so they can be traced. Tenant isolation keeps each customer’s data separate, and SOC 2-ready testing produces evidence your team can share during security reviews. We plan Canadian data residency across hosting, storage, backups and connected services, and agree these requirements during discovery so enterprise deals are not held up later.',
        ],
      },
      {
        heading: 'What SaaS development costs',
        body: [
          'Our ',
          { href: '/blog/saas-development-cost-canada', label: 'Canadian SaaS development cost guide' },
          ' puts an MVP at $30,000-$75,000 CAD over 3 - 4 months, a growth-stage product at $75,000-$200,000 over 4 - 8 months, and an enterprise platform at $200,000-$500,000+ over 8 - 18 months. Your fixed CAD price depends on the integrations, security requirements, bilingual content and the scope of the first release. When you compare partners, our ',
          { href: '/blog/software-development-companies-montreal', label: 'guide to software development companies in Montreal' },
          ' explains what to check on scope, delivery and code ownership.',
        ],
      },
    ],
    proof: [
      { href: '/case-studies/ecommerce-platform', label: 'E-commerce platform (Montréal)', note: 'A checkout redesign for Montréal-based NorthStar E-Commerce that lifted conversion from 2.1% to 3.8% in 90 days, on a site with 2M+ monthly visitors.' },
      { href: '/case-studies/payments-api-platform', label: 'Payments API platform', note: 'PayBridge Solutions’ PCI DSS certified payments API, processing 12 million transactions a month securely and at scale.' },
      { href: '/case-studies/fintech-trading-platform', label: 'Fintech trading platform', note: 'An AI-powered trading platform processing 50K+ transactions daily with 99.99% uptime for a leading Canadian fintech.' },
    ],
    faqs: [
      {
        q: 'How much does SaaS development cost in Montreal?',
        a: 'Our Canadian SaaS development cost guide puts an MVP at $30,000-$75,000 CAD, a growth-stage product at $75,000-$200,000, and an enterprise platform at $200,000-$500,000+. We agree the scope and a fixed CAD price with you before development starts.',
      },
      {
        q: 'How long does it take to build a SaaS MVP?',
        a: 'Our Canadian cost guide gives an MVP timeline of 3 - 4 months. During discovery we define the core workflow, integrations and acceptance criteria, and your written scope sets the timeline for your product.',
      },
      {
        q: 'Can you build a bilingual French and English SaaS product?',
        a: 'Yes. We build French and English into the product from the start: screens, onboarding, error messages and transactional emails, with a clear way for users to switch languages. We plan the content model during discovery so new features ship in both languages.',
      },
      {
        q: 'Do you have an office in Montreal?',
        a: 'No. Mapletech Labs is headquartered in Edmonton and we do not have a Montreal office. We deliver remotely through video workshops, weekly calls and shared project boards. Edmonton is two hours behind Montreal, so most of the working day overlaps.',
      },
      {
        q: 'Who owns the code?',
        a: 'You do. The source code and design files we create for your SaaS product belong to you, so you can keep working with us or hand the code to your own team.',
      },
    ],
  },
  'digital-marketing-agency-in-ottawa': {
    title: 'Digital Marketing Agency in Ottawa',
    description: 'Ottawa digital marketing agency: SEO, Google and Microsoft Ads and bilingual content from a Canadian team. CAD retainers. Get a free strategy call.',
    intro: 'Mapletech Labs is a Canadian digital marketing team headquartered in Edmonton, working with Ottawa businesses that want one partner for SEO, paid ads and content. Ottawa is a market on its own: federal government and public sector suppliers buy through procurement, Kanata North tech companies compete for category terms, and local service businesses fight for the map pack in English and French. We do not have an Ottawa office. Edmonton is two hours behind Ottawa, so most of the working day overlaps for calls and reviews. Retainers are priced in CAD. Call +1-403-604-8692 to talk about your channel mix.',
    sections: [
      {
        heading: 'What is included in our Ottawa digital marketing',
        body: [
          'We scope the work around the channels that fit your goals: local SEO and Google Business Profile optimisation so you show up for the neighbourhood and service-area searches across Ottawa, Kanata, Nepean, Orleans and Barrhaven; content that answers the questions Ottawa buyers ask before they call; Google and Microsoft Ads for leads while organic search builds; and analytics that tie spend to conversions. Search only? See our ',
          { href: '/locations/seo-company-in-ottawa', label: 'SEO Company in Ottawa' },
          ' page for an SEO-only scope, or our ',
          { href: '/services/digital-marketing', label: 'digital marketing services' },
          ' for the full range of channels we run.',
        ],
      },
      {
        heading: 'Bilingual campaigns across Ottawa-Gatineau',
        body: [
          'Ottawa and Gatineau sit on either side of the same labour market, so a campaign that only ranks in English leaves leads on the table. We run keyword research in both languages, build French pages that stand on their own rather than machine-translated duplicates, and keep hreflang tags tidy so Google and Bing show the right version to the right visitor. For visitors on the Quebec side, we plan consent for tracking and cookies to fit Quebec Law 25, with your legal counsel confirming what applies to your business. Bilingual targeting also matters for Google Business Profile, where francophone customers search in French for the same local services.',
        ],
      },
      {
        heading: 'B2B and public-sector lead generation in Ottawa',
        body: [
          'Ottawa sales cycles are long and the buyers are different. Federal departments and public sector organisations buy through suppliers and procurement processes, so the content has to make credentials, security practices and past work easy to check before a request for proposal ever lands. Kanata North tech companies and SaaS teams sell to other businesses, where LinkedIn and bottom-of-funnel content do the convincing. We plan the funnel around that: paid search and Microsoft Ads for the high-intent terms, procurement-friendly landing pages for government suppliers, and LinkedIn and email nurture for the deals that take months. If you also need the site itself rebuilt, our ',
          { href: '/locations/web-development-company-in-ottawa', label: 'Web Development Company in Ottawa' },
          ' team builds the pages the campaigns point to.',
        ],
      },
      {
        heading: 'Pricing and how we work',
        body: [
          'Digital marketing is quoted as a monthly retainer in CAD, not hourly. Our ',
          { href: '/blog/digital-marketing-cost-canada', label: 'digital marketing cost guide for Canada' },
          ' publishes the typical Canadian ranges: SEO about $1,500-$10,000 per month, PPC management about $2,000-$15,000 per month plus ad spend, social media about $1,000-$8,000 per month, content about $2,000-$10,000 per month, and full-service packages about $5,000-$25,000 per month. Ottawa sits between smaller markets and the GTA in click costs, so your quote depends on the channels you choose. After a free review of your site and your Ottawa competitors, we agree a fixed monthly scope in writing before the first invoice, and you get a monthly report with rankings, traffic, ad spend and conversions.',
        ],
      },
    ],
    proof: [
      { href: '/case-studies/ecommerce-platform', label: 'E-commerce platform', note: 'A high-performance e-commerce platform driving 3x revenue growth and handling 2M+ monthly visitors for a Canadian retailer.' },
      { href: '/case-studies/real-estate-portal', label: 'Real estate portal', note: 'PropConnect Canada\'s real estate platform, with machine-learning recommendations across 850,000+ active listings.' },
      { href: '/case-studies/fintech-trading-platform', label: 'Fintech trading platform', note: 'An AI-powered trading platform processing 50K+ transactions daily with 99.99% uptime for a leading Canadian fintech.' },
    ],
    faqs: [
      {
        q: 'How much does digital marketing cost in Ottawa?',
        a: 'In our Canadian digital marketing cost guide, SEO typically runs about $1,500-$10,000 per month, PPC management about $2,000-$15,000 per month plus ad spend, social media about $1,000-$8,000 per month, content marketing about $2,000-$10,000 per month, and full-service packages about $5,000-$25,000 per month in CAD. Ottawa click costs sit below the GTA but above smaller cities. We confirm a fixed monthly scope in CAD after a free review.',
      },
      {
        q: 'How long does SEO take in Ottawa?',
        a: 'Technical fixes and Google Business Profile cleanup often show movement in 8-16 weeks when the site has no major blockers. New content for competitive Ottawa terms usually needs 4-9 months before trend lines are fair to judge. From the first report we track impressions, indexed pages and leads, so you can see progress building before the position charts catch up.',
      },
      {
        q: 'Do you run French and bilingual campaigns for Ottawa?',
        a: 'Yes. Ottawa serves a bilingual audience and sits next to Gatineau across the river, so our keyword research runs in both English and French. We build French pages that stand on their own rather than machine-translated duplicates, keep hreflang tags tidy, and plan cookie consent for Quebec Law 25 where Gatineau visitors are in scope, with your legal counsel confirming what applies.',
      },
      {
        q: 'For an Ottawa service business, Google Ads or SEO first?',
        a: 'If your site is slow, thin or missing from local search, we usually fix that first so paid traffic lands on pages that convert. For map-pack categories like trades, clinics and professional services, Google Business Profile and local SEO often bring the first calls. Many Ottawa clients run both: a focused search campaign for near-term leads and SEO for a lower cost per lead over time.',
      },
      {
        q: 'Do you meet in Ottawa?',
        a: 'We work remotely, with weekly calls and shared documents instead of an Ottawa office. Mapletech Labs is headquartered in Edmonton, two hours behind Ottawa, so most of the working day overlaps. When a project needs it, we can travel to Ottawa for workshops and milestone reviews, with travel agreed up front.',
      },
    ],
  },
  'digital-marketing-agency-in-montreal': {
    title: 'Digital Marketing Agency in Montreal',
    description: 'Grow your Montreal business with SEO and ads in English and French from a Canadian digital marketing team. Get a free strategy call.',
    intro: 'Montreal is a French-first market where local businesses compete for attention in Google Maps and search. Its AI and gaming scene also brings technology companies into a crowded market for talent, customers and partners. Quebec\'s Charter of the French Language, including changes made by Bill 96, makes language planning important for commercial content.',
    sections: [
      {
        heading: 'What is included in Montreal digital marketing',
        body: [
          'We build a channel plan around your customers and goals, from local SEO and Google Business Profile optimisation to content that answers questions before a buyer calls. Google and Microsoft Ads can reach people searching now while organic visibility grows, and analytics connect campaigns to useful conversion measures. Our ',
          { href: '/services/digital-marketing', label: 'digital marketing services' },
          ' cover the wider channel mix; for a search-focused scope, see our ',
          { href: '/locations/seo-company-in-montreal', label: 'SEO Company in Montreal' },
          ' page. We agree on priorities and deliverables before work starts.',
        ],
      },
      {
        heading: 'French-first and bilingual campaigns',
        body: [
          'For Quebec-facing pages and ads, we plan French as the default and build English versions where they serve your audience. We research keywords separately in each language, since Montreal customers do not always use direct translations when searching. Separate pages and hreflang fr-CA and en-CA signals help search engines understand the intended language versions. Your counsel can confirm how Quebec\'s Charter of the French Language applies to your commercial content. If your landing pages need development, our ',
          { href: '/locations/web-development-company-in-montreal', label: 'Montreal web development team' },
          ' can help.',
        ],
      },
      {
        heading: 'Quebec Law 25 and campaign tracking',
        body: [
          'Measurement needs to account for Quebec Law 25 and the choices visitors make about their data. We plan cookie consent alongside analytics and ad tracking, review which tags collect information, and configure tracking around the consent choices your business implements. We also check conversions after setup so your reports reflect the data available. Your privacy adviser or legal counsel should determine the requirements for your organisation; our work supports the technical setup and does not replace legal advice.',
        ],
      },
      {
        heading: 'Pricing and process',
        body: [
          'Our ',
          { href: '/blog/digital-marketing-cost-canada', label: 'Canadian digital marketing cost guide' },
          ' puts typical SEO at $1,500-$10,000 CAD per month, PPC management at $2,000-$15,000 plus ad spend, and full-service packages at $5,000-$25,000 per month. These are market estimates, not quotes. We start with a review of your site, audience and Montreal competitors, then agree on a monthly scope in CAD. Weekly calls keep work moving, and monthly reports cover traffic, ad spend, conversions, completed work and next steps.',
        ],
      },
    ],
    proof: [
      { href: '/case-studies/ecommerce-platform', label: 'E-commerce platform', note: 'A high-performance e-commerce platform driving 3x revenue growth and handling 2M+ monthly visitors for a Canadian retailer.' },
      { href: '/case-studies/real-estate-portal', label: 'Real estate portal', note: 'PropConnect Canada\'s real estate platform, with machine-learning recommendations across 850,000+ active listings.' },
      { href: '/case-studies/fintech-trading-platform', label: 'Fintech trading platform', note: 'An AI-powered trading platform processing 50K+ transactions daily with 99.99% uptime for a leading Canadian fintech.' },
    ],
    faqs: [
      {
        q: 'How much does digital marketing cost in Montreal?',
        a: 'Typical Canadian market estimates are $1,500-$10,000 CAD per month for SEO, $2,000-$15,000 for PPC management plus ad spend, and $5,000-$25,000 for a full-service package. Your scope, languages and competition affect the price. We agree on a monthly scope in CAD after a review.',
      },
      {
        q: 'Must my Montreal website and ads be in French?',
        a: 'We plan French as the default for Quebec-facing pages and ads, with English versions where useful for your audience. Quebec\'s Charter of the French Language affects commercial content; your legal counsel can confirm the requirements for your business.',
      },
      {
        q: 'How long does SEO take in Montreal?',
        a: 'Technical and local profile improvements can show movement in 8-16 weeks, while competitive content often takes 4-9 months to judge. Timing depends on your site and competitors, so we track impressions, traffic and leads along the way.',
      },
      {
        q: 'How does Law 25 affect tracking for Montreal campaigns?',
        a: 'Law 25 makes privacy and consent planning important for analytics and advertising. We help configure cookie consent and tracking around your chosen setup; your privacy adviser or legal counsel should confirm what applies to your business.',
      },
      {
        q: 'Do you meet in Montreal?',
        a: 'We work remotely with weekly calls and shared documents. Mapletech Labs is headquartered in Edmonton and does not have a Montreal office; most of the working day overlaps for planning and reviews.',
      },
    ],
  },
};
