'use client';

import { useNotificationContext } from '@/providers/NotificationProvider/NotificationProvider';
import { useEffect } from 'react';

export default function Notification() {
  const { state, dispatchNotification } = useNotificationContext();
  const { type, message, visible, timeout } = state;

  const clearNotification = () => {
    dispatchNotification({ type: 'CLEAR_NOTIFICATION' });
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

  const className = `notification ${type} ${visible ? 'show' : ''}`;

  return (
    <div className={className}>
      <button type="button" className="close" onClick={clearNotification} />
      {message}
    </div>
  );
}
