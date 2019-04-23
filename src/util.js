import flvjs from "flv.js";
import Hls from "hls.js";
export function createHlsPlayer(video, options) {
  const player = new Hls();
  player.attachMedia(video);
  player.on(Hls.Events.MEDIA_ATTACHED, () => {
    player.loadSource(options.url);
    player.on(Hls.Events.MANIFEST_PARSED, () => {
      resolve(player);
    });
  });
  return player;
}

export function createFlvPlayer(video, options) {
  if (flvjs.isSupported()) {
    const player = flvjs.createPlayer(
      {
        type: "flv",
        url: options.url,
        isLive: !!options.isLive
      },
      {
        enableWorker: false,
        enableStashBuffer: false,
        isLive: !!options.isLive
      }
    );
    player.attachMediaElement(video);
    player.load();
    return player;
  }
}
export function getVideoType(url) {
  const reg = /([^\.\/\\]+)\.(([a-z]|[0-9])+)$/i;
  const resultArr = reg.exec(url);
  if (resultArr) {
    return resultArr[2];
  }
}

export function timeStamp(second_time) {
  let time = Math.ceil(second_time);
  if (time > 60) {
    let second = Math.ceil(second_time % 60);
    let min = Math.floor(second_time / 60);
    time = `${min < 10 ? `0${min}` : min}:${second < 10 ? `0${second}` : second}`
    if (min > 60) {
      min = Math.ceil((second_time / 60) % 60);
      let hour = Math.floor(second_time / 60 / 60);
      time = `${hour < 10 ? `0${hour}` : hour}:${min < 10 ? `0${min}` : min}:${second < 10 ? `0${second}` : second}`
    } else {
      time = `00:${time}`
    }
  } else {
    time = `00:00:${time < 10 ? `0${time}` : time}`
  }

  return time;
}

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
  return (
    document.fullscreenEnabled ||
    document.mozFullScreenEnabled ||
    document.webkitFullscreenEnabled ||
    document.msFullscreenEnabled
  );
}

/**
 * [isFullscreen 判断浏览器是否全屏]
 * @return [全屏则返回当前调用全屏的元素,不全屏返回false]
 */
export function isFullscreen(ele) {
  if (!ele) {
    return false
  }
  return (
    document.fullscreenElement === ele ||
    document.msFullscreenElement === ele ||
    document.mozFullScreenElement === ele ||
    document.webkitFullscreenElement === ele ||
    false
  );
}
// 添加 / 移除 全屏事件监听
export function fullScreenListener(isAdd, fullscreenchange) {
  const funcName = isAdd ? 'addEventListener' : 'removeEventListener';
  const fullScreenEvents = [
    'fullscreenchange',
    'mozfullscreenchange',
    'webkitfullscreenchange',
    'msfullscreenchange'
  ];
  fullScreenEvents.map((v) => document[funcName](v, fullscreenchange));
}