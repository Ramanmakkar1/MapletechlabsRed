import SubServicePageTemplate from '@/components/page/SubServicePageTemplate';

const stats = [
  { value: '30+', label: 'NFT Platforms Built' },
  { value: '500K+', label: 'NFTs Minted' },
  { value: 'ERC-721/1155/2981', label: 'Standards Supported' },
  { value: 'IPFS & Arweave', label: 'Storage Solutions' },
];

const services = [
  { icon: '🎨', title: 'NFT Minting Smart Contracts', desc: 'Gas-optimized ERC-721A and ERC-1155 minting contracts with configurable supply, pricing, allowlists, batch minting, and reveal mechanics. Audited, tested, and deployable to any EVM chain.' },
  { icon: '🛒', title: 'Marketplace Development', desc: 'Full NFT marketplace builds — fixed price, auction, and offer listing mechanisms, royalty enforcement, collection pages, activity feeds, and wallet-gated access. Custom or integrated with OpenSea and Blur APIs.' },
  { icon: '💎', title: 'Royalty Systems (ERC-2981)', desc: 'On-chain royalty implementation using the ERC-2981 standard, compatible with major marketplaces. We also implement custom royalty enforcement mechanisms and royalty splitting for collaborative collections.' },
  { icon: '🗄️', title: 'IPFS & Arweave Storage', desc: 'Decentralized metadata and asset storage using IPFS (via Pinata or NFT.Storage) and permanent Arweave storage. We handle batch uploads, metadata generation pipelines, and IPFS pinning strategies.' },
  { icon: '📋', title: 'Allowlist & Reveal Mechanics', desc: 'Merkle tree-based allowlist verification for gas-efficient presale access control. Multi-stage reveals with randomized token assignment using Chainlink VRF for provably fair distribution.' },
  { icon: '📊', title: 'NFT Analytics Dashboard', desc: 'Real-time collection analytics — floor price tracking, volume, holder distribution, rarity rankings, and wash trading detection. Integrated with OpenSea, Blur, and on-chain event indexing.' },
];

const steps = [
  { num: '01', title: 'Collection Strategy', desc: 'We define your collection architecture — token standard, supply, pricing tiers, allowlist strategy, reveal mechanics, and royalty structure — aligned with your community and revenue goals.' },
  { num: '02', title: 'Contract Development', desc: 'Gas-optimized minting contracts built with ERC-721A for significant gas savings on batch mints, thorough test coverage, allowlist verification via Merkle proofs, and Chainlink VRF integration for reveals.' },
  { num: '03', title: 'Marketplace Build', desc: 'Frontend marketplace development with wallet connection, collection browsing, listing/buying/bidding flows, royalty display, and activity feeds. Responsive design optimized for both desktop and mobile users.' },
  { num: '04', title: 'Launch', desc: 'Full launch support including metadata pipeline deployment to IPFS/Arweave, contract verification on Etherscan, allowlist management tools, and a war room during mint day for rapid issue resolution.' },
];

const faqs = [
  { q: 'Should I use ERC-721 or ERC-1155 for my NFT project?', a: 'ERC-721 is the classic standard where each token is unique — ideal for PFP collections, 1-of-1 art, and collectibles where individual ownership history matters. ERC-1155 supports multiple token types in one contract and allows multiple editions of each token — better for gaming items, tickets, membership tiers, and collections where some tokens exist in quantities greater than 1. ERC-721A (by Azuki) is a gas-optimized variant of ERC-721 that dramatically reduces minting costs for large batches and is our default recommendation for PFP collections.' },
  { q: 'How should I handle NFT metadata and asset storage?', a: 'Never store NFT assets or metadata on centralized servers — if your server goes down, your NFTs lose their images permanently. We recommend a two-tier approach: IPFS for metadata (via Pinata with multiple pinning nodes) for cost-effective decentralized storage, and Arweave for assets you want guaranteed permanent storage (one-time upload fee, data stored forever). We automate the entire upload and metadata generation pipeline for your collection.' },
  { q: 'How do I implement creator royalties that actually get paid?', a: 'ERC-2981 is the standard for on-chain royalty information that tells marketplaces what royalty percentage to pay. However, major marketplaces (OpenSea, Blur) have made royalties optional for buyers, making enforcement difficult at the protocol level. Solutions include: building your own marketplace with enforced royalties, using operator filter registries to block sales on zero-royalty marketplaces, or accepting optional royalties and building community value in other ways. We help you navigate the trade-offs and implement the approach that fits your project.' },
  { q: 'How do I make NFT minting gas-efficient?', a: 'Several proven techniques reduce minting gas costs: ERC-721A stores ownership data for batch mints far more efficiently than standard ERC-721, saving 60–80% on gas for multi-mint transactions. Merkle tree allowlists use a single bytes32 root on-chain instead of storing thousands of addresses. Lazy minting defers token creation to transfer time. We benchmark gas costs during development and optimize aggressively before deployment.' },
  { q: 'How do I build a fair randomized reveal for my NFT collection?', a: 'Fair reveals require provable randomness — without it, savvy minters can game the system by predicting which token IDs map to rare traits. We implement reveals using Chainlink VRF (Verifiable Random Function), which provides cryptographically provable on-chain randomness that neither we nor you can manipulate. The reveal process: tokens mint with placeholder metadata, a random seed is requested from Chainlink VRF, the seed determines the offset for final token assignments, and metadata is revealed across the entire collection simultaneously.' },
];

export default function PageClient() {
  return (
    <SubServicePageTemplate
      parent={{ href: "/services/blockchain-web3", label: "Blockchain & Web3" }}
      name="NFT Platform Development"
      copy={{ badge: "BLOCKCHAIN & WEB3", title: <>NFT Platforms Built to <span style={{ color: 'var(--brand)' }}>Launch</span></>, desc: <>We build gas-optimized NFT minting contracts, custom marketplaces, and royalty systems from strategy through launch — 500K+ NFTs minted across 30+ platforms we've shipped.</> }}
      stats={stats}
      services={services}
      steps={steps}
      faqs={faqs}
      capabilitiesTitle="Our Capabilities"
    />
  );
}
