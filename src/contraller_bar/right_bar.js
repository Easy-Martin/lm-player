import React from "react";
import { videoDec } from "../context";
import IconFont from "../iconfont";
import Bar from "./bar";
import { isFullscreen, fullScreenListener, computedBound } from "../util";

@videoDec
class RightBar extends React.Component {
  componentDidMount() {
    fullScreenListener(true, this.update);
  }
  componentWillUnmount() {
    fullScreenListener(false, this.update);
  }
  update = () => {
    this.forceUpdate();
  };
  fullscreen = () => {
    const { api, playContainer } = this.props;
    if (!isFullscreen(playContainer)) {
      api.requestFullScreen();
    } else {
      api.cancelFullScreen();
    }
    this.forceUpdate();
  };
  setScale = (...args) => {
    const { api, playContainer } = this.props;
    const dragDom = playContainer.querySelector(".player-mask-layout");
    api.setScale(...args);
    let position = computedBound(dragDom, api.getPosition(), api.getScale());
    position && api.setPosition(position, true);
  };
  snapshot = () => {
    const { api, playerProps } = this.props;
    if (playerProps.snapshot) {
      playerProps.snapshot(api.snapshot());
    }
  };
  render() {
    const { playContainer, playerProps } = this.props;
    const { isScale, snapshot, rightExtContents = [], rightMidExtContents = [] } = playerProps;
    const isfull = isFullscreen(playContainer);

    return (
      <div className="contraller-right-bar">
        {rightMidExtContents.map((v, i) => (
          <Bar key={i}>{v}</Bar>
        ))}
        {isScale && (
          <>
            <Bar>
              <IconFont title="缩小" onClick={() => this.setScale(-0.2)} type={"lm-player-ZoomOut_Main"} />
            </Bar>
            <Bar>
              <IconFont title="复位" onClick={() => this.setScale(1, true)} type={"lm-player-ZoomDefault_Main"} />
            </Bar>
            <Bar>
              <IconFont title="放大" onClick={() => this.setScale(0.2)} type={"lm-player-ZoomIn_Main"} />
            </Bar>
          </>
        )}

        {snapshot && (
          <Bar>
            <IconFont title="截图" onClick={this.snapshot} type="lm-player-SearchBox" />
          </Bar>
        )}
        <Bar>
          <IconFont title={isfull ? "窗口" : "全屏"} onClick={this.fullscreen} type={isfull ? "lm-player-ExitFull_Main" : "lm-player-Full_Main"} />
        </Bar>
        {rightExtContents.map((v, i) => (
          <Bar key={i}>{v}</Bar>
        ))}
      </div>
    );
  }
}
export default RightBar;
