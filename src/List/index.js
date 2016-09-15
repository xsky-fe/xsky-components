import React, { PropTypes } from 'react'
import cn from 'classnames'

function List(props) {
  const { ordered, unstyled, inline, className, ...elemProps } = props
  const ListTag = ordered ? 'ol' : 'ul'

  return (
    <ListTag
      {...elemProps}
      className={cn(className, {
        'list-unstyled': unstyled,
        'list-inline': inline,
      })}
    />
  )
}

List.propTypes = {
  ordered: PropTypes.bool,
  unstyled: PropTypes.bool,
  inline: PropTypes.bool,
  items: PropTypes.array,
}

export default List
