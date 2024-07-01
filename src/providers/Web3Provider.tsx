'use client';

import { RainbowKitProvider, getDefaultConfig } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { hashFn } from '@wagmi/core/query';
import { WagmiProvider, http } from 'wagmi';
import { polygonMumbai, sepolia } from 'wagmi/chains';

export const config = getDefaultConfig({
  chains: [sepolia, polygonMumbai],
  transports: {
    [sepolia.id]: http('https://sepolia.infura.io/v3/19fb9024a0e74ba7b848c03f04bf44ef',
      { key: process.env.NEXT_PUBLIC_INFURA_ETHEREUM_SEPOLIA_API_KEY || '' }),
    [polygonMumbai.id]: http('https://api-testnet.polygonscan.com/api'),

    // [polygonAmoy.id]: http('https://polygon-amoy.infura.io/v3/19fb9024a0e74ba7b848c03f04bf44ef', { key: process.env.NEXT_PUBLIC_INFURA_POLYGON_AMOY_API_KEY || '' }),
  },
  ssr: true,
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || '',
  appName: 'Wonderland',
  appDescription: "WE'RE ALL MAD HERE",
});

const queryClient = new QueryClient({ defaultOptions: { queries: { queryKeyHashFn: hashFn } } });

export const Web3Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>{children}</RainbowKitProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </WagmiProvider>
  );
};
