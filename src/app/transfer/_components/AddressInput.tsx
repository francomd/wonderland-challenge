import Button from '@/components/Button/Button';
import Input from '@/components/Input/Input';
import Label from '@/components/Label/Label';
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
          aria-describedby="targetAddress_error"
        />
        <Button onClick={clearValue}>Clear</Button>
      </div>
      {isAddressInvalid && (
        <div>
          <span id="targetAddress_error" role="alert">
            Invalid addreess
          </span>
        </div>
      )}
    </Label>
  );
}
