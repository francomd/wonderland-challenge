import { CONTRACTS, TChainId, TToken } from '@/contracts';
import { useEffect } from 'react';
import { isAddress } from 'viem';
import { useAccount,
  useWaitForTransactionReceipt,
  useWriteContract } from 'wagmi';

interface ITransferButtonProps {
  token: TToken;
  amount: bigint;
  toAddress: string;
  disabled: boolean;
  onSuccess: () => void;
  onError: () => void;
}

export default function TransferButton({
  token,
  amount,
  toAddress,
  disabled,
  onSuccess,
  onError,
}: ITransferButtonProps) {
  const { address, chainId } = useAccount();

  const {
    data: hash,
    writeContract,
    isPending: writeContractIsPending,
  } = useWriteContract();

  const { status: waitTxStatus, isLoading } = useWaitForTransactionReceipt({ hash });

  const handleTransfer = () => {
    writeContract({
      address: CONTRACTS[token].address[chainId! as TChainId],
      abi: CONTRACTS[token].abi,
      functionName: 'transferFrom',
      args: [
        address!,
        toAddress as `0x${string}`,
        amount,
      ],
    });
  };

  useEffect(() => {
    if (waitTxStatus === 'success') {
      onSuccess();
    }

    if (waitTxStatus === 'error') {
      onError();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [waitTxStatus]);

  const isDisabled =
    disabled || writeContractIsPending || isLoading || !isAddress(toAddress);

  const ButtonText = () => {
    if (writeContractIsPending) return 'Pending...';
    if (isLoading) return 'Loading...';
    return 'Transfer';
  };

  return (
    <button disabled={isDisabled} onClick={handleTransfer}>
      <ButtonText />
    </button>
  );
}
