import React from "react";
import ReactDOM from 'react-dom'
import "./style/slider.less";

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.sliderDomRef = React.createRef();
    this.layoutDom = null
    this.lineDom = null
    this.dragDom = null
    this.dragFlag = false
    this.state = {
      value: this.props.currentPercent || 0,
      showTips: false,
      tipsX: 0
    };
  }
  componentWillReceiveProps(nextProps) {
    if (!this.dragFlag) {
      this.setState({ value: nextProps.currentPercent || 0 })
    }
  }
  componentDidMount() {
    this.layoutDom = ReactDOM.findDOMNode(this.sliderDomRef.current)
    this.dragDom = this.layoutDom.querySelector('.drag-change-icon')
    this.lineDom = this.layoutDom.querySelector('.slider-content')

    this.layoutDom.addEventListener('mousemove', this.renderSliderTips, false)
    this.layoutDom.addEventListener('mouseout', this.hideSliderTips, false)
    this.lineDom.addEventListener("click", this.changeCurrentValue, false);
    this.dragDom.addEventListener('click', this.cancelPropagation, false)
    this.dragDom.addEventListener('mousedown', this.startDrag, false)

  }
  componentWillUnmount() {
    this.layoutDom.removeEventListener('mousemove', this.renderSliderTips, false)
    this.layoutDom.removeEventListener('mouseout', this.hideSliderTips, false)
    this.lineDom.removeEventListener("click", this.changeCurrentValue, false);
    this.dragDom.removeEventListener('click', this.cancelPropagation, false)
    this.dragDom.removeEventListener('mousedown', this.startDrag, false)

    document.body.removeEventListener('mousemove', this.moveChange)
    document.body.removeEventListener('mouseup', this.stopDrag)

    this.sliderDomRef = null;
    this.layoutDom = null
    this.lineDom = null
    this.dragDom = null
    this.dragFlag = null
  }
  renderSliderTips = (e) => {
    const { renderTimeLineTips } = this.props
    if (!renderTimeLineTips) {
      return
    }
    const { x, width } = this.layoutDom.getBoundingClientRect();
    const tipsX = (e.pageX - x)
    const percent = tipsX / width
    const ele = this.layoutDom.querySelector('.slide-tips')
    ReactDOM.render(renderTimeLineTips ? renderTimeLineTips(percent) : null, ele)
    this.setState({ tipsX, showTips: true })
  }
  hideSliderTips = () => {
    this.setState({ showTips: false })
  }
  cancelPropagation = (e) => {
    e.stopPropagation()
  }
  startDrag = (e) => {
    e.stopPropagation()
    this.dragFlag = true
    document.body.addEventListener('mousemove', this.moveChange)
    document.body.addEventListener('mouseup', this.stopDrag)
  }
  moveChange = (e) => {
    e.stopPropagation()
    const percent = this.computedPositionForEvent(e)
    this.setState({ value: percent })
  }
  stopDrag = (e) => {
    e.stopPropagation()
    document.body.removeEventListener('mousemove', this.moveChange)
    document.body.removeEventListener('mouseup', this.stopDrag)
    this.dragFlag = false
    const percent = this.computedPositionForEvent(e)
    this.props.onChange && this.props.onChange(percent / 100)

  }
  computedPositionForEvent(e) {
    const { x, width } = this.layoutDom.getBoundingClientRect();
    const { pageX } = e
    let dx = pageX - x;
    if (dx > width) {
      dx = width
    }
    if (dx < 0) {
      dx = 0
    }
    return dx / width * 100
  }
  changeCurrentValue = (event) => {
    event.stopPropagation()
    const { width, x } = this.layoutDom.getBoundingClientRect();
    let percent = (event.pageX - x) / width;
    this.props.onChange && this.props.onChange(percent)
  }
  render() {
    const { value, showTips, tipsX } = this.state
    const { availablePercent = 0, className = '' } = this.props;
    return (
      <div className={`slider-layout ${className}`} ref={this.sliderDomRef}>
        <div className="slider-content">
          <div className="slider-max-line" />
          <div className="slider-visibel-line" style={{ width: `${availablePercent}%` }} />
          <div className="slider-current-line" style={{ width: `${value}%` }} />
          {this.props.children}
        </div>
        <div className="slider-other-content"><div className="drag-change-icon" draggable={false} style={{ left: `${value}%` }}></div></div>
        <div style={{ left: tipsX, display: showTips ? 'block' : 'none' }} className="slide-tips" />
      </div>
    );
  }
}

export default Slider;
