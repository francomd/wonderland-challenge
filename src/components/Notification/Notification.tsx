'use client';

import { SCloseButton, SNotification } from '@/components/Notification/styles';
import { useNotificationContext } from '@/providers/NotificationProvider/NotificationProvider';
import { NotificationActionTypes } from '@/providers/NotificationProvider/actions';
import { useEffect, useState } from 'react';

export default function Notification() {
  const { state, dispatchNotification } = useNotificationContext();
  const { type, message, visible, timeout } = state;
  const [isShown, setIsShown] = useState(visible);

  const clearNotification = () => {
    setIsShown(false);

    setTimeout(() => {
      dispatchNotification({ type: NotificationActionTypes.CLEAR_NOTIFICATION });
    }, 300);
  };

  useEffect(() => {
    setIsShown(visible);

    let timeoutId: NodeJS.Timeout;
    if (visible && timeout > 0) {
      timeoutId = setTimeout(() => {
        clearNotification();
      }, timeout);
    }

    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  if (!visible) return null;

  return (
    <SNotification show={isShown} type={type} data-testid="notification">
      {message}
      <SCloseButton
        onClick={clearNotification}
        data-testid="notification-close"
      >
        X
      </SCloseButton>
    </SNotification>
  );
}
