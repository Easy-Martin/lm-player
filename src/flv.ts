import flvjs from 'flv.js'

export function createFlvPlayer(video: HTMLVideoElement, options: any): Promise<flvjs.Player> {
  return new Promise((resolve, reject) => {
    if (flvjs.isSupported()) {
      const player = flvjs.createPlayer({
        type: options.type,
        url: options.url,
        isLive: !!options.isLiving,
      }, {
          enableWorker: false,
          enableStashBuffer: false,
          isLive: !!options.isLiving,
        })
      player.attachMediaElement(video)
      player.load()
      resolve(player)
    } else {
      reject()
    }
  })

}