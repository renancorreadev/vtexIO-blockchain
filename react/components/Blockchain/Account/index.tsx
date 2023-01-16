import React, { useState } from 'react'
import { useEagerConnect } from '../../../hooks/useEgerConnect'
import { useWalletModal } from '../../../hooks/useWalletModal'
import { useWalletProvider } from '../../../hooks/useWalletProvider'
import { SiQuantconnect } from 'react-icons/si'
import { useCssHandles } from 'vtex.css-handles'
import './styles.css'



const CSS_HANDLES = ['signInButton', 'address']

export function Account() {

  const [eagerConnect] = useState(false)
  useEagerConnect(eagerConnect)
  const { setOpen, deactivate } = useWalletModal()
  const { connected, account } = useWalletProvider()
  const { handles } = useCssHandles(CSS_HANDLES)

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
