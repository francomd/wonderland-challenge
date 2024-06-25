import Account from '@/app/Account';
import ConnectKitButton from '@/app/ConnectButton';
import Transfer from '@/app/Transfer';

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
