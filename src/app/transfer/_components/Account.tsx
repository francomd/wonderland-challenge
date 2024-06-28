'use client';

import { CONTRACTS } from '@/contracts';
import { useReadDaiAllowance,
  useReadDaiBalanceOf,
  useReadUsdcAllowance,
  useReadUsdcBalanceOf } from '@/contracts/ABI/generated';
import { humanizeNumber } from '@/utils';
import { useAccount } from 'wagmi';

const Account = () => {
  const { address, chain } = useAccount();
  const { data: daiBalance } = useReadDaiBalanceOf({ args: [address!] });
  const { data: usdcBalance } = useReadUsdcBalanceOf({ args: [address!] });

  const { data: daiAllowance = BigInt(0), refetch: refetchDAIAllowance } =
    useReadDaiAllowance({ args: [address!, address!] });

  const { data: usdcAllowance = BigInt(0), refetch: refetchUSDCAllowance } =
    useReadUsdcAllowance({ args: [address!, address!] });

  return (
    <div>
      <h4>Account:</h4>
      <p>Connected Wallet: {address}</p>
      <p>Network: {chain?.name ?? 'unsupported'}</p>
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
