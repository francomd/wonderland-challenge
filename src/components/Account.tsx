'use client';

import { CONTRACTS } from '@/contracts';
import { useReadDaiAllowance,
  useReadDaiBalanceOf,
  useReadUsdcAllowance,
  useReadUsdcBalanceOf } from '@/contracts/ABI/generated';
import { humanizeNumber } from '@/utils';
import { useAccount, useSwitchChain } from 'wagmi';

const Account = () => {
  const { address, isConnecting, isDisconnected, chain } = useAccount();
  const { data: daiBalance } = useReadDaiBalanceOf({ args: [address!] });
  const { data: usdcBalance } = useReadUsdcBalanceOf({ args: [address!] });
  const { switchChain, chains } = useSwitchChain();

  const { data: daiAllowance = BigInt(0), refetch: refetchDAIAllowance } =
    useReadDaiAllowance({ args: [address!, address!] });

  const { data: usdcAllowance = BigInt(0), refetch: refetchUSDCAllowance } =
    useReadUsdcAllowance({ args: [address!, address!] });

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
      <p>
        DAI: {humanizeNumber(daiBalance)} / Allowance:{' '}
        {humanizeNumber(daiAllowance)}
      </p>
      <p>
        USDC: {humanizeNumber(usdcBalance, CONTRACTS.USDC.decimals)} /
        Allowance: {humanizeNumber(usdcAllowance, CONTRACTS.USDC.decimals)}
      </p>
    </div>
  );
};

export default Account;
