import React, { PropTypes } from 'react'
import cn from 'classnames'

function Row(props) {
  const { className, ...elemProps } = props

  return (
    <div
      {...elemProps}
      className={cn(className, 'row')}
    />
  )
}

export default Row
