import React, { PropTypes } from 'react'
import cn from 'classnames'

const typographyTags = [
  // headings
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  // others
  'p',
  'mark', // highlighted msg
  'del', // line through, deleted msg
  's', // line through, deprecated msg
  'u', // underlined
  'ins', // underlined, additional msg
  'small',
  'storng',
  'em',
  'abbr',
  'address',
  'blockqoute',
  'cite',
]

function TextFactory(props) {
  const {
    lead, left, center, right, justify, nowrap,
    lower, upper, cap,
    tag: Tag, className, ...elemProps } = props

  return (
    <Tag
      {...elemProps}
      className={cn(className, {
        lead: lead,
        'text-left': left,
        'text-center': center,
        'text-right': right,
        'text-justify': justify,
        'text-nowrap': nowrap,
        'text-lowercase': lower,
        'text-uppercase': upper,
        'text-capitalize': cap,
      })}
    />
  )
}

TextFactory.propTypes = {
  tag: PropTypes.string,
  lead: PropTypes.bool,
  // align
  left: PropTypes.bool,
  center: PropTypes.bool,
  right: PropTypes.bool,
  justify: PropTypes.bool,
  nowrap: PropTypes.bool,
  // transform
  lower: PropTypes.bool,
  upper: PropTypes.bool,
  cap: PropTypes.bool,
  // abbr only
  init: PropTypes.bool,
}

TextFactory.defaultProps = {
  tag: 'p',
}

typographyTags.forEach(tag => {
  TextFactory[tag] = props => TextFactory({ tag, ...props })
})

export default TextFactory
