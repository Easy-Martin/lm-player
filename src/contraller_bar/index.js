import React from 'react'
import LeftBar from './left_bar'
import RightBar from './right_bar'
import PropTypes from 'prop-types'
import '../style/bar.less'

function ContrallerBar({ visibel }) {
  return (
    <div className={`contraller-bar-layout ${!visibel ? 'hide-contraller-bar' : ''}`}>
      <LeftBar />
      <RightBar />
    </div>
  )
}

ContrallerBar.propTypes = {
  visibel: PropTypes.bool
}

export default ContrallerBar
