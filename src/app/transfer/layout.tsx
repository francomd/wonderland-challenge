import Notification from '@/components/Notification';
import NotificationProvider from '@/providers/NotificationProvider';

export default function TransferLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <NotificationProvider>
      {children}
      <Notification />
    </NotificationProvider>
  );
}
