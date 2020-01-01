import { fullscreen, isFullscreen, exitFullscreen } from './util'
import EventName from './event/eventName'
export default class Api {
  constructor({ video, playContainer, event, flv, hls }) {
    this.player = video
    this.playContainer = playContainer
    this.flv = flv
    this.hls = hls
    this.event = event
    this.scale = 1
    this.position = [0, 0]
  }
  /**
   * 播放器销毁后 动态跟新api下的flv，hls对象
   * @param {*} param0
   */
  updateChunk({ flv, hls }) {
    this.flv = flv
    this.hls = hls
  }
  /**
   * 全屏
   */
  requestFullScreen() {
    if (!isFullscreen(this.playContainer)) {
      fullscreen(this.playContainer)
    }
  }
  /**
   * 退出全屏
   */
  cancelFullScreen() {
    if (isFullscreen(this.playContainer)) {
      exitFullscreen()
    }
  }
  play() {
    if (this.player.paused) {
      this.player.play()
    }
  }
  pause() {
    if (!this.player.paused) {
      this.player.pause()
    }
  }
  destroy() {
    this.player.removeAttribute('src')
    this.unload()
    if (this.flv) {
      this.flv.destroy()
    }
    if (this.hls) {
      this.hls.destroy()
    }
  }

  /**
   * 设置currentTime实现seek
   * @param {*} seconds
   * @param {*} noEmit
   */
  seekTo(seconds, noEmit) {
    const buffered = this.getBufferedTime()
    if (this.flv && buffered[0] > seconds) {
      this.flv.unload()
      this.flv.load()
    }
    this.player.currentTime = seconds
    if (!noEmit) {
      this.event.emit(EventName.SEEK, seconds)
    }
  }

  /**
   * 视频重载
   */
  reload(notEmit) {
    if (this.getCurrentTime !== 0) {
      this.seekTo(0)
    }
    if (this.hls) {
      this.hls.swapAudioCodec()
      this.hls.recoverMediaError()
    }
    this.unload()
    this.load()
    !notEmit && this.event.emit(EventName.RELOAD)
  }
  unload() {
    this.flv && this.flv.unload()
    this.hls && this.hls.stopLoad()
  }
  load() {
    if (this.flv) {
      this.flv.load()
    }
    if (this.hls) {
      this.hls.startLoad()
      this.hls.loadSource(this.hls.url)
    }
  }
  setVolume(fraction) {
    this.player.volume = fraction
  }
  mute() {
    this.player.muted = true
  }
  unmute() {
    this.player.muted = false
  }

  /**
   * 开启画中画功能
   */
  requestPictureInPicture() {
    if (this.player.requestPictureInPicture && document.pictureInPictureElement !== this.player) {
      this.player.requestPictureInPicture()
    }
  }
  /**
   * 关闭画中画功能
   */
  exitPictureInPicture() {
    if (document.exitPictureInPicture && document.pictureInPictureElement === this.player) {
      document.exitPictureInPicture()
    }
  }

  /**
   * 设置播放速率
   * @param {*} rate
   */
  setPlaybackRate(rate) {
    this.player.playbackRate = rate
  }
  /**
   * 获取视频总时长
   */
  getDuration() {
    if (!this.player) return null
    const { duration, seekable } = this.player
    if (duration === Infinity && seekable.length > 0) {
      return seekable.end(seekable.length - 1)
    }
    return duration
  }
  /**
   * 获取当前播放时间
   */
  getCurrentTime() {
    if (!this.player) return null
    return this.player.currentTime
  }

  /**
   * 获取缓存时间
   */
  getSecondsLoaded() {
    return this.getBufferedTime()[1]
  }

  /**
   * 获取当前视频缓存的起止时间
   */
  getBufferedTime() {
    if (!this.player) return null
    const { buffered } = this.player
    if (buffered.length === 0) {
      return [0, 0]
    }
    const end = buffered.end(buffered.length - 1)
    const start = buffered.start(buffered.length - 1)
    const duration = this.getDuration()
    if (end > duration) {
      return duration
    }
    return [start, end]
  }
  /**
   * 快进通过seekTo方法实现
   * @param {*} second
   */
  fastForward(second = 5) {
    const duration = this.getDuration()
    const currentTime = this.getCurrentTime()
    const time = currentTime + second
    this.seekTo(time > duration - 1 ? duration - 1 : time)
  }

  /**
   * 快退通过seekTo方法实现
   * @param {*} second
   */
  backWind(second = 5) {
    const currentTime = this.getCurrentTime()
    const time = currentTime - second
    this.seekTo(time < 1 ? 1 : time)
  }

  /**
   * 视频截屏方法
   */
  snapshot() {
    let canvas = document.createElement('canvas')
    let ctx = canvas.getContext('2d')
    canvas.width = this.player.videoWidth
    canvas.height = this.player.videoHeight
    ctx.drawImage(this.player, 0, 0, canvas.width, canvas.height)
    setTimeout(() => {
      canvas.remove()
      canvas = null
      ctx = null
    }, 200)
    return canvas.toDataURL()
  }
  setScale(num, isRest = false) {
    let scale = this.scale + num
    if (isRest) {
      scale = num
    } else {
      if (scale < 1) {
        scale = 1
      }
      if (scale > 3) {
        scale = 3
      }
    }
    this.scale = scale
    this.player.style.transition = 'transform 0.3s'
    this.__setTransform()
    this.event.emit(EventName.TRANSFORM)
    setTimeout(() => {
      this.player.style.transition = 'unset'
    }, 500)
  }
  getScale() {
    return this.scale
  }
  setPosition(position, isAnimate) {
    this.position = position
    this.player.style.transition = isAnimate ? 'transform 0.3s' : 'unset'
    this.__setTransform()
  }
  getPosition() {
    return this.position
  }
  __setTransform() {
    this.player.style.transform = `scale(${this.scale}) translate(${this.position[0]}px,${this.position[1]}px)`
  }
  getApi() {
    return {
      play: this.play.bind(this),
      reload: this.reload.bind(this),
      pause: this.pause.bind(this),
      seekTo: this.seekTo.bind(this),
      setVolume: this.setVolume.bind(this),
      mute: this.mute.bind(this),
      unmute: this.unmute.bind(this),
      requestPictureInPicture: this.requestPictureInPicture.bind(this),
      exitPictureInPicture: this.exitPictureInPicture.bind(this),
      setPlaybackRate: this.setPlaybackRate.bind(this),
      destroy: this.destroy.bind(this),
      getDuration: this.getDuration.bind(this),
      getCurrentTime: this.getCurrentTime.bind(this),
      getSecondsLoaded: this.getSecondsLoaded.bind(this),
      getBufferedTime: this.getBufferedTime.bind(this),
      fastForward: this.fastForward.bind(this),
      backWind: this.backWind.bind(this),
      snapshot: this.snapshot.bind(this),
      requestFullScreen: this.requestFullScreen.bind(this),
      cancelFullScreen: this.cancelFullScreen.bind(this),
      __player: this.player,
      flv: this.flv,
      hls: this.hls
    }
  }
}
