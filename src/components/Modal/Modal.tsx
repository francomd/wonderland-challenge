import { SCloseButton,
  SHeader,
  SModal,
  SModalOverlay,
  STitle } from '@/components/Modal/styles';
import { useEffect, useState } from 'react';

export default function Modal({
  opened = false,
  title,
  children,
  onClose,
}: {
  opened: boolean;
  title: string;
  children: React.ReactNode;
  onClose?: () => void;
}) {
  const [_opened, setOpened] = useState(opened);

  const handleClose = () => {
    setOpened(false);
    onClose && onClose();
  };

  useEffect(() => {
    setOpened(opened);
  }, [opened]);

  if (!_opened) return null;

  return (
    <SModalOverlay>
      <SModal>
        <SHeader>
          <STitle>{title}</STitle>
          <SCloseButton onClick={handleClose}>X</SCloseButton>
        </SHeader>
        {children}
      </SModal>
    </SModalOverlay>
  );
}
