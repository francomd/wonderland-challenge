'use client';

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
    <div>
      <h1>Login</h1>
      <h3>You need to connect your wallet</h3>
    </div>
  );
}
