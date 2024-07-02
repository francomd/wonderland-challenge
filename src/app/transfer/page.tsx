import Balance from './_components/Balance';
import Transfer from './_components/Transfer';
import { STransferPage } from './styles';

export default function TransferPage() {
  return (
    <STransferPage>
      <h1>Transfer</h1>
      <Balance />
      <Transfer />
    </STransferPage>
  );
}
