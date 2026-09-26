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
import { addNetwork } from '../utils/wallet';
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
            toast.error('Unsupported Chain Id Error. Check your chain Id!');

            await addNetwork({
              library,
              chainId: chainId || 56
            });
            activate(connector);
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
    [activate]
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
