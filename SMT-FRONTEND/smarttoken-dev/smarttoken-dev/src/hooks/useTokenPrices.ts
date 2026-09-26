import { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { formatEther, parseEther } from 'ethers/lib/utils';
import multicall from '../utils/multicall';
import {
  getContractAddress,
  getMulticallContract,
  simpleProvider
} from 'src/utils';

type UserTokenPriceState = {
  prices: any;
  fetchStatus: FetchStatus;
};

export enum FetchStatus {
  NOT_FETCHED = 'not-fetched',
  SUCCESS = 'success',
  FAILED = 'failed',
  LOADING = 'loading'
}

const useTokenPrices = () => {
  const { NOT_FETCHED, SUCCESS, FAILED, LOADING } = FetchStatus;
  const { account, chainId } = useWeb3React();

  const smtAddress = getContractAddress('SmartToken', chainId);
  // const smtcAddress = getContractAddress('SmartTokenCash', chainId);
  const busdAddress = getContractAddress('BUSDToken', chainId);
  const wbnbAddress = getContractAddress('WBNBToken', chainId);
  const routerAddress = getContractAddress('Router', chainId);

  const [priceState, setPriceState] = useState<UserTokenPriceState>({
    prices: {},
    fetchStatus: NOT_FETCHED
  });

  useEffect(() => {
    const fetchBalance = async () => {
      if (smtAddress) {
        const calls = [
          {
            address: routerAddress,
            name: 'getAmountsOut',
            params: [parseEther('1'), [smtAddress, wbnbAddress, busdAddress]]
          },
          {
            address: routerAddress,
            name: 'getAmountsOut',
            params: [parseEther('1'), [wbnbAddress, busdAddress]]
          },
          {
            address: getContractAddress('GoldenTreePool', chainId),
            name: 'thresholdPrice',
            params: []
          }
        ];
        const multicallAddress = getContractAddress('Multicall', chainId);
        if (!multicallAddress) {
          setPriceState((prev) => ({
            ...prev,
            fetchStatus: FAILED
          }));
          return;
        }
        const multicallContract = getMulticallContract(chainId, simpleProvider);

        const abi = [
          {
            inputs: [
              {
                internalType: 'uint256',
                name: 'amountIn',
                type: 'uint256'
              },
              {
                internalType: 'address[]',
                name: 'path',
                type: 'address[]'
              }
            ],
            name: 'getAmountsOut',
            outputs: [
              {
                internalType: 'uint256[]',
                name: 'amounts',
                type: 'uint256[]'
              }
            ],
            stateMutability: 'view',
            type: 'function'
          },
          {
            inputs: [],
            name: 'thresholdPrice',
            outputs: [
              {
                internalType: 'uint256',
                name: '',
                type: 'uint256'
              }
            ],
            stateMutability: 'view',
            type: 'function'
          }
        ];

        multicall(multicallContract, abi, calls)
          .then((res: any[]) => {
            setPriceState((prev) => ({
              ...prev,
              prices: {
                smt: formatEther(res[0][0][2]),
                wbnb: formatEther(res[1][0][1]),
                smtc: formatEther(res[2][0])
              },
              fetchStatus: SUCCESS
            }));
          })
          .catch((e) => {
            setPriceState((prev) => ({
              ...prev,
              fetchStatus: FAILED
            }));
          });
      }
    };

    if (account && chainId) {
      setPriceState((prev) => ({
        ...prev,
        fetchStatus: LOADING
      }));
      fetchBalance();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account, chainId, SUCCESS, FAILED, LOADING]);

  return priceState;
};

export default useTokenPrices;
