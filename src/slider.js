import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import './style/slider.less'

class Slider extends React.Component {
  constructor(props) {
    super(props)
    this.sliderDomRef = React.createRef()
    this.layoutDom = null
    this.lineDom = null
    this.dragDom = null
    this.dragFlag = false
    this.state = {
      value: this.props.currentPercent || 0,
      tempValue: 0,
      showTips: false,
      tipsX: 0,
      tipsY: 0
    }
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (!this.dragFlag) {
      this.setState({ value: nextProps.currentPercent || 0 })
    }
  }
  componentDidMount() {
    this.layoutDom = this.sliderDomRef.current
    this.dragDom = this.layoutDom.querySelector('.drag-change-icon')
    this.lineDom = this.layoutDom.querySelector('.slider-content')

    this.layoutDom.addEventListener('mousemove', this.renderSliderTips, false)
    this.layoutDom.addEventListener('mouseout', this.hideSliderTips, false)
    this.lineDom.addEventListener('click', this.changeCurrentValue, false)
    this.dragDom.addEventListener('click', this.cancelPropagation, false)
    this.dragDom.addEventListener('mousedown', this.startDrag, false)
  }
  componentWillUnmount() {
    clearTimeout(this.timer)
    this.layoutDom.removeEventListener('mousemove', this.renderSliderTips, false)
    this.layoutDom.removeEventListener('mouseout', this.hideSliderTips, false)
    this.lineDom.removeEventListener('click', this.changeCurrentValue, false)
    this.dragDom.removeEventListener('click', this.cancelPropagation, false)
    this.dragDom.removeEventListener('mousedown', this.startDrag, false)

    document.body.removeEventListener('mousemove', this.moveChange)
    document.body.removeEventListener('mouseup', this.stopDrag)

    this.sliderDomRef = null
    this.layoutDom = null
    this.lineDom = null
    this.dragDom = null
    this.dragFlag = null
  }
  renderSliderTips = e => {
    const { renderTips } = this.props
    if (!renderTips) {
      return
    }
    clearTimeout(this.timer)
    this.timer = setTimeout(() => {
      const { x, width, top } = this.layoutDom.getBoundingClientRect()
      const tipsX = e.pageX - x
      let percent = (e.pageX - x) / width
      percent = percent < 0 ? 0 : percent > 1 ? 1 : percent
      this.setState({ tipsX, tipsY: top, showTips: true, tempValue: percent })
    }, 200)
  }
  hideSliderTips = () => {
    clearTimeout(this.timer)
    this.setState({ showTips: false })
  }
  cancelPropagation = e => {
    e.stopPropagation()
  }
  startDrag = e => {
    e.stopPropagation()
    this.dragFlag = true
    document.body.addEventListener('mousemove', this.moveChange)
    document.body.addEventListener('mouseup', this.stopDrag)
  }
  moveChange = e => {
    e.stopPropagation()
    const percent = this.computedPositionForEvent(e)
    this.setState({ value: percent })
  }
  stopDrag = e => {
    e.stopPropagation()
    document.body.removeEventListener('mousemove', this.moveChange)
    document.body.removeEventListener('mouseup', this.stopDrag)
    this.dragFlag = false
    let percent = this.state.value / 100
    percent = percent < 0 ? 0 : percent > 1 ? 1 : percent
    this.props.onChange && this.props.onChange(percent)
  }
  computedPositionForEvent(e) {
    const { x, width } = this.layoutDom.getBoundingClientRect()
    const { pageX } = e
    let dx = pageX - x
    if (dx > width) {
      dx = width
    }
    if (dx < 0) {
      dx = 0
    }
    return (dx / width) * 100
  }
  changeCurrentValue = event => {
    event.stopPropagation()
    const { width, x } = this.layoutDom.getBoundingClientRect()
    let percent = (event.pageX - x) / width
    this.props.onChange && this.props.onChange(percent)
  }
  render() {
    const { value, showTips, tipsX } = this.state
    const { availablePercent = 0, className = '', tipsY } = this.props
    return (
      <div className={`slider-layout ${className}`} ref={this.sliderDomRef}>
        <div className="slider-content">
          <div className="slider-max-line" />
          <div className="slider-visibel-line" style={{ width: `${availablePercent}%` }} />
          <div className="slider-current-line" style={{ width: `${value}%` }} />
          {this.props.children}
        </div>
        <div className="slider-other-content">
          <div className="drag-change-icon" draggable={false} style={{ left: `${value}%` }} />
        </div>
        <Tips visibel={showTips} className="lm-player-slide-tips" style={{ left: tipsX, top: tipsY }} getContainer={() => this.sliderDomRef.current}>
          {this.props.renderTips && this.props.renderTips(this.state.tempValue)}
        </Tips>
      </div>
    )
  }
}

Slider.propTypes = {
  currentPercent: PropTypes.number,
  seekTo: PropTypes.func,
  video: PropTypes.element,
  renderTips: PropTypes.func,
  availablePercent: PropTypes.number,
  onChange: PropTypes.func,
  children: PropTypes.any,
  className: PropTypes.string,
  tipsY: PropTypes.number
}
Slider.defaultProps = {
  tipsY: -10
}

function Tips({ getContainer, visibel, children, style, className = '' }) {
  const ele = useRef(document.createElement('div'))
  useEffect(() => {
    const box = getContainer ? getContainer() || document.body : document.body
    box.appendChild(ele.current)
    return () => box.removeChild(ele.current)
  }, [getContainer])

  if (!visibel) {
    return null
  }
  return ReactDOM.createPortal(
    <div className={className} style={style}>
      {children}
    </div>,
    ele.current
  )
}

Tips.propTypes = {
  visibel: PropTypes.bool,
  children: PropTypes.element,
  style: PropTypes.any,
  className: PropTypes.string
}

export default Slider
