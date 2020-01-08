import React, { useEffect } from 'react'
import BrowserTab from './event/browserTabEvent'

function LiveHeart({ api }) {
  useEffect(() => {
    const browserTabChange = function() {
      if (BrowserTab.visibilityState() === 'visible') {
        const current = api.getCurrentTime()
        const buffered = api.getSecondsLoaded()
        if (buffered - current > 5) {
          console.warn(`当前延时过大current->${current} buffered->${buffered}, 基于视频当前缓存时间更新当前播放时间 updateTime -> ${buffered - 2}`)
          api.seekTo(buffered - 2 > 0 ? buffered - 2 : 0)
        }
      }
    }
    BrowserTab.addEventListener(browserTabChange)
    return () => {
      BrowserTab.removeEventListener(browserTabChange)
    }
  }, [api])
  return <></>
}

export default LiveHeart
