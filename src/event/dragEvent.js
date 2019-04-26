import React from 'react'
import { videoDec } from '../context'

@videoDec
class DragEvent extends React.Component {
  constructor(props) {
    super(props)
    const { playContainer, event } = props

    this.dragDom = playContainer.querySelector('.player-mask-layout')
    this.position = {
      start: [0, 0],
      end: [0, 0]
    }
  }
  componentDidMount() {
    this.dragDom.addEventListener('mousedown', this.openDrag)
    this.props.event.addEventListener('transform', this.transformChange, true)
  }
  componentWillUnmount() {
    this.dragDom.removeEventListener('mousedown', this.openDrag)
    this.props.event.removeEventListener('transform', this.transformChange)
  }
  openDrag = (e) => {
    this.position.start = [e.pageX, e.pageY]
    this.dragDom.addEventListener('mousemove', this.moveChange)
    this.dragDom.addEventListener('mouseup', this.stopDrag)

  }
  moveChange = (e) => {
    const { api } = this.props
    const currentPosition = api.getPosition()
    this.position.end = [e.pageX, e.pageY]
    const x = currentPosition[0] + (this.position.end[0] - this.position.start[0])
    const y = currentPosition[1] + (this.position.end[1] - this.position.start[1])
    const position = [x, y]
    api.setPosition(position)
    this.position.start = [e.pageX, e.pageY]
  }
  stopDrag = () => {
    this.dragDom.removeEventListener('mousemove', this.moveChange)
    this.dragDom.removeEventListener('mouseup', this.stopDrag)
    this.transformChange()
  }
  transformChange = () => {
    const { api } = this.props
    let position = this.computedBound(this.dragDom, api.getPosition(), api.getScale())
    position && api.setPosition(position, true)
  }
  computedBound(ele, currentPosition, scale) {
    const data = currentPosition;
    const eleRect = ele.getBoundingClientRect();
    const w = eleRect.width;
    const h = eleRect.height;
    let lx = 0,
      ly = 0;
    if (scale === 1) {
      return [0, 0];
    }
    lx = (w * (scale - 1)) / 2 / scale
    ly = (h * (scale - 1)) / 2 / scale
    let x = 0,
      y = 0;
    if (data[0] >= 0 && data[0] > lx) {
      x = lx;
    }
    if (data[0] >= 0 && data[0] < lx) {
      x = data[0];
    }

    if (data[0] < 0 && data[0] < -lx) {
      x = -lx;
    }
    if (data[0] < 0 && data[0] > -lx) {
      x = data[0];
    }

    if (data[1] >= 0 && data[1] > ly) {
      y = ly;
    }
    if (data[1] >= 0 && data[1] < ly) {
      y = data[1];
    }

    if (data[1] < 0 && data[1] < -ly) {
      y = -ly;
    }
    if (data[1] < 0 && data[1] > -ly) {
      y = data[1];
    }
    if (x !== data[0] || y !== data[1]) {
      return [x, y];
    } else {
      return;
    }
  }

  render() {
    return null
  }
}
export default DragEvent