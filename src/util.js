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
