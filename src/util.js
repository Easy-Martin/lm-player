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
  let time = parseInt(second_time);
  if (parseInt(second_time) > 60) {
    let second = parseInt(second_time) % 60;
    let min = parseInt(second_time / 60);
    time = `${min < 10 ? `0${min}` : min}:${second < 10 ? `0${second}` : second}`
    if (min > 60) {
      min = parseInt(second_time / 60) % 60;
      let hour = parseInt(parseInt(second_time / 60) / 60);
      time = `${hour < 10 ? `0${hour}` : hour}:${min < 10 ? `0${min}` : min}:${second < 10 ? `0${second}` : second}`
    } else {
      time = `00:${time}`
    }
  } else {
    time = `00:00:${time < 10 ? `0${time}` : time}`
  }

  return time;
}  
