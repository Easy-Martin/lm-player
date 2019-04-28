
class VideoEvent {
  constructor(video) {
    this.video = video;
    this.events = {};
  }
  on(eventName, handle) {
    this.events[eventName] ? this.events[eventName].push(handle) : this.events[eventName] = { type: eventName, listener: [handle] };
    console.log(this.events[eventName],'11111111111111111')
  }
  addEventListener(eventName, handle) {
    this.video.addEventListener(eventName, handle, false);
  }
  removeEventListener() {
    this.video.removeEventListener(eventName, handle, false);
  }
  emit(eventName, ...data) {
    console.log(eventName,this.events[eventName],'2222222222')
    if (!this.events[eventName]) {
      return
    }
    this.events[eventName].listener.forEach(v => {
      v(...data);
    });
  }
  off(eventName, handle) {
    if (!this.events.eventName) {
      return
    }
    let index = this.events[eventName].listener.findIndex(v => v === handle);
    index > -1 && this.events[eventName].listener.splice(index, 1);
  }
  destroy() {
    this.video = null;
    this.events = null;
  }
}

export default VideoEvent;
