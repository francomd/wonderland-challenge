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
    [sepolia.id]: http('https://api-sepolia.etherscan.io/api', { key: process.env.NEXT_PUBLIC_ETHERSCAN_API_KEY }),
    [polygonMumbai.id]: http('https://api-testnet.polygonscan.com/api', { key: process.env.NEXT_PUBLIC_ETHERSCAN_API_KEY }),
  },
  ssr: true,
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || '',
  appName: 'Wonderland',
  appDescription: "WE'RE ALL MAD HERE",

  // TODO: Change this to the actual app url and icon
  appUrl: 'https://family.co', // your app's url
  appIcon: 'https://family.co/logo.png', // your app's icon, no bigger than 1024x1024px (max. 1MB)
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
