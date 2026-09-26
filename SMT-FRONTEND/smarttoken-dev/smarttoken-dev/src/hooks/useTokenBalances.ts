import { useEffect, useMemo, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { isAddress } from 'ethers/lib/utils';
import multicall from 'src/utils/multicall';
import erc20Abi from 'src/updatedContracts/libs/IBEP20.sol/IBEP20.json';
import {
  BIG_ZERO,
  currentNetwork,
  getContractAddress,
  getMulticallContract,
  simpleProvider,
  ZERO_ADDRESS
} from 'src/utils';
import { constants } from 'ethers';

type UseTokenBalanceState = {
  balances: any;
  fetchStatus: FetchStatus;
};

export enum FetchStatus {
  NOT_FETCHED = 'not-fetched',
  SUCCESS = 'success',
  FAILED = 'failed',
  LOADING = 'loading'
}

const useTokenBalances = () => {
  const { NOT_FETCHED, SUCCESS, FAILED, LOADING } = FetchStatus;
  const { account } = useWeb3React();
  const chainId = currentNetwork;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const tokens = [
    getContractAddress('SmartTokenCash', chainId),
    getContractAddress('SmartToken', chainId),
    getContractAddress('SMT_BNB_LP', chainId),
    getContractAddress('BUSDToken', chainId)
  ];

  const validatedTokens: any[] = useMemo(
    () =>
      tokens?.filter(
        (t) => isAddress(t) !== false && t !== constants.AddressZero
      ) ?? [],
    [tokens]
  );

  const [balanceState, setBalanceState] = useState<UseTokenBalanceState>({
    balances: {},
    fetchStatus: NOT_FETCHED
  });

  useEffect(() => {
    const fetchBalance = async () => {
      if (validatedTokens && validatedTokens.length) {
        const calls = validatedTokens.map((address) => ({
          address: address,
          name: 'balanceOf',
          params: [account]
        }));
        const multicallAddress = getContractAddress('Multicall', chainId);
        if (!multicallAddress) {
          setBalanceState((prev) => ({
            ...prev,
            chainId: chainId,
            fetchStatus: FAILED
          }));
          return;
        }
        const multicallContract = getMulticallContract(chainId, simpleProvider);

        multicall(multicallContract, erc20Abi.abi, calls)
          .then((res: any[]) => {
            let tempBalances = {};
            for (let i = 0; i < validatedTokens.length; i++) {
              tempBalances[validatedTokens[i]?.toLowerCase()] = res[i]?.[0];
            }

            setBalanceState((prev) => ({
              ...prev,
              balances: tempBalances,
              fetchStatus: SUCCESS
            }));
          })
          .catch((e) => {
            setBalanceState((prev) => ({
              ...prev,
              fetchStatus: FAILED
            }));
          });
      }
    };

    if (account && chainId) {
      setBalanceState((prev) => ({
        ...prev,
        chainId,
        fetchStatus: LOADING
      }));
      fetchBalance();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account, chainId]);

  return balanceState;
};

export function useCurrencyBalances(
  currencies?: (string | undefined)[]
): any[] {
  const { balances: tokenBalances } = useTokenBalances();
  const { balance: ethBalance } = useGetEthBalance();
  return useMemo(
    () =>
      currencies?.map((currency) => {
        if (!currency) return undefined;
        if (currency !== ZERO_ADDRESS)
          return tokenBalances[currency?.toLowerCase()];
        if (currency === ZERO_ADDRESS) return ethBalance;
        return undefined;
      }) ?? [],
    [currencies, ethBalance, tokenBalances]
  );
}

export function useCurrencyBalance(currency?: string) {
  return useCurrencyBalances([currency])[0];
}

export const useGetEthBalance = () => {
  const [balance, setBalance] = useState(BIG_ZERO);
  const { account } = useWeb3React();

  useEffect(() => {
    const fetchBalance = async () => {
      const provider = simpleProvider;
      const walletBalance = await provider.getBalance(account);
      setBalance(walletBalance);
    };

    if (account) {
      fetchBalance();
    }
  }, [account, setBalance]);

  return { balance };
};

export default useTokenBalances;
