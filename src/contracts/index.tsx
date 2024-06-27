import { daiAbi,
  daiAddress,
  usdcAbi,
  usdcAddress } from '@/contracts/ABI/generated';

export const CHAINS = {
  sepolia: 80001,
  polygonMumbai: 11155111,
} as const;

export const CHAIN_NAMES = ['sepolia', 'Polygon Mumbai'] as const;

export type TChain = keyof typeof CHAINS;
export type TChainId = (typeof CHAINS)[keyof typeof CHAINS];

const DAI_CONTRACT = {
  address: daiAddress,
  abi: daiAbi,
  decimals: 18,
};
const USDC_CONTRACT = {
  address: usdcAddress,
  abi: usdcAbi,
  decimals: 6,
};

export const TOKENS = {
  DAI: 'DAI',
  USDC: 'USDC',
} as const;

export type TToken = keyof typeof TOKENS;

export const CONTRACTS = {
  DAI: DAI_CONTRACT,
  USDC: USDC_CONTRACT,
};
