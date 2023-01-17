import { ComponentType, FC, Fragment, useMemo } from 'react'
import styles from './styles.module.css'

type IStoreWrapper = {
  CustomContext?: ComponentType
}

const StoreWrapper: FC<IStoreWrapper> = ({ children, CustomContext }) => {
  const CustomContextElement = useMemo(
    () => CustomContext || Fragment,
    [CustomContext]
  )
  return (
    <div className={styles['global-css']}>
      <CustomContextElement>{children}</CustomContextElement>
    </div>
  )
}

export default StoreWrapper
