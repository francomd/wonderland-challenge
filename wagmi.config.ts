import { defineConfig } from '@wagmi/cli';
import { etherscan, react } from '@wagmi/cli/plugins';
import { erc20Abi } from 'viem';
import { polygonMumbai, sepolia } from 'wagmi/chains';

export default defineConfig({
  out: 'src/contracts/ABI/generated.ts',
  contracts: [
    {
      name: 'erc20',
      abi: erc20Abi,
    },
  ],
  plugins: [
    etherscan({
      apiKey: process.env.ETHERSCAN_API_KEY!,
      chainId: sepolia.id,
      contracts: [
        {
          name: 'DAI',
          address: {
            [sepolia.id]: '0x1D70D57ccD2798323232B2dD027B3aBcA5C00091',
            [polygonMumbai.id]: '0x1D70D57ccD2798323232B2dD027B3aBcA5C00091',
          },
        },
        {
          name: 'USDC',
          address: {
            [sepolia.id]: '0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47',
            [polygonMumbai.id]: '0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47',
          },
        },
      ],
    }),
    react(),
  ],
});
