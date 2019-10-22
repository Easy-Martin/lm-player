import React from "react";
import LeftBar from "./left_bar";
import RightBar from "./right_bar";
import EventName from "../event/eventName";
import {videoDec} from '../context'
import "../style/bar.less";

@videoDec
class ContrallerBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hideBar: false
    };
  }
  componentDidMount() {
    const { event } = this.props;
    event.on(EventName.HIDE_CONTRALLER, this.hideContraller);
    event.on(EventName.SHOW_CONTRALLER, this.showContraller);
  }

  hideContraller = () => {
    this.setState({ hideBar: true });
  };
  showContraller = () => {
    this.setState({ hideBar: false });
  };
  render() {
    return (
      <div className={`contraller-bar-layout ${this.state.hideBar ? "hide-contraller-bar" : ""}`}>
        <LeftBar />
        <RightBar />
      </div>
    );
  }
}

export default ContrallerBar;
