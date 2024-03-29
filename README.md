# 说明

> 基于[mpegts.js](https://github.com/xqq/mpegts.js)和[hls.js](https://github.com/video-dev/hls.js)封装`React`视频组件，基于`canvas`模拟逐帧播放

```javascript
import { Player, HistoryPlayer } from 'lm-player';
```

| Component/Factory | description                  |
| ----------------- | ---------------------------- |
| `Player`          | 视频组件，适用于 `React`     |
| `HistoryPlayer`   | 历史视频组件，适用于 `React` |

# 安装

```javascript

yarn add lm-player
//or
npm i lm-player

```

# 例子

```ts
//React simple demo
import { Player } from 'lm-player';
ReactDOM.render(<Player fpsDelay={800} oneFpsPlay={true} type={state.type} url="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" isLive={false} />, document.getElementById('root'));
```

# `Props`

### `Player`通用

```ts
export interface ISinglePlayerProps {
  /**
   * 视频播放地址
   */
  url?: string;

  /**
   * 容器类名
   */
  className?: string;
  children?: React.ReactNode;

  /**
   * 同html video muted  静音
   * @default true
   */
  muted?: boolean;
  /**
   * 同html video autoplay  自动播放
   * @default true
   */
  autoPlay?: boolean;

  /**
   * 同html video playsinline  自动播放
   * @default false
   */
  playsInline?: boolean;
  /**
   *同html video preload  预加载
   */
  preload?: string;
  /**
   * 视频封面
   */
  poster?: string;

  /**
   * 同html video loop  循环
   * @default false
   */
  loop?: boolean;

  /**
   * 视频格式
   * @default 'native'
   */
  type?: 'flv' | 'hls' | 'native';

  /**
   * 隐藏工具栏
   * @default false
   */
  hideContrallerBar?: boolean;

  /**
   * 直播模式
   * @default true
   */
  isLive?: boolean;

  /**
   * 工具栏右外侧拓展
   */
  rightExtContents?: React.ReactNode;
  /**
   * 工具栏右内侧拓展
   */
  rightMidExtContents?: React.ReactNode;
  /**
   * 工具栏左外侧拓展
   */
  leftExtContents?: React.ReactNode;
  /**
   * 工具栏左内侧拓展
   */
  leftMidExtContents?: React.ReactNode;

  /**
   * 自定义时间轴
   */
  customTimeLine?: React.ReactNode;

  /**
   * 错误重试次数
   * @default 5
   */
  errorReloadTimer?: number;

  /**
   * 自定义flv参数配置
   * @type FlvPlayerConfig
   */
  flvConfig?: FlvPlayerConfig;

  /**
   * 自定义hls参数配置
   * @type HlsConfig
   */
  hlsConfig?: HlsConfig;

  /**
   * 自定义reload函数
   */
  reload?: () => void;

  /**
   * extaction
   */
  extActions?: { [key: string]: (...args: any) => void };

  /**
   * 视频可播放时执行钩子
   */
  onCanPlayerInit?: () => void;

  /**
   * 自定义video事件
   */
  videoEvents?: CustomEvent[];

  /**
   * 自定义播放器的事件
   */
  playerEvents?: CustomEvent[];

  /**
   * 开启单帧播放
   */
  oneFpsPlay?: boolean;

  /**
   * 获取视频针的频次 (ms)
   */
  fpsDelay?: number;

  /**
   * 视频每秒多少帧，用于控制逐帧播放
   */
  fps?: number;
}
```

### `HistoryPlayer` 独有

```ts
export interface ISegmentPlayerProps extends Omit<ISinglePlayerProps, 'url'> {
  /**
   * 云录像片段信息
   */
  segments?: ISegmentType[];

  /**
   * 云录像开始时间
   */
  begin?: number;

  forwordRef?: React.MutableRefObject<ExportPlayerType>;

  defaultIndex?: number;
}
```

# ISegmentType

```ts
export interface ISegmentType {
  id?: string;
  /**
   * 视频片段地址
   */
  url?: string;

  /**
   * 片段开始时间
   */
  beginTime: number;

  /**
   * 片段结束时间
   */
  endTime: number;
}
```

# `event`

## 支持事件

```javascript
export default {
  RELOAD: 'reload', //手动视频重载
  RELOAD_FAIL: 'reloadFail', // 视频出错，重连失败
  RELOAD_SUCCESS: 'reloadSuccess', //视频出错，重连成功
  ERROR: 'error', //视频出错
  ERROR_RELOAD: 'errorRload', //视频出错，自动重连
  HISTORY_PLAY_END: 'historyPlayEnd', //历史视频列表播放结束
  PLAY_ENDED: 'play_ended', //单个片断播放完毕
  SEEK: 'seek', //跳跃播放时间
  TRANSFORM: 'transform', //视频容器缩放
  CHANGE_PLAY_INDEX: 'changePlayIndex', //历史视频列表播放索引改变
  HIDE_CONTRALLER: 'hideContraller',
  SHOW_CONTRALLER: 'showContraller',
  CLEAR_ERROR_TIMER: 'clearErrorTimer',
  CANVAS_PAUSE: 'canvasPause', // 逐帧暂停
  CANVAS_PLAY: 'canvasPlay', //逐帧播放
};
```
