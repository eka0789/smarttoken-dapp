// Set of helper functions to facilitate wallet setup

import { nodes } from './getRpcUrl';
import { Web3Provider } from '@ethersproject/providers';
import { BigNumber } from '@ethersproject/bignumber';
import { hexStripZeros } from '@ethersproject/bytes';

interface AddNetworkArguments {
  library?: Web3Provider | any;
  chainId: number;
}

const getProvider = (library?: any) => {
  if (library?.provider?.request) return library.provider;
  if (typeof window !== 'undefined') {
    if ((window as any).ethereum?.request) return (window as any).ethereum;
    if ((window as any).BinanceChain?.request) return (window as any).BinanceChain;
  }
  return undefined;
};

// provider.request returns Promise<any>, but wallet_switchEthereumChain must return null or throw
// see https://github.com/rekmarks/EIPs/blob/3326-create/EIPS/eip-3326.md for more info on wallet_switchEthereumChain
export async function addNetwork({
  library,
  chainId
}: AddNetworkArguments): Promise<null | void> {
  const provider = getProvider(library);
  if (!provider?.request) {
    return;
  }
  const formattedChainId = `0x${chainId.toString(16)}`;
  try {
    await provider.request({
      method: 'wallet_addEthereumChain',
      params: [
        {
          chainId: formattedChainId,
          chainName:
            chainId === 97
              ? 'BNB Smart Chain Testnet'
              : 'BNB Smart Chain Mainnet',
          nativeCurrency: {
            name: chainId === 97 ? 'tBNB' : 'BNB',
            symbol: chainId === 97 ? 'tBNB' : 'BNB',
            decimals: 18
          },
          rpcUrls: nodes,
          blockExplorerUrls: [
            chainId === 97
              ? 'https://testnet.bscscan.com/'
              : 'https://bscscan.com/'
          ]
        }
      ]
    });
  } catch (error) {
    console.error('error adding eth network: ', chainId, error);
    throw error;
  }
}

interface SwitchNetworkArguments {
  library?: Web3Provider | any;
  chainId?: number;
}

// provider.request returns Promise<any>, but wallet_switchEthereumChain must return null or throw
// see https://github.com/rekmarks/EIPs/blob/3326-create/EIPS/eip-3326.md for more info on wallet_switchEthereumChain
export async function switchToNetwork({
  library,
  chainId = 97
}: SwitchNetworkArguments): Promise<null | void> {
  const provider = getProvider(library);
  if (!provider?.request) {
    return;
  }
  if (!chainId && library?.getNetwork) {
    ({ chainId } = await library.getNetwork());
  }
  const targetId = chainId || 97;
  const formattedChainId = hexStripZeros(BigNumber.from(targetId).toHexString());
  try {
    await provider.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: formattedChainId }]
    });
  } catch (error: any) {
    // 4902 is the error code for attempting to switch to an unrecognized chainId
    // Some wallets (e.g. mobile/extensions) return -32603 or embed 4902 in message
    const isUnrecognized =
      error?.code === 4902 ||
      error?.data?.originalError?.code === 4902 ||
      error?.message?.includes('4902') ||
      error?.message?.toLowerCase()?.includes('unrecognized');

    if (isUnrecognized && targetId !== undefined) {
      await addNetwork({ library, chainId: targetId });
      // Retry switch after network was registered
      try {
        await provider.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: formattedChainId }]
        });
      } catch (retryError) {
        // Some wallets automatically switch upon addition
      }
    } else {
      throw error;
    }
  }
}
