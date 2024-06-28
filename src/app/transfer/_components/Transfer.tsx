'use client';

import { CONTRACTS, TOKENS, TToken } from '@/contracts';
import { useEffect, useState } from 'react';
import { isAddress, parseUnits } from 'viem';
import { useAccount } from 'wagmi';
import { useApproveContract,
  useReadAllowance,
  useReadBalanceOf,
  useTransferFromContract } from '../_hooks/contractHooks';
import { AlertMessage, useAlertMessage } from '../_hooks/useAlertMessage';
import AddressInput from './AddressInput';
import AmountInput from './AmountInput';
import ApproveButton from './ApproveButton';
import TokenSelect from './TokenSelect';
import TransferButton from './TransferButton';

const TOKENS_ARR = Object.keys(TOKENS) as TToken[];

export default function Transfer() {
  const [targetAddress, setTargetAddress] = useState<string>('');
  const [selectedToken, selectToken] = useState<TToken>(TOKENS.DAI);
  const [amount, setAmount] = useState<string>('0');
  const { messages, dispatchMessage } = useAlertMessage();

  // blockchain hooks
  const { chain } = useAccount();
  const {
    data: balance = BigInt(0),
    isPending: readBalanceIsPending,
    refetch: readBalanceRefetch,
  } = useReadBalanceOf(selectedToken);

  const {
    data: allowance = BigInt(0),
    isPending: readAllowanceIsPending,
    refetch: readAllowanceRefetch,
  } = useReadAllowance(selectedToken);

  const {
    writeContract: approveContract,
    isLoading: approveTxLoading,
    isPending: approveIsPending,
    txStatus: approveTxStatus,
  } = useApproveContract(selectedToken, BigInt(0));

  const {
    writeContract: transferContract,
    isLoading: transferTxLoading,
    isPending: transferIsPending,
    txStatus: transferTxStatus,
  } = useTransferFromContract(
    selectedToken, BigInt(0), targetAddress,
  );

  // validations
  const parsedAmount = parseUnits(amount, CONTRACTS[selectedToken].decimals);
  const isWrongNetwork = !chain;
  const isLoading = readBalanceIsPending || readAllowanceIsPending;
  const isAddressInvalid = !!targetAddress && !isAddress(targetAddress);
  const anyContractIsPending = approveIsPending || transferIsPending;
  const isBalanceInsufficient = balance < parsedAmount;
  const isAmountInvalid = !amount || amount === '0' || isBalanceInsufficient;
  const isApproved = allowance >= parsedAmount;
  const isAllowanceInvalid = allowance < parsedAmount;
  const isButtonDisabled =
    isLoading ||
    anyContractIsPending ||
    isAddressInvalid ||
    isAmountInvalid ||
    isWrongNetwork;
  const isApproveDisabled = isButtonDisabled || approveTxStatus === 'pending';
  const isTransferDisabled =
    isButtonDisabled || transferTxStatus === 'pending' || isAllowanceInvalid;

  // handlers
  const handleChangeAddresInput = (value: string) => {
    setTargetAddress(value);
  };

  const handleSelectToken = (value: TToken) => {
    selectToken(value);
  };

  const handleChangeAmount = (value: string) => {
    setAmount(value);
  };

  const handleApprove = () => {
    approveContract();
  };

  const handleApproveSuccess = () => {
    // dispatchNotification
  };

  const handleApproveError = () => {
    // dispatchNotification({ approved: false });
  };

  const handleTransfer = () => {
    transferContract();
  };

  const handreTransferSuccess = () => {
    // dispatchNotification({ transfered: true });
  };

  const handleTransferError = () => {
    // dispatchNotification({ transfered: false });
  };

  const handleTransferSuccess = () => {
    // dispatchNotification({ transfered: true });
    readBalanceRefetch();
    readAllowanceRefetch();
  };

  // side effects
  useEffect(() => {
    dispatchMessage({ invalidAddress: isAddressInvalid });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetAddress]);

  useEffect(() => {
    dispatchMessage({ insufficientBalance: isBalanceInsufficient });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amount, balance]);

  useEffect(() => {
    if (approveTxStatus === 'success') {
      handleApproveSuccess();
    }

    if (approveTxStatus === 'error') {
      handleApproveError();
    }
  }, [approveTxStatus]);

  useEffect(() => {
    if (transferTxStatus === 'success') {
      handreTransferSuccess();
    }

    if (transferTxStatus === 'error') {
      handleTransferError();
    }
  }, [transferTxStatus]);

  // render
  return (
    <div>
      <AlertMessage messages={messages} />
      <div>
        <AddressInput
          value={targetAddress}
          onChange={handleChangeAddresInput}
        />
      </div>
      <div>
        <TokenSelect
          tokens={TOKENS_ARR}
          selected={selectedToken}
          onSelect={handleSelectToken}
        />
      </div>
      <div>
        <AmountInput
          value={amount}
          onChange={handleChangeAmount}
          defaultValue="0"
        />
      </div>
      <ApproveButton
        loading={approveTxLoading}
        confirming={approveIsPending}
        approved={isApproved}
        disabled={isApproveDisabled}
        onClick={handleApprove}
      />
      <TransferButton
        loading={transferTxLoading}
        confirming={transferIsPending}
        disabled={isTransferDisabled}
        onClick={handleTransfer}
      />
    </div>
  );
}
