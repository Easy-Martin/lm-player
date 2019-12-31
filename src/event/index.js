class VideoEventInstance {
  constructor(video) {
    this.video = video
    this.events = {}
    this.playerEvents = {}
  }
  on(eventName, handle) {
    this.events && this.events[eventName]
      ? this.events[eventName].listener.push(handle)
      : (this.events[eventName] = { type: eventName, listener: [handle] })
  }
  addEventListener(eventName, handle) {
    if (this.video) {
      this.playerEvents[eventName] ? this.playerEvents[eventName].push(handle) : (this.playerEvents[eventName] = [handle])
      this.video.addEventListener(eventName, handle, false)
    }
  }
  removeEventListener(eventName, handle) {
    if (this.video) {
      if (!this.playerEvents || !this.playerEvents[eventName]) {
        return
      }
      let index = this.playerEvents[eventName].findIndex(v => v === handle)
      index > -1 && this.playerEvents[eventName].splice(index, 1)
      this.video.removeEventListener(eventName, handle, false)
    }
  }
  emit(eventName, ...data) {
    if (!this.events || !this.events[eventName]) {
      return
    }
    this.events[eventName].listener.forEach(v => {
      v(...data)
    })
  }
  off(eventName, handle) {
    if (!this.events || !this.events.eventName) {
      return
    }
    let index = this.events[eventName].listener.findIndex(v => v === handle)
    index > -1 && this.events[eventName].listener.splice(index, 1)
  }
  getApi() {
    return { on: this.on.bind(this), off: this.off.bind(this), emit: this.emit.bind(this) }
  }
  destroy() {
    Object.keys(this.playerEvents).forEach(key => {
      this.playerEvents[key].forEach(fn => {
        this.removeEventListener(key, fn)
      })
    })
    this.playerEvents = {}
    this.events = {}
  }
}

export default VideoEventInstance
