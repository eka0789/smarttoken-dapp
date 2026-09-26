import { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { isAddress } from 'ethers/lib/utils';
import multicall from 'src/utils/multicall';
import smtAbi from 'src/updatedContracts/SMT.sol/SMT.json';
import {
  getContractAddress,
  getMulticallContract,
  simpleProvider
} from 'src/utils';

type SMTInfoState = {
  info: any;
  fetchStatus: FetchStatus;
};

export enum FetchStatus {
  NOT_FETCHED = 'not-fetched',
  SUCCESS = 'success',
  FAILED = 'failed',
  LOADING = 'loading'
}

const useSMTInfo = () => {
  const { NOT_FETCHED, SUCCESS, FAILED, LOADING } = FetchStatus;
  const { account, chainId } = useWeb3React();

  const [infoState, setInfoState] = useState<SMTInfoState>({
    info: {},
    fetchStatus: NOT_FETCHED
  });

  useEffect(() => {
    const fetchData = async () => {
      const smtAddress = getContractAddress('SmartToken', chainId);

      if (isAddress(smtAddress)) {
        const keys = [
          '_buyTaxFee',
          '_sellTaxFee',
          '_transferTaxFee',
          '_buyReferralFee',
          '_buyGoldenPoolFee',
          '_buyDevFee',
          '_buyAchievementFee',
          '_sellDevFee',
          '_sellGoldenPoolFee',
          '_sellFarmingFee',
          '_sellBurnFee',
          '_sellAchievementFee',
          '_transferDevFee',
          '_transferAchievementFee',
          '_transferGoldenFee',
          '_transferFarmingFee',
          '_getCurrentSellTax'
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
        multicall(multicallContract, smtAbi.abi, calls)
          .then((res: any[]) => {
            let temp = {};
            for (let i = 0; i < keys.length; i++) {
              temp[keys[i]] = res[i]?.[0];
            }
            temp['emergency_tax'] =
              temp['_buyTaxFee'].gt(15) ||
              temp['_sellTaxFee'].gt(15) ||
              temp['_transferTaxFee'].gt(15);

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

export default useSMTInfo;
