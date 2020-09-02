declare namespace LMPlayer {
  type HistoryFileList = {
    beginDate: number
    duration: number
    fragments: Array<{ begin: number; end: number; file: string }>
  }
  interface ApiInterface {
    play(): void
    reload(): void
    pause(): void
    seekTo(time: number): void
    setVolume(volume: number): void
    mute(): void
    unmute(): void
    requestPictureInPicture(): void
    exitPictureInPicture(): void
    setPlaybackRate(rate: number): void
    destroy(): void
    getDuration(): number
    getCurrentTime(): number
    getSecondsLoaded(): number
    getBufferedTime(): [number, number]
    fastForward(time: number): void
    backWind(time: number): void
    snapshot(): string
    requestFullScreen(): void
    cancelFullScreen(): void
    changePlayIndex?: (index: number) => void
    __player: HTMLVideoElement
    flv: object
    hls: object
  }
  type PlayerProps = {
    file?: string //播放地址 必填
    isLive?: boolean //是否实时视频
    errorReloadTimer?: number //视频错误重连次数
    type?: 'flv' | 'hls' | 'native' //强制视频流类型
    onInitPlayer?: (api: ApiInterface) => any
    draggable?: boolean
    hideContrallerBar?: boolean
    scale?: boolean
    muted?: string
    autoPlay?: boolean
    playsInline?: boolean
    preload?: string
    poster?: string
    loop?: boolean
    snapshot?: () => string
    className?: string
    rightExtContents?: React.ReactElement
    rightMidExtContents?: React.ReactElement
    leftExtContents?: React.ReactElement
    leftMidExtContents?: React.ReactElement
    flvOptions?: object
    flvConfig?: object
    children?: React.ReactElement
    defaultTime?: number
    historyList?: HistoryFileList
  }
  declare const Player: React.FunctionComponent<PlayerProps>
  declare const HistoryPlayer: React.FunctionComponent<PlayerProps>
  function createPlayer(options: PlayerProps): void
  function createHistoryPlayer(options: PlayerProps): void
  interface EventName {
    static RELOAD: 'reload' //手动视频重载
    static RELOAD_FAIL: 'reloadFail' // 视频出错，重连失败
    static RELOAD_SUCCESS: 'reloadSuccess' //视频出错，重连成功
    static ERROR: 'error' //视频出错
    static ERROR_RELOAD: 'errorRload' //视频出错，自动重连
    static HISTORY_PLAY_END: 'historyPlayEnd' //历史视频列表播放结束
    static SEEK: 'seek' //跳跃播放时间
    static TRANSFORM: 'transform' //视频容器缩放
    static CHANGE_PLAY_INDEX: 'changePlayIndex' //历史视频列表播放索引改变
    static HIDE_CONTRALLER: 'hideContraller'
    static SHOW_CONTRALLER: 'showContraller'
    static CLEAR_ERROR_TIMER: 'clearErrorTimer'
  }
}

export = LMPlayer
export as namespace LMPlayer
