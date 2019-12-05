import React from 'react'
import PropTypes from 'prop-types'

export default function Bar({ visibel = true, className = '', children, ...props }) {
  if (visibel === false) {
    return null
  }
  return (
    <span className={`contraller-bar-item ${className}`} {...props}>
      {children}
    </span>
  )
}

Bar.propTypes = {
  visibel: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.any
}
