---
title: 视频组件 Player
nav:
  path: /components
  title: 组件库
  order: 2
group:
  path: /widget
  title: 控件
  order: 1
---

## Player 视频控件

基于`@cloud-app-dev/flv.js`和`hls.js`实现，支持，`flv`,`mp4`,`m3u8` 格式，支持 `H264` 编码的视频。

- `SinglePlayer` 是标准的播放器，可用于直播、文件播放等
- `SegmentPlayer` 是用于片段的集合的播放，特点是基于片段信息拼接一个完整的虚拟时间轴
- `FrontendPlayer` 用于前端录像的直播，属于业务组件，目前按照新接入前端录像的方式设计的组件

## 代码演示

```tsx
import Demo from './demo';

const App = () => {
  return <Demo />;
};
export default App;
```

## API

### SinglePlayer

<API id="Player" title="SinglePlayer"></API>

### FrontendPlayer

<API id="FrontendPlayer" title="FrontendPlayer"></API>

### SegmentPlayer

<API id="SegmentPlayer"></API>
