function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { useEffect, useMemo, useRef, useState } from 'react';
import useRafInterval from "../useRafInterval";
import { useRegisterPlayerEvent } from "./event";
import Events from "./event/eventName";
import { getDomStyleValue } from "./util";
import { jsx as _jsx } from "react/jsx-runtime";
var oneFps = 1 / 30;
function FPSPlay(_ref) {
  var api = _ref.api,
    event = _ref.event,
    fpsDelay = _ref.fpsDelay,
    fps = _ref.fps;
  var _useState = useState(Date.now()),
    _useState2 = _slicedToArray(_useState, 2),
    forceKey = _useState2[0],
    update = _useState2[1];
  var ref = useRef(null);
  var timerRef = useRef();
  var fps_second = useMemo(function () {
    return fps ? 1 / fps : oneFps;
  }, [fps]);
  useEffect(function () {
    var fpsCapture = function fpsCapture() {
      if (!ref.current || !(event !== null && event !== void 0 && event.video) || !api) {
        return;
      }
      var video = event.video;
      var fpsTime = api.getCurrentTime() + fps_second;
      video.currentTime = fpsTime;
      if (video.currentTime >= api.getDuration()) {
        clearInterval(timerRef.current);
        video.currentTime = 0;
        event.emit(Events.PLAY_ENDED);
      }
      var canvas = ref.current;
      var ctx = canvas.getContext('2d');
      var _video$getBoundingCli = video.getBoundingClientRect(),
        width = _video$getBoundingCli.width,
        height = _video$getBoundingCli.height;
      canvas.width = width;
      canvas.height = height;
      var fit = getDomStyleValue(video, 'object-fit');
      if (fit === 'fill') {
        //全画面绘制，存在拉伸
        ctx === null || ctx === void 0 || ctx.drawImage(video, 0, 0, width, height);
      } else {
        // 自适应绘制
        var videoWidth = video.videoWidth;
        var videoHeight = video.videoHeight;
        var scale = height / videoHeight;
        var s_vw = scale * videoWidth;
        var paddingSize = (width - s_vw) / 2;
        ctx === null || ctx === void 0 || ctx.drawImage(video, paddingSize, 0, s_vw, height);
      }
    };
    fpsCapture();
    timerRef.current = setInterval(fpsCapture, fpsDelay);
    return function () {
      clearInterval(timerRef.current);
    };
  }, [api, event, fpsDelay, forceKey, fps_second]);
  useRegisterPlayerEvent(Events.CANVAS_PAUSE, function () {
    clearInterval(timerRef.current);
  });
  useRegisterPlayerEvent(Events.CANVAS_PLAY, function () {
    update(Date.now());
  });

  // TODO: 未知情况，video会自动播放，轮训检测并暂停零时解决
  useRafInterval(function () {
    return !(api !== null && api !== void 0 && api.paused) ? api === null || api === void 0 ? void 0 : api.pause() : null;
  }, 10);
  return /*#__PURE__*/_jsx("canvas", {
    className: "fps-play-canvas",
    ref: ref
  });
}
export default FPSPlay;