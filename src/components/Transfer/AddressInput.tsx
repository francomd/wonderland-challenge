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

  const isValidAddress = !value || isAddress(value);

  return (
    <label htmlFor="targetAddress">
      Target wallet
      <input
        id="targetAddress"
        name="targetAddress"
        type="text"
        value={value}
        onChange={handleChangeAddress}
        aria-describedby="targetAddress_error"
      />
      <button onClick={clearValue}>Clear</button>
      {!isValidAddress && (
        <div>
          <span id="targetAddress_error" role="alert">
            Invalid addreess
          </span>
        </div>
      )}
    </label>
  );
}
