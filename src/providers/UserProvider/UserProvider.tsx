'use client';
import { CONTRACTS, TChainId, TToken } from '@/contracts';
import { useReadDaiAllowance,
  useReadDaiBalanceOf,
  useReadUsdcAllowance,
  useReadUsdcBalanceOf } from '@/contracts/ABI/generated';
import { TAction, UserActionTypes } from '@/providers/UserProvider/actions';
import { reducer } from '@/providers/UserProvider/reducer';
import { TUserContext } from '@/providers/UserProvider/types';
import { createContext, useEffect, useReducer, useState } from 'react';
import { useAccount } from 'wagmi';

// default state
export const initialState: TUserContext = { balanceByChain: [] };

// create the context
export const UserContext = createContext<{
  state: TUserContext;
  dispatch: React.Dispatch<TAction>;
}>({
  state: initialState,
  dispatch: () => {},
});

// UserProvider component
export default function UserProvider({ children }: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { address, chainId, chain } = useAccount();
  const [initialized, setInitialized] = useState(false);

  /*
   * Read balance and allowance of the Tokens (DAI, USD):
   * Multiple calls instead of just one useReadContracts will improve re-fetching
   * TanStack Query will cache the results and re-fetch each state in isolation
   */
  const { data: daiBalance, refetch: refetchDAIBalance } = useReadDaiBalanceOf({ args: [address!] });
  const { data: usdcBalance, refetch: refetchUSDCBalance } =
    useReadUsdcBalanceOf({ args: [address!] });
  const { data: daiAllowance = BigInt(0), refetch: refetchDAIAllowance } =
    useReadDaiAllowance({ args: [address!, address!] });
  const { data: usdcAllowance = BigInt(0), refetch: refetchUSDCAllowance } =
    useReadUsdcAllowance({ args: [address!, address!] });

  const balanceByToken = {
    DAI: {
      amount: daiBalance!,
      allowance: daiAllowance,
    },
    USDC: {
      amount: usdcBalance!,
      allowance: usdcAllowance,
    },
  };

  // update the state once all the data is fetched
  useEffect(() => {
    if (initialized) return;
    if (!chainId) return;
    if (!address) return;
    if (!daiBalance || !usdcBalance || !daiAllowance || !usdcAllowance) return;

    dispatch({
      type: UserActionTypes.SET_BALANCE_BY_CHAIN,
      payload: [
        {
          chain: chainId,
          tokens: (Object.keys(CONTRACTS) as TToken[]).map((token: TToken, i) => {
            return {
              name: token,
              address: CONTRACTS[token].address[chainId! as TChainId],

              // data is an array of objects ordered by function name
              amount: balanceByToken[token].amount,
              allowance: balanceByToken[token].allowance,
            };
          }),
        },
      ],
    });
    setInitialized(true);
    return () => setInitialized(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    address,
    chainId,
    daiBalance,
    usdcBalance,
    daiAllowance,
    usdcAllowance,
  ]);

  // update each token amount and allowance
  useEffect(() => {
    if (!initialized) return;

    dispatch({
      type: 'SET_TOKEN_AMOUNT',
      payload: {
        chain: chain!,
        token: 'DAI',
        amount: daiBalance!,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialized, daiBalance]);

  useEffect(() => {
    if (!initialized) return;

    dispatch({
      type: 'SET_TOKEN_ALLOWANCE',
      payload: {
        chain: chain!,
        token: 'DAI',
        allowance: daiAllowance,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialized, daiAllowance]);

  useEffect(() => {
    if (!initialized) return;

    dispatch({
      type: 'SET_TOKEN_AMOUNT',
      payload: {
        chain: chain!,
        token: 'USDC',
        amount: usdcBalance!,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialized, usdcBalance]);

  useEffect(() => {
    if (!initialized) return;

    dispatch({
      type: 'SET_TOKEN_ALLOWANCE',
      payload: {
        chain: chain!,
        token: 'USDC',
        allowance: usdcAllowance,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialized, usdcAllowance]);

  const value = {
    state,
    dispatch,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
