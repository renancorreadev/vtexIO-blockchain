const MetamaskIco = require('../assets/icons/metamask.svg') as string
const TrustWalletIco = require('../assets/icons/trustwallet.svg') as string
const MathWalletIco = require('../assets/icons/mathwallet.svg') as string
const TokenpocketIco = require('../assets/icons/tokenpocket.svg') as string
const BinanceWalletIco = require('../assets/icons/binancewallet.svg') as string
const SafePalIco = require('../assets/icons/safepalwallet.svg') as string
const WalletConnectIco = require('../assets/icons/walletconnect.svg') as string

import { Connectors } from './types'

const wallets = [
  {
    title: 'MetaMask',
    image: MetamaskIco,
    connector: Connectors.INJECTED,
  },
  {
    title: 'Binance Chain Wallet',
    image: BinanceWalletIco,
    connector: Connectors.BSC,
  },
  {
    title: 'Trust Wallet',
    image: TrustWalletIco,
    connector: Connectors.INJECTED,
  },
  {
    title: 'Wallet Connect',
    image: WalletConnectIco,
    connector: Connectors.WALLET_CONNECT,
  },
  {
    title: 'Math Wallet',
    image: MathWalletIco,
    connector: Connectors.INJECTED,
  },
  {
    title: 'Token Pocket',
    image: TokenpocketIco,
    connector: Connectors.INJECTED,
  },
  {
    title: 'SafePal',
    image: SafePalIco,
    connector: Connectors.INJECTED,
  },
]

export default wallets
