import { TToken } from '@/contracts';
import { TTokenData,
  TUserContext } from '@/providers/UserProvider/UserProvider';
import { Chain } from 'viem';

export const UserActionTypes = {
  SET_BALANCE_BY_CHAIN: 'SET_BALANCE_BY_CHAIN',
  SET_TOKEN_AMOUNT: 'SET_TOKEN_AMOUNT',
  SET_TOKEN_ALLOWANCE: 'SET_TOKEN_ALLOWANCE',
  RESET_STATE: 'RESET_STATE',
} as const;

type TActionType = typeof UserActionTypes;

export type TAction =
  | {
    type: TActionType['SET_BALANCE_BY_CHAIN'];
    payload: TUserContext['balanceByChain'];
  }
  | {
    type: TActionType['SET_TOKEN_AMOUNT'];
    payload: {
      chain: Chain;
      token: TToken;
      amount: TTokenData['amount'];
    };
  }
  | {
    type: TActionType['SET_TOKEN_ALLOWANCE'];
    payload: {
      chain: Chain;
      token: TToken;
      allowance: TTokenData['allowance'];
    };
  }
  | {
    type: TActionType['RESET_STATE'];
  };
