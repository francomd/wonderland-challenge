import { CONTRACTS, TChainId, TToken } from '@/contracts';
import { useAccount, useReadContract } from 'wagmi';

export const useReadBalanceOf = (token: TToken) => {
  const { address, chainId } = useAccount();

  const result = useReadContract({
    address: CONTRACTS[token].address[chainId! as TChainId],
    abi: CONTRACTS[token].abi,
    functionName: 'balanceOf',
    args: [address!],
  });

  return result;
};

export const useReadAllowance = (token: TToken) => {
  const { address, chainId } = useAccount();

  const result = useReadContract({
    address: CONTRACTS[token].address[chainId! as TChainId],
    abi: CONTRACTS[token].abi,
    functionName: 'allowance',
    args: [address!, address!],
  });

  return result;
};
