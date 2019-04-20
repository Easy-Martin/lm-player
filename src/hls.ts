import Hls from 'hls.js'
export function createHlsPlayer(video: HTMLVideoElement, options: any): Promise<any> {
  return new Promise((resolve) => {
    var player = new Hls();
    player.attachMedia(video);
    player.on(Hls.Events.MEDIA_ATTACHED, () => {
      player.loadSource(options.url);
      player.on(Hls.Events.MANIFEST_PARSED, () => {
        resolve(player)
      });
    });
  })

}