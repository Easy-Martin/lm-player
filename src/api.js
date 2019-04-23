import { fullscreen, isFullscreen, exitFullscreen } from './util'
export default class Api {
  constructor(video, playContainer, event, flv, hls) {
    this.player = video;
    this.playContainer = playContainer
    this.flv = flv;
    this.hls = hls;
    this.event = event
    this.scale = 1;
    this.position = [0, 0]
  }
  requestFullScreen() {
    if (!isFullscreen(this.playContainer)) {
      fullscreen(this.playContainer)
    }
  }
  cancelFullScreen() {
    if (isFullscreen(this.playContainer)) {
      exitFullscreen()
    }
  }
  play() {
    if (this.player.paused) {
      this.player.play();
    }
  }
  pause() {
    this.player.pause();
  }
  destroy() {
    this.player.removeAttribute("src");
    if (this.hls) {
      this.hls.destroy();
    }
    if (this.flv) {
      this.flv.unload();
      this.flv.destroy();
    }
    this.player = null;
    this.flv = null;
    this.hls = null;
    this.playContainer = null
    this.event = null
    this.scale = null;
    this.position = null
  }
  seekTo(seconds) {
    const buffered = this.getBufferedTime()
    if (this.flv && buffered[0] > seconds) {
      this.flv.unload();
      this.flv.load();
    }
    this.player.currentTime = seconds;
  }
  setVolume(fraction) {
    this.player.volume = fraction;
  }
  mute() {
    this.player.muted = true;
  };
  unmute() {
    this.player.muted = false;
  };
  requestPictureInPicture() {
    if (this.player.requestPictureInPicture && document.pictureInPictureElement !== this.player) {
      this.player.requestPictureInPicture();
    }
  }
  exitPictureInPicture() {
    if (document.exitPictureInPicture && document.pictureInPictureElement === this.player) {
      document.exitPictureInPicture();
    }
  }
  setPlaybackRate(rate) {
    this.player.playbackRate = rate;
  }
  getDuration() {
    if (!this.player) return null;
    const { duration, seekable } = this.player;
    if (duration === Infinity && seekable.length > 0) {
      return seekable.end(seekable.length - 1);
    }
    return duration;
  }
  getCurrentTime() {
    if (!this.player) return null;
    return this.player.currentTime;
  }
  getSecondsLoaded() {
    return this.getBufferedTime()[1]
  }
  getBufferedTime() {
    if (!this.player) return null;
    const { buffered } = this.player;
    if (buffered.length === 0) {
      return [0, 0];
    }
    const end = buffered.end(buffered.length - 1);
    const start = buffered.start(buffered.length - 1);
    const duration = this.getDuration();
    if (end > duration) {
      return duration;
    }
    return [start, end];
  }
  fastForward(second = 5) {
    const duration = this.getDuration()
    const currentTime = this.getCurrentTime()
    const time = currentTime + second
    this.seekTo(time > duration - 1 ? duration - 1 : time)
  }
  backWind(second = 5) {
    const currentTime = this.getCurrentTime()
    const time = currentTime - second
    this.seekTo(time < 1 ? 1 : time)
  }
  snapshot() {
    let canvas = document.createElement('canvas')
    let ctx = canvas.getContext('2d')
    canvas.width = this.player.videoWidth
    canvas.height = this.player.videoHeight
    ctx.drawImage(this.player, 0, 0, canvas.width, canvas.height)
    setTimeout(() => {
      canvas.remove()
      canvas = null;
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
    this.event.emit('transform')
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
      __player: this.player
    }
  }
}
