import {useWalletProvider} from './hooks/useWalletProvider'

 function MyAccount() {
   const { connected, account } = useWalletProvider()

  return (
    <h2>
      {connected ? `Connected to ${account}` : 'Not connected'}
    </h2>
  )
}

export default MyAccount;
