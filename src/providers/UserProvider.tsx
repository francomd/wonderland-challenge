'use client';
import { CONTRACTS, TChainId, TOKENS, TToken } from '@/contracts';
import { Reducer,
  createContext,
  useContext,
  useEffect,
  useReducer } from 'react';
import { Chain } from 'viem';
import { useAccount, useReadContracts } from 'wagmi';

type TTokenData = {
  address: string;
  name: string;
  amount: bigint;
  allowance: bigint;
};

type TUserContext = {

  /*
   * address: string;
   * currentChain: Chain;
   */
  balanceByChain: {
    chain: Chain['id'];
    tokens: TTokenData[];
  }[];
};

const UserActionTypes = {

  /*
   * SET_ADDRESS: 'SET_ADDRESS',
   * SET_CHAIN: 'SET_CHAIN',
   */
  SET_BALANCE_BY_CHAIN: 'SET_BALANCE_BY_CHAIN',

  // SET_TOKEN_DATA: 'SET_TOKEN_DATA',
  SET_TOKEN_ALLOWANCE: 'SET_TOKEN_ALLOWANCE',
  RESET_STATE: 'RESET_STATE',
} as const;

type TActionType = typeof UserActionTypes;

type TAction =

  /*
   * {
   *   type: TActionType['SET_ADDRESS'];
   *   payload: string;
   * } | {
   *   type: TActionType['SET_CHAIN'];
   *   payload: TUserContext['currentChain'];
   * } |
   */
  | {
    type: TActionType['SET_BALANCE_BY_CHAIN'];
    payload: TUserContext['balanceByChain'];
  }

  /*
   * {
   *   type: TActionType['SET_TOKEN_DATA'];
   *   payload: { chain: Chain, token: TToken, tokenData: TTokenData };
   * } |
   */
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

const reducer: Reducer<TUserContext, TAction> = (state, action) => {
  switch (action.type) {
    /*
     * case UserActionTypes.SET_ADDRESS:
     *   return {
     *     ...state,
     *     address: action.payload,
     *   };
     * case UserActionTypes.SET_CHAIN:
     *   return {
     *     ...state,
     *     currentNetwork: action.payload,
     *   };
     */
    case UserActionTypes.SET_BALANCE_BY_CHAIN:
      return {
        ...state,
        balanceByChain: action.payload,
      };

    /*
     * case UserActionTypes.SET_TOKEN_DATA:
     *   return {
     *     ...state,
     *     balanceByChain: state.balanceByChain.map((chain) => {
     *       if (chain.chain === action.payload.chain) {
     *         return {
     *           ...chain,
     *           tokens: chain.tokens.map((token) => {
     *             if (token.name === action.payload.token) {
     *               return {
     *                 ...token,
     *                 amount: action.payload.tokenData.amount,
     *               };
     *             }
     *             return token;
     *           }),
     *         };
     *       }
     *       return chain;
     *     }),
     *   };
     */
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

const initialState: TUserContext = {

  /*
   * address: '',
   * currentChain: chains[CHAIN_NAMES[0]],
   */
  balanceByChain: [],
};

const UserContext = createContext<{
  state: TUserContext;
  dispatch: React.Dispatch<TAction>;
}>({
  state: initialState,
  dispatch: () => {},
});

export default function UserProvider({ children }: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { address, chainId, chain } = useAccount();

  const contractsConfig = () => {
    const arrFunctionName = [
      {
        name: 'balanceOf',
        args: [address!],
      },
      {
        name: 'allowance',
        args: [address!, address!],
      },
    ];

    const configByFunctionName = arrFunctionName.map((fn) => {
      return Object.keys(CONTRACTS).map((token) => {
        return {
          address: CONTRACTS[token as TToken].address[chainId! as TChainId],
          abi: CONTRACTS[token as TToken].abi,
          functionName: fn.name,
          args: fn.args,
        };
      });
    });

    return configByFunctionName.flat();
  };

  const { data } = useReadContracts({ contracts: contractsConfig() });

  useEffect(() => {
    if (!chain || !chainId) return;
    if (!address) return;
    if (!data) return;

    dispatch({
      type: UserActionTypes.SET_BALANCE_BY_CHAIN,
      payload: [
        {
          chain: chain!.id,
          tokens: Object.keys(TOKENS).map((token, i) => {
            return {
              name: token,
              address: CONTRACTS[token as TToken].address[chainId! as TChainId],

              // data is an array of objects ordered by function name
              amount: data[i].result as bigint,
              allowance: data[i + 2].result as bigint,
            };
          }),
        },
      ],
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    address,
    chain,
    chainId,
    data,
  ]);

  const value = {
    state,
    dispatch,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserContextProvider');
  }
  return context;
};

// hooks
export const useUserBalanceByChainId = (chainId: Chain['id']): TTokenData[] => {
  const { state } = useUserContext();
  const res = state.balanceByChain.find((chain) => chain.chain === chainId);
  return res?.tokens ?? [];
};
