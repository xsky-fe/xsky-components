import React, { PropTypes } from 'react'
import cn from 'classnames'

function Button(props) {
  const {
    active, anchor, disabled, outline, size, style,
    className, ...elemProps } = props
  const Tag = anchor ? 'a' : 'button'

  return (
    <Tag
      {...elemProps}
      disabled={disabled}
      className={cn(className, {
        active: active,
        btn: true,
        [`btn-${style}`]: !outline,
        [`btn-outline-${style}`]: outline,
        [`btn-${size}`]: Boolean(size),
      })}
    />
  );
}

Button.propsTypes = {
  active: PropTypes.bool,
  anchor: PropTypes.bool,
  href: PropTypes.string,
  disabled: PropTypes.bool,
  outline: PropTypes.bool,
  size: PropTypes.oneOf([
    'block',
    'lg',
    'sm',
    'xs',
  ]),
  style: PropTypes.oneOf([
    'default',
    'primary',
    'success',
    'info',
    'warning',
    'danger',
    'link',
  ]),
}

Button.defaultProps = {
  href: 'javascript: void(0)',
  size: '',
  style: 'default',
}

export default Button
