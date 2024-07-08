import ConnectButton from '@/components/ConnectButton';
import { SHeader, SHeaderText, SLink } from '@/components/Header/styles';
import Image from 'next/image';

export default function Header() {
  return (
    <SHeader>
      <SHeaderText>
        <SLink
          href="https://github.com/francomd/wonderland-challenge"
          target="_blank"
        >
          <Image
            src="/assets/github.svg"
            width={16}
            height={16}
            alt="Github icon"
          />
          <span>Wonderland Challenge</span>
        </SLink>
        <small>By @0xFrann</small>
      </SHeaderText>
      <ConnectButton />
    </SHeader>
  );
}
