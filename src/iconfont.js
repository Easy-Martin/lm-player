import React from 'react'
import PropTypes from 'prop-types'
import './style/iconfont.less'

export default function IconFont({ type, className = '', ...props }) {
  return <i className={`lm-player-iconfont ${type} ${className}`} {...props} />
}

IconFont.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string
}
