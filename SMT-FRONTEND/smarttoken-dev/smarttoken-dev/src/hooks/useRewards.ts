import { useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import axios from 'axios';
import { ethers } from 'ethers';
import { getContract } from 'src/utils';

const API_URL = process.env.REACT_APP_API_URL || '/api';

const toWei = (amount) =>
  ethers.utils.parseUnits(Number(amount || 0).toString(), 18);

const useRewards = () => {
  const { chainId } = useWeb3React();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  /**
   * get nobility title
   * @param user address
   * @return title
   */
  const fetchNobilityTitle = async (userAddress) => {
    const smartAchievementContract = await getContract(
      'SmartNobilityAchievement',
      chainId
    );
    let title = await smartAchievementContract.nobilityTitleOf(userAddress);
    return title;
  };

  /**
   * get total portion
   * @return total portion
   */
  const fetchGolbalPortion = async () => {
    // const Contract = await getContract(
    //   'SmartAchievement',
    //   chainId
    // );
  };

  /**
   * get noble rewards of account
   * @param user address
   * @return noble reward amount
   */
  const fetchNobleRewardAmount = async (userAddress) => {
    const smartAchievementContract = await getContract(
      'SmartNobilityAchievement',
      chainId
    );
    const rewards = await smartAchievementContract._mapRewards(userAddress);
    return rewards.nobleRewards;
  };

  /**
   * get farmer rewards of account
   * @param user address
   * @return farm reward amount
   */
  const fetchFarmerRewardAmount = async (userAddress) => {
    const smartAchievementContract = await getContract(
      'SmartOtherAchievement',
      chainId
    );
    const rewards = await smartAchievementContract.rewardsInfoOf(userAddress);
    return rewards.farmRewards;
  };

  /**
   * claim noble rewards
   * @param amount
   * @return no return
   */
  const claimNobleReward = async (amount) => {
    const smartAchievementContract = await getContract(
      'SmartNobilityAchievement',
      chainId
    );
    await smartAchievementContract.claimNobleReward(toWei(amount));
  };

  /**
   * claim farm rewards
   * @param amount
   * @return no return
   */
  const claimFarmReward = async (amount) => {
    const smartAchievementContract = await getContract(
      'SmartOtherAchievement',
      chainId
    );
    await smartAchievementContract.claimFarmReward(toWei(amount));
  };

  /**
   * get chest smt reward amount
   * @param userAddress
   * @return smt amount
   */
  const fetchChestSMTRewards = async (userAddress) => {
    const smartAchievementContract = await getContract(
      'SmartNobilityAchievement',
      chainId
    );
    const rewards = await smartAchievementContract._mapRewards(userAddress);
    return rewards.chestRewards?.[0] ?? 0;
  };
  /**
   * get chest smtc reward amount
   * @param userAddress
   * @return smtc amount
   */
  const fetchChestSMTCRewards = async (userAddress) => {
    const smartAchievementContract = await getContract(
      'SmartNobilityAchievement',
      chainId
    );
    const rewards = await smartAchievementContract._mapRewards(userAddress);
    return rewards.chestRewards?.[1] ?? 0;
  };
  /**
   * claim chest smt reward
   * @param amount
   * @returns no return
   */
  const claimChestSMTReward = async (amount) => {
    setIsLoading(true);
    const smartAchievementContract = await getContract(
      'SmartNobilityAchievement',
      chainId
    );
    await smartAchievementContract.claimChestSMTReward(toWei(amount));
    setIsLoading(false);
  };
  /**
   * claim chest smtc reward
   * @param amount
   * @returns no return
   */
  const claimChestSMTCReward = async (amount) => {
    setIsLoading(true);
    const smartAchievementContract = await getContract(
      'SmartNobilityAchievement',
      chainId
    );
    await smartAchievementContract.claimChestSMTCReward(toWei(amount));
    setIsLoading(false);
  };

  /**
   * get surprise smt rewards amount
   * @parma userAddress
   * @return smt amount
   */
  const fetchSurpriseSMTRewards = async (userAddress) => {
    const smartAchievementContract = await getContract(
      'SmartOtherAchievement',
      chainId
    );
    const rewards = await smartAchievementContract.rewardsInfoOf(userAddress);
    return rewards.surprizeRewards?.[0] ?? 0;
  };
  /**
   * get surprise smtc rewards amount
   * @param userAddress
   * @return smtc amount
   */
  const fetchSurpriseSMTCRewards = async (userAddress) => {
    const smartAchievementContract = await getContract(
      'SmartOtherAchievement',
      chainId
    );
    const rewards = await smartAchievementContract.rewardsInfoOf(userAddress);
    return rewards.surprizeRewards?.[1] ?? 0;
  };
  /**
   * claim surprise smt reward
   * @param amount
   * @returns no return
   */
  const claimSurpriseSMTReward = async (amount) => {
    setIsLoading(true);
    const smartAchievementContract = await getContract(
      'SmartOtherAchievement',
      chainId
    );
    await smartAchievementContract.claimSurprizeSMTReward(toWei(amount));
    setIsLoading(false);
  };
  /**
   * claim surprise smtc reward
   * @param amount
   * @returns no return
   */
  const claimSurpriseSMTCReward = async (amount) => {
    setIsLoading(true);
    const smartAchievementContract = await getContract(
      'SmartOtherAchievement',
      chainId
    );
    await smartAchievementContract.claimSurprizeSMTCReward(toWei(amount));
    setIsLoading(false);
  };

  /**
   * get passive rewards amount
   * @param userAddress
   * @return passive rewards amount
   */
  const fetchPassiveRewardsAmount = async (userAddress) => {
    const smartAchievementContract = await getContract(
      'SmartNobilityAchievement',
      chainId
    );
    const rewards = await smartAchievementContract._mapRewards(userAddress);
    return rewards.passiveShareRewards;
  };

  /**
   * claim passive rewards
   * @param amount
   * @return no return
   */
  const claimPassiveReward = async (amount) => {
    const smartAchievementContract = await getContract(
      'SmartNobilityAchievement',
      chainId
    );
    await smartAchievementContract.claimReward(toWei(amount));
  };

  /**
   * get sell tax distribution info
   * @param user account
   * @return reward info of account
   */
  const fetchSellRewardsAmount = async (userAccount) => {
    const smartAchievementContract = await getContract(
      'SmartOtherAchievement',
      chainId
    );
    const rewards = await smartAchievementContract.rewardsInfoOf(userAccount);
    return rewards.sellTaxRewards;
  };
  /**
   * claim sell rewards
   * @param amount
   */
  const claimSellTaxReward = async (amount) => {
    const smartAchievementContract = await getContract(
      'SmartOtherAchievement',
      chainId
    );
    await smartAchievementContract.claimSellTaxReward(toWei(amount));
  };

  /**
   * get quest rewards info of account.
   * Quest rewards are tracked off-chain and paid out from the SMTC quest
   * wallet, so this reads the companion backend API instead of a contract.
   * @param userAddress
   * @return { claimed, unclaimed } in SMTC units or null when unavailable
   */
  const fetchQuestRewards = async (userAddress) => {
    try {
      const { data } = await axios.get(
        `${API_URL}/quest/rewards/${userAddress.toLowerCase()}`
      );
      return {
        claimed: Number(data?.claimed ?? 0),
        unclaimed: Number(data?.unclaimed ?? 0)
      };
    } catch (e) {
      return null;
    }
  };

  /**
   * claim quest rewards via the companion backend, which pays the user
   * from the SMTC quest wallet after verifying quest completion.
   * @param userAddress
   * @param amount
   */
  const claimQuestReward = async (userAddress, amount) => {
    const { data } = await axios.post(`${API_URL}/quest/claim`, {
      address: userAddress.toLowerCase(),
      amount
    });
    if (!data?.success) {
      throw new Error(data?.message || 'Quest claim rejected by the server');
    }
    return data;
  };

  return {
    fetchNobilityTitle,
    fetchGolbalPortion,
    fetchNobleRewardAmount,
    fetchFarmerRewardAmount,
    claimNobleReward,
    claimFarmReward,
    fetchChestSMTRewards,
    fetchChestSMTCRewards,
    claimChestSMTReward,
    claimChestSMTCReward,
    fetchSurpriseSMTRewards,
    fetchSurpriseSMTCRewards,
    claimSurpriseSMTReward,
    claimSurpriseSMTCReward,
    fetchPassiveRewardsAmount,
    claimPassiveReward,
    fetchSellRewardsAmount,
    claimSellTaxReward,
    fetchQuestRewards,
    claimQuestReward,
    isLoading
  };
};

export default useRewards;
