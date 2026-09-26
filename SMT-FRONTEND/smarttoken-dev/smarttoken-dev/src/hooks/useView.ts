import { useWeb3React } from '@web3-react/core';
import { getContract } from 'src/utils';
import { utils } from 'ethers';

const useView = () => {
  const { chainId, library } = useWeb3React();

  async function fetchBNB() {
    const smartAchievement = await getContract('SmartOtherAchievement', chainId);
    let balance = await library.getBalance(smartAchievement.address);
  }

  async function fetchNobilityAchBNB() {
    const smartAchievement = await getContract('SmartNobilityAchievement', chainId);
    // let balance = await library.getBalance(smartAchievement.address);

    
    const smartBNBContract = await getContract('WBNBToken', chainId);
    let balance = await smartBNBContract.balanceOf(smartAchievement.address);
    // const smartSmtContract = await getContract('SmartToken', chainId);
    // let smt = await smartSmtContract.balanceOf(smartAchievement.address);
  }

  async function fetchBUSD() {
    const smartGoldenTreePool = await getContract('GoldenTreePool', chainId);
    const busdContract = await getContract('BUSDToken', chainId);
    let balance = await busdContract.balanceOf(smartGoldenTreePool.address);
  }

  return { fetchBNB, fetchBUSD, fetchNobilityAchBNB };
};

export default useView;
