import React, { PropTypes } from 'react'
import cn from 'classnames'

function Col(props) {
  const { xs, sm, md, lg, className, ...elemProps } = props
  const g = [xs, sm, md, lg].map(v => v.split('+').map(Number))

  return (
    <div
      {...elemProps}
      className={cn(className, {
        [`col-xs-${g[0][0]}`]: g[0][0] > 0,
        [`col-sm-${g[1][0]}`]: g[1][0] > 0,
        [`col-md-${g[2][0]}`]: g[2][0] > 0,
        [`col-lg-${g[3][0]}`]: g[3][0] > 0,
        [`col-xs-offset-${g[0][1]}`]: g[0][0] > 0 && g[0][1] > 0,
        [`col-sm-offset-${g[1][1]}`]: g[1][0] > 0 && g[1][1] > 0,
        [`col-md-offset-${g[2][1]}`]: g[2][0] > 0 && g[2][1] > 0,
        [`col-lg-offset-${g[3][1]}`]: g[3][0] > 0 && g[3][1] > 0,
      })}
    />
  )
}

Col.propTypes = {
  xs: PropTypes.string,
  sm: PropTypes.string,
  md: PropTypes.string,
  lg: PropTypes.string,
}

Col.defaultProps = {
  xs: '',
  sm: '',
  md: '',
  lg: '',
}

export default Col
