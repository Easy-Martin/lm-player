import flvjs from "flv.js";

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
