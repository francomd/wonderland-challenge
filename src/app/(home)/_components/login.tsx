'use client';

import { styled } from '@linaria/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAccount } from 'wagmi';

export default function Login() {
  const { isConnected } = useAccount();
  const router = useRouter();

  useEffect(() => {
    if (isConnected) {
      router.push('/transfer');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConnected]);

  return (
    <SCenterContent>
      <h1>
        <i>Fake</i> Login
      </h1>
      <h3>
        Connect your <b>wallet</b>
      </h3>
      <p>Click the button on the right side below</p>
    </SCenterContent>
  );
}

export const SCenterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  height: 100%;
  text-align: center;
`;
