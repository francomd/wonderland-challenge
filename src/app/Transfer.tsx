'use client';

import { CONTRACTS } from '@/contracts';
import { useReadDaiAllowance,
  useReadUsdcAllowance,
  useWriteDaiApprove,
  useWriteDaiTransferFrom,
  useWriteUsdcApprove,
  useWriteUsdcTransferFrom } from '@/contracts/ABI/generated';
import { humanizeNumber } from '@/utils';
import { useState } from 'react';
import { isAddress, parseUnits } from 'viem';
import { useAccount } from 'wagmi';

const TOKENS = {
  DAI: 'DAI',
  USDC: 'USDC',
} as const;
type TToken = (typeof TOKENS)[keyof typeof TOKENS];

const TRANS_STATUS = {
  IDLE: 'IDLE',
  APPROVED: 'APPROVED',
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED',
} as const;
type TTransStatus = (typeof TRANS_STATUS)[keyof typeof TRANS_STATUS];

export default function Transfer() {
  const { address } = useAccount();
  const [targetAddress, setTargetAddress] = useState<string>('');
  const [amount, setAmount] = useState<string>('0');
  const [selectedToken, selectToken] = useState<TToken>(TOKENS.DAI);
  const [status, setStatus] = useState<TTransStatus>(TRANS_STATUS.IDLE);

  const { data: daiAllowance = 0, refetch: refetchDAIAllowance } =
    useReadDaiAllowance({ args: [address!, address!] });

  const { data: usdcAllowance = 0, refetch: refetchUSDCAllowance } =
    useReadUsdcAllowance({ args: [address!, address!] });

  const { writeContract: daiApprove, status: daiApproveStatus } =
    useWriteDaiApprove();

  const { writeContract: usdcApprove, status: usdcApproveStatus } =
    useWriteUsdcApprove();

  const { writeContract: daiTransfer, status: daiTransferStatus } =
    useWriteDaiTransferFrom();

  const { writeContract: usdcTransfer, status: usdcTransferStatus } =
    useWriteUsdcTransferFrom();

  const checkIsApprobed = () => {
    if (selectedToken === TOKENS.DAI) {
      return daiAllowance >= parseUnits(amount, CONTRACTS.DAI.decimals);
    } else {
      return usdcAllowance >= parseUnits(amount, CONTRACTS.USDC.decimals);
    }
  };

  const clearTargetAddress = () => {
    setTargetAddress('');
  };

  const approve = () => {
    if (checkIsApprobed()) {
      setStatus(TRANS_STATUS.APPROVED);
    } else {
      usdcApprove({ args: [address!, parseUnits(amount, CONTRACTS.USDC.decimals)] },
        {
          onSuccess: () => {
            refetchUSDCAllowance();
          },
        });
    }
  };

  const transfer = () => {
    setStatus(TRANS_STATUS.PENDING);

    usdcTransfer({
      args: [
        address!,
        targetAddress as `0x${string}`,
        parseUnits(amount, CONTRACTS.USDC.decimals),
      ],
    },
    {
      onSuccess: () => {
        setStatus(TRANS_STATUS.SUCCESS);
      },
      onError: () => {
        setStatus(TRANS_STATUS.FAILED);
      },
    });
  };

  const handleAmountKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ',') {
      e.preventDefault();
    }
    if (e.key === '0' && amount === '0') {
      e.preventDefault();
    }
    if (amount === '0' && /[0-9]/.test(e.key)) {
      setAmount(e.key);
      e.preventDefault();
    }
    if (e.key === 'Backspace' && amount.length === 1) {
      setAmount('0');
      e.preventDefault();
    }
  };

  return (
    <div>
      <h2>Transfer:</h2>
      <label htmlFor="targetAddress">
        Target wallet
        <input
          type="text"
          name="targetAddress"
          value={targetAddress}
          onChange={(e) => setTargetAddress(e.target.value)}
        />
      </label>
      <button onClick={clearTargetAddress}>Clear</button>
      <label htmlFor="token">
        Select token
        <select
          name="token"
          value={selectedToken}
          onChange={(e) => selectToken(e.target.value as TToken)}
        >
          <option value={TOKENS.DAI}>DAI</option>
          <option value={TOKENS.USDC}>USDC</option>
        </select>
        <p>
          Current allowance:{' '}
          {selectedToken === TOKENS.DAI
            ? humanizeNumber(daiAllowance)
            : humanizeNumber(usdcAllowance, CONTRACTS.USDC.decimals)}
        </p>
      </label>
      <label htmlFor="amount">
        Amount
        <input
          type="number"
          pattern="/^\d+(\.\d{1,2})?$/"
          value={amount}
          placeholder="0"
          onChange={(e) => setAmount(e.target.value)}
          onKeyDown={handleAmountKeyDown}
          onPaste={(e) => e.preventDefault()}
        />
        {!isAddress(targetAddress) && <span>Invalid addreess</span>}
      </label>
      <button disabled={checkIsApprobed()} onClick={approve}>
        Approve
      </button>
      <button
        disabled={!checkIsApprobed() || !isAddress(targetAddress)}
        onClick={transfer}
      >
        Transfer
      </button>
      <p>Status: {status}</p>
    </div>
  );
}
