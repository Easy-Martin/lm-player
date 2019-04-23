import React from 'react'
import { videoDec } from "../context";
import IconFont from "../iconfont";
import { isFullscreen, fullScreenListener } from '../util'

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
    render() {
        const { api, playContainer } = this.props
        return <div className="contraller-right-bar">
            <span className="contraller-bar-item">
                <IconFont onClick={() => api.setScale(-0.2)} type={"lm-player-ZoomOut_Main"} />
            </span>
            <span className="contraller-bar-item">
                <IconFont onClick={() => api.setScale(1, true)} type={"lm-player-ZoomDefault_Main"} />
            </span>
            <span className="contraller-bar-item">
                <IconFont onClick={() => api.setScale(0.2)} type={"lm-player-ZoomIn_Main"} />
            </span>
            <span className="contraller-bar-item">
                <IconFont onClick={this.fullscreen} type={isFullscreen(playContainer) ? "lm-player-ExitFull_Main" : "lm-player-Full_Main"} />
            </span>
        </div>
    }
}
export default RightBar