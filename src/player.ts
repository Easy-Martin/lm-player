import flvjs from 'flv.js'
import { getVideoType } from './util'
import { createFlvPlayer } from './flv'
import { createHlsPlayer } from './hls'

type PlayerOptions = {
  isLiving?: boolean,
  url: string,
  autoplay?: boolean,
  type: string
}

type EventHandle = (event: Event) => any

class YMPlayer {
  private player: flvjs.Player
  private video: HTMLVideoElement;
  constructor(private container: HTMLElement, private playerOptions: PlayerOptions) {
    this.video = document.createElement('video')
    this.video.setAttribute('preload', 'auto')
    if (this.playerOptions.autoplay) {
      this.video.setAttribute('autoplay', 'true')
      this.video.setAttribute('muted', 'muted')
    }
    this.container.appendChild(this.video)
    this.initPlayer()
  }
  private async initPlayer() {
    this.dispose()
    const type = getVideoType(this.playerOptions.url)
    this.playerOptions.type = type
    if (type === 'flv') {
      this.player = await createFlvPlayer(this.video, this.playerOptions)
    }
    if (type === 'm3u8') {
      this.player = await createHlsPlayer(this.video, this.playerOptions)
    }
    if (!type || type === 'mp4') {
      this.video.src = this.playerOptions.url
    }
    this.video.play()
  }
  public on(eventName: string, handle: EventHandle) {
    this.video.addEventListener(eventName, handle), false
  }
  public off(eventName: string, handle: EventHandle) {
    this.video.addEventListener(eventName, handle), false
  }
  dispose() {

  }
}

export default YMPlayer