import React from 'react'
import { videoDec } from '../context'
import EventName from './eventName'
import PropTypes from 'prop-types'

@videoDec
class ContrallerEvent extends React.Component {
  constructor(props) {
    super(props)
    this.timer = null
    this.visibel = true
  }
  componentDidMount() {
    const { playContainer, event } = this.props
    playContainer.addEventListener('mousemove', this.showContraller, false)
    playContainer.addEventListener('mouseout', this.hideContraller, false)
    this.timer = setTimeout(() => {
      event.emit(EventName.HIDE_CONTRALLER)
    }, 5 * 1000)
  }
  componentWillUnmount() {
    const { playContainer } = this.props
    playContainer.addEventListener('mousemove', this.showContraller, false)
    playContainer.addEventListener('mouseout', this.hideContraller, false)
    clearTimeout(this.timer)
  }
  showContraller = () => {
    if (!this.visibel) {
      const { event } = this.props
      this.visibel = true
      event.emit(EventName.SHOW_CONTRALLER)
    }
    this.hideContraller()
  }
  hideContraller = () => {
    const { event } = this.props
    clearTimeout(this.timer)
    this.timer = setTimeout(() => {
      this.visibel = false
      event.emit(EventName.HIDE_CONTRALLER)
    }, 3 * 1000)
  }
  render() {
    return null
  }
}

ContrallerEvent.propTypes = {
  api: PropTypes.object,
  event: PropTypes.object,
  playContainer: PropTypes.node
}

export default ContrallerEvent
