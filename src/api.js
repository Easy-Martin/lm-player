export default class Api {
  constructor(video, flv, hls) {
    this.player = video;
    this.flv = flv;
    this.hls = hls;
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
      __player: this.player
    }
  }
}
