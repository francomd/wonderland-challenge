import ConnectButton from '@/components/ConnectButton';
import { SHeader, SHeaderText } from '@/components/Header/styles';

export default function Header() {
  return (
    <SHeader>
      <SHeaderText>
        <span>Wonderland Challenge</span>
        <small>By @0xFrann</small>
      </SHeaderText>
      <ConnectButton />
    </SHeader>
  );
}
