import { ethers } from 'ethers';
import { InjectedConnector } from '@web3-react/injected-connector';
import { BscConnector } from '@binance-chain/bsc-connector';
import { ALL_SUPPORTED_CHAIN_IDS, currentNetwork, Networks } from './index';
import { WalletConnectV2Connector } from './WalletConnectV2Connector';
import Metamask from 'src/icons/Metamask.svg';
import TrustWallet from 'src/icons/TrustWallet.svg';
import WalletConnect from 'src/icons/WalletConnect.svg';
import BinanceChain from 'src/icons/BinanceChain.svg';

const NETWORK_URLS: { [key: number]: string } = {
  // FIX: sebelumnya RPC mainnet & testnet tertukar
  [Networks.MainNet]: `https://bsc-dataseed1.ninicoin.io`,
  [Networks.Testnet]: `https://data-seed-prebsc-1-s1.binance.org:8545/`
};

const WALLETCONNECT_PROJECT_ID =
  process.env.REACT_APP_WALLETCONNECT_PROJECT_ID || '';

export enum ConnectorNames {
  Injected = 'Injected',
  WalletConnect = 'WalletConnect',
  BinanceChainWallet = 'BinanceChainWallet'
}

export const injectedConnector = new InjectedConnector({
  supportedChainIds: ALL_SUPPORTED_CHAIN_IDS
});

export const bscConnector = new BscConnector({
  supportedChainIds: ALL_SUPPORTED_CHAIN_IDS
});

// WalletConnect v2 hanya diaktifkan jika Project ID tersedia
export const walletconnect = WALLETCONNECT_PROJECT_ID
  ? new WalletConnectV2Connector({
      projectId: WALLETCONNECT_PROJECT_ID,
      chains: [Networks.MainNet],
      optionalChains: [Networks.Testnet],
      rpcMap: {
        [Networks.MainNet]: NETWORK_URLS[Networks.MainNet],
        [Networks.Testnet]: NETWORK_URLS[Networks.Testnet]
      }
    })
  : null;

export const connectorsByName = {
  Injected: injectedConnector,
  ...(walletconnect ? { WalletConnect: walletconnect } : {}),
  BinanceChainWallet: bscConnector
};

export const connectors =
  +currentNetwork === 56
    ? [
        {
          title: 'Metamask',
          icon: Metamask,
          connectorId: ConnectorNames.Injected
        },
        {
          title: 'TrustWallet',
          icon: TrustWallet,
          connectorId: ConnectorNames.Injected
        },
        // Hanya tampilkan WalletConnect jika Project ID v2 tersedia
        ...(WALLETCONNECT_PROJECT_ID
          ? [
              {
                title: 'WalletConnect',
                icon: WalletConnect,
                connectorId: ConnectorNames.WalletConnect
              }
            ]
          : []),
        {
          title: 'Binance Chain Wallet',
          icon: BinanceChain,
          connectorId: ConnectorNames.BinanceChainWallet
        }
      ]
    : [
        {
          title: 'Metamask',
          icon: Metamask,
          connectorId: ConnectorNames.Injected
        }
      ];

export const connectorLocalStorageKey: string = 'smartTokenConnectorId';

/**
 * BSC Wallet requires a different sign method
 * @see https://docs.binance.org/smart-chain/wallet/wallet_api.html#binancechainbnbsignaddress-string-message-string-promisepublickey-string-signature-string
 */
export const signMessage = async (
  provider: any,
  account: string,
  message: string
) => {
  if (window.BinanceChain) {
    const { signature } = await (window.BinanceChain as any).bnbSign(
      account,
      message
    );
    return signature;
  }

  /**
   * Wallet Connect does not sign the message correctly unless you use their method
   * @see https://github.com/WalletConnect/walletconnect-monorepo/issues/462
   */
  if (provider.provider?.wc) {
    const wcMessage = ethers.utils.hexlify(ethers.utils.toUtf8Bytes(message));
    const signature = await provider.provider?.wc.signPersonalMessage([
      wcMessage,
      account
    ]);
    return signature;
  }

  return provider.getSigner(account).signMessage(message);
};
