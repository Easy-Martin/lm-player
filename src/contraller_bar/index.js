import React from "react";
import LeftBar from "./left_bar";
import RightBar from "./right_bar";
import "../style/bar.less"
class ContrallerBar extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="contraller-bar-layout">
        <LeftBar />
        <RightBar />
      </div>
    );
  }
}

export default ContrallerBar;
