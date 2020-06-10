import React, { useCallback } from 'react'
import IconFont from '../iconfont'
import Bar from './bar'
import { computedBound } from '../util'

function ScaleBar({ playContainer, api, scale }) {
  const setScale = useCallback(
    (...args) => {
      const dragDom = playContainer.querySelector('.player-mask-layout')
      api.setScale(...args)
      let position = computedBound(dragDom, api.getPosition(), api.getScale())
      if (position) {
        api.setPosition(position, true)
      }
    },
    [api, playContainer]
  )

  return (
    <div className="contraller-scale-bar">
      {scale && (
        <>
          <Bar>
            <IconFont title="缩小" onClick={() => setScale(-0.2)} type={'lm-player-ZoomOut_Main'} />
          </Bar>
          <Bar>
            <IconFont title="复位" onClick={() => setScale(1, true)} type={'lm-player-ZoomDefault_Main'} />
          </Bar>
          <Bar>
            <IconFont title="放大" onClick={() => setScale(0.2)} type={'lm-player-ZoomIn_Main'} />
          </Bar>
        </>
      )}
    </div>
  )
}

export default ScaleBar
