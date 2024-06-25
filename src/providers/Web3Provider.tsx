'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { hashFn } from '@wagmi/core/query';
import { ConnectKitProvider, getDefaultConfig } from 'connectkit';
import { WagmiProvider, createConfig, http } from 'wagmi';
import { polygonMumbai, sepolia } from 'wagmi/chains';

declare module 'wagmi' {
  interface Register {
    config: typeof config;
  }
}

export const config = createConfig(getDefaultConfig({
  chains: [sepolia, polygonMumbai],
  transports: {
    [sepolia.id]: http(),
    [polygonMumbai.id]: http(),
  },
  ssr: true,

  walletConnectProjectId:
      process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || '',
  appName: 'Wonderland',
  appDescription: "WE'RE ALL MAD HERE",

  // TODO: Change this to the actual app url and icon
  appUrl: 'https://family.co', // your app's url
  appIcon: 'https://family.co/logo.png', // your app's icon, no bigger than 1024x1024px (max. 1MB)
}));

const queryClient = new QueryClient({ defaultOptions: { queries: { queryKeyHashFn: hashFn } } });

export const Web3Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider>{children}</ConnectKitProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </WagmiProvider>
  );
};
