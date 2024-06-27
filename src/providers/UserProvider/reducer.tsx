import { initialState } from '@/providers/UserProvider/UserProvider';
import { TAction, UserActionTypes } from '@/providers/UserProvider/actions';
import { TUserContext } from '@/providers/UserProvider/types';
import { Reducer } from 'react';

export const reducer: Reducer<TUserContext, TAction> = (state, action) => {
  switch (action.type) {
    case UserActionTypes.SET_BALANCE_BY_CHAIN:
      return {
        ...state,
        balanceByChain: action.payload,
      };
    case UserActionTypes.SET_TOKEN_AMOUNT:
      return {
        ...state,
        balanceByChain: state.balanceByChain.map((chain) => {
          if (chain.chain === action.payload.chain.id) {
            return {
              ...chain,
              tokens: chain.tokens.map((token) => {
                if (token.name === action.payload.token) {
                  return {
                    ...token,
                    amount: action.payload.amount,
                  };
                }
                return token;
              }),
            };
          }
          return chain;
        }),
      };
    case UserActionTypes.SET_TOKEN_ALLOWANCE:
      return {
        ...state,
        balanceByChain: state.balanceByChain.map((chain) => {
          if (chain.chain === action.payload.chain.id) {
            return {
              ...chain,
              tokens: chain.tokens.map((token) => {
                if (token.name === action.payload.token) {
                  return {
                    ...token,
                    allowance: action.payload.allowance,
                  };
                }
                return token;
              }),
            };
          }
          return chain;
        }),
      };
    case UserActionTypes.RESET_STATE:
      return initialState;
    default:
      return state;
  }
};
