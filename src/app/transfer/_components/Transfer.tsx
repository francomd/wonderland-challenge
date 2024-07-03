'use client';

import { CONTRACTS, TOKENS, TToken } from '@/contracts';
import { useSetNotification } from '@/providers/NotificationProvider/NotificationProvider';
import { useEffect, useState } from 'react';
import { isAddress, parseUnits } from 'viem';
import { useAccount } from 'wagmi';
import { useApproveContract,
  useReadAllowance,
  useReadBalanceOf,
  useTransferFromContract } from '../_hooks/contractHooks';
import AddressInput from './AddressInput';
import AmountInput from './AmountInput';
import ApproveButton from './ApproveButton';
import TokenSelect from './TokenSelect';
import TransferButton from './TransferButton';
import { SForm, SMainActions } from './styles';

const TOKENS_ARR = Object.keys(TOKENS) as TToken[];

export default function Transfer() {
  const [targetAddress, setTargetAddress] = useState<string>('');
  const [selectedToken, selectToken] = useState<TToken>(TOKENS.DAI);
  const [amount, setAmount] = useState<string>('0');
  const setNotification = useSetNotification();

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
    setNotification({
      type: 'success',
      message: 'Approved successfully',
      timeout: 5000,
    });
  };

  const handleApproveError = () => {
    setNotification({
      type: 'error',
      message: 'Approve failed',
      timeout: 5000,
    });
  };

  const handleTransfer = () => {
    transferContract();
  };

  const handreTransferSuccess = () => {
    readBalanceRefetch();
    readAllowanceRefetch();

    setNotification({
      type: 'success',
      message: 'Transfered successfully',
      timeout: 5000,
    });
  };

  const handleTransferError = () => {
    setNotification({
      type: 'error',
      message: 'Transfer failed',
      timeout: 5000,
    });
  };

  useEffect(() => {
    if (approveTxStatus === 'success') {
      handleApproveSuccess();
    }

    if (approveTxStatus === 'error') {
      handleApproveError();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [approveTxStatus]);

  useEffect(() => {
    if (transferTxStatus === 'success') {
      handreTransferSuccess();
    }

    if (transferTxStatus === 'error') {
      handleTransferError();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transferTxStatus]);

  // render
  return (
    <SForm>
      <div>
        <AddressInput
          value={targetAddress}
          onChange={handleChangeAddresInput}
          isInvalid={isAddressInvalid}
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
          isInvalid={isBalanceInsufficient}
          onChange={handleChangeAmount}
          defaultValue="0"
        />
      </div>
      <SMainActions>
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
      </SMainActions>
    </SForm>
  );
}
