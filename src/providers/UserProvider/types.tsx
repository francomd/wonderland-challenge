import { Chain } from 'viem';

export type TTokenData = {
  address: string;
  name: string;
  amount: bigint;
  allowance: bigint;
};

export type TUserContext = {
  balanceByChain: {
    chain: Chain['id'];
    tokens: TTokenData[];
  }[];
};
