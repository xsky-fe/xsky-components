import React, { PropTypes } from 'react'
import cn from 'classnames'

function Description(props) {
  const { horizontal, className, ...elemProps } = props

  return (
    <dl
      {...elemProps}
      className={cn(className, {
        'dl-horizontal': horizontal,
      })}
    />
  )
}

Description.propTypes = {
  horizontal: PropTypes.bool,
  items: PropTypes.object,
}

export default Description
