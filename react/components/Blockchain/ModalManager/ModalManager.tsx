import React from 'react'
import CustomCard from '../CustomCard/CustomCard'
import { useConfig } from '../../contexts/configContext'
import './styles.css'
import ReactModal from 'react-modal'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = ['modal', 'closeIcon', 'root']

const ModalManager: React.FC<ModalManagerProps> = ({
  open,
  close,
  ...props
}) => {
  const { config } = useConfig()
  const { handles } = useCssHandles(CSS_HANDLES)

  return (
    <ReactModal
      isOpen={open}
      onRequestClose={() => {
        close()
      }}
      className={`${handles.modal}`}
      overlayClassName={`${handles.overlay}`}
      parentSelector={() => document.body}
      ariaHideApp={false}
    >
      <div
        className={`${handles.closeIcon}`}
        style={{
          backgroundColor: config?.theme?.closeBackgroundColor,
          color: config.theme?.closeTextColor,
        }}
        onClick={close}
      >
        x
      </div>
      {config.darkMode ? (
        <CustomCard style={{ overflow: 'auto' }}>{props.children}</CustomCard>
      ) : (
        <div
          className={`${handles.root}`}
          style={{
            backgroundColor: config.theme?.backgroundColor,
            borderRadius: 10,
          }}
        >
          {props.children}
        </div>
      )}
    </ReactModal>
  )
}

export default ModalManager

interface ModalManagerProps {
  open: boolean
  close: () => void
}
