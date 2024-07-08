'use client';

import { TNotificationAction,
  TNotificationPayload } from '@/providers/NotificationProvider/actions';
import { reducer } from '@/providers/NotificationProvider/reducer';
import { createContext, useContext, useReducer } from 'react';

export type TNotificationState = {
  type: 'success' | 'error' | 'loading';
  message: string;
  visible: boolean;
  timeout: number;
};

export interface TNotificationContext {
  state: TNotificationState;
  dispatchNotification: React.Dispatch<TNotificationAction>;
}

export const initialState: TNotificationState = {
  type: 'success',
  message: '',
  visible: false,
  timeout: 0,
};

const NotificationContext = createContext<TNotificationContext>({
  state: initialState,
  dispatchNotification: () => {},
});

export default function NotificationProvider({
  children,
  defaultValues = initialState,
}: {
  children: React.ReactNode;
  defaultValues?: TNotificationState;
}) {
  const [state, dispatch] = useReducer(reducer, defaultValues);

  return (
    <NotificationContext.Provider
      value={{
        state,
        dispatchNotification: dispatch,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export const useNotificationContext = () => {
  const context = useContext(NotificationContext);

  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }

  return context;
};

export const useSetNotification = () => {
  const { dispatchNotification } = useNotificationContext();

  return (payload: TNotificationPayload) => {
    dispatchNotification({
      type: 'SET_NOTIFICATION',
      payload,
    });
  };
};
