import { isAddress } from 'viem';

interface IAddressInputProps {
  value: string;
  onChange: (value: string) => void;
  inputName: string;
  inputLabel: string;
}

export default function AddressInput({
  value,
  onChange,
  inputName,
  inputLabel,
}: IAddressInputProps) {
  const handleChangeAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const clearValue = () => {
    onChange('');
  };

  const isValidAddress = !value || isAddress(value);

  return (
    <label htmlFor={inputName}>
      {inputLabel}
      <input
        type="text"
        name={inputName}
        value={value}
        onChange={handleChangeAddress}
        aria-describedby={`${inputName}_error`}
      />
      <button onClick={clearValue}>Clear</button>
      {!isValidAddress && (
        <div>
          <span id={`${inputName}_error`} role="alert">
            Invalid addreess
          </span>
        </div>
      )}
    </label>
  );
}
