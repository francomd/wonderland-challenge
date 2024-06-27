'use client';

import {
  RainbowKitProvider,
  Theme,
  getDefaultConfig,
  lightTheme
} from '@rainbow-me/rainbowkit';
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

const customTheme: Theme = {
  colors: {
    accentColor: '#192d55',
    accentColorForeground: '#192d55',
    modalBackground: '#d7cdf6',
    generalBorder: '#192d55',
    selectedOptionBorder: '#192d55',
  },
  shadows: {
    dialog: '0 0 0 2px #192d55',
    profileDetailsAction: '0 0 0 2px #192d55',
    selectedWallet: '0 0 0 2px #192d55',
    walletLogo: '0 0 0 2px #192d55',
  },
} as Theme;

const customOverlay = lightTheme({ overlayBlur: 'small' });

export default function Web3Provider({ children }: {
  children: React.ReactNode;
}) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          modalSize="compact"
          theme={{
            ...customOverlay,
            ...customTheme,
          }}
        >
          {children}
        </RainbowKitProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </WagmiProvider>
  );
};
