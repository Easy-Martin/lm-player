class VideoEvent {
  constructor(video) {
    this.video = video;
    this.events = {};
  }
  on(eventName, handle, isCustom = false) {
    if (isCustom) {
      this.events[eventName] ? this.events[eventName].push(handle) : this.events[eventName] = { type: eventName, listener: [handle] };
    } else {
      this.video[`on${eventName}`] !== undefined && this.video.addEventListener(eventName, handle, false);
    }
  }
  emit(eventName, data) {
    if (!this.events[eventName]) {
      return
    }
    this.events[eventName].listener.forEach(v => {
      v(data);
    });
  }
  off(eventName, handle, isCustom = false) {
    if (isCustom && this.events.eventName) {
      let index = this.events[eventName].listener.findIndex(v => v === handle);
      index > -1 && this.events[eventName].listener.splice(index, 1);
    } else {
      this.video[`on${eventName}`] !== undefined && this.video.removeEventListener(eventName, handle, false);
    }
  }
  destroy() {
    this.video = null;
    this.events = null;
  }
}

export default VideoEvent;
