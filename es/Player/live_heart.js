/* eslint-disable react-hooks/rules-of-hooks */
import { useDocumentVisibility, useRafInterval, useUpdateEffect } from 'ahooks';
import { useRef } from 'react';
import Events from './event/eventName';
function useLiveHeart(_ref) {
  var api = _ref.api,
    event = _ref.event,
    isLive = _ref.isLive;
  var documentVisibility = useDocumentVisibility();
  var cTimeRef = useRef(0);
  var run = function run() {
    var _api$getCurrentTime;
    if (!isLive || documentVisibility !== 'visible' || !api) {
      return;
    }
    var current = (_api$getCurrentTime = api.getCurrentTime()) !== null && _api$getCurrentTime !== void 0 ? _api$getCurrentTime : 0;
    var buffered = api.getSecondsLoaded();
    if (buffered - current > 5) {
      console.debug(
        '\u5F53\u524D\u5EF6\u65F6\u8FC7\u5927current->'
          .concat(current, ' buffered->')
          .concat(buffered, ', \u57FA\u4E8E\u89C6\u9891\u5F53\u524D\u7F13\u5B58\u65F6\u95F4\u66F4\u65B0\u5F53\u524D\u64AD\u653E\u65F6\u95F4 updateTime -> ')
          .concat(buffered - 2),
      );
      api.seekTo(buffered - 2 > 0 ? buffered - 2 : 0);
      api.play();
    }
  };
  useUpdateEffect(
    function () {
      return run();
    },
    [documentVisibility],
  );
  useRafInterval(function () {
    var _api$getCurrentTime2;
    return (cTimeRef.current = (_api$getCurrentTime2 = api === null || api === void 0 ? void 0 : api.getCurrentTime()) !== null && _api$getCurrentTime2 !== void 0 ? _api$getCurrentTime2 : 0);
  }, 1 * 1000);
  useRafInterval(function () {
    return run();
  }, 30 * 1000);
  useRafInterval(function () {
    var _api$video;
    if (!api || !event) {
      return;
    }
    var cuurentTime = api.getCurrentTime();
    if (!!isLive && !((_api$video = api.video) !== null && _api$video !== void 0 && _api$video.paused) && cuurentTime === cTimeRef.current) {
      event.emit(Events.ERROR, 'long time no play！');
    }
  }, 20 * 1000);
}
export default useLiveHeart;
