import { permanentRedirect } from 'next/navigation';

export const dynamic = 'force-static';

export default function KitchenerBlockchainWeb3Page() {
  permanentRedirect('/services/blockchain-web3');
}
