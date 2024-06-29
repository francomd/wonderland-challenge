type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? { type: Key }
    : { type: Key; payload: M[Key] };
};

export const NotificationActionTypes = {
  SET_NOTIFICATION: 'SET_NOTIFICATION',
  CLEAR_NOTIFICATION: 'CLEAR_NOTIFICATION',
} as const;

export type TNotificationActionTypes = typeof NotificationActionTypes;

export type TNotificationAction =
  ActionMap<TNotificationPayload>[keyof ActionMap<TNotificationPayload>];

export type TNotificationPayload = {
  [NotificationActionTypes.SET_NOTIFICATION]: {
    message: string;
    type: 'success' | 'error';
    timeout: number;
  };
  [NotificationActionTypes.CLEAR_NOTIFICATION]: undefined;
};
