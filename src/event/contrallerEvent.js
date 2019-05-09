import React from "react";
import { videoDec } from "../context";
import EventName from "./eventName";

@videoDec
class ContrallerEvent extends React.Component {
  constructor(props) {
    super(props);
    this.timer = null;
  }
  componentDidMount() {
    const { playContainer, event } = this.props;
    playContainer.addEventListener("mousemove", this.showContraller, false);
    playContainer.addEventListener("mouseout", this.hideContraller, false);
    this.timer = setTimeout(() => {
      event.emit(EventName.HIDE_CONTRALLER);
    }, 5 * 1000);
  }
  componentWillUnmount() {
    const { playContainer } = this.props;
    playContainer.addEventListener("mousemove", this.showContraller, false);
    playContainer.addEventListener("mouseout", this.hideContraller, false);
    clearTimeout(this.timer);
  }
  showContraller = () => {
    const { event } = this.props;
    event.emit(EventName.SHOW_CONTRALLER);
    this.hideContraller();
  };
  hideContraller = () => {
    const { event } = this.props;
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      event.emit(EventName.HIDE_CONTRALLER);
    }, 3 * 1000);
  };
  render() {
    return null;
  }
}

export default ContrallerEvent;
