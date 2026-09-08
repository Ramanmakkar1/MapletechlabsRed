/**
 * Long-form editorial articles, as structured content.
 *
 * The older blog posts are each a bespoke ~500-line component. New posts run
 * through one ArticleTemplate instead, so they stay consistent with the design
 * system and are fast to add without re-implementing layout each time. The
 * content here is written to be genuinely useful and accurate: no invented
 * Mapletech clients or metrics, and no specification claims about products
 * that cannot be verified.
 */

export type Block =
  | { type: 'h2'; id: string; text: string }
  | { type: 'p'; html: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'checks'; items: { term: string; text: string }[] }
  | { type: 'cards'; items: { title: string; text: string }[] }
  | { type: 'callout'; tone?: 'brand' | 'muted'; title?: string; text: string }
  | { type: 'quote'; text: string; cite?: string };

export interface Article {
  slug: string;
  category: string;
  title: string;
  /** Blog-listing excerpt and meta description live in the page.tsx; this is the on-page dek. */
  dek: string;
  metaTitle: string;
  metaDescription: string;
  date: string;         // ISO
  dateModified: string; // ISO
  readTime: string;
  heroKey: string;      // humanMedia key
  intro: string[];      // lead paragraphs (html allowed)
  body: Block[];
  keyTakeaways: string[];
  faqs: { q: string; a: string }[];
  cta: { href: string; label: string };
}

export const articles: Article[] = [
  {
    slug: 'agentic-ai-in-production',
    category: 'AI/ML',
    title: 'Agentic AI in Production: What Actually Works in 2026',
    dek: 'Agents are the loudest idea in software right now. Here is the honest version — what agentic AI is, where it earns its keep, where it quietly fails, and how to put it into production without betting the business on a demo.',
    metaTitle: 'Agentic AI in Production (2026)',
    metaDescription:
      'A practical, hype-free guide to agentic AI in 2026: what agents really are, the patterns that work in production, where they fail, and how to deploy them safely.',
    date: '2026-09-05',
    dateModified: '2026-09-07',
    readTime: '11 min read',
    heroKey: 'pairing',
    intro: [
      'Every few years the software industry finds a word it cannot stop saying. In 2026 the word is <strong>agentic</strong>. The pitch is seductive: instead of a chatbot that answers questions, you get an agent that takes actions — books the meeting, files the ticket, reconciles the invoice, ships the code. Vendors demo it, boards ask about it, and founders feel the pressure to have an agent story.',
      'Most of that noise is worth ignoring. Underneath it, though, is something real: a genuinely new way to build software, where a model plans and uses tools in a loop rather than producing a single answer. This piece is the version we would give a client over coffee — what agentic AI actually is, the handful of patterns that hold up in production, the failure modes nobody demos, and how to deploy it without the whole thing depending on a good day from a language model.',
    ],
    body: [
      { type: 'h2', id: 'what-is-agentic', text: 'What "agentic" actually means' },
      { type: 'p', html: 'Strip away the marketing and an AI agent is a loop. A model is given a goal and a set of tools — functions it can call, like "search the database", "send an email", or "run this code". It decides which tool to use, sees the result, and decides what to do next, repeating until the goal is met or it gives up. That is the whole idea. The intelligence is not in any single step; it is in the model choosing the right sequence of steps and recovering when one of them fails.' },
      { type: 'p', html: 'This is different from the previous generation of AI features, which were single-shot: prompt in, answer out. An agent is multi-step and stateful. That difference is exactly where the value and the risk both live. A single wrong answer is a mistake; a wrong action in a five-step loop can compound into a mess.' },
      { type: 'callout', tone: 'brand', title: 'The one-sentence test', text: 'If the task is "answer this", you want a well-prompted model call, not an agent. If the task is "get this done, and the steps are not known in advance", that is where an agent earns its complexity.' },

      { type: 'h2', id: 'where-it-works', text: 'Where agents earn their keep' },
      { type: 'p', html: 'Agents are not a general upgrade to every feature. They pay off in a specific shape of problem: multi-step tasks, with clear tools, where the exact steps vary each time, and where a human can check the result. A few that consistently work in production:' },
      { type: 'checks', items: [
        { term: 'Research and synthesis', text: 'Pull from several sources, cross-check, and produce a structured brief. The steps differ per question, and a person reviews the output before it matters.' },
        { term: 'Triage and routing', text: 'Read an incoming ticket, email or document, classify it, enrich it with context, and route it. High volume, well-bounded, and cheap to verify.' },
        { term: 'Coding assistance', text: 'Read a codebase, make a change across several files, run the tests, and iterate on failures. The test suite is the safety net that makes the loop safe.' },
        { term: 'Data cleanup and reconciliation', text: 'Match records, resolve conflicts, and flag what it cannot resolve for a human — instead of silently guessing.' },
      ] },
      { type: 'p', html: 'Notice the common thread: in every case there is a <strong>cheap way to check the work</strong>. A test suite, a human reviewer, a reconciliation report. Agents work where verification is cheaper than the task itself.' },

      { type: 'h2', id: 'where-it-fails', text: 'The failure modes nobody demos' },
      { type: 'p', html: 'The demo always works. Production is where you meet the parts that were edited out. These are the ones we see most often:' },
      { type: 'cards', items: [
        { title: 'Silent compounding errors', text: 'A small wrong turn in step two becomes a confidently wrong outcome by step five. Without checkpoints, the agent will happily build on its own mistake.' },
        { title: 'The unbounded loop', text: 'An agent that cannot tell it is stuck will keep trying, burning tokens and time. Every loop needs a hard limit and a way to escalate to a human.' },
        { title: 'Tool trust', text: 'An agent is only as safe as the tools you give it. "Delete records" in the toolset is a production incident waiting for a bad plan. Least privilege is not optional.' },
        { title: 'Non-determinism', text: 'The same input can produce different action sequences. That is fine for a draft, dangerous for anything with side effects, and it is why irreversible actions need a human gate.' },
      ] },
      { type: 'callout', tone: 'muted', title: 'A rule we hold to', text: 'An agent can propose an irreversible action. It should never be the thing that commits it without a human, or without a check that is at least as reliable as a human would be.' },

      { type: 'h2', id: 'patterns', text: 'The patterns that hold up' },
      { type: 'p', html: 'Putting agents into production is less about the model and more about the scaffolding around it. Five patterns do most of the work:' },
      { type: 'ol', items: [
        '<strong>Scope the tools tightly.</strong> Give the agent the smallest set of tools that can do the job, each with the narrowest permissions. An agent that can only read and draft is far safer than one that can also send and delete.',
        '<strong>Make every step observable.</strong> Log the plan, the tool calls and the results. When an agent does something surprising — and it will — you need to see the exact sequence that led there. This is not optional tooling; it is the difference between a fixable system and a black box.',
        '<strong>Put a human at the irreversible steps.</strong> Reads and drafts run free; sends, payments, deletes and publishes wait for approval. This one decision removes most of the real-world risk.',
        '<strong>Bound the loop.</strong> A step limit, a cost limit, and a clear "I am stuck, escalate" path. An agent that knows how to give up is safer than one that does not.',
        '<strong>Evaluate continuously.</strong> Build a set of real tasks with known-good outcomes and run the agent against them on every change. Without evals you are shipping on vibes, and model updates will silently move your results.',
      ] },

      { type: 'h2', id: 'models', text: 'A word on models, without the hype' },
      { type: 'p', html: 'The frontier model families — the Claude and GPT lines among them — have all become genuinely capable at tool use and multi-step reasoning, which is what makes any of this possible. But the model is rarely the thing that decides whether an agent succeeds in production. The tools, the guardrails, the observability and the evals decide that.' },
      { type: 'p', html: 'We deliberately keep our architecture model-agnostic behind a thin abstraction, so a project is never one vendor announcement away from a rewrite. Chase the best model for the task, by all means — just do not build the whole system so tightly around one that you cannot move. The pace of change in this space is the strongest argument for keeping that seam clean.' },
      { type: 'callout', tone: 'brand', title: 'On version numbers', text: 'New model versions arrive constantly, and each one is described as a leap. Treat the claims as marketing until your own evals say otherwise. The only benchmark that matters is your task, on your data, measured by you.' },

      { type: 'h2', id: 'getting-started', text: 'How to start without betting the business' },
      { type: 'p', html: 'The right first agentic project is small, internal, and easy to check. Pick a task your team already does by hand that is high-volume and low-stakes — ticket triage, first-draft research, data tidying. Build the agent with a human in the loop from day one, instrument everything, and measure it against how the manual process actually performs.' },
      { type: 'p', html: 'If it beats the manual baseline on your own numbers, widen its scope carefully. If it does not, you have learned that cheaply, on a task where a wrong move costs nothing. That is the whole discipline: agentic AI is not a leap of faith, it is a series of small, verifiable bets, each one earning the right to the next.' },
    ],
    keyTakeaways: [
      'An agent is a model that plans and uses tools in a loop — use one only when the steps are not known in advance and a human can check the result.',
      'Agents work where verifying the output is cheaper than doing the task: triage, research, coding with tests, reconciliation.',
      'The risk is multi-step: small errors compound, loops run away, and tools can do damage. Guardrails matter more than the model.',
      'Put a human at every irreversible action, bound every loop, log every step, and run continuous evals on your own tasks.',
      'Keep the architecture model-agnostic; the frontier is moving too fast to hard-wire one vendor.',
    ],
    faqs: [
      { q: 'Is agentic AI just a chatbot with extra steps?', a: 'No. A chatbot answers; an agent acts. An agent is given a goal and a set of tools, then plans and executes a sequence of steps in a loop until the goal is met. The value and the risk both come from those multi-step actions, which is why guardrails matter so much more than they do for a simple chatbot.' },
      { q: 'What is the safest first agentic AI project?', a: 'A high-volume, low-stakes internal task where the output is cheap to check — ticket triage, first-draft research, or data reconciliation. Build it with a human approving any consequential action, instrument every step, and measure it against your current manual process before widening its scope.' },
      { q: 'Which AI model should we use for agents?', a: 'The frontier families (Claude, GPT and others) are all capable enough that the model is rarely the deciding factor. Success comes from the tools, guardrails, observability and evaluation around the model. We keep systems model-agnostic behind a thin abstraction so you can switch as the landscape changes.' },
      { q: 'How do you stop an AI agent from doing damage?', a: 'Least-privilege tools, a human gate on every irreversible action, hard limits on loop length and cost, full logging of every step, and continuous evaluation against known-good outcomes. An agent should be able to propose an irreversible action but never commit it unchecked.' },
    ],
    cta: { href: '/services/ai-ml', label: 'Explore our AI & ML services' },
  },

  {
    slug: 'saas-ideas-2026',
    category: 'Business',
    title: '12 SaaS Ideas Worth Building in 2026 (and Why)',
    dek: 'Not a listicle of app names, but a way to find ideas that can actually become a business — the shape of a good SaaS opportunity in 2026, with twelve concrete directions grounded in real Canadian market gaps.',
    metaTitle: '12 SaaS Ideas Worth Building in 2026',
    metaDescription:
      'How to find a SaaS idea that can become a real business in 2026, plus twelve concrete directions grounded in genuine Canadian market gaps.',
    date: '2026-09-06',
    dateModified: '2026-09-07',
    readTime: '10 min read',
    heroKey: 'planning',
    intro: [
      'The internet is full of "SaaS ideas" lists. Almost all of them are useless, because a name is not an idea and an idea is not a business. "Build a CRM for dentists" tells you nothing about whether dentists will pay, what they use today, or why you would win.',
      'So this is a different kind of list. First, the shape of a SaaS opportunity actually worth your next two years — the questions that separate a real gap from a crowded graveyard. Then twelve concrete directions for 2026, chosen because the market has genuinely shifted underneath them, with the reasoning attached so you can judge them rather than just take them.',
    ],
    body: [
      { type: 'h2', id: 'what-makes-good', text: 'What makes a SaaS idea worth building' },
      { type: 'p', html: 'Before any specific idea, five questions decide whether it can become a business. If you cannot answer them, the idea is a hobby, however clever it sounds.' },
      { type: 'checks', items: [
        { term: 'Is the pain expensive?', text: 'People pay to remove costly pain, not mild annoyance. The best B2B SaaS replaces something that currently costs real money — a person’s time, a compliance risk, a leaking revenue line.' },
        { term: 'Is the buyer reachable?', text: 'You have to be able to find and sell to the buyer without lighting money on fire. A niche you can reach through one channel beats a huge market you cannot afford to acquire.' },
        { term: 'Is there a wedge?', text: 'You rarely beat an incumbent head-on. You win by doing one specific thing far better for one specific group, then expanding. What is your wedge?' },
        { term: 'Does it get harder to leave over time?', text: 'The best SaaS accumulates data, workflow and integrations that make switching painful. Without that, you are renting customers month to month.' },
        { term: 'Can you actually build and run it?', text: 'Some ideas need regulatory approval, deep domain data, or scale you cannot reach. Honest constraints are part of the idea.' },
      ] },
      { type: 'callout', tone: 'brand', title: 'The pattern that keeps winning', text: 'Vertical SaaS — software built for one industry rather than everyone — keeps producing durable businesses. A tool that deeply understands one trade beats a generic tool the trade has to bend itself around.' },

      { type: 'h2', id: 'shifts', text: 'Three shifts that opened new gaps' },
      { type: 'p', html: 'Ideas are worth revisiting when the ground moves. Three shifts have moved it recently, and most of the directions below sit on top of one of them.' },
      { type: 'cards', items: [
        { title: 'AI made new features economical', text: 'Tasks that were too expensive to automate — reading documents, drafting, classifying, summarising — are now cheap. Whole product categories that did not pencil out before now do.' },
        { title: 'Compliance got heavier', text: 'Privacy regimes tightened (Quebec’s Law 25, evolving federal rules), and every regulated industry now needs tooling to keep up. Compliance is a permanent, growing SaaS market.' },
        { title: 'Teams went distributed for good', text: 'Remote and hybrid work stopped being temporary. The tooling to run distributed operations well is still immature in most verticals.' },
      ] },

      { type: 'h2', id: 'ideas', text: 'Twelve directions for 2026' },
      { type: 'p', html: 'Each of these is a direction, not a finished product. The value is in the reasoning — why the gap exists now — which you can apply to your own market even if the specific idea is not for you.' },
      { type: 'ol', items: [
        '<strong>Compliance automation for a specific regulated trade.</strong> Pick one — clinics, financial advisers, food producers — and build the tool that turns its specific regulations into a checklist, an audit trail and automatic reporting. Expensive pain, reachable buyer, sticky by nature.',
        '<strong>AI-assisted document workflows for a paper-heavy industry.</strong> Insurance, legal, construction and logistics still move on documents. An agent that reads, extracts and routes them, with a human checking the edge cases, removes hours of manual work per day.',
        '<strong>Vertical operations platform for a trade.</strong> Scheduling, quoting, invoicing and customer records for one field trade, built the way that trade actually works, not a generic tool it has to fight.',
        '<strong>Revenue-leak detection for subscriptions.</strong> Failed payments, unclaimed usage, expired cards and mispriced plans quietly cost subscription businesses real money. A tool that finds and recovers it pays for itself measurably.',
        '<strong>Data-residency-first tooling for Canadian teams.</strong> Many popular SaaS tools cannot promise Canadian data residency. For public sector, health and finance, that is a hard blocker and a genuine wedge.',
        '<strong>Onboarding and enablement for distributed teams.</strong> The first ninety days of a remote hire are still mostly improvised. Structured, trackable onboarding for a specific industry is an underserved need.',
        '<strong>Field-service intelligence.</strong> Crews in energy, utilities and construction generate data that mostly evaporates. Capture it on mobile, turn it into scheduling and safety insight, and you have a platform Alberta and the prairies would buy.',
        '<strong>Assessment and reporting for education and training.</strong> Adaptive assessment with AI-assisted marking and clear reporting is still clumsy in most learning tools. A focused product for one segment — trades training, professional certification — has room.',
        '<strong>Marketplace back-office in a box.</strong> Every new marketplace rebuilds payments, payouts, disputes and trust from scratch. A toolkit that ships that plumbing is a durable pick-and-shovel business.',
        '<strong>Sustainability and emissions reporting for mid-market firms.</strong> Reporting requirements are tightening and enterprise tools are too heavy for mid-market companies. A right-sized product for a specific sector fits a real, growing mandate.',
        '<strong>Practice management for an underserved profession.</strong> Look past doctors and lawyers to the professions everyone forgets — dietitians, inspectors, translators, surveyors. Each has real workflow needs and little good software.',
        '<strong>AI-native internal tools platform.</strong> Most companies run on a mess of spreadsheets and one-off scripts. A platform that lets non-engineers build safe, governed internal tools — with the guardrails real businesses need — rides the same wave as agentic AI.',
      ] },
      { type: 'callout', tone: 'muted', title: 'One honest caveat', text: 'A market gap is necessary but not sufficient. Every idea here has a version that fails through poor execution, wrong pricing or an unreachable buyer. The list points at where to look; the discipline of validating before building is what turns a direction into a business.' },

      { type: 'h2', id: 'next', text: 'From idea to something real' },
      { type: 'p', html: 'The gap between an idea on this list and a product people pay for is almost entirely validation and disciplined building. Before writing a line of code, get a handful of real potential buyers to tell you the pain is worth paying to remove. Then build the smallest thing that proves it — an MVP that solves the core problem and nothing else.' },
      { type: 'p', html: 'That is the part we help with most: taking a validated idea and engineering it into a product that can scale, on architecture you own, without the eighteen-month detour that sinks most first attempts. The idea is the easy half. The build, and the judgement about what not to build, is the rest.' },
    ],
    keyTakeaways: [
      'A SaaS idea is only a business if the pain is expensive, the buyer is reachable, you have a wedge, and it gets stickier over time.',
      'Vertical SaaS — deep software for one industry — keeps producing the most durable businesses.',
      'Three shifts opened new gaps in 2026: cheap AI features, heavier compliance, and permanently distributed teams.',
      'The twelve directions are reasoning, not products — apply the "why the gap exists now" logic to your own market.',
      'The hard part is not the idea; it is validating before building and having the discipline to ship a true MVP.',
    ],
    faqs: [
      { q: 'What kind of SaaS is easiest to make profitable in 2026?', a: 'Vertical B2B SaaS — software built for one specific industry — tends to be the most durable and the easiest to price well. It solves an expensive, specific pain for a buyer you can actually reach, and it accumulates data and workflow that make it sticky. Generic horizontal tools face far more competition and churn.' },
      { q: 'Do I need a technical co-founder to build a SaaS?', a: 'Not necessarily, but you need a technical partner you trust. Many successful founders are non-technical and work with an engineering team to build and run the product. What matters is validating the idea first and owning the intellectual property in whatever you build.' },
      { q: 'How do I know if my SaaS idea is any good?', a: 'Run it through five questions: is the pain expensive, is the buyer reachable, do you have a wedge against incumbents, does it get harder to leave over time, and can you realistically build and run it. Then validate with real potential buyers before writing code — get them to confirm the pain is worth paying to remove.' },
      { q: 'What does it cost to build a SaaS MVP in Canada?', a: 'A custom SaaS MVP with authentication, database architecture, payments and core features typically runs from roughly $25,000 to $75,000 or more, depending on scope. The right first build is deliberately minimal — the smallest thing that proves customers will pay — not a full platform.' },
    ],
    cta: { href: '/services/saas-development', label: 'Explore our SaaS development services' },
  },
];

export const articleSlugs = articles.map(a => a.slug);
export function getArticle(slug: string): Article | undefined {
  return articles.find(a => a.slug === slug);
}
