import SubServicePageTemplate from '@/components/page/SubServicePageTemplate';

const stats = [
  { value: '20+', label: 'DeFi Protocols Built' },
  { value: '$200M+', label: 'Total Value Locked' },
  { value: 'AMM/Lending/Yield', label: 'Protocol Expertise' },
  { value: 'Full Audit', label: 'Every Protocol' },
];

const services = [
  { icon: '🔀', title: 'AMM & DEX Development', desc: 'Build Uniswap V2/V3-style automated market makers with custom fee tiers, concentrated liquidity, and multi-hop routing. Full DEX deployments with frontend, subgraph, and liquidity mining programs.' },
  { icon: '🏦', title: 'Lending & Borrowing Protocols', desc: 'Compound and Aave-style lending markets with dynamic interest rate models, liquidation engines, collateral factors, and price oracle integrations. Supports isolated and cross-margin lending pools.' },
  { icon: '🌾', title: 'Yield Aggregators', desc: 'Automated yield optimization vaults that allocate capital across DeFi protocols to maximize APY. Strategy development, rebalancing logic, performance fee mechanisms, and vault share tokenization.' },
  { icon: '💧', title: 'Liquid Staking', desc: 'LST (Liquid Staking Token) protocols that let users earn staking rewards while keeping liquidity. Validator management, reward distribution, withdrawal queue mechanics, and integration with major DeFi ecosystems.' },
  { icon: '🌉', title: 'Cross-Chain Bridges', desc: 'Token bridge infrastructure using LayerZero, Axelar, and Wormhole for cross-chain asset transfers. Lock-and-mint and burn-and-mint architectures with guardian networks and fraud proof mechanisms.' },
  { icon: '🗳️', title: 'Protocol Governance & DAO', desc: 'On-chain governance systems with proposal creation, voting (token-weighted, quadratic, conviction), timelock execution, and treasury management. Integrates with Snapshot for off-chain signaling.' },
];

const steps = [
  { num: '01', title: 'Economic Model Design', desc: 'We model your protocol tokenomics, fee structures, interest rate curves, and incentive mechanisms using agent-based simulations to stress-test the economics before writing any code.' },
  { num: '02', title: 'Smart Contract Build', desc: 'Core protocol contracts implemented in Solidity with modular architecture, comprehensive test coverage (unit, integration, fuzz), and full documentation. Formal specification written before development begins.' },
  { num: '03', title: 'Security Audit', desc: 'Full protocol audit covering smart contract vulnerabilities, economic attack vectors (flash loan attacks, oracle manipulation, sandwich attacks), and cross-contract interaction risks. Remediation included.' },
  { num: '04', title: 'Liquidity Bootstrap', desc: 'We assist with liquidity mining program design, initial liquidity provisioning strategy, DEX listing, and community launch campaigns to ensure healthy TVL from day one.' },
];

const faqs = [
  { q: 'How do automated market makers (AMMs) actually work?', a: 'AMMs replace traditional order books with liquidity pools. Liquidity providers deposit token pairs into pools and earn fees on trades. The price is determined by a mathematical formula — Uniswap V2 uses x*y=k (constant product), while V3 uses concentrated liquidity that lets LPs specify price ranges. When users swap, the formula automatically adjusts the price based on the new reserve ratio. We help you choose the right AMM model for your use case and market depth goals.' },
  { q: 'How do you ensure DeFi protocol security given the high financial stakes?', a: 'DeFi security requires layering multiple defenses. At the code level: formal verification where feasible, 100% branch coverage tests, fuzz testing with Echidna, and Foundry invariant tests. At the economic level: simulation of flash loan attacks, oracle manipulation scenarios, and griefing vectors. Before launch, we conduct a full external audit and recommend a bug bounty program (Immunefi) with meaningful rewards calibrated to your TVL.' },
  { q: 'How do we attract initial liquidity to a new DeFi protocol?', a: 'Initial liquidity is the classic cold-start problem in DeFi. Proven strategies include: token liquidity mining (incentivizing early LPs with governance tokens), POL (Protocol-Owned Liquidity via Olympus-style bonding), partnerships with existing protocols for liquidity migration, and launchpad collaborations. We model the token emission schedule and LP incentives during the economic design phase to balance growth vs. dilution.' },
  { q: 'Can DeFi protocols support multiple blockchains?', a: 'Yes — multi-chain deployments are increasingly standard. Options range from deploying identical contracts to multiple EVM chains (Ethereum, Arbitrum, Polygon, Base) to using cross-chain messaging protocols (LayerZero, Wormhole) for shared liquidity and governance. We design the architecture to make cross-chain expansion straightforward and help you decide which chains to prioritize based on your target user base and liquidity landscape.' },
  { q: 'What regulatory considerations should I be aware of for DeFi?', a: 'DeFi regulation varies significantly by jurisdiction and is still evolving. Key areas of concern include: whether your token constitutes a security (Howey test), KYC/AML requirements for front-end interfaces, treatment of protocol fees as income, and OFAC sanctions compliance. We work with legal partners specializing in Web3 and can recommend counsel to help you structure your protocol and entity in a compliant manner. We do not provide legal advice directly.' },
];

export default function PageClient() {
  return (
    <SubServicePageTemplate
      parent={{ href: "/services/blockchain-web3", label: "Blockchain & Web3" }}
      name="DeFi Protocol Development"
      copy={{ badge: "BLOCKCHAIN & WEB3", title: <>DeFi Protocol Development at <span style={{ color: 'var(--brand)' }}>Scale</span></>, desc: <>We build AMMs, lending protocols, yield aggregators, and cross-chain bridges from economic design through audited mainnet deployment — with $200M+ TVL secured across 20+ DeFi protocols.</> }}
      stats={stats}
      services={services}
      steps={steps}
      faqs={faqs}
      capabilitiesTitle="Our Capabilities"
    />
  );
}
