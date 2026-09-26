import { useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { getContract } from 'src/utils';
import { ethers } from 'ethers';

export enum FetchStatus {
  NOT_FETCHED = 'not-fetched',
  SUCCESS = 'success',
  FAILED = 'failed',
  LOADING = 'loading'
}

const useFarmingStakeSMT = () => {
  const { account, chainId } = useWeb3React();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchAddSMT = async (amount) => {
    setIsLoading(true);
    let amountIn = ethers.utils.parseUnits(Number(amount).toString(), 18);
    const smtFarming = await getContract('SmartFarm', chainId);
    const smtContract = await getContract('SmartToken', chainId);
    let tx = await smtContract.approve(smtFarming.address, amountIn);
    await tx.wait();

    tx = await smtFarming.stakeSMT(account, amountIn);
    await tx.wait();
    setIsLoading(false);
    return true;
  };

  return { fetchAddSMT, isLoading };
};

export default useFarmingStakeSMT;
