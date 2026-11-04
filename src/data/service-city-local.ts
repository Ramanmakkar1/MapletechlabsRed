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
    description: 'Mapletech Labs is headquartered in Edmonton and builds multi-tenant SaaS products with a fixed CAD price. Get a free quote',
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
};
