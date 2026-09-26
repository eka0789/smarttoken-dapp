import { useWeb3React } from '@web3-react/core';
import { getContractObj, simpleProvider } from 'src/utils';
import { ethers } from 'ethers';

const useTokenRatio = () => {
  const { chainId } = useWeb3React();
  let smartCompInstance = getContractObj('SmartComp', chainId, simpleProvider);
  let routerInstance = getContractObj('Router', chainId, simpleProvider);

  // SMT to BNB compare
  const fetchRatio = async () => {
    let swapAmount = ethers.utils.parseUnits('1', 18);
    let amountsOut = await routerInstance.getAmountsOut(swapAmount.toString(), [
      await smartCompInstance.getSMT(),
      await routerInstance.WETH()
    ]);
    localStorage.setItem('SMTtoBNB', ethers.utils.formatEther(amountsOut[1]));
  };
  const fetchRatioBUSD = async () => {
    let swapAmount = ethers.utils.parseUnits('1', 18);
    let amountsOut = await routerInstance.getAmountsOut(swapAmount.toString(), [
      await smartCompInstance.getSMT(),
      await smartCompInstance.getBUSD()
    ]);
    localStorage.setItem('SMTtoBUSD', ethers.utils.formatEther(amountsOut[1]));
  };

  return { fetchRatio, fetchRatioBUSD };
};

export default useTokenRatio;
