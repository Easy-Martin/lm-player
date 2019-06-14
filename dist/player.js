module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");
function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass,superClass);}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key];}}return target;}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
function _possibleConstructorReturn(self,call){if(call&&(Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call)==="object"||typeof call==="function")){return call;}return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
function _typeof2(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof2=function _typeof2(obj){return typeof obj;};}else{_typeof2=function _typeof2(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof2(obj);}function _typeof(obj){if(typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"){_typeof=function _typeof(obj){return _typeof2(obj);};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":_typeof2(obj);};}return _typeof(obj);}

/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Api; });
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./src/util.js");
/* harmony import */ var _event_eventName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event/eventName */ "./src/event/eventName.js");
var Api=/*#__PURE__*/function(){function Api(video,playContainer,event,flv,hls){Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this,Api);this.player=video;this.playContainer=playContainer;this.flv=flv;this.hls=hls;this.event=event;this.scale=1;this.position=[0,0];}/**
   * 播放器销毁后 动态跟新api下的flv，hls对象
   * @param {*} param0
   */Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Api,[{key:"updateChunk",value:function updateChunk(_ref){var flv=_ref.flv,hls=_ref.hls;this.flv=flv;this.hls=hls;}/**
   * 全屏
   */},{key:"requestFullScreen",value:function requestFullScreen(){if(!Object(_util__WEBPACK_IMPORTED_MODULE_2__["isFullscreen"])(this.playContainer)){Object(_util__WEBPACK_IMPORTED_MODULE_2__["fullscreen"])(this.playContainer);}}/**
   * 退出全屏
   */},{key:"cancelFullScreen",value:function cancelFullScreen(){if(Object(_util__WEBPACK_IMPORTED_MODULE_2__["isFullscreen"])(this.playContainer)){Object(_util__WEBPACK_IMPORTED_MODULE_2__["exitFullscreen"])();}}},{key:"play",value:function play(){if(this.player.paused){this.player.play();}}},{key:"pause",value:function pause(){if(!this.player.paused){this.player.pause();}}},{key:"destroy",value:function destroy(){this.player.removeAttribute("src");this.unload();if(this.flv){this.flv.destroy();}if(this.hls){this.flv.destroy();}this.scale=null;this.position=null;}/**
   * 设置currentTime实现seek
   * @param {*} seconds
   * @param {*} noEmit
   */},{key:"seekTo",value:function seekTo(seconds,noEmit){var buffered=this.getBufferedTime();if(this.flv&&buffered[0]>seconds){this.flv.unload();this.flv.load();}this.player.currentTime=seconds;if(!noEmit){this.event.emit(_event_eventName__WEBPACK_IMPORTED_MODULE_3__["default"].SEEK,seconds);}}/**
   * 视频重载
   */},{key:"reload",value:function reload(){this.unload();this.load();this.play();this.event.emit(_event_eventName__WEBPACK_IMPORTED_MODULE_3__["default"].RELOAD);if(this.getCurrentTime!==0){this.seekTo(0);}}},{key:"unload",value:function unload(){this.flv&&this.flv.unload();this.hls&&this.hls.stopLoad();}},{key:"load",value:function load(){this.flv&&this.flv.load();this.hls&&this.hls.loadSource(this.hls.url);}},{key:"setVolume",value:function setVolume(fraction){this.player.volume=fraction;}},{key:"mute",value:function mute(){this.player.muted=true;}},{key:"unmute",value:function unmute(){this.player.muted=false;}/**
   * 开启画中画功能
   */},{key:"requestPictureInPicture",value:function requestPictureInPicture(){if(this.player.requestPictureInPicture&&document.pictureInPictureElement!==this.player){this.player.requestPictureInPicture();}}/**
   * 关闭画中画功能
   */},{key:"exitPictureInPicture",value:function exitPictureInPicture(){if(document.exitPictureInPicture&&document.pictureInPictureElement===this.player){document.exitPictureInPicture();}}/**
   * 设置播放速率
   * @param {*} rate
   */},{key:"setPlaybackRate",value:function setPlaybackRate(rate){this.player.playbackRate=rate;}/**
   * 获取视频总时长
   */},{key:"getDuration",value:function getDuration(){if(!this.player)return null;var _this$player=this.player,duration=_this$player.duration,seekable=_this$player.seekable;if(duration===Infinity&&seekable.length>0){return seekable.end(seekable.length-1);}return duration;}/**
   * 获取当前播放时间
   */},{key:"getCurrentTime",value:function getCurrentTime(){if(!this.player)return null;return this.player.currentTime;}/**
   * 获取缓存时间
   */},{key:"getSecondsLoaded",value:function getSecondsLoaded(){return this.getBufferedTime()[1];}/**
   * 获取当前视频缓存的起止时间
   */},{key:"getBufferedTime",value:function getBufferedTime(){if(!this.player)return null;var buffered=this.player.buffered;if(buffered.length===0){return[0,0];}var end=buffered.end(buffered.length-1);var start=buffered.start(buffered.length-1);var duration=this.getDuration();if(end>duration){return duration;}return[start,end];}/**
   * 快进通过seekTo方法实现
   * @param {*} second
   */},{key:"fastForward",value:function fastForward(){var second=arguments.length>0&&arguments[0]!==undefined?arguments[0]:5;var duration=this.getDuration();var currentTime=this.getCurrentTime();var time=currentTime+second;this.seekTo(time>duration-1?duration-1:time);}/**
   * 快退通过seekTo方法实现
   * @param {*} second
   */},{key:"backWind",value:function backWind(){var second=arguments.length>0&&arguments[0]!==undefined?arguments[0]:5;var currentTime=this.getCurrentTime();var time=currentTime-second;this.seekTo(time<1?1:time);}/**
   * 视频截屏方法
   */},{key:"snapshot",value:function snapshot(){var canvas=document.createElement("canvas");var ctx=canvas.getContext("2d");canvas.width=this.player.videoWidth;canvas.height=this.player.videoHeight;ctx.drawImage(this.player,0,0,canvas.width,canvas.height);setTimeout(function(){canvas.remove();canvas=null;ctx=null;},200);return canvas.toDataURL();}},{key:"setScale",value:function setScale(num){var _this=this;var isRest=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;var scale=this.scale+num;if(isRest){scale=num;}else{if(scale<1){scale=1;}if(scale>3){scale=3;}}this.scale=scale;this.player.style.transition="transform 0.3s";this.__setTransform();this.event.emit(_event_eventName__WEBPACK_IMPORTED_MODULE_3__["default"].TRANSFORM);setTimeout(function(){_this.player.style.transition="unset";},500);}},{key:"getScale",value:function getScale(){return this.scale;}},{key:"setPosition",value:function setPosition(position,isAnimate){this.position=position;this.player.style.transition=isAnimate?"transform 0.3s":"unset";this.__setTransform();}},{key:"getPosition",value:function getPosition(){return this.position;}},{key:"__setTransform",value:function __setTransform(){this.player.style.transform="scale(".concat(this.scale,") translate(").concat(this.position[0],"px,").concat(this.position[1],"px)");}},{key:"getApi",value:function getApi(){return{play:this.play.bind(this),reload:this.reload.bind(this),pause:this.pause.bind(this),seekTo:this.seekTo.bind(this),setVolume:this.setVolume.bind(this),mute:this.mute.bind(this),unmute:this.unmute.bind(this),requestPictureInPicture:this.requestPictureInPicture.bind(this),exitPictureInPicture:this.exitPictureInPicture.bind(this),setPlaybackRate:this.setPlaybackRate.bind(this),destroy:this.destroy.bind(this),getDuration:this.getDuration.bind(this),getCurrentTime:this.getCurrentTime.bind(this),getSecondsLoaded:this.getSecondsLoaded.bind(this),getBufferedTime:this.getBufferedTime.bind(this),fastForward:this.fastForward.bind(this),backWind:this.backWind.bind(this),snapshot:this.snapshot.bind(this),requestFullScreen:this.requestFullScreen.bind(this),cancelFullScreen:this.cancelFullScreen.bind(this),__player:this.player};}}]);return Api;}();

/***/ }),

/***/ "./src/context.js":
/*!************************!*\
  !*** ./src/context.js ***!
  \************************/
/*! exports provided: Provider, Consumer, videoDec */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return Provider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Consumer", function() { return Consumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "videoDec", function() { return videoDec; });
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
var videoContext=react__WEBPACK_IMPORTED_MODULE_6___default.a.createContext(null);var Provider=videoContext.Provider;var Consumer=videoContext.Consumer;function videoDec(Component){var ComponentWithVideoDec=/*#__PURE__*/function(_React$Component){Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ComponentWithVideoDec,_React$Component);function ComponentWithVideoDec(){Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this,ComponentWithVideoDec);return Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this,Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(ComponentWithVideoDec).apply(this,arguments));}Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ComponentWithVideoDec,[{key:"render",value:function render(){var _this$props=this.props,forwardRef=_this$props.forwardRef,props=Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props,["forwardRef"]);return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Consumer,null,function(context){return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Component,Object.assign({},props,context,{ref:forwardRef}));});}}]);return ComponentWithVideoDec;}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);return react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function(props,ref){return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(ComponentWithVideoDec,Object.assign({},props,{forwardRef:ref}));});}

/***/ }),

/***/ "./src/contraller_bar/bar.js":
/*!***********************************!*\
  !*** ./src/contraller_bar/bar.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Bar; });
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function Bar(_ref){var _ref$visibel=_ref.visibel,visibel=_ref$visibel===void 0?true:_ref$visibel,className=_ref.className,children=_ref.children,props=Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref,["visibel","className","children"]);if(visibel===false){return null;}return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",Object.assign({className:"contraller-bar-item ".concat(className)},props),children);}

/***/ }),

/***/ "./src/contraller_bar/index.js":
/*!*************************************!*\
  !*** ./src/contraller_bar/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _left_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./left_bar */ "./src/contraller_bar/left_bar.js");
/* harmony import */ var _right_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./right_bar */ "./src/contraller_bar/right_bar.js");
/* harmony import */ var _event_eventName__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../event/eventName */ "./src/event/eventName.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../context */ "./src/context.js");
/* harmony import */ var _style_bar_less__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../style/bar.less */ "./src/style/bar.less");
/* harmony import */ var _style_bar_less__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_style_bar_less__WEBPACK_IMPORTED_MODULE_10__);
var _class,_temp;var ContrallerBar=Object(_context__WEBPACK_IMPORTED_MODULE_9__["videoDec"])(_class=(_temp=/*#__PURE__*/function(_React$Component){Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ContrallerBar,_React$Component);function ContrallerBar(props){var _this;Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this,ContrallerBar);_this=Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this,Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ContrallerBar).call(this,props));_this.hideContraller=function(){_this.setState({hideBar:true});};_this.showContraller=function(){_this.setState({hideBar:false});};_this.state={hideBar:false};return _this;}Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ContrallerBar,[{key:"componentDidMount",value:function componentDidMount(){var event=this.props.event;event.on(_event_eventName__WEBPACK_IMPORTED_MODULE_8__["default"].HIDE_CONTRALLER,this.hideContraller);event.on(_event_eventName__WEBPACK_IMPORTED_MODULE_8__["default"].SHOW_CONTRALLER,this.showContraller);}},{key:"componentWillUnmount",value:function componentWillUnmount(){var event=this.props.event;event.off(_event_eventName__WEBPACK_IMPORTED_MODULE_8__["default"].HIDE_CONTRALLER,this.hideContraller);event.off(_event_eventName__WEBPACK_IMPORTED_MODULE_8__["default"].SHOW_CONTRALLER,this.showContraller);}},{key:"render",value:function render(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"contraller-bar-layout ".concat(this.state.hideBar?"hide-contraller-bar":"")},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_left_bar__WEBPACK_IMPORTED_MODULE_6__["default"],null),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_right_bar__WEBPACK_IMPORTED_MODULE_7__["default"],null));}}]);return ContrallerBar;}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component),_temp))||_class;/* harmony default export */ __webpack_exports__["default"] = (ContrallerBar);

/***/ }),

/***/ "./src/contraller_bar/left_bar.js":
/*!****************************************!*\
  !*** ./src/contraller_bar/left_bar.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _iconfont__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../iconfont */ "./src/iconfont.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../context */ "./src/context.js");
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../slider */ "./src/slider.js");
/* harmony import */ var _bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bar */ "./src/contraller_bar/bar.js");
/* harmony import */ var _event_eventName__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../event/eventName */ "./src/event/eventName.js");
var _class,_temp;var LeftBar=Object(_context__WEBPACK_IMPORTED_MODULE_7__["videoDec"])(_class=(_temp=/*#__PURE__*/function(_React$Component){Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(LeftBar,_React$Component);function LeftBar(props){var _this;Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this,LeftBar);_this=Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this,Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(LeftBar).call(this,props));_this.seek=function(){_this.historyEnd=false;};_this.historyPlayEnd=function(){_this.historyEnd=true;};_this.updateRender=function(){_this.forceUpdate();};_this.changePlayStatus=function(){var _this$props=_this.props,api=_this$props.api,video=_this$props.video;if(_this.historyEnd){_this.props.reloadHistory();}else{video.paused?api.play():api.pause();}};_this.mutedChange=function(){var _this$props2=_this.props,api=_this$props2.api,video=_this$props2.video;video.muted?api.unmute():api.mute();};_this.volumechange=function(){_this.forceUpdate();};_this.openSliderVolume=function(){_this.setState({openSliderVolume:true});};_this.closeSliderVolume=function(){_this.setState({openSliderVolume:false});};_this.onChangeVolume=function(volume){var _this$props3=_this.props,api=_this$props3.api,video=_this$props3.video;api.setVolume(parseFloat(volume.toFixed(1)));if(volume>0&&video.muted){api.unmute();}};_this.reload=function(){if(_this.props.isHistory){_this.props.reloadHistory();}else{_this.props.api.reload();}_this.props.event.emit(_event_eventName__WEBPACK_IMPORTED_MODULE_10__["default"].CLEAR_ERROR_TIMER);};_this.state={openSliderVolume:false};_this.historyEnd=false;return _this;}Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LeftBar,[{key:"componentDidMount",value:function componentDidMount(){var event=this.props.event;event.addEventListener("play",this.updateRender);event.addEventListener("pause",this.updateRender);event.addEventListener("volumechange",this.volumechange);event.on(_event_eventName__WEBPACK_IMPORTED_MODULE_10__["default"].HISTORY_PLAY_END,this.historyPlayEnd);event.on(_event_eventName__WEBPACK_IMPORTED_MODULE_10__["default"].SEEK,this.seek);}},{key:"componentWillUnmount",value:function componentWillUnmount(){var event=this.props.event;event.removeEventListener("play",this.updateRender);event.removeEventListener("pause",this.updateRender);event.removeEventListener("volumechange",this.volumechange);event.off(_event_eventName__WEBPACK_IMPORTED_MODULE_10__["default"].HISTORY_PLAY_END,this.historyPlayEnd);event.off(_event_eventName__WEBPACK_IMPORTED_MODULE_10__["default"].SEEK,this.seek);}},{key:"render",value:function render(){var openSliderVolume=this.state.openSliderVolume;var _this$props4=this.props,video=_this$props4.video,playerProps=_this$props4.playerProps;var volumeType=video.volume===1?"lm-player-volume-max":"lm-player-volume-normal-fuben";return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"contraller-left-bar"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_bar__WEBPACK_IMPORTED_MODULE_9__["default"],{visibel:!playerProps.isLive},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_iconfont__WEBPACK_IMPORTED_MODULE_6__["default"],{onClick:this.changePlayStatus,type:video.paused?"lm-player-Play_Main":"lm-player-Pause_Main",title:video.paused?"播放":"暂停"})),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_bar__WEBPACK_IMPORTED_MODULE_9__["default"],{className:"contraller-bar-volume ".concat(openSliderVolume?"contraller-bar-hover-volume":""),onMouseOver:this.openSliderVolume,onMouseOut:this.closeSliderVolume},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_iconfont__WEBPACK_IMPORTED_MODULE_6__["default"],{onClick:this.mutedChange,type:video.muted?"lm-player-volume-close":volumeType,title:"\u97F3\u91CF"}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"volume-slider-layout"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_slider__WEBPACK_IMPORTED_MODULE_8__["default"],{className:"volume-slider",currentPercent:video.muted?0:video.volume*100,onChange:this.onChangeVolume,renderTips:function renderTips(precent){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span",null,Math.round(precent*100),"%");}}))),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_bar__WEBPACK_IMPORTED_MODULE_9__["default"],null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_iconfont__WEBPACK_IMPORTED_MODULE_6__["default"],{onClick:this.reload,type:"lm-player-Refresh_Main",title:"\u91CD\u8F7D"})));}}]);return LeftBar;}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component),_temp))||_class;/* harmony default export */ __webpack_exports__["default"] = (LeftBar);

/***/ }),

/***/ "./src/contraller_bar/right_bar.js":
/*!*****************************************!*\
  !*** ./src/contraller_bar/right_bar.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context */ "./src/context.js");
/* harmony import */ var _iconfont__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../iconfont */ "./src/iconfont.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util */ "./src/util.js");
var _class,_temp;var RightBar=Object(_context__WEBPACK_IMPORTED_MODULE_6__["videoDec"])(_class=(_temp=/*#__PURE__*/function(_React$Component){Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RightBar,_React$Component);function RightBar(){var _getPrototypeOf2;var _this;Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this,RightBar);for(var _len=arguments.length,_args=new Array(_len),_key=0;_key<_len;_key++){_args[_key]=arguments[_key];}_this=Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this,(_getPrototypeOf2=Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(RightBar)).call.apply(_getPrototypeOf2,[this].concat(_args)));_this.update=function(){_this.forceUpdate();};_this.fullscreen=function(){var _this$props=_this.props,api=_this$props.api,playContainer=_this$props.playContainer;if(!Object(_util__WEBPACK_IMPORTED_MODULE_8__["isFullscreen"])(playContainer)){api.requestFullScreen();}else{api.cancelFullScreen();}_this.forceUpdate();};_this.setScale=function(){var _this$props2=_this.props,api=_this$props2.api,playContainer=_this$props2.playContainer;var dragDom=playContainer.querySelector(".player-mask-layout");api.setScale.apply(api,arguments);var position=Object(_util__WEBPACK_IMPORTED_MODULE_8__["computedBound"])(dragDom,api.getPosition(),api.getScale());position&&api.setPosition(position,true);};_this.snapshot=function(){var _this$props3=_this.props,api=_this$props3.api,playerProps=_this$props3.playerProps;if(playerProps.snapshot){playerProps.snapshot(api.snapshot());}};return _this;}Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(RightBar,[{key:"componentDidMount",value:function componentDidMount(){Object(_util__WEBPACK_IMPORTED_MODULE_8__["fullScreenListener"])(true,this.update);}},{key:"componentWillUnmount",value:function componentWillUnmount(){Object(_util__WEBPACK_IMPORTED_MODULE_8__["fullScreenListener"])(false,this.update);}},{key:"render",value:function render(){var _this2=this;var _this$props4=this.props,playContainer=_this$props4.playContainer,playerProps=_this$props4.playerProps;var isScale=playerProps.isScale,snapshot=playerProps.snapshot;var isfull=Object(_util__WEBPACK_IMPORTED_MODULE_8__["isFullscreen"])(playContainer);return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"contraller-right-bar"},isScale&&react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span",{className:"contraller-bar-item"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_iconfont__WEBPACK_IMPORTED_MODULE_7__["default"],{title:"\u7F29\u5C0F",onClick:function onClick(){return _this2.setScale(-0.2);},type:"lm-player-ZoomOut_Main"})),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span",{className:"contraller-bar-item"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_iconfont__WEBPACK_IMPORTED_MODULE_7__["default"],{title:"\u590D\u4F4D",onClick:function onClick(){return _this2.setScale(1,true);},type:"lm-player-ZoomDefault_Main"})),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span",{className:"contraller-bar-item"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_iconfont__WEBPACK_IMPORTED_MODULE_7__["default"],{title:"\u653E\u5927",onClick:function onClick(){return _this2.setScale(0.2);},type:"lm-player-ZoomIn_Main"}))),snapshot&&react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span",{className:"contraller-bar-item"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_iconfont__WEBPACK_IMPORTED_MODULE_7__["default"],{title:"\u622A\u56FE",onClick:this.snapshot,type:"lm-player-SearchBox"})),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span",{className:"contraller-bar-item"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_iconfont__WEBPACK_IMPORTED_MODULE_7__["default"],{title:isfull?"窗口":"全屏",onClick:this.fullscreen,type:isfull?"lm-player-ExitFull_Main":"lm-player-Full_Main"})));}}]);return RightBar;}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component),_temp))||_class;/* harmony default export */ __webpack_exports__["default"] = (RightBar);

/***/ }),

/***/ "./src/createPlayer.js":
/*!*****************************!*\
  !*** ./src/createPlayer.js ***!
  \*****************************/
/*! exports provided: createPlayer, createHistoryPlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPlayer", function() { return createPlayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHistoryPlayer", function() { return createHistoryPlayer; });
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./history */ "./src/history/index.js");
function createPlayer(_ref){var container=_ref.container,children=_ref.children,_onInitPlayer=_ref.onInitPlayer,props=Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref,["container","children","onInitPlayer"]);react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_player__WEBPACK_IMPORTED_MODULE_3__["default"],Object.assign({},props,{onInitPlayer:function onInitPlayer(player){player.destroy=function(){react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.unmountComponentAtNode(container);};_onInitPlayer&&_onInitPlayer(player);}}),children),container);}function createHistoryPlayer(_ref2){var container=_ref2.container,children=_ref2.children,_onInitPlayer2=_ref2.onInitPlayer,props=Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2,["container","children","onInitPlayer"]);react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_history__WEBPACK_IMPORTED_MODULE_4__["default"],Object.assign({},props,{onInitPlayer:function onInitPlayer(player){player.destroy=function(){react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.unmountComponentAtNode(container);};_onInitPlayer2&&_onInitPlayer2(player);}}),children),container);}

/***/ }),

/***/ "./src/event/contrallerEvent.js":
/*!**************************************!*\
  !*** ./src/event/contrallerEvent.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context */ "./src/context.js");
/* harmony import */ var _eventName__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./eventName */ "./src/event/eventName.js");
var _class,_temp;var ContrallerEvent=Object(_context__WEBPACK_IMPORTED_MODULE_6__["videoDec"])(_class=(_temp=/*#__PURE__*/function(_React$Component){Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ContrallerEvent,_React$Component);function ContrallerEvent(props){var _this;Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this,ContrallerEvent);_this=Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this,Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ContrallerEvent).call(this,props));_this.showContraller=function(){var event=_this.props.event;event.emit(_eventName__WEBPACK_IMPORTED_MODULE_7__["default"].SHOW_CONTRALLER);_this.hideContraller();};_this.hideContraller=function(){var event=_this.props.event;clearTimeout(_this.timer);_this.timer=setTimeout(function(){event.emit(_eventName__WEBPACK_IMPORTED_MODULE_7__["default"].HIDE_CONTRALLER);},3*1000);};_this.timer=null;return _this;}Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ContrallerEvent,[{key:"componentDidMount",value:function componentDidMount(){var _this$props=this.props,playContainer=_this$props.playContainer,event=_this$props.event;playContainer.addEventListener("mousemove",this.showContraller,false);playContainer.addEventListener("mouseout",this.hideContraller,false);this.timer=setTimeout(function(){event.emit(_eventName__WEBPACK_IMPORTED_MODULE_7__["default"].HIDE_CONTRALLER);},5*1000);}},{key:"componentWillUnmount",value:function componentWillUnmount(){var playContainer=this.props.playContainer;playContainer.addEventListener("mousemove",this.showContraller,false);playContainer.addEventListener("mouseout",this.hideContraller,false);clearTimeout(this.timer);}},{key:"render",value:function render(){return null;}}]);return ContrallerEvent;}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component),_temp))||_class;/* harmony default export */ __webpack_exports__["default"] = (ContrallerEvent);

/***/ }),

/***/ "./src/event/dragEvent.js":
/*!********************************!*\
  !*** ./src/event/dragEvent.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context */ "./src/context.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util */ "./src/util.js");
var _class,_temp;var DragEvent=Object(_context__WEBPACK_IMPORTED_MODULE_6__["videoDec"])(_class=(_temp=/*#__PURE__*/function(_React$Component){Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(DragEvent,_React$Component);function DragEvent(props){var _this;Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this,DragEvent);_this=Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this,Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(DragEvent).call(this,props));_this.openDrag=function(e){_this.position.start=[e.pageX,e.pageY];_this.dragDom.addEventListener("mousemove",_this.moveChange);_this.dragDom.addEventListener("mouseup",_this.stopDrag);};_this.moveChange=function(e){var api=_this.props.api;var currentPosition=api.getPosition();_this.position.end=[e.pageX,e.pageY];var x=currentPosition[0]+(_this.position.end[0]-_this.position.start[0]);var y=currentPosition[1]+(_this.position.end[1]-_this.position.start[1]);var position=[x,y];api.setPosition(position);_this.position.start=[e.pageX,e.pageY];};_this.stopDrag=function(){_this.dragDom.removeEventListener("mousemove",_this.moveChange);_this.dragDom.removeEventListener("mouseup",_this.stopDrag);_this.transformChange();};_this.transformChange=function(){var api=_this.props.api;var position=Object(_util__WEBPACK_IMPORTED_MODULE_7__["computedBound"])(_this.dragDom,api.getPosition(),api.getScale());position&&api.setPosition(position,true);};var playContainer=props.playContainer;_this.dragDom=playContainer.querySelector(".player-mask-layout");_this.position={start:[0,0],end:[0,0]};return _this;}Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DragEvent,[{key:"componentDidMount",value:function componentDidMount(){var isDraggable=this.props.playerProps.isDraggable;if(isDraggable){this.dragDom.addEventListener("mousedown",this.openDrag);this.props.event.addEventListener("transform",this.transformChange,true);}}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.dragDom.removeEventListener("mousedown",this.openDrag);this.props.event.removeEventListener("transform",this.transformChange);}},{key:"render",value:function render(){return null;}}]);return DragEvent;}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component),_temp))||_class;/* harmony default export */ __webpack_exports__["default"] = (DragEvent);

/***/ }),

/***/ "./src/event/errorEvent.js":
/*!*********************************!*\
  !*** ./src/event/errorEvent.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context */ "./src/context.js");
/* harmony import */ var _eventName__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./eventName */ "./src/event/eventName.js");
/* harmony import */ var flv_lm_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flv.lm.js */ "flv.lm.js");
/* harmony import */ var flv_lm_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flv_lm_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var hls_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! hls.js */ "hls.js");
/* harmony import */ var hls_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(hls_js__WEBPACK_IMPORTED_MODULE_9__);
var _class,_temp;var ErrorEvent=Object(_context__WEBPACK_IMPORTED_MODULE_6__["videoDec"])(_class=(_temp=/*#__PURE__*/function(_React$Component){Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ErrorEvent,_React$Component);function ErrorEvent(props){var _this;Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this,ErrorEvent);_this=Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this,Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ErrorEvent).call(this,props));_this.clearErrorTimer=function(){_this.errorTimer=0;};_this.clearError=function(){var event=_this.props.event;if(_this.errorTimer>0){console.warn("视频重连成功！");event.emit(_eventName__WEBPACK_IMPORTED_MODULE_7__["default"].RELOAD_SUCCESS);_this.clearErrorTimer();}};_this.errorHandle=function(){var _this$props=_this.props,event=_this$props.event,api=_this$props.api,isHistory=_this$props.isHistory,changePlayIndex=_this$props.changePlayIndex,playIndex=_this$props.playIndex,playerProps=_this$props.playerProps;var timer=_this.errorTimer+1;for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}event.emit.apply(event,[_eventName__WEBPACK_IMPORTED_MODULE_7__["default"].ERROR].concat(args));if(timer>playerProps.errorReloadTimer){isHistory?changePlayIndex(playIndex+1):event.emit(_eventName__WEBPACK_IMPORTED_MODULE_7__["default"].RELOAD_FAIL),api.unload();}else{var _console;event.emit.apply(event,[_eventName__WEBPACK_IMPORTED_MODULE_7__["default"].ERROR_RELOAD,timer].concat(args));(_console=console).error.apply(_console,["\u89C6\u9891\u64AD\u653E\u51FA\u9519\uFF0C\u6B63\u5728\u8FDB\u884C\u91CD\u8FDE".concat(timer)].concat(args));_this.errorTimer=timer;_this.reconnectTimer=setTimeout(function(){api.reload();},1000*5);}};_this.errorTimer=0;return _this;}Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ErrorEvent,[{key:"componentDidMount",value:function componentDidMount(){var _this$props2=this.props,event=_this$props2.event,flvPlayer=_this$props2.flvPlayer,hlsPlayer=_this$props2.hlsPlayer;if(flvPlayer){//捕获flv错误
flvPlayer.on(flv_lm_js__WEBPACK_IMPORTED_MODULE_8___default.a.Events.ERROR,this.errorHandle);}if(hlsPlayer){//捕获hls错误
hlsPlayer.on(hls_js__WEBPACK_IMPORTED_MODULE_9__["Events"].ERROR,this.errorHandle);}//捕获video错误
event.addEventListener("error",this.errorHandle,false);//获取video状态清除错误状态
event.addEventListener("canplay",this.clearError,false);//历史视频切换播放索引时清除错误次数
event.on(_eventName__WEBPACK_IMPORTED_MODULE_7__["default"].CHANGE_PLAY_INDEX,this.clearErrorTimer);//历史视频主动清除错误次数
event.on(_eventName__WEBPACK_IMPORTED_MODULE_7__["default"].CLEAR_ERROR_TIMER,this.clearErrorTimer);}},{key:"componentWillReceiveProps",value:function componentWillReceiveProps(nextProps){if(nextProps.flvPlayer&&nextProps.flvPlayer!==this.props.flvPlayer){nextProps.flvPlayer.on(flv_lm_js__WEBPACK_IMPORTED_MODULE_8___default.a.Events.ERROR,this.errorHandle);}if(nextProps.hlsPlayer&&nextProps.hlsPlayer!==this.props.hlsPlayer){nextProps.hlsPlayer.on(hls_js__WEBPACK_IMPORTED_MODULE_9__["Events"].ERROR,this.errorHandle);}}},{key:"componentWillUnmount",value:function componentWillUnmount(){var _this$props3=this.props,event=_this$props3.event,flvPlayer=_this$props3.flvPlayer,hlsPlayer=_this$props3.hlsPlayer;event.removeEventListener("error",this.errorHandle,false);flvPlayer&&flvPlayer.off(flv_lm_js__WEBPACK_IMPORTED_MODULE_8___default.a.Events.ERROR,this.errorHandle);hlsPlayer&&hlsPlayer.off(hls_js__WEBPACK_IMPORTED_MODULE_9__["Events"].ERROR,this.errorHandle);event.off(_eventName__WEBPACK_IMPORTED_MODULE_7__["default"].CLEAR_ERROR_TIMER,this.clearErrorTimer);event.off(_eventName__WEBPACK_IMPORTED_MODULE_7__["default"].CHANGE_PLAY_INDEX,this.clearErrorTimer);clearTimeout(this.reconnectTimer);}},{key:"render",value:function render(){return null;}}]);return ErrorEvent;}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component),_temp))||_class;/* harmony default export */ __webpack_exports__["default"] = (ErrorEvent);

/***/ }),

/***/ "./src/event/eventName.js":
/*!********************************!*\
  !*** ./src/event/eventName.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({RELOAD:"reload",//手动视频重载
RELOAD_FAIL:"reloadFail",// 视频出错，重连失败
RELOAD_SUCCESS:"reloadSuccess",//视频出错，重连成功
ERROR:"error",//视频出错
ERROR_RELOAD:"errorRload",//视频出错，自动重连
HISTORY_PLAY_END:"historyPlayEnd",//历史视频列表播放结束
SEEK:"seek",//跳跃播放时间
TRANSFORM:"transform",//视频容器缩放
CHANGE_PLAY_INDEX:"changePlayIndex",//历史视频列表播放索引改变
HIDE_CONTRALLER:"hideContraller",SHOW_CONTRALLER:"showContraller",CLEAR_ERROR_TIMER:"clearErrorTimer"});

/***/ }),

/***/ "./src/event/index.js":
/*!****************************!*\
  !*** ./src/event/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
var VideoEvent=/*#__PURE__*/function(){function VideoEvent(video){Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this,VideoEvent);this.video=video;this.events={};this.playerEvents={};}Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(VideoEvent,[{key:"on",value:function on(eventName,handle){this.events&&this.events[eventName]?this.events[eventName].listener.push(handle):this.events[eventName]={type:eventName,listener:[handle]};}},{key:"addEventListener",value:function addEventListener(eventName,handle){if(this.video){this.playerEvents[eventName]?this.playerEvents[eventName].push(handle):this.playerEvents[eventName]=[handle];this.video.addEventListener(eventName,handle,false);}}},{key:"removeEventListener",value:function removeEventListener(eventName,handle){if(this.video){if(!this.playerEvents||this.playerEvents[eventName]){return;}var index=this.playerEvents[eventName].findIndex(function(v){return v===handle;});index>-1&&this.playerEvents[eventName].splice(index,1);this.video.removeEventListener(eventName,handle,false);}}},{key:"emit",value:function emit(eventName){for(var _len=arguments.length,data=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){data[_key-1]=arguments[_key];}if(!this.events||!this.events[eventName]){return;}this.events[eventName].listener.forEach(function(v){v.apply(void 0,data);});}},{key:"off",value:function off(eventName,handle){if(!this.events||!this.events.eventName){return;}var index=this.events[eventName].listener.findIndex(function(v){return v===handle;});index>-1&&this.events[eventName].listener.splice(index,1);}},{key:"destroy",value:function destroy(){var _this=this;Object.keys(this.playerEvents).forEach(function(key){_this.playerEvents[key].forEach(function(fn){_this.removeEventListener(key,fn);});});this.playerEvents=null;this.events=null;}}]);return VideoEvent;}();/* harmony default export */ __webpack_exports__["default"] = (VideoEvent);

/***/ }),

/***/ "./src/history/index.js":
/*!******************************!*\
  !*** ./src/history/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../context */ "./src/context.js");
/* harmony import */ var _contraller_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../contraller_bar */ "./src/contraller_bar/index.js");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../message */ "./src/message.js");
/* harmony import */ var _time_line_history__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./time_line_history */ "./src/history/time_line_history.js");
/* harmony import */ var _event_errorEvent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../event/errorEvent */ "./src/event/errorEvent.js");
/* harmony import */ var _event_dragEvent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../event/dragEvent */ "./src/event/dragEvent.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../api */ "./src/api.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../event */ "./src/event/index.js");
/* harmony import */ var _play_end__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./play_end */ "./src/history/play_end.js");
/* harmony import */ var _event_eventName__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../event/eventName */ "./src/event/eventName.js");
/* harmony import */ var _event_contrallerEvent__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../event/contrallerEvent */ "./src/event/contrallerEvent.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../util */ "./src/util.js");
var HistoryPlayer=/*#__PURE__*/function(_React$Component){Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HistoryPlayer,_React$Component);function HistoryPlayer(props){var _this;Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this,HistoryPlayer);_this=Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this,Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(HistoryPlayer).call(this,props));_this.initPlayer=function(index){var historyList=_this.props.historyList;if(!historyList||!historyList.fragments[index]||!historyList.fragments[index].file){return null;}if(_this.flv){_this.flv.unload();_this.flv.destroy();_this.flv=null;}if(_this.hls){_this.hls.stopLoad();_this.hls.destroy();_this.hls=null;}var type=Object(_util__WEBPACK_IMPORTED_MODULE_18__["getVideoType"])(historyList.fragments[index].file);if(type==="flv"||_this.props.type==="flv"){_this.flv=Object(_util__WEBPACK_IMPORTED_MODULE_18__["createFlvPlayer"])(_this.player,{file:historyList.fragments[index].file});_this.api&&_this.api.updateChunk({flv:_this.flv});}else if(type==="m3u8"||_this.props.type==="hls"){_this.hls=Object(_util__WEBPACK_IMPORTED_MODULE_18__["createHlsPlayer"])(_this.player,historyList.fragments[index].file);_this.api&&_this.api.updateChunk({hls:_this.hls});}else{_this.player.src=historyList.fragments[index].file;}_this.playIndex=index;_this.forceUpdate();};_this.changePlayIndex=function(index){var historyList=_this.props.historyList;if(!historyList.fragments[index]){_this.event.emit(_event_eventName__WEBPACK_IMPORTED_MODULE_16__["default"].HISTORY_PLAY_END);return;}if(!historyList.fragments[index].file){_this.changePlayIndex(index+1);}else{_this.initPlayer(index);}_this.api.play();_this.event.emit(_event_eventName__WEBPACK_IMPORTED_MODULE_16__["default"].CHANGE_PLAY_INDEX,index);};_this.getPlayerApiContext=function(){var api=_this.api?_this.api.getApi():{};var event=_this.event?{on:_this.event.on.bind(_this.event),off:_this.event.off.bind(_this.event),emit:_this.event.emit.bind(_this.event)}:{};var historyApi={seekTo:_this.seekTo};return Object.assign({},api,event,historyApi);};_this.computedIndexFormTime=function(time){var historyList=_this.props.historyList;return historyList.fragments.findIndex(function(v){return v.end>time;});};_this.seekTo=function(currentTime){var playIndex=_this.computedIndexFormTime(currentTime);var fragment=historyList.fragments[playIndex];var seekTime=currentTime-fragment.begin-1;_this.api.pause();if(playIndex!==_this.playIndex){_this.changePlayIndex(playIndex);}_this.api.seekTo(seekTime,true);_this.event.emit(_event_eventName__WEBPACK_IMPORTED_MODULE_16__["default"].SEEK,currentTime);};_this.reloadHistory=function(){_this.changePlayIndex(0);_this.api.seekTo(0);_this.event.emit(_event_eventName__WEBPACK_IMPORTED_MODULE_16__["default"].RELOAD);_this.api.play();};_this.getProvider=function(){return{video:_this.player,event:_this.event,playerProps:_this.props,api:_this.api,playContainer:_this.playContainer,changePlayIndex:_this.changePlayIndex,playIndex:_this.playIndex,historyList:_this.props.historyList,seekTo:_this.seekTo,isHistory:true,reloadHistory:_this.reloadHistory};};_this.renderVideoTools=function(){if(!_this.player){return null;}return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_contraller_bar__WEBPACK_IMPORTED_MODULE_8__["default"],null),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_message__WEBPACK_IMPORTED_MODULE_9__["default"],null),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_time_line_history__WEBPACK_IMPORTED_MODULE_10__["default"],null),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_event_contrallerEvent__WEBPACK_IMPORTED_MODULE_17__["default"],null),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_event_errorEvent__WEBPACK_IMPORTED_MODULE_11__["default"],{flvPlayer:_this.flv,hlsPlayer:_this.hls}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_event_dragEvent__WEBPACK_IMPORTED_MODULE_12__["default"],null),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_play_end__WEBPACK_IMPORTED_MODULE_15__["default"],null));};_this.playIndex=0;_this.player=null;_this.event=null;_this.flv=null;_this.hls=null;_this.playContainerRef=react__WEBPACK_IMPORTED_MODULE_5___default.a.createRef();_this.playContainer=null;_this.willReCreatePlayer=false;return _this;}Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(HistoryPlayer,[{key:"componentDidMount",value:function componentDidMount(){this.playContainer=react_dom__WEBPACK_IMPORTED_MODULE_6___default.a.findDOMNode(this.playContainerRef.current);this.player=this.playContainer.querySelector("video");if(this.props.defaultTime){this.seekTo(defaultTime);}else{this.initPlayer(this.playIndex);}this.event=new _event__WEBPACK_IMPORTED_MODULE_14__["default"](this.player);this.api=new _api__WEBPACK_IMPORTED_MODULE_13__["default"](this.player,this.playContainer,this.event,this.flv,this.hls);this.props.onInitPlayer&&this.props.onInitPlayer(this.getPlayerApiContext());if(this.props.autoPlay){this.api.play();}}},{key:"componentWillReceiveProps",value:function componentWillReceiveProps(nextProps){if(this.props.historyList!==nextProps.historyList){this.willReCreatePlayer=true;}}},{key:"componentDidUpdate",value:function componentDidUpdate(){if(this.willReCreatePlayer){this.playIndex=0;this.initPlayer(this.playIndex);this.willReCreatePlayer=false;}}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.event.destroy();this.api.destroy();this.player=null;this.event=null;this.flv=null;this.hls=null;this.playContainerRef=null;this.playContainer=null;this.willReCreatePlayer=null;}},{key:"render",value:function render(){var _this$props=this.props,autoplay=_this$props.autoplay,poster=_this$props.poster,preload=_this$props.preload,_this$props$muted=_this$props.muted,muted=_this$props$muted===void 0?"muted":_this$props$muted,_this$props$loop=_this$props.loop,loop=_this$props$loop===void 0?false:_this$props$loop,_this$props$playsinli=_this$props.playsinline,playsinline=_this$props$playsinli===void 0?false:_this$props$playsinli;var providerValue=this.getProvider();return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"lm-player-container",ref:this.playContainerRef},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"player-mask-layout"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("video",{autoPlay:autoplay,preload:preload,muted:muted,poster:poster,controls:false,playsInline:playsinline,loop:loop})),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_7__["Provider"],{value:providerValue},this.renderVideoTools()),this.props.children);}}]);return HistoryPlayer;}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);HistoryPlayer.defaultProps={isLive:true,isDraggable:true,isScale:true,errorReloadTimer:5,muted:"muted",autoPlay:true,playsInline:false,preload:"auto",loop:false,defaultTime:0};/* harmony default export */ __webpack_exports__["default"] = (HistoryPlayer);

/***/ }),

/***/ "./src/history/play_end.js":
/*!*********************************!*\
  !*** ./src/history/play_end.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context */ "./src/context.js");
var _class,_temp;/**
 * history下使用 用户切换下个播放地址
 */var PlayEnd=Object(_context__WEBPACK_IMPORTED_MODULE_6__["videoDec"])(_class=(_temp=/*#__PURE__*/function(_React$Component){Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(PlayEnd,_React$Component);function PlayEnd(){var _getPrototypeOf2;var _this;Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this,PlayEnd);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this,(_getPrototypeOf2=Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PlayEnd)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.endedHandle=function(){var index=_this.props.playIndex;_this.props.changePlayIndex(index+1);};return _this;}Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PlayEnd,[{key:"componentDidMount",value:function componentDidMount(){var event=this.props.event;event.addEventListener("ended",this.endedHandle,false);}},{key:"componentWillUnmount",value:function componentWillUnmount(){var event=this.props.event;event.removeEventListener("ended",this.endedHandle,false);}},{key:"render",value:function render(){return null;}}]);return PlayEnd;}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component),_temp))||_class;/* harmony default export */ __webpack_exports__["default"] = (PlayEnd);

/***/ }),

/***/ "./src/history/time_line_history.js":
/*!******************************************!*\
  !*** ./src/history/time_line_history.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context */ "./src/context.js");
/* harmony import */ var _iconfont__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../iconfont */ "./src/iconfont.js");
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../slider */ "./src/slider.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util */ "./src/util.js");
/* harmony import */ var _event_eventName__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../event/eventName */ "./src/event/eventName.js");
/* harmony import */ var _style_time_line_less__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../style/time-line.less */ "./src/style/time-line.less");
/* harmony import */ var _style_time_line_less__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_style_time_line_less__WEBPACK_IMPORTED_MODULE_11__);
var _class,_temp;var TineLine=Object(_context__WEBPACK_IMPORTED_MODULE_6__["videoDec"])(_class=(_temp=/*#__PURE__*/function(_React$Component){Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TineLine,_React$Component);function TineLine(props){var _this;Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this,TineLine);_this=Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this,Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TineLine).call(this,props));_this.hideContraller=function(){_this.setState({hideBar:true});};_this.showContraller=function(){_this.setState({hideBar:false});};_this.reload=function(){var api=_this.props.api;_this.setState({isEnd:false,currentTime:api.getCurrentTime()});};_this.historyPlayEnd=function(){_this.setState({isEnd:true});};_this.getDuration=function(){var api=_this.props.api;_this.setState({duration:api.getDuration()});};_this.getCurrentTime=function(){var api=_this.props.api;var state={currentTime:api.getCurrentTime(),buffered:api.getSecondsLoaded()};if(state.buffered===_this.state.buffered){delete state.buffered;}_this.setState(state);};_this.getBuffered=function(){var api=_this.props.api;_this.setState({buffered:api.getSecondsLoaded()});};_this.changePlayTime=function(percent){var _this$props=_this.props,seekTo=_this$props.seekTo,historyList=_this$props.historyList;var currentTime=percent*historyList.duration;var playIndex=historyList.fragments.findIndex(function(v){return v.end>currentTime;});var fragment=historyList.fragments[playIndex];if(fragment.file){seekTo(currentTime);_this.setState({currentTime:currentTime,isEnd:false});}};_this.seekendPlay=function(){var api=_this.props.api;api.play();};_this.renderTimeLineTips=function(percent){var historyList=_this.props.historyList;var currentTime=percent*historyList.duration*1000;var date=Object(_util__WEBPACK_IMPORTED_MODULE_9__["dateFormat"])(new Date(historyList.beginDate).getTime()+currentTime);return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span",null,date);};_this.fastForward=function(){var api=_this.props.api;api.fastForward();};_this.backWind=function(){var api=_this.props.api;api.backWind();};_this.computedLineList=function(historyList){var duration=historyList.duration;return historyList.fragments.map(function(v){return{disabled:!v.file,size:(v.end-v.begin)/duration*100};});};_this.state={duration:1,currentTime:0,buffered:0,isEnd:false,hideBar:false};return _this;}Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TineLine,[{key:"componentDidMount",value:function componentDidMount(){var event=this.props.event;event.addEventListener("loadedmetadata",this.getDuration);event.addEventListener("durationchange",this.getDuration);event.addEventListener("timeupdate",this.getCurrentTime);event.addEventListener("progress",this.getBuffered);event.addEventListener("suspend",this.getBuffered);event.addEventListener("seeked",this.seekendPlay);event.on(_event_eventName__WEBPACK_IMPORTED_MODULE_10__["default"].HISTORY_PLAY_END,this.historyPlayEnd);event.on(_event_eventName__WEBPACK_IMPORTED_MODULE_10__["default"].RELOAD,this.reload);event.on(_event_eventName__WEBPACK_IMPORTED_MODULE_10__["default"].HIDE_CONTRALLER,this.hideContraller);event.on(_event_eventName__WEBPACK_IMPORTED_MODULE_10__["default"].SHOW_CONTRALLER,this.showContraller);}},{key:"componentWillUnmount",value:function componentWillUnmount(){var event=this.props.event;event.removeEventListener("loadedmetadata",this.getDuration);event.removeEventListener("durationchange",this.getDuration);event.removeEventListener("timeupdate",this.getCurrentTime);event.removeEventListener("progress",this.getBuffered);event.removeEventListener("suspend",this.getBuffered);event.removeEventListener("seeked",this.seekendPlay);event.off(_event_eventName__WEBPACK_IMPORTED_MODULE_10__["default"].HISTORY_PLAY_END,this.historyPlayEnd);event.off(_event_eventName__WEBPACK_IMPORTED_MODULE_10__["default"].RELOAD,this.reload);event.off(_event_eventName__WEBPACK_IMPORTED_MODULE_10__["default"].HIDE_CONTRALLER,this.hideContraller);event.off(_event_eventName__WEBPACK_IMPORTED_MODULE_10__["default"].SHOW_CONTRALLER,this.showContraller);}},{key:"render",value:function render(){var _this$props2=this.props,historyList=_this$props2.historyList,playIndex=_this$props2.playIndex;var _this$state=this.state,currentTime=_this$state.currentTime,buffered=_this$state.buffered,isEnd=_this$state.isEnd,hideBar=_this$state.hideBar;var lineList=this.computedLineList(historyList);var currentLine=lineList.filter(function(v,i){return i<playIndex;}).map(function(v){return v.size;});var currentIndexTime=currentLine.length===0?0:currentLine.length>1?currentLine.reduce(function(p,c){return p+c;}):currentLine[0];var playPercent=Math.round(currentTime/historyList.duration*100+currentIndexTime);var bufferedPercent=Math.round(buffered/historyList.duration*100+currentIndexTime);return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"video-time-line-layout ".concat(hideBar?"hide-time-line":"")},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_iconfont__WEBPACK_IMPORTED_MODULE_7__["default"],{type:"lm-player-PrevFast",onClick:this.backWind,className:"time-line-action-item"}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_slider__WEBPACK_IMPORTED_MODULE_8__["default"],{className:"time-line-box",currentPercent:isEnd?"100":playPercent,availablePercent:bufferedPercent,onChange:this.changePlayTime,renderTimeLineTips:this.renderTimeLineTips},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment,null,lineList.map(function(v,i){var currentSizeLine=lineList.filter(function(v,i2){return i2<i;}).map(function(v){return v.size;});var currentIndexSize=currentSizeLine.length===0?0:currentSizeLine.length>1?currentSizeLine.reduce(function(p,c){return p+c;}):currentSizeLine[0];return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"history-time-line-item ".concat(v.disabled?"history-time-line-disabled":""),key:i,style:{width:"".concat(v.size,"%"),left:"".concat(currentIndexSize,"%")}});}))),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_iconfont__WEBPACK_IMPORTED_MODULE_7__["default"],{type:"lm-player-NextFast_Light",onClick:this.fastForward,className:"time-line-action-item"}));}}]);return TineLine;}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component),_temp))||_class;/* harmony default export */ __webpack_exports__["default"] = (TineLine);

/***/ }),

/***/ "./src/iconfont.js":
/*!*************************!*\
  !*** ./src/iconfont.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IconFont; });
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_iconfont_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style/iconfont.less */ "./src/style/iconfont.less");
/* harmony import */ var _style_iconfont_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_iconfont_less__WEBPACK_IMPORTED_MODULE_2__);
function IconFont(_ref){var type=_ref.type,_ref$className=_ref.className,className=_ref$className===void 0?"":_ref$className,props=Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref,["type","className"]);return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i",Object.assign({className:"lm-player-iconfont ".concat(type," ").concat(className)},props));}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default, HistoryPlayer, createHistoryPlayer, createPlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _player__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./history */ "./src/history/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HistoryPlayer", function() { return _history__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _createPlayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createPlayer */ "./src/createPlayer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createHistoryPlayer", function() { return _createPlayer__WEBPACK_IMPORTED_MODULE_2__["createHistoryPlayer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPlayer", function() { return _createPlayer__WEBPACK_IMPORTED_MODULE_2__["createPlayer"]; });



/***/ }),

/***/ "./src/live_heart.js":
/*!***************************!*\
  !*** ./src/live_heart.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./context */ "./src/context.js");
/* harmony import */ var _event_eventName__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./event/eventName */ "./src/event/eventName.js");
var _class,_temp;var LiveHeart=Object(_context__WEBPACK_IMPORTED_MODULE_6__["videoDec"])(_class=(_temp=/*#__PURE__*/function(_React$Component){Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(LiveHeart,_React$Component);function LiveHeart(props){var _this;Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this,LiveHeart);_this=Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this,Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(LiveHeart).call(this,props));_this.canplay=function(){var api=_this.props.api;_this.isCanPlay=true;api.play();};_this.errorHandle=function(){_this.isPlayError=true;};_this.clearHandle=function(){_this.isPlayError=false;};_this.updateProgress=function(){_this.progressTime=Date.now();_this.focusSeekAction();};_this.heartAction=function(){var _this$props=_this.props,api=_this$props.api,event=_this$props.event;_this.timer=setInterval(function(){var timeNow=Date.now();var currentTime=api.getCurrentTime();if(_this.isPlayError||!_this.isCanPlay){return;}if(currentTime>0){if(timeNow-_this.progressTime>10*1000){console.warn("当前实时视频缓存未更新，执行reload操作");api.reload();}else{_this.errorTimer=0;}}else{if(_this.errorTimer>=5){event.emit(_event_eventName__WEBPACK_IMPORTED_MODULE_7__["default"].RELOAD_FAIL,_this.errorTimer);api.unload();}else{_this.errorTimer++;api.reload();event.emit(_event_eventName__WEBPACK_IMPORTED_MODULE_7__["default"].ERROR_RELOAD,_this.errorTimer);}}},1000*5);};_this.focusSeekAction=function(){var api=_this.props.api;var current=api.getCurrentTime();var buffered=api.getSecondsLoaded();if(buffered-current>5){console.warn("\u5F53\u524D\u5EF6\u65F6\u8FC7\u5927current->".concat(current," buffered->").concat(buffered,", \u57FA\u4E8E\u89C6\u9891\u5F53\u524D\u7F13\u5B58\u65F6\u95F4\u66F4\u65B0\u5F53\u524D\u64AD\u653E\u65F6\u95F4 updateTime -> ").concat(buffered-2));api.seekTo(buffered-2>0?buffered-2:0);}};_this.progressTime=Date.now();_this.timer=null;_this.isPlayError=false;_this.errorTimer=0;_this.isCanPlay=false;return _this;}Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LiveHeart,[{key:"componentDidMount",value:function componentDidMount(){var event=this.props.event;event.addEventListener("progress",this.updateProgress);event.addEventListener("canplay",this.canplay);event.on(_event_eventName__WEBPACK_IMPORTED_MODULE_7__["default"].ERROR,this.errorHandle);event.on(_event_eventName__WEBPACK_IMPORTED_MODULE_7__["default"].RELOAD_SUCCESS,this.clearHandle);this.heartAction();}},{key:"componentWillUnmount",value:function componentWillUnmount(){var event=this.props.event;event.removeEventListener("progress",this.updateProgress);event.removeEventListener("canplay",this.canplay);event.off(_event_eventName__WEBPACK_IMPORTED_MODULE_7__["default"].ERROR,this.errorHandle);event.off(_event_eventName__WEBPACK_IMPORTED_MODULE_7__["default"].RELOAD_SUCCESS,this.clearHandle);clearInterval(this.timer);}},{key:"render",value:function render(){return null;}}]);return LiveHeart;}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component),_temp))||_class;/* harmony default export */ __webpack_exports__["default"] = (LiveHeart);

/***/ }),

/***/ "./src/message.js":
/*!************************!*\
  !*** ./src/message.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _iconfont__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./iconfont */ "./src/iconfont.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./context */ "./src/context.js");
/* harmony import */ var _event_eventName__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./event/eventName */ "./src/event/eventName.js");
/* harmony import */ var _style_message_less__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style/message.less */ "./src/style/message.less");
/* harmony import */ var _style_message_less__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_message_less__WEBPACK_IMPORTED_MODULE_9__);
var _class,_temp;var VideoMessage=Object(_context__WEBPACK_IMPORTED_MODULE_7__["videoDec"])(_class=(_temp=/*#__PURE__*/function(_React$Component){Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(VideoMessage,_React$Component);function VideoMessage(props){var _this;Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this,VideoMessage);_this=Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this,Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(VideoMessage).call(this,props));_this.clearReloadMessage=function(){_this.message=null;_this.forceUpdate();};_this.reload=function(){_this.setState({status:"reload"});};_this.errorReload=function(timer){_this.message=react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",null,"\u89C6\u9891\u52A0\u8F7D\u9519\u8BEF\uFF0C\u6B63\u5728\u8FDB\u884C\u91CD\u8FDE\u7B2C",timer,"\u91CD\u8FDE");_this.setState({status:"reload",loading:true});};_this.reloadFail=function(){_this.message=react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",null,"\u89C6\u9891\u9519\u8BEF");_this.setState({status:"fail"});};_this.reloadSuccess=function(){_this.message=null;_this.setState({status:null});};_this.openLoading=function(){_this.setState({loading:true});};_this.closeLoading=function(){_this.setState({loading:false});};_this.historyPlayEnd=function(){_this.message=null;_this.setState({status:null,loading:false});_this.props.api.pause();};_this.state={loading:false,status:null};_this.message=null;return _this;}Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(VideoMessage,[{key:"componentDidMount",value:function componentDidMount(){var event=this.props.event;event.addEventListener("loadstart",this.openLoading);event.addEventListener("waiting",this.openLoading);event.addEventListener("seeking",this.openLoading);event.addEventListener("loadeddata",this.closeLoading);event.addEventListener("canplay",this.closeLoading);event.on(_event_eventName__WEBPACK_IMPORTED_MODULE_8__["default"].ERROR_RELOAD,this.errorReload);event.on(_event_eventName__WEBPACK_IMPORTED_MODULE_8__["default"].RELOAD_FAIL,this.reloadFail);event.on(_event_eventName__WEBPACK_IMPORTED_MODULE_8__["default"].RELOAD_SUCCESS,this.reloadSuccess);event.on(_event_eventName__WEBPACK_IMPORTED_MODULE_8__["default"].RELOAD,this.reload);event.on(_event_eventName__WEBPACK_IMPORTED_MODULE_8__["default"].HISTORY_PLAY_END,this.historyPlayEnd);event.on(_event_eventName__WEBPACK_IMPORTED_MODULE_8__["default"].CLEAR_ERROR_TIMER,this.clearReloadMessage);}},{key:"componentWillUnmount",value:function componentWillUnmount(){var event=this.props.event;event.removeEventListener("loadstart",this.openLoading);event.removeEventListener("waiting",this.openLoading);event.removeEventListener("seeking",this.openLoading);event.removeEventListener("loadeddata",this.closeLoading);event.removeEventListener("canplay",this.closeLoading);event.off(_event_eventName__WEBPACK_IMPORTED_MODULE_8__["default"].ERROR_RELOAD,this.errorReload);event.off(_event_eventName__WEBPACK_IMPORTED_MODULE_8__["default"].RELOAD_FAIL,this.reloadFail);event.off(_event_eventName__WEBPACK_IMPORTED_MODULE_8__["default"].RELOAD_SUCCESS,this.reloadSuccess);event.off(_event_eventName__WEBPACK_IMPORTED_MODULE_8__["default"].RELOAD,this.reload);event.off(_event_eventName__WEBPACK_IMPORTED_MODULE_8__["default"].HISTORY_PLAY_END,this.historyPlayEnd);event.off(_event_eventName__WEBPACK_IMPORTED_MODULE_8__["default"].CLEAR_ERROR_TIMER,this.clearReloadMessage);}},{key:"render",value:function render(){var _this$state=this.state,loading=_this$state.loading,status=_this$state.status;return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"lm-player-message-mask ".concat(loading||status==="fail"?"lm-player-mask-loading-animation":"")},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_iconfont__WEBPACK_IMPORTED_MODULE_6__["default"],{type:status==="fail"?"lm-player-YesorNo_No_Dark":"lm-player-Loading",className:"".concat(loading&&status!=="fail"?"lm-player-loading-animation":status==="fail"?"lm-player-loadfail":""," lm-player-loading-icon")}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span",{className:"lm-player-message"},this.message));}}]);return VideoMessage;}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component),_temp))||_class;/* harmony default export */ __webpack_exports__["default"] = (VideoMessage);

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./event */ "./src/event/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./util */ "./src/util.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./context */ "./src/context.js");
/* harmony import */ var _contraller_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contraller_bar */ "./src/contraller_bar/index.js");
/* harmony import */ var _event_contrallerEvent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./event/contrallerEvent */ "./src/event/contrallerEvent.js");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./message */ "./src/message.js");
/* harmony import */ var _time_line__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./time_line */ "./src/time_line.js");
/* harmony import */ var _event_errorEvent__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./event/errorEvent */ "./src/event/errorEvent.js");
/* harmony import */ var _event_dragEvent__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./event/dragEvent */ "./src/event/dragEvent.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./api */ "./src/api.js");
/* harmony import */ var _live_heart__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./live_heart */ "./src/live_heart.js");
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./style/index.less */ "./src/style/index.less");
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_style_index_less__WEBPACK_IMPORTED_MODULE_18__);
var LMPlayer=/*#__PURE__*/function(_React$Component){Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(LMPlayer,_React$Component);function LMPlayer(props){var _this;Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this,LMPlayer);_this=Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this,Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(LMPlayer).call(this,props));_this.initPlayer=function(){if(!_this.props.file){return null;}var type=Object(_util__WEBPACK_IMPORTED_MODULE_8__["getVideoType"])(_this.props.file);if(type==="flv"||_this.props.type==="flv"){_this.flv=Object(_util__WEBPACK_IMPORTED_MODULE_8__["createFlvPlayer"])(_this.player,_this.props);}else if(type==="m3u8"||_this.props.type==="hls"){_this.hls=Object(_util__WEBPACK_IMPORTED_MODULE_8__["createHlsPlayer"])(_this.player,_this.props.file);}else{_this.player.src=_this.props.file;}};_this.renderVideoTools=function(){if(!_this.player){return null;}return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_contraller_bar__WEBPACK_IMPORTED_MODULE_10__["default"],null),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_message__WEBPACK_IMPORTED_MODULE_12__["default"],null),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_event_dragEvent__WEBPACK_IMPORTED_MODULE_15__["default"],null),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_event_contrallerEvent__WEBPACK_IMPORTED_MODULE_11__["default"],null),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_event_errorEvent__WEBPACK_IMPORTED_MODULE_14__["default"],{flvPlayer:_this.flv,hlsPlayer:_this.hls}),_this.props.isLive?react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_live_heart__WEBPACK_IMPORTED_MODULE_17__["default"],{key:_this.props.file}):react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_time_line__WEBPACK_IMPORTED_MODULE_13__["default"],null));};_this.getPlayUrl=function(){return _this.props.file;};_this.getPlayerApiContext=function(){var api=_this.api?_this.api.getApi():{};var event=_this.event?{on:_this.event.on.bind(_this.event),off:_this.event.off.bind(_this.event),emit:_this.event.emit.bind(_this.event)}:{};return Object.assign({},api,event,{getPlayUrl:_this.getPlayUrl,playContainer:_this.playContainer});};_this.getProvider=function(){return{video:_this.player,event:_this.event,playerProps:_this.props,api:_this.api,playContainer:_this.playContainer};};_this.player=null;_this.event=null;_this.flv=null;_this.hls=null;_this.playContainerRef=react__WEBPACK_IMPORTED_MODULE_5___default.a.createRef();_this.playContainer=null;_this.willReCreatePlayer=false;return _this;}Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LMPlayer,[{key:"componentDidMount",value:function componentDidMount(){this.playContainer=react_dom__WEBPACK_IMPORTED_MODULE_6___default.a.findDOMNode(this.playContainerRef.current);this.player=this.playContainer.querySelector("video");this.initPlayer();this.event=new _event__WEBPACK_IMPORTED_MODULE_7__["default"](this.player);this.api=new _api__WEBPACK_IMPORTED_MODULE_16__["default"](this.player,this.playContainer,this.event,this.flv,this.hls);this.forceUpdate();this.props.onInitPlayer&&this.props.onInitPlayer(this.getPlayerApiContext());if(this.props.autoPlay){this.api.play();}}},{key:"componentWillReceiveProps",value:function componentWillReceiveProps(nextProps){if(this.props.file!==nextProps.file){this.willReCreatePlayer=true;}}},{key:"componentDidUpdate",value:function componentDidUpdate(){if(this.willReCreatePlayer){this.initPlayer();this.willReCreatePlayer=false;}}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.event.destroy();this.api.destroy();this.player=null;this.event=null;this.flv=null;this.hls=null;this.playContainerRef=null;this.playContainer=null;this.willReCreatePlayer=null;}},{key:"render",value:function render(){var _this$props=this.props,autoplay=_this$props.autoplay,poster=_this$props.poster,_this$props$preload=_this$props.preload,preload=_this$props$preload===void 0?"none":_this$props$preload,_this$props$muted=_this$props.muted,muted=_this$props$muted===void 0?"muted":_this$props$muted,_this$props$loop=_this$props.loop,loop=_this$props$loop===void 0?false:_this$props$loop,_this$props$playsinli=_this$props.playsinline,playsinline=_this$props$playsinli===void 0?false:_this$props$playsinli;var providerValue=this.getProvider();return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"lm-player-container",ref:this.playContainerRef},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"player-mask-layout"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("video",{autoPlay:autoplay,preload:preload,muted:muted,poster:poster,controls:false,playsInline:playsinline,loop:loop})),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_9__["Provider"],{value:providerValue},this.renderVideoTools()),this.props.children);}}]);return LMPlayer;}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);LMPlayer.defaultProps={isLive:true,isDraggable:true,isScale:true,errorReloadTimer:5,muted:"muted",autoPlay:true,playsInline:false,preload:"auto",loop:false};/* harmony default export */ __webpack_exports__["default"] = (LMPlayer);

/***/ }),

/***/ "./src/slider.js":
/*!***********************!*\
  !*** ./src/slider.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _style_slider_less__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style/slider.less */ "./src/style/slider.less");
/* harmony import */ var _style_slider_less__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_slider_less__WEBPACK_IMPORTED_MODULE_7__);
var Slider=/*#__PURE__*/function(_React$Component){Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Slider,_React$Component);function Slider(props){var _this;Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this,Slider);_this=Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this,Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Slider).call(this,props));_this.renderSliderTips=function(e){var renderTips=_this.props.renderTips;if(!renderTips){return;}var _this$layoutDom$getBo=_this.layoutDom.getBoundingClientRect(),x=_this$layoutDom$getBo.x,width=_this$layoutDom$getBo.width,top=_this$layoutDom$getBo.top;var tipsX=e.pageX;var percent=(e.pageX-x)/width;percent=percent<0?0:percent>1?1:percent;_this.setState({tipsX:tipsX,tipsY:top,showTips:true,tempValue:percent});};_this.hideSliderTips=function(){_this.setState({showTips:false});};_this.cancelPropagation=function(e){e.stopPropagation();};_this.startDrag=function(e){e.stopPropagation();_this.dragFlag=true;document.body.addEventListener("mousemove",_this.moveChange);document.body.addEventListener("mouseup",_this.stopDrag);};_this.moveChange=function(e){e.stopPropagation();var percent=_this.computedPositionForEvent(e);_this.setState({value:percent});};_this.stopDrag=function(e){e.stopPropagation();document.body.removeEventListener("mousemove",_this.moveChange);document.body.removeEventListener("mouseup",_this.stopDrag);_this.dragFlag=false;var percent=_this.state.value/100;percent=percent<0?0:percent>1?1:percent;_this.props.onChange&&_this.props.onChange(percent);};_this.changeCurrentValue=function(event){event.stopPropagation();var _this$layoutDom$getBo2=_this.layoutDom.getBoundingClientRect(),width=_this$layoutDom$getBo2.width,x=_this$layoutDom$getBo2.x;var percent=(event.pageX-x)/width;_this.props.onChange&&_this.props.onChange(percent);};_this.sliderDomRef=react__WEBPACK_IMPORTED_MODULE_5___default.a.createRef();_this.layoutDom=null;_this.lineDom=null;_this.dragDom=null;_this.dragFlag=false;_this.state={value:_this.props.currentPercent||0,tempValue:0,showTips:false,tipsX:0,tipsY:0};return _this;}Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Slider,[{key:"componentWillReceiveProps",value:function componentWillReceiveProps(nextProps){if(!this.dragFlag){this.setState({value:nextProps.currentPercent||0});}}},{key:"componentDidMount",value:function componentDidMount(){this.layoutDom=react_dom__WEBPACK_IMPORTED_MODULE_6___default.a.findDOMNode(this.sliderDomRef.current);this.dragDom=this.layoutDom.querySelector(".drag-change-icon");this.lineDom=this.layoutDom.querySelector(".slider-content");this.layoutDom.addEventListener("mousemove",this.renderSliderTips,false);this.layoutDom.addEventListener("mouseout",this.hideSliderTips,false);this.lineDom.addEventListener("click",this.changeCurrentValue,false);this.dragDom.addEventListener("click",this.cancelPropagation,false);this.dragDom.addEventListener("mousedown",this.startDrag,false);}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.layoutDom.removeEventListener("mousemove",this.renderSliderTips,false);this.layoutDom.removeEventListener("mouseout",this.hideSliderTips,false);this.lineDom.removeEventListener("click",this.changeCurrentValue,false);this.dragDom.removeEventListener("click",this.cancelPropagation,false);this.dragDom.removeEventListener("mousedown",this.startDrag,false);document.body.removeEventListener("mousemove",this.moveChange);document.body.removeEventListener("mouseup",this.stopDrag);this.sliderDomRef=null;this.layoutDom=null;this.lineDom=null;this.dragDom=null;this.dragFlag=null;}},{key:"computedPositionForEvent",value:function computedPositionForEvent(e){var _this$layoutDom$getBo3=this.layoutDom.getBoundingClientRect(),x=_this$layoutDom$getBo3.x,width=_this$layoutDom$getBo3.width;var pageX=e.pageX;var dx=pageX-x;if(dx>width){dx=width;}if(dx<0){dx=0;}return dx/width*100;}},{key:"render",value:function render(){var _this$state=this.state,value=_this$state.value,showTips=_this$state.showTips,tipsX=_this$state.tipsX,tipsY=_this$state.tipsY;var _this$props=this.props,_this$props$available=_this$props.availablePercent,availablePercent=_this$props$available===void 0?0:_this$props$available,_this$props$className=_this$props.className,className=_this$props$className===void 0?"":_this$props$className;return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"slider-layout ".concat(className),ref:this.sliderDomRef},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"slider-content"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"slider-max-line"}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"slider-visibel-line",style:{width:"".concat(availablePercent,"%")}}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"slider-current-line",style:{width:"".concat(value,"%")}}),this.props.children),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"slider-other-content"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"drag-change-icon",draggable:false,style:{left:"".concat(value,"%")}})),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Tips,{visibel:showTips,className:"lm-player-slide-tips",style:{left:tipsX,top:tipsY}},this.props.renderTips&&this.props.renderTips(this.state.tempValue)));}}]);return Slider;}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);var Tips=/*#__PURE__*/function(_React$Component2){Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Tips,_React$Component2);function Tips(props){var _this2;Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this,Tips);_this2=Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this,Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Tips).call(this,props));_this2.ele=document.createElement("div");return _this2;}Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Tips,[{key:"componentDidMount",value:function componentDidMount(){document.body.appendChild(this.ele);}},{key:"componentWillUnmount",value:function componentWillUnmount(){document.body.removeChild(this.ele);this.ele=null;}},{key:"render",value:function render(){var _this$props2=this.props,visibel=_this$props2.visibel,children=_this$props2.children,style=_this$props2.style,_this$props2$classNam=_this$props2.className,className=_this$props2$classNam===void 0?"":_this$props2$classNam;return react_dom__WEBPACK_IMPORTED_MODULE_6___default.a.createPortal(visibel?react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:className,style:style},children):null,this.ele);}}]);return Tips;}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);/* harmony default export */ __webpack_exports__["default"] = (Slider);

/***/ }),

/***/ "./src/style/bar.less":
/*!****************************!*\
  !*** ./src/style/bar.less ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/style/iconfont.less":
/*!*********************************!*\
  !*** ./src/style/iconfont.less ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/style/index.less":
/*!******************************!*\
  !*** ./src/style/index.less ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/style/message.less":
/*!********************************!*\
  !*** ./src/style/message.less ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/style/slider.less":
/*!*******************************!*\
  !*** ./src/style/slider.less ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/style/time-line.less":
/*!**********************************!*\
  !*** ./src/style/time-line.less ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/time_line.js":
/*!**************************!*\
  !*** ./src/time_line.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var D_Project_lm_player_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./context */ "./src/context.js");
/* harmony import */ var _iconfont__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./iconfont */ "./src/iconfont.js");
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./slider */ "./src/slider.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./util */ "./src/util.js");
/* harmony import */ var _event_eventName__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./event/eventName */ "./src/event/eventName.js");
/* harmony import */ var _style_time_line_less__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./style/time-line.less */ "./src/style/time-line.less");
/* harmony import */ var _style_time_line_less__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_style_time_line_less__WEBPACK_IMPORTED_MODULE_11__);
var _class,_temp;var TineLine=Object(_context__WEBPACK_IMPORTED_MODULE_6__["videoDec"])(_class=(_temp=/*#__PURE__*/function(_React$Component){Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TineLine,_React$Component);function TineLine(props){var _this;Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this,TineLine);_this=Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this,Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TineLine).call(this,props));_this.hideContraller=function(){_this.setState({hideBar:true});};_this.showContraller=function(){_this.setState({hideBar:false});};_this.getDuration=function(){var api=_this.props.api;_this.setState({duration:api.getDuration()});};_this.getCurrentTime=function(){var api=_this.props.api;var state={currentTime:api.getCurrentTime(),buffered:api.getSecondsLoaded()};if(state.buffered===_this.state.buffered){delete state.buffered;}_this.setState(state);};_this.getBuffered=function(){var api=_this.props.api;_this.setState({buffered:api.getSecondsLoaded()});};_this.changePlayTime=function(percent){var api=_this.props.api;var currentTime=percent*_this.state.duration;api.pause();_this.setState({currentTime:currentTime});api.seekTo(currentTime);};_this.seekendPlay=function(){var _this$props=_this.props,video=_this$props.video,api=_this$props.api;api.play();};_this.renderTimeLineTips=function(percent){var currentTime=percent*_this.state.duration;var time=Object(_util__WEBPACK_IMPORTED_MODULE_9__["timeStamp"])(currentTime);return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span",null,time);};_this.fastForward=function(){var api=_this.props.api;api.fastForward();};_this.backWind=function(){var api=_this.props.api;api.backWind();};_this.state={duration:0,currentTime:0,buffered:0,hideBar:false};return _this;}Object(D_Project_lm_player_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TineLine,[{key:"componentDidMount",value:function componentDidMount(){var event=this.props.event;event.addEventListener("loadedmetadata",this.getDuration);event.addEventListener("durationchange",this.getDuration);event.addEventListener("timeupdate",this.getCurrentTime);event.addEventListener("progress",this.getBuffered);event.addEventListener("suspend",this.getBuffered);event.addEventListener("seeked",this.seekendPlay);event.on(_event_eventName__WEBPACK_IMPORTED_MODULE_10__["default"].HIDE_CONTRALLER,this.hideContraller);event.on(_event_eventName__WEBPACK_IMPORTED_MODULE_10__["default"].SHOW_CONTRALLER,this.showContraller);}},{key:"componentWillUnmount",value:function componentWillUnmount(){var event=this.props.event;event.removeEventListener("loadedmetadata",this.getDuration);event.removeEventListener("durationchange",this.getDuration);event.removeEventListener("timeupdate",this.getCurrentTime);event.removeEventListener("progress",this.getBuffered);event.removeEventListener("suspend",this.getBuffered);event.removeEventListener("seeked",this.seekendPlay);event.off(_event_eventName__WEBPACK_IMPORTED_MODULE_10__["default"].HIDE_CONTRALLER,this.hideContraller);event.off(_event_eventName__WEBPACK_IMPORTED_MODULE_10__["default"].SHOW_CONTRALLER,this.showContraller);}},{key:"render",value:function render(){var _this$state=this.state,duration=_this$state.duration,currentTime=_this$state.currentTime,buffered=_this$state.buffered,hideBar=_this$state.hideBar;var playPercent=Math.round(currentTime/duration*100);var bufferedPercent=Math.round(buffered/duration*100);return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"video-time-line-layout ".concat(hideBar?"hide-time-line":"")},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_iconfont__WEBPACK_IMPORTED_MODULE_7__["default"],{type:"lm-player-PrevFast",onClick:this.backWind,className:"time-line-action-item"}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_slider__WEBPACK_IMPORTED_MODULE_8__["default"],{className:"time-line-box",currentPercent:playPercent,availablePercent:bufferedPercent,onChange:this.changePlayTime,renderTips:this.renderTimeLineTips}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_iconfont__WEBPACK_IMPORTED_MODULE_7__["default"],{type:"lm-player-NextFast_Light",onClick:this.fastForward,className:"time-line-action-item"}));}}]);return TineLine;}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component),_temp))||_class;/* harmony default export */ __webpack_exports__["default"] = (TineLine);

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: createHlsPlayer, createFlvPlayer, getVideoType, timeStamp, dateFormat, fullscreen, exitFullscreen, fullscreenEnabled, isFullscreen, fullScreenListener, computedBound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHlsPlayer", function() { return createHlsPlayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFlvPlayer", function() { return createFlvPlayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVideoType", function() { return getVideoType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeStamp", function() { return timeStamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateFormat", function() { return dateFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fullscreen", function() { return fullscreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exitFullscreen", function() { return exitFullscreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fullscreenEnabled", function() { return fullscreenEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFullscreen", function() { return isFullscreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fullScreenListener", function() { return fullScreenListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computedBound", function() { return computedBound; });
/* harmony import */ var flv_lm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flv.lm.js */ "flv.lm.js");
/* harmony import */ var flv_lm_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flv_lm_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hls_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hls.js */ "hls.js");
/* harmony import */ var hls_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hls_js__WEBPACK_IMPORTED_MODULE_1__);
/**
 * 创建HLS对象
 * @param {*} video
 * @param {*} file
 */function createHlsPlayer(video,file){if(hls_js__WEBPACK_IMPORTED_MODULE_1__["isSupported"]()){var player=new hls_js__WEBPACK_IMPORTED_MODULE_1__({liveDurationInfinity:true,levelLoadingTimeOut:15000,fragLoadingTimeOut:25000,enableWorker:true});player.attachMedia(video);player.on(hls_js__WEBPACK_IMPORTED_MODULE_1__["Events"].MEDIA_ATTACHED,function(){player.loadSource(file);player.on(hls_js__WEBPACK_IMPORTED_MODULE_1__["Events"].MANIFEST_PARSED,function(){// console.log(player);
});});return player;}}/**
 * 创建FLV对象
 * @param {*} video
 * @param {*} options
 */function createFlvPlayer(video,options){var _options$flvOptions=options.flvOptions,flvOptions=_options$flvOptions===void 0?{}:_options$flvOptions,_options$flvConfig=options.flvConfig,flvConfig=_options$flvConfig===void 0?{}:_options$flvConfig;if(flv_lm_js__WEBPACK_IMPORTED_MODULE_0___default.a.isSupported()){var player=flv_lm_js__WEBPACK_IMPORTED_MODULE_0___default.a.createPlayer(Object.assign({},flvOptions,{type:"flv",url:options.file}),Object.assign({},flvConfig,{enableWorker:true,// lazyLoad: false,
//Indicates how many seconds of data to be kept for lazyLoad.
// lazyLoadMaxDuration: 0,
// autoCleanupMaxBackwardDuration: 3,
// autoCleanupMinBackwardDuration: 2,
// autoCleanupSourceBuffer: true,
enableStashBuffer:false,stashInitialSize:128,isLive:options.isLive||true}));player.attachMediaElement(video);player.load();return player;}}/**
 * 获取播放文件类型
 * @param {*} url
 */function getVideoType(url){var reg=/([^\.\/\\]+)\.(([a-z]|[0-9])+(\?\S+)?)$/i;var resultArr=reg.exec(url);if(resultArr){return resultArr[2].replace(resultArr[4],"");}}/**
 * 播放时间转字符串
 * @param {*} second_time
 */function timeStamp(second_time){var time=Math.ceil(second_time);if(time>60){var second=Math.ceil(second_time%60);var min=Math.floor(second_time/60);time="".concat(min<10?"0".concat(min):min,":").concat(second<10?"0".concat(second):second);if(min>60){min=Math.ceil(second_time/60%60);var hour=Math.floor(second_time/60/60);time="".concat(hour<10?"0".concat(hour):hour,":").concat(min<10?"0".concat(min):min,":").concat(second<10?"0".concat(second):second);}else{time="00:".concat(time);}}else{time="00:00:".concat(time<10?"0".concat(time):time);}return time;}/**
 * 日期格式化
 * @param {*} timetemp
 */function dateFormat(timetemp){var date=new Date(timetemp);var YYYY=date.getFullYear();var DD=date.getDate();var MM=date.getMonth()+1;var hh=date.getHours();var mm=date.getMinutes();var ss=date.getSeconds();return"".concat(YYYY,".").concat(MM>10?MM:"0"+MM,".").concat(DD>10?DD:"0"+DD," ").concat(hh>10?hh:"0"+hh,".").concat(mm>10?mm:"0"+mm,".").concat(ss>10?ss:"0"+ss);}/**
 * 全屏
 * @param {*} element
 */function fullscreen(element){if(element.requestFullScreen){element.requestFullScreen();}else if(element.webkitRequestFullScreen){element.webkitRequestFullScreen();}else if(element.mozRequestFullScreen){element.mozRequestFullScreen();}else if(element.msRequestFullscreen){element.msRequestFullscreen();}}/**
 * exitFullscreen 退出全屏
 * @param  {Objct} element 选择器
 */function exitFullscreen(){if(document.exitFullscreen){document.exitFullscreen();}else if(document.mozCancelFullScreen){document.mozCancelFullScreen();}else if(document.webkitExitFullscreen){document.webkitExitFullscreen();}else if(document.msExitFullscreen){document.msExitFullscreen();}}/**
 * 判读是否支持全屏
 */function fullscreenEnabled(){return document.fullscreenEnabled||document.mozFullScreenEnabled||document.webkitFullscreenEnabled||document.msFullscreenEnabled;}/**
 * [isFullscreen 判断浏览器是否全屏]
 * @return [全屏则返回当前调用全屏的元素,不全屏返回false]
 */function isFullscreen(ele){if(!ele){return false;}return document.fullscreenElement===ele||document.msFullscreenElement===ele||document.mozFullScreenElement===ele||document.webkitFullscreenElement===ele||false;}// 添加 / 移除 全屏事件监听
function fullScreenListener(isAdd,fullscreenchange){var funcName=isAdd?"addEventListener":"removeEventListener";var fullScreenEvents=["fullscreenchange","mozfullscreenchange","webkitfullscreenchange","msfullscreenchange"];fullScreenEvents.map(function(v){return document[funcName](v,fullscreenchange);});}/**
 * 计算视频拖拽边界
 * @param {*} ele
 * @param {*} currentPosition
 * @param {*} scale
 */function computedBound(ele,currentPosition,scale){var data=currentPosition;var eleRect=ele.getBoundingClientRect();var w=eleRect.width;var h=eleRect.height;var lx=0,ly=0;if(scale===1){return[0,0];}lx=w*(scale-1)/2/scale;ly=h*(scale-1)/2/scale;var x=0,y=0;if(data[0]>=0&&data[0]>lx){x=lx;}if(data[0]>=0&&data[0]<lx){x=data[0];}if(data[0]<0&&data[0]<-lx){x=-lx;}if(data[0]<0&&data[0]>-lx){x=data[0];}if(data[1]>=0&&data[1]>ly){y=ly;}if(data[1]>=0&&data[1]<ly){y=data[1];}if(data[1]<0&&data[1]<-ly){y=-ly;}if(data[1]<0&&data[1]>-ly){y=data[1];}if(x!==data[0]||y!==data[1]){return[x,y];}else{return;}}

/***/ }),

/***/ "flv.lm.js":
/*!**************************************************************************************************!*\
  !*** external {"commonjs":"flv.lm.js","commonjs2":"flv.lm.js","amd":"flv.lm.js","root":"flvjs"} ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("flv.lm.js");

/***/ }),

/***/ "hls.js":
/*!***************************************************************************************!*\
  !*** external {"commonjs":"hls.js","commonjs2":"hls.js","amd":"hls.js","root":"Hls"} ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("hls.js");

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!*****************************************************************************************************!*\
  !*** external {"commonjs":"react-dom","commonjs2":"react-dom","amd":"react-dom","root":"ReactDOM"} ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ })

/******/ });
//# sourceMappingURL=player.js.map