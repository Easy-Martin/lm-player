# 说明

> 基于[flv.js](https://github.com/bilibili/flv.js)和[hls.js](https://github.com/video-dev/hls.js)封装视频组件，支持`React`,也支持直接其他调用方式但是依赖`React`,`ReactDOM`,`PropTypes`

```javascript
export { Player as default, Player, HistoryPlayer, createHistoryPlayer, createPlayer, Bar }
```

| Component/Factory     | description                        |
| --------------------- | ---------------------------------- |
| `Player`              | 视频组件，适用于 `React`           |
| `HistoryPlayer`       | 历史视频组件，适用于 `React`       |
| `createPlayer`        | 创建视频控件，适用于非 `React`     |
| `createHistoryPlayer` | 创建历史视频控件，适用于非 `React` |
| `Bar`                 | 用于拓展组件 `contraller_bar`      |
| `EventName`           | 返回支持的事件                     |

# 安装

```javascript

yarn add lm-player
//or
npm i lm-player

```

# 例子

## `React`

```javascript
//React simple demo
import LMPlayer from 'lm-player'
ReactDOM.render(
  <LMPlayer
    file={`./video.mp4?${Math.random()}`}
    isLive={false}
    autoplay={true}
    loop={true}
    poster="./poster.png"
    onInitPlayer={player => {
      console.log(player)
    }}
  />,
  document.getElementById('root')
)
```

## 非`React`

```javascript
//other simple demo
import LMPlayer from 'lm-player'
const container = document.getElementById('root')
LMPlayer.createPlayer({
  container,
  isLive: true,
  file: `./video.mp4?${Math.random()}`,
  onInitPlayer: player => {
    //get api
    console.log(player)
  }
})
```

# `Props`

### `Player`通用

| name                  | type            | required | description                            |
| --------------------- | --------------- | -------- | -------------------------------------- |
| `file`                | `boolean`       | `false`  | 视频`url`                              |
| `isLive`              | `boolean`       | `false`  | 默认值`true`，标记是否是直播模式       |
| `errorReloadTimer`    | `number`        | `false`  | 默认值5，错误重连次数                  |
| `type`                | `string`        | `false`  | 可选`flv`,`hls`,`native`，强制设置格式 |
| `onInitPlayer`        | `function`      | `false`  | 参数包含所有暴露`api`                  |
| `draggable`           | `boolean`       | `false`  | 可拖拽，默认值`true`                   |
| `hideContrallerBar`   | `boolean`       | `false`  | 隐藏控制栏，默认值`false`              |
| `scale`               | `boolean`       | `false`  | 可缩放，默认值`true`                   |
| `muted`               | `string`        | `false`  | 禁音，默认值`muted`                    |
| `autoPlay`            | `boolean`       | `false`  | 自动播放，默认值`true`                 |
| `playsInline`         | `boolean`       | `false`  | 默认值`false`                          |
| `preload`             | `string`        | `false`  | 默认值`auto`                           |
| `poster`              | `string`        | `false`  | 封面                                   |
| `loop`                | `boolean`       | `false`  | 默认值`false`                          |
| `snapshot`            | `function`      | `false`  | 返回截图`base64`                       |
| `className`           | `string`        | `false`  | -                                      |
| `rightExtContents`    | `React.Element` | `false`  | 控制栏右侧拓展                         |
| `rightMidExtContents` | `React.Element` | `false`  | 控制栏右侧拓展                         |
| `leftExtContents`     | `React.Element` | `false`  | 控制栏左侧拓展                         |
| `leftMidExtContents`  | `React.Element` | `false`  | 控制栏左侧拓展                         |
| `flvOptions`          | `object`        | `false`  | 见`flv.js`                             |
| `flvConfig`           | `object`        | `false`  | 见`flv.js`                             |
| `children`            | `React.Element` | `false`  | 自定义拓展                             |

###  `HistoryPlayer` 独有

| name          | type     | required | description  |
| ------------- | -------- | -------- | ------------ |
| `historyList` | `object` | `false`  | 视频片断集合 |
| `defaultTime` | `number` | `false`  | 开始播放时间 |

```javascript
//historyList 结构
const historyList = { beginDate: 0, duration: 0, fragments: [] }

//fragments 结构
const fragments = [
    { begin: 0, file: xx, end: 180}
]
```



# `Api`

## 接口

| name                      | arguments               | description                |
| ------------------------- | ----------------------- | -------------------------- |
| `play`                    | -                       | 播放方法                   |
| `reload`                  | -                       | 重连视频                   |
| `pause`                   | -                       | 暂停播放                   |
| `seekTo`                  | `time:number`           | 调整播放进度               |
| `setVolume`               | `volume:number`         | 调整音量大小               |
| `mute`                    | -                       | 禁音                       |
| `unmute`                  | -                       | 退出禁音                   |
| `requestPictureInPicture` | -                       | 开启画中画                 |
| `exitPictureInPicture`    | -                       | 退出画中画                 |
| `setPlaybackRate`         | `rate:number`           | 设置播放速率               |
| `getDuration`             | -                       | 获取视频总时长             |
| `getCurrentTime`          | -                       | 获取当前播放时间           |
| `getSecondsLoaded`        | -                       | 获取缓存时间               |
| `getBufferedTime`         | -                       | 获取当前视频缓存的起止时间 |
| `fastForward`             | `time`默认5秒           | 快进通过`seekTo`方法实现   |
| `backWind`                | `time`默认5秒           | 快退通过`seekTo`方法实现   |
| `snapshot`                | -                       | 截图                       |
| `requestFullScreen`       | -                       | 全屏                       |
| `cancelFullScreen`        | -                       | 退出全屏                   |
| `on`                      | `eventName`,`linstener` | 监听事件                   |
| `off`                     | `eventName`,`linstener` | 移除监听事件               |
| `emit`                    | `eventName`,`data`      | 触发监听事件               |

## 对象

| name       | description                    |
| ---------- | ------------------------------ |
| `flv`      | 当使用`flv`模式是返回`flv`对象 |
| `hls`      | 当使用`hls`模式是返回`hls`对象 |
| `__player` | 返回当前`video`对象            |



# `event`

## 支持事件

```javascript
export default {
  RELOAD: "reload", //手动视频重载
  RELOAD_FAIL: "reloadFail", // 视频出错，重连失败
  RELOAD_SUCCESS: "reloadSuccess", //视频出错，重连成功
  ERROR: "error", //视频出错
  ERROR_RELOAD: "errorRload", //视频出错，自动重连
  HISTORY_PLAY_END: "historyPlayEnd", //历史视频列表播放结束
  SEEK: "seek", //跳跃播放时间
  TRANSFORM: "transform", //视频容器缩放
  CHANGE_PLAY_INDEX: "changePlayIndex", //历史视频列表播放索引改变
  HIDE_CONTRALLER:"hideContraller",
  SHOW_CONTRALLER:"showContraller",
  CLEAR_ERROR_TIMER:"clearErrorTimer" //重连成功清楚错误次数
};

```

> 可通过`on`，`off`，`emit`使用，另外拓展可通过`__player`添加原生`video`事件



