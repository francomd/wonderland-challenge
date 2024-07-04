import Button from '@/components/Button';
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
    <Button disabled={disabled} onClick={onClick}>
      {dynamicText}
    </Button>
  );
}
