'use client';

import { CONTRACTS } from '@/contracts';
import { useReadDaiAllowance,
  useReadDaiBalanceOf,
  useReadUsdcAllowance,
  useReadUsdcBalanceOf } from '@/contracts/ABI/generated';
import { humanizeNumber } from '@/utils';
import Image from 'next/image';
import { useAccount } from 'wagmi';
import MintButton from './MintButton';
import { SBalance, SCard, SCoinName } from './styles';

const Balance = () => {
  const { address, chain } = useAccount();
  const { data: daiBalance } = useReadDaiBalanceOf({ args: [address!] });
  const { data: usdcBalance } = useReadUsdcBalanceOf({ args: [address!] });

  const { data: daiAllowance = BigInt(0), refetch: refetchDAIAllowance } =
    useReadDaiAllowance({ args: [address!, address!] });

  const { data: usdcAllowance = BigInt(0), refetch: refetchUSDCAllowance } =
    useReadUsdcAllowance({ args: [address!, address!] });

  return (
    <SBalance>
      <SCard>
        <SCoinName>
          <Image
            src="/assets/coins/dai.svg"
            width={24}
            height={24}
            alt="DAI ICON"
          />
          <span>DAI</span>
        </SCoinName>
        <h4>{humanizeNumber(daiBalance)}</h4>
        <small>Allowance: {humanizeNumber(daiAllowance)}</small>
      </SCard>
      <SCard>
        <SCoinName>
          <Image
            src="/assets/coins/usdc.svg"
            width={24}
            height={24}
            alt="DAI ICON"
          />
          <span>USDC</span>
        </SCoinName>
        <h4>{humanizeNumber(usdcBalance, CONTRACTS.USDC.decimals)}</h4>
        <small>
          Allowance: {humanizeNumber(usdcAllowance, CONTRACTS.USDC.decimals)}
        </small>
      </SCard>
      <MintButton />
    </SBalance>
  );
};

export default Balance;
