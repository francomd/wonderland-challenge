'use client';

import { useNotificationContext } from '@/providers/NotificationProvider/NotificationProvider';
import { NotificationActionTypes } from '@/providers/NotificationProvider/actions';
import { styled } from '@linaria/react';
import { useEffect } from 'react';

export default function Notification() {
  const { state, dispatchNotification } = useNotificationContext();
  const { type, message, visible, timeout } = state;

  const clearNotification = () => {
    dispatchNotification({ type: NotificationActionTypes.CLEAR_NOTIFICATION });
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (visible && timeout > 0) {
      timeoutId = setTimeout(() => {
        clearNotification();
      }, timeout);
    }

    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return (
    <SNotification show={visible}>
      <button type="button" className="close" onClick={clearNotification} />
      {message}
    </SNotification>
  );
}

const SNotification = styled.div<{ show: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem;
  background: white;
  color: #000;
  display: ${(props) => (props.show ? 'block' : 'none')};
`;
