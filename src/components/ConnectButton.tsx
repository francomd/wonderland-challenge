'use client';

import { ConnectKitButton } from 'connectkit';
import { useAccount, useSwitchChain } from 'wagmi';

export default function WalletConnect() {
  const { chain, isConnected } = useAccount();
  const { switchChain, chains } = useSwitchChain();

  if (isConnected && !chain) {
    return (
      <button onClick={() => switchChain({ chainId: chains[0].id })}>
        Switch to {chains[0].name}
      </button>
    );
  }

  return <ConnectKitButton />;
}
