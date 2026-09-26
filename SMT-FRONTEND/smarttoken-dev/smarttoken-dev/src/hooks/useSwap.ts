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

const useSwap = () => {
  const { account, chainId } = useWeb3React();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchSwap = async (amount, direction) => {
    setIsLoading(true);
    let amountIn = ethers.utils.parseUnits(Number(amount).toString(), 18);
    const busdContract = await getContract('BUSDToken', chainId);
    const WBNBContract = await getContract('WBNBToken', chainId);
    const smtBridgeContract = await getContract('SMTBridge', chainId);
    const smtContract = await getContract('SmartToken', chainId);
    let isIntermediary = await smtContract.enabledIntermediary(account);
    switch (direction) {
      case 'SMTtoBNB':
        let txAprSMTtoBNB = await smtContract.approve(
          smtBridgeContract.address,
          amountIn
        );
        await txAprSMTtoBNB.wait();
        let txSMTtoBNB =
          await smtBridgeContract.swapExactTokensForETHSupportingFeeOnTransferTokens(
            amountIn,
            0,
            [smtContract.address, WBNBContract.address],
            account,
            '99000000000000000'
          );
        await txSMTtoBNB.wait();
        break;
      case 'BNBtoSMT':
        let txBNBtoSMT =
          await smtBridgeContract.swapExactETHForTokensSupportingFeeOnTransferTokens(
            0,
            [WBNBContract.address, smtContract.address],
            account,
            '99000000000000000',
            { value: amountIn }
          );
        await txBNBtoSMT.wait();
        break;
      case 'SMTtoBUSD':
        let txAprSMTtoBUSD = await smtContract.approve(
          smtBridgeContract.address,
          amountIn
        );
        await txAprSMTtoBUSD.wait();
        let txSMTtoBUSD =
          await smtBridgeContract.swapExactTokensForTokensSupportingFeeOnTransferTokens(
            amountIn,
            0,
            [smtContract.address, busdContract.address],
            account,
            '99000000000000000000'
          );
        await txSMTtoBUSD.wait();
        break;
      case 'BUSDtoSMT':
        let txAprBUSDtoSMT = await busdContract.approve(
          smtBridgeContract.address,
          amountIn
        );
        await txAprBUSDtoSMT.wait();
        let txBUSDtoSMT =
          await smtBridgeContract.swapExactTokensForTokensSupportingFeeOnTransferTokens(
            amountIn,
            0,
            [busdContract.address, smtContract.address],
            account,
            '99000000000000000000'
          );
        await txBUSDtoSMT.wait();
        break;
      default:
        txAprSMTtoBNB = await smtContract.approve(
          smtBridgeContract.address,
          amountIn
        );
        await txAprSMTtoBNB.wait();
        txSMTtoBNB =
          await smtBridgeContract.swapExactTokensForETHSupportingFeeOnTransferTokens(
            amountIn,
            0,
            [smtContract.address, WBNBContract.address],
            account,
            '99000000000000000'
          );
        await txSMTtoBNB.wait();
        break;
    }
    setIsLoading(false);
  };

  return { fetchSwap, isLoading };
};

export default useSwap;
