'use client';

import { CONTRACTS, TToken } from '@/contracts';
import { useUserBalanceByChainId } from '@/providers/UserProvider/hooks';
import { humanizeNumber } from '@/utils';
import { useAccount, useSwitchChain } from 'wagmi';

const Account = () => {
  const { address, isConnecting, isDisconnected, chain } = useAccount();
  const { switchChain, chains } = useSwitchChain();
  const balanceByChainId = useUserBalanceByChainId(chain?.id!);

  if (isConnecting) return <div>Connecting...</div>;
  if (isDisconnected) return <div>Disconnected</div>;

  return (
    <div>
      <h3>Account:</h3>
      <p>Connected Wallet: {address}</p>
      <p>Network: {chain?.name ?? 'unsupported'}</p>
      {!chain && (
        <button onClick={() => switchChain({ chainId: chains[0].id })}>
          Switch to {chains[0].name}
        </button>
      )}
      <h3>Balances:</h3>
      {balanceByChainId &&
        balanceByChainId.map((token) => (
          <div key={token.address}>
            <p>
              {token.name}:{' '}
              {humanizeNumber(token.amount,
                CONTRACTS[token.name as TToken].decimals)}{' '}
              / Allowance:{' '}
              {humanizeNumber(token.allowance,
                CONTRACTS[token.name as TToken].decimals)}
            </p>
          </div>
        ))}
    </div>
  );
};

export default Account;
