import flvjs from "./libs/flv.ly.min.js";
import * as Hls from "./libs/hls.min.js";


/**
 * 创建HLS对象
 * @param {*} video
 * @param {*} file
 */
export function createHlsPlayer(video, file) {
  if (Hls.isSupported()) {
    const player = new Hls({ liveDurationInfinity: true, levelLoadingTimeOut: 15000, fragLoadingTimeOut: 25000, enableWorker: true });
    player.attachMedia(video);
    player.on(Hls.Events.MEDIA_ATTACHED, () => {
      player.loadSource(file);
      player.on(Hls.Events.MANIFEST_PARSED, () => {
        // console.log(player);
      });
    });
    return player;
  }
}

/**
 * 创建FLV对象
 * @param {*} video
 * @param {*} options
 */
export function createFlvPlayer(video, options) {
  const { flvOptions = {}, flvConfig = {} } = options;
  if (flvjs.isSupported()) {
    const player = flvjs.createPlayer(
      Object.assign({}, flvOptions, {
        type: "flv",
        url: options.file
      }),
      Object.assign({}, flvConfig, {
        enableWorker: true,
        // lazyLoad: false,
        //Indicates how many seconds of data to be kept for lazyLoad.
        // lazyLoadMaxDuration: 0,
        // autoCleanupMaxBackwardDuration: 3,
        // autoCleanupMinBackwardDuration: 2,
        // autoCleanupSourceBuffer: true,
        enableStashBuffer: false,
        stashInitialSize: 128,
        isLive: options.isLive || true
      })
    );
    player.attachMediaElement(video);
    player.load();
    return player;
  }
}

/**
 * 获取播放文件类型
 * @param {*} url
 */
export function getVideoType(url) {
  const reg = /([^\.\/\\]+)\.(([a-z]|[0-9])+(\?\S+)?)$/i;
  const resultArr = reg.exec(url);
  if (resultArr) {
    return resultArr[2].replace(resultArr[4], "");
  }
}

/**
 * 播放时间转字符串
 * @param {*} second_time
 */
export function timeStamp(second_time) {
  let time = Math.ceil(second_time);
  if (time > 60) {
    let second = Math.ceil(second_time % 60);
    let min = Math.floor(second_time / 60);
    time = `${min < 10 ? `0${min}` : min}:${second < 10 ? `0${second}` : second}`;
    if (min > 60) {
      min = Math.ceil((second_time / 60) % 60);
      let hour = Math.floor(second_time / 60 / 60);
      time = `${hour < 10 ? `0${hour}` : hour}:${min < 10 ? `0${min}` : min}:${second < 10 ? `0${second}` : second}`;
    } else {
      time = `00:${time}`;
    }
  } else {
    time = `00:00:${time < 10 ? `0${time}` : time}`;
  }

  return time;
}

/**
 * 日期格式化
 * @param {*} timetemp
 */
export function dateFormat(timetemp) {
  const date = new Date(timetemp);
  let YYYY = date.getFullYear();
  let DD = date.getDate();
  let MM = date.getMonth() + 1;
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  return `${YYYY}.${MM > 10 ? MM : "0" + MM}.${DD > 10 ? DD : "0" + DD} ${hh > 10 ? hh : "0" + hh}.${mm > 10 ? mm : "0" + mm}.${ss > 10 ? ss : "0" + ss}`;
}

/**
 * 全屏
 * @param {*} element
 */
export function fullscreen(element) {
  if (element.requestFullScreen) {
    element.requestFullScreen();
  } else if (element.webkitRequestFullScreen) {
    element.webkitRequestFullScreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}

/**
 * exitFullscreen 退出全屏
 * @param  {Objct} element 选择器
 */
export function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}

/**
 * 判读是否支持全屏
 */
export function fullscreenEnabled() {
  return document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled || document.msFullscreenEnabled;
}

/**
 * [isFullscreen 判断浏览器是否全屏]
 * @return [全屏则返回当前调用全屏的元素,不全屏返回false]
 */
export function isFullscreen(ele) {
  if (!ele) {
    return false;
  }
  return document.fullscreenElement === ele || document.msFullscreenElement === ele || document.mozFullScreenElement === ele || document.webkitFullscreenElement === ele || false;
}
// 添加 / 移除 全屏事件监听
export function fullScreenListener(isAdd, fullscreenchange) {
  const funcName = isAdd ? "addEventListener" : "removeEventListener";
  const fullScreenEvents = ["fullscreenchange", "mozfullscreenchange", "webkitfullscreenchange", "msfullscreenchange"];
  fullScreenEvents.map(v => document[funcName](v, fullscreenchange));
}

/**
 * 计算视频拖拽边界
 * @param {*} ele
 * @param {*} currentPosition
 * @param {*} scale
 */
export function computedBound(ele, currentPosition, scale) {
  const data = currentPosition;
  const eleRect = ele.getBoundingClientRect();
  const w = eleRect.width;
  const h = eleRect.height;
  let lx = 0,
    ly = 0;
  if (scale === 1) {
    return [0, 0];
  }
  lx = (w * (scale - 1)) / 2 / scale;
  ly = (h * (scale - 1)) / 2 / scale;
  let x = 0,
    y = 0;
  if (data[0] >= 0 && data[0] > lx) {
    x = lx;
  }
  if (data[0] >= 0 && data[0] < lx) {
    x = data[0];
  }

  if (data[0] < 0 && data[0] < -lx) {
    x = -lx;
  }
  if (data[0] < 0 && data[0] > -lx) {
    x = data[0];
  }

  if (data[1] >= 0 && data[1] > ly) {
    y = ly;
  }
  if (data[1] >= 0 && data[1] < ly) {
    y = data[1];
  }

  if (data[1] < 0 && data[1] < -ly) {
    y = -ly;
  }
  if (data[1] < 0 && data[1] > -ly) {
    y = data[1];
  }
  if (x !== data[0] || y !== data[1]) {
    return [x, y];
  } else {
    return;
  }
}
