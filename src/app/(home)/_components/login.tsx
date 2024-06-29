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
  }, [isConnected]);

  return (
    <SCenterContent>
      <h1>Login</h1>
      <h3>Connect your wallet</h3>
      <p>Click the button on the right side below</p>
    </SCenterContent>
  );
}

export const SCenterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
