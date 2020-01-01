import React, { useEffect, useState, useRef } from 'react'
import EventName from './eventName'

function ContrallerEvent({ event, playContainer, children }) {
  const timer = useRef(null)
  const [visibel, setVisibel] = useState(true)
  useEffect(() => {
    const showContraller = () => {
      setVisibel(true)
      hideContraller()
      event.emit(EventName.SHOW_CONTRALLER)
    }
    const hideContraller = () => {
      clearTimeout(timer.current)
      timer.current = setTimeout(() => {
        setVisibel(false)
        event.emit(EventName.HIDE_CONTRALLER)
      }, 3 * 1000)
    }
    playContainer.addEventListener('mousemove', showContraller, false)
    playContainer.addEventListener('mouseout', hideContraller, false)
  })

  return React.Children.map(children, child => (React.isValidElement(child) ? React.cloneElement(child, { visibel }) : child))
}

export default ContrallerEvent
