import { useMemo } from 'react';

interface IApproveButtonProps {
  disabled: boolean;
  loading: boolean;
  confirming: boolean;
  approved: boolean;
  onClick: () => void;
}

export default function ApproveButton({
  disabled,
  loading,
  approved,
  confirming,
  onClick,
}: IApproveButtonProps) {
  /*
   * const isApproved = allowance >= amount;
   * const isLoading = waitTxIsLoading;
   * const isConfirming = writeContractIsPending && !writeContractIsError
   * const anyContractIsPending = writeContractIsPending || readContractIsPending;
   * const isDisabled =
   *   disabled || anyContractIsPending || isLoading || isApproved;
   */

  const dynamicText = useMemo(() => {
    if (confirming) return 'Confirming...';
    if (loading) return 'Loading...';
    if (approved) return 'Approved';
    return `Approve`;
  }, [
    confirming,
    loading,
    approved,
  ]);

  return (
    <button disabled={disabled} onClick={onClick}>
      {dynamicText}
    </button>
  );
}
