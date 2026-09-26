import { useWeb3React } from '@web3-react/core';
import { getContractAddress, getContract } from 'src/utils';
import Web3Modal from 'web3modal';
// import { BigNumber, constants } from 'ethers';
import { ethers } from 'ethers';
// import bep20ABI from 'src/updatedContracts/libs/IBEP20.sol/IBEP20.json';

export enum FetchStatus {
  NOT_FETCHED = 'not-fetched',
  SUCCESS = 'success',
  FAILED = 'failed',
  LOADING = 'loading'
}

const getProvider = async () => {
  const web3Modal = new Web3Modal();
  const connection = await web3Modal.connect();
  const provider = new ethers.providers.Web3Provider(connection);
  return provider;
};

// const getContract = async (contractAddress, contractAbi) => {
//   const provider = await getProvider();
//   const signer = provider.getSigner();
//   return new ethers.Contract(contractAddress, contractAbi, signer);
// };

const useAddLiquidity = () => {
  const { account, chainId } = useWeb3React();

  // SMT to BNB compare
  const fetchAddLiquidity = async (SMTAmount, DesiredAmount) => {
    const smartTokenAddress = getContractAddress('SmartToken', chainId);
    // const BUSDConractAddress = getContractAddress('BUSDToken', chainId);
    const tokenContract = await getContract('SmartToken', chainId);
    // const BUSDContract = await getContract(BUSDConractAddress, bep20ABI.abi);
    const routerContract = await getContract('Router', chainId);

    let balance = await tokenContract.balanceOf(account);

    const provider = await getProvider();
    balance = await provider.getBalance(account);
    //////////////////////////SMT-BNB Add Liquidity/////////////////////////////////////
    let tx = await tokenContract.approve(
      getContractAddress('Router', chainId),
      ethers.utils.parseUnits(String(SMTAmount), 18)
    );
    await tx.wait();


    tx = await routerContract.addLiquidityETH(
      smartTokenAddress,
      ethers.utils.parseUnits(String(SMTAmount), 18),
      0,
      0,
      account,
      '111111111111111111111',
      { value: ethers.utils.parseUnits(String(DesiredAmount), 18) }
    );
    await tx.wait();

    ////////////////////////////SMT-BUSD Add Liquidity////////////////////////////////////

    // let tx = await tokenContract.approve(
    //   getContractAddress('Router', chainId),
    //   ethers.utils.parseUnits("5000", 18)
    // );
    // await tx.wait();

    // tx = await BUSDConract.approve(
    //   getContractAddress("Router", chainId),
    //   ethers.utils.parseUnits("5000", 18)
    // );
    // await tx.wait();

    // tx = await routerContract.addLiquidity(
    //   smartTokenAddress,
    //   BUSDConractAddress,
    //   ethers.utils.parseUnits("1000", 18),
    //   ethers.utils.parseUnits("1000", 18),
    //   0,
    //   0,
    //   account,
    //   "111111111111111111111"
    // );
    // await tx.wait();
  };

  return { fetchAddLiquidity };
};

export default useAddLiquidity;
