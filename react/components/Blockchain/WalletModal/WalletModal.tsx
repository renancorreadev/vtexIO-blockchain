import { useEffect } from 'react'
import wallets from '../../../config/walletsConfig'
import useWallet from '../../../hooks/useWallet'
import { useWalletModal } from '../../../hooks/useWalletModal'
import { useConfig } from '../../contexts/configContext'
import { useWeb3React } from '@web3-react/core'
import './styles.css'
import { Connectors } from '../../../config/types'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = [
  'root',
  'heading',
  'divider',
  'noGrid',
  'walletBtn',
  'gridText',
  'learnText',
  'iconImages',
]

export const WalletModal: React.FC = () => {
  const { config } = useConfig()
  const login = useWallet()
  const { setOpen } = useWalletModal()
  const { library } = useWeb3React()
  const { handles } = useCssHandles(CSS_HANDLES)

  useEffect(() => {
    if (library) {
      setOpen(false)
    }
  }, [library])

  return (
    <div
      className={`${handles.root}`}
      style={{ backgroundColor: config?.theme?.backgroundColor }}
    >
      <p
        className={`${handles.heading}`}
        style={{ color: config?.theme?.headingColor }}
      >
        Connect Wallet
      </p>
      <div className={`${handles.divider}`} />
      <div className={`${handles.noGrid}`}>
        {wallets
          .filter((i) => config.bsc || i.connector !== Connectors.BSC)
          .map((item, index) => (
            <div key={index} style={{ marginBottom: 7 }}>
              <div
                className={`handles.walletBtn`}
                onClick={() => login(item.connector)}
                style={{ backgroundColor: config.theme?.btnColor }}
              >
                <p
                  className={`${handles.gridText}`}
                  style={{ color: config.theme?.textColor }}
                >
                  {item.title}
                </p>
                <img
                  className={`${handles.iconImages}`}
                  alt=""
                  src={item.image}
                />
              </div>
            </div>
          ))}
      </div>
      <p
        className={`${handles.learnText}`}
        style={{ color: config.theme?.textColor }}
      >
        &nbsp;Learn how to connect
      </p>
    </div>
  )
}
