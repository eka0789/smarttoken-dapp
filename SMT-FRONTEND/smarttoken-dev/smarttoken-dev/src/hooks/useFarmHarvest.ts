import { useWeb3React } from '@web3-react/core';
import { getContract } from 'src/utils';
import { ethers } from 'ethers';
import { toast } from 'react-hot-toast';

export enum FetchStatus {
  NOT_FETCHED = 'not-fetched',
  SUCCESS = 'success',
  FAILED = 'failed',
  LOADING = 'loading'
}

const useFarmHarvest = () => {
  const { account, chainId } = useWeb3React();

  const fetchHarvest = async (amount) => {
    let amountIn = ethers.utils.parseUnits(Number(amount).toString(), 18);
    const smtFarming = await getContract('SmartFarm', chainId);
    let rewards = await smtFarming.rewardsOf(account);
    rewards = ethers.utils.formatEther(rewards);
    if (amount < rewards) {
      let tx = await smtFarming.claimReward(amountIn);
      await tx.wait();
      return true;
    } else {
      toast.error('Your reward amount is smaller than the requested amount');
      return false;
    }
  };

  /**
   * @param userAccount
   * @returns earnedPassive amount
   */
  const fetchEarnedPassive = async (userAccount) => {
    const smartFarmContract = await getContract('SmartFarm', chainId);
    let result = await smartFarmContract.earnedPassive(userAccount);
    return result;
  };

  /**
   *
   * @param userAccount
   * @returns earned amount
   */
  const fetchEarned = async (userAccount) => {
    const smartFarmContract = await getContract('SmartFarm', chainId);
    let result = await smartFarmContract.earned(userAccount);
    return result;
  };

  /**
   * get user info in the farm
   * @param user account
   * @return userInfo
   */
  const fetchFarmUserInfo = async (userAccount) => {
    const smartFarmContract = await getContract('SmartFarm', chainId);
    let farmuUserInfo = await smartFarmContract.userInfoOf(userAccount);

    return farmuUserInfo;
  };

  return { fetchHarvest, fetchFarmUserInfo, fetchEarned, fetchEarnedPassive };
};

export default useFarmHarvest;
