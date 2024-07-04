import { CONTRACTS, TChain, TToken } from '@/contracts';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useAccount,
  useReadContract,
  useWaitForTransactionReceipt,
  useWriteContract } from 'wagmi';

export const useReadBalanceOf = (token: TToken) => {
  const { address, chainId } = useAccount();

  const result = useReadContract({
    address: CONTRACTS[token].address[chainId! as TChain],
    abi: CONTRACTS[token].abi,
    functionName: 'balanceOf',
    args: [address!],
  });

  return result;
};

export const useReadAllowance = (token: TToken) => {
  const { address, chainId } = useAccount();

  const result = useReadContract({
    address: CONTRACTS[token].address[chainId! as TChain],
    abi: CONTRACTS[token].abi,
    functionName: 'allowance',
    args: [address!, address!],
  });

  return result;
};

export const useApproveContract = (token: TToken, amount: bigint) => {
  const { address, chainId } = useAccount();
  const queryClient = useQueryClient();

  const {
    data: hash,
    writeContract: approveContract,
    isPending: approveContractIsPending,
    isError: approveContractIsError,
  } = useWriteContract();

  const { refetch: readContractRefetch, queryKey } = useReadContract({
    address: CONTRACTS[token].address[chainId! as TChain],
    abi: CONTRACTS[token].abi,
    functionName: 'allowance',
    args: [address!, address!],
  });

  const { status: waitTxStatus, isLoading: waitTxIsLoading } =
    useWaitForTransactionReceipt({ hash });

  // optimistic update
  const refetchAllowance = useMutation({
    mutationFn: (_optimisticValue: BigInt) => readContractRefetch(),
    onMutate: async (newAllowance) => {
      await queryClient.cancelQueries({ queryKey });
      const previosAllowance = queryClient.getQueryData(queryKey);
      queryClient.setQueryData(queryKey, () => newAllowance);

      return { previosAllowance };
    },
    onError: (
      _err, _newTodo, context,
    ) => {
      queryClient.setQueryData(queryKey, context?.previosAllowance);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey });
    },
  });

  useEffect(() => {
    if (waitTxStatus === 'success') {
      const optimisticAllowance = amount;
      refetchAllowance.mutate(optimisticAllowance);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [waitTxStatus]);

  const handleApprove = () => {
    approveContract({
      address: CONTRACTS[token].address[chainId! as TChain],
      abi: CONTRACTS[token].abi,
      functionName: 'approve',
      args: [address!, amount],
    });
  };

  return {
    isLoading: waitTxIsLoading,
    isPending: approveContractIsPending && !approveContractIsError,
    isError: approveContractIsError,
    txStatus: waitTxStatus,
    writeContract: handleApprove,
  };
};

export const useTransferFromContract = (
  token: TToken,
  amount: bigint,
  toAddress: string,
) => {
  const { address, chainId } = useAccount();

  const {
    data: hash,
    writeContract: transferFromContract,
    isPending: transferFromContractIsPending,
    isError: transferFromContractIsError,
  } = useWriteContract();

  const { status: waitTxStatus, isLoading: waitTxIsLoading } =
    useWaitForTransactionReceipt({ hash });

  const handleTransferFrom = () => {
    transferFromContract({
      address: CONTRACTS[token].address[chainId! as TChain],
      abi: CONTRACTS[token].abi,
      functionName: 'transferFrom',
      args: [
        address!,
        toAddress as `0x${string}`,
        amount,
      ],
    });
  };

  const { refetch: refetchBalance } = useReadContract({
    address: CONTRACTS[token].address[chainId! as TChain],
    abi: CONTRACTS[token].abi,
    functionName: 'balanceOf',
    args: [address!],
  });

  useEffect(() => {
    if (waitTxStatus === 'success') {
      refetchBalance();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [waitTxStatus]);

  return {
    isLoading: waitTxIsLoading,
    isPending: transferFromContractIsPending && !transferFromContractIsError,
    isError: transferFromContractIsError,
    txStatus: waitTxStatus,
    writeContract: handleTransferFrom,
  };
};

export const useMint = (token: TToken, amount: bigint) => {
  const { address, chainId } = useAccount();

  const {
    data: hash,
    writeContract: mintContract,
    isPending: mintContractIsPending,
    isError: mintContractIsError,
  } = useWriteContract();

  const { status: waitTxStatus, isLoading: waitTxIsLoading } =
    useWaitForTransactionReceipt({ hash });

  const handleMint = () => {
    mintContract({
      address: CONTRACTS[token].address[chainId! as TChain],
      abi: CONTRACTS[token].abi,
      functionName: 'mint',
      args: [address!, amount],
    });
  };

  const { refetch: refetchBalance } = useReadContract({
    address: CONTRACTS[token].address[chainId! as TChain],
    abi: CONTRACTS[token].abi,
    functionName: 'balanceOf',
    args: [address!],
  });

  useEffect(() => {
    if (waitTxStatus === 'success') {
      refetchBalance();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [waitTxStatus]);

  return {
    isLoading: waitTxIsLoading,
    isPending: mintContractIsPending && !mintContractIsError,
    isError: mintContractIsError,
    txStatus: waitTxStatus,
    writeContract: handleMint,
  };
};
