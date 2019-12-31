import React, { useEffect, useState, useRef } from 'react'
import IconFont from './iconfont'
import EventName from './event/eventName'

import './style/message.less'

function VideoMessage({ event, api }) {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)
  const messageRef = useRef(null)

  useEffect(() => {
    const openLoading = () => setLoading(true)
    const closeLoading = () => setLoading(false)

    const errorReload = timer => {
      messageRef.current = <div>视频加载错误，正在进行重连第{timer}重连</div>
      setStatus('reload')
      setLoading(true)
    }

    const reloadFail = () => {
      messageRef.current = <div>视频错误</div>
      setStatus('fail')
    }
    const reloadSuccess = () => {
      messageRef.current = null
      setStatus(null)
    }

    const reload = () => setStatus('reload')

    const playEnd = () => {
      messageRef.current = null
      setStatus(null)
      setLoading(false)
      api.pause()
    }

    const clearReloadMessage = () => {
      messageRef.current = null
      setStatus(status)
    }

    event.addEventListener('loadstart', openLoading)
    event.addEventListener('waiting', openLoading)
    event.addEventListener('seeking', openLoading)
    event.addEventListener('loadeddata', closeLoading)
    event.addEventListener('canplay', closeLoading)
    event.on(EventName.ERROR_RELOAD, errorReload)
    event.on(EventName.RELOAD_FAIL, reloadFail)
    event.on(EventName.RELOAD_SUCCESS, reloadSuccess)
    event.on(EventName.RELOAD, reload)
    event.on(EventName.HISTORY_PLAY_END, playEnd)
    event.on(EventName.CLEAR_ERROR_TIMER, clearReloadMessage)

    return () => {
      event.removeEventListener('loadstart', openLoading)
      event.removeEventListener('waiting', openLoading)
      event.removeEventListener('seeking', openLoading)
      event.removeEventListener('loadeddata', closeLoading)
      event.removeEventListener('canplay', closeLoading)
      event.off(EventName.ERROR_RELOAD, errorReload)
      event.off(EventName.RELOAD_FAIL, reloadFail)
      event.off(EventName.RELOAD_SUCCESS, reloadSuccess)
      event.off(EventName.RELOAD, reload)
      event.off(EventName.HISTORY_PLAY_END, playEnd)
      event.off(EventName.CLEAR_ERROR_TIMER, clearReloadMessage)
    }
  }, [])

  return (
    <div className={`lm-player-message-mask ${loading || status === 'fail' ? 'lm-player-mask-loading-animation' : ''}`}>
      <IconFont
        type={status === 'fail' ? 'lm-player-YesorNo_No_Dark' : 'lm-player-Loading'}
        className={`${
          loading && status !== 'fail' ? 'lm-player-loading-animation' : status === 'fail' ? 'lm-player-loadfail' : ''
        } lm-player-loading-icon`}
      />
      <span className="lm-player-message">{this.message}</span>
    </div>
  )
}

export const NoSource = () => {
  return (
    <div className="lm-player-message-mask lm-player-mask-loading-animation">
      <IconFont style={{ fontSize: 80 }} type="lm-player-PlaySource" title="请选择视频源"></IconFont>
    </div>
  )
}

export default VideoMessage
