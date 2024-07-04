import AmountInput from '@/app/transfer/_components/AmountInput';
import TokenSelect from '@/app/transfer/_components/TokenSelect';
import { SMintButton } from '@/app/transfer/_components/styles';
import { useMint } from '@/app/transfer/_hooks/contractHooks';
import Button from '@/components/Button';
import Modal from '@/components/Modal';
import { CONTRACTS, TOKENS, TToken } from '@/contracts';
import { useSetNotification } from '@/providers/NotificationProvider/NotificationProvider';
import { useEffect, useState } from 'react';
import { parseUnits } from 'viem';

export default function MintButton() {
  const [amount, setAmount] = useState<string>('0');
  const [selectedToken, selectToken] = useState<TToken>(TOKENS.DAI);
  const [mintModalOpened, setMinModalOpened] = useState<boolean>(false);
  const setNotification = useSetNotification();

  const parsedAmount = parseUnits(amount, CONTRACTS[selectedToken].decimals);

  const {
    writeContract: mintFunction,
    isLoading: mintTxLoading,
    isPending: mintIsPending,
    txStatus: mintTxStatus,
  } = useMint(selectedToken, parsedAmount);

  const handleMint = async () => {
    mintFunction();
  };

  const openMintModal = () => {
    setMinModalOpened(true);
  };

  const closeMintModal = () => {
    setMinModalOpened(false);
  };

  useEffect(() => {
    if (mintTxStatus === 'success') {
      setMinModalOpened(false);
      setNotification({
        type: 'success',
        message: 'Minted successfully',
        timeout: 5000,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mintTxStatus]);

  return (
    <>
      <SMintButton onClick={openMintModal}>Mint</SMintButton>
      <Modal
        opened={mintModalOpened}
        title="Mint Coins"
        onClose={closeMintModal}
      >
        <AmountInput
          value={amount}
          defaultValue="0"
          onChange={setAmount}
          isInvalid={false}
        />
        <TokenSelect
          tokens={Object.keys(TOKENS) as TToken[]}
          selected={selectedToken}
          onSelect={selectToken}
        />
        <Button
          onClick={handleMint}
          disabled={mintTxLoading || mintIsPending || +amount == 0}
        >
          Mint
        </Button>
      </Modal>
    </>
  );
}
