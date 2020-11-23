import React, { useState, useEffect, useRef } from 'react'
import EventName from './eventName'

function ErrorEvent({ event, api, errorReloadTimer, flv, hls, changePlayIndex, isHistory, playIndex }) {
  const [errorTimer, setErrorTime] = useState(0)
  const errorInfo = useRef(null)
  const reloadTimer = useRef(null)

  useEffect(() => {
    const errorHandle = (...args) => {
      if (args[2] && args[2].msg && args[2].msg.includes('Unsupported audio')) {
        return
      }
      console.error(...args)
      errorInfo.current = args
      setErrorTime(errorTimer + 1)
    }

    const reloadSuccess = () => {
      if (errorTimer > 0) {
        console.warn('视频重连成功！')
        event.emit(EventName.RELOAD_SUCCESS)
        clearErrorTimer()
      }
    }
    const clearErrorTimer = () => setErrorTime(0)
    try {
      if (flv) {
        flv.on('error', errorHandle)
      }
      if (hls) {
        hls.on('hlsError', errorHandle)
      }
    } catch (e) {
      //
    }

    if (isHistory) {
      //历史视频切换播放索引时清除错误次数
      event.on(EventName.CHANGE_PLAY_INDEX, clearErrorTimer)
      //历史视频主动清除错误次数
      event.on(EventName.CLEAR_ERROR_TIMER, clearErrorTimer)
    }
    event.addEventListener('error', errorHandle, false)
    //获取video状态清除错误状态
    event.addEventListener('canplay', reloadSuccess, false)

    return () => {
      try {
        if (flv) {
          flv.off('error', errorHandle)
        }
        if (hls) {
          hls.off('hlsError', errorHandle)
        }
      } catch (e) {
        console.warn(e)
      }
      if (isHistory) {
        event.off(EventName.CHANGE_PLAY_INDEX, clearErrorTimer)
        event.off(EventName.CLEAR_ERROR_TIMER, clearErrorTimer)
      }
      event.removeEventListener('error', errorHandle, false)
      event.removeEventListener('canplay', reloadSuccess, false)
    }
  }, [event, flv, hls, errorTimer])

  useEffect(() => {
    if (errorTimer === 0) {
      return
    }
    if (errorTimer > errorReloadTimer) {
      isHistory ? changePlayIndex(playIndex + 1) : event.emit(EventName.RELOAD_FAIL)
      api.unload()
      return
    }

    console.warn(`视频播放出错，正在进行重连${errorTimer}`)
    reloadTimer.current = setTimeout(() => {
      event.emit(EventName.ERROR_RELOAD, errorTimer, ...errorInfo.current)
      api.reload(true)
    }, 2 * 1000)

    return () => {
      clearTimeout(reloadTimer.current)
    }
  }, [errorTimer, api, event, flv, hls])

  return <></>
}

export default ErrorEvent
