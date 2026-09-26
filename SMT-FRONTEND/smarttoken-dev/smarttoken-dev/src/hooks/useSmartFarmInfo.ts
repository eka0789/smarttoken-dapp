import { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { isAddress } from 'ethers/lib/utils';
import multicall from '../utils/multicall';

import smtFarmAbi from '../contracts/abi/SmartFarm.json';
import {
  getContractAddress,
  getMulticallContract,
  simpleProvider
} from 'src/utils';

type SmartFarmInfoState = {
  info: any;
  fetchStatus: FetchStatus;
};

export enum FetchStatus {
  NOT_FETCHED = 'not-fetched',
  SUCCESS = 'success',
  FAILED = 'failed',
  LOADING = 'loading'
}

const useSmartFarmInfo = () => {
  const { NOT_FETCHED, SUCCESS, FAILED, LOADING } = FetchStatus;
  const { account, chainId } = useWeb3React();

  const [infoState, setInfoState] = useState<SmartFarmInfoState>({
    info: {},
    fetchStatus: NOT_FETCHED
  });

  useEffect(() => {
    const fetchData = async () => {
      const smtAddress = getContractAddress('SmartFarm', chainId);

      if (isAddress(smtAddress)) {
        const keys = [
          'periodFinish',
          'rewardRate',
          'lastUpdateTime',
          'rewardPerTokenStored',
          'farmingTax_referral',
          'farmingTax_golden',
          'farmingTax_dev',
          'farmingTax_passive',
          'unstakingFee',
          'farmingRewardPercent',
          'farmingRewardWallet',
          'feeAddress',
          'totalStaked'
        ];
        const calls = keys.map((key) => ({
          address: smtAddress,
          name: key,
          params: []
        }));
        const multicallAddress = getContractAddress('Multicall', chainId);
        if (!multicallAddress) {
          setInfoState((prev) => ({
            ...prev,
            fetchStatus: FAILED
          }));
          return;
        }
        const multicallContract = getMulticallContract(chainId, simpleProvider);

        multicall(multicallContract, smtFarmAbi, calls)
          .then((res: any[]) => {
            let temp = {};
            for (let i = 0; i < keys.length; i++) {
              temp[keys[i]] = res[i]?.[0];
            }

            [
              'farmingTax_referral',
              'farmingTax_golden',
              'farmingTax_dev',
              'farmingTax_passive',
              'unstakingFee',
              'farmingRewardPercent'
            ].forEach((key) => {
              temp[key] = temp[key].toNumber() / 100;
            });

            setInfoState((prev) => ({
              ...prev,
              info: temp,
              fetchStatus: SUCCESS
            }));
          })
          .catch((e) => {
            setInfoState((prev) => ({
              ...prev,
              fetchStatus: FAILED
            }));
          });
      }
    };

    if (account && chainId) {
      setInfoState((prev) => ({
        ...prev,
        fetchStatus: LOADING
      }));
      fetchData();
    }
  }, [account, chainId, SUCCESS, FAILED, LOADING]);

  return infoState;
};

export default useSmartFarmInfo;
