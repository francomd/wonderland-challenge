import Account from '@/components/Account';
import ConnectKitButton from '@/components/ConnectButton';
import Transfer from '@/components/Transfer';

export default function Home() {
  return (
    <main>
      <h1>Wonderland Challenge</h1>
      <ConnectKitButton />
      <Account />
      <Transfer />
    </main>
  );
}
