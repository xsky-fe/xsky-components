import React, { PropTypes } from 'react'
import cn from 'classnames'

function Container(props) {
  const { fluid, className, ...elemProps } = props

  return (
    <div
      {...elemProps}
      className={cn(className, {
        container: !fluid,
        'container-fluid': fluid,
      })}
    />
  )
}

Container.propTypes = {
  fluid: PropTypes.bool,
}

export default Container
