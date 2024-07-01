import Button from '@/components/Button';
import Input from '@/components/Input';
import { ErrorMessage } from '@/components/Input/styles';
import Label from '@/components/Label';
import { isAddress } from 'viem';

interface IAddressInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function AddressInput({ value, onChange }: IAddressInputProps) {
  const handleChangeAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const clearValue = () => {
    onChange('');
  };

  const isAddressInvalid = value && !isAddress(value);

  return (
    <Label htmlFor="targetAddress">
      Target wallet
      <div>
        <Input
          id="targetAddress"
          name="targetAddress"
          type="text"
          value={value}
          onChange={handleChangeAddress}
          aria-invalid={!!isAddressInvalid}
          aria-errormessage="targetAddress_error"
          data-error={!!isAddressInvalid}
        />
        <Button onClick={clearValue}>Clear</Button>
      </div>
      {isAddressInvalid && (
        <ErrorMessage id="targetAddress_error" role="alert">
          Invalid addreess
        </ErrorMessage>
      )}
    </Label>
  );
}
