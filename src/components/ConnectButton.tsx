'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAccount } from 'wagmi';

export default function WalletConnect() {
  const { address } = useAccount();
  const router = useRouter();

  useEffect(() => {
    if (!address) {
      router.push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);

  return <ConnectButton />;
}
