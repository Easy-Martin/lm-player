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
  stop() {
    this.player.removeAttribute("src");
    if (this.hls) {
      this.hls.destroy();
    }
    if (this.flv) {
      this.flv.unload();
      this.flv.destroy();
    }
  }
  seekTo(seconds) {
    if (this.flv) {
      this.flv.unload();
      this.flv.load();
    }
    this.player.currentTime = seconds;
  }
  setVolume(fraction) {
    this.player.volume = fraction;
  }
  mute = () => {
    this.player.muted = true;
  };
  unmute = () => {
    this.player.muted = false;
  };
  enablePIP() {
    if (this.player.requestPictureInPicture && document.pictureInPictureElement !== this.player) {
      this.player.requestPictureInPicture();
    }
  }
  disablePIP() {
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
    if (!this.player) return null;
    const { buffered } = this.player;
    if (buffered.length === 0) {
      return 0;
    }
    const end = buffered.end(buffered.length - 1);
    const duration = this.getDuration();
    if (end > duration) {
      return duration;
    }
    return end;
  }
}
