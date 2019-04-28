import React from 'react'
import { videoDec } from "../context";
import IconFont from "../iconfont";
import { isFullscreen, fullScreenListener, computedBound } from '../util'

@videoDec
class RightBar extends React.Component {
    componentDidMount() {
        fullScreenListener(true, this.update)
    }
    componentWillUnmount() {
        fullScreenListener(false, this.update)
    }
    update = () => {
        this.forceUpdate()
    }
    fullscreen = () => {
        const { api, playContainer } = this.props
        if (!isFullscreen(playContainer)) {
            api.requestFullScreen()
        } else {
            api.cancelFullScreen()
        }
        this.forceUpdate()
    }
    setScale = (...args) => {
        const { api, playContainer } = this.props
        const dragDom = playContainer.querySelector('.player-mask-layout')
        api.setScale(...args)
        let position = computedBound(dragDom, api.getPosition(), api.getScale())
        position && api.setPosition(position, true)
    }
    snapshot = () => {
        const { api, playerProps } = this.props
        const base64 = api.snapshot()
        if (playerProps.actions && playerProps.actions.snapshot) {
            playerProps.actions.snapshot(base64)
        }
    }
    render() {
        const { playContainer } = this.props
        const isfull = isFullscreen(playContainer)
        return <div className="contraller-right-bar">
            <span className="contraller-bar-item">
                <IconFont title="缩小" onClick={() => this.setScale(-0.2)} type={"lm-player-ZoomOut_Main"} />
            </span>
            <span className="contraller-bar-item">
                <IconFont title="复位" onClick={() => this.setScale(1, true)} type={"lm-player-ZoomDefault_Main"} />
            </span>
            <span className="contraller-bar-item">
                <IconFont title="放大" onClick={() => this.setScale(0.2)} type={"lm-player-ZoomIn_Main"} />
            </span>
            <span className="contraller-bar-item">
                <IconFont title="截图" onClick={this.snapshot} type="lm-player-SearchBox" />
            </span>
            <span className="contraller-bar-item">
                <IconFont title={isfull ? "窗口" : "全屏"} onClick={this.fullscreen} type={isfull ? "lm-player-ExitFull_Main" : "lm-player-Full_Main"} />
            </span>
        </div>
    }
}
export default RightBar