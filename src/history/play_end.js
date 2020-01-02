/**
 * history下使用 用户切换下个播放地址
 */

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

function PlayEnd({ event, changePlayIndex, playIndex }) {
  useEffect(() => {
    const endedHandle = () => changePlayIndex(playIndex + 1)
    event.addEventListener('ended', endedHandle, false)
    return () => {
      event.removeEventListener('ended', endedHandle, false)
    }
  }, [event, playIndex])
  return <></>
}

PlayEnd.propTypes = {
  event: PropTypes.object,
  changePlayIndex: PropTypes.func,
  playIndex: PropTypes.number
}
export default PlayEnd
