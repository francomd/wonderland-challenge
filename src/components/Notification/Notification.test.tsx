import NotificationProvider from '@/providers/NotificationProvider';
import { TNotificationState } from '@/providers/NotificationProvider/NotificationProvider';
import { act, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Notification from './Notification';

function mockCloseTransitionTimer() {
  act(() => vi.advanceTimersByTime(300));
}

const initialState = {
  type: 'success',
  message: '',
  visible: false,
  timeout: 0,
};

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <NotificationProvider defaultValues={initialState as TNotificationState}>
      {children}
    </NotificationProvider>
  );
};

describe('Notification', () => {
  initialState.visible = true;
  initialState.message = 'Test message';
  render(<Notification />, { wrapper: Wrapper });

  it('should render the notification', () => {
    screen.getByTestId('notification');
  });

  it('should render the message', () => {
    screen.getByText('Test message');
  });

  it('should remove from DOM when closed', () => {
    vi.useFakeTimers();

    screen.getByTestId('notification-close').click();
    mockCloseTransitionTimer();
    expect(screen.queryByTestId('notification')).toBeNull();
  });
});
