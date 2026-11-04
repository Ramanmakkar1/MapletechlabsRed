import SubServicePageTemplate from '@/components/page/SubServicePageTemplate';

const stats = [
  { value: '70+', label: 'Chatbots Deployed' },
  { value: '85%', label: 'Query Resolution Rate' },
  { value: '24/7', label: 'Availability' },
  { value: '40%', label: 'Support Cost Reduction' },
];

const services = [
  { icon: '🤖', title: 'LLM-Powered Conversational AI', desc: 'Build intelligent chatbots powered by GPT-4, Claude, or Gemini that understand nuance, maintain context across conversations, and deliver human-quality responses to complex queries.' },
  { icon: '📖', title: 'Knowledge Base Integration', desc: 'Connect your chatbot to your documentation, FAQs, product catalog, and internal knowledge using RAG. The bot answers accurately from your data, with citations, not generic LLM responses.' },
  { icon: '📱', title: 'Multi-Channel Deployment', desc: 'Deploy a single chatbot across web widget, WhatsApp Business, Slack, Microsoft Teams, and mobile apps. Unified conversation management with channel-specific UX optimization.' },
  { icon: '🤝', title: 'Handoff to Human Agents', desc: 'Seamless escalation to live agents when the bot reaches its limits or when customers request it. Integrates with Intercom, Zendesk, HubSpot, and custom support systems with full context passed over.' },
  { icon: '📊', title: 'Chatbot Analytics & Improvement', desc: 'Track resolution rates, conversation drop-offs, unhandled queries, and CSAT scores. We implement feedback loops that continuously improve bot accuracy from real user interactions.' },
  { icon: '🎙️', title: 'Voice Bot Integration', desc: 'Extend your chatbot to voice channels — phone support, smart speakers, and IVR replacement. We integrate with Twilio, ElevenLabs, and Google Dialogflow for natural voice experiences.' },
];

const steps = [
  { num: '01', title: 'Conversation Design', desc: 'We map your key user journeys, define intents, design conversation flows, and create fallback strategies. Good conversation design is the foundation of a bot that users actually enjoy talking to.' },
  { num: '02', title: 'Knowledge Base Setup', desc: 'We ingest and structure your documentation, product data, and FAQs into a vector database. Content is chunked, embedded, and indexed for fast semantic retrieval during live conversations.' },
  { num: '03', title: 'Integration & Testing', desc: 'We integrate the bot with your backend systems, CRM, and ticketing tools. Extensive testing covers edge cases, adversarial inputs, tone consistency, and accuracy against your knowledge base.' },
  { num: '04', title: 'Launch & Tune', desc: 'After go-live, we monitor conversation logs, analyze failure modes, retune prompts, and expand the knowledge base weekly. Chatbot performance compounds over the first 90 days of operation.' },
];

const faqs = [
  { q: 'Should I use a GPT-powered chatbot or a rule-based one?', a: 'For most modern use cases, LLM-powered chatbots significantly outperform rule-based systems. They handle natural language variation, multi-turn context, and ambiguous queries that rule-based bots fail on. Rule-based bots are still appropriate for very simple, high-stakes flows where exact behavior must be controlled (e.g., payment confirmations). We often use a hybrid: LLM for understanding intent, rules for critical action steps.' },
  { q: 'How do I train the chatbot on our specific documentation?', a: 'We use RAG (Retrieval Augmented Generation) — your documentation is split into chunks, converted into vector embeddings, and stored in a vector database (Pinecone, Weaviate, or pgvector). When a user asks a question, the most relevant chunks are retrieved and given to the LLM as context, so answers are grounded in your actual content. No fine-tuning required — updates to your docs are reflected in minutes.' },
  { q: 'What happens when the bot doesn\'t know the answer?', a: 'We configure explicit handling for low-confidence responses: the bot acknowledges uncertainty rather than hallucinating, offers to escalate to a human agent, and logs the query for knowledge base improvement. Over time, the most frequent unhandled queries get new content added, and bot coverage expands continuously. A good bot that knows its limits is far better than one that confidently gives wrong answers.' },
  { q: 'Which channels can the chatbot be deployed on?', a: 'Our chatbots are built with a channel-agnostic core and deployed to any combination of: web chat widget, WhatsApp Business API, Slack, Microsoft Teams, Facebook Messenger, SMS (via Twilio), iOS/Android apps, and voice (phone/IVR). A single conversation engine handles all channels with appropriate formatting and interaction patterns per channel.' },
  { q: 'How do we measure whether the chatbot is actually working?', a: 'We instrument every deployment with a metrics dashboard covering: containment rate (queries resolved without human), first-response time, user satisfaction (thumbs up/down + CSAT surveys), escalation rate, and topic distribution. We set baseline targets before launch and review metrics weekly for the first 3 months, making data-driven improvements to consistently push resolution rates higher.' },
  { q: 'How are document updates reflected in chatbot answers?', a: 'The update process depends on the source systems and ingestion design. Documents may be re-indexed on a schedule or after a change is detected; agree on update frequency, deletion handling, and how to verify a new version before relying on it.' },
  { q: 'What recurring costs should we plan for?', a: 'Separate implementation from ongoing model usage, hosting, channel or integration fees, monitoring, and support. Usage depends on conversation volume, answer length, retrieval, and retries. We estimate these from your expected traffic and agree what maintenance and support cover.' },
  { q: 'How will our data be handled?', a: 'Data handling is a project decision shaped by the selected model and hosting, what content is sent to each service, retention needs, access controls, and applicable policies. Scope these requirements before choosing an architecture; no single setup is right for every organisation.' },
];

function BuyerContent() {
  return (
    <section aria-labelledby="chatbot-buying-guide" style={{ padding: 'var(--section-y) 0', background: 'var(--surface-alt)' }}>
      <div className="cb-container" style={{ color: 'var(--body)', lineHeight: 1.7 }}>
        <h2 id="chatbot-buying-guide">Choose a chatbot approach that fits your business</h2>
        <p className="lede">Start with the questions people need answered, the information they can use, and what should happen when the bot is unsure. The right scope depends on your channels, controls, and systems.</p>
        <h3>Hosted chatbot or custom development?</h3>
        <p>A hosted chatbot can suit a team that needs a standard support or FAQ experience, has compatible content, and can work within the platform’s workflow and data controls. Custom development may fit when you need specialised conversation flows, several channels, citations tied to your own documents, specific permissions, or integrations a hosted tool does not provide. Compare setup effort, control, portability, and ongoing ownership against your requirements.</p>
        <h3>Ground answers in documents and show sources</h3>
        <p>Retrieval-augmented generation (RAG) finds relevant passages in approved documents and supplies them as context for an answer. Decide which file types and repositories are in scope, how often changes and deletions are indexed, and what should happen when sources conflict or no useful passage is found. Source citations can link an answer to the retrieved document or passage so users can check it; evaluate citation accuracy as well as answer accuracy.</p>
        <h3>Plan human handoff and system access</h3>
        <p>Define when a conversation should reach a person: for example, a user request, low confidence, sensitive topic, or repeated failed answer. Choose the destination, what conversation context transfers, service hours, and the fallback when no agent is available.</p>
        <p>Read-only knowledge access lets a bot retrieve approved information. Actions such as changing an order, creating a ticket, or updating a customer record require separate integrations, scoped permissions, confirmation rules, and testing. Start with read-only access when answers are the goal; add narrowly defined actions only where the business process needs them.</p>
        <h3>What goes into a useful quote?</h3>
        <p>Scope document volume, formats and update frequency; expected conversations and channels; integrations and API availability; user roles and permissions; and evaluation coverage across common, difficult, and sensitive questions. Include handoff rules, acceptance measures, and who owns content review. Estimate implementation separately from model usage, hosting, channel or integration fees, and ongoing support or maintenance. See our <a href="/blog/ai-development-cost-canada">AI development cost guide for Canada</a> for cost factors; a project estimate depends on scope.</p>
        <h3>Discovery checklist</h3>
        <ul style={{ paddingLeft: 24, marginBottom: 28 }}>
          <li>Bring top user questions, target channels, and an estimate of conversation volume.</li>
          <li>List document repositories, formats, owners, update cadence, and access restrictions.</li>
          <li>Identify systems to connect and whether the bot needs read-only access or specific actions.</li>
          <li>Provide representative examples, including unanswered, conflicting, and sensitive questions.</li>
          <li>Agree on citation expectations, evaluation coverage, handoff rules, and acceptance measures.</li>
          <li>Name owners for content updates, monitoring, maintenance, and support after launch.</li>
        </ul>
        <a href="/contact" className="btn btn--primary">Discuss your chatbot project</a>
      </div>
    </section>
  );
}

export default function PageClient() {
  return (
    <SubServicePageTemplate
      parent={{ href: "/services/ai-ml", label: "AI & Machine Learning" }}
      name="AI Chatbots"
      copy={{ badge: "AI & MACHINE LEARNING", title: <>AI Chatbots That <span style={{ color: 'var(--brand)' }}>Actually Resolve</span></>, desc: <>We build LLM-powered chatbots that understand your business, answer from your knowledge base, and resolve 85% of queries without human intervention — across web, WhatsApp, Slack, and voice.</> }}
      stats={stats}
      services={services}
      steps={steps}
      faqs={faqs}
      capabilitiesTitle="Our Capabilities"
      buyerContent={<BuyerContent />}
    />
  );
}
