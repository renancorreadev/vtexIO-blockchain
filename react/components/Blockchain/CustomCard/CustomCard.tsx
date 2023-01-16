import React from 'react'
import './styles.css'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = ['root', 'heading']

interface Props {
  style?: object
}

const CustomCard: React.FC<Props> = ({ children, ...restProps }) => {
  const { handles } = useCssHandles(CSS_HANDLES)
  return (
    <div className={`${handles.root}`} {...restProps}>
      <div className={`${handles.body}`}>{children}</div>
    </div>
  )
}

export default CustomCard
