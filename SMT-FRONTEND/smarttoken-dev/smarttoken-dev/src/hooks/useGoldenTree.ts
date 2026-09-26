import { useWeb3React } from '@web3-react/core';
import { utils } from 'ethers';
import { getContract } from 'src/utils';

const useGoldenTree = () => {
  const { chainId } = useWeb3React();

  /** get smtc circulation */
  const fetchCirculation = async () => {
    // smtc in circulation = total supply - burned smtc
    const goldenTreeContract = await getContract('GoldenTreePool', chainId);
    const tokenCashContract = await getContract('SmartTokenCash', chainId);

    const totalSupply = await goldenTreeContract.smtcTotalSupply();
    const burnedAmount = await tokenCashContract.balanceOf(
      '0x000000000000000000000000000000000000dEaD'
    );

    return (
      Number(utils.formatEther(totalSupply)) -
      Number(utils.formatEther(burnedAmount))
    );
  };

  /** get threshold price of smtc */
  const fetchThreshold = async () => {
    const goldenTreeContract = await getContract('GoldenTreePool', chainId);
    const thresholdPrice = await goldenTreeContract.thresholdPrice();

    return thresholdPrice;
  };

  /** get growth token of account */
  const fetchGrowth = async (userAccount) => {
    const goldenTreeContract = await getContract('GoldenTreePool', chainId);
    let growthAmount = await goldenTreeContract.growthBalanceOf(userAccount);

    return growthAmount;
  };

  /** get global growth token */
  const fetchGlobalGrowth = async () => {
    const goldenTreeContract = await getContract('GoldenTreePool', chainId);
    let totalGrowth = await goldenTreeContract.currentTotalGrowth();

    return totalGrowth;
  };

  /**
   * get golden tree phase
   * @param
   * @returns golden tree phase
   */
  const fetchGoldenTreePhase = async () => {
    const goldenTreeContract = await getContract('GoldenTreePool', chainId);
    let treePhase = await goldenTreeContract.currentPhaseOfGoldenTree();

    return treePhase;
  };

  const fetchContributionOf = async (userAccount) => {
    const goldenTreeContract = await getContract('GoldenTreePool', chainId);
    let percent = await goldenTreeContract.contributionOf(userAccount);
    return percent; 
  }

  /** sell smtc */
  const sellSmtc = async (amount) => {
    const smtcContract = await getContract('SmartTokenCash', chainId);
    const smtBridgeContract = await getContract('SmartBridge', chainId);
    const goldenTreeContract = await getContract('GoldenTreePool', chainId);

    let smtcTx = await smtcContract.approve(smtBridgeContract.address, amount);
    await smtcTx.wait();

    let tx = await goldenTreeContract.sellSmtc(amount);
    await tx.wait();
    return true;
  };

  return {
    fetchCirculation,
    fetchThreshold,
    fetchGrowth,
    fetchGlobalGrowth,
    sellSmtc,
    fetchGoldenTreePhase,
    fetchContributionOf
  };
};

export default useGoldenTree;
