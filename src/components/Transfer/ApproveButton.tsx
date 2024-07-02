import { CONTRACTS, TChainId, TToken } from '@/contracts';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useAccount,
  useReadContract,
  useWaitForTransactionReceipt,
  useWriteContract } from 'wagmi';

interface IApproveButtonProps {
  token: TToken;
  amount: bigint;
  disabled: boolean;
  onSuccess: () => void;
  onError: () => void;
}

export default function ApproveButton({
  token,
  amount,
  disabled,
  onSuccess,
  onError,
}: IApproveButtonProps) {
  const { address, chainId } = useAccount();
  const queryClient = useQueryClient();

  const {
    data: hash,
    writeContract,
    isPending: writeContractIsPending,
    isError: writeContractIsError,
  } = useWriteContract();

  const {
    data: allowance = BigInt(0),
    isPending: readContractIsPending,
    refetch: readContractRefetch,
    queryKey,
  } = useReadContract({
    address: CONTRACTS[token].address[chainId! as TChainId],
    abi: CONTRACTS[token].abi,
    functionName: 'allowance',
    args: [address!, address!],
  });

  const { isLoading: waitTxIsLoading, status: waitTxStatus } =
    useWaitForTransactionReceipt({ hash });

  const refetchAllowance = useMutation({
    mutationFn: (optimisticValue: BigInt) => readContractRefetch(),
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
      onSuccess();
    }

    if (waitTxStatus === 'error') {
      onError();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [waitTxStatus]);

  const handleApprove = () => {
    writeContract({
      address: CONTRACTS[token].address[chainId! as TChainId],
      abi: CONTRACTS[token].abi,
      functionName: 'approve',
      args: [address!, amount],
    });
  };

  const isAllowanceEnough = allowance >= amount;
  const isLoading = waitTxIsLoading;
  const anyContractIsPending = writeContractIsPending || readContractIsPending;
  const isDisabled =
    disabled || anyContractIsPending || isLoading || isAllowanceEnough;

  const ButtonText = () => {
    if (writeContractIsPending && !writeContractIsError) return 'Confirming...';
    if (isLoading) return 'Loading...';
    if (isAllowanceEnough) return 'Approved';
    return `Approve`;
  };

  return (
    <button disabled={isDisabled} onClick={handleApprove}>
      <ButtonText />
    </button>
  );
}
