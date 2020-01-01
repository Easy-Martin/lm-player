import React, { useEffect, useState, useMemo } from 'react'
import IconFont from './iconfont'
import EventName from './event/eventName'
import './style/message.less'

function VideoMessage({ event, api }) {
  const [state, setState] = useState({ status: null, errorTimer: null, loading: false })

  const message = useMemo(() => {
    if (!state.status) {
      return ''
    }
    if (state.status === 'fail') {
      return '视频错误'
    }
    if (state.status === 'reload') {
      return `视频加载错误，正在进行重连第${state.errorTimer}重连`
    }
  }, [state.errorTimer, state.status])

  useEffect(() => {
    const openLoading = () => setState(old => ({ ...old, loading: true }))
    const closeLoading = () => setState(old => ({ ...old, loading: false }))
    const errorReload = timer => setState(() => ({ status: 'reload', errorTimer: timer, loading: true }))
    const reloadFail = () => setState(old => ({ ...old, status: 'fail' }))
    const reloadSuccess = () => setState(old => ({ ...old, status: null }))
    const reload = () => setState(old => ({ ...old, status: 'reload' }))
    const playEnd = () => (setState(old => ({ ...old, status: null, loading: false })), api.pause())

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
    event.on(EventName.CLEAR_ERROR_TIMER, reloadSuccess)

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
      event.off(EventName.CLEAR_ERROR_TIMER, reloadSuccess)
    }
  }, [event])

  const { loading, status } = state
  return (
    <div className={`lm-player-message-mask ${loading || status === 'fail' ? 'lm-player-mask-loading-animation' : ''}`}>
      <IconFont
        type={status === 'fail' ? 'lm-player-YesorNo_No_Dark' : 'lm-player-Loading'}
        className={`${loading && status !== 'fail' ? 'lm-player-loading-animation' : status === 'fail' ? 'lm-player-loadfail' : ''} lm-player-loading-icon`}
      />
      <span className="lm-player-message">{message}</span>
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
