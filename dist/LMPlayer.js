!function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t(require("React"),require("ReactDOM"),require("Hls"),require("flvjs")):"function"===typeof define&&define.amd?define("LMPlayer",["React","ReactDOM","Hls","flvjs"],t):"object"===typeof exports?exports.LMPlayer=t(require("React"),require("ReactDOM"),require("Hls"),require("flvjs")):e.LMPlayer=t(e.React,e.ReactDOM,e.Hls,e.flvjs)}(window,function(e,t,n,r){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=10)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e){return(s="function"===typeof Symbol&&"symbol"===o(Symbol.iterator)?function(e){return o(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":o(e)})(e)}function l(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}n.r(t);var d=n(0),h=n.n(d),m=n(1),f=n.n(m),v=function(){function e(t){r(this,e),this.video=t,this.events={}}return a(e,[{key:"on",value:function(e,t){this.events[e]?this.events[e].push(t):this.events[e]={type:e,listener:[t]}}},{key:"addEventListener",value:function(e,t){this.video.addEventListener(e,t,!1)}},{key:"removeEventListener",value:function(){this.video.removeEventListener(eventName,handle,!1)}},{key:"emit",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];this.events[e]&&this.events[e].listener.forEach(function(e){e.apply(void 0,n)})}},{key:"off",value:function(e,t){if(!this.events.eventName){var n=this.events[e].listener.findIndex(function(e){return e===t});n>-1&&this.events[e].listener.splice(n,1)}}},{key:"destroy",value:function(){this.video=null,this.events=null}}]),e}(),y=n(3),g=n.n(y),E=n(2),b=n.n(E);function k(e,t){var n=new b.a;return n.attachMedia(e),n.on(b.a.Events.MEDIA_ATTACHED,function(){n.loadSource(t),n.on(b.a.Events.MANIFEST_PARSED,function(){})}),n}function P(e,t){if(g.a.isSupported()){var n=g.a.createPlayer({type:"flv",url:t.file,isLive:!!t.isLive},{enableWorker:!1,enableStashBuffer:!1,isLive:!!t.isLive});return n.attachMediaElement(e),n.load(),n}}function L(e){var t=/([^\.\/\\]+)\.(([a-z]|[0-9])+(\?\S+)?)$/i.exec(e);if(t)return t[2].replace(t[4],"")}function C(e){return e&&(document.fullscreenElement===e||document.msFullscreenElement===e||document.mozFullScreenElement===e||document.webkitFullscreenElement===e)||!1}function T(e,t){var n=e?"addEventListener":"removeEventListener";["fullscreenchange","mozfullscreenchange","webkitfullscreenchange","msfullscreenchange"].map(function(e){return document[n](e,t)})}function D(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var S=h.a.createContext(null),x=S.Provider,R=S.Consumer;function w(e){var t=function(t){function n(){return r(this,n),l(this,u(n).apply(this,arguments))}return p(n,h.a.Component),a(n,[{key:"render",value:function(){var t=this.props,n=t.forwardRef,r=D(t,["forwardRef"]);return h.a.createElement(R,null,function(t){return h.a.createElement(e,Object.assign({},r,t,{ref:n}))})}}]),n}();return h.a.forwardRef(function(e,n){return h.a.createElement(t,Object.assign({},e,{forwardRef:n}))})}n(5);function F(e){var t=e.type,n=e.className,r=void 0===n?"":n,i=D(e,["type","className"]);return h.a.createElement("i",Object.assign({className:"lm-player-iconfont ".concat(t," ").concat(r)},i))}n(6);var M,I,O,N,_,q,j,A,W,B=function(e){function t(e){var n;return r(this,t),(n=l(this,u(t).call(this,e))).renderSliderTips=function(e){var t=n.props.renderTimeLineTips;if(t){var r=n.layoutDom.getBoundingClientRect(),i=r.x,a=r.width,o=e.pageX-i,s=o/a,l=n.layoutDom.querySelector(".slide-tips");f.a.render(t?t(s):null,l),n.setState({tipsX:o,showTips:!0})}},n.hideSliderTips=function(){n.setState({showTips:!1})},n.cancelPropagation=function(e){e.stopPropagation()},n.startDrag=function(e){e.stopPropagation(),n.dragFlag=!0,document.body.addEventListener("mousemove",n.moveChange),document.body.addEventListener("mouseup",n.stopDrag)},n.moveChange=function(e){e.stopPropagation();var t=n.computedPositionForEvent(e);n.setState({value:t})},n.stopDrag=function(e){e.stopPropagation(),document.body.removeEventListener("mousemove",n.moveChange),document.body.removeEventListener("mouseup",n.stopDrag),n.dragFlag=!1;var t=n.computedPositionForEvent(e);n.props.onChange&&n.props.onChange(t/100)},n.changeCurrentValue=function(e){e.stopPropagation();var t=n.layoutDom.getBoundingClientRect(),r=t.width,i=t.x,a=(e.pageX-i)/r;n.props.onChange&&n.props.onChange(a)},n.sliderDomRef=h.a.createRef(),n.layoutDom=null,n.lineDom=null,n.dragDom=null,n.dragFlag=!1,n.state={value:n.props.currentPercent||0,showTips:!1,tipsX:0},n}return p(t,h.a.Component),a(t,[{key:"componentWillReceiveProps",value:function(e){this.dragFlag||this.setState({value:e.currentPercent||0})}},{key:"componentDidMount",value:function(){this.layoutDom=f.a.findDOMNode(this.sliderDomRef.current),this.dragDom=this.layoutDom.querySelector(".drag-change-icon"),this.lineDom=this.layoutDom.querySelector(".slider-content"),this.layoutDom.addEventListener("mousemove",this.renderSliderTips,!1),this.layoutDom.addEventListener("mouseout",this.hideSliderTips,!1),this.lineDom.addEventListener("click",this.changeCurrentValue,!1),this.dragDom.addEventListener("click",this.cancelPropagation,!1),this.dragDom.addEventListener("mousedown",this.startDrag,!1)}},{key:"componentWillUnmount",value:function(){this.layoutDom.removeEventListener("mousemove",this.renderSliderTips,!1),this.layoutDom.removeEventListener("mouseout",this.hideSliderTips,!1),this.lineDom.removeEventListener("click",this.changeCurrentValue,!1),this.dragDom.removeEventListener("click",this.cancelPropagation,!1),this.dragDom.removeEventListener("mousedown",this.startDrag,!1),document.body.removeEventListener("mousemove",this.moveChange),document.body.removeEventListener("mouseup",this.stopDrag),this.sliderDomRef=null,this.layoutDom=null,this.lineDom=null,this.dragDom=null,this.dragFlag=null}},{key:"computedPositionForEvent",value:function(e){var t=this.layoutDom.getBoundingClientRect(),n=t.x,r=t.width,i=e.pageX-n;return i>r&&(i=r),i<0&&(i=0),i/r*100}},{key:"render",value:function(){var e=this.state,t=e.value,n=e.showTips,r=e.tipsX,i=this.props,a=i.availablePercent,o=void 0===a?0:a,s=i.className,l=void 0===s?"":s;return h.a.createElement("div",{className:"slider-layout ".concat(l),ref:this.sliderDomRef},h.a.createElement("div",{className:"slider-content"},h.a.createElement("div",{className:"slider-max-line"}),h.a.createElement("div",{className:"slider-visibel-line",style:{width:"".concat(o,"%")}}),h.a.createElement("div",{className:"slider-current-line",style:{width:"".concat(t,"%")}}),this.props.children),h.a.createElement("div",{className:"slider-other-content"},h.a.createElement("div",{className:"drag-change-icon",draggable:!1,style:{left:"".concat(t,"%")}})),h.a.createElement("div",{style:{left:r,display:n?"block":"none"},className:"slide-tips"}))}}]),t}(),U=w(M=function(e){function t(e){var n;return r(this,t),(n=l(this,u(t).call(this,e))).updateRender=function(){n.forceUpdate()},n.changePlayStatus=function(){var e=n.props,t=e.api;e.video.paused?t.play():t.pause()},n.mutedChange=function(){var e=n.props,t=e.api;e.video.muted?t.unmute():t.mute()},n.volumechange=function(){n.forceUpdate()},n.openSliderVolume=function(){n.setState({openSliderVolume:!0})},n.closeSliderVolume=function(){n.setState({openSliderVolume:!1})},n.onChangeVolume=function(e){var t=n.props,r=t.api,i=t.video;r.setVolume(e),e>0&&i.muted&&r.unmute()},n.state={openSliderVolume:!1},n}return p(t,h.a.Component),a(t,[{key:"componentDidMount",value:function(){this.props.event.addEventListener("play",this.updateRender),this.props.event.addEventListener("pause",this.updateRender),this.props.event.addEventListener("volumechange",this.volumechange)}},{key:"componentWillUnmount",value:function(){this.props.event.removeEventListener("play",this.updateRender),this.props.event.removeEventListener("pause",this.updateRender),this.props.event.removeEventListener("volumechange",this.volumechange)}},{key:"render",value:function(){var e=this.state.openSliderVolume,t=this.props.video,n=1===t.volume?"lm-player-volume-max":"lm-player-volume-normal-fuben";return h.a.createElement("div",{className:"contraller-left-bar"},h.a.createElement("span",{className:"contraller-bar-item"},h.a.createElement(F,{onClick:this.changePlayStatus,type:t.paused?"lm-player-Play_Main":"lm-player-Pause_Main"})),h.a.createElement("span",{className:"contraller-bar-item contraller-bar-volume ".concat(e?"contraller-bar-hover-volume":""),onMouseOver:this.openSliderVolume,onMouseOut:this.closeSliderVolume},h.a.createElement(F,{onClick:this.mutedChange,type:t.muted?"lm-player-volume-close":n}),h.a.createElement("div",{className:"volume-slider-layout"},h.a.createElement(B,{className:"volume-slider",currentPercent:t.muted?0:100*t.volume,onChange:this.onChangeVolume}))),h.a.createElement("span",{className:"contraller-bar-item",onClick:this.changePlayStatus},h.a.createElement(F,{type:t.paused?"lm-player-Play_Main":"lm-player-Pause_Main"})))}}]),t}())||M,H=w(I=function(e){function t(){var e,n;r(this,t);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(n=l(this,(e=u(t)).call.apply(e,[this].concat(a)))).update=function(){n.forceUpdate()},n.fullscreen=function(){var e=n.props,t=e.api;C(e.playContainer)?t.cancelFullScreen():t.requestFullScreen(),n.forceUpdate()},n}return p(t,h.a.Component),a(t,[{key:"componentDidMount",value:function(){T(!0,this.update)}},{key:"componentWillUnmount",value:function(){T(!1,this.update)}},{key:"render",value:function(){var e=this.props,t=e.api,n=e.playContainer;return h.a.createElement("div",{className:"contraller-right-bar"},h.a.createElement("span",{className:"contraller-bar-item"},h.a.createElement(F,{onClick:function(){return t.setScale(-.2)},type:"lm-player-ZoomOut_Main"})),h.a.createElement("span",{className:"contraller-bar-item"},h.a.createElement(F,{onClick:function(){return t.setScale(1,!0)},type:"lm-player-ZoomDefault_Main"})),h.a.createElement("span",{className:"contraller-bar-item"},h.a.createElement(F,{onClick:function(){return t.setScale(.2)},type:"lm-player-ZoomIn_Main"})),h.a.createElement("span",{className:"contraller-bar-item"},h.a.createElement(F,{onClick:this.fullscreen,type:C(n)?"lm-player-ExitFull_Main":"lm-player-Full_Main"})))}}]),t}())||I,V=(n(7),function(e){function t(){return r(this,t),l(this,u(t).call(this))}return p(t,h.a.Component),a(t,[{key:"render",value:function(){return h.a.createElement("div",{className:"contraller-bar-layout"},h.a.createElement(U,null),h.a.createElement(H,null))}}]),t}()),z=(n(8),w(O=function(e){function t(e){var n;return r(this,t),(n=l(this,u(t).call(this,e))).openLoading=function(){n.setState({loading:!0})},n.closeLoading=function(){n.setState({loading:!1})},n.state={loading:!1},n}return p(t,h.a.Component),a(t,[{key:"componentDidMount",value:function(){var e=this.props.event;e.addEventListener("loadstart",this.openLoading),e.addEventListener("waiting",this.openLoading),e.addEventListener("seeking",this.openLoading),e.addEventListener("loadeddata",this.closeLoading),e.addEventListener("canplay",this.closeLoading)}},{key:"componentWillUnmount",value:function(){var e=this.props.event;e.removeEventListener("loadstart",this.openLoading),e.removeEventListener("waiting",this.openLoading),e.removeEventListener("seeking",this.openLoading),e.removeEventListener("loadeddata",this.closeLoading),e.removeEventListener("canplay",this.closeLoading)}},{key:"render",value:function(){var e=this.state.loading;return h.a.createElement("div",{className:"loading-mask ".concat(e?"mask-loading-animation":"")},h.a.createElement(F,{type:"lm-player-Loading",className:"".concat(e?"video-loading-animation":""," video-loading-icon")}))}}]),t}())||O),X=(n(4),w(N=function(e){function t(e){var n;return r(this,t),(n=l(this,u(t).call(this,e))).getDuration=function(){var e=n.props.api;n.setState({duration:e.getDuration()})},n.getCurrentTime=function(){var e=n.props.api,t={currentTime:e.getCurrentTime(),buffered:e.getSecondsLoaded()};t.buffered===n.state.buffered&&delete t.buffered,n.setState(t)},n.getBuffered=function(){var e=n.props.api;n.setState({buffered:e.getSecondsLoaded()})},n.changePlayTime=function(e){var t=n.props,r=t.video,i=t.api,a=e*n.state.duration;r.paused||i.pause(),n.setState({currentTime:a}),i.seekTo(a)},n.seekendPlay=function(){var e=n.props,t=e.video,r=e.api;t.paused&&r.play()},n.renderTimeLineTips=function(e){var t=function(e){var t=Math.ceil(e);if(t>60){var n=Math.ceil(e%60),r=Math.floor(e/60);if(t="".concat(r<10?"0".concat(r):r,":").concat(n<10?"0".concat(n):n),r>60){r=Math.ceil(e/60%60);var i=Math.floor(e/60/60);t="".concat(i<10?"0".concat(i):i,":").concat(r<10?"0".concat(r):r,":").concat(n<10?"0".concat(n):n)}else t="00:".concat(t)}else t="00:00:".concat(t<10?"0".concat(t):t);return t}(e*n.state.duration);return h.a.createElement("span",null,t)},n.fastForward=function(){n.props.api.fastForward()},n.backWind=function(){n.props.api.backWind()},n.state={duration:0,currentTime:0,buffered:0},n}return p(t,h.a.Component),a(t,[{key:"componentDidMount",value:function(){var e=this.props.event;e.addEventListener("loadedmetadata",this.getDuration),e.addEventListener("durationchange",this.getDuration),e.addEventListener("timeupdate",this.getCurrentTime),e.addEventListener("progress",this.getBuffered),e.addEventListener("suspend",this.getBuffered),e.addEventListener("seeked",this.seekendPlay)}},{key:"componentWillUnmount",value:function(){var e=this.props.event;e.removeEventListener("loadedmetadata",this.getDuration),e.removeEventListener("durationchange",this.getDuration),e.removeEventListener("timeupdate",this.getCurrentTime),e.removeEventListener("progress",this.getBuffered),e.removeEventListener("suspend",this.getBuffered),e.removeEventListener("seeked",this.seekendPlay)}},{key:"render",value:function(){var e=this.state,t=e.duration,n=e.currentTime,r=e.buffered,i=Math.round(n/t*100),a=Math.round(r/t*100);return h.a.createElement("div",{className:"video-time-line-layout"},h.a.createElement(F,{type:"lm-player-PrevFast",onClick:this.backWind,className:"time-line-action-item"}),h.a.createElement(B,{className:"time-line-box",currentPercent:i,availablePercent:a,onChange:this.changePlayTime,renderTimeLineTips:this.renderTimeLineTips}),h.a.createElement(F,{type:"lm-player-NextFast_Light",onClick:this.fastForward,className:"time-line-action-item"}))}}]),t}())||N),Y=w(_=function(e){function t(e){var n;return r(this,t),(n=l(this,u(t).call(this,e))).errorHandle=function(){for(var e,t=n.props.event,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];t.emit.apply(t,["error"].concat(i)),(e=console).error.apply(e,i)},n}return p(t,h.a.Component),a(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.event,n=e.flvPlayer,r=e.hlsPlayer;n&&n.on(g.a.Events.ERROR,this.errorHandle),r&&r.on(b.a.Events.ERROR,this.errorHandle),t.addEventListener("error",this.errorHandle,!1)}},{key:"componentWillReceiveProps",value:function(e){e.flvPlayer&&e.flvPlayer!==this.props.flvPlayer&&e.flvPlayer.on(g.a.Events.ERROR,this.errorHandle),e.hlsPlayer&&e.hlsPlayer!==this.props.hlsPlayer&&e.hlsPlayer.on(b.a.Events.ERROR,this.errorHandle)}},{key:"componentWillUnmount",value:function(){event.removeEventListener("error",this.errorHandle,!1),flvPlayer.off(g.a.Events.ERROR,this.errorHandle),hlsPlayer.off(b.a.Events.ERROR,this.errorHandle)}},{key:"render",value:function(){return null}}]),t}())||_,Z=w(q=function(e){function t(e){var n;r(this,t),(n=l(this,u(t).call(this,e))).openDrag=function(e){n.position.start=[e.pageX,e.pageY],n.dragDom.addEventListener("mousemove",n.moveChange),n.dragDom.addEventListener("mouseup",n.stopDrag)},n.moveChange=function(e){var t=n.props.api,r=t.getPosition();n.position.end=[e.pageX,e.pageY];var i=[r[0]+(n.position.end[0]-n.position.start[0]),r[1]+(n.position.end[1]-n.position.start[1])];t.setPosition(i),n.position.start=[e.pageX,e.pageY]},n.stopDrag=function(){n.dragDom.removeEventListener("mousemove",n.moveChange),n.dragDom.removeEventListener("mouseup",n.stopDrag),n.transformChange()},n.transformChange=function(){var e=n.props.api,t=n.computedBound(n.dragDom,e.getPosition(),e.getScale());t&&e.setPosition(t,!0)};var i=e.playContainer;e.event;return n.dragDom=i.querySelector(".player-mask-layout"),n.position={start:[0,0],end:[0,0]},n}return p(t,h.a.Component),a(t,[{key:"componentDidMount",value:function(){this.dragDom.addEventListener("mousedown",this.openDrag),this.props.event.addEventListener("transform",this.transformChange,!0)}},{key:"componentWillUnmount",value:function(){this.dragDom.removeEventListener("mousedown",this.openDrag),this.props.event.removeEventListener("transform",this.transformChange)}},{key:"computedBound",value:function(e,t,n){var r,i,a=t,o=e.getBoundingClientRect(),s=o.width,l=o.height;if(1===n)return[0,0];r=s*(n-1)/2/n,i=l*(n-1)/2/n;var u=0,c=0;return a[0]>=0&&a[0]>r&&(u=r),a[0]>=0&&a[0]<r&&(u=a[0]),a[0]<0&&a[0]<-r&&(u=-r),a[0]<0&&a[0]>-r&&(u=a[0]),a[1]>=0&&a[1]>i&&(c=i),a[1]>=0&&a[1]<i&&(c=a[1]),a[1]<0&&a[1]<-i&&(c=-i),a[1]<0&&a[1]>-i&&(c=a[1]),u!==a[0]||c!==a[1]?[u,c]:void 0}},{key:"render",value:function(){return null}}]),t}())||q,K=function(){function e(t,n,i,a,o){r(this,e),this.player=t,this.playContainer=n,this.flv=a,this.hls=o,this.event=i,this.scale=1,this.position=[0,0]}return a(e,[{key:"updateChunk",value:function(e){var t=e.flv,n=e.hls;this.flv=t,this.hls=n}},{key:"requestFullScreen",value:function(){var e;C(this.playContainer)||((e=this.playContainer).requestFullScreen?e.requestFullScreen():e.webkitRequestFullScreen?e.webkitRequestFullScreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.msRequestFullscreen&&e.msRequestFullscreen())}},{key:"cancelFullScreen",value:function(){C(this.playContainer)&&(document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen())}},{key:"play",value:function(){this.player.paused&&this.player.play()}},{key:"pause",value:function(){this.player.pause()}},{key:"destroy",value:function(){this.player.removeAttribute("src"),this.hls&&(this.hls.stopLoad(),this.hls.destroy()),this.flv&&(this.flv.unload(),this.flv.destroy()),this.player=null,this.flv=null,this.hls=null,this.playContainer=null,this.event=null,this.scale=null,this.position=null}},{key:"seekTo",value:function(e){var t=this.getBufferedTime();this.flv&&t[0]>e&&(this.flv.unload(),this.flv.load()),this.player.currentTime=e}},{key:"reload",value:function(){return this.flv?(this.flv.unload(),void this.flv.load()):this.hls?(this.hls.stopLoad(),void this.hls.startLoad()):void this.seekTo(0)}},{key:"setVolume",value:function(e){this.player.volume=e}},{key:"mute",value:function(){this.player.muted=!0}},{key:"unmute",value:function(){this.player.muted=!1}},{key:"requestPictureInPicture",value:function(){this.player.requestPictureInPicture&&document.pictureInPictureElement!==this.player&&this.player.requestPictureInPicture()}},{key:"exitPictureInPicture",value:function(){document.exitPictureInPicture&&document.pictureInPictureElement===this.player&&document.exitPictureInPicture()}},{key:"setPlaybackRate",value:function(e){this.player.playbackRate=e}},{key:"getDuration",value:function(){if(!this.player)return null;var e=this.player,t=e.duration,n=e.seekable;return t===1/0&&n.length>0?n.end(n.length-1):t}},{key:"getCurrentTime",value:function(){return this.player?this.player.currentTime:null}},{key:"getSecondsLoaded",value:function(){return this.getBufferedTime()[1]}},{key:"getBufferedTime",value:function(){if(!this.player)return null;var e=this.player.buffered;if(0===e.length)return[0,0];var t=e.end(e.length-1),n=e.start(e.length-1),r=this.getDuration();return t>r?r:[n,t]}},{key:"fastForward",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,t=this.getDuration(),n=this.getCurrentTime()+e;this.seekTo(n>t-1?t-1:n)}},{key:"backWind",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,t=this.getCurrentTime()-e;this.seekTo(t<1?1:t)}},{key:"snapshot",value:function(){var e=document.createElement("canvas"),t=e.getContext("2d");return e.width=this.player.videoWidth,e.height=this.player.videoHeight,t.drawImage(this.player,0,0,e.width,e.height),setTimeout(function(){e.remove(),e=null,t=null},200),e.toDataURL()}},{key:"setScale",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this.scale+e;n?r=e:(r<1&&(r=1),r>3&&(r=3)),this.scale=r,this.player.style.transition="transform 0.3s",this.__setTransform(),this.event.emit("transform"),setTimeout(function(){t.player.style.transition="unset"},500)}},{key:"getScale",value:function(){return this.scale}},{key:"setPosition",value:function(e,t){this.position=e,this.player.style.transition=t?"transform 0.3s":"unset",this.__setTransform()}},{key:"getPosition",value:function(){return this.position}},{key:"__setTransform",value:function(){this.player.style.transform="scale(".concat(this.scale,") translate(").concat(this.position[0],"px,").concat(this.position[1],"px)")}},{key:"getApi",value:function(){return{play:this.play.bind(this),pause:this.pause.bind(this),seekTo:this.seekTo.bind(this),setVolume:this.setVolume.bind(this),mute:this.mute.bind(this),unmute:this.unmute.bind(this),requestPictureInPicture:this.requestPictureInPicture.bind(this),exitPictureInPicture:this.exitPictureInPicture.bind(this),setPlaybackRate:this.setPlaybackRate.bind(this),destroy:this.destroy.bind(this),getDuration:this.getDuration.bind(this),getCurrentTime:this.getCurrentTime.bind(this),getSecondsLoaded:this.getSecondsLoaded.bind(this),getBufferedTime:this.getBufferedTime.bind(this),fastForward:this.fastForward.bind(this),backWind:this.backWind.bind(this),snapshot:this.snapshot.bind(this),requestFullScreen:this.requestFullScreen.bind(this),cancelFullScreen:this.cancelFullScreen.bind(this),__player:this.player}}}]),e}(),$=w(j=function(e){function t(e){var n;return r(this,t),(n=l(this,u(t).call(this,e))).updateProgress=function(){n.progressTime=Date.now()},n.heartAction=function(){n.timer=setInterval(function(){Date.now()-n.progressTime>1e4&&n.props.api.reload()},1e4)},n.focusSeekAction=function(){var e=n.props.api;e.getSecondsLoaded()-e.getCurrentTime()>2&&e.seekTo(e.getSecondsLoaded()-2)},n.progressTime=Date.now(),n.timer=null,n}return p(t,h.a.Component),a(t,[{key:"componentDidMount",value:function(){window.addEventListener("focus",this.focusSeekAction,!1),this.props.event.addEventListener("progress",this.updateProgress),this.heartAction()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("focus",this.focusSeekAction,!1),this.props.event.removeEventListener("progress",this.updateProgress),clearInterval(this.timer)}},{key:"render",value:function(){return null}}]),t}())||j,G=(n(9),function(e){function t(e){var n;return r(this,t),(n=l(this,u(t).call(this,e))).initPlayer=function(){if(!n.props.file)return null;var e=L(n.props.file);"flv"===e||"flv"===n.props.type?n.flv=P(n.player,n.props):"m3u8"===e||"hls"===n.props.type?n.hls=k(n.player,n.props.file):n.player.src=n.props.file},n.renderVideoTools=function(){return n.player?h.a.createElement(h.a.Fragment,null,h.a.createElement(V,null),h.a.createElement(z,null),!n.props.isLive&&h.a.createElement(X,null),h.a.createElement(Y,{flvPlayer:n.flv,hlsPlayer:n.hls}),h.a.createElement(Z,null),n.props.isLive&&h.a.createElement($,{key:n.props.file})):null},n.getPlayUrl=function(){return n.props.file},n.getPlayerApiContext=function(){var e=n.api?n.api.getApi():{},t=n.event?{on:n.event.on.bind(n.event),off:n.event.off.bind(n.event),emit:n.event.emit.bind(n.event)}:{};return Object.assign({},e,t,{getPlayUrl:n.getPlayUrl})},n.getProvider=function(){return{video:n.player,event:n.event,playerType:n.playerType,playerProps:n.props,api:n.api,playContainer:n.playContainer}},n.videoKey=Math.random(),n.player=null,n.event=null,n.flv=null,n.hls=null,n.playerType=null,n.playContainerRef=h.a.createRef(),n.playContainer=null,n}return p(t,h.a.Component),a(t,[{key:"componentDidMount",value:function(){this.playContainer=f.a.findDOMNode(this.playContainerRef.current),this.player=this.playContainer.querySelector("video"),this.initPlayer(),this.event=new v(this.player),this.api=new K(this.player,this.playContainer,this.event,this.flv,this.hls),this.props.playsinline&&(this.player.setAttribute("playsinline",""),this.player.setAttribute("webkit-playsinline",""),this.player.setAttribute("x5-playsinline","")),this.props.autoPlay&&this.api.getApi().play(),this.forceUpdate(),this.props.onInitPlayer&&this.props.onInitPlayer(this.getPlayerApiContext())}},{key:"componentWillUnmount",value:function(){this.event.destroy(),this.api.destroy(),this.player=null,this.event=null,this.flv=null,this.hls=null,this.playerType=null}},{key:"render",value:function(){var e=this.props,t=e.autoPlay,n=e.poster,r=this.getProvider();return h.a.createElement("div",{className:"lm-player-container",ref:this.playContainerRef},h.a.createElement("div",{className:"player-mask-layout"},h.a.createElement("video",{autoPlay:t,muted:!0,poster:n,key:this.videoKey})),h.a.createElement(x,{value:r},this.renderVideoTools()),this.props.children)}}]),t}()),J=w(A=function(e){function t(e){var n;return r(this,t),(n=l(this,u(t).call(this,e))).getDuration=function(){var e=n.props.api;n.setState({duration:e.getDuration()})},n.getCurrentTime=function(){var e=n.props.api,t={currentTime:e.getCurrentTime(),buffered:e.getSecondsLoaded()};t.buffered===n.state.buffered&&delete t.buffered,n.setState(t)},n.getBuffered=function(){var e=n.props.api;n.setState({buffered:e.getSecondsLoaded()})},n.changePlayTime=function(e){var t=n.props,r=t.seekTo,i=t.historyList,a=e*i.duration,o=i.fragments.findIndex(function(e){return e.end>a});i.fragments[o].file&&(r(a),n.setState({currentTime:a}))},n.seekendPlay=function(){var e=n.props,t=e.video,r=e.api;t.paused&&r.play()},n.renderTimeLineTips=function(e){var t=n.props.historyList,r=e*t.duration*1e3,i=function(e){var t=new Date(e),n=t.getFullYear(),r=t.getDate(),i=t.getMonth()+1,a=t.getHours(),o=t.getMinutes(),s=t.getSeconds();return"".concat(n,".").concat(i>10?i:"0"+i,".").concat(r>10?r:"0"+r," ").concat(a>10?a:"0"+a,".").concat(o>10?o:"0"+o,".").concat(s>10?s:"0"+s)}(new Date(t.beginDate).getTime()+r);return h.a.createElement("span",null,i)},n.fastForward=function(){n.props.api.fastForward()},n.backWind=function(){n.props.api.backWind()},n.computedLineList=function(e){var t=e.duration;return e.fragments.map(function(e){return{disabled:!e.file,size:(e.end-e.begin)/t*100}})},n.state={duration:1,currentTime:0,buffered:0},n}return p(t,h.a.Component),a(t,[{key:"componentDidMount",value:function(){var e=this.props.event;e.addEventListener("loadedmetadata",this.getDuration),e.addEventListener("durationchange",this.getDuration),e.addEventListener("timeupdate",this.getCurrentTime),e.addEventListener("progress",this.getBuffered),e.addEventListener("suspend",this.getBuffered),e.addEventListener("seeked",this.seekendPlay)}},{key:"componentWillUnmount",value:function(){var e=this.props.event;e.removeEventListener("loadedmetadata",this.getDuration),e.removeEventListener("durationchange",this.getDuration),e.removeEventListener("timeupdate",this.getCurrentTime),e.removeEventListener("progress",this.getBuffered),e.removeEventListener("suspend",this.getBuffered),e.removeEventListener("seeked",this.seekendPlay)}},{key:"render",value:function(){var e=this.props,t=e.historyList,n=e.playIndex,r=this.state,i=r.currentTime,a=r.buffered,o=this.computedLineList(t),s=o.filter(function(e,t){return t<n}).map(function(e){return e.size}),l=0===s.length?0:s.length>1?s.reduce(function(e,t){return e+t}):s[0],u=Math.round(i/t.duration*100+l),c=Math.round(a/t.duration*100+l);return h.a.createElement("div",{className:"video-time-line-layout"},h.a.createElement(F,{type:"lm-player-PrevFast",onClick:this.backWind,className:"time-line-action-item"}),h.a.createElement(B,{className:"time-line-box",currentPercent:u,availablePercent:c,onChange:this.changePlayTime,renderTimeLineTips:this.renderTimeLineTips},h.a.createElement(h.a.Fragment,null,o.map(function(e,t){var n=o.filter(function(e,n){return n<t}).map(function(e){return e.size}),r=0===n.length?0:n.length>1?n.reduce(function(e,t){return e+t}):n[0];return h.a.createElement("div",{className:"history-time-line-item ".concat(e.disabled?"history-time-line-disabled":""),key:t,style:{width:"".concat(e.size,"%"),left:"".concat(r,"%")}})}))),h.a.createElement(F,{type:"lm-player-NextFast_Light",onClick:this.fastForward,className:"time-line-action-item"}))}}]),t}())||A,Q=w(W=function(e){function t(){var e,n;r(this,t);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(n=l(this,(e=u(t)).call.apply(e,[this].concat(a)))).endedHandle=function(){var e=n.props.playIndex;n.props.changePlayIndex(e+1)},n}return p(t,h.a.Component),a(t,[{key:"componentDidMount",value:function(){this.props.event.addEventListener("ended",this.endedHandle,!1)}},{key:"componentWillUnmount",value:function(){this.props.event.removeEventListener("ended",this.endedHandle,!1)}},{key:"render",value:function(){return null}}]),t}())||W,ee=function(e){function t(e){var n;return r(this,t),(n=l(this,u(t).call(this,e))).checkFirstFile=function(){var e=n.props,t=e.defaultTime,r=e.historyList;r&&(t?(n.playIndex=n.computedIndexFormTime(t),-1!==n.playIndex&&r.fragments[n.playIndex].file||(n.playIndex=r.fragments.findIndex(function(e){return!!e.file}))):n.playIndex=r.fragments.findIndex(function(e){return!!e.file}))},n.initPlayer=function(e,t){var r=n.props.historyList;if(!r||!r.fragments[e]||!r.fragments[e].file)return null;n.flv&&(n.flv.unload(),n.flv.destroy(),n.flv=null),n.hls&&(n.hls.stopLoad(),n.hls.destroy(),n.hls=null);var i=L(r.fragments[e].file);"flv"===i||"flv"===n.props.type?(n.flv=P(n.player,{file:r.fragments[e].file}),n.api&&n.api.updateChunk({flv:n.flv})):"m3u8"===i||"hls"===n.props.type?(n.hls=k(n.player,r.fragments[e].file),n.api&&n.api.updateChunk({hls:n.hls})):n.player.src=r.fragments[e].file,t||(n.playIndex=e,n.forceUpdate())},n.changePlayIndex=function(e){var t=n.props.historyList;t&&t.fragments[e]&&(t.fragments[e].file?n.initPlayer(e):n.changePlayIndex(e+1))},n.getPlayerApiContext=function(){var e=n.api?n.api.getApi():{},t=n.event?{on:n.event.on.bind(n.event),off:n.event.off.bind(n.event),emit:n.event.emit.bind(n.event)}:{},r={seekTo:n.seekTo};return Object.assign({},e,t,r)},n.computedIndexFormTime=function(e){return n.props.historyList.fragments.findIndex(function(t){return t.end>e})},n.seekTo=function(e){var t=n.computedIndexFormTime(e),r=e-historyList.fragments[t].begin-1;n.player.paused||n.api.pause(),n.changePlayIndex(t),n.api.seekTo(r)},n.getProvider=function(){return{video:n.player,event:n.event,playerType:n.playerType,playerProps:n.props,api:n.api,playContainer:n.playContainer,changePlayIndex:n.changePlayIndex,playIndex:n.playIndex,historyList:n.props.historyList,seekTo:n.seekTo}},n.renderVideoTools=function(){return n.player?React.createElement(React.Fragment,null,React.createElement(V,null),React.createElement(z,null),React.createElement(J,null),React.createElement(Y,null),React.createElement(Z,null),React.createElement(Q,null)):null},n.playIndex=0,n}return p(t,G),a(t,[{key:"componentDidMount",value:function(){this.playContainer=ReactDOM.findDOMNode(this.playContainerRef.current),this.player=this.playContainer.querySelector("video"),this.checkFirstFile(),this.initPlayer(this.playIndex,!0),this.event=new v(this.player),this.api=new K(this.player,this.playContainer,this.event,this.flv,this.hls),this.props.playsinline&&(this.player.setAttribute("playsinline",""),this.player.setAttribute("webkit-playsinline",""),this.player.setAttribute("x5-playsinline","")),this.props.autoPlay&&this.api.getApi().play(),this.forceUpdate(),this.props.onInitPlayer&&this.props.onInitPlayer(this.getPlayerApiContext())}}]),t}();G.HistoryPlayer=ee;t.default=G}]).default});
//# sourceMappingURL=LMPlayer.js.map