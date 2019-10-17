function getHiddenProp() {
  const prefixes = ["webkit", "moz", "ms", "o"];
  // 如果hidden 属性是原生支持的，我们就直接返回
  if ("hidden" in document) {
    return "hidden";
  }

  // 其他的情况就循环现有的浏览器前缀，拼接我们所需要的属性
  for (let i = 0; i < prefixes.length; i++) {
    // 如果当前的拼接的前缀在 document对象中存在 返回即可
    if (prefixes[i] + "Hidden" in document) {
      return prefixes[i] + "Hidden";
    }
  }

  // 其他的情况 直接返回null
  return null;
}

function getVisibilityState() {
  const prefixes = ["webkit", "moz", "ms", "o"];

  if ("visibilityState" in document) {
    return "visibilityState";
  }

  for (let i = 0; i < prefixes.length; i++) {
    if (prefixes[i] + "VisibilityState" in document) {
      return prefixes[i] + "VisibilityState";
    }
  }
  // 找不到返回 null
  return null;
}

function visibilityState() {
  return document[getVisibilityState()];
}

function addEventListener(listener) {
  const visProp = getHiddenProp();
  const evtname = visProp.replace(/[H|h]idden/, "") + "visibilitychange";
  document.addEventListener(evtname, listener, false);
}

function removeEventListener(listener) {
  const visProp = getHiddenProp();
  const evtname = visProp.replace(/[H|h]idden/, "") + "visibilitychange";
  document.removeEventListener(evtname, listener, false);
}

export default {
  addEventListener,
  removeEventListener,
  visibilityState
};
