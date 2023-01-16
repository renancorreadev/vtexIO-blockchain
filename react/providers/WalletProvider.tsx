import React, { useEffect, useState } from 'react'
import { Web3ReactProvider } from '@web3-react/core'
import { WalletModal } from '../components/Blockchain/WalletModal/WalletModal'
import { ConfigContextProvider } from '../components/contexts/configContext'
import { WalletConfig } from '../config/types'
import defaultConfig from '../config'
import {WalletModalContext} from '../components/contexts/walletModalContext'
import ModalManager from '../components/Blockchain/ModalManager/ModalManager'

interface WalletProviderProps {
  children: React.ReactNode
  config?: WalletConfig
}

export const WalletProvider: React.FC<WalletProviderProps> = ({
  children,
  config = defaultConfig,
}) => {
  const [isWalletOpen, setIsWalletOpen] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (error) console.log(error)
  }, [error])

  return (
    <Web3ReactProvider getLibrary={(provider) => provider}>
      <WalletModalContext.Provider
        value={{
          open: isWalletOpen,
          setOpen: setIsWalletOpen,
          error: error,
          setError: setError,
        }}
      >
        <ConfigContextProvider config={config}>
          {children}
          <ModalManager
            open={isWalletOpen}
            close={() => setIsWalletOpen(false)}
          >
            <WalletModal />
          </ModalManager>
        </ConfigContextProvider>
      </WalletModalContext.Provider>
    </Web3ReactProvider>
  )
}
