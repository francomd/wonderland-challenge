import Button from '@/components/Button';
import Input from '@/components/Input';
import Label from '@/components/Label';

interface IAmountInputProps {
  value: string;
  defaultValue: string;
  onChange: (value: string) => void;
}

export default function AmountInput({
  value,
  defaultValue,
  onChange,
}: IAmountInputProps) {
  const handleChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const clearValue = () => {
    onChange(defaultValue);
  };

  const handleAmountKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ',') {
      e.preventDefault();
    }
    if (e.key === 'e' || e.key === 'E') {
      e.preventDefault();
    }
    if (e.key === '-' || e.key === '+') {
      e.preventDefault();
    }
    if (value === '0' && e.key === '0') {
      e.preventDefault();
    }
    if (value === '0' && /[1-9]/.test(e.key)) {
      e.preventDefault();
      onChange(e.key);
    }
    if (e.key === 'Backspace' && value.length === 1) {
      e.preventDefault();
      onChange('0');
    }
  };

  return (
    <Label htmlFor="amount">
      Insert amount
      <div>
        <Input
          id="amount"
          name="amount"
          type="number"
          placeholder="0"
          value={value}
          onChange={handleChangeAmount}
          pattern="^([0-9]*[.])?[0-9]*$"
          onKeyDown={handleAmountKeyDown}
          onPaste={(e) => e.preventDefault()}
        />
        <Button onClick={clearValue}>Clear</Button>
      </div>
    </Label>
  );
}
