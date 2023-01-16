import React, { useState } from 'react'
import { useEagerConnect } from '../../../hooks/useEgerConnect'
import { useWalletModal } from '../../../hooks/useWalletModal'
import { useWalletProvider } from '../../../hooks/useWalletProvider'
import { SiQuantconnect } from 'react-icons/si'
import { useCssHandles } from 'vtex.css-handles'
import './styles.css'

export type component = 'wallet-connect' | 'secrect-text'

interface ConnectionProps {
  component?: component | null | undefined
}

const CSS_HANDLES = ['signInButton', 'address']

export function Connection(props: ConnectionProps) {
  const { component } = props
  const [eagerConnect] = useState(false)
  useEagerConnect(eagerConnect)
  const { setOpen, deactivate } = useWalletModal()
  const { connected, account } = useWalletProvider()
  const { handles } = useCssHandles(CSS_HANDLES)

  const WalletConnect: React.FC = (): JSX.Element => {
    return (
      <button
        className={`${handles.signInButton}`}
        onClick={() => (connected ? deactivate() : setOpen(true))}
      >
        <SiQuantconnect style={{ marginRight: '10px' }} />
        {connected ? 'Disconnect' : 'Connect'}
        <p className={`${handles.address}`}>{connected && account}</p>
      </button>
    )
  }

  if (component == 'wallet-connect') {
    return <WalletConnect />
  } else {
    return null
  }
}
