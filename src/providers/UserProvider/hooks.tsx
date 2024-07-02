'use client';
import { UserContext } from '@/providers/UserProvider/UserProvider';
import { TTokenData } from '@/providers/UserProvider/types';
import { useContext } from 'react';
import { Chain } from 'viem';

// UserContext hook
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserContextProvider');
  }
  return context;
};

// other hooks
export const useUserBalanceByChainId = (chainId: Chain['id']): TTokenData[] => {
  const { state } = useUserContext();
  const res = state.balanceByChain.find((_chain) => _chain.chain === chainId);
  return res?.tokens ?? [];
};

export const useUserTokenAmount = (chain: Chain,
  token: TTokenData['name']): TTokenData['amount'] => {
  const { state } = useUserContext();
  const res = state.balanceByChain.find((_chain) => _chain.chain === chain.id);
  const tokenData = res?.tokens.find((t) => t.name === token);
  return tokenData?.amount ?? BigInt(0);
};

export const useUserTokenAllowance = (chain: Chain,
  token: TTokenData['name']): TTokenData['allowance'] => {
  const { state } = useUserContext();
  const res = state.balanceByChain.find((_chain) => _chain.chain === chain.id);
  const tokenData = res?.tokens.find((t) => t.name === token);
  return tokenData?.allowance ?? BigInt(0);
};
