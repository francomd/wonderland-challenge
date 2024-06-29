import { TNotificationState } from '@/providers/NotificationProvider/NotificationProvider';

export const NotificationActionTypes = {
  SET_NOTIFICATION: 'SET_NOTIFICATION',
  CLEAR_NOTIFICATION: 'CLEAR_NOTIFICATION',
} as const;

export type TNotificationPayload = Pick<
  TNotificationState,
  'type' | 'message' | 'timeout'
>;

export type TNotificationAction =
  | {
    type: 'SET_NOTIFICATION';
    payload: TNotificationPayload;
  }
  | {
    type: 'CLEAR_NOTIFICATION';
  };
