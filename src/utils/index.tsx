import { formatUnits } from 'viem';

export const humanizeNumber = (
  balance: bigint = BigInt(0),
  tokenDecimals: number = 18,
  decimals: number = 2,
) => {
  const formatedNumber = formatUnits(balance, tokenDecimals);
  return Number(formatedNumber.slice(0, formatedNumber.indexOf('.') + decimals + 1));
};
