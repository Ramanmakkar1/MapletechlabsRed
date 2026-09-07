import SubServicePageTemplate from '@/components/page/SubServicePageTemplate';

const stats = [
  { value: '100+', label: 'Contracts Audited' },
  { value: '$500M+', label: 'TVL Secured' },
  { value: 'ETH/SOL/BSC', label: 'Chain Expertise' },
  { value: '0', label: 'Exploits on Audited Contracts' },
];

const services = [
  { icon: '⛓️', title: 'Solidity & Rust Smart Contracts', desc: 'Production-grade smart contracts in Solidity (Ethereum, Polygon, BSC) and Rust (Solana). We follow battle-tested patterns, implement access controls, and write comprehensive NatSpec documentation.' },
  { icon: '🔐', title: 'Contract Security Auditing', desc: 'Thorough manual review and automated analysis (Slither, Mythril, Echidna) for reentrancy, integer overflow, access control flaws, and logic vulnerabilities. Detailed audit reports with severity ratings and remediation guidance.' },
  { icon: '⛽', title: 'Gas Optimization', desc: 'Systematic gas profiling and optimization — storage layout improvements, function visibility tuning, loop optimization, and efficient data structures. We typically reduce gas costs by 20–40% without sacrificing safety.' },
  { icon: '🔄', title: 'Upgradeable Contract Patterns', desc: 'Implement proxy patterns (UUPS, Transparent Proxy, Diamond/EIP-2535) that allow contract logic upgrades while preserving state. We analyze trade-offs and implement the appropriate pattern for your use case.' },
  { icon: '🏛️', title: 'Multi-Sig & DAO Contracts', desc: 'Gnosis Safe integrations, custom multi-signature contracts, Governor Bravo and OpenZeppelin Governor implementations for on-chain governance, timelock controllers, and treasury management.' },
  { icon: '🚀', title: 'Testnet → Mainnet Deployment', desc: 'Full deployment pipeline from local testing to testnet verification to mainnet launch. Includes Hardhat/Foundry test suites, contract verification on Etherscan, and post-deployment monitoring setup.' },
];

const steps = [
  { num: '01', title: 'Requirements & Architecture', desc: 'We map out your contract architecture — state variables, access control roles, function interfaces, and upgrade strategy — before writing a single line of code. Clear specs prevent costly post-deployment mistakes.' },
  { num: '02', title: 'Development', desc: 'Contracts are written following OpenZeppelin standards, with comprehensive unit and integration tests using Hardhat or Foundry. Every function is tested against expected and edge-case inputs.' },
  { num: '03', title: 'Security Audit', desc: 'Multi-stage security review combining automated scanning tools with deep manual code review. We test all attack vectors relevant to your contract type and provide a full written audit report with findings.' },
  { num: '04', title: 'Mainnet Deploy', desc: 'Staged mainnet deployment with a final pre-launch checklist, multisig deployment for key functions, Etherscan verification, and post-deployment integration testing. We stay on-call for 48h post-launch.' },
];

const faqs = [
  { q: 'Which blockchain should I deploy my smart contracts on?', a: 'It depends on your audience, cost requirements, and ecosystem. Ethereum mainnet offers the deepest liquidity and DeFi composability but has the highest gas costs. Polygon and Arbitrum give Ethereum compatibility with lower fees. Solana offers the lowest fees and highest throughput but requires Rust and a different mental model. BSC suits projects targeting Asian markets. We help you evaluate trade-offs against your specific requirements before choosing.' },
  { q: 'How do you ensure smart contract security?', a: 'Security is built in from day one, not bolted on. We use established OpenZeppelin library components instead of rolling custom implementations, apply the checks-effects-interactions pattern to prevent reentrancy, use SafeMath for arithmetic, implement role-based access controls, and add timelocks on critical admin functions. Before any deployment, contracts undergo both automated scanning (Slither, Mythril) and manual line-by-line review.' },
  { q: 'Can smart contracts be upgraded after deployment?', a: 'Blockchain is immutable by design, but upgradeability can be added via proxy patterns. The most common approaches are Transparent Proxy and UUPS, which separate logic and storage so the logic contract can be replaced while state persists. The tradeoff is added complexity and a potential trust assumption around the upgrade key. We recommend multisig + timelock controls on upgrade permissions to maintain decentralization.' },
  { q: 'What is gas optimization and why does it matter?', a: 'Every operation in a smart contract costs "gas" — paid in ETH by users. Unoptimized contracts can make transactions prohibitively expensive, harming UX and adoption. We profile gas costs for every key function and apply targeted optimizations: packing storage slots, using calldata instead of memory, batching operations, and choosing gas-efficient data structures. A 30% gas reduction directly translates to 30% lower transaction costs for all your users.' },
  { q: 'How long does a smart contract security audit take?', a: 'Audit duration scales with contract complexity. A single ERC-20 token or simple escrow contract can be audited in 3–5 days. A complex DeFi protocol with multiple interacting contracts typically takes 2–4 weeks. The audit report includes all findings categorized by severity (Critical, High, Medium, Low, Informational), with specific code references and remediation recommendations. We also offer post-fix re-audits to verify issues are resolved.' },
];

export default function PageClient() {
  return (
    <SubServicePageTemplate
      parent={{ href: "/services/blockchain-web3", label: "Blockchain & Web3" }}
      name="Smart Contract Development"
      copy={{ badge: "BLOCKCHAIN & WEB3", title: <>Smart Contract Development & <span style={{ color: 'var(--brand)' }}>Audit</span></>, desc: <>We write, audit, and deploy production-grade smart contracts across Ethereum, Solana, Polygon, and BSC. Zero exploits on our audited contracts. $500M+ TVL secured across 100+ deployments.</> }}
      stats={stats}
      services={services}
      steps={steps}
      faqs={faqs}
      capabilitiesTitle="Our Capabilities"
    />
  );
}
