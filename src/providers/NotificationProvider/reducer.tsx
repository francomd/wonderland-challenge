import { NotificationActionTypes,
  TNotificationAction } from '@/providers/NotificationProvider/actions';
import { Reducer } from 'react';
import { TNotificationState, initialState } from './NotificationProvider';

export const reducer: Reducer<TNotificationState, TNotificationAction> = (state,
  action) => {
  switch (action.type) {
    case NotificationActionTypes.SET_NOTIFICATION:
      return {
        ...state,
        ...action.payload,
        visible: true,
      };
    case NotificationActionTypes.CLEAR_NOTIFICATION:
      return initialState;
    default:
      return state;
  }
};
