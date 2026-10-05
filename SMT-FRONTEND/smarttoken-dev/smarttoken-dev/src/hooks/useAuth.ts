import { useCallback } from 'react';
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core';
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected
} from '@web3-react/injected-connector';
import {
  connectorLocalStorageKey,
  ConnectorNames,
  connectorsByName
} from '../utils/connectors';
import { currentNetwork } from '../utils';
import { addNetwork, switchToNetwork } from '../utils/wallet';
import { toast } from 'react-hot-toast';

const useAuth = () => {
  const { activate, deactivate, library, chainId } = useWeb3React();

  const loginWallet = useCallback(
    (connectorID: ConnectorNames) => {
      const connector = connectorsByName[connectorID];
      if (connector) {
        activate(connector, async (error) => {
          window.localStorage.removeItem(connectorLocalStorageKey);
          if (error instanceof UnsupportedChainIdError) {
            const targetChain = currentNetwork || 97;
            try {
              // Otomatis minta wallet beralih ke target network (BSC Testnet 97)
              await switchToNetwork({ library, chainId: targetChain });
              // Jika wallet berhasil switch, aktifkan kembali konektor
              await activate(connector);
            } catch (switchError: any) {
              if (
                switchError?.code === 4001 ||
                switchError?.name === 'UserRejectedRequestError'
              ) {
                toast.error(
                  `Switch to ${
                    targetChain === 97 ? 'BSC Testnet' : 'BNB Chain'
                  } was rejected in your wallet.`
                );
              } else {
                toast.error(
                  `Please switch your wallet to ${
                    targetChain === 97
                      ? 'BSC Testnet (Chain ID 97)'
                      : 'BNB Smart Chain'
                  }!`
                );
              }
            }
          } else if (error instanceof NoEthereumProviderError) {
            toast.error('No provider was found!!');
          } else if (
            error instanceof UserRejectedRequestErrorInjected ||
            error?.name === 'UserRejectedRequestError'
          ) {
            toast.error(
              'Authorization Error, Please authorize to access your account'
            );
          } else {
            toast.error(error.message);
          }
        });
      } else {
        toast.error(
          connectorID === ConnectorNames.WalletConnect
            ? 'WalletConnect is not configured. Set REACT_APP_WALLETCONNECT_PROJECT_ID.'
            : "Can't find connector, The connector config is wrong"
        );
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [activate, library]
  );

  const logoutWallet = useCallback(() => {
    deactivate();
    // Tutup sesi WalletConnect (v2) jika ada dan bersihkan sisa state lama
    if (window.localStorage.getItem('walletconnect')) {
      const wcConnector = connectorsByName.WalletConnect as any;
      if (wcConnector?.close) wcConnector.close();
      window.localStorage.removeItem('walletconnect');
    }
  }, [deactivate]);

  return { loginWallet, logoutWallet };
};

export default useAuth;
