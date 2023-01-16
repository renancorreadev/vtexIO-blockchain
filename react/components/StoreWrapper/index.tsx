import type { ComponentType, FC } from 'react'
import React, { Fragment, useMemo } from 'react'

type IStoreWrapper = {
  CustomContext?: ComponentType
}

const StoreWrapper: FC<IStoreWrapper> = ({ children, CustomContext }) => {
  const CustomContextElement = useMemo(
    () => CustomContext ?? Fragment,
    [CustomContext]
  )

  return (
    <div>
      <CustomContextElement>{children}</CustomContextElement>
    </div>
  )
}

export default StoreWrapper
