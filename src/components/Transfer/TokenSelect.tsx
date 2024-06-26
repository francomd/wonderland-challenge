import { TOKENS, TToken } from '@/contracts';

interface ITokenSelectProps {
  tokens: TToken[];
  selected: TToken;
  onSelect: (token: TToken) => void;
}

export default function TokenSelect({
  tokens,
  selected,
  onSelect,
}: ITokenSelectProps) {
  return (
    <label htmlFor="token">
      Select token
      <select
        id="token"
        name="token"
        value={selected}
        onChange={(e) => onSelect(e.target.value as TToken)}
      >
        {tokens.map((token) => (
          <option key={token} value={TOKENS[token]}>
            {token}
          </option>
        ))}
      </select>
    </label>
  );
}
