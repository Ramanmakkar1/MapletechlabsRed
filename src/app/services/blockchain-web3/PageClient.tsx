import ServicePageTemplate from '@/components/page/ServicePageTemplate';

const stats = [
  { value: '80+', label: 'Contracts Audited' },
  { value: '$2.1B+', label: 'TVL Secured' },
  { value: '15', label: 'Chains Supported' },
  { value: 'Zero', label: 'Critical Exploits' },
];

const services: { title: string; tag: string; desc: string; chips?: string[] }[] = [
  {
    title: 'Smart Contract Development',
    tag: 'Solidity / Rust',
    desc: 'Battle-tested EVM and non-EVM smart contracts — from ERC-20/721/1155 tokens to complex DeFi protocols. Full audit pipeline included.',
    chips: ['Solidity', 'Hardhat', 'Foundry', 'OpenZeppelin', 'Slither'],
  },
  {
    title: 'DeFi Protocol Engineering',
    tag: 'DeFi',
    desc: 'AMMs, lending protocols, yield optimisers and cross-chain bridges engineered from first principles with formal verification.',
    chips: ['Uniswap', 'Aave', 'Chainlink', 'TheGraph', 'IPFS'],
  },
  { title: 'NFT Marketplaces', tag: 'Emerging Web3', desc: 'Custom NFT platforms with lazy minting, royalties, and secondary market mechanics.' },
  { title: 'DAO Governance', tag: 'Governance', desc: 'On-chain voting, treasury management and proposal frameworks for decentralised organisations.' },
  { title: 'Wallet Integration', tag: 'Auth', desc: 'Seamless multi-wallet connect flows with WalletConnect, MetaMask and social login fallbacks.' },
  { title: 'Layer 2 Solutions', tag: 'Scaling', desc: 'Optimism, Arbitrum and zkSync deployments to slash gas costs without sacrificing security.' },
];

const steps = [
  {
    num: '01',
    title: 'Architecture',
    desc: 'We map your protocol economics, threat model, and chain selection. Output: a formal architecture doc with gas estimates and risk matrix.',
    deliverables: ['Protocol Spec', 'Threat Model', 'Chain Selection', 'Gas Analysis'],
    duration: '1–2 weeks',
  },
  {
    num: '02',
    title: 'Contract Dev',
    desc: 'Iterative contract development with modular design patterns, inline NatSpec documentation and continuous unit testing throughout.',
    deliverables: ['Contract Suite', 'Unit Tests', 'NatSpec Docs', 'Gas Benchmarks'],
    duration: '2–6 weeks',
  },
  {
    num: '03',
    title: 'Audit',
    desc: 'Internal static analysis via Slither and Mythril, followed by a third-party audit. Every finding is classified, remediated and re-verified.',
    deliverables: ['Slither Report', 'Mythril Report', '3rd-Party Audit', 'Remediation Log'],
    duration: '2–4 weeks',
  },
  {
    num: '04',
    title: 'Testnet',
    desc: 'Full end-to-end deployment on relevant testnets. Frontend integration, subgraph indexing and load simulation before mainnet.',
    deliverables: ['Testnet Deploy', 'Subgraph', 'Integration Tests', 'Load Simulation'],
    duration: '1–2 weeks',
  },
  {
    num: '05',
    title: 'Mainnet',
    desc: 'Phased mainnet launch with multisig governance, upgrade proxies, and 24/7 on-chain monitoring via Tenderly alerts.',
    deliverables: ['Mainnet Deploy', 'Multisig Setup', 'Tenderly Alerts', 'Launch Report'],
    duration: 'Ongoing',
  },
];

const techCategories = [
  { label: 'EVM', chips: ['Solidity', 'Vyper', 'Hardhat', 'Foundry', 'Slither'] },
  { label: 'Non-EVM', chips: ['Rust', 'Substrate', 'Cosmos SDK', 'Move'] },
  { label: 'Infrastructure', chips: ['IPFS', 'TheGraph', 'Chainlink', 'Alchemy', 'Infura'] },
  { label: 'Frontend', chips: ['ethers.js', 'wagmi', 'RainbowKit', 'viem'] },
];

const industries = [
  { icon: '📈', title: 'DeFi', desc: 'Lending, AMMs, yield strategies and on-chain derivatives with rigorous economic modelling.' },
  { icon: '🎮', title: 'NFT / Gaming', desc: 'Play-to-earn economies, dynamic NFTs and in-game asset marketplaces at scale.' },
  { icon: '🗳️', title: 'DAOs', desc: 'Governance frameworks, treasury systems and quadratic voting mechanisms.' },
  { icon: '🏠', title: 'RWA', desc: 'Tokenised real-world assets — real estate, commodities and private credit on-chain.' },
  { icon: '🌉', title: 'Cross-chain', desc: 'Bridge infrastructure and omnichain protocols connecting disparate Layer 1 ecosystems.' },
  { icon: '🏢', title: 'Enterprise Blockchain', desc: 'Permissioned ledgers and consortium networks for regulated industries.' },
];

export default function PageClient() {
  return (
    <ServicePageTemplate
      slug="blockchain-web3"
      name="Blockchain &amp; Web3"
      copy={{ badge: "Blockchain &amp; Web3", title: <>Build on Web3.<br />Build for <span style={{ color: 'var(--brand)' }}>Tomorrow.</span></>, desc: <>Smart contracts, DeFi protocols, NFT marketplaces and decentralised apps — engineered for security, scale and real-world adoption.</> }}
      stats={stats}
      services={services}
      steps={steps}
      techCategories={techCategories}
      industries={industries}
      servicesTitle="Related Services"
    />
  );
}
