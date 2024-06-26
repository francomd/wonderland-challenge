'use client';

import AddressInput from '@/components/Transfer/AddressInput';
import AmountInput from '@/components/Transfer/AmountInput';
import ApproveButton from '@/components/Transfer/ApproveButton';
import { MessagesAlert, useMessages } from '@/components/Transfer/Messages';
import TokenSelect from '@/components/Transfer/TokenSelect';
import TransferButton from '@/components/Transfer/TransferButton';
import { useReadAllowance,
  useReadBalanceOf } from '@/components/Transfer/contractHooks';
import { CONTRACTS, TOKENS, TToken } from '@/contracts';
import { useEffect, useState } from 'react';
import { isAddress, parseUnits } from 'viem';

const TOKENS_ARR = Object.keys(TOKENS) as TToken[];

export default function Transfer() {
  const [targetAddress, setTargetAddress] = useState<string>('');
  const [selectedToken, selectToken] = useState<TToken>(TOKENS.DAI);
  const [amount, setAmount] = useState<string>('0');
  const { messages, dispatchMessage } = useMessages();

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

  const handleChangeAddresInput = (value: string) => {
    setTargetAddress(value);
  };

  const handleSelectToken = (value: TToken) => {
    selectToken(value);
  };

  const handleChangeAmount = (value: string) => {
    setAmount(value);
  };

  const handleTransferSuccess = () => {
    dispatchMessage({ transfered: true });
    readBalanceRefetch();
    readAllowanceRefetch();
  };

  const parsedAmount = parseUnits(amount, CONTRACTS[selectedToken].decimals);

  const isLoading = readBalanceIsPending || readAllowanceIsPending;
  const isAddressValid = !targetAddress || isAddress(targetAddress);
  const isTxDisabled =
    !isAddressValid || amount === '0' || !amount || balance <= parsedAmount;
  const isTransferDisabled =
    isTxDisabled || !allowance || allowance < parsedAmount;

  useEffect(() => {
    dispatchMessage({ invalidAddress: !isAddressValid });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetAddress]);

  useEffect(() => {
    const isBalanceInsufficient = balance < parsedAmount;
    dispatchMessage({ insufficientBalance: isBalanceInsufficient });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amount, balance]);

  return (
    <div>
      <h2>Transfer:</h2>
      <MessagesAlert messages={messages} />
      <div>
        <AddressInput
          inputName="targetAddress"
          inputLabel="Target wallet"
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
          inputName="amount"
          inputLabel="Insert amount"
          defaultValue="0"
        />
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <ApproveButton
            token={selectedToken}
            amount={parsedAmount}
            disabled={isTxDisabled}
            onError={() => alert('Error at approve')}
            onSuccess={() => dispatchMessage({ approved: true })}
          />
          <TransferButton
            token={selectedToken}
            amount={parsedAmount}
            toAddress={targetAddress}
            disabled={isTransferDisabled}
            onError={() => alert('Error at transfer')}
            onSuccess={handleTransferSuccess}
          />
        </>
      )}
    </div>
  );
}
