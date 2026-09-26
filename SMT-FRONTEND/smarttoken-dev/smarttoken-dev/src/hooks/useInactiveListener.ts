import { useState, useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'

import { injectedConnector } from '../utils/connectors'

export function useInactiveListener(suppress = false) {
  const { active, error, activate } = useWeb3React()
  const [activateError, setActivateError] = useState<Error | undefined>()

  useEffect(() => {
    if (suppress) {
      return () => {}
    }
    const { ethereum } = window
    if (ethereum && ethereum.on && !active && !error) {
      const handleChainChanged = () => {
        activate(injectedConnector)
      }

      const handleAccountsChanged = (accounts: string[]) => {
        if (accounts.length > 0) {
          activate(injectedConnector)
        }
      }

      const handleNetworkChanged = (networkId: number) => {
        activate(injectedConnector)
      }

      ethereum.on('chainChanged', handleChainChanged)
      ethereum.on('accountsChanged', handleAccountsChanged)
      ethereum.on('networkChanged', handleNetworkChanged)

      return () => {
        if (ethereum.removeListener) {
          ethereum.removeListener('chainChanged', handleChainChanged)
          ethereum.removeListener('accountsChanged', handleAccountsChanged)
          ethereum.removeListener('networkChanged', handleNetworkChanged)
        }
      }
    }

    if (error) {
      setActivateError(error)
    }

    return () => {}
  }, [active, error, suppress, activate])

  return { activateError }
}
