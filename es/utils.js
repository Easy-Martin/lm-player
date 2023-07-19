import likeGo from './likeGo';
export function getTargetElement(target, defaultElement) {
  if (!target) {
    return defaultElement;
  }
  var targetElement;
  if (typeof target === 'function') {
    targetElement = target();
  } else if ('current' in target) {
    targetElement = target.current;
  } else {
    targetElement = target;
  }
  return targetElement;
}
var getScrollTop = function getScrollTop(el) {
  if (el === document || el === document.body) {
    return Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
  }
  return el.scrollTop;
};
var getScrollHeight = function getScrollHeight(el) {
  return el.scrollHeight || Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
};
var getClientHeight = function getClientHeight(el) {
  return el.clientHeight || Math.max(document.documentElement.clientHeight, document.body.clientHeight);
};
var getEleScrollHeight = function getEleScrollHeight(el) {
  if (el === document || el === document.body) {
    return Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
  }
  var top = 0;
  var dom = el;
  while (dom) {
    top += dom.scrollTop;
    dom = dom.parentElement;
  }
  return top;
};
export { getClientHeight, getEleScrollHeight, getScrollHeight, getScrollTop, likeGo };
