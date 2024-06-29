import Button from '@/components/Button/Button';
import { useMemo } from 'react';

interface ITransferButtonProps {
  loading: boolean;
  confirming: boolean;
  disabled: boolean;
  onClick: () => void;
}

export default function TransferButton({
  loading,
  confirming,
  disabled,
  onClick,
}: ITransferButtonProps) {
  const dynamicText = useMemo(() => {
    if (confirming) return 'Pending...';
    if (loading) return 'Loading...';
    return 'Transfer';
  }, [confirming, loading]);

  return (
    <Button disabled={disabled} onClick={onClick}>
      {dynamicText}
    </Button>
  );
}
