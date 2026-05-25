import { useDocumentVisibility as e, useEventListener as t, useFullscreen as n, useLatest as r, useMemoizedFn as i, useMount as a, useRafInterval as o, useToggle as s, useUpdate as c, useUpdateEffect as l } from "ahooks";
import u, { startTransition as d, useCallback as f, useContext as p, useEffect as m, useImperativeHandle as h, useMemo as g, useRef as _, useState as v } from "react";
import y from "hls.js";
import { Fragment as b, jsx as x, jsxs as S } from "react/jsx-runtime";
import { RiCloseCircleFill as C, RiFullscreenExitFill as w, RiFullscreenFill as T, RiLoader4Fill as E, RiPauseFill as D, RiPlayCircleFill as O, RiPlayFill as k, RiRefreshFill as A, RiSpeedMiniFill as j, RiVolumeMuteFill as M, RiVolumeUpFill as N } from "@remixicon/react";
import { Slider as P, Tooltip as F } from "antd";
import { isNumber as I } from "lodash-es";
import L from "dayjs";
//#region \0rolldown/runtime.js
var ee = Object.create, R = Object.defineProperty, z = Object.getOwnPropertyDescriptor, B = Object.getOwnPropertyNames, V = Object.getPrototypeOf, te = Object.prototype.hasOwnProperty, ne = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), re = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = B(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !te.call(e, s) && s !== n && R(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = z(t, s)) || r.enumerable
	});
	return e;
}, H = (e, t, n) => (n = e == null ? {} : ee(V(e)), re(t || !e || !e.__esModule ? R(n, "default", {
	value: e,
	enumerable: !0
}) : n, e));
//#endregion
//#region src/likeGo/index.ts
async function U(e) {
	let t = [];
	return await e().then((e) => {
		t[0] = e;
	}).catch((e) => {
		t[1] = e;
	}), t;
}
//#endregion
//#region src/nextTick/index.ts
function W(e) {
	setTimeout(e, 10);
}
//#endregion
//#region src/Player/event/eventName.ts
var G = /* @__PURE__ */ H((/* @__PURE__ */ ne(((e, t) => {
	(function(n, r) {
		typeof e == "object" && typeof t == "object" ? t.exports = r() : typeof define == "function" && define.amd ? define([], r) : typeof e == "object" ? e.mpegts = r() : n.mpegts = r();
	})(window, (function() {
		return function(e) {
			var t = {};
			function n(r) {
				if (t[r]) return t[r].exports;
				var i = t[r] = {
					i: r,
					l: !1,
					exports: {}
				};
				return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
			}
			return n.m = e, n.c = t, n.d = function(e, t, r) {
				n.o(e, t) || Object.defineProperty(e, t, {
					enumerable: !0,
					get: r
				});
			}, n.r = function(e) {
				typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
			}, n.t = function(e, t) {
				if (1 & t && (e = n(e)), 8 & t || 4 & t && typeof e == "object" && e && e.__esModule) return e;
				var r = Object.create(null);
				if (n.r(r), Object.defineProperty(r, "default", {
					enumerable: !0,
					value: e
				}), 2 & t && typeof e != "string") for (var i in e) n.d(r, i, function(t) {
					return e[t];
				}.bind(null, i));
				return r;
			}, n.n = function(e) {
				var t = e && e.__esModule ? function() {
					return e.default;
				} : function() {
					return e;
				};
				return n.d(t, "a", t), t;
			}, n.o = function(e, t) {
				return Object.prototype.hasOwnProperty.call(e, t);
			}, n.p = "", n(n.s = 15);
		}([
			function(e, t, n) {
				var r = n(6), i = n.n(r), a = function() {
					function e() {}
					return e.e = function(t, n) {
						t && !e.FORCE_GLOBAL_TAG || (t = e.GLOBAL_TAG);
						var r = "[" + t + "] > " + n;
						e.ENABLE_CALLBACK && e.emitter.emit("log", "error", r), e.ENABLE_ERROR && (console.error ? console.error(r) : console.warn ? console.warn(r) : console.log(r));
					}, e.i = function(t, n) {
						t && !e.FORCE_GLOBAL_TAG || (t = e.GLOBAL_TAG);
						var r = "[" + t + "] > " + n;
						e.ENABLE_CALLBACK && e.emitter.emit("log", "info", r), e.ENABLE_INFO && (console.info ? console.info(r) : console.log(r));
					}, e.w = function(t, n) {
						t && !e.FORCE_GLOBAL_TAG || (t = e.GLOBAL_TAG);
						var r = "[" + t + "] > " + n;
						e.ENABLE_CALLBACK && e.emitter.emit("log", "warn", r), e.ENABLE_WARN && (console.warn ? console.warn(r) : console.log(r));
					}, e.d = function(t, n) {
						t && !e.FORCE_GLOBAL_TAG || (t = e.GLOBAL_TAG);
						var r = "[" + t + "] > " + n;
						e.ENABLE_CALLBACK && e.emitter.emit("log", "debug", r), e.ENABLE_DEBUG && (console.debug ? console.debug(r) : console.log(r));
					}, e.v = function(t, n) {
						t && !e.FORCE_GLOBAL_TAG || (t = e.GLOBAL_TAG);
						var r = "[" + t + "] > " + n;
						e.ENABLE_CALLBACK && e.emitter.emit("log", "verbose", r), e.ENABLE_VERBOSE && console.log(r);
					}, e;
				}();
				a.GLOBAL_TAG = "mpegts.js", a.FORCE_GLOBAL_TAG = !1, a.ENABLE_ERROR = !0, a.ENABLE_INFO = !0, a.ENABLE_WARN = !0, a.ENABLE_DEBUG = !0, a.ENABLE_VERBOSE = !0, a.ENABLE_CALLBACK = !1, a.emitter = new i.a(), t.a = a;
			},
			function(e, t, n) {
				t.a = {
					IO_ERROR: "io_error",
					DEMUX_ERROR: "demux_error",
					INIT_SEGMENT: "init_segment",
					MEDIA_SEGMENT: "media_segment",
					LOADING_COMPLETE: "loading_complete",
					RECOVERED_EARLY_EOF: "recovered_early_eof",
					MEDIA_INFO: "media_info",
					METADATA_ARRIVED: "metadata_arrived",
					SCRIPTDATA_ARRIVED: "scriptdata_arrived",
					TIMED_ID3_METADATA_ARRIVED: "timed_id3_metadata_arrived",
					SMPTE2038_METADATA_ARRIVED: "smpte2038_metadata_arrived",
					SCTE35_METADATA_ARRIVED: "scte35_metadata_arrived",
					PES_PRIVATE_DATA_DESCRIPTOR: "pes_private_data_descriptor",
					PES_PRIVATE_DATA_ARRIVED: "pes_private_data_arrived",
					STATISTICS_INFO: "statistics_info",
					RECOMMEND_SEEKPOINT: "recommend_seekpoint"
				};
			},
			function(e, t, n) {
				n.d(t, "c", (function() {
					return i;
				})), n.d(t, "b", (function() {
					return a;
				})), n.d(t, "a", (function() {
					return o;
				}));
				var r = n(3), i = {
					kIdle: 0,
					kConnecting: 1,
					kBuffering: 2,
					kError: 3,
					kComplete: 4
				}, a = {
					OK: "OK",
					EXCEPTION: "Exception",
					HTTP_STATUS_CODE_INVALID: "HttpStatusCodeInvalid",
					CONNECTING_TIMEOUT: "ConnectingTimeout",
					EARLY_EOF: "EarlyEof",
					UNRECOVERABLE_EARLY_EOF: "UnrecoverableEarlyEof"
				}, o = function() {
					function e(e) {
						this._type = e || "undefined", this._status = i.kIdle, this._needStash = !1, this._onContentLengthKnown = null, this._onURLRedirect = null, this._onDataArrival = null, this._onError = null, this._onComplete = null;
					}
					return e.prototype.destroy = function() {
						this._status = i.kIdle, this._onContentLengthKnown = null, this._onURLRedirect = null, this._onDataArrival = null, this._onError = null, this._onComplete = null;
					}, e.prototype.isWorking = function() {
						return this._status === i.kConnecting || this._status === i.kBuffering;
					}, Object.defineProperty(e.prototype, "type", {
						get: function() {
							return this._type;
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "status", {
						get: function() {
							return this._status;
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "needStashBuffer", {
						get: function() {
							return this._needStash;
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "onContentLengthKnown", {
						get: function() {
							return this._onContentLengthKnown;
						},
						set: function(e) {
							this._onContentLengthKnown = e;
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "onURLRedirect", {
						get: function() {
							return this._onURLRedirect;
						},
						set: function(e) {
							this._onURLRedirect = e;
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "onDataArrival", {
						get: function() {
							return this._onDataArrival;
						},
						set: function(e) {
							this._onDataArrival = e;
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "onError", {
						get: function() {
							return this._onError;
						},
						set: function(e) {
							this._onError = e;
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "onComplete", {
						get: function() {
							return this._onComplete;
						},
						set: function(e) {
							this._onComplete = e;
						},
						enumerable: !1,
						configurable: !0
					}), e.prototype.open = function(e, t) {
						throw new r.c("Unimplemented abstract function!");
					}, e.prototype.abort = function() {
						throw new r.c("Unimplemented abstract function!");
					}, e;
				}();
			},
			function(e, t, n) {
				n.d(t, "d", (function() {
					return a;
				})), n.d(t, "a", (function() {
					return o;
				})), n.d(t, "b", (function() {
					return s;
				})), n.d(t, "c", (function() {
					return c;
				}));
				var r, i = (r = function(e, t) {
					return (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
						e.__proto__ = t;
					} || function(e, t) {
						for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
					})(e, t);
				}, function(e, t) {
					function n() {
						this.constructor = e;
					}
					r(e, t), e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
				}), a = function() {
					function e(e) {
						this._message = e;
					}
					return Object.defineProperty(e.prototype, "name", {
						get: function() {
							return "RuntimeException";
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "message", {
						get: function() {
							return this._message;
						},
						enumerable: !1,
						configurable: !0
					}), e.prototype.toString = function() {
						return this.name + ": " + this.message;
					}, e;
				}(), o = function(e) {
					function t(t) {
						return e.call(this, t) || this;
					}
					return i(t, e), Object.defineProperty(t.prototype, "name", {
						get: function() {
							return "IllegalStateException";
						},
						enumerable: !1,
						configurable: !0
					}), t;
				}(a), s = function(e) {
					function t(t) {
						return e.call(this, t) || this;
					}
					return i(t, e), Object.defineProperty(t.prototype, "name", {
						get: function() {
							return "InvalidArgumentException";
						},
						enumerable: !1,
						configurable: !0
					}), t;
				}(a), c = function(e) {
					function t(t) {
						return e.call(this, t) || this;
					}
					return i(t, e), Object.defineProperty(t.prototype, "name", {
						get: function() {
							return "NotImplementedException";
						},
						enumerable: !1,
						configurable: !0
					}), t;
				}(a);
			},
			function(e, t, n) {
				var r = {};
				(function() {
					var e = self.navigator.userAgent.toLowerCase(), t = /(edge)\/([\w.]+)/.exec(e) || /(opr)[\/]([\w.]+)/.exec(e) || /(chrome)[ \/]([\w.]+)/.exec(e) || /(iemobile)[\/]([\w.]+)/.exec(e) || /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(firefox)[ \/]([\w.]+)/.exec(e) || [], n = /(ipad)/.exec(e) || /(ipod)/.exec(e) || /(windows phone)/.exec(e) || /(iphone)/.exec(e) || /(kindle)/.exec(e) || /(android)/.exec(e) || /(windows)/.exec(e) || /(mac)/.exec(e) || /(linux)/.exec(e) || /(cros)/.exec(e) || [], i = {
						browser: t[5] || t[3] || t[1] || "",
						version: t[2] || t[4] || "0",
						majorVersion: t[4] || t[2] || "0",
						platform: n[0] || ""
					}, a = {};
					if (i.browser) {
						a[i.browser] = !0;
						var o = i.majorVersion.split(".");
						a.version = {
							major: parseInt(i.majorVersion, 10),
							string: i.version
						}, o.length > 1 && (a.version.minor = parseInt(o[1], 10)), o.length > 2 && (a.version.build = parseInt(o[2], 10));
					}
					for (var s in i.platform && (a[i.platform] = !0), (a.chrome || a.opr || a.safari) && (a.webkit = !0), (a.rv || a.iemobile) && (a.rv && delete a.rv, i.browser = "msie", a.msie = !0), a.edge && (delete a.edge, i.browser = "msedge", a.msedge = !0), a.opr && (i.browser = "opera", a.opera = !0), a.safari && a.android && (i.browser = "android", a.android = !0), a.name = i.browser, a.platform = i.platform, r) r.hasOwnProperty(s) && delete r[s];
					Object.assign(r, a);
				})(), t.a = r;
			},
			function(e, t, n) {
				t.a = {
					OK: "OK",
					FORMAT_ERROR: "FormatError",
					FORMAT_UNSUPPORTED: "FormatUnsupported",
					CODEC_UNSUPPORTED: "CodecUnsupported"
				};
			},
			function(e, t, n) {
				var r, i = typeof Reflect == "object" ? Reflect : null, a = i && typeof i.apply == "function" ? i.apply : function(e, t, n) {
					return Function.prototype.apply.call(e, t, n);
				};
				r = i && typeof i.ownKeys == "function" ? i.ownKeys : Object.getOwnPropertySymbols ? function(e) {
					return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
				} : function(e) {
					return Object.getOwnPropertyNames(e);
				};
				var o = Number.isNaN || function(e) {
					return e != e;
				};
				function s() {
					s.init.call(this);
				}
				e.exports = s, e.exports.once = function(e, t) {
					return new Promise((function(n, r) {
						function i(n) {
							e.removeListener(t, a), r(n);
						}
						function a() {
							typeof e.removeListener == "function" && e.removeListener("error", i), n([].slice.call(arguments));
						}
						_(e, t, a, { once: !0 }), t !== "error" && function(e, t, n) {
							typeof e.on == "function" && _(e, "error", t, n);
						}(e, i, { once: !0 });
					}));
				}, s.EventEmitter = s, s.prototype._events = void 0, s.prototype._eventsCount = 0, s.prototype._maxListeners = void 0;
				var c = 10;
				function l(e) {
					if (typeof e != "function") throw TypeError("The \"listener\" argument must be of type Function. Received type " + typeof e);
				}
				function u(e) {
					return e._maxListeners === void 0 ? s.defaultMaxListeners : e._maxListeners;
				}
				function d(e, t, n, r) {
					var i, a, o, s;
					if (l(n), (a = e._events) === void 0 ? (a = e._events = Object.create(null), e._eventsCount = 0) : (a.newListener !== void 0 && (e.emit("newListener", t, n.listener ? n.listener : n), a = e._events), o = a[t]), o === void 0) o = a[t] = n, ++e._eventsCount;
					else if (typeof o == "function" ? o = a[t] = r ? [n, o] : [o, n] : r ? o.unshift(n) : o.push(n), (i = u(e)) > 0 && o.length > i && !o.warned) {
						o.warned = !0;
						var c = /* @__PURE__ */ Error("Possible EventEmitter memory leak detected. " + o.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
						c.name = "MaxListenersExceededWarning", c.emitter = e, c.type = t, c.count = o.length, s = c, console && console.warn && console.warn(s);
					}
					return e;
				}
				function f() {
					if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
				}
				function p(e, t, n) {
					var r = {
						fired: !1,
						wrapFn: void 0,
						target: e,
						type: t,
						listener: n
					}, i = f.bind(r);
					return i.listener = n, r.wrapFn = i, i;
				}
				function m(e, t, n) {
					var r = e._events;
					if (r === void 0) return [];
					var i = r[t];
					return i === void 0 ? [] : typeof i == "function" ? n ? [i.listener || i] : [i] : n ? function(e) {
						for (var t = Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n];
						return t;
					}(i) : g(i, i.length);
				}
				function h(e) {
					var t = this._events;
					if (t !== void 0) {
						var n = t[e];
						if (typeof n == "function") return 1;
						if (n !== void 0) return n.length;
					}
					return 0;
				}
				function g(e, t) {
					for (var n = Array(t), r = 0; r < t; ++r) n[r] = e[r];
					return n;
				}
				function _(e, t, n, r) {
					if (typeof e.on == "function") r.once ? e.once(t, n) : e.on(t, n);
					else {
						if (typeof e.addEventListener != "function") throw TypeError("The \"emitter\" argument must be of type EventEmitter. Received type " + typeof e);
						e.addEventListener(t, (function i(a) {
							r.once && e.removeEventListener(t, i), n(a);
						}));
					}
				}
				Object.defineProperty(s, "defaultMaxListeners", {
					enumerable: !0,
					get: function() {
						return c;
					},
					set: function(e) {
						if (typeof e != "number" || e < 0 || o(e)) throw RangeError("The value of \"defaultMaxListeners\" is out of range. It must be a non-negative number. Received " + e + ".");
						c = e;
					}
				}), s.init = function() {
					this._events !== void 0 && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
				}, s.prototype.setMaxListeners = function(e) {
					if (typeof e != "number" || e < 0 || o(e)) throw RangeError("The value of \"n\" is out of range. It must be a non-negative number. Received " + e + ".");
					return this._maxListeners = e, this;
				}, s.prototype.getMaxListeners = function() {
					return u(this);
				}, s.prototype.emit = function(e) {
					for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n]);
					var r = e === "error", i = this._events;
					if (i !== void 0) r &&= i.error === void 0;
					else if (!r) return !1;
					if (r) {
						var o;
						if (t.length > 0 && (o = t[0]), o instanceof Error) throw o;
						var s = /* @__PURE__ */ Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
						throw s.context = o, s;
					}
					var c = i[e];
					if (c === void 0) return !1;
					if (typeof c == "function") a(c, this, t);
					else {
						var l = c.length, u = g(c, l);
						for (n = 0; n < l; ++n) a(u[n], this, t);
					}
					return !0;
				}, s.prototype.addListener = function(e, t) {
					return d(this, e, t, !1);
				}, s.prototype.on = s.prototype.addListener, s.prototype.prependListener = function(e, t) {
					return d(this, e, t, !0);
				}, s.prototype.once = function(e, t) {
					return l(t), this.on(e, p(this, e, t)), this;
				}, s.prototype.prependOnceListener = function(e, t) {
					return l(t), this.prependListener(e, p(this, e, t)), this;
				}, s.prototype.removeListener = function(e, t) {
					var n, r, i, a, o;
					if (l(t), (r = this._events) === void 0 || (n = r[e]) === void 0) return this;
					if (n === t || n.listener === t) --this._eventsCount == 0 ? this._events = Object.create(null) : (delete r[e], r.removeListener && this.emit("removeListener", e, n.listener || t));
					else if (typeof n != "function") {
						for (i = -1, a = n.length - 1; a >= 0; a--) if (n[a] === t || n[a].listener === t) {
							o = n[a].listener, i = a;
							break;
						}
						if (i < 0) return this;
						i === 0 ? n.shift() : function(e, t) {
							for (; t + 1 < e.length; t++) e[t] = e[t + 1];
							e.pop();
						}(n, i), n.length === 1 && (r[e] = n[0]), r.removeListener !== void 0 && this.emit("removeListener", e, o || t);
					}
					return this;
				}, s.prototype.off = s.prototype.removeListener, s.prototype.removeAllListeners = function(e) {
					var t, n, r;
					if ((n = this._events) === void 0) return this;
					if (n.removeListener === void 0) return arguments.length === 0 ? (this._events = Object.create(null), this._eventsCount = 0) : n[e] !== void 0 && (--this._eventsCount == 0 ? this._events = Object.create(null) : delete n[e]), this;
					if (arguments.length === 0) {
						var i, a = Object.keys(n);
						for (r = 0; r < a.length; ++r) (i = a[r]) !== "removeListener" && this.removeAllListeners(i);
						return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this;
					}
					if (typeof (t = n[e]) == "function") this.removeListener(e, t);
					else if (t !== void 0) for (r = t.length - 1; r >= 0; r--) this.removeListener(e, t[r]);
					return this;
				}, s.prototype.listeners = function(e) {
					return m(this, e, !0);
				}, s.prototype.rawListeners = function(e) {
					return m(this, e, !1);
				}, s.listenerCount = function(e, t) {
					return typeof e.listenerCount == "function" ? e.listenerCount(t) : h.call(e, t);
				}, s.prototype.listenerCount = h, s.prototype.eventNames = function() {
					return this._eventsCount > 0 ? r(this._events) : [];
				};
			},
			function(e, t, n) {
				n.d(t, "d", (function() {
					return r;
				})), n.d(t, "b", (function() {
					return i;
				})), n.d(t, "a", (function() {
					return a;
				})), n.d(t, "c", (function() {
					return o;
				}));
				var r = function(e, t, n, r, i) {
					this.dts = e, this.pts = t, this.duration = n, this.originalDts = r, this.isSyncPoint = i, this.fileposition = null;
				}, i = function() {
					function e() {
						this.beginDts = 0, this.endDts = 0, this.beginPts = 0, this.endPts = 0, this.originalBeginDts = 0, this.originalEndDts = 0, this.syncPoints = [], this.firstSample = null, this.lastSample = null;
					}
					return e.prototype.appendSyncPoint = function(e) {
						e.isSyncPoint = !0, this.syncPoints.push(e);
					}, e;
				}(), a = function() {
					function e() {
						this._list = [];
					}
					return e.prototype.clear = function() {
						this._list = [];
					}, e.prototype.appendArray = function(e) {
						var t = this._list;
						e.length !== 0 && (t.length > 0 && e[0].originalDts < t[t.length - 1].originalDts && this.clear(), Array.prototype.push.apply(t, e));
					}, e.prototype.getLastSyncPointBeforeDts = function(e) {
						if (this._list.length == 0) return null;
						var t = this._list, n = 0, r = t.length - 1, i = 0, a = 0, o = r;
						for (e < t[0].dts && (n = 0, a = o + 1); a <= o;) {
							if ((i = a + Math.floor((o - a) / 2)) === r || e >= t[i].dts && e < t[i + 1].dts) {
								n = i;
								break;
							}
							t[i].dts < e ? a = i + 1 : o = i - 1;
						}
						return this._list[n];
					}, e;
				}(), o = function() {
					function e(e) {
						this._type = e, this._list = [], this._lastAppendLocation = -1;
					}
					return Object.defineProperty(e.prototype, "type", {
						get: function() {
							return this._type;
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "length", {
						get: function() {
							return this._list.length;
						},
						enumerable: !1,
						configurable: !0
					}), e.prototype.isEmpty = function() {
						return this._list.length === 0;
					}, e.prototype.clear = function() {
						this._list = [], this._lastAppendLocation = -1;
					}, e.prototype._searchNearestSegmentBefore = function(e) {
						var t = this._list;
						if (t.length === 0) return -2;
						var n = t.length - 1, r = 0, i = 0, a = n, o = 0;
						if (e < t[0].originalBeginDts) return o = -1;
						for (; i <= a;) {
							if ((r = i + Math.floor((a - i) / 2)) === n || e > t[r].lastSample.originalDts && e < t[r + 1].originalBeginDts) {
								o = r;
								break;
							}
							t[r].originalBeginDts < e ? i = r + 1 : a = r - 1;
						}
						return o;
					}, e.prototype._searchNearestSegmentAfter = function(e) {
						return this._searchNearestSegmentBefore(e) + 1;
					}, e.prototype.append = function(e) {
						var t = this._list, n = e, r = this._lastAppendLocation, i = 0;
						r !== -1 && r < t.length && n.originalBeginDts >= t[r].lastSample.originalDts && (r === t.length - 1 || r < t.length - 1 && n.originalBeginDts < t[r + 1].originalBeginDts) ? i = r + 1 : t.length > 0 && (i = this._searchNearestSegmentBefore(n.originalBeginDts) + 1), this._lastAppendLocation = i, this._list.splice(i, 0, n);
					}, e.prototype.getLastSegmentBefore = function(e) {
						var t = this._searchNearestSegmentBefore(e);
						return t >= 0 ? this._list[t] : null;
					}, e.prototype.getLastSampleBefore = function(e) {
						var t = this.getLastSegmentBefore(e);
						return t == null ? null : t.lastSample;
					}, e.prototype.getLastSyncPointBefore = function(e) {
						for (var t = this._searchNearestSegmentBefore(e), n = this._list[t].syncPoints; n.length === 0 && t > 0;) t--, n = this._list[t].syncPoints;
						return n.length > 0 ? n[n.length - 1] : null;
					}, e;
				}();
			},
			function(e, t, n) {
				t.a = function() {
					function e() {
						this.mimeType = null, this.duration = null, this.hasAudio = null, this.hasVideo = null, this.audioCodec = null, this.videoCodec = null, this.audioDataRate = null, this.videoDataRate = null, this.audioSampleRate = null, this.audioChannelCount = null, this.width = null, this.height = null, this.fps = null, this.profile = null, this.level = null, this.refFrames = null, this.chromaFormat = null, this.sarNum = null, this.sarDen = null, this.metadata = null, this.segments = null, this.segmentCount = null, this.hasKeyframesIndex = null, this.keyframesIndex = null;
					}
					return e.prototype.isComplete = function() {
						var e = !1 === this.hasAudio || !0 === this.hasAudio && this.audioCodec != null && this.audioSampleRate != null && this.audioChannelCount != null, t = !1 === this.hasVideo || !0 === this.hasVideo && this.videoCodec != null && this.width != null && this.height != null && this.fps != null && this.profile != null && this.level != null && this.refFrames != null && this.chromaFormat != null && this.sarNum != null && this.sarDen != null;
						return this.mimeType != null && e && t;
					}, e.prototype.isSeekable = function() {
						return !0 === this.hasKeyframesIndex;
					}, e.prototype.getNearestKeyframe = function(e) {
						if (this.keyframesIndex == null) return null;
						var t = this.keyframesIndex, n = this._search(t.times, e);
						return {
							index: n,
							milliseconds: t.times[n],
							fileposition: t.filepositions[n]
						};
					}, e.prototype._search = function(e, t) {
						var n = 0, r = e.length - 1, i = 0, a = 0, o = r;
						for (t < e[0] && (n = 0, a = o + 1); a <= o;) {
							if ((i = a + Math.floor((o - a) / 2)) === r || t >= e[i] && t < e[i + 1]) {
								n = i;
								break;
							}
							e[i] < t ? a = i + 1 : o = i - 1;
						}
						return n;
					}, e;
				}();
			},
			function(e, t, n) {
				var r = n(6), i = n.n(r), a = n(0), o = function() {
					function e() {}
					return Object.defineProperty(e, "forceGlobalTag", {
						get: function() {
							return a.a.FORCE_GLOBAL_TAG;
						},
						set: function(t) {
							a.a.FORCE_GLOBAL_TAG = t, e._notifyChange();
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e, "globalTag", {
						get: function() {
							return a.a.GLOBAL_TAG;
						},
						set: function(t) {
							a.a.GLOBAL_TAG = t, e._notifyChange();
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e, "enableAll", {
						get: function() {
							return a.a.ENABLE_VERBOSE && a.a.ENABLE_DEBUG && a.a.ENABLE_INFO && a.a.ENABLE_WARN && a.a.ENABLE_ERROR;
						},
						set: function(t) {
							a.a.ENABLE_VERBOSE = t, a.a.ENABLE_DEBUG = t, a.a.ENABLE_INFO = t, a.a.ENABLE_WARN = t, a.a.ENABLE_ERROR = t, e._notifyChange();
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e, "enableDebug", {
						get: function() {
							return a.a.ENABLE_DEBUG;
						},
						set: function(t) {
							a.a.ENABLE_DEBUG = t, e._notifyChange();
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e, "enableVerbose", {
						get: function() {
							return a.a.ENABLE_VERBOSE;
						},
						set: function(t) {
							a.a.ENABLE_VERBOSE = t, e._notifyChange();
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e, "enableInfo", {
						get: function() {
							return a.a.ENABLE_INFO;
						},
						set: function(t) {
							a.a.ENABLE_INFO = t, e._notifyChange();
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e, "enableWarn", {
						get: function() {
							return a.a.ENABLE_WARN;
						},
						set: function(t) {
							a.a.ENABLE_WARN = t, e._notifyChange();
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e, "enableError", {
						get: function() {
							return a.a.ENABLE_ERROR;
						},
						set: function(t) {
							a.a.ENABLE_ERROR = t, e._notifyChange();
						},
						enumerable: !1,
						configurable: !0
					}), e.getConfig = function() {
						return {
							globalTag: a.a.GLOBAL_TAG,
							forceGlobalTag: a.a.FORCE_GLOBAL_TAG,
							enableVerbose: a.a.ENABLE_VERBOSE,
							enableDebug: a.a.ENABLE_DEBUG,
							enableInfo: a.a.ENABLE_INFO,
							enableWarn: a.a.ENABLE_WARN,
							enableError: a.a.ENABLE_ERROR,
							enableCallback: a.a.ENABLE_CALLBACK
						};
					}, e.applyConfig = function(e) {
						a.a.GLOBAL_TAG = e.globalTag, a.a.FORCE_GLOBAL_TAG = e.forceGlobalTag, a.a.ENABLE_VERBOSE = e.enableVerbose, a.a.ENABLE_DEBUG = e.enableDebug, a.a.ENABLE_INFO = e.enableInfo, a.a.ENABLE_WARN = e.enableWarn, a.a.ENABLE_ERROR = e.enableError, a.a.ENABLE_CALLBACK = e.enableCallback;
					}, e._notifyChange = function() {
						var t = e.emitter;
						if (t.listenerCount("change") > 0) {
							var n = e.getConfig();
							t.emit("change", n);
						}
					}, e.registerListener = function(t) {
						e.emitter.addListener("change", t);
					}, e.removeListener = function(t) {
						e.emitter.removeListener("change", t);
					}, e.addLogListener = function(t) {
						a.a.emitter.addListener("log", t), a.a.emitter.listenerCount("log") > 0 && (a.a.ENABLE_CALLBACK = !0, e._notifyChange());
					}, e.removeLogListener = function(t) {
						a.a.emitter.removeListener("log", t), a.a.emitter.listenerCount("log") === 0 && (a.a.ENABLE_CALLBACK = !1, e._notifyChange());
					}, e;
				}();
				o.emitter = new i.a(), t.a = o;
			},
			function(e, t, n) {
				var r = n(6), i = n.n(r), a = n(0), o = n(4), s = n(8);
				function c(e, t, n) {
					var r = e;
					if (t + n < r.length) {
						for (; n--;) if ((192 & r[++t]) != 128) return !1;
						return !0;
					}
					return !1;
				}
				var l, u = function(e) {
					for (var t = [], n = e, r = 0, i = e.length; r < i;) if (n[r] < 128) t.push(String.fromCharCode(n[r])), ++r;
					else {
						if (!(n[r] < 192)) {
							if (n[r] < 224) {
								if (c(n, r, 1) && (a = (31 & n[r]) << 6 | 63 & n[r + 1]) >= 128) {
									t.push(String.fromCharCode(65535 & a)), r += 2;
									continue;
								}
							} else if (n[r] < 240) {
								if (c(n, r, 2) && (a = (15 & n[r]) << 12 | (63 & n[r + 1]) << 6 | 63 & n[r + 2]) >= 2048 && (63488 & a) != 55296) {
									t.push(String.fromCharCode(65535 & a)), r += 3;
									continue;
								}
							} else if (n[r] < 248) {
								var a;
								if (c(n, r, 3) && (a = (7 & n[r]) << 18 | (63 & n[r + 1]) << 12 | (63 & n[r + 2]) << 6 | 63 & n[r + 3]) > 65536 && a < 1114112) {
									a -= 65536, t.push(String.fromCharCode(a >>> 10 | 55296)), t.push(String.fromCharCode(1023 & a | 56320)), r += 4;
									continue;
								}
							}
						}
						t.push("�"), ++r;
					}
					return t.join("");
				}, d = n(3), f = (l = /* @__PURE__ */ new ArrayBuffer(2), new DataView(l).setInt16(0, 256, !0), new Int16Array(l)[0] === 256), p = function() {
					function e() {}
					return e.parseScriptData = function(t, n, r) {
						var i = {};
						try {
							var o = e.parseValue(t, n, r), s = e.parseValue(t, n + o.size, r - o.size);
							i[o.data] = s.data;
						} catch (e) {
							a.a.e("AMF", e.toString());
						}
						return i;
					}, e.parseObject = function(t, n, r) {
						if (r < 3) throw new d.a("Data not enough when parse ScriptDataObject");
						var i = e.parseString(t, n, r), a = e.parseValue(t, n + i.size, r - i.size), o = a.objectEnd;
						return {
							data: {
								name: i.data,
								value: a.data
							},
							size: i.size + a.size,
							objectEnd: o
						};
					}, e.parseVariable = function(t, n, r) {
						return e.parseObject(t, n, r);
					}, e.parseString = function(e, t, n) {
						if (n < 2) throw new d.a("Data not enough when parse String");
						var r = new DataView(e, t, n).getUint16(0, !f);
						return {
							data: r > 0 ? u(new Uint8Array(e, t + 2, r)) : "",
							size: 2 + r
						};
					}, e.parseLongString = function(e, t, n) {
						if (n < 4) throw new d.a("Data not enough when parse LongString");
						var r = new DataView(e, t, n).getUint32(0, !f);
						return {
							data: r > 0 ? u(new Uint8Array(e, t + 4, r)) : "",
							size: 4 + r
						};
					}, e.parseDate = function(e, t, n) {
						if (n < 10) throw new d.a("Data size invalid when parse Date");
						var r = new DataView(e, t, n), i = r.getFloat64(0, !f), a = r.getInt16(8, !f);
						return {
							data: new Date(i += 60 * a * 1e3),
							size: 10
						};
					}, e.parseValue = function(t, n, r) {
						if (r < 1) throw new d.a("Data not enough when parse Value");
						var i, o = new DataView(t, n, r), s = 1, c = o.getUint8(0), l = !1;
						try {
							switch (c) {
								case 0:
									i = o.getFloat64(1, !f), s += 8;
									break;
								case 1:
									i = !!o.getUint8(1), s += 1;
									break;
								case 2:
									var u = e.parseString(t, n + 1, r - 1);
									i = u.data, s += u.size;
									break;
								case 3:
									i = {};
									var p = 0;
									for ((16777215 & o.getUint32(r - 4, !f)) == 9 && (p = 3); s < r - 4;) {
										var m = e.parseObject(t, n + s, r - s - p);
										if (m.objectEnd) break;
										i[m.data.name] = m.data.value, s += m.size;
									}
									s <= r - 3 && (16777215 & o.getUint32(s - 1, !f)) == 9 && (s += 3);
									break;
								case 8:
									for (i = {}, s += 4, p = 0, (16777215 & o.getUint32(r - 4, !f)) == 9 && (p = 3); s < r - 8;) {
										var h = e.parseVariable(t, n + s, r - s - p);
										if (h.objectEnd) break;
										i[h.data.name] = h.data.value, s += h.size;
									}
									s <= r - 3 && (16777215 & o.getUint32(s - 1, !f)) == 9 && (s += 3);
									break;
								case 9:
									i = void 0, s = 1, l = !0;
									break;
								case 10:
									i = [];
									var g = o.getUint32(1, !f);
									s += 4;
									for (var _ = 0; _ < g; _++) {
										var v = e.parseValue(t, n + s, r - s);
										i.push(v.data), s += v.size;
									}
									break;
								case 11:
									var y = e.parseDate(t, n + 1, r - 1);
									i = y.data, s += y.size;
									break;
								case 12:
									var b = e.parseString(t, n + 1, r - 1);
									i = b.data, s += b.size;
									break;
								default: s = r, a.a.w("AMF", "Unsupported AMF value type " + c);
							}
						} catch (e) {
							a.a.e("AMF", e.toString());
						}
						return {
							data: i,
							size: s,
							objectEnd: l
						};
					}, e;
				}(), m = function() {
					function e(e) {
						this.TAG = "ExpGolomb", this._buffer = e, this._buffer_index = 0, this._total_bytes = e.byteLength, this._total_bits = 8 * e.byteLength, this._current_word = 0, this._current_word_bits_left = 0;
					}
					return e.prototype.destroy = function() {
						this._buffer = null;
					}, e.prototype._fillCurrentWord = function() {
						var e = this._total_bytes - this._buffer_index;
						if (e <= 0) throw new d.a("ExpGolomb: _fillCurrentWord() but no bytes available");
						var t = Math.min(4, e), n = new Uint8Array(4);
						n.set(this._buffer.subarray(this._buffer_index, this._buffer_index + t)), this._current_word = new DataView(n.buffer).getUint32(0, !1), this._buffer_index += t, this._current_word_bits_left = 8 * t;
					}, e.prototype.readBits = function(e) {
						if (e > 32) throw new d.b("ExpGolomb: readBits() bits exceeded max 32bits!");
						if (e <= this._current_word_bits_left) {
							var t = this._current_word >>> 32 - e;
							return this._current_word <<= e, this._current_word_bits_left -= e, t;
						}
						var n = this._current_word_bits_left ? this._current_word : 0;
						n >>>= 32 - this._current_word_bits_left;
						var r = e - this._current_word_bits_left;
						this._fillCurrentWord();
						var i = Math.min(r, this._current_word_bits_left), a = this._current_word >>> 32 - i;
						return this._current_word <<= i, this._current_word_bits_left -= i, n = n << i | a;
					}, e.prototype.readBool = function() {
						return this.readBits(1) === 1;
					}, e.prototype.readByte = function() {
						return this.readBits(8);
					}, e.prototype._skipLeadingZero = function() {
						var e;
						for (e = 0; e < this._current_word_bits_left; e++) if (this._current_word & 2147483648 >>> e) return this._current_word <<= e, this._current_word_bits_left -= e, e;
						return this._fillCurrentWord(), e + this._skipLeadingZero();
					}, e.prototype.readUEG = function() {
						var e = this._skipLeadingZero();
						return this.readBits(e + 1) - 1;
					}, e.prototype.readSEG = function() {
						var e = this.readUEG();
						return 1 & e ? e + 1 >>> 1 : -1 * (e >>> 1);
					}, e;
				}(), h = function() {
					function e() {}
					return e._ebsp2rbsp = function(e) {
						for (var t = e, n = t.byteLength, r = new Uint8Array(n), i = 0, a = 0; a < n; a++) a >= 2 && t[a] === 3 && t[a - 1] === 0 && t[a - 2] === 0 || (r[i] = t[a], i++);
						return new Uint8Array(r.buffer, 0, i);
					}, e.parseSPS = function(t) {
						for (var n = t.subarray(1, 4), r = "avc1.", i = 0; i < 3; i++) {
							var a = n[i].toString(16);
							a.length < 2 && (a = "0" + a), r += a;
						}
						var o = new m(e._ebsp2rbsp(t));
						o.readByte();
						var s = o.readByte();
						o.readByte();
						var c = o.readByte();
						o.readUEG();
						var l = e.getProfileString(s), u = e.getLevelString(c), d = 1, f = 420, p = 8, h = 8;
						if ((s === 100 || s === 110 || s === 122 || s === 244 || s === 44 || s === 83 || s === 86 || s === 118 || s === 128 || s === 138 || s === 144) && ((d = o.readUEG()) === 3 && o.readBits(1), d <= 3 && (f = [
							0,
							420,
							422,
							444
						][d]), p = o.readUEG() + 8, h = o.readUEG() + 8, o.readBits(1), o.readBool())) for (var g = d === 3 ? 12 : 8, _ = 0; _ < g; _++) o.readBool() && (_ < 6 ? e._skipScalingList(o, 16) : e._skipScalingList(o, 64));
						o.readUEG();
						var v = o.readUEG();
						if (v === 0) o.readUEG();
						else if (v === 1) {
							o.readBits(1), o.readSEG(), o.readSEG();
							var y = o.readUEG();
							for (_ = 0; _ < y; _++) o.readSEG();
						}
						var b = o.readUEG();
						o.readBits(1);
						var x = o.readUEG(), S = o.readUEG(), C = o.readBits(1);
						C === 0 && o.readBits(1), o.readBits(1);
						var w = 0, T = 0, E = 0, D = 0;
						o.readBool() && (w = o.readUEG(), T = o.readUEG(), E = o.readUEG(), D = o.readUEG());
						var O = 1, k = 1, A = 0, j = !0, M = 0, N = 0;
						if (o.readBool()) {
							if (o.readBool()) {
								var P = o.readByte();
								P > 0 && P < 16 ? (O = [
									1,
									12,
									10,
									16,
									40,
									24,
									20,
									32,
									80,
									18,
									15,
									64,
									160,
									4,
									3,
									2
								][P - 1], k = [
									1,
									11,
									11,
									11,
									33,
									11,
									11,
									11,
									33,
									11,
									11,
									33,
									99,
									3,
									2,
									1
								][P - 1]) : P === 255 && (O = o.readByte() << 8 | o.readByte(), k = o.readByte() << 8 | o.readByte());
							}
							if (o.readBool() && o.readBool(), o.readBool() && (o.readBits(4), o.readBool() && o.readBits(24)), o.readBool() && (o.readUEG(), o.readUEG()), o.readBool()) {
								var F = o.readBits(32), I = o.readBits(32);
								j = o.readBool(), A = (M = I) / (N = 2 * F);
							}
						}
						var L = 1;
						O === 1 && k === 1 || (L = O / k);
						var ee = 0, R = 0;
						d === 0 ? (ee = 1, R = 2 - C) : (ee = d === 3 ? 1 : 2, R = (d === 1 ? 2 : 1) * (2 - C));
						var z = 16 * (x + 1), B = 16 * (S + 1) * (2 - C);
						z -= (w + T) * ee, B -= (E + D) * R;
						var V = Math.ceil(z * L);
						return o.destroy(), o = null, {
							codec_mimetype: r,
							profile_idc: s,
							level_idc: c,
							profile_string: l,
							level_string: u,
							chroma_format_idc: d,
							bit_depth: p,
							bit_depth_luma: p,
							bit_depth_chroma: h,
							ref_frames: b,
							chroma_format: f,
							chroma_format_string: e.getChromaFormatString(f),
							frame_rate: {
								fixed: j,
								fps: A,
								fps_den: N,
								fps_num: M
							},
							sar_ratio: {
								width: O,
								height: k
							},
							codec_size: {
								width: z,
								height: B
							},
							present_size: {
								width: V,
								height: B
							}
						};
					}, e._skipScalingList = function(e, t) {
						for (var n = 8, r = 8, i = 0; i < t; i++) r !== 0 && (r = (n + e.readSEG() + 256) % 256), n = r === 0 ? n : r;
					}, e.getProfileString = function(e) {
						switch (e) {
							case 66: return "Baseline";
							case 77: return "Main";
							case 88: return "Extended";
							case 100: return "High";
							case 110: return "High10";
							case 122: return "High422";
							case 244: return "High444";
							default: return "Unknown";
						}
					}, e.getLevelString = function(e) {
						return (e / 10).toFixed(1);
					}, e.getChromaFormatString = function(e) {
						switch (e) {
							case 420: return "4:2:0";
							case 422: return "4:2:2";
							case 444: return "4:4:4";
							default: return "Unknown";
						}
					}, e;
				}(), g = n(5), _ = function() {
					function e() {}
					return e._ebsp2rbsp = function(e) {
						for (var t = e, n = t.byteLength, r = new Uint8Array(n), i = 0, a = 0; a < n; a++) a >= 2 && t[a] === 3 && t[a - 1] === 0 && t[a - 2] === 0 || (r[i] = t[a], i++);
						return new Uint8Array(r.buffer, 0, i);
					}, e.parseVPS = function(t) {
						var n = new m(e._ebsp2rbsp(t));
						return n.readByte(), n.readByte(), n.readBits(4), n.readBits(2), n.readBits(6), {
							num_temporal_layers: n.readBits(3) + 1,
							temporal_id_nested: n.readBool()
						};
					}, e.parseSPS = function(t) {
						var n = new m(e._ebsp2rbsp(t));
						n.readByte(), n.readByte();
						for (var r = 0, i = 0, a = 0, o = 0, s = (n.readBits(4), n.readBits(3)), c = (n.readBool(), n.readBits(2)), l = n.readBool(), u = n.readBits(5), d = n.readByte(), f = n.readByte(), p = n.readByte(), h = n.readByte(), g = n.readByte(), _ = n.readByte(), v = n.readByte(), y = n.readByte(), b = n.readByte(), x = n.readByte(), S = n.readByte(), C = [], w = [], T = 0; T < s; T++) C.push(n.readBool()), w.push(n.readBool());
						if (s > 0) for (T = s; T < 8; T++) n.readBits(2);
						for (T = 0; T < s; T++) C[T] && (n.readByte(), n.readByte(), n.readByte(), n.readByte(), n.readByte(), n.readByte(), n.readByte(), n.readByte(), n.readByte(), n.readByte(), n.readByte()), w[T] && n.readByte();
						n.readUEG();
						var E = n.readUEG();
						E == 3 && n.readBits(1);
						var D = n.readUEG(), O = n.readUEG();
						n.readBool() && (r += n.readUEG(), i += n.readUEG(), a += n.readUEG(), o += n.readUEG());
						var k = n.readUEG(), A = n.readUEG(), j = n.readUEG();
						for (T = n.readBool() ? 0 : s; T <= s; T++) n.readUEG(), n.readUEG(), n.readUEG();
						if (n.readUEG(), n.readUEG(), n.readUEG(), n.readUEG(), n.readUEG(), n.readUEG(), n.readBool() && n.readBool()) for (var M = 0; M < 4; M++) for (var N = 0; N < (M === 3 ? 2 : 6); N++) if (n.readBool()) {
							var P = Math.min(64, 1 << 4 + (M << 1));
							for (M > 1 && n.readSEG(), T = 0; T < P; T++) n.readSEG();
						} else n.readUEG();
						n.readBool(), n.readBool(), n.readBool() && (n.readByte(), n.readUEG(), n.readUEG(), n.readBool());
						var F = n.readUEG(), I = 0;
						for (T = 0; T < F; T++) {
							var L = !1;
							if (T !== 0 && (L = n.readBool()), L) {
								T === F && n.readUEG(), n.readBool(), n.readUEG();
								for (var ee = 0, R = 0; R <= I; R++) {
									var z = n.readBool(), B = !1;
									z || (B = n.readBool()), (z || B) && ee++;
								}
								I = ee;
							} else {
								var V = n.readUEG(), te = n.readUEG();
								for (I = V + te, R = 0; R < V; R++) n.readUEG(), n.readBool();
								for (R = 0; R < te; R++) n.readUEG(), n.readBool();
							}
						}
						if (n.readBool()) {
							var ne = n.readUEG();
							for (T = 0; T < ne; T++) {
								for (R = 0; R < j + 4; R++) n.readBits(1);
								n.readBits(1);
							}
						}
						var re = 0, H = 1, U = 1, W = !1, G = 1, K = 1;
						if (n.readBool(), n.readBool(), n.readBool()) {
							if (n.readBool()) {
								var ie = n.readByte();
								ie > 0 && ie <= 16 ? (H = [
									1,
									12,
									10,
									16,
									40,
									24,
									20,
									32,
									80,
									18,
									15,
									64,
									160,
									4,
									3,
									2
								][ie - 1], U = [
									1,
									11,
									11,
									11,
									33,
									11,
									11,
									11,
									33,
									11,
									11,
									33,
									99,
									3,
									2,
									1
								][ie - 1]) : ie === 255 && (H = n.readBits(16), U = n.readBits(16));
							}
							if (n.readBool() && n.readBool(), n.readBool() && (n.readBits(3), n.readBool(), n.readBool() && (n.readByte(), n.readByte(), n.readByte())), n.readBool() && (n.readUEG(), n.readUEG()), n.readBool(), n.readBool(), n.readBool(), n.readBool() && (n.readUEG(), n.readUEG(), n.readUEG(), n.readUEG()), n.readBool() && (G = n.readBits(32), K = n.readBits(32), n.readBool() && (n.readUEG(), n.readBool()))) {
								var q = !1, ae = !1, oe = !1;
								for (q = n.readBool(), ae = n.readBool(), (q || ae) && ((oe = n.readBool()) && (n.readByte(), n.readBits(5), n.readBool(), n.readBits(5)), n.readBits(4), n.readBits(4), oe && n.readBits(4), n.readBits(5), n.readBits(5), n.readBits(5)), T = 0; T <= s; T++) {
									var se = n.readBool();
									W = se;
									var J = !1, ce = 1;
									se || (J = n.readBool());
									var le = !1;
									if (J ? n.readSEG() : le = n.readBool(), le || (ce = n.readUEG() + 1), q) for (R = 0; R < ce; R++) n.readUEG(), n.readUEG(), oe && (n.readUEG(), n.readUEG());
									if (ae) for (R = 0; R < ce; R++) n.readUEG(), n.readUEG(), oe && (n.readUEG(), n.readUEG());
								}
							}
							n.readBool() && (n.readBool(), n.readBool(), n.readBool(), re = n.readUEG(), n.readUEG(), n.readUEG(), n.readUEG(), n.readUEG());
						}
						n.readBool();
						var ue = "hvc1." + u + ".1.L" + S + ".B0", de = D - (r + i) * (E === 1 || E === 2 ? 2 : 1), fe = O - (a + o) * (E === 1 ? 2 : 1), Y = 1;
						return H !== 1 && U !== 1 && (Y = H / U), n.destroy(), n = null, {
							codec_mimetype: ue,
							level_string: e.getLevelString(S),
							profile_idc: u,
							bit_depth: k + 8,
							ref_frames: 1,
							chroma_format: E,
							chroma_format_string: e.getChromaFormatString(E),
							general_level_idc: S,
							general_profile_space: c,
							general_tier_flag: l,
							general_profile_idc: u,
							general_profile_compatibility_flags_1: d,
							general_profile_compatibility_flags_2: f,
							general_profile_compatibility_flags_3: p,
							general_profile_compatibility_flags_4: h,
							general_constraint_indicator_flags_1: g,
							general_constraint_indicator_flags_2: _,
							general_constraint_indicator_flags_3: v,
							general_constraint_indicator_flags_4: y,
							general_constraint_indicator_flags_5: b,
							general_constraint_indicator_flags_6: x,
							min_spatial_segmentation_idc: re,
							constant_frame_rate: 0,
							chroma_format_idc: E,
							bit_depth_luma_minus8: k,
							bit_depth_chroma_minus8: A,
							frame_rate: {
								fixed: W,
								fps: K / G,
								fps_den: G,
								fps_num: K
							},
							sar_ratio: {
								width: H,
								height: U
							},
							codec_size: {
								width: de,
								height: fe
							},
							present_size: {
								width: de * Y,
								height: fe
							}
						};
					}, e.parsePPS = function(t) {
						var n = new m(e._ebsp2rbsp(t));
						n.readByte(), n.readByte(), n.readUEG(), n.readUEG(), n.readBool(), n.readBool(), n.readBits(3), n.readBool(), n.readBool(), n.readUEG(), n.readUEG(), n.readSEG(), n.readBool(), n.readBool(), n.readBool() && n.readUEG(), n.readSEG(), n.readSEG(), n.readBool(), n.readBool(), n.readBool(), n.readBool();
						var r = n.readBool(), i = n.readBool(), a = 1;
						return i && r ? a = 0 : i ? a = 3 : r && (a = 2), { parallelismType: a };
					}, e.getChromaFormatString = function(e) {
						switch (e) {
							case 0: return "4:0:0";
							case 1: return "4:2:0";
							case 2: return "4:2:2";
							case 3: return "4:4:4";
							default: return "Unknown";
						}
					}, e.getProfileString = function(e) {
						switch (e) {
							case 1: return "Main";
							case 2: return "Main10";
							case 3: return "MainSP";
							case 4: return "Rext";
							case 9: return "SCC";
							default: return "Unknown";
						}
					}, e.getLevelString = function(e) {
						return (e / 30).toFixed(1);
					}, e;
				}();
				function v(e) {
					return e.byteOffset % 2 == 0 && e.byteLength % 2 == 0;
				}
				function y(e) {
					return e.byteOffset % 4 == 0 && e.byteLength % 4 == 0;
				}
				function b(e, t) {
					for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
					return !0;
				}
				var x = function(e, t) {
					return e.byteLength === t.byteLength && (y(e) && y(t) ? function(e, t) {
						return b(new Uint32Array(e.buffer, e.byteOffset, e.byteLength / 4), new Uint32Array(t.buffer, t.byteOffset, t.byteLength / 4));
					}(e, t) : v(e) && v(t) ? function(e, t) {
						return b(new Uint16Array(e.buffer, e.byteOffset, e.byteLength / 2), new Uint16Array(t.buffer, t.byteOffset, t.byteLength / 2));
					}(e, t) : function(e, t) {
						return b(e, t);
					}(e, t));
				}, S = n(14), C = n.n(S), w, T = [
					106,
					124,
					187,
					145,
					175,
					115,
					1,
					163,
					90,
					207,
					91,
					53,
					162,
					95,
					152,
					223
				], E = [
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0
				], D = function() {
					function e(e, t) {
						this.TAG = "FLVDemuxer", this._config = t, this._onError = null, this._onMediaInfo = null, this._onMetaDataArrived = null, this._onScriptDataArrived = null, this._onTrackMetadata = null, this._onDataAvailable = null, this._dataOffset = e.dataOffset, this._firstParse = !0, this._dispatch = !1, this._hasAudio = e.hasAudioTrack, this._hasVideo = e.hasVideoTrack, this._hasAudioFlagOverrided = !1, this._hasVideoFlagOverrided = !1, this._audioInitialMetadataDispatched = !1, this._videoInitialMetadataDispatched = !1, this._mediaInfo = new s.a(), this._mediaInfo.hasAudio = this._hasAudio, this._mediaInfo.hasVideo = this._hasVideo, this._metadata = null, this._audioMetadata = null, this._videoMetadata = null, this._naluLengthSize = 4, this._timestampBase = 0, this._timescale = 1e3, this._duration = 0, this._durationOverrided = !1, this._referenceFrameRate = {
							fixed: !0,
							fps: 23.976,
							fps_num: 23976,
							fps_den: 1e3
						}, this._flvSoundRateTable = [
							5500,
							11025,
							22050,
							44100,
							48e3
						], this._mpegSamplingRates = [
							96e3,
							88200,
							64e3,
							48e3,
							44100,
							32e3,
							24e3,
							22050,
							16e3,
							12e3,
							11025,
							8e3,
							7350
						], this._mpegAudioV10SampleRateTable = [
							44100,
							48e3,
							32e3,
							0
						], this._mpegAudioV20SampleRateTable = [
							22050,
							24e3,
							16e3,
							0
						], this._mpegAudioV25SampleRateTable = [
							11025,
							12e3,
							8e3,
							0
						], this._mpegAudioL1BitRateTable = [
							0,
							32,
							64,
							96,
							128,
							160,
							192,
							224,
							256,
							288,
							320,
							352,
							384,
							416,
							448,
							-1
						], this._mpegAudioL2BitRateTable = [
							0,
							32,
							48,
							56,
							64,
							80,
							96,
							112,
							128,
							160,
							192,
							224,
							256,
							320,
							384,
							-1
						], this._mpegAudioL3BitRateTable = [
							0,
							32,
							40,
							48,
							56,
							64,
							80,
							96,
							112,
							128,
							160,
							192,
							224,
							256,
							320,
							-1
						], this._videoTrack = {
							type: "video",
							id: 1,
							sequenceNumber: 0,
							samples: [],
							length: 0
						}, this._audioTrack = {
							type: "audio",
							id: 2,
							sequenceNumber: 0,
							samples: [],
							length: 0
						}, this._littleEndian = function() {
							var e = /* @__PURE__ */ new ArrayBuffer(2);
							return new DataView(e).setInt16(0, 256, !0), new Int16Array(e)[0] === 256;
						}();
					}
					return e.prototype.destroy = function() {
						this._mediaInfo = null, this._metadata = null, this._audioMetadata = null, this._videoMetadata = null, this._videoTrack = null, this._audioTrack = null, this._onError = null, this._onMediaInfo = null, this._onMetaDataArrived = null, this._onScriptDataArrived = null, this._onTrackMetadata = null, this._onDataAvailable = null;
					}, e.probe = function(e) {
						var t = new Uint8Array(e);
						if (t.byteLength < 9) return { needMoreData: !0 };
						var n = { match: !1 };
						if (t[0] !== 70 || t[1] !== 76 || t[2] !== 86 || t[3] !== 1) return n;
						var r, i, a = (4 & t[4]) >>> 2 != 0, o = (1 & t[4]) != 0, s = (r = t)[i = 5] << 24 | r[i + 1] << 16 | r[i + 2] << 8 | r[i + 3];
						return s < 9 ? n : {
							match: !0,
							consumed: s,
							dataOffset: s,
							hasAudioTrack: a,
							hasVideoTrack: o
						};
					}, e.prototype.bindDataSource = function(e) {
						return e.onDataArrival = this.parseChunks.bind(this), this;
					}, Object.defineProperty(e.prototype, "onTrackMetadata", {
						get: function() {
							return this._onTrackMetadata;
						},
						set: function(e) {
							this._onTrackMetadata = e;
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "onMediaInfo", {
						get: function() {
							return this._onMediaInfo;
						},
						set: function(e) {
							this._onMediaInfo = e;
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "onMetaDataArrived", {
						get: function() {
							return this._onMetaDataArrived;
						},
						set: function(e) {
							this._onMetaDataArrived = e;
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "onScriptDataArrived", {
						get: function() {
							return this._onScriptDataArrived;
						},
						set: function(e) {
							this._onScriptDataArrived = e;
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "onError", {
						get: function() {
							return this._onError;
						},
						set: function(e) {
							this._onError = e;
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "onDataAvailable", {
						get: function() {
							return this._onDataAvailable;
						},
						set: function(e) {
							this._onDataAvailable = e;
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "timestampBase", {
						get: function() {
							return this._timestampBase;
						},
						set: function(e) {
							this._timestampBase = e;
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "overridedDuration", {
						get: function() {
							return this._duration;
						},
						set: function(e) {
							this._durationOverrided = !0, this._duration = e, this._mediaInfo.duration = e;
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "overridedHasAudio", {
						set: function(e) {
							this._hasAudioFlagOverrided = !0, this._hasAudio = e, this._mediaInfo.hasAudio = e;
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "overridedHasVideo", {
						set: function(e) {
							this._hasVideoFlagOverrided = !0, this._hasVideo = e, this._mediaInfo.hasVideo = e;
						},
						enumerable: !1,
						configurable: !0
					}), e.prototype.resetMediaInfo = function() {
						this._mediaInfo = new s.a();
					}, e.prototype._isInitialMetadataDispatched = function() {
						return this._hasAudio && this._hasVideo ? this._audioInitialMetadataDispatched && this._videoInitialMetadataDispatched : this._hasAudio && !this._hasVideo ? this._audioInitialMetadataDispatched : !(this._hasAudio || !this._hasVideo) && this._videoInitialMetadataDispatched;
					}, e.prototype.parseChunks = function(t, n) {
						if (!(this._onError && this._onMediaInfo && this._onTrackMetadata && this._onDataAvailable)) throw new d.a("Flv: onError & onMediaInfo & onTrackMetadata & onDataAvailable callback must be specified");
						var r = 0, i = this._littleEndian;
						if (n === 0) {
							if (!(t.byteLength > 13)) return 0;
							r = e.probe(t).dataOffset;
						}
						for (this._firstParse && (this._firstParse = !1, n + r !== this._dataOffset && a.a.w(this.TAG, "First time parsing but chunk byteStart invalid!"), (o = new DataView(t, r)).getUint32(0, !i) !== 0 && a.a.w(this.TAG, "PrevTagSize0 !== 0 !!!"), r += 4); r < t.byteLength;) {
							this._dispatch = !0;
							var o = new DataView(t, r);
							if (r + 11 + 4 > t.byteLength) break;
							var s = o.getUint8(0), c = 16777215 & o.getUint32(0, !i);
							if (r + 11 + c + 4 > t.byteLength) break;
							if (s === 8 || s === 9 || s === 18) {
								var l = o.getUint8(4), u = o.getUint8(5), f = o.getUint8(6) | u << 8 | l << 16 | o.getUint8(7) << 24;
								16777215 & o.getUint32(7, !i) && a.a.w(this.TAG, "Meet tag which has StreamID != 0!");
								var p = r + 11;
								switch (s) {
									case 8:
										this._parseAudioData(t, p, c, f);
										break;
									case 9:
										this._parseVideoData(t, p, c, f, n + r);
										break;
									case 18: this._parseScriptData(t, p, c);
								}
								var m = o.getUint32(11 + c, !i);
								m !== 11 + c && a.a.w(this.TAG, "Invalid PrevTagSize " + m), r += 11 + c + 4;
							} else a.a.w(this.TAG, "Unsupported tag type " + s + ", skipped"), r += 11 + c + 4;
						}
						return this._isInitialMetadataDispatched() && this._dispatch && (this._audioTrack.length || this._videoTrack.length) && this._onDataAvailable(this._audioTrack, this._videoTrack), r;
					}, e.prototype._parseScriptData = function(e, t, n) {
						var r = p.parseScriptData(e, t, n);
						if (r.hasOwnProperty("onMetaData")) {
							if (r.onMetaData == null || typeof r.onMetaData != "object") return void a.a.w(this.TAG, "Invalid onMetaData structure!");
							this._metadata && a.a.w(this.TAG, "Found another onMetaData tag!"), this._metadata = r;
							var i = this._metadata.onMetaData;
							if (this._onMetaDataArrived && this._onMetaDataArrived(Object.assign({}, i)), typeof i.hasAudio == "boolean" && !1 === this._hasAudioFlagOverrided && (this._hasAudio = i.hasAudio, this._mediaInfo.hasAudio = this._hasAudio), typeof i.hasVideo == "boolean" && !1 === this._hasVideoFlagOverrided && (this._hasVideo = i.hasVideo, this._mediaInfo.hasVideo = this._hasVideo), typeof i.audiodatarate == "number" && (this._mediaInfo.audioDataRate = i.audiodatarate), typeof i.videodatarate == "number" && (this._mediaInfo.videoDataRate = i.videodatarate), typeof i.width == "number" && (this._mediaInfo.width = i.width), typeof i.height == "number" && (this._mediaInfo.height = i.height), typeof i.duration == "number") {
								if (!this._durationOverrided) {
									var o = Math.floor(i.duration * this._timescale);
									this._duration = o, this._mediaInfo.duration = o;
								}
							} else this._mediaInfo.duration = 0;
							if (typeof i.framerate == "number") {
								var s = Math.floor(1e3 * i.framerate);
								if (s > 0) {
									var c = s / 1e3;
									this._referenceFrameRate.fixed = !0, this._referenceFrameRate.fps = c, this._referenceFrameRate.fps_num = s, this._referenceFrameRate.fps_den = 1e3, this._mediaInfo.fps = c;
								}
							}
							if (typeof i.keyframes == "object") {
								this._mediaInfo.hasKeyframesIndex = !0;
								var l = i.keyframes;
								this._mediaInfo.keyframesIndex = this._parseKeyframesIndex(l), i.keyframes = null;
							} else this._mediaInfo.hasKeyframesIndex = !1;
							this._dispatch = !1, this._mediaInfo.metadata = i, a.a.v(this.TAG, "Parsed onMetaData"), this._mediaInfo.isComplete() && this._onMediaInfo(this._mediaInfo);
						}
						Object.keys(r).length > 0 && this._onScriptDataArrived && this._onScriptDataArrived(Object.assign({}, r));
					}, e.prototype._parseKeyframesIndex = function(e) {
						for (var t = [], n = [], r = 1; r < e.times.length; r++) {
							var i = this._timestampBase + Math.floor(1e3 * e.times[r]);
							t.push(i), n.push(e.filepositions[r]);
						}
						return {
							times: t,
							filepositions: n
						};
					}, e.prototype._parseAudioData = function(e, t, n, r) {
						if (n <= 1) a.a.w(this.TAG, "Flv: Invalid audio packet, missing SoundData payload!");
						else if (!0 !== this._hasAudioFlagOverrided || !1 !== this._hasAudio) {
							this._littleEndian;
							var i = new DataView(e, t, n).getUint8(0), o = i >>> 4;
							if (o === 2 || o === 10) {
								var s = 0, c = (12 & i) >>> 2;
								if (c >= 0 && c <= 4) {
									s = this._flvSoundRateTable[c];
									var l = 1 & i, u = this._audioMetadata, d = this._audioTrack;
									if (u || (!1 === this._hasAudio && !1 === this._hasAudioFlagOverrided && (this._hasAudio = !0, this._mediaInfo.hasAudio = !0), (u = this._audioMetadata = {}).type = "audio", u.id = d.id, u.timescale = this._timescale, u.duration = this._duration, u.audioSampleRate = s, u.channelCount = l === 0 ? 1 : 2), o === 10) {
										var f = this._parseAACAudioData(e, t + 1, n - 1);
										if (f == null) return;
										if (f.packetType === 0) {
											if (u.config) {
												if (x(f.data.config, u.config)) return;
												a.a.w(this.TAG, "AudioSpecificConfig has been changed, re-generate initialization segment");
											}
											var p = f.data;
											u.audioSampleRate = p.samplingRate, u.channelCount = p.channelCount, u.codec = p.codec, u.originalCodec = p.originalCodec, u.config = p.config, u.refSampleDuration = 1024 / u.audioSampleRate * u.timescale, a.a.v(this.TAG, "Parsed AudioSpecificConfig"), this._isInitialMetadataDispatched() ? this._dispatch && (this._audioTrack.length || this._videoTrack.length) && this._onDataAvailable(this._audioTrack, this._videoTrack) : this._audioInitialMetadataDispatched = !0, this._dispatch = !1, this._onTrackMetadata("audio", u), (_ = this._mediaInfo).audioCodec = u.originalCodec, _.audioSampleRate = u.audioSampleRate, _.audioChannelCount = u.channelCount, _.hasVideo ? _.videoCodec != null && (_.mimeType = "video/x-flv; codecs=\"" + _.videoCodec + "," + _.audioCodec + "\"") : _.mimeType = "video/x-flv; codecs=\"" + _.audioCodec + "\"", _.isComplete() && this._onMediaInfo(_);
										} else if (f.packetType === 1) {
											var m = this._timestampBase + r, h = {
												unit: f.data,
												length: f.data.byteLength,
												dts: m,
												pts: m
											};
											d.samples.push(h), d.length += f.data.length;
										} else a.a.e(this.TAG, "Flv: Unsupported AAC data type " + f.packetType);
									} else if (o === 2) {
										if (!u.codec) {
											var _;
											if ((p = this._parseMP3AudioData(e, t + 1, n - 1, !0)) == null) return;
											u.audioSampleRate = p.samplingRate, u.channelCount = p.channelCount, u.codec = p.codec, u.originalCodec = p.originalCodec, u.refSampleDuration = 1152 / u.audioSampleRate * u.timescale, a.a.v(this.TAG, "Parsed MPEG Audio Frame Header"), this._audioInitialMetadataDispatched = !0, this._onTrackMetadata("audio", u), (_ = this._mediaInfo).audioCodec = u.codec, _.audioSampleRate = u.audioSampleRate, _.audioChannelCount = u.channelCount, _.audioDataRate = p.bitRate, _.hasVideo ? _.videoCodec != null && (_.mimeType = "video/x-flv; codecs=\"" + _.videoCodec + "," + _.audioCodec + "\"") : _.mimeType = "video/x-flv; codecs=\"" + _.audioCodec + "\"", _.isComplete() && this._onMediaInfo(_);
										}
										var v = this._parseMP3AudioData(e, t + 1, n - 1, !1);
										if (v == null) return;
										m = this._timestampBase + r;
										var y = {
											unit: v,
											length: v.byteLength,
											dts: m,
											pts: m
										};
										d.samples.push(y), d.length += v.length;
									}
								} else this._onError(g.a.FORMAT_ERROR, "Flv: Invalid audio sample rate idx: " + c);
							} else this._onError(g.a.CODEC_UNSUPPORTED, "Flv: Unsupported audio codec idx: " + o);
						}
					}, e.prototype._parseAACAudioData = function(e, t, n) {
						if (!(n <= 1)) {
							var r = {}, i = new Uint8Array(e, t, n);
							return r.packetType = i[0], i[0] === 0 ? r.data = this._parseAACAudioSpecificConfig(e, t + 1, n - 1) : r.data = i.subarray(1), r;
						}
						a.a.w(this.TAG, "Flv: Invalid AAC packet, missing AACPacketType or/and Data!");
					}, e.prototype._parseAACAudioSpecificConfig = function(e, t, n) {
						var r, i, a = new Uint8Array(e, t, n), o = null, s = 0, c = null;
						if (s = r = a[0] >>> 3, (i = (7 & a[0]) << 1 | a[1] >>> 7) < 0 || i >= this._mpegSamplingRates.length) this._onError(g.a.FORMAT_ERROR, "Flv: AAC invalid sampling frequency index!");
						else {
							var l = this._mpegSamplingRates[i], u = (120 & a[1]) >>> 3;
							if (!(u < 0 || u >= 8)) {
								s === 5 && (c = (7 & a[1]) << 1 | a[2] >>> 7, (124 & a[2]) >>> 2);
								var d = self.navigator.userAgent.toLowerCase();
								return d.indexOf("firefox") === -1 ? d.indexOf("android") === -1 ? (s = 5, c = i, o = [
									,
									,
									,
									,
								], i >= 6 ? c = i - 3 : u === 1 && (s = 2, o = [, ,], c = i)) : (s = 2, o = [, ,], c = i) : i >= 6 ? (s = 5, o = [
									,
									,
									,
									,
								], c = i - 3) : (s = 2, o = [, ,], c = i), o[0] = s << 3, o[0] |= (15 & i) >>> 1, o[1] = (15 & i) << 7, o[1] |= (15 & u) << 3, s === 5 && (o[1] |= (15 & c) >>> 1, o[2] = (1 & c) << 7, o[2] |= 8, o[3] = 0), {
									config: o,
									samplingRate: l,
									channelCount: u,
									codec: "mp4a.40." + s,
									originalCodec: "mp4a.40." + r
								};
							}
							this._onError(g.a.FORMAT_ERROR, "Flv: AAC invalid channel configuration");
						}
					}, e.prototype._parseMP3AudioData = function(e, t, n, r) {
						if (!(n < 4)) {
							this._littleEndian;
							var i = new Uint8Array(e, t, n), o = null;
							if (r) {
								if (i[0] !== 255) return;
								var s = i[1] >>> 3 & 3, c = (6 & i[1]) >> 1, l = (240 & i[2]) >>> 4, u = (12 & i[2]) >>> 2, d = (i[3] >>> 6 & 3) == 3 ? 1 : 2, f = 0, p = 0;
								switch (s) {
									case 0:
										f = this._mpegAudioV25SampleRateTable[u];
										break;
									case 2:
										f = this._mpegAudioV20SampleRateTable[u];
										break;
									case 3: f = this._mpegAudioV10SampleRateTable[u];
								}
								switch (c) {
									case 1:
										l < this._mpegAudioL3BitRateTable.length && (p = this._mpegAudioL3BitRateTable[l]);
										break;
									case 2:
										l < this._mpegAudioL2BitRateTable.length && (p = this._mpegAudioL2BitRateTable[l]);
										break;
									case 3: l < this._mpegAudioL1BitRateTable.length && (p = this._mpegAudioL1BitRateTable[l]);
								}
								o = {
									bitRate: p,
									samplingRate: f,
									channelCount: d,
									codec: "mp3",
									originalCodec: "mp3"
								};
							} else o = i;
							return o;
						}
						a.a.w(this.TAG, "Flv: Invalid MP3 packet, header missing!");
					}, e.prototype._parseVideoData = function(e, t, n, r, i) {
						if (n <= 1) a.a.w(this.TAG, "Flv: Invalid video packet, missing VideoData payload!");
						else if (!0 !== this._hasVideoFlagOverrided || !1 !== this._hasVideo) {
							var o = new Uint8Array(e, t, n)[0], s = (112 & o) >>> 4;
							if (128 & o) {
								var c = 15 & o, l = String.fromCharCode.apply(String, new Uint8Array(e, t, n).slice(1, 5));
								if (l !== "hvc1") return void this._onError(g.a.CODEC_UNSUPPORTED, "Flv: Unsupported codec in video frame: " + l);
								this._parseEnhancedHEVCVideoPacket(e, t + 5, n - 5, r, i, s, c);
							} else {
								var u = 15 & o;
								if (u === 7) this._parseAVCVideoPacket(e, t + 1, n - 1, r, i, s);
								else {
									if (u !== 12) return void this._onError(g.a.CODEC_UNSUPPORTED, "Flv: Unsupported codec in video frame: " + u);
									this._parseHEVCVideoPacket(e, t + 1, n - 1, r, i, s);
								}
							}
						}
					}, e.prototype._parseAVCVideoPacket = function(e, t, n, r, i, o) {
						if (n < 4) a.a.w(this.TAG, "Flv: Invalid AVC packet, missing AVCPacketType or/and CompositionTime");
						else {
							var s = this._littleEndian, c = new DataView(e, t, n), l = c.getUint8(0), u = (16777215 & c.getUint32(0, !s)) << 8 >> 8;
							if (l === 0) this._parseAVCDecoderConfigurationRecord(e, t + 4, n - 4);
							else if (l === 1) this._parseAVCVideoData(e, t + 4, n - 4, r, i, o, u);
							else if (l !== 2) return void this._onError(g.a.FORMAT_ERROR, "Flv: Invalid video packet type " + l);
						}
					}, e.prototype._parseHEVCVideoPacket = function(e, t, n, r, i, o) {
						if (n < 4) a.a.w(this.TAG, "Flv: Invalid HEVC packet, missing HEVCPacketType or/and CompositionTime");
						else {
							var s = this._littleEndian, c = new DataView(e, t, n), l = c.getUint8(0), u = (16777215 & c.getUint32(0, !s)) << 8 >> 8;
							if (l === 0) this._parseHEVCDecoderConfigurationRecord(e, t + 4, n - 4);
							else if (l === 1) this._parseHEVCVideoData(e, t + 4, n - 4, r, i, o, u);
							else if (l !== 2) return void this._onError(g.a.FORMAT_ERROR, "Flv: Invalid video packet type " + l);
						}
					}, e.prototype._parseEnhancedHEVCVideoPacket = function(e, t, n, r, i, o, s) {
						if (n < 4) a.a.w(this.TAG, "Flv: Invalid HEVC packet, missing HEVCPacketType or/and CompositionTime");
						else {
							var c = this._littleEndian, l = new DataView(e, t, n);
							if (s === 0) this._parseHEVCDecoderConfigurationRecord(e, t, n);
							else if (s === 1) {
								var u = (4294967040 & l.getUint32(0, !c)) >> 8;
								this._parseHEVCVideoData(e, t + 3, n - 3, r, i, o, u);
							} else if (s === 3) this._parseHEVCVideoData(e, t, n, r, i, o, 0);
							else if (s !== 2) return void this._onError(g.a.FORMAT_ERROR, "Flv: Invalid video packet type " + s);
						}
					}, e.prototype._parseAVCDecoderConfigurationRecord = function(e, t, n) {
						if (n < 7) a.a.w(this.TAG, "Flv: Invalid AVCDecoderConfigurationRecord, lack of data!");
						else {
							var r = this._videoMetadata, i = this._videoTrack, o = this._littleEndian, s = new DataView(e, t, n);
							if (r) {
								if (r.avcc !== void 0) {
									if (x(new Uint8Array(e, t, n), r.avcc)) return;
									a.a.w(this.TAG, "AVCDecoderConfigurationRecord has been changed, re-generate initialization segment");
								}
							} else !1 === this._hasVideo && !1 === this._hasVideoFlagOverrided && (this._hasVideo = !0, this._mediaInfo.hasVideo = !0), (r = this._videoMetadata = {}).type = "video", r.id = i.id, r.timescale = this._timescale, r.duration = this._duration;
							var c = s.getUint8(0), l = s.getUint8(1);
							if (s.getUint8(2), s.getUint8(3), c === 1 && l !== 0) if (this._naluLengthSize = 1 + (3 & s.getUint8(4)), this._naluLengthSize === 3 || this._naluLengthSize === 4) {
								var u = 31 & s.getUint8(5);
								if (u !== 0) {
									u > 1 && a.a.w(this.TAG, "Flv: Strange AVCDecoderConfigurationRecord: SPS Count = " + u);
									for (var d = 6, f = 0; f < u; f++) {
										var p = s.getUint16(d, !o);
										if (d += 2, p !== 0) {
											var m = new Uint8Array(e, t + d, p);
											d += p;
											var _ = h.parseSPS(m);
											if (f === 0) {
												r.codecWidth = _.codec_size.width, r.codecHeight = _.codec_size.height, r.presentWidth = _.present_size.width, r.presentHeight = _.present_size.height, r.profile = _.profile_string, r.level = _.level_string, r.bitDepth = _.bit_depth, r.chromaFormat = _.chroma_format, r.sarRatio = _.sar_ratio, r.frameRate = _.frame_rate, !1 !== _.frame_rate.fixed && _.frame_rate.fps_num !== 0 && _.frame_rate.fps_den !== 0 || (r.frameRate = this._referenceFrameRate);
												var v = r.frameRate.fps_den, y = r.frameRate.fps_num;
												r.refSampleDuration = r.timescale * (v / y);
												for (var b = m.subarray(1, 4), S = "avc1.", C = 0; C < 3; C++) {
													var w = b[C].toString(16);
													w.length < 2 && (w = "0" + w), S += w;
												}
												r.codec = S;
												var T = this._mediaInfo;
												T.width = r.codecWidth, T.height = r.codecHeight, T.fps = r.frameRate.fps, T.profile = r.profile, T.level = r.level, T.refFrames = _.ref_frames, T.chromaFormat = _.chroma_format_string, T.sarNum = r.sarRatio.width, T.sarDen = r.sarRatio.height, T.videoCodec = S, T.hasAudio ? T.audioCodec != null && (T.mimeType = "video/x-flv; codecs=\"" + T.videoCodec + "," + T.audioCodec + "\"") : T.mimeType = "video/x-flv; codecs=\"" + T.videoCodec + "\"", T.isComplete() && this._onMediaInfo(T);
											}
										}
									}
									var E = s.getUint8(d);
									if (E !== 0) {
										for (E > 1 && a.a.w(this.TAG, "Flv: Strange AVCDecoderConfigurationRecord: PPS Count = " + E), d++, f = 0; f < E; f++) p = s.getUint16(d, !o), d += 2, p !== 0 && (d += p);
										r.avcc = new Uint8Array(n), r.avcc.set(new Uint8Array(e, t, n), 0), a.a.v(this.TAG, "Parsed AVCDecoderConfigurationRecord"), this._isInitialMetadataDispatched() ? this._dispatch && (this._audioTrack.length || this._videoTrack.length) && this._onDataAvailable(this._audioTrack, this._videoTrack) : this._videoInitialMetadataDispatched = !0, this._dispatch = !1, this._onTrackMetadata("video", r);
									} else this._onError(g.a.FORMAT_ERROR, "Flv: Invalid AVCDecoderConfigurationRecord: No PPS");
								} else this._onError(g.a.FORMAT_ERROR, "Flv: Invalid AVCDecoderConfigurationRecord: No SPS");
							} else this._onError(g.a.FORMAT_ERROR, "Flv: Strange NaluLengthSizeMinusOne: " + (this._naluLengthSize - 1));
							else this._onError(g.a.FORMAT_ERROR, "Flv: Invalid AVCDecoderConfigurationRecord");
						}
					}, e.prototype._parseHEVCDecoderConfigurationRecord = function(e, t, n) {
						if (n < 22) a.a.w(this.TAG, "Flv: Invalid HEVCDecoderConfigurationRecord, lack of data!");
						else {
							var r = this._videoMetadata, i = this._videoTrack, o = this._littleEndian, s = new DataView(e, t, n);
							if (r) {
								if (r.hvcc !== void 0) {
									if (x(new Uint8Array(e, t, n), r.hvcc)) return;
									a.a.w(this.TAG, "HEVCDecoderConfigurationRecord has been changed, re-generate initialization segment");
								}
							} else !1 === this._hasVideo && !1 === this._hasVideoFlagOverrided && (this._hasVideo = !0, this._mediaInfo.hasVideo = !0), (r = this._videoMetadata = {}).type = "video", r.id = i.id, r.timescale = this._timescale, r.duration = this._duration;
							var c = s.getUint8(0), l = 31 & s.getUint8(1);
							if (c === 1 && l !== 0) if (this._naluLengthSize = 1 + (3 & s.getUint8(21)), this._naluLengthSize === 3 || this._naluLengthSize === 4) {
								for (var u = s.getUint8(22), d = 0, f = 23; d < u; d++) {
									var p = 63 & s.getUint8(f + 0), m = s.getUint16(f + 1, !o);
									f += 3;
									for (var h = 0; h < m; h++) {
										var v = s.getUint16(f + 0, !o);
										if (h === 0) if (p === 33) {
											f += 2;
											var y = new Uint8Array(e, t + f, v), b = _.parseSPS(y);
											r.codecWidth = b.codec_size.width, r.codecHeight = b.codec_size.height, r.presentWidth = b.present_size.width, r.presentHeight = b.present_size.height, r.profile = b.profile_string, r.level = b.level_string, r.bitDepth = b.bit_depth, r.chromaFormat = b.chroma_format, r.sarRatio = b.sar_ratio, r.frameRate = b.frame_rate, !1 !== b.frame_rate.fixed && b.frame_rate.fps_num !== 0 && b.frame_rate.fps_den !== 0 || (r.frameRate = this._referenceFrameRate);
											var S = r.frameRate.fps_den, C = r.frameRate.fps_num;
											r.refSampleDuration = r.timescale * (S / C), r.codec = b.codec_mimetype;
											var w = this._mediaInfo;
											w.width = r.codecWidth, w.height = r.codecHeight, w.fps = r.frameRate.fps, w.profile = r.profile, w.level = r.level, w.refFrames = b.ref_frames, w.chromaFormat = b.chroma_format_string, w.sarNum = r.sarRatio.width, w.sarDen = r.sarRatio.height, w.videoCodec = b.codec_mimetype, w.hasAudio ? w.audioCodec != null && (w.mimeType = "video/x-flv; codecs=\"" + w.videoCodec + "," + w.audioCodec + "\"") : w.mimeType = "video/x-flv; codecs=\"" + w.videoCodec + "\"", w.isComplete() && this._onMediaInfo(w), f += v;
										} else f += 2 + v;
										else f += 2 + v;
									}
								}
								r.hvcc = new Uint8Array(n), r.hvcc.set(new Uint8Array(e, t, n), 0), a.a.v(this.TAG, "Parsed HEVCDecoderConfigurationRecord"), this._isInitialMetadataDispatched() ? this._dispatch && (this._audioTrack.length || this._videoTrack.length) && this._onDataAvailable(this._audioTrack, this._videoTrack) : this._videoInitialMetadataDispatched = !0, this._dispatch = !1, this._onTrackMetadata("video", r);
							} else this._onError(g.a.FORMAT_ERROR, "Flv: Strange NaluLengthSizeMinusOne: " + (this._naluLengthSize - 1));
							else this._onError(g.a.FORMAT_ERROR, "Flv: Invalid HEVCDecoderConfigurationRecord");
						}
					}, e.prototype._parseAVCVideoData = function(e, t, n, r, i, o, s) {
						for (var c = this._littleEndian, l = new DataView(e, t, n), u = [], d = 0, f = 0, p = this._naluLengthSize, m = this._timestampBase + r, h = o === 1, g = !1; f < n;) {
							if (f + 4 >= n) {
								a.a.w(this.TAG, "Malformed Nalu near timestamp " + m + ", offset = " + f + ", dataSize = " + n);
								break;
							}
							var _ = l.getUint32(f, !c);
							if (p === 3 && (_ >>>= 8), _ > n - p) return void a.a.w(this.TAG, "Malformed Nalus near timestamp " + m + ", NaluSize > DataSize!");
							var v = 31 & l.getUint8(f + p);
							v === 6 && (g = l.getUint8(f + p + 1));
							var y = new Uint8Array(e, t + f, p + _);
							if (v === 5 && (h = !0, g == 1)) {
								var b = new Uint8Array(e, t + f + p + 1, p + _ - (p + 1) - (p + _ - (p + 1)) % 16), x = new C.a.ModeOfOperation.cbc(T, E).decrypt(b);
								y.set(x, p + 1);
							}
							var S = {
								type: v,
								data: y
							};
							u.push(S), d += y.byteLength, f += p + _;
						}
						if (u.length) {
							var w = this._videoTrack, D = {
								units: u,
								length: d,
								isKeyframe: h,
								dts: m,
								cts: s,
								pts: m + s
							};
							h && (D.fileposition = i), w.samples.push(D), w.length += d;
						}
					}, e.prototype._parseHEVCVideoData = function(e, t, n, r, i, o, s) {
						for (var c = this._littleEndian, l = new DataView(e, t, n), u = [], d = 0, f = 0, p = this._naluLengthSize, m = this._timestampBase + r, h = o === 1; f < n;) {
							if (f + 4 >= n) {
								a.a.w(this.TAG, "Malformed Nalu near timestamp " + m + ", offset = " + f + ", dataSize = " + n);
								break;
							}
							var g = l.getUint32(f, !c);
							if (p === 3 && (g >>>= 8), g > n - p) return void a.a.w(this.TAG, "Malformed Nalus near timestamp " + m + ", NaluSize > DataSize!");
							var _ = 31 & l.getUint8(f + p);
							_ !== 19 && _ !== 20 || (h = !0);
							var v = new Uint8Array(e, t + f, p + g), y = {
								type: _,
								data: v
							};
							u.push(y), d += v.byteLength, f += p + g;
						}
						if (u.length) {
							var b = this._videoTrack, x = {
								units: u,
								length: d,
								isKeyframe: h,
								dts: m,
								cts: s,
								pts: m + s
							};
							h && (x.fileposition = i), b.samples.push(x), b.length += d;
						}
					}, e;
				}(), O = function() {
					function e() {}
					return e.prototype.destroy = function() {
						this.onError = null, this.onMediaInfo = null, this.onMetaDataArrived = null, this.onTrackMetadata = null, this.onDataAvailable = null, this.onTimedID3Metadata = null, this.onSMPTE2038Metadata = null, this.onSCTE35Metadata = null, this.onPESPrivateData = null, this.onPESPrivateDataDescriptor = null;
					}, e;
				}(), k = function() {
					this.program_pmt_pid = {};
				};
				(function(e) {
					e[e.kMPEG1Audio = 3] = "kMPEG1Audio", e[e.kMPEG2Audio = 4] = "kMPEG2Audio", e[e.kPESPrivateData = 6] = "kPESPrivateData", e[e.kADTSAAC = 15] = "kADTSAAC", e[e.kLOASAAC = 17] = "kLOASAAC", e[e.kAC3 = 129] = "kAC3", e[e.kID3 = 21] = "kID3", e[e.kSCTE35 = 134] = "kSCTE35", e[e.kH264 = 27] = "kH264", e[e.kH265 = 36] = "kH265";
				})(w ||= {});
				var A, j = function() {
					this.pid_stream_type = {}, this.common_pids = {
						h264: void 0,
						h265: void 0,
						adts_aac: void 0,
						loas_aac: void 0,
						opus: void 0,
						ac3: void 0,
						mp3: void 0
					}, this.pes_private_data_pids = {}, this.timed_id3_pids = {}, this.scte_35_pids = {}, this.smpte2038_pids = {};
				}, M = function() {}, N = function() {}, P = function() {
					this.slices = [], this.total_length = 0, this.expected_length = 0, this.file_position = 0;
				};
				(function(e) {
					e[e.kUnspecified = 0] = "kUnspecified", e[e.kSliceNonIDR = 1] = "kSliceNonIDR", e[e.kSliceDPA = 2] = "kSliceDPA", e[e.kSliceDPB = 3] = "kSliceDPB", e[e.kSliceDPC = 4] = "kSliceDPC", e[e.kSliceIDR = 5] = "kSliceIDR", e[e.kSliceSEI = 6] = "kSliceSEI", e[e.kSliceSPS = 7] = "kSliceSPS", e[e.kSlicePPS = 8] = "kSlicePPS", e[e.kSliceAUD = 9] = "kSliceAUD", e[e.kEndOfSequence = 10] = "kEndOfSequence", e[e.kEndOfStream = 11] = "kEndOfStream", e[e.kFiller = 12] = "kFiller", e[e.kSPSExt = 13] = "kSPSExt", e[e.kReserved0 = 14] = "kReserved0";
				})(A ||= {});
				var F, I, L = function() {}, ee = function(e) {
					var t = e.data.byteLength;
					this.type = e.type, this.data = new Uint8Array(4 + t), new DataView(this.data.buffer).setUint32(0, t), this.data.set(e.data, 4);
				}, R = function() {
					function e(e) {
						this.TAG = "H264AnnexBParser", this.current_startcode_offset_ = 0, this.eof_flag_ = !1, this.data_ = e, this.current_startcode_offset_ = this.findNextStartCodeOffset(0), this.eof_flag_ && a.a.e(this.TAG, "Could not find H264 startcode until payload end!");
					}
					return e.prototype.findNextStartCodeOffset = function(e) {
						for (var t = e, n = this.data_;;) {
							if (t + 3 >= n.byteLength) return this.eof_flag_ = !0, n.byteLength;
							var r = n[t + 0] << 24 | n[t + 1] << 16 | n[t + 2] << 8 | n[t + 3], i = n[t + 0] << 16 | n[t + 1] << 8 | n[t + 2];
							if (r === 1 || i === 1) return t;
							t++;
						}
					}, e.prototype.readNextNaluPayload = function() {
						for (var e = this.data_, t = null; t == null && !this.eof_flag_;) {
							var n = this.current_startcode_offset_, r = 31 & e[n += (e[n] << 24 | e[n + 1] << 16 | e[n + 2] << 8 | e[n + 3]) == 1 ? 4 : 3], i = (128 & e[n]) >>> 7, a = this.findNextStartCodeOffset(n);
							if (this.current_startcode_offset_ = a, !(r >= A.kReserved0) && i === 0) {
								var o = e.subarray(n, a);
								(t = new L()).type = r, t.data = o;
							}
						}
						return t;
					}, e;
				}(), z = function() {
					function e(e, t, n) {
						var r = 8 + e.byteLength + 1 + 2 + t.byteLength, i = !1;
						e[3] !== 66 && e[3] !== 77 && e[3] !== 88 && (i = !0, r += 4);
						var a = this.data = new Uint8Array(r);
						a[0] = 1, a[1] = e[1], a[2] = e[2], a[3] = e[3], a[4] = 255, a[5] = 225;
						var o = e.byteLength;
						a[6] = o >>> 8, a[7] = 255 & o;
						var s = 8;
						a.set(e, 8), a[s += o] = 1;
						var c = t.byteLength;
						a[s + 1] = c >>> 8, a[s + 2] = 255 & c, a.set(t, s + 3), s += 3 + c, i && (a[s] = 252 | n.chroma_format_idc, a[s + 1] = 248 | n.bit_depth_luma - 8, a[s + 2] = 248 | n.bit_depth_chroma - 8, a[s + 3] = 0, s += 4);
					}
					return e.prototype.getData = function() {
						return this.data;
					}, e;
				}();
				(function(e) {
					e[e.kNull = 0] = "kNull", e[e.kAACMain = 1] = "kAACMain", e[e.kAAC_LC = 2] = "kAAC_LC", e[e.kAAC_SSR = 3] = "kAAC_SSR", e[e.kAAC_LTP = 4] = "kAAC_LTP", e[e.kAAC_SBR = 5] = "kAAC_SBR", e[e.kAAC_Scalable = 6] = "kAAC_Scalable", e[e.kLayer1 = 32] = "kLayer1", e[e.kLayer2 = 33] = "kLayer2", e[e.kLayer3 = 34] = "kLayer3";
				})(F ||= {}), function(e) {
					e[e.k96000Hz = 0] = "k96000Hz", e[e.k88200Hz = 1] = "k88200Hz", e[e.k64000Hz = 2] = "k64000Hz", e[e.k48000Hz = 3] = "k48000Hz", e[e.k44100Hz = 4] = "k44100Hz", e[e.k32000Hz = 5] = "k32000Hz", e[e.k24000Hz = 6] = "k24000Hz", e[e.k22050Hz = 7] = "k22050Hz", e[e.k16000Hz = 8] = "k16000Hz", e[e.k12000Hz = 9] = "k12000Hz", e[e.k11025Hz = 10] = "k11025Hz", e[e.k8000Hz = 11] = "k8000Hz", e[e.k7350Hz = 12] = "k7350Hz";
				}(I ||= {});
				var B, V, te = [
					96e3,
					88200,
					64e3,
					48e3,
					44100,
					32e3,
					24e3,
					22050,
					16e3,
					12e3,
					11025,
					8e3,
					7350
				], ne = (B = function(e, t) {
					return (B = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
						e.__proto__ = t;
					} || function(e, t) {
						for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
					})(e, t);
				}, function(e, t) {
					function n() {
						this.constructor = e;
					}
					B(e, t), e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
				}), re = function() {}, H = function(e) {
					function t() {
						return e !== null && e.apply(this, arguments) || this;
					}
					return ne(t, e), t;
				}(re), U = function() {
					function e(e) {
						this.TAG = "AACADTSParser", this.data_ = e, this.current_syncword_offset_ = this.findNextSyncwordOffset(0), this.eof_flag_ && a.a.e(this.TAG, "Could not found ADTS syncword until payload end");
					}
					return e.prototype.findNextSyncwordOffset = function(e) {
						for (var t = e, n = this.data_;;) {
							if (t + 7 >= n.byteLength) return this.eof_flag_ = !0, n.byteLength;
							if ((n[t + 0] << 8 | n[t + 1]) >>> 4 == 4095) return t;
							t++;
						}
					}, e.prototype.readNextAACFrame = function() {
						for (var e = this.data_, t = null; t == null && !this.eof_flag_;) {
							var n = this.current_syncword_offset_, r = (8 & e[n + 1]) >>> 3, i = (6 & e[n + 1]) >>> 1, a = 1 & e[n + 1], o = (192 & e[n + 2]) >>> 6, s = (60 & e[n + 2]) >>> 2, c = (1 & e[n + 2]) << 2 | (192 & e[n + 3]) >>> 6, l = (3 & e[n + 3]) << 11 | e[n + 4] << 3 | (224 & e[n + 5]) >>> 5;
							if (e[n + 6], n + l > this.data_.byteLength) {
								this.eof_flag_ = !0, this.has_last_incomplete_data = !0;
								break;
							}
							var u = a === 1 ? 7 : 9, d = l - u;
							n += u;
							var f = this.findNextSyncwordOffset(n + d);
							if (this.current_syncword_offset_ = f, (r === 0 || r === 1) && i === 0) {
								var p = e.subarray(n, n + d);
								(t = new re()).audio_object_type = o + 1, t.sampling_freq_index = s, t.sampling_frequency = te[s], t.channel_config = c, t.data = p;
							}
						}
						return t;
					}, e.prototype.hasIncompleteData = function() {
						return this.has_last_incomplete_data;
					}, e.prototype.getIncompleteData = function() {
						return this.has_last_incomplete_data ? this.data_.subarray(this.current_syncword_offset_) : null;
					}, e;
				}(), W = function() {
					function e(e) {
						this.TAG = "AACLOASParser", this.data_ = e, this.current_syncword_offset_ = this.findNextSyncwordOffset(0), this.eof_flag_ && a.a.e(this.TAG, "Could not found LOAS syncword until payload end");
					}
					return e.prototype.findNextSyncwordOffset = function(e) {
						for (var t = e, n = this.data_;;) {
							if (t + 1 >= n.byteLength) return this.eof_flag_ = !0, n.byteLength;
							if ((n[t + 0] << 3 | n[t + 1] >>> 5) == 695) return t;
							t++;
						}
					}, e.prototype.getLATMValue = function(e) {
						for (var t = e.readBits(2), n = 0, r = 0; r <= t; r++) n <<= 8, n |= e.readByte();
						return n;
					}, e.prototype.readNextAACFrame = function(e) {
						for (var t = this.data_, n = null; n == null && !this.eof_flag_;) {
							var r = this.current_syncword_offset_, i = (31 & t[r + 1]) << 8 | t[r + 2];
							if (r + 3 + i >= this.data_.byteLength) {
								this.eof_flag_ = !0, this.has_last_incomplete_data = !0;
								break;
							}
							var o = new m(t.subarray(r + 3, r + 3 + i)), s = null;
							if (o.readBool()) {
								if (e == null) {
									a.a.w(this.TAG, "StreamMuxConfig Missing"), this.current_syncword_offset_ = this.findNextSyncwordOffset(r + 3 + i), o.destroy();
									continue;
								}
								s = e;
							} else {
								var c = o.readBool();
								if (c && o.readBool()) {
									a.a.e(this.TAG, "audioMuxVersionA is Not Supported"), o.destroy();
									break;
								}
								if (c && this.getLATMValue(o), !o.readBool()) {
									a.a.e(this.TAG, "allStreamsSameTimeFraming zero is Not Supported"), o.destroy();
									break;
								}
								if (o.readBits(6) !== 0) {
									a.a.e(this.TAG, "more than 2 numSubFrames Not Supported"), o.destroy();
									break;
								}
								if (o.readBits(4) !== 0) {
									a.a.e(this.TAG, "more than 2 numProgram Not Supported"), o.destroy();
									break;
								}
								if (o.readBits(3) !== 0) {
									a.a.e(this.TAG, "more than 2 numLayer Not Supported"), o.destroy();
									break;
								}
								var l = c ? this.getLATMValue(o) : 0, u = o.readBits(5);
								l -= 5;
								var d = o.readBits(4);
								l -= 4;
								var f = o.readBits(4);
								l -= 4, o.readBits(3), (l -= 3) > 0 && o.readBits(l);
								var p = o.readBits(3);
								if (p !== 0) {
									a.a.e(this.TAG, "frameLengthType = " + p + ". Only frameLengthType = 0 Supported"), o.destroy();
									break;
								}
								o.readByte();
								var h = o.readBool();
								if (h) if (c) this.getLATMValue(o);
								else {
									for (var g = 0;;) {
										g <<= 8;
										var _ = o.readBool();
										if (g += o.readByte(), !_) break;
									}
									console.log(g);
								}
								o.readBool() && o.readByte(), (s = new H()).audio_object_type = u, s.sampling_freq_index = d, s.sampling_frequency = te[s.sampling_freq_index], s.channel_config = f, s.other_data_present = h;
							}
							for (var v = 0;;) {
								var y = o.readByte();
								if (v += y, y !== 255) break;
							}
							for (var b = new Uint8Array(v), x = 0; x < v; x++) b[x] = o.readByte();
							(n = new H()).audio_object_type = s.audio_object_type, n.sampling_freq_index = s.sampling_freq_index, n.sampling_frequency = te[s.sampling_freq_index], n.channel_config = s.channel_config, n.other_data_present = s.other_data_present, n.data = b, this.current_syncword_offset_ = this.findNextSyncwordOffset(r + 3 + i);
						}
						return n;
					}, e.prototype.hasIncompleteData = function() {
						return this.has_last_incomplete_data;
					}, e.prototype.getIncompleteData = function() {
						return this.has_last_incomplete_data ? this.data_.subarray(this.current_syncword_offset_) : null;
					}, e;
				}(), G = function(e) {
					var t = null, n = e.audio_object_type, r = e.audio_object_type, i = e.sampling_freq_index, a = e.channel_config, o = 0, s = navigator.userAgent.toLowerCase();
					s.indexOf("firefox") === -1 ? s.indexOf("android") === -1 ? (r = 5, o = i, t = [
						,
						,
						,
						,
					], i >= 6 ? o = i - 3 : a === 1 && (r = 2, t = [, ,], o = i)) : (r = 2, t = [, ,], o = i) : i >= 6 ? (r = 5, t = [
						,
						,
						,
						,
					], o = i - 3) : (r = 2, t = [, ,], o = i), t[0] = r << 3, t[0] |= (15 & i) >>> 1, t[1] = (15 & i) << 7, t[1] |= (15 & a) << 3, r === 5 && (t[1] |= (15 & o) >>> 1, t[2] = (1 & o) << 7, t[2] |= 8, t[3] = 0), this.config = t, this.sampling_rate = te[i], this.channel_count = a, this.codec_mimetype = "mp4a.40." + r, this.original_codec_mimetype = "mp4a.40." + n;
				}, K = function() {}, ie = function() {};
				(function(e) {
					e[e.kSpliceNull = 0] = "kSpliceNull", e[e.kSpliceSchedule = 4] = "kSpliceSchedule", e[e.kSpliceInsert = 5] = "kSpliceInsert", e[e.kTimeSignal = 6] = "kTimeSignal", e[e.kBandwidthReservation = 7] = "kBandwidthReservation", e[e.kPrivateCommand = 255] = "kPrivateCommand";
				})(V ||= {});
				var q, ae = function(e) {
					var t = e.readBool();
					return t ? (e.readBits(6), {
						time_specified_flag: t,
						pts_time: 4 * e.readBits(31) + e.readBits(2)
					}) : (e.readBits(7), { time_specified_flag: t });
				}, oe = function(e) {
					var t = e.readBool();
					return e.readBits(6), {
						auto_return: t,
						duration: 4 * e.readBits(31) + e.readBits(2)
					};
				}, se = function(e, t) {
					var n = t.readBits(8);
					return e ? { component_tag: n } : {
						component_tag: n,
						splice_time: ae(t)
					};
				}, J = function(e) {
					return {
						component_tag: e.readBits(8),
						utc_splice_time: e.readBits(32)
					};
				}, ce = function(e) {
					var t = e.readBits(32), n = e.readBool();
					e.readBits(7);
					var r = {
						splice_event_id: t,
						splice_event_cancel_indicator: n
					};
					if (n) return r;
					if (r.out_of_network_indicator = e.readBool(), r.program_splice_flag = e.readBool(), r.duration_flag = e.readBool(), e.readBits(5), r.program_splice_flag) r.utc_splice_time = e.readBits(32);
					else {
						r.component_count = e.readBits(8), r.components = [];
						for (var i = 0; i < r.component_count; i++) r.components.push(J(e));
					}
					return r.duration_flag && (r.break_duration = oe(e)), r.unique_program_id = e.readBits(16), r.avail_num = e.readBits(8), r.avails_expected = e.readBits(8), r;
				}, le = function(e, t, n, r) {
					return {
						descriptor_tag: e,
						descriptor_length: t,
						identifier: n,
						provider_avail_id: r.readBits(32)
					};
				}, ue = function(e, t, n, r) {
					var i = r.readBits(8), a = r.readBits(3);
					r.readBits(5);
					for (var o = "", s = 0; s < a; s++) o += String.fromCharCode(r.readBits(8));
					return {
						descriptor_tag: e,
						descriptor_length: t,
						identifier: n,
						preroll: i,
						dtmf_count: a,
						DTMF_char: o
					};
				}, de = function(e) {
					var t = e.readBits(8);
					return e.readBits(7), {
						component_tag: t,
						pts_offset: 4 * e.readBits(31) + e.readBits(2)
					};
				}, fe = function(e, t, n, r) {
					var i = r.readBits(32), a = r.readBool();
					r.readBits(7);
					var o = {
						descriptor_tag: e,
						descriptor_length: t,
						identifier: n,
						segmentation_event_id: i,
						segmentation_event_cancel_indicator: a
					};
					if (a) return o;
					if (o.program_segmentation_flag = r.readBool(), o.segmentation_duration_flag = r.readBool(), o.delivery_not_restricted_flag = r.readBool(), o.delivery_not_restricted_flag ? r.readBits(5) : (o.web_delivery_allowed_flag = r.readBool(), o.no_regional_blackout_flag = r.readBool(), o.archive_allowed_flag = r.readBool(), o.device_restrictions = r.readBits(2)), !o.program_segmentation_flag) {
						o.component_count = r.readBits(8), o.components = [];
						for (var s = 0; s < o.component_count; s++) o.components.push(de(r));
					}
					o.segmentation_duration_flag && (o.segmentation_duration = r.readBits(40)), o.segmentation_upid_type = r.readBits(8), o.segmentation_upid_length = r.readBits(8);
					var c = new Uint8Array(o.segmentation_upid_length);
					for (s = 0; s < o.segmentation_upid_length; s++) c[s] = r.readBits(8);
					return o.segmentation_upid = c.buffer, o.segmentation_type_id = r.readBits(8), o.segment_num = r.readBits(8), o.segments_expected = r.readBits(8), o.segmentation_type_id !== 52 && o.segmentation_type_id !== 54 && o.segmentation_type_id !== 56 && o.segmentation_type_id !== 58 || (o.sub_segment_num = r.readBits(8), o.sub_segments_expected = r.readBits(8)), o;
				}, Y = function(e, t, n, r) {
					return {
						descriptor_tag: e,
						descriptor_length: t,
						identifier: n,
						TAI_seconds: r.readBits(48),
						TAI_ns: r.readBits(32),
						UTC_offset: r.readBits(16)
					};
				}, pe = function(e) {
					return {
						component_tag: e.readBits(8),
						ISO_code: String.fromCharCode(e.readBits(8), e.readBits(8), e.readBits(8)),
						Bit_Stream_Mode: e.readBits(3),
						Num_Channels: e.readBits(4),
						Full_Srvc_Audio: e.readBool()
					};
				}, me = function(e, t, n, r) {
					for (var i = r.readBits(4), a = [], o = 0; o < i; o++) a.push(pe(r));
					return {
						descriptor_tag: e,
						descriptor_length: t,
						identifier: n,
						audio_count: i,
						components: a
					};
				}, he = function(e) {
					var t = new m(e), n = t.readBits(8), r = t.readBool(), i = t.readBool();
					t.readBits(2);
					var a = t.readBits(12), o = t.readBits(8), s = t.readBool(), c = t.readBits(6), l = 4 * t.readBits(31) + t.readBits(2), u = t.readBits(8), d = t.readBits(12), f = t.readBits(12), p = t.readBits(8), h = null;
					p === V.kSpliceNull ? h = {} : p === V.kSpliceSchedule ? h = function(e) {
						for (var t = e.readBits(8), n = [], r = 0; r < t; r++) n.push(ce(e));
						return {
							splice_count: t,
							events: n
						};
					}(t) : p === V.kSpliceInsert ? h = function(e) {
						var t = e.readBits(32), n = e.readBool();
						e.readBits(7);
						var r = {
							splice_event_id: t,
							splice_event_cancel_indicator: n
						};
						if (n) return r;
						if (r.out_of_network_indicator = e.readBool(), r.program_splice_flag = e.readBool(), r.duration_flag = e.readBool(), r.splice_immediate_flag = e.readBool(), e.readBits(4), r.program_splice_flag && !r.splice_immediate_flag && (r.splice_time = ae(e)), !r.program_splice_flag) {
							r.component_count = e.readBits(8), r.components = [];
							for (var i = 0; i < r.component_count; i++) r.components.push(se(r.splice_immediate_flag, e));
						}
						return r.duration_flag && (r.break_duration = oe(e)), r.unique_program_id = e.readBits(16), r.avail_num = e.readBits(8), r.avails_expected = e.readBits(8), r;
					}(t) : p === V.kTimeSignal ? h = function(e) {
						return { splice_time: ae(e) };
					}(t) : p === V.kBandwidthReservation ? h = {} : p === V.kPrivateCommand ? h = function(e, t) {
						for (var n = String.fromCharCode(t.readBits(8), t.readBits(8), t.readBits(8), t.readBits(8)), r = new Uint8Array(e - 4), i = 0; i < e - 4; i++) r[i] = t.readBits(8);
						return {
							identifier: n,
							private_data: r.buffer
						};
					}(f, t) : t.readBits(8 * f);
					for (var g = [], _ = t.readBits(16), v = 0; v < _;) {
						var y = t.readBits(8), b = t.readBits(8), x = String.fromCharCode(t.readBits(8), t.readBits(8), t.readBits(8), t.readBits(8));
						y === 0 ? g.push(le(y, b, x, t)) : y === 1 ? g.push(ue(y, b, x, t)) : y === 2 ? g.push(fe(y, b, x, t)) : y === 3 ? g.push(Y(y, b, x, t)) : y === 4 ? g.push(me(y, b, x, t)) : t.readBits(8 * (b - 4)), v += 2 + b;
					}
					var S = {
						table_id: n,
						section_syntax_indicator: r,
						private_indicator: i,
						section_length: a,
						protocol_version: o,
						encrypted_packet: s,
						encryption_algorithm: c,
						pts_adjustment: l,
						cw_index: u,
						tier: d,
						splice_command_length: f,
						splice_command_type: p,
						splice_command: h,
						descriptor_loop_length: _,
						splice_descriptors: g,
						E_CRC32: s ? t.readBits(32) : void 0,
						CRC32: t.readBits(32)
					};
					if (p === V.kSpliceInsert) {
						var C = h;
						if (C.splice_event_cancel_indicator) return {
							splice_command_type: p,
							detail: S,
							data: e
						};
						if (C.program_splice_flag && !C.splice_immediate_flag) {
							var w = C.duration_flag ? C.break_duration.auto_return : void 0, T = C.duration_flag ? C.break_duration.duration / 90 : void 0;
							return C.splice_time.time_specified_flag ? {
								splice_command_type: p,
								pts: (l + C.splice_time.pts_time) % 2 ** 33,
								auto_return: w,
								duraiton: T,
								detail: S,
								data: e
							} : {
								splice_command_type: p,
								auto_return: w,
								duraiton: T,
								detail: S,
								data: e
							};
						}
						return {
							splice_command_type: p,
							auto_return: w = C.duration_flag ? C.break_duration.auto_return : void 0,
							duraiton: T = C.duration_flag ? C.break_duration.duration / 90 : void 0,
							detail: S,
							data: e
						};
					}
					if (p === V.kTimeSignal) {
						var E = h;
						return E.splice_time.time_specified_flag ? {
							splice_command_type: p,
							pts: (l + E.splice_time.pts_time) % 2 ** 33,
							detail: S,
							data: e
						} : {
							splice_command_type: p,
							detail: S,
							data: e
						};
					}
					return {
						splice_command_type: p,
						detail: S,
						data: e
					};
				};
				(function(e) {
					e[e.kSliceIDR_W_RADL = 19] = "kSliceIDR_W_RADL", e[e.kSliceIDR_N_LP = 20] = "kSliceIDR_N_LP", e[e.kSliceCRA_NUT = 21] = "kSliceCRA_NUT", e[e.kSliceVPS = 32] = "kSliceVPS", e[e.kSliceSPS = 33] = "kSliceSPS", e[e.kSlicePPS = 34] = "kSlicePPS", e[e.kSliceAUD = 35] = "kSliceAUD";
				})(q ||= {});
				var X = function() {}, Z = function(e) {
					var t = e.data.byteLength;
					this.type = e.type, this.data = new Uint8Array(4 + t), new DataView(this.data.buffer).setUint32(0, t), this.data.set(e.data, 4);
				}, ge = function() {
					function e(e) {
						this.TAG = "H265AnnexBParser", this.current_startcode_offset_ = 0, this.eof_flag_ = !1, this.data_ = e, this.current_startcode_offset_ = this.findNextStartCodeOffset(0), this.eof_flag_ && a.a.e(this.TAG, "Could not find H265 startcode until payload end!");
					}
					return e.prototype.findNextStartCodeOffset = function(e) {
						for (var t = e, n = this.data_;;) {
							if (t + 3 >= n.byteLength) return this.eof_flag_ = !0, n.byteLength;
							var r = n[t + 0] << 24 | n[t + 1] << 16 | n[t + 2] << 8 | n[t + 3], i = n[t + 0] << 16 | n[t + 1] << 8 | n[t + 2];
							if (r === 1 || i === 1) return t;
							t++;
						}
					}, e.prototype.readNextNaluPayload = function() {
						for (var e = this.data_, t = null; t == null && !this.eof_flag_;) {
							var n = this.current_startcode_offset_, r = e[n += (e[n] << 24 | e[n + 1] << 16 | e[n + 2] << 8 | e[n + 3]) == 1 ? 4 : 3] >> 1 & 63, i = (128 & e[n]) >>> 7, a = this.findNextStartCodeOffset(n);
							if (this.current_startcode_offset_ = a, i === 0) {
								var o = e.subarray(n, a);
								(t = new X()).type = r, t.data = o;
							}
						}
						return t;
					}, e;
				}(), _e = function() {
					function e(e, t, n, r) {
						var i = 23 + (5 + e.byteLength) + (5 + t.byteLength) + (5 + n.byteLength), a = this.data = new Uint8Array(i);
						a[0] = 1, a[1] = (3 & r.general_profile_space) << 6 | !!r.general_tier_flag << 5 | 31 & r.general_profile_idc, a[2] = r.general_profile_compatibility_flags_1, a[3] = r.general_profile_compatibility_flags_2, a[4] = r.general_profile_compatibility_flags_3, a[5] = r.general_profile_compatibility_flags_4, a[6] = r.general_constraint_indicator_flags_1, a[7] = r.general_constraint_indicator_flags_2, a[8] = r.general_constraint_indicator_flags_3, a[9] = r.general_constraint_indicator_flags_4, a[10] = r.general_constraint_indicator_flags_5, a[11] = r.general_constraint_indicator_flags_6, a[12] = r.general_level_idc, a[13] = 240 | (3840 & r.min_spatial_segmentation_idc) >> 8, a[14] = 255 & r.min_spatial_segmentation_idc, a[15] = 252 | 3 & r.parallelismType, a[16] = 252 | 3 & r.chroma_format_idc, a[17] = 248 | 7 & r.bit_depth_luma_minus8, a[18] = 248 | 7 & r.bit_depth_chroma_minus8, a[19] = 0, a[20] = 0, a[21] = (3 & r.constant_frame_rate) << 6 | (7 & r.num_temporal_layers) << 3 | !!r.temporal_id_nested << 2 | 3, a[22] = 3, a[23] = 128 | q.kSliceVPS, a[24] = 0, a[25] = 1, a[26] = (65280 & e.byteLength) >> 8, a[27] = (255 & e.byteLength) >> 0, a.set(e, 28), a[23 + (5 + e.byteLength) + 0] = 128 | q.kSliceSPS, a[23 + (5 + e.byteLength) + 1] = 0, a[23 + (5 + e.byteLength) + 2] = 1, a[23 + (5 + e.byteLength) + 3] = (65280 & t.byteLength) >> 8, a[23 + (5 + e.byteLength) + 4] = (255 & t.byteLength) >> 0, a.set(t, 23 + (5 + e.byteLength) + 5), a[23 + (5 + e.byteLength + 5 + t.byteLength) + 0] = 128 | q.kSlicePPS, a[23 + (5 + e.byteLength + 5 + t.byteLength) + 1] = 0, a[23 + (5 + e.byteLength + 5 + t.byteLength) + 2] = 1, a[23 + (5 + e.byteLength + 5 + t.byteLength) + 3] = (65280 & n.byteLength) >> 8, a[23 + (5 + e.byteLength + 5 + t.byteLength) + 4] = (255 & n.byteLength) >> 0, a.set(n, 23 + (5 + e.byteLength + 5 + t.byteLength) + 5);
					}
					return e.prototype.getData = function() {
						return this.data;
					}, e;
				}(), ve = function() {}, ye = function() {}, be = function() {}, xe = [
					[
						64,
						64,
						80,
						80,
						96,
						96,
						112,
						112,
						128,
						128,
						160,
						160,
						192,
						192,
						224,
						224,
						256,
						256,
						320,
						320,
						384,
						384,
						448,
						448,
						512,
						512,
						640,
						640,
						768,
						768,
						896,
						896,
						1024,
						1024,
						1152,
						1152,
						1280,
						1280
					],
					[
						69,
						70,
						87,
						88,
						104,
						105,
						121,
						122,
						139,
						140,
						174,
						175,
						208,
						209,
						243,
						244,
						278,
						279,
						348,
						349,
						417,
						418,
						487,
						488,
						557,
						558,
						696,
						697,
						835,
						836,
						975,
						976,
						1114,
						1115,
						1253,
						1254,
						1393,
						1394
					],
					[
						96,
						96,
						120,
						120,
						144,
						144,
						168,
						168,
						192,
						192,
						240,
						240,
						288,
						288,
						336,
						336,
						384,
						384,
						480,
						480,
						576,
						576,
						672,
						672,
						768,
						768,
						960,
						960,
						1152,
						1152,
						1344,
						1344,
						1536,
						1536,
						1728,
						1728,
						1920,
						1920
					]
				], Se = function() {
					function e(e) {
						this.TAG = "AC3Parser", this.data_ = e, this.current_syncword_offset_ = this.findNextSyncwordOffset(0), this.eof_flag_ && a.a.e(this.TAG, "Could not found AC3 syncword until payload end");
					}
					return e.prototype.findNextSyncwordOffset = function(e) {
						for (var t = e, n = this.data_;;) {
							if (t + 7 >= n.byteLength) return this.eof_flag_ = !0, n.byteLength;
							if ((n[t + 0] << 8 | n[t + 1] << 0) == 2935) return t;
							t++;
						}
					}, e.prototype.readNextAC3Frame = function() {
						for (var e = this.data_, t = null; t == null && !this.eof_flag_;) {
							var n = this.current_syncword_offset_, r = e[n + 4] >> 6, i = [
								48e3,
								44200,
								33e3
							][r], a = 63 & e[n + 4], o = 2 * xe[r][a];
							if (n + o > this.data_.byteLength) {
								this.eof_flag_ = !0, this.has_last_incomplete_data = !0;
								break;
							}
							var s = this.findNextSyncwordOffset(n + o);
							this.current_syncword_offset_ = s;
							var c = e[n + 5] >> 3, l = 7 & e[n + 5], u = e[n + 6] >> 5, d = 0;
							1 & u && u !== 1 && (d += 2), 4 & u && (d += 2), u === 2 && (d += 2);
							var f = (e[n + 6] << 8 | e[n + 7] << 0) >> 12 - d & 1, p = [
								2,
								1,
								2,
								3,
								3,
								4,
								4,
								5
							][u] + f;
							(t = new be()).sampling_frequency = i, t.channel_count = p, t.channel_mode = u, t.bit_stream_identification = c, t.low_frequency_effects_channel_on = f, t.bit_stream_mode = l, t.frame_size_code = a, t.data = e.subarray(n, n + o);
						}
						return t;
					}, e.prototype.hasIncompleteData = function() {
						return this.has_last_incomplete_data;
					}, e.prototype.getIncompleteData = function() {
						return this.has_last_incomplete_data ? this.data_.subarray(this.current_syncword_offset_) : null;
					}, e;
				}(), Ce = function(e) {
					var t = [
						e.sampling_rate_code << 6 | e.bit_stream_identification << 1 | e.bit_stream_mode >> 2,
						(3 & e.bit_stream_mode) << 6 | e.channel_mode << 3 | e.low_frequency_effects_channel_on << 2 | e.frame_size_code >> 4,
						e.frame_size_code << 4 & 224
					];
					this.config = t, this.sampling_rate = e.sampling_frequency, this.bit_stream_identification = e.bit_stream_identification, this.bit_stream_mode = e.bit_stream_mode, this.low_frequency_effects_channel_on = e.low_frequency_effects_channel_on, this.channel_count = e.channel_count, this.channel_mode = e.channel_mode, this.codec_mimetype = "ac-3", this.original_codec_mimetype = "ac-3";
				}, we = function() {
					var e = function(t, n) {
						return (e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
							e.__proto__ = t;
						} || function(e, t) {
							for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
						})(t, n);
					};
					return function(t, n) {
						function r() {
							this.constructor = t;
						}
						e(t, n), t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
					};
				}(), Te = function() {
					return (Te = Object.assign || function(e) {
						for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
						return e;
					}).apply(this, arguments);
				}, Ee = function(e) {
					function t(t, n) {
						var r = e.call(this) || this;
						return r.TAG = "TSDemuxer", r.first_parse_ = !0, r.media_info_ = new s.a(), r.timescale_ = 90, r.duration_ = 0, r.current_pmt_pid_ = -1, r.program_pmt_map_ = {}, r.pes_slice_queues_ = {}, r.section_slice_queues_ = {}, r.video_metadata_ = {
							vps: void 0,
							sps: void 0,
							pps: void 0,
							details: void 0
						}, r.audio_metadata_ = {
							codec: void 0,
							audio_object_type: void 0,
							sampling_freq_index: void 0,
							sampling_frequency: void 0,
							channel_config: void 0
						}, r.aac_last_sample_pts_ = void 0, r.aac_last_incomplete_data_ = null, r.has_video_ = !1, r.has_audio_ = !1, r.video_init_segment_dispatched_ = !1, r.audio_init_segment_dispatched_ = !1, r.video_metadata_changed_ = !1, r.audio_metadata_changed_ = !1, r.loas_previous_frame = null, r.video_track_ = {
							type: "video",
							id: 1,
							sequenceNumber: 0,
							samples: [],
							length: 0
						}, r.audio_track_ = {
							type: "audio",
							id: 2,
							sequenceNumber: 0,
							samples: [],
							length: 0
						}, r.ts_packet_size_ = t.ts_packet_size, r.sync_offset_ = t.sync_offset, r.config_ = n, r;
					}
					return we(t, e), t.prototype.destroy = function() {
						this.media_info_ = null, this.pes_slice_queues_ = null, this.section_slice_queues_ = null, this.video_metadata_ = null, this.audio_metadata_ = null, this.aac_last_incomplete_data_ = null, this.video_track_ = null, this.audio_track_ = null, e.prototype.destroy.call(this);
					}, t.probe = function(e) {
						var t = new Uint8Array(e), n = -1, r = 188;
						if (t.byteLength <= 3 * r) return { needMoreData: !0 };
						for (; n === -1;) {
							for (var i = Math.min(1e3, t.byteLength - 3 * r), o = 0; o < i;) {
								if (t[o] === 71 && t[o + r] === 71 && t[o + 2 * r] === 71) {
									n = o;
									break;
								}
								o++;
							}
							if (n === -1) if (r === 188) r = 192;
							else {
								if (r !== 192) break;
								r = 204;
							}
						}
						return n === -1 ? { match: !1 } : (r === 192 && n >= 4 ? (a.a.v("TSDemuxer", "ts_packet_size = 192, m2ts mode"), n -= 4) : r === 204 && a.a.v("TSDemuxer", "ts_packet_size = 204, RS encoded MPEG2-TS stream"), {
							match: !0,
							consumed: 0,
							ts_packet_size: r,
							sync_offset: n
						});
					}, t.prototype.bindDataSource = function(e) {
						return e.onDataArrival = this.parseChunks.bind(this), this;
					}, t.prototype.resetMediaInfo = function() {
						this.media_info_ = new s.a();
					}, t.prototype.parseChunks = function(e, t) {
						if (!(this.onError && this.onMediaInfo && this.onTrackMetadata && this.onDataAvailable)) throw new d.a("onError & onMediaInfo & onTrackMetadata & onDataAvailable callback must be specified");
						var n = 0;
						for (this.first_parse_ && (this.first_parse_ = !1, n = this.sync_offset_); n + this.ts_packet_size_ <= e.byteLength;) {
							var r = t + n;
							this.ts_packet_size_ === 192 && (n += 4);
							var i = new Uint8Array(e, n, 188), o = i[0];
							if (o !== 71) {
								a.a.e(this.TAG, "sync_byte = " + o + ", not 0x47");
								break;
							}
							var s = (64 & i[1]) >>> 6, c = (i[1], (31 & i[1]) << 8 | i[2]), l = (48 & i[3]) >>> 4, u = 15 & i[3], f = {}, p = 4;
							if (l == 2 || l == 3) {
								var m = i[4];
								if (5 + m === 188) {
									n += 188, this.ts_packet_size_ === 204 && (n += 16);
									continue;
								}
								m > 0 && (f = this.parseAdaptationField(e, n + 4, 1 + m)), p = 5 + m;
							}
							if (l == 1 || l == 3) {
								if (c === 0 || c === this.current_pmt_pid_ || this.pmt_ != null && this.pmt_.pid_stream_type[c] === w.kSCTE35) {
									var h = 188 - p;
									this.handleSectionSlice(e, n + p, h, {
										pid: c,
										file_position: r,
										payload_unit_start_indicator: s,
										continuity_conunter: u,
										random_access_indicator: f.random_access_indicator
									});
								} else if (this.pmt_ != null && this.pmt_.pid_stream_type[c] != null) {
									h = 188 - p;
									var g = this.pmt_.pid_stream_type[c];
									c !== this.pmt_.common_pids.h264 && c !== this.pmt_.common_pids.h265 && c !== this.pmt_.common_pids.adts_aac && c !== this.pmt_.common_pids.loas_aac && c !== this.pmt_.common_pids.ac3 && c !== this.pmt_.common_pids.opus && c !== this.pmt_.common_pids.mp3 && !0 !== this.pmt_.pes_private_data_pids[c] && !0 !== this.pmt_.timed_id3_pids[c] || this.handlePESSlice(e, n + p, h, {
										pid: c,
										stream_type: g,
										file_position: r,
										payload_unit_start_indicator: s,
										continuity_conunter: u,
										random_access_indicator: f.random_access_indicator
									});
								}
							}
							n += 188, this.ts_packet_size_ === 204 && (n += 16);
						}
						return this.dispatchAudioVideoMediaSegment(), n;
					}, t.prototype.parseAdaptationField = function(e, t, n) {
						var r = new Uint8Array(e, t, n), i = r[0];
						return i > 0 ? i > 183 ? (a.a.w(this.TAG, "Illegal adaptation_field_length: " + i), {}) : {
							discontinuity_indicator: (128 & r[1]) >>> 7,
							random_access_indicator: (64 & r[1]) >>> 6,
							elementary_stream_priority_indicator: (32 & r[1]) >>> 5
						} : {};
					}, t.prototype.handleSectionSlice = function(e, t, n, r) {
						var i = new Uint8Array(e, t, n), a = this.section_slice_queues_[r.pid];
						if (r.payload_unit_start_indicator) {
							var o = i[0];
							if (a != null && a.total_length !== 0) {
								var s = new Uint8Array(e, t + 1, Math.min(n, o));
								a.slices.push(s), a.total_length += s.byteLength, a.total_length === a.expected_length ? this.emitSectionSlices(a, r) : this.clearSlices(a, r);
							}
							for (var c = 1 + o; c < i.byteLength && i[c + 0] !== 255;) {
								var l = (15 & i[c + 1]) << 8 | i[c + 2];
								this.section_slice_queues_[r.pid] = new P(), (a = this.section_slice_queues_[r.pid]).expected_length = l + 3, a.file_position = r.file_position, a.random_access_indicator = r.random_access_indicator, s = new Uint8Array(e, t + c, Math.min(n - c, a.expected_length - a.total_length)), a.slices.push(s), a.total_length += s.byteLength, a.total_length === a.expected_length ? this.emitSectionSlices(a, r) : a.total_length >= a.expected_length && this.clearSlices(a, r), c += s.byteLength;
							}
						} else a != null && a.total_length !== 0 && (s = new Uint8Array(e, t, Math.min(n, a.expected_length - a.total_length)), a.slices.push(s), a.total_length += s.byteLength, a.total_length === a.expected_length ? this.emitSectionSlices(a, r) : a.total_length >= a.expected_length && this.clearSlices(a, r));
					}, t.prototype.handlePESSlice = function(e, t, n, r) {
						var i = new Uint8Array(e, t, n), o = i[0] << 16 | i[1] << 8 | i[2], s = (i[3], i[4] << 8 | i[5]);
						if (r.payload_unit_start_indicator) {
							if (o !== 1) return void a.a.e(this.TAG, "handlePESSlice: packet_start_code_prefix should be 1 but with value " + o);
							var c = this.pes_slice_queues_[r.pid];
							c && (c.expected_length === 0 || c.expected_length === c.total_length ? this.emitPESSlices(c, r) : this.clearSlices(c, r)), this.pes_slice_queues_[r.pid] = new P(), this.pes_slice_queues_[r.pid].file_position = r.file_position, this.pes_slice_queues_[r.pid].random_access_indicator = r.random_access_indicator;
						}
						if (this.pes_slice_queues_[r.pid] != null) {
							var l = this.pes_slice_queues_[r.pid];
							l.slices.push(i), r.payload_unit_start_indicator && (l.expected_length = s === 0 ? 0 : s + 6), l.total_length += i.byteLength, l.expected_length > 0 && l.expected_length === l.total_length ? this.emitPESSlices(l, r) : l.expected_length > 0 && l.expected_length < l.total_length && this.clearSlices(l, r);
						}
					}, t.prototype.emitSectionSlices = function(e, t) {
						for (var n = new Uint8Array(e.total_length), r = 0, i = 0; r < e.slices.length; r++) {
							var a = e.slices[r];
							n.set(a, i), i += a.byteLength;
						}
						e.slices = [], e.expected_length = -1, e.total_length = 0;
						var o = new N();
						o.pid = t.pid, o.data = n, o.file_position = e.file_position, o.random_access_indicator = e.random_access_indicator, this.parseSection(o);
					}, t.prototype.emitPESSlices = function(e, t) {
						for (var n = new Uint8Array(e.total_length), r = 0, i = 0; r < e.slices.length; r++) {
							var a = e.slices[r];
							n.set(a, i), i += a.byteLength;
						}
						e.slices = [], e.expected_length = -1, e.total_length = 0;
						var o = new M();
						o.pid = t.pid, o.data = n, o.stream_type = t.stream_type, o.file_position = e.file_position, o.random_access_indicator = e.random_access_indicator, this.parsePES(o);
					}, t.prototype.clearSlices = function(e, t) {
						e.slices = [], e.expected_length = -1, e.total_length = 0;
					}, t.prototype.parseSection = function(e) {
						var t = e.data, n = e.pid;
						n === 0 ? this.parsePAT(t) : n === this.current_pmt_pid_ ? this.parsePMT(t) : this.pmt_ != null && this.pmt_.scte_35_pids[n] && this.parseSCTE35(t);
					}, t.prototype.parsePES = function(e) {
						var t = e.data, n = t[0] << 16 | t[1] << 8 | t[2], r = t[3], i = t[4] << 8 | t[5];
						if (n === 1) if (r !== 188 && r !== 190 && r !== 191 && r !== 240 && r !== 241 && r !== 255 && r !== 242 && r !== 248) {
							t[6];
							var o = (192 & t[7]) >>> 6, s = t[8], c = void 0, l = void 0;
							o !== 2 && o !== 3 || (c = 536870912 * (14 & t[9]) + 4194304 * (255 & t[10]) + 16384 * (254 & t[11]) + 128 * (255 & t[12]) + (254 & t[13]) / 2, l = o === 3 ? 536870912 * (14 & t[14]) + 4194304 * (255 & t[15]) + 16384 * (254 & t[16]) + 128 * (255 & t[17]) + (254 & t[18]) / 2 : c);
							var u = 9 + s, d = void 0;
							if (i !== 0) {
								if (i < 3 + s) return void a.a.v(this.TAG, "Malformed PES: PES_packet_length < 3 + PES_header_data_length");
								d = i - 3 - s;
							} else d = t.byteLength - u;
							var f = t.subarray(u, u + d);
							switch (e.stream_type) {
								case w.kMPEG1Audio:
								case w.kMPEG2Audio:
									this.parseMP3Payload(f, c);
									break;
								case w.kPESPrivateData:
									this.pmt_.common_pids.opus === e.pid ? this.parseOpusPayload(f, c) : this.pmt_.common_pids.ac3 === e.pid ? this.parseAC3Payload(f, c) : this.pmt_.smpte2038_pids[e.pid] ? this.parseSMPTE2038MetadataPayload(f, c, l, e.pid, r) : this.parsePESPrivateDataPayload(f, c, l, e.pid, r);
									break;
								case w.kADTSAAC:
									this.parseADTSAACPayload(f, c);
									break;
								case w.kLOASAAC:
									this.parseLOASAACPayload(f, c);
									break;
								case w.kAC3:
									this.parseAC3Payload(f, c);
									break;
								case w.kID3:
									this.parseTimedID3MetadataPayload(f, c, l, e.pid, r);
									break;
								case w.kH264:
									this.parseH264Payload(f, c, l, e.file_position, e.random_access_indicator);
									break;
								case w.kH265: this.parseH265Payload(f, c, l, e.file_position, e.random_access_indicator);
							}
						} else (r === 188 || r === 191 || r === 240 || r === 241 || r === 255 || r === 242 || r === 248) && e.stream_type === w.kPESPrivateData && (u = 6, d = void 0, d = i === 0 ? t.byteLength - u : i, f = t.subarray(u, u + d), this.parsePESPrivateDataPayload(f, void 0, void 0, e.pid, r));
						else a.a.e(this.TAG, "parsePES: packet_start_code_prefix should be 1 but with value " + n);
					}, t.prototype.parsePAT = function(e) {
						var t = e[0];
						if (t === 0) {
							var n = (15 & e[1]) << 8 | e[2], r = (e[3], e[4], (62 & e[5]) >>> 1), i = 1 & e[5], o = e[6], s = (e[7], null);
							if (i === 1 && o === 0) (s = new k()).version_number = r;
							else if ((s = this.pat_) == null) return;
							for (var c = n - 5 - 4, l = -1, u = -1, d = 8; d < 8 + c; d += 4) {
								var f = e[d] << 8 | e[d + 1], p = (31 & e[d + 2]) << 8 | e[d + 3];
								f === 0 ? s.network_pid = p : (s.program_pmt_pid[f] = p, l === -1 && (l = f), u === -1 && (u = p));
							}
							i === 1 && o === 0 && (this.pat_ ?? a.a.v(this.TAG, "Parsed first PAT: " + JSON.stringify(s)), this.pat_ = s, this.current_program_ = l, this.current_pmt_pid_ = u);
						} else a.a.e(this.TAG, "parsePAT: table_id " + t + " is not corresponded to PAT!");
					}, t.prototype.parsePMT = function(e) {
						var t = e[0];
						if (t === 2) {
							var n = (15 & e[1]) << 8 | e[2], r = e[3] << 8 | e[4], i = (62 & e[5]) >>> 1, o = 1 & e[5], s = e[6], c = (e[7], null);
							if (o === 1 && s === 0) (c = new j()).program_number = r, c.version_number = i, this.program_pmt_map_[r] = c;
							else if ((c = this.program_pmt_map_[r]) == null) return;
							e[8], e[9];
							for (var l = (15 & e[10]) << 8 | e[11], u = 12 + l, d = n - 9 - l - 4, f = u; f < u + d;) {
								var p = e[f], m = (31 & e[f + 1]) << 8 | e[f + 2], h = (15 & e[f + 3]) << 8 | e[f + 4];
								c.pid_stream_type[m] = p;
								var g = c.common_pids.h264 || c.common_pids.h265, _ = c.common_pids.adts_aac || c.common_pids.loas_aac || c.common_pids.ac3 || c.common_pids.opus || c.common_pids.mp3;
								if (p !== w.kH264 || g) if (p !== w.kH265 || g) if (p !== w.kADTSAAC || _) if (p !== w.kLOASAAC || _) if (p !== w.kAC3 || _) if (p !== w.kMPEG1Audio && p !== w.kMPEG2Audio || _) if (p === w.kPESPrivateData) {
									if (c.pes_private_data_pids[m] = !0, h > 0) {
										for (var v = f + 5; v < f + 5 + h;) {
											var y = e[v + 0], b = e[v + 1];
											if (y === 5) {
												var x = String.fromCharCode.apply(String, Array.from(e.subarray(v + 2, v + 2 + b)));
												x === "VANC" ? c.smpte2038_pids[m] = !0 : x === "Opus" && (c.common_pids.opus = m);
											} else if (y === 127 && m === c.common_pids.opus) {
												var S = null;
												if (e[v + 2] === 128 && (S = e[v + 3]), S == null) {
													a.a.e(this.TAG, "Not Supported Opus channel count.");
													continue;
												}
												var C = {
													codec: "opus",
													channel_count: 15 & S ? 15 & S : 2,
													channel_config_code: S,
													sample_rate: 48e3
												}, T = {
													codec: "opus",
													meta: C
												};
												this.audio_init_segment_dispatched_ == 0 ? (this.audio_metadata_ = C, this.dispatchAudioInitSegment(T)) : this.detectAudioMetadataChange(T) && (this.dispatchAudioMediaSegment(), this.dispatchAudioInitSegment(T));
											}
											v += 2 + b;
										}
										var E = e.subarray(f + 5, f + 5 + h);
										this.dispatchPESPrivateDataDescriptor(m, p, E);
									}
								} else p === w.kID3 ? c.timed_id3_pids[m] = !0 : p === w.kSCTE35 && (c.scte_35_pids[m] = !0);
								else c.common_pids.mp3 = m;
								else c.common_pids.ac3 = m;
								else c.common_pids.loas_aac = m;
								else c.common_pids.adts_aac = m;
								else c.common_pids.h265 = m;
								else c.common_pids.h264 = m;
								f += 5 + h;
							}
							r === this.current_program_ && (this.pmt_ ?? a.a.v(this.TAG, "Parsed first PMT: " + JSON.stringify(c)), this.pmt_ = c, (c.common_pids.h264 || c.common_pids.h265) && (this.has_video_ = !0), (c.common_pids.adts_aac || c.common_pids.loas_aac || c.common_pids.ac3 || c.common_pids.opus || c.common_pids.mp3) && (this.has_audio_ = !0));
						} else a.a.e(this.TAG, "parsePMT: table_id " + t + " is not corresponded to PMT!");
					}, t.prototype.parseSCTE35 = function(e) {
						var t = he(e);
						t.pts == null ? t.nearest_pts = this.aac_last_sample_pts_ : t.pts = Math.floor(t.pts / this.timescale_), this.onSCTE35Metadata && this.onSCTE35Metadata(t);
					}, t.prototype.parseH264Payload = function(e, t, n, r, i) {
						for (var o = new R(e), s = null, c = [], l = 0, u = !1; (s = o.readNextNaluPayload()) != null;) {
							var d = new ee(s);
							if (d.type === A.kSliceSPS) {
								var f = h.parseSPS(s.data);
								this.video_init_segment_dispatched_ ? !0 === this.detectVideoMetadataChange(d, f) && (a.a.v(this.TAG, "H264: Critical h264 metadata has been changed, attempt to re-generate InitSegment"), this.video_metadata_changed_ = !0, this.video_metadata_ = {
									vps: void 0,
									sps: d,
									pps: void 0,
									details: f
								}) : (this.video_metadata_.sps = d, this.video_metadata_.details = f);
							} else d.type === A.kSlicePPS ? this.video_init_segment_dispatched_ && !this.video_metadata_changed_ || (this.video_metadata_.pps = d, this.video_metadata_.sps && this.video_metadata_.pps && (this.video_metadata_changed_ && this.dispatchVideoMediaSegment(), this.dispatchVideoInitSegment())) : (d.type === A.kSliceIDR || d.type === A.kSliceNonIDR && i === 1) && (u = !0);
							this.video_init_segment_dispatched_ && (c.push(d), l += d.data.byteLength);
						}
						var p = Math.floor(t / this.timescale_), m = Math.floor(n / this.timescale_);
						if (c.length) {
							var g = this.video_track_, _ = {
								units: c,
								length: l,
								isKeyframe: u,
								dts: m,
								pts: p,
								cts: p - m,
								file_position: r
							};
							g.samples.push(_), g.length += l;
						}
					}, t.prototype.parseH265Payload = function(e, t, n, r, i) {
						for (var o = new ge(e), s = null, c = [], l = 0, u = !1; (s = o.readNextNaluPayload()) != null;) {
							var d = new Z(s);
							if (d.type === q.kSliceVPS) {
								if (!this.video_init_segment_dispatched_) {
									var f = _.parseVPS(s.data);
									this.video_metadata_.vps = d, this.video_metadata_.details = Te(Te({}, this.video_metadata_.details), f);
								}
							} else d.type === q.kSliceSPS ? (f = _.parseSPS(s.data), this.video_init_segment_dispatched_ ? !0 === this.detectVideoMetadataChange(d, f) && (a.a.v(this.TAG, "H265: Critical h265 metadata has been changed, attempt to re-generate InitSegment"), this.video_metadata_changed_ = !0, this.video_metadata_ = {
								vps: void 0,
								sps: d,
								pps: void 0,
								details: f
							}) : (this.video_metadata_.sps = d, this.video_metadata_.details = Te(Te({}, this.video_metadata_.details), f))) : d.type === q.kSlicePPS ? (!this.video_init_segment_dispatched_ || this.video_metadata_changed_) && (f = _.parsePPS(s.data), this.video_metadata_.pps = d, this.video_metadata_.details = Te(Te({}, this.video_metadata_.details), f), this.video_metadata_.vps && this.video_metadata_.sps && this.video_metadata_.pps && (this.video_metadata_changed_ && this.dispatchVideoMediaSegment(), this.dispatchVideoInitSegment())) : d.type !== q.kSliceIDR_W_RADL && d.type !== q.kSliceIDR_N_LP && d.type !== q.kSliceCRA_NUT || (u = !0);
							this.video_init_segment_dispatched_ && (c.push(d), l += d.data.byteLength);
						}
						var p = Math.floor(t / this.timescale_), m = Math.floor(n / this.timescale_);
						if (c.length) {
							var h = this.video_track_, g = {
								units: c,
								length: l,
								isKeyframe: u,
								dts: m,
								pts: p,
								cts: p - m,
								file_position: r
							};
							h.samples.push(g), h.length += l;
						}
					}, t.prototype.detectVideoMetadataChange = function(e, t) {
						if (t.codec_mimetype !== this.video_metadata_.details.codec_mimetype) return a.a.v(this.TAG, "Video: Codec mimeType changed from " + this.video_metadata_.details.codec_mimetype + " to " + t.codec_mimetype), !0;
						if (t.codec_size.width !== this.video_metadata_.details.codec_size.width || t.codec_size.height !== this.video_metadata_.details.codec_size.height) {
							var n = this.video_metadata_.details.codec_size, r = t.codec_size;
							return a.a.v(this.TAG, "Video: Coded Resolution changed from " + n.width + "x" + n.height + " to " + r.width + "x" + r.height), !0;
						}
						return t.present_size.width !== this.video_metadata_.details.present_size.width && (a.a.v(this.TAG, "Video: Present resolution width changed from " + this.video_metadata_.details.present_size.width + " to " + t.present_size.width), !0);
					}, t.prototype.isInitSegmentDispatched = function() {
						return this.has_video_ && this.has_audio_ ? this.video_init_segment_dispatched_ && this.audio_init_segment_dispatched_ : this.has_video_ && !this.has_audio_ ? this.video_init_segment_dispatched_ : !(this.has_video_ || !this.has_audio_) && this.audio_init_segment_dispatched_;
					}, t.prototype.dispatchVideoInitSegment = function() {
						var e = this.video_metadata_.details, t = { type: "video" };
						if (t.id = this.video_track_.id, t.timescale = 1e3, t.duration = this.duration_, t.codecWidth = e.codec_size.width, t.codecHeight = e.codec_size.height, t.presentWidth = e.present_size.width, t.presentHeight = e.present_size.height, t.profile = e.profile_string, t.level = e.level_string, t.bitDepth = e.bit_depth, t.chromaFormat = e.chroma_format, t.sarRatio = e.sar_ratio, t.frameRate = e.frame_rate, t.refSampleDuration = t.frameRate.fps_den / t.frameRate.fps_num * 1e3, t.codec = e.codec_mimetype, this.video_metadata_.vps) {
							var n = this.video_metadata_.vps.data.subarray(4), r = this.video_metadata_.sps.data.subarray(4), i = this.video_metadata_.pps.data.subarray(4);
							t.hvcc = new _e(n, r, i, e).getData(), this.video_init_segment_dispatched_ == 0 && a.a.v(this.TAG, "Generated first HEVCDecoderConfigurationRecord for mimeType: " + t.codec);
						} else r = this.video_metadata_.sps.data.subarray(4), i = this.video_metadata_.pps.data.subarray(4), t.avcc = new z(r, i, e).getData(), this.video_init_segment_dispatched_ == 0 && a.a.v(this.TAG, "Generated first AVCDecoderConfigurationRecord for mimeType: " + t.codec);
						this.onTrackMetadata("video", t), this.video_init_segment_dispatched_ = !0, this.video_metadata_changed_ = !1;
						var o = this.media_info_;
						o.hasVideo = !0, o.width = t.codecWidth, o.height = t.codecHeight, o.fps = t.frameRate.fps, o.profile = t.profile, o.level = t.level, o.refFrames = e.ref_frames, o.chromaFormat = e.chroma_format_string, o.sarNum = t.sarRatio.width, o.sarDen = t.sarRatio.height, o.videoCodec = t.codec, o.hasAudio && o.audioCodec ? o.mimeType = "video/mp2t; codecs=\"" + o.videoCodec + "," + o.audioCodec + "\"" : o.mimeType = "video/mp2t; codecs=\"" + o.videoCodec + "\"", o.isComplete() && this.onMediaInfo(o);
					}, t.prototype.dispatchVideoMediaSegment = function() {
						this.isInitSegmentDispatched() && this.video_track_.length && this.onDataAvailable(null, this.video_track_);
					}, t.prototype.dispatchAudioMediaSegment = function() {
						this.isInitSegmentDispatched() && this.audio_track_.length && this.onDataAvailable(this.audio_track_, null);
					}, t.prototype.dispatchAudioVideoMediaSegment = function() {
						this.isInitSegmentDispatched() && (this.audio_track_.length || this.video_track_.length) && this.onDataAvailable(this.audio_track_, this.video_track_);
					}, t.prototype.parseADTSAACPayload = function(e, t) {
						if (!this.has_video_ || this.video_init_segment_dispatched_) {
							if (this.aac_last_incomplete_data_) {
								var n = new Uint8Array(e.byteLength + this.aac_last_incomplete_data_.byteLength);
								n.set(this.aac_last_incomplete_data_, 0), n.set(e, this.aac_last_incomplete_data_.byteLength), e = n;
							}
							var r, i;
							if (t != null && (i = t / this.timescale_), this.audio_metadata_.codec === "aac") {
								if (t == null && this.aac_last_sample_pts_ != null) r = 1024 / this.audio_metadata_.sampling_frequency * 1e3, i = this.aac_last_sample_pts_ + r;
								else if (t == null) return void a.a.w(this.TAG, "AAC: Unknown pts");
								if (this.aac_last_incomplete_data_ && this.aac_last_sample_pts_) {
									r = 1024 / this.audio_metadata_.sampling_frequency * 1e3;
									var o = this.aac_last_sample_pts_ + r;
									Math.abs(o - i) > 1 && (a.a.w(this.TAG, "AAC: Detected pts overlapped, expected: " + o + "ms, PES pts: " + i + "ms"), i = o);
								}
							}
							for (var s, c = new U(e), l = null, u = i; (l = c.readNextAACFrame()) != null;) {
								r = 1024 / l.sampling_frequency * 1e3;
								var d = {
									codec: "aac",
									data: l
								};
								this.audio_init_segment_dispatched_ == 0 ? (this.audio_metadata_ = {
									codec: "aac",
									audio_object_type: l.audio_object_type,
									sampling_freq_index: l.sampling_freq_index,
									sampling_frequency: l.sampling_frequency,
									channel_config: l.channel_config
								}, this.dispatchAudioInitSegment(d)) : this.detectAudioMetadataChange(d) && (this.dispatchAudioMediaSegment(), this.dispatchAudioInitSegment(d)), s = u;
								var f = Math.floor(u), p = {
									unit: l.data,
									length: l.data.byteLength,
									pts: f,
									dts: f
								};
								this.audio_track_.samples.push(p), this.audio_track_.length += l.data.byteLength, u += r;
							}
							c.hasIncompleteData() && (this.aac_last_incomplete_data_ = c.getIncompleteData()), s && (this.aac_last_sample_pts_ = s);
						}
					}, t.prototype.parseLOASAACPayload = function(e, t) {
						if (!this.has_video_ || this.video_init_segment_dispatched_) {
							if (this.aac_last_incomplete_data_) {
								var n = new Uint8Array(e.byteLength + this.aac_last_incomplete_data_.byteLength);
								n.set(this.aac_last_incomplete_data_, 0), n.set(e, this.aac_last_incomplete_data_.byteLength), e = n;
							}
							var r, i;
							if (t != null && (i = t / this.timescale_), this.audio_metadata_.codec === "aac") {
								if (t == null && this.aac_last_sample_pts_ != null) r = 1024 / this.audio_metadata_.sampling_frequency * 1e3, i = this.aac_last_sample_pts_ + r;
								else if (t == null) return void a.a.w(this.TAG, "AAC: Unknown pts");
								if (this.aac_last_incomplete_data_ && this.aac_last_sample_pts_) {
									r = 1024 / this.audio_metadata_.sampling_frequency * 1e3;
									var o = this.aac_last_sample_pts_ + r;
									Math.abs(o - i) > 1 && (a.a.w(this.TAG, "AAC: Detected pts overlapped, expected: " + o + "ms, PES pts: " + i + "ms"), i = o);
								}
							}
							for (var s, c = new W(e), l = null, u = i; (l = c.readNextAACFrame(this.loas_previous_frame ?? void 0)) != null;) {
								this.loas_previous_frame = l, r = 1024 / l.sampling_frequency * 1e3;
								var d = {
									codec: "aac",
									data: l
								};
								this.audio_init_segment_dispatched_ == 0 ? (this.audio_metadata_ = {
									codec: "aac",
									audio_object_type: l.audio_object_type,
									sampling_freq_index: l.sampling_freq_index,
									sampling_frequency: l.sampling_frequency,
									channel_config: l.channel_config
								}, this.dispatchAudioInitSegment(d)) : this.detectAudioMetadataChange(d) && (this.dispatchAudioMediaSegment(), this.dispatchAudioInitSegment(d)), s = u;
								var f = Math.floor(u), p = {
									unit: l.data,
									length: l.data.byteLength,
									pts: f,
									dts: f
								};
								this.audio_track_.samples.push(p), this.audio_track_.length += l.data.byteLength, u += r;
							}
							c.hasIncompleteData() && (this.aac_last_incomplete_data_ = c.getIncompleteData()), s && (this.aac_last_sample_pts_ = s);
						}
					}, t.prototype.parseAC3Payload = function(e, t) {
						if (!this.has_video_ || this.video_init_segment_dispatched_) {
							var n, r;
							if (t != null && (r = t / this.timescale_), this.audio_metadata_.codec === "ac-3") {
								if (t == null && this.aac_last_sample_pts_ != null) n = 1536 / this.audio_metadata_.sampling_frequency * 1e3, r = this.aac_last_sample_pts_ + n;
								else if (t == null) return void a.a.w(this.TAG, "Opus: Unknown pts");
							}
							for (var i, o = new Se(e), s = null, c = r; (s = o.readNextAC3Frame()) != null;) {
								n = 1536 / s.sampling_frequency * 1e3;
								var l = {
									codec: "ac-3",
									data: s
								};
								this.audio_init_segment_dispatched_ == 0 ? (this.audio_metadata_ = {
									codec: "ac-3",
									sampling_frequency: s.sampling_frequency,
									bit_stream_identification: s.bit_stream_identification,
									bit_stream_mode: s.bit_stream_mode,
									low_frequency_effects_channel_on: s.low_frequency_effects_channel_on,
									channel_mode: s.channel_mode
								}, console.log(JSON.stringify(this.audio_metadata_)), this.dispatchAudioInitSegment(l)) : this.detectAudioMetadataChange(l) && (this.dispatchAudioMediaSegment(), this.dispatchAudioInitSegment(l)), i = c;
								var u = Math.floor(c), d = {
									unit: s.data,
									length: s.data.byteLength,
									pts: u,
									dts: u
								};
								this.audio_track_.samples.push(d), this.audio_track_.length += s.data.byteLength, c += n;
							}
							i && (this.aac_last_sample_pts_ = i);
						}
					}, t.prototype.parseOpusPayload = function(e, t) {
						if (!this.has_video_ || this.video_init_segment_dispatched_) {
							var n, r;
							if (t != null && (r = t / this.timescale_), this.audio_metadata_.codec === "opus") {
								if (t == null && this.aac_last_sample_pts_ != null) n = 20, r = this.aac_last_sample_pts_ + n;
								else if (t == null) return void a.a.w(this.TAG, "Opus: Unknown pts");
							}
							for (var i, o = r, s = 0; s < e.length;) {
								n = 20;
								for (var c = (16 & e[s + 1]) != 0, l = (8 & e[s + 1]) != 0, u = s + 2, d = 0; e[u] === 255;) d += 255, u += 1;
								d += e[u], u += 1, u += c ? 2 : 0, u += l ? 2 : 0, i = o;
								var f = Math.floor(o), p = e.slice(u, u + d), m = {
									unit: p,
									length: p.byteLength,
									pts: f,
									dts: f
								};
								this.audio_track_.samples.push(m), this.audio_track_.length += p.byteLength, o += n, s = u + d;
							}
							i && (this.aac_last_sample_pts_ = i);
						}
					}, t.prototype.parseMP3Payload = function(e, t) {
						if (!this.has_video_ || this.video_init_segment_dispatched_) {
							var n = [
								0,
								32,
								64,
								96,
								128,
								160,
								192,
								224,
								256,
								288,
								320,
								352,
								384,
								416,
								448,
								-1
							], r = [
								0,
								32,
								48,
								56,
								64,
								80,
								96,
								112,
								128,
								160,
								192,
								224,
								256,
								320,
								384,
								-1
							], i = [
								0,
								32,
								40,
								48,
								56,
								64,
								80,
								96,
								112,
								128,
								160,
								192,
								224,
								256,
								320,
								-1
							], a = e[1] >>> 3 & 3, o = (6 & e[1]) >> 1, s = (240 & e[2]) >>> 4, c = (12 & e[2]) >>> 2, l = (e[3] >>> 6 & 3) == 3 ? 1 : 2, u = 0, d = 34;
							switch (a) {
								case 0:
									u = [
										11025,
										12e3,
										8e3,
										0
									][c];
									break;
								case 2:
									u = [
										22050,
										24e3,
										16e3,
										0
									][c];
									break;
								case 3: u = [
									44100,
									48e3,
									32e3,
									0
								][c];
							}
							switch (o) {
								case 1:
									d = 34, s < i.length && i[s];
									break;
								case 2:
									d = 33, s < r.length && r[s];
									break;
								case 3: d = 32, s < n.length && n[s];
							}
							var f = new ye();
							f.object_type = d, f.sample_rate = u, f.channel_count = l, f.data = e;
							var p = {
								codec: "mp3",
								data: f
							};
							this.audio_init_segment_dispatched_ == 0 ? (this.audio_metadata_ = {
								codec: "mp3",
								object_type: d,
								sample_rate: u,
								channel_count: l
							}, this.dispatchAudioInitSegment(p)) : this.detectAudioMetadataChange(p) && (this.dispatchAudioMediaSegment(), this.dispatchAudioInitSegment(p));
							var m = {
								unit: e,
								length: e.byteLength,
								pts: t / this.timescale_,
								dts: t / this.timescale_
							};
							this.audio_track_.samples.push(m), this.audio_track_.length += e.byteLength;
						}
					}, t.prototype.detectAudioMetadataChange = function(e) {
						if (e.codec !== this.audio_metadata_.codec) return a.a.v(this.TAG, "Audio: Audio Codecs changed from " + this.audio_metadata_.codec + " to " + e.codec), !0;
						if (e.codec === "aac" && this.audio_metadata_.codec === "aac") {
							if ((t = e.data).audio_object_type !== this.audio_metadata_.audio_object_type) return a.a.v(this.TAG, "AAC: AudioObjectType changed from " + this.audio_metadata_.audio_object_type + " to " + t.audio_object_type), !0;
							if (t.sampling_freq_index !== this.audio_metadata_.sampling_freq_index) return a.a.v(this.TAG, "AAC: SamplingFrequencyIndex changed from " + this.audio_metadata_.sampling_freq_index + " to " + t.sampling_freq_index), !0;
							if (t.channel_config !== this.audio_metadata_.channel_config) return a.a.v(this.TAG, "AAC: Channel configuration changed from " + this.audio_metadata_.channel_config + " to " + t.channel_config), !0;
						} else if (e.codec === "ac-3" && this.audio_metadata_.codec === "ac-3") {
							var t;
							if ((t = e.data).sampling_frequency !== this.audio_metadata_.sampling_frequency) return a.a.v(this.TAG, "AC3: Sampling Frequency changed from " + this.audio_metadata_.sampling_frequency + " to " + t.sampling_frequency), !0;
							if (t.bit_stream_identification !== this.audio_metadata_.bit_stream_identification) return a.a.v(this.TAG, "AC3: Bit Stream Identification changed from " + this.audio_metadata_.bit_stream_identification + " to " + t.bit_stream_identification), !0;
							if (t.bit_stream_mode !== this.audio_metadata_.bit_stream_mode) return a.a.v(this.TAG, "AC3: BitStream Mode changed from " + this.audio_metadata_.bit_stream_mode + " to " + t.bit_stream_mode), !0;
							if (t.channel_mode !== this.audio_metadata_.channel_mode) return a.a.v(this.TAG, "AC3: Channel Mode changed from " + this.audio_metadata_.channel_mode + " to " + t.channel_mode), !0;
							if (t.low_frequency_effects_channel_on !== this.audio_metadata_.low_frequency_effects_channel_on) return a.a.v(this.TAG, "AC3: Low Frequency Effects Channel On changed from " + this.audio_metadata_.low_frequency_effects_channel_on + " to " + t.low_frequency_effects_channel_on), !0;
						} else if (e.codec === "opus" && this.audio_metadata_.codec === "opus") {
							if ((n = e.meta).sample_rate !== this.audio_metadata_.sample_rate) return a.a.v(this.TAG, "Opus: SamplingFrequencyIndex changed from " + this.audio_metadata_.sample_rate + " to " + n.sample_rate), !0;
							if (n.channel_count !== this.audio_metadata_.channel_count) return a.a.v(this.TAG, "Opus: Channel count changed from " + this.audio_metadata_.channel_count + " to " + n.channel_count), !0;
						} else if (e.codec === "mp3" && this.audio_metadata_.codec === "mp3") {
							var n;
							if ((n = e.data).object_type !== this.audio_metadata_.object_type) return a.a.v(this.TAG, "MP3: AudioObjectType changed from " + this.audio_metadata_.object_type + " to " + n.object_type), !0;
							if (n.sample_rate !== this.audio_metadata_.sample_rate) return a.a.v(this.TAG, "MP3: SamplingFrequencyIndex changed from " + this.audio_metadata_.sample_rate + " to " + n.sample_rate), !0;
							if (n.channel_count !== this.audio_metadata_.channel_count) return a.a.v(this.TAG, "MP3: Channel count changed from " + this.audio_metadata_.channel_count + " to " + n.channel_count), !0;
						}
						return !1;
					}, t.prototype.dispatchAudioInitSegment = function(e) {
						var t = { type: "audio" };
						if (t.id = this.audio_track_.id, t.timescale = 1e3, t.duration = this.duration_, this.audio_metadata_.codec === "aac") {
							var n = new G(e.codec === "aac" ? e.data : null);
							t.audioSampleRate = n.sampling_rate, t.channelCount = n.channel_count, t.codec = n.codec_mimetype, t.originalCodec = n.original_codec_mimetype, t.config = n.config, t.refSampleDuration = 1024 / t.audioSampleRate * t.timescale;
						} else if (this.audio_metadata_.codec === "ac-3") {
							var r = new Ce(e.codec === "ac-3" ? e.data : null);
							t.audioSampleRate = r.sampling_rate, t.channelCount = r.channel_count, t.codec = r.codec_mimetype, t.originalCodec = r.original_codec_mimetype, t.config = r.config, t.refSampleDuration = 1536 / t.audioSampleRate * t.timescale;
						} else this.audio_metadata_.codec === "opus" ? (t.audioSampleRate = this.audio_metadata_.sample_rate, t.channelCount = this.audio_metadata_.channel_count, t.channelConfigCode = this.audio_metadata_.channel_config_code, t.codec = "opus", t.originalCodec = "opus", t.config = void 0, t.refSampleDuration = 20) : this.audio_metadata_.codec === "mp3" && (t.audioSampleRate = this.audio_metadata_.sample_rate, t.channelCount = this.audio_metadata_.channel_count, t.codec = "mp3", t.originalCodec = "mp3", t.config = void 0);
						this.audio_init_segment_dispatched_ == 0 && a.a.v(this.TAG, "Generated first AudioSpecificConfig for mimeType: " + t.codec), this.onTrackMetadata("audio", t), this.audio_init_segment_dispatched_ = !0, this.video_metadata_changed_ = !1;
						var i = this.media_info_;
						i.hasAudio = !0, i.audioCodec = t.originalCodec, i.audioSampleRate = t.audioSampleRate, i.audioChannelCount = t.channelCount, i.hasVideo && i.videoCodec ? i.mimeType = "video/mp2t; codecs=\"" + i.videoCodec + "," + i.audioCodec + "\"" : i.mimeType = "video/mp2t; codecs=\"" + i.audioCodec + "\"", i.isComplete() && this.onMediaInfo(i);
					}, t.prototype.dispatchPESPrivateDataDescriptor = function(e, t, n) {
						var r = new ie();
						r.pid = e, r.stream_type = t, r.descriptor = n, this.onPESPrivateDataDescriptor && this.onPESPrivateDataDescriptor(r);
					}, t.prototype.parsePESPrivateDataPayload = function(e, t, n, r, i) {
						var a = new K();
						a.pid = r, a.stream_id = i, a.len = e.byteLength, a.data = e, t == null ? a.nearest_pts = this.aac_last_sample_pts_ : a.pts = Math.floor(t / this.timescale_), n != null && (a.dts = Math.floor(n / this.timescale_)), this.onPESPrivateData && this.onPESPrivateData(a);
					}, t.prototype.parseTimedID3MetadataPayload = function(e, t, n, r, i) {
						var a = new K();
						a.pid = r, a.stream_id = i, a.len = e.byteLength, a.data = e, t != null && (a.pts = Math.floor(t / this.timescale_)), n != null && (a.dts = Math.floor(n / this.timescale_)), this.onTimedID3Metadata && this.onTimedID3Metadata(a);
					}, t.prototype.parseSMPTE2038MetadataPayload = function(e, t, n, r, i) {
						var a = new ve();
						a.pid = r, a.stream_id = i, a.len = e.byteLength, a.data = e, t != null && (a.pts = Math.floor(t / this.timescale_)), a.nearest_pts = this.aac_last_sample_pts_, n != null && (a.dts = Math.floor(n / this.timescale_)), a.ancillaries = function(e) {
							for (var t = new m(e), n = 0, r = []; n += 6, t.readBits(6) === 0;) {
								var i = t.readBool();
								n += 1;
								var a = t.readBits(11);
								n += 11;
								var o = t.readBits(12);
								n += 12;
								var s = 255 & t.readBits(10);
								n += 10;
								var c = 255 & t.readBits(10);
								n += 10;
								var l = 255 & t.readBits(10);
								n += 10;
								for (var u = new Uint8Array(l), d = 0; d < l; d++) {
									var f = 255 & t.readBits(10);
									n += 10, u[d] = f;
								}
								t.readBits(10), n += 10;
								var p = "User Defined";
								s === 65 ? c === 7 && (p = "SCTE-104") : s === 95 ? c === 220 ? p = "ARIB STD-B37 (1SEG)" : c === 221 ? p = "ARIB STD-B37 (ANALOG)" : c === 222 ? p = "ARIB STD-B37 (SD)" : c === 223 && (p = "ARIB STD-B37 (HD)") : s === 97 && (c === 1 ? p = "EIA-708" : c === 2 && (p = "EIA-608")), r.push({
									yc_indicator: i,
									line_number: a,
									horizontal_offset: o,
									did: s,
									sdid: c,
									user_data: u,
									description: p,
									information: {}
								}), t.readBits(8 - (n - Math.floor(n / 8)) % 8), n += (8 - (n - Math.floor(n / 8))) % 8;
							}
							return t.destroy(), t = null, r;
						}(e), this.onSMPTE2038Metadata && this.onSMPTE2038Metadata(a);
					}, t;
				}(O), De = function() {
					for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
					var r = Array(e), i = 0;
					for (t = 0; t < n; t++) for (var a = arguments[t], o = 0, s = a.length; o < s; o++, i++) r[i] = a[o];
					return r;
				}, Oe = function() {
					function e() {}
					return e.init = function() {
						for (var t in e.types = {
							avc1: [],
							avcC: [],
							btrt: [],
							dinf: [],
							dref: [],
							esds: [],
							ftyp: [],
							hdlr: [],
							hvc1: [],
							hvcC: [],
							mdat: [],
							mdhd: [],
							mdia: [],
							mfhd: [],
							minf: [],
							moof: [],
							moov: [],
							mp4a: [],
							mvex: [],
							mvhd: [],
							sdtp: [],
							stbl: [],
							stco: [],
							stsc: [],
							stsd: [],
							stsz: [],
							stts: [],
							tfdt: [],
							tfhd: [],
							traf: [],
							trak: [],
							trun: [],
							trex: [],
							tkhd: [],
							vmhd: [],
							smhd: [],
							".mp3": [],
							Opus: [],
							dOps: [],
							"ac-3": [],
							dac3: []
						}, e.types) e.types.hasOwnProperty(t) && (e.types[t] = [
							t.charCodeAt(0),
							t.charCodeAt(1),
							t.charCodeAt(2),
							t.charCodeAt(3)
						]);
						var n = e.constants = {};
						n.FTYP = new Uint8Array([
							105,
							115,
							111,
							109,
							0,
							0,
							0,
							1,
							105,
							115,
							111,
							109,
							97,
							118,
							99,
							49
						]), n.STSD_PREFIX = new Uint8Array([
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							1
						]), n.STTS = new Uint8Array([
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0
						]), n.STSC = n.STCO = n.STTS, n.STSZ = new Uint8Array([
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0
						]), n.HDLR_VIDEO = new Uint8Array([
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							118,
							105,
							100,
							101,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							86,
							105,
							100,
							101,
							111,
							72,
							97,
							110,
							100,
							108,
							101,
							114,
							0
						]), n.HDLR_AUDIO = new Uint8Array([
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							115,
							111,
							117,
							110,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							83,
							111,
							117,
							110,
							100,
							72,
							97,
							110,
							100,
							108,
							101,
							114,
							0
						]), n.DREF = new Uint8Array([
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							1,
							0,
							0,
							0,
							12,
							117,
							114,
							108,
							32,
							0,
							0,
							0,
							1
						]), n.SMHD = new Uint8Array([
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0
						]), n.VMHD = new Uint8Array([
							0,
							0,
							0,
							1,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0
						]);
					}, e.box = function(e) {
						for (var t = 8, n = null, r = Array.prototype.slice.call(arguments, 1), i = r.length, a = 0; a < i; a++) t += r[a].byteLength;
						(n = new Uint8Array(t))[0] = t >>> 24 & 255, n[1] = t >>> 16 & 255, n[2] = t >>> 8 & 255, n[3] = 255 & t, n.set(e, 4);
						var o = 8;
						for (a = 0; a < i; a++) n.set(r[a], o), o += r[a].byteLength;
						return n;
					}, e.generateInitSegment = function(t) {
						var n = e.box(e.types.ftyp, e.constants.FTYP), r = e.moov(t), i = new Uint8Array(n.byteLength + r.byteLength);
						return i.set(n, 0), i.set(r, n.byteLength), i;
					}, e.moov = function(t) {
						var n = e.mvhd(t.timescale, t.duration), r = e.trak(t), i = e.mvex(t);
						return e.box(e.types.moov, n, r, i);
					}, e.mvhd = function(t, n) {
						return e.box(e.types.mvhd, new Uint8Array([
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							t >>> 24 & 255,
							t >>> 16 & 255,
							t >>> 8 & 255,
							255 & t,
							n >>> 24 & 255,
							n >>> 16 & 255,
							n >>> 8 & 255,
							255 & n,
							0,
							1,
							0,
							0,
							1,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							1,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							1,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							64,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							255,
							255,
							255,
							255
						]));
					}, e.trak = function(t) {
						return e.box(e.types.trak, e.tkhd(t), e.mdia(t));
					}, e.tkhd = function(t) {
						var n = t.id, r = t.duration, i = t.presentWidth, a = t.presentHeight;
						return e.box(e.types.tkhd, new Uint8Array([
							0,
							0,
							0,
							7,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							n >>> 24 & 255,
							n >>> 16 & 255,
							n >>> 8 & 255,
							255 & n,
							0,
							0,
							0,
							0,
							r >>> 24 & 255,
							r >>> 16 & 255,
							r >>> 8 & 255,
							255 & r,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							1,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							1,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							64,
							0,
							0,
							0,
							i >>> 8 & 255,
							255 & i,
							0,
							0,
							a >>> 8 & 255,
							255 & a,
							0,
							0
						]));
					}, e.mdia = function(t) {
						return e.box(e.types.mdia, e.mdhd(t), e.hdlr(t), e.minf(t));
					}, e.mdhd = function(t) {
						var n = t.timescale, r = t.duration;
						return e.box(e.types.mdhd, new Uint8Array([
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							n >>> 24 & 255,
							n >>> 16 & 255,
							n >>> 8 & 255,
							255 & n,
							r >>> 24 & 255,
							r >>> 16 & 255,
							r >>> 8 & 255,
							255 & r,
							85,
							196,
							0,
							0
						]));
					}, e.hdlr = function(t) {
						var n = null;
						return n = t.type === "audio" ? e.constants.HDLR_AUDIO : e.constants.HDLR_VIDEO, e.box(e.types.hdlr, n);
					}, e.minf = function(t) {
						var n = null;
						return n = t.type === "audio" ? e.box(e.types.smhd, e.constants.SMHD) : e.box(e.types.vmhd, e.constants.VMHD), e.box(e.types.minf, n, e.dinf(), e.stbl(t));
					}, e.dinf = function() {
						return e.box(e.types.dinf, e.box(e.types.dref, e.constants.DREF));
					}, e.stbl = function(t) {
						return e.box(e.types.stbl, e.stsd(t), e.box(e.types.stts, e.constants.STTS), e.box(e.types.stsc, e.constants.STSC), e.box(e.types.stsz, e.constants.STSZ), e.box(e.types.stco, e.constants.STCO));
					}, e.stsd = function(t) {
						return t.type === "audio" ? t.codec === "mp3" ? e.box(e.types.stsd, e.constants.STSD_PREFIX, e.mp3(t)) : t.codec === "ac-3" ? e.box(e.types.stsd, e.constants.STSD_PREFIX, e.ac3(t)) : t.codec === "opus" ? e.box(e.types.stsd, e.constants.STSD_PREFIX, e.Opus(t)) : e.box(e.types.stsd, e.constants.STSD_PREFIX, e.mp4a(t)) : t.type === "video" && t.codec.startsWith("hvc1") ? e.box(e.types.stsd, e.constants.STSD_PREFIX, e.hvc1(t)) : e.box(e.types.stsd, e.constants.STSD_PREFIX, e.avc1(t));
					}, e.mp3 = function(t) {
						var n = t.channelCount, r = t.audioSampleRate, i = new Uint8Array([
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							1,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							n,
							0,
							16,
							0,
							0,
							0,
							0,
							r >>> 8 & 255,
							255 & r,
							0,
							0
						]);
						return e.box(e.types[".mp3"], i);
					}, e.mp4a = function(t) {
						var n = t.channelCount, r = t.audioSampleRate, i = new Uint8Array([
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							1,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							n,
							0,
							16,
							0,
							0,
							0,
							0,
							r >>> 8 & 255,
							255 & r,
							0,
							0
						]);
						return e.box(e.types.mp4a, i, e.esds(t));
					}, e.ac3 = function(t) {
						var n = t.channelCount, r = t.audioSampleRate, i = new Uint8Array([
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							1,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							n,
							0,
							16,
							0,
							0,
							0,
							0,
							r >>> 8 & 255,
							255 & r,
							0,
							0
						]);
						return e.box(e.types["ac-3"], i, e.box(e.types.dac3, new Uint8Array(t.config)));
					}, e.esds = function(t) {
						var n = t.config || [], r = n.length, i = new Uint8Array([
							0,
							0,
							0,
							0,
							3,
							23 + r,
							0,
							1,
							0,
							4,
							15 + r,
							64,
							21,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							5,
							r
						].concat(n, [
							6,
							1,
							2
						]));
						return e.box(e.types.esds, i);
					}, e.Opus = function(t) {
						var n = t.channelCount, r = t.audioSampleRate, i = new Uint8Array([
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							1,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							n,
							0,
							16,
							0,
							0,
							0,
							0,
							r >>> 8 & 255,
							255 & r,
							0,
							0
						]);
						return e.box(e.types.Opus, i, e.dOps(t));
					}, e.dOps = function(t) {
						var n = t.channelCount, r = t.channelConfigCode, i = t.audioSampleRate;
						if (t.config) return e.box(e.types.dOps, o);
						var a = [];
						switch (r) {
							case 1:
							case 2:
								a = [0];
								break;
							case 0:
								a = [
									255,
									1,
									1,
									0,
									1
								];
								break;
							case 128:
								a = [
									255,
									2,
									0,
									0,
									1
								];
								break;
							case 3:
								a = [
									1,
									2,
									1,
									0,
									2,
									1
								];
								break;
							case 4:
								a = [
									1,
									2,
									2,
									0,
									1,
									2,
									3
								];
								break;
							case 5:
								a = [
									1,
									3,
									2,
									0,
									4,
									1,
									2,
									3
								];
								break;
							case 6:
								a = [
									1,
									4,
									2,
									0,
									4,
									1,
									2,
									3,
									5
								];
								break;
							case 7:
								a = [
									1,
									4,
									2,
									0,
									4,
									1,
									2,
									3,
									5,
									6
								];
								break;
							case 8:
								a = [
									1,
									5,
									3,
									0,
									6,
									1,
									2,
									3,
									4,
									5,
									7
								];
								break;
							case 130:
								a = [
									1,
									1,
									2,
									0,
									1
								];
								break;
							case 131:
								a = [
									1,
									1,
									3,
									0,
									1,
									2
								];
								break;
							case 132:
								a = [
									1,
									1,
									4,
									0,
									1,
									2,
									3
								];
								break;
							case 133:
								a = [
									1,
									1,
									5,
									0,
									1,
									2,
									3,
									4
								];
								break;
							case 134:
								a = [
									1,
									1,
									6,
									0,
									1,
									2,
									3,
									4,
									5
								];
								break;
							case 135:
								a = [
									1,
									1,
									7,
									0,
									1,
									2,
									3,
									4,
									5,
									6
								];
								break;
							case 136: a = [
								1,
								1,
								8,
								0,
								1,
								2,
								3,
								4,
								5,
								6,
								7
							];
						}
						var o = new Uint8Array(De([
							0,
							n,
							0,
							0,
							i >>> 24 & 255,
							i >>> 17 & 255,
							i >>> 8 & 255,
							i >>> 0 & 255,
							0,
							0
						], a));
						return e.box(e.types.dOps, o);
					}, e.avc1 = function(t) {
						var n = t.avcc, r = t.codecWidth, i = t.codecHeight, a = new Uint8Array([
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							1,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							r >>> 8 & 255,
							255 & r,
							i >>> 8 & 255,
							255 & i,
							0,
							72,
							0,
							0,
							0,
							72,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							1,
							10,
							120,
							113,
							113,
							47,
							102,
							108,
							118,
							46,
							106,
							115,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							24,
							255,
							255
						]);
						return e.box(e.types.avc1, a, e.box(e.types.avcC, n));
					}, e.hvc1 = function(t) {
						var n = t.hvcc, r = t.codecWidth, i = t.codecHeight, a = new Uint8Array([
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							1,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							r >>> 8 & 255,
							255 & r,
							i >>> 8 & 255,
							255 & i,
							0,
							72,
							0,
							0,
							0,
							72,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							1,
							10,
							120,
							113,
							113,
							47,
							102,
							108,
							118,
							46,
							106,
							115,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							24,
							255,
							255
						]);
						return e.box(e.types.hvc1, a, e.box(e.types.hvcC, n));
					}, e.mvex = function(t) {
						return e.box(e.types.mvex, e.trex(t));
					}, e.trex = function(t) {
						var n = t.id, r = new Uint8Array([
							0,
							0,
							0,
							0,
							n >>> 24 & 255,
							n >>> 16 & 255,
							n >>> 8 & 255,
							255 & n,
							0,
							0,
							0,
							1,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							1,
							0,
							1
						]);
						return e.box(e.types.trex, r);
					}, e.moof = function(t, n) {
						return e.box(e.types.moof, e.mfhd(t.sequenceNumber), e.traf(t, n));
					}, e.mfhd = function(t) {
						var n = new Uint8Array([
							0,
							0,
							0,
							0,
							t >>> 24 & 255,
							t >>> 16 & 255,
							t >>> 8 & 255,
							255 & t
						]);
						return e.box(e.types.mfhd, n);
					}, e.traf = function(t, n) {
						var r = t.id, i = e.box(e.types.tfhd, new Uint8Array([
							0,
							0,
							0,
							0,
							r >>> 24 & 255,
							r >>> 16 & 255,
							r >>> 8 & 255,
							255 & r
						])), a = e.box(e.types.tfdt, new Uint8Array([
							0,
							0,
							0,
							0,
							n >>> 24 & 255,
							n >>> 16 & 255,
							n >>> 8 & 255,
							255 & n
						])), o = e.sdtp(t), s = e.trun(t, o.byteLength + 16 + 16 + 8 + 16 + 8 + 8);
						return e.box(e.types.traf, i, a, s, o);
					}, e.sdtp = function(t) {
						for (var n = t.samples || [], r = n.length, i = new Uint8Array(4 + r), a = 0; a < r; a++) {
							var o = n[a].flags;
							i[a + 4] = o.isLeading << 6 | o.dependsOn << 4 | o.isDependedOn << 2 | o.hasRedundancy;
						}
						return e.box(e.types.sdtp, i);
					}, e.trun = function(t, n) {
						var r = t.samples || [], i = r.length, a = 12 + 16 * i, o = new Uint8Array(a);
						n += 8 + a, o.set([
							0,
							0,
							15,
							1,
							i >>> 24 & 255,
							i >>> 16 & 255,
							i >>> 8 & 255,
							255 & i,
							n >>> 24 & 255,
							n >>> 16 & 255,
							n >>> 8 & 255,
							255 & n
						], 0);
						for (var s = 0; s < i; s++) {
							var c = r[s].duration, l = r[s].size, u = r[s].flags, d = r[s].cts;
							o.set([
								c >>> 24 & 255,
								c >>> 16 & 255,
								c >>> 8 & 255,
								255 & c,
								l >>> 24 & 255,
								l >>> 16 & 255,
								l >>> 8 & 255,
								255 & l,
								u.isLeading << 2 | u.dependsOn,
								u.isDependedOn << 6 | u.hasRedundancy << 4 | u.isNonSync,
								0,
								0,
								d >>> 24 & 255,
								d >>> 16 & 255,
								d >>> 8 & 255,
								255 & d
							], 12 + 16 * s);
						}
						return e.box(e.types.trun, o);
					}, e.mdat = function(t) {
						return e.box(e.types.mdat, t);
					}, e;
				}();
				Oe.init();
				var ke = Oe, Ae = function() {
					function e() {}
					return e.getSilentFrame = function(e, t) {
						if (e === "mp4a.40.2") {
							if (t === 1) return new Uint8Array([
								0,
								200,
								0,
								128,
								35,
								128
							]);
							if (t === 2) return new Uint8Array([
								33,
								0,
								73,
								144,
								2,
								25,
								0,
								35,
								128
							]);
							if (t === 3) return new Uint8Array([
								0,
								200,
								0,
								128,
								32,
								132,
								1,
								38,
								64,
								8,
								100,
								0,
								142
							]);
							if (t === 4) return new Uint8Array([
								0,
								200,
								0,
								128,
								32,
								132,
								1,
								38,
								64,
								8,
								100,
								0,
								128,
								44,
								128,
								8,
								2,
								56
							]);
							if (t === 5) return new Uint8Array([
								0,
								200,
								0,
								128,
								32,
								132,
								1,
								38,
								64,
								8,
								100,
								0,
								130,
								48,
								4,
								153,
								0,
								33,
								144,
								2,
								56
							]);
							if (t === 6) return new Uint8Array([
								0,
								200,
								0,
								128,
								32,
								132,
								1,
								38,
								64,
								8,
								100,
								0,
								130,
								48,
								4,
								153,
								0,
								33,
								144,
								2,
								0,
								178,
								0,
								32,
								8,
								224
							]);
						} else {
							if (t === 1) return new Uint8Array([
								1,
								64,
								34,
								128,
								163,
								78,
								230,
								128,
								186,
								8,
								0,
								0,
								0,
								28,
								6,
								241,
								193,
								10,
								90,
								90,
								90,
								90,
								90,
								90,
								90,
								90,
								90,
								90,
								90,
								90,
								90,
								90,
								90,
								90,
								90,
								90,
								90,
								90,
								90,
								90,
								90,
								90,
								90,
								90,
								90,
								90,
								90,
								90,
								90,
								90,
								90,
								90,
								90,
								90,
								90,
								90,
								90,
								90,
								94
							]);
							if (t === 2 || t === 3) return new Uint8Array([
								1,
								64,
								34,
								128,
								163,
								94,
								230,
								128,
								186,
								8,
								0,
								0,
								0,
								0,
								149,
								0,
								6,
								241,
								161,
								10,
								90,
								90,
								90,
								90,
								90,
								90,
								90,
								90,
								90,
								90,
								90,
								90,
								90,
								90,
								90,
								90,
								90,
								90,
								90,
								90,
								90,
								90,
								90,
								90,
								90,
								90,
								90,
								90,
								90,
								90,
								90,
								90,
								90,
								90,
								90,
								90,
								90,
								90,
								94
							]);
						}
						return null;
					}, e;
				}(), Q = n(7), je = function() {
					function e(e) {
						this.TAG = "MP4Remuxer", this._config = e, this._isLive = !0 === e.isLive, this._dtsBase = -1, this._dtsBaseInited = !1, this._audioDtsBase = Infinity, this._videoDtsBase = Infinity, this._audioNextDts = void 0, this._videoNextDts = void 0, this._audioStashedLastSample = null, this._videoStashedLastSample = null, this._audioMeta = null, this._videoMeta = null, this._audioSegmentInfoList = new Q.c("audio"), this._videoSegmentInfoList = new Q.c("video"), this._onInitSegment = null, this._onMediaSegment = null, this._forceFirstIDR = !(!o.a.chrome || !(o.a.version.major < 50 || o.a.version.major === 50 && o.a.version.build < 2661)), this._fillSilentAfterSeek = o.a.msedge || o.a.msie, this._mp3UseMpegAudio = !o.a.firefox, this._fillAudioTimestampGap = this._config.fixAudioTimestampGap;
					}
					return e.prototype.destroy = function() {
						this._dtsBase = -1, this._dtsBaseInited = !1, this._audioMeta = null, this._videoMeta = null, this._audioSegmentInfoList.clear(), this._audioSegmentInfoList = null, this._videoSegmentInfoList.clear(), this._videoSegmentInfoList = null, this._onInitSegment = null, this._onMediaSegment = null;
					}, e.prototype.bindDataSource = function(e) {
						return e.onDataAvailable = this.remux.bind(this), e.onTrackMetadata = this._onTrackMetadataReceived.bind(this), this;
					}, Object.defineProperty(e.prototype, "onInitSegment", {
						get: function() {
							return this._onInitSegment;
						},
						set: function(e) {
							this._onInitSegment = e;
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "onMediaSegment", {
						get: function() {
							return this._onMediaSegment;
						},
						set: function(e) {
							this._onMediaSegment = e;
						},
						enumerable: !1,
						configurable: !0
					}), e.prototype.insertDiscontinuity = function() {
						this._audioNextDts = this._videoNextDts = void 0;
					}, e.prototype.seek = function(e) {
						this._audioStashedLastSample = null, this._videoStashedLastSample = null, this._videoSegmentInfoList.clear(), this._audioSegmentInfoList.clear();
					}, e.prototype.remux = function(e, t) {
						if (!this._onMediaSegment) throw new d.a("MP4Remuxer: onMediaSegment callback must be specificed!");
						this._dtsBaseInited || this._calculateDtsBase(e, t), t && this._remuxVideo(t), e && this._remuxAudio(e);
					}, e.prototype._onTrackMetadataReceived = function(e, t) {
						var n = null, r = "mp4", i = t.codec;
						if (e === "audio") this._audioMeta = t, t.codec === "mp3" && this._mp3UseMpegAudio ? (r = "mpeg", i = "", n = new Uint8Array()) : n = ke.generateInitSegment(t);
						else {
							if (e !== "video") return;
							this._videoMeta = t, n = ke.generateInitSegment(t);
						}
						if (!this._onInitSegment) throw new d.a("MP4Remuxer: onInitSegment callback must be specified!");
						this._onInitSegment(e, {
							type: e,
							data: n.buffer,
							codec: i,
							container: e + "/" + r,
							mediaDuration: t.duration
						});
					}, e.prototype._calculateDtsBase = function(e, t) {
						this._dtsBaseInited ||= (e && e.samples && e.samples.length && (this._audioDtsBase = e.samples[0].dts), t && t.samples && t.samples.length && (this._videoDtsBase = t.samples[0].dts), this._dtsBase = Math.min(this._audioDtsBase, this._videoDtsBase), !0);
					}, e.prototype.getTimestampBase = function() {
						if (this._dtsBaseInited) return this._dtsBase;
					}, e.prototype.flushStashedSamples = function() {
						var e = this._videoStashedLastSample, t = this._audioStashedLastSample, n = {
							type: "video",
							id: 1,
							sequenceNumber: 0,
							samples: [],
							length: 0
						};
						e != null && (n.samples.push(e), n.length = e.length);
						var r = {
							type: "audio",
							id: 2,
							sequenceNumber: 0,
							samples: [],
							length: 0
						};
						t != null && (r.samples.push(t), r.length = t.length), this._videoStashedLastSample = null, this._audioStashedLastSample = null, this._remuxVideo(n, !0), this._remuxAudio(r, !0);
					}, e.prototype._remuxAudio = function(e, t) {
						if (this._audioMeta != null) {
							var n, r = e, i = r.samples, s = void 0, c = -1, l = this._audioMeta.refSampleDuration, u = this._audioMeta.codec === "mp3" && this._mp3UseMpegAudio, d = this._dtsBaseInited && this._audioNextDts === void 0, f = !1;
							if (i && i.length !== 0 && (i.length !== 1 || t)) {
								var p = 0, m = null, h = 0;
								u ? (p = 0, h = r.length) : (p = 8, h = 8 + r.length);
								var g = null;
								if (i.length > 1 && (h -= (g = i.pop()).length), this._audioStashedLastSample != null) {
									var _ = this._audioStashedLastSample;
									this._audioStashedLastSample = null, i.unshift(_), h += _.length;
								}
								g != null && (this._audioStashedLastSample = g);
								var v = i[0].dts - this._dtsBase;
								if (this._audioNextDts) s = v - this._audioNextDts;
								else if (this._audioSegmentInfoList.isEmpty()) s = 0, this._fillSilentAfterSeek && !this._videoSegmentInfoList.isEmpty() && this._audioMeta.originalCodec !== "mp3" && (f = !0);
								else {
									var y = this._audioSegmentInfoList.getLastSampleBefore(v);
									if (y != null) {
										var b = v - (y.originalDts + y.duration);
										b <= 3 && (b = 0), s = v - (y.dts + y.duration + b);
									} else s = 0;
								}
								if (f) {
									var x = v - s, S = this._videoSegmentInfoList.getLastSegmentBefore(v);
									if (S != null && S.beginDts < x) {
										if (N = Ae.getSilentFrame(this._audioMeta.originalCodec, this._audioMeta.channelCount)) {
											var C = S.beginDts, w = x - S.beginDts;
											a.a.v(this.TAG, "InsertPrefixSilentAudio: dts: " + C + ", duration: " + w), i.unshift({
												unit: N,
												dts: C,
												pts: C
											}), h += N.byteLength;
										}
									} else f = !1;
								}
								for (var T = [], E = 0; E < i.length; E++) {
									var D = (_ = i[E]).unit, O = _.dts - this._dtsBase, k = (C = O, !1), A = null, j = 0;
									if (!(O < -.001)) {
										if (this._audioMeta.codec !== "mp3") {
											var M = O;
											if (this._audioNextDts && (M = this._audioNextDts), (s = O - M) <= -3 * l) {
												a.a.w(this.TAG, "Dropping 1 audio frame (originalDts: " + O + " ms ,curRefDts: " + M + " ms)  due to dtsCorrection: " + s + " ms overlap.");
												continue;
											}
											if (s >= 3 * l && this._fillAudioTimestampGap && !o.a.safari) {
												k = !0;
												var N, P = Math.floor(s / l);
												a.a.w(this.TAG, "Large audio timestamp gap detected, may cause AV sync to drift. Silent frames will be generated to avoid unsync.\noriginalDts: " + O + " ms, curRefDts: " + M + " ms, dtsCorrection: " + Math.round(s) + " ms, generate: " + P + " frames"), C = Math.floor(M), j = Math.floor(M + l) - C, (N = Ae.getSilentFrame(this._audioMeta.originalCodec, this._audioMeta.channelCount)) ?? (a.a.w(this.TAG, "Unable to generate silent frame for " + this._audioMeta.originalCodec + " with " + this._audioMeta.channelCount + " channels, repeat last frame"), N = D), A = [];
												for (var F = 0; F < P; F++) {
													M += l;
													var I = Math.floor(M), L = Math.floor(M + l) - I, ee = {
														dts: I,
														pts: I,
														cts: 0,
														unit: N,
														size: N.byteLength,
														duration: L,
														originalDts: O,
														flags: {
															isLeading: 0,
															dependsOn: 1,
															isDependedOn: 0,
															hasRedundancy: 0
														}
													};
													A.push(ee), h += ee.size;
												}
												this._audioNextDts = M + l;
											} else C = Math.floor(M), j = Math.floor(M + l) - C, this._audioNextDts = M + l;
										} else C = O - s, j = E === i.length - 1 ? g == null ? T.length >= 1 ? T[T.length - 1].duration : Math.floor(l) : g.dts - this._dtsBase - s - C : i[E + 1].dts - this._dtsBase - s - C, this._audioNextDts = C + j;
										c === -1 && (c = C), T.push({
											dts: C,
											pts: C,
											cts: 0,
											unit: _.unit,
											size: _.unit.byteLength,
											duration: j,
											originalDts: O,
											flags: {
												isLeading: 0,
												dependsOn: 1,
												isDependedOn: 0,
												hasRedundancy: 0
											}
										}), k && T.push.apply(T, A);
									}
								}
								if (T.length === 0) return r.samples = [], void (r.length = 0);
								for (u ? m = new Uint8Array(h) : ((m = new Uint8Array(h))[0] = h >>> 24 & 255, m[1] = h >>> 16 & 255, m[2] = h >>> 8 & 255, m[3] = 255 & h, m.set(ke.types.mdat, 4)), E = 0; E < T.length; E++) D = T[E].unit, m.set(D, p), p += D.byteLength;
								var R = T[T.length - 1];
								n = R.dts + R.duration;
								var z = new Q.b();
								z.beginDts = c, z.endDts = n, z.beginPts = c, z.endPts = n, z.originalBeginDts = T[0].originalDts, z.originalEndDts = R.originalDts + R.duration, z.firstSample = new Q.d(T[0].dts, T[0].pts, T[0].duration, T[0].originalDts, !1), z.lastSample = new Q.d(R.dts, R.pts, R.duration, R.originalDts, !1), this._isLive || this._audioSegmentInfoList.append(z), r.samples = T, r.sequenceNumber++;
								var B = null;
								B = u ? new Uint8Array() : ke.moof(r, c), r.samples = [], r.length = 0;
								var V = {
									type: "audio",
									data: this._mergeBoxes(B, m).buffer,
									sampleCount: T.length,
									info: z
								};
								u && d && (V.timestampOffset = c), this._onMediaSegment("audio", V);
							}
						}
					}, e.prototype._remuxVideo = function(e, t) {
						if (this._videoMeta != null) {
							var n, r, i = e, a = i.samples, o = void 0, s = -1, c = -1;
							if (a && a.length !== 0 && (a.length !== 1 || t)) {
								var l = 8, u = null, d = 8 + e.length, f = null;
								if (a.length > 1 && (d -= (f = a.pop()).length), this._videoStashedLastSample != null) {
									var p = this._videoStashedLastSample;
									this._videoStashedLastSample = null, a.unshift(p), d += p.length;
								}
								f != null && (this._videoStashedLastSample = f);
								var m = a[0].dts - this._dtsBase;
								if (this._videoNextDts) o = m - this._videoNextDts;
								else if (this._videoSegmentInfoList.isEmpty()) o = 0;
								else {
									var h = this._videoSegmentInfoList.getLastSampleBefore(m);
									if (h != null) {
										var g = m - (h.originalDts + h.duration);
										g <= 3 && (g = 0), o = m - (h.dts + h.duration + g);
									} else o = 0;
								}
								for (var _ = new Q.b(), v = [], y = 0; y < a.length; y++) {
									var b = (p = a[y]).dts - this._dtsBase, x = p.isKeyframe, S = b - o, C = p.cts, w = S + C;
									s === -1 && (s = S, c = w);
									var T = 0;
									if (T = y === a.length - 1 ? f == null ? v.length >= 1 ? v[v.length - 1].duration : Math.floor(this._videoMeta.refSampleDuration) : f.dts - this._dtsBase - o - S : a[y + 1].dts - this._dtsBase - o - S, x) {
										var E = new Q.d(S, w, T, p.dts, !0);
										E.fileposition = p.fileposition, _.appendSyncPoint(E);
									}
									v.push({
										dts: S,
										pts: w,
										cts: C,
										units: p.units,
										size: p.length,
										isKeyframe: x,
										duration: T,
										originalDts: b,
										flags: {
											isLeading: 0,
											dependsOn: x ? 2 : 1,
											isDependedOn: +!!x,
											hasRedundancy: 0,
											isNonSync: +!x
										}
									});
								}
								for ((u = new Uint8Array(d))[0] = d >>> 24 & 255, u[1] = d >>> 16 & 255, u[2] = d >>> 8 & 255, u[3] = 255 & d, u.set(ke.types.mdat, 4), y = 0; y < v.length; y++) for (var D = v[y].units; D.length;) {
									var O = D.shift().data;
									u.set(O, l), l += O.byteLength;
								}
								var k = v[v.length - 1];
								if (n = k.dts + k.duration, r = k.pts + k.duration, this._videoNextDts = n, _.beginDts = s, _.endDts = n, _.beginPts = c, _.endPts = r, _.originalBeginDts = v[0].originalDts, _.originalEndDts = k.originalDts + k.duration, _.firstSample = new Q.d(v[0].dts, v[0].pts, v[0].duration, v[0].originalDts, v[0].isKeyframe), _.lastSample = new Q.d(k.dts, k.pts, k.duration, k.originalDts, k.isKeyframe), this._isLive || this._videoSegmentInfoList.append(_), i.samples = v, i.sequenceNumber++, this._forceFirstIDR) {
									var A = v[0].flags;
									A.dependsOn = 2, A.isNonSync = 0;
								}
								var j = ke.moof(i, s);
								i.samples = [], i.length = 0, this._onMediaSegment("video", {
									type: "video",
									data: this._mergeBoxes(j, u).buffer,
									sampleCount: v.length,
									info: _
								});
							}
						}
					}, e.prototype._mergeBoxes = function(e, t) {
						var n = new Uint8Array(e.byteLength + t.byteLength);
						return n.set(e, 0), n.set(t, e.byteLength), n;
					}, e;
				}(), Me = n(11), $ = n(1);
				t.a = function() {
					function e(e, t) {
						this.TAG = "TransmuxingController", this._emitter = new i.a(), this._config = t, e.segments ||= [{
							duration: e.duration,
							filesize: e.filesize,
							url: e.url
						}], typeof e.cors != "boolean" && (e.cors = !0), typeof e.withCredentials != "boolean" && (e.withCredentials = !1), this._mediaDataSource = e, this._currentSegmentIndex = 0;
						var n = 0;
						this._mediaDataSource.segments.forEach((function(r) {
							r.timestampBase = n, n += r.duration, r.cors = e.cors, r.withCredentials = e.withCredentials, t.referrerPolicy && (r.referrerPolicy = t.referrerPolicy);
						})), isNaN(n) || this._mediaDataSource.duration === n || (this._mediaDataSource.duration = n), this._mediaInfo = null, this._demuxer = null, this._remuxer = null, this._ioctl = null, this._pendingSeekTime = null, this._pendingResolveSeekPoint = null, this._statisticsReporter = null;
					}
					return e.prototype.destroy = function() {
						this._mediaInfo = null, this._mediaDataSource = null, this._statisticsReporter && this._disableStatisticsReporter(), this._ioctl &&= (this._ioctl.destroy(), null), this._demuxer &&= (this._demuxer.destroy(), null), this._remuxer &&= (this._remuxer.destroy(), null), this._emitter.removeAllListeners(), this._emitter = null;
					}, e.prototype.on = function(e, t) {
						this._emitter.addListener(e, t);
					}, e.prototype.off = function(e, t) {
						this._emitter.removeListener(e, t);
					}, e.prototype.start = function() {
						this._loadSegment(0), this._enableStatisticsReporter();
					}, e.prototype._loadSegment = function(e, t) {
						this._currentSegmentIndex = e;
						var n = this._mediaDataSource.segments[e], r = this._ioctl = new Me.a(n, this._config, e);
						r.onError = this._onIOException.bind(this), r.onSeeked = this._onIOSeeked.bind(this), r.onComplete = this._onIOComplete.bind(this), r.onRedirect = this._onIORedirect.bind(this), r.onRecoveredEarlyEof = this._onIORecoveredEarlyEof.bind(this), t ? this._demuxer.bindDataSource(this._ioctl) : r.onDataArrival = this._onInitChunkArrival.bind(this), r.open(t);
					}, e.prototype.stop = function() {
						this._internalAbort(), this._disableStatisticsReporter();
					}, e.prototype._internalAbort = function() {
						this._ioctl &&= (this._ioctl.destroy(), null);
					}, e.prototype.pause = function() {
						this._ioctl && this._ioctl.isWorking() && (this._ioctl.pause(), this._disableStatisticsReporter());
					}, e.prototype.resume = function() {
						this._ioctl && this._ioctl.isPaused() && (this._ioctl.resume(), this._enableStatisticsReporter());
					}, e.prototype.seek = function(e) {
						if (this._mediaInfo != null && this._mediaInfo.isSeekable()) {
							var t = this._searchSegmentIndexContains(e);
							if (t === this._currentSegmentIndex) {
								var n = this._mediaInfo.segments[t];
								if (n == null) this._pendingSeekTime = e;
								else {
									var r = n.getNearestKeyframe(e);
									this._remuxer.seek(r.milliseconds), this._ioctl.seek(r.fileposition), this._pendingResolveSeekPoint = r.milliseconds;
								}
							} else {
								var i = this._mediaInfo.segments[t];
								i == null ? (this._pendingSeekTime = e, this._internalAbort(), this._remuxer.seek(), this._remuxer.insertDiscontinuity(), this._loadSegment(t)) : (r = i.getNearestKeyframe(e), this._internalAbort(), this._remuxer.seek(e), this._remuxer.insertDiscontinuity(), this._demuxer.resetMediaInfo(), this._demuxer.timestampBase = this._mediaDataSource.segments[t].timestampBase, this._loadSegment(t, r.fileposition), this._pendingResolveSeekPoint = r.milliseconds, this._reportSegmentMediaInfo(t));
							}
							this._enableStatisticsReporter();
						}
					}, e.prototype._searchSegmentIndexContains = function(e) {
						for (var t = this._mediaDataSource.segments, n = t.length - 1, r = 0; r < t.length; r++) if (e < t[r].timestampBase) {
							n = r - 1;
							break;
						}
						return n;
					}, e.prototype._onInitChunkArrival = function(e, t) {
						var n = this, r = 0;
						if (t > 0) this._demuxer.bindDataSource(this._ioctl), this._demuxer.timestampBase = this._mediaDataSource.segments[this._currentSegmentIndex].timestampBase, r = this._demuxer.parseChunks(e, t);
						else {
							var i = null;
							(i = D.probe(e)).match && (this._setupFLVDemuxerRemuxer(i), r = this._demuxer.parseChunks(e, t)), i.match || i.needMoreData || (i = Ee.probe(e)).match && (this._setupTSDemuxerRemuxer(i), r = this._demuxer.parseChunks(e, t)), i.match || i.needMoreData || (i = null, a.a.e(this.TAG, "Non MPEG-TS/FLV, Unsupported media type!"), Promise.resolve().then((function() {
								n._internalAbort();
							})), this._emitter.emit($.a.DEMUX_ERROR, g.a.FORMAT_UNSUPPORTED, "Non MPEG-TS/FLV, Unsupported media type!"));
						}
						return r;
					}, e.prototype._setupFLVDemuxerRemuxer = function(e) {
						this._demuxer = new D(e, this._config), this._remuxer ||= new je(this._config);
						var t = this._mediaDataSource;
						t.duration == null || isNaN(t.duration) || (this._demuxer.overridedDuration = t.duration), typeof t.hasAudio == "boolean" && (this._demuxer.overridedHasAudio = t.hasAudio), typeof t.hasVideo == "boolean" && (this._demuxer.overridedHasVideo = t.hasVideo), this._demuxer.timestampBase = t.segments[this._currentSegmentIndex].timestampBase, this._demuxer.onError = this._onDemuxException.bind(this), this._demuxer.onMediaInfo = this._onMediaInfo.bind(this), this._demuxer.onMetaDataArrived = this._onMetaDataArrived.bind(this), this._demuxer.onScriptDataArrived = this._onScriptDataArrived.bind(this), this._remuxer.bindDataSource(this._demuxer.bindDataSource(this._ioctl)), this._remuxer.onInitSegment = this._onRemuxerInitSegmentArrival.bind(this), this._remuxer.onMediaSegment = this._onRemuxerMediaSegmentArrival.bind(this);
					}, e.prototype._setupTSDemuxerRemuxer = function(e) {
						var t = this._demuxer = new Ee(e, this._config);
						this._remuxer ||= new je(this._config), t.onError = this._onDemuxException.bind(this), t.onMediaInfo = this._onMediaInfo.bind(this), t.onMetaDataArrived = this._onMetaDataArrived.bind(this), t.onTimedID3Metadata = this._onTimedID3Metadata.bind(this), t.onSMPTE2038Metadata = this._onSMPTE2038Metadata.bind(this), t.onSCTE35Metadata = this._onSCTE35Metadata.bind(this), t.onPESPrivateDataDescriptor = this._onPESPrivateDataDescriptor.bind(this), t.onPESPrivateData = this._onPESPrivateData.bind(this), this._remuxer.bindDataSource(this._demuxer), this._demuxer.bindDataSource(this._ioctl), this._remuxer.onInitSegment = this._onRemuxerInitSegmentArrival.bind(this), this._remuxer.onMediaSegment = this._onRemuxerMediaSegmentArrival.bind(this);
					}, e.prototype._onMediaInfo = function(e) {
						var t = this;
						this._mediaInfo ?? (this._mediaInfo = Object.assign({}, e), this._mediaInfo.keyframesIndex = null, this._mediaInfo.segments = [], this._mediaInfo.segmentCount = this._mediaDataSource.segments.length, Object.setPrototypeOf(this._mediaInfo, s.a.prototype));
						var n = Object.assign({}, e);
						Object.setPrototypeOf(n, s.a.prototype), this._mediaInfo.segments[this._currentSegmentIndex] = n, this._reportSegmentMediaInfo(this._currentSegmentIndex), this._pendingSeekTime != null && Promise.resolve().then((function() {
							var e = t._pendingSeekTime;
							t._pendingSeekTime = null, t.seek(e);
						}));
					}, e.prototype._onMetaDataArrived = function(e) {
						this._emitter.emit($.a.METADATA_ARRIVED, e);
					}, e.prototype._onScriptDataArrived = function(e) {
						this._emitter.emit($.a.SCRIPTDATA_ARRIVED, e);
					}, e.prototype._onTimedID3Metadata = function(e) {
						var t = this._remuxer.getTimestampBase();
						t != null && (e.pts != null && (e.pts -= t), e.dts != null && (e.dts -= t), this._emitter.emit($.a.TIMED_ID3_METADATA_ARRIVED, e));
					}, e.prototype._onSMPTE2038Metadata = function(e) {
						var t = this._remuxer.getTimestampBase();
						t != null && (e.pts != null && (e.pts -= t), e.dts != null && (e.dts -= t), e.nearest_pts != null && (e.nearest_pts -= t), this._emitter.emit($.a.SMPTE2038_METADATA_ARRIVED, e));
					}, e.prototype._onSCTE35Metadata = function(e) {
						var t = this._remuxer.getTimestampBase();
						t != null && (e.pts != null && (e.pts -= t), e.nearest_pts != null && (e.nearest_pts -= t), this._emitter.emit($.a.SCTE35_METADATA_ARRIVED, e));
					}, e.prototype._onPESPrivateDataDescriptor = function(e) {
						this._emitter.emit($.a.PES_PRIVATE_DATA_DESCRIPTOR, e);
					}, e.prototype._onPESPrivateData = function(e) {
						var t = this._remuxer.getTimestampBase();
						t != null && (e.pts != null && (e.pts -= t), e.nearest_pts != null && (e.nearest_pts -= t), e.dts != null && (e.dts -= t), this._emitter.emit($.a.PES_PRIVATE_DATA_ARRIVED, e));
					}, e.prototype._onIOSeeked = function() {
						this._remuxer.insertDiscontinuity();
					}, e.prototype._onIOComplete = function(e) {
						var t = e + 1;
						t < this._mediaDataSource.segments.length ? (this._internalAbort(), this._remuxer && this._remuxer.flushStashedSamples(), this._loadSegment(t)) : (this._remuxer && this._remuxer.flushStashedSamples(), this._emitter.emit($.a.LOADING_COMPLETE), this._disableStatisticsReporter());
					}, e.prototype._onIORedirect = function(e) {
						var t = this._ioctl.extraData;
						this._mediaDataSource.segments[t].redirectedURL = e;
					}, e.prototype._onIORecoveredEarlyEof = function() {
						this._emitter.emit($.a.RECOVERED_EARLY_EOF);
					}, e.prototype._onIOException = function(e, t) {
						a.a.e(this.TAG, "IOException: type = " + e + ", code = " + t.code + ", msg = " + t.msg), this._emitter.emit($.a.IO_ERROR, e, t), this._disableStatisticsReporter();
					}, e.prototype._onDemuxException = function(e, t) {
						a.a.e(this.TAG, "DemuxException: type = " + e + ", info = " + t), this._emitter.emit($.a.DEMUX_ERROR, e, t);
					}, e.prototype._onRemuxerInitSegmentArrival = function(e, t) {
						this._emitter.emit($.a.INIT_SEGMENT, e, t);
					}, e.prototype._onRemuxerMediaSegmentArrival = function(e, t) {
						if (this._pendingSeekTime == null && (this._emitter.emit($.a.MEDIA_SEGMENT, e, t), this._pendingResolveSeekPoint != null && e === "video")) {
							var n = t.info.syncPoints, r = this._pendingResolveSeekPoint;
							this._pendingResolveSeekPoint = null, o.a.safari && n.length > 0 && n[0].originalDts === r && (r = n[0].pts), this._emitter.emit($.a.RECOMMEND_SEEKPOINT, r);
						}
					}, e.prototype._enableStatisticsReporter = function() {
						this._statisticsReporter ??= self.setInterval(this._reportStatisticsInfo.bind(this), this._config.statisticsInfoReportInterval);
					}, e.prototype._disableStatisticsReporter = function() {
						this._statisticsReporter &&= (self.clearInterval(this._statisticsReporter), null);
					}, e.prototype._reportSegmentMediaInfo = function(e) {
						var t = this._mediaInfo.segments[e], n = Object.assign({}, t);
						n.duration = this._mediaInfo.duration, n.segmentCount = this._mediaInfo.segmentCount, delete n.segments, delete n.keyframesIndex, this._emitter.emit($.a.MEDIA_INFO, n);
					}, e.prototype._reportStatisticsInfo = function() {
						var e = {};
						e.url = this._ioctl.currentURL, e.hasRedirect = this._ioctl.hasRedirect, e.hasRedirect && (e.redirectedURL = this._ioctl.currentRedirectedURL), e.speed = this._ioctl.currentSpeed, e.loaderType = this._ioctl.loaderType, e.currentSegmentIndex = this._currentSegmentIndex, e.totalSegmentCount = this._mediaDataSource.segments.length, this._emitter.emit($.a.STATISTICS_INFO, e);
					}, e;
				}();
			},
			function(e, t, n) {
				var r, i = n(0), a = function() {
					function e() {
						this._firstCheckpoint = 0, this._lastCheckpoint = 0, this._intervalBytes = 0, this._totalBytes = 0, this._lastSecondBytes = 0, self.performance && self.performance.now ? this._now = self.performance.now.bind(self.performance) : this._now = Date.now;
					}
					return e.prototype.reset = function() {
						this._firstCheckpoint = this._lastCheckpoint = 0, this._totalBytes = this._intervalBytes = 0, this._lastSecondBytes = 0;
					}, e.prototype.addBytes = function(e) {
						this._firstCheckpoint === 0 ? (this._firstCheckpoint = this._now(), this._lastCheckpoint = this._firstCheckpoint, this._intervalBytes += e, this._totalBytes += e) : this._now() - this._lastCheckpoint < 1e3 ? (this._intervalBytes += e, this._totalBytes += e) : (this._lastSecondBytes = this._intervalBytes, this._intervalBytes = e, this._totalBytes += e, this._lastCheckpoint = this._now());
					}, Object.defineProperty(e.prototype, "currentKBps", {
						get: function() {
							this.addBytes(0);
							var e = (this._now() - this._lastCheckpoint) / 1e3;
							return e == 0 && (e = 1), this._intervalBytes / e / 1024;
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "lastSecondKBps", {
						get: function() {
							return this.addBytes(0), this._lastSecondBytes === 0 ? this._now() - this._lastCheckpoint >= 500 ? this.currentKBps : 0 : this._lastSecondBytes / 1024;
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "averageKBps", {
						get: function() {
							var e = (this._now() - this._firstCheckpoint) / 1e3;
							return this._totalBytes / e / 1024;
						},
						enumerable: !1,
						configurable: !0
					}), e;
				}(), o = n(2), s = n(4), c = n(3), l = (r = function(e, t) {
					return (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
						e.__proto__ = t;
					} || function(e, t) {
						for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
					})(e, t);
				}, function(e, t) {
					function n() {
						this.constructor = e;
					}
					r(e, t), e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
				}), u = function(e) {
					function t(t, n) {
						var r = e.call(this, "fetch-stream-loader") || this;
						return r.TAG = "FetchStreamLoader", r._seekHandler = t, r._config = n, r._needStash = !0, r._requestAbort = !1, r._abortController = null, r._contentLength = null, r._receivedLength = 0, r;
					}
					return l(t, e), t.isSupported = function() {
						try {
							var e = s.a.msedge && s.a.version.minor >= 15048, t = !s.a.msedge || e;
							return self.fetch && self.ReadableStream && t;
						} catch {
							return !1;
						}
					}, t.prototype.destroy = function() {
						this.isWorking() && this.abort(), e.prototype.destroy.call(this);
					}, t.prototype.open = function(e, t) {
						var n = this;
						this._dataSource = e, this._range = t;
						var r = e.url;
						this._config.reuseRedirectedURL && e.redirectedURL != null && (r = e.redirectedURL);
						var i = this._seekHandler.getConfig(r, t), a = new self.Headers();
						if (typeof i.headers == "object") {
							var s = i.headers;
							for (var l in s) s.hasOwnProperty(l) && a.append(l, s[l]);
						}
						var u = {
							method: "GET",
							headers: a,
							mode: "cors",
							cache: "default",
							referrerPolicy: "no-referrer-when-downgrade"
						};
						if (typeof this._config.headers == "object") for (var l in this._config.headers) a.append(l, this._config.headers[l]);
						!1 === e.cors && (u.mode = "same-origin"), e.withCredentials && (u.credentials = "include"), e.referrerPolicy && (u.referrerPolicy = e.referrerPolicy), self.AbortController && (this._abortController = new self.AbortController(), u.signal = this._abortController.signal), this._status = o.c.kConnecting, self.fetch(i.url, u).then((function(e) {
							if (n._requestAbort) return n._status = o.c.kIdle, void e.body.cancel();
							if (e.ok && e.status >= 200 && e.status <= 299) {
								if (e.url !== i.url && n._onURLRedirect) {
									var t = n._seekHandler.removeURLParameters(e.url);
									n._onURLRedirect(t);
								}
								var r = e.headers.get("Content-Length");
								return r != null && (n._contentLength = parseInt(r), n._contentLength !== 0 && n._onContentLengthKnown && n._onContentLengthKnown(n._contentLength)), n._pump.call(n, e.body.getReader());
							}
							if (n._status = o.c.kError, !n._onError) throw new c.d("FetchStreamLoader: Http code invalid, " + e.status + " " + e.statusText);
							n._onError(o.b.HTTP_STATUS_CODE_INVALID, {
								code: e.status,
								msg: e.statusText
							});
						})).catch((function(e) {
							if (!n._abortController || !n._abortController.signal.aborted) {
								if (n._status = o.c.kError, !n._onError) throw e;
								n._onError(o.b.EXCEPTION, {
									code: -1,
									msg: e.message
								});
							}
						}));
					}, t.prototype.abort = function() {
						if (this._requestAbort = !0, (this._status !== o.c.kBuffering || !s.a.chrome) && this._abortController) try {
							this._abortController.abort();
						} catch {}
					}, t.prototype._pump = function(e) {
						var t = this;
						return e.read().then((function(n) {
							if (n.done) if (t._contentLength !== null && t._receivedLength < t._contentLength) {
								t._status = o.c.kError;
								var r = o.b.EARLY_EOF, i = {
									code: -1,
									msg: "Fetch stream meet Early-EOF"
								};
								if (!t._onError) throw new c.d(i.msg);
								t._onError(r, i);
							} else t._status = o.c.kComplete, t._onComplete && t._onComplete(t._range.from, t._range.from + t._receivedLength - 1);
							else {
								if (t._abortController && t._abortController.signal.aborted) return void (t._status = o.c.kComplete);
								if (!0 === t._requestAbort) return t._status = o.c.kComplete, e.cancel();
								t._status = o.c.kBuffering;
								var a = n.value.buffer, s = t._range.from + t._receivedLength;
								t._receivedLength += a.byteLength, t._onDataArrival && t._onDataArrival(a, s, t._receivedLength), t._pump(e);
							}
						})).catch((function(e) {
							if (t._abortController && t._abortController.signal.aborted) t._status = o.c.kComplete;
							else if (e.code !== 11 || !s.a.msedge) {
								t._status = o.c.kError;
								var n = 0, r = null;
								if (e.code !== 19 && e.message !== "network error" || !(t._contentLength === null || t._contentLength !== null && t._receivedLength < t._contentLength) ? (n = o.b.EXCEPTION, r = {
									code: e.code,
									msg: e.message
								}) : (n = o.b.EARLY_EOF, r = {
									code: e.code,
									msg: "Fetch stream meet Early-EOF"
								}), !t._onError) throw new c.d(r.msg);
								t._onError(n, r);
							}
						}));
					}, t;
				}(o.a), d = function() {
					var e = function(t, n) {
						return (e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
							e.__proto__ = t;
						} || function(e, t) {
							for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
						})(t, n);
					};
					return function(t, n) {
						function r() {
							this.constructor = t;
						}
						e(t, n), t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
					};
				}(), f = function(e) {
					function t(t, n) {
						var r = e.call(this, "xhr-moz-chunked-loader") || this;
						return r.TAG = "MozChunkedLoader", r._seekHandler = t, r._config = n, r._needStash = !0, r._xhr = null, r._requestAbort = !1, r._contentLength = null, r._receivedLength = 0, r;
					}
					return d(t, e), t.isSupported = function() {
						try {
							var e = new XMLHttpRequest();
							return e.open("GET", "https://example.com", !0), e.responseType = "moz-chunked-arraybuffer", e.responseType === "moz-chunked-arraybuffer";
						} catch (e) {
							return i.a.w("MozChunkedLoader", e.message), !1;
						}
					}, t.prototype.destroy = function() {
						this.isWorking() && this.abort(), this._xhr &&= (this._xhr.onreadystatechange = null, this._xhr.onprogress = null, this._xhr.onloadend = null, this._xhr.onerror = null, null), e.prototype.destroy.call(this);
					}, t.prototype.open = function(e, t) {
						this._dataSource = e, this._range = t;
						var n = e.url;
						this._config.reuseRedirectedURL && e.redirectedURL != null && (n = e.redirectedURL);
						var r = this._seekHandler.getConfig(n, t);
						this._requestURL = r.url;
						var i = this._xhr = new XMLHttpRequest();
						if (i.open("GET", r.url, !0), i.responseType = "moz-chunked-arraybuffer", i.onreadystatechange = this._onReadyStateChange.bind(this), i.onprogress = this._onProgress.bind(this), i.onloadend = this._onLoadEnd.bind(this), i.onerror = this._onXhrError.bind(this), e.withCredentials && (i.withCredentials = !0), typeof r.headers == "object") {
							var a = r.headers;
							for (var s in a) a.hasOwnProperty(s) && i.setRequestHeader(s, a[s]);
						}
						if (typeof this._config.headers == "object") for (var s in a = this._config.headers, a) a.hasOwnProperty(s) && i.setRequestHeader(s, a[s]);
						this._status = o.c.kConnecting, i.send();
					}, t.prototype.abort = function() {
						this._requestAbort = !0, this._xhr && this._xhr.abort(), this._status = o.c.kComplete;
					}, t.prototype._onReadyStateChange = function(e) {
						var t = e.target;
						if (t.readyState === 2) {
							if (t.responseURL != null && t.responseURL !== this._requestURL && this._onURLRedirect) {
								var n = this._seekHandler.removeURLParameters(t.responseURL);
								this._onURLRedirect(n);
							}
							if (t.status !== 0 && (t.status < 200 || t.status > 299)) {
								if (this._status = o.c.kError, !this._onError) throw new c.d("MozChunkedLoader: Http code invalid, " + t.status + " " + t.statusText);
								this._onError(o.b.HTTP_STATUS_CODE_INVALID, {
									code: t.status,
									msg: t.statusText
								});
							} else this._status = o.c.kBuffering;
						}
					}, t.prototype._onProgress = function(e) {
						if (this._status !== o.c.kError) {
							this._contentLength === null && e.total !== null && e.total !== 0 && (this._contentLength = e.total, this._onContentLengthKnown && this._onContentLengthKnown(this._contentLength));
							var t = e.target.response, n = this._range.from + this._receivedLength;
							this._receivedLength += t.byteLength, this._onDataArrival && this._onDataArrival(t, n, this._receivedLength);
						}
					}, t.prototype._onLoadEnd = function(e) {
						!0 === this._requestAbort ? this._requestAbort = !1 : this._status !== o.c.kError && (this._status = o.c.kComplete, this._onComplete && this._onComplete(this._range.from, this._range.from + this._receivedLength - 1));
					}, t.prototype._onXhrError = function(e) {
						this._status = o.c.kError;
						var t = 0, n = null;
						if (this._contentLength && e.loaded < this._contentLength ? (t = o.b.EARLY_EOF, n = {
							code: -1,
							msg: "Moz-Chunked stream meet Early-Eof"
						}) : (t = o.b.EXCEPTION, n = {
							code: -1,
							msg: e.constructor.name + " " + e.type
						}), !this._onError) throw new c.d(n.msg);
						this._onError(t, n);
					}, t;
				}(o.a), p = function() {
					var e = function(t, n) {
						return (e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
							e.__proto__ = t;
						} || function(e, t) {
							for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
						})(t, n);
					};
					return function(t, n) {
						function r() {
							this.constructor = t;
						}
						e(t, n), t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
					};
				}(), m = function(e) {
					function t(t, n) {
						var r = e.call(this, "xhr-range-loader") || this;
						return r.TAG = "RangeLoader", r._seekHandler = t, r._config = n, r._needStash = !1, r._chunkSizeKBList = [
							128,
							256,
							384,
							512,
							768,
							1024,
							1536,
							2048,
							3072,
							4096,
							5120,
							6144,
							7168,
							8192
						], r._currentChunkSizeKB = 384, r._currentSpeedNormalized = 0, r._zeroSpeedChunkCount = 0, r._xhr = null, r._speedSampler = new a(), r._requestAbort = !1, r._waitForTotalLength = !1, r._totalLengthReceived = !1, r._currentRequestURL = null, r._currentRedirectedURL = null, r._currentRequestRange = null, r._totalLength = null, r._contentLength = null, r._receivedLength = 0, r._lastTimeLoaded = 0, r;
					}
					return p(t, e), t.isSupported = function() {
						try {
							var e = new XMLHttpRequest();
							return e.open("GET", "https://example.com", !0), e.responseType = "arraybuffer", e.responseType === "arraybuffer";
						} catch (e) {
							return i.a.w("RangeLoader", e.message), !1;
						}
					}, t.prototype.destroy = function() {
						this.isWorking() && this.abort(), this._xhr &&= (this._xhr.onreadystatechange = null, this._xhr.onprogress = null, this._xhr.onload = null, this._xhr.onerror = null, null), e.prototype.destroy.call(this);
					}, Object.defineProperty(t.prototype, "currentSpeed", {
						get: function() {
							return this._speedSampler.lastSecondKBps;
						},
						enumerable: !1,
						configurable: !0
					}), t.prototype.open = function(e, t) {
						this._dataSource = e, this._range = t, this._status = o.c.kConnecting;
						var n = !1;
						this._dataSource.filesize != null && this._dataSource.filesize !== 0 && (n = !0, this._totalLength = this._dataSource.filesize), this._totalLengthReceived || n ? this._openSubRange() : (this._waitForTotalLength = !0, this._internalOpen(this._dataSource, {
							from: 0,
							to: -1
						}));
					}, t.prototype._openSubRange = function() {
						var e = 1024 * this._currentChunkSizeKB, t = this._range.from + this._receivedLength, n = t + e;
						this._contentLength != null && n - this._range.from >= this._contentLength && (n = this._range.from + this._contentLength - 1), this._currentRequestRange = {
							from: t,
							to: n
						}, this._internalOpen(this._dataSource, this._currentRequestRange);
					}, t.prototype._internalOpen = function(e, t) {
						this._lastTimeLoaded = 0;
						var n = e.url;
						this._config.reuseRedirectedURL && (this._currentRedirectedURL == null ? e.redirectedURL != null && (n = e.redirectedURL) : n = this._currentRedirectedURL);
						var r = this._seekHandler.getConfig(n, t);
						this._currentRequestURL = r.url;
						var i = this._xhr = new XMLHttpRequest();
						if (i.open("GET", r.url, !0), i.responseType = "arraybuffer", i.onreadystatechange = this._onReadyStateChange.bind(this), i.onprogress = this._onProgress.bind(this), i.onload = this._onLoad.bind(this), i.onerror = this._onXhrError.bind(this), e.withCredentials && (i.withCredentials = !0), typeof r.headers == "object") {
							var a = r.headers;
							for (var o in a) a.hasOwnProperty(o) && i.setRequestHeader(o, a[o]);
						}
						if (typeof this._config.headers == "object") for (var o in a = this._config.headers, a) a.hasOwnProperty(o) && i.setRequestHeader(o, a[o]);
						i.send();
					}, t.prototype.abort = function() {
						this._requestAbort = !0, this._internalAbort(), this._status = o.c.kComplete;
					}, t.prototype._internalAbort = function() {
						this._xhr &&= (this._xhr.onreadystatechange = null, this._xhr.onprogress = null, this._xhr.onload = null, this._xhr.onerror = null, this._xhr.abort(), null);
					}, t.prototype._onReadyStateChange = function(e) {
						var t = e.target;
						if (t.readyState === 2) {
							if (t.responseURL != null) {
								var n = this._seekHandler.removeURLParameters(t.responseURL);
								t.responseURL !== this._currentRequestURL && n !== this._currentRedirectedURL && (this._currentRedirectedURL = n, this._onURLRedirect && this._onURLRedirect(n));
							}
							if (t.status >= 200 && t.status <= 299) {
								if (this._waitForTotalLength) return;
								this._status = o.c.kBuffering;
							} else {
								if (this._status = o.c.kError, !this._onError) throw new c.d("RangeLoader: Http code invalid, " + t.status + " " + t.statusText);
								this._onError(o.b.HTTP_STATUS_CODE_INVALID, {
									code: t.status,
									msg: t.statusText
								});
							}
						}
					}, t.prototype._onProgress = function(e) {
						if (this._status !== o.c.kError) {
							if (this._contentLength === null) {
								var t = !1;
								if (this._waitForTotalLength) {
									this._waitForTotalLength = !1, this._totalLengthReceived = !0, t = !0;
									var n = e.total;
									this._internalAbort(), n != null & n !== 0 && (this._totalLength = n);
								}
								if (this._range.to === -1 ? this._contentLength = this._totalLength - this._range.from : this._contentLength = this._range.to - this._range.from + 1, t) return void this._openSubRange();
								this._onContentLengthKnown && this._onContentLengthKnown(this._contentLength);
							}
							var r = e.loaded - this._lastTimeLoaded;
							this._lastTimeLoaded = e.loaded, this._speedSampler.addBytes(r);
						}
					}, t.prototype._normalizeSpeed = function(e) {
						var t = this._chunkSizeKBList, n = t.length - 1, r = 0, i = 0, a = n;
						if (e < t[0]) return t[0];
						for (; i <= a;) {
							if ((r = i + Math.floor((a - i) / 2)) === n || e >= t[r] && e < t[r + 1]) return t[r];
							t[r] < e ? i = r + 1 : a = r - 1;
						}
					}, t.prototype._onLoad = function(e) {
						if (this._status !== o.c.kError) if (this._waitForTotalLength) this._waitForTotalLength = !1;
						else {
							this._lastTimeLoaded = 0;
							var t = this._speedSampler.lastSecondKBps;
							if (t === 0 && (this._zeroSpeedChunkCount++, this._zeroSpeedChunkCount >= 3 && (t = this._speedSampler.currentKBps)), t !== 0) {
								var n = this._normalizeSpeed(t);
								this._currentSpeedNormalized !== n && (this._currentSpeedNormalized = n, this._currentChunkSizeKB = n);
							}
							var r = e.target.response, i = this._range.from + this._receivedLength;
							this._receivedLength += r.byteLength;
							var a = !1;
							this._contentLength != null && this._receivedLength < this._contentLength ? this._openSubRange() : a = !0, this._onDataArrival && this._onDataArrival(r, i, this._receivedLength), a && (this._status = o.c.kComplete, this._onComplete && this._onComplete(this._range.from, this._range.from + this._receivedLength - 1));
						}
					}, t.prototype._onXhrError = function(e) {
						this._status = o.c.kError;
						var t = 0, n = null;
						if (this._contentLength && this._receivedLength > 0 && this._receivedLength < this._contentLength ? (t = o.b.EARLY_EOF, n = {
							code: -1,
							msg: "RangeLoader meet Early-Eof"
						}) : (t = o.b.EXCEPTION, n = {
							code: -1,
							msg: e.constructor.name + " " + e.type
						}), !this._onError) throw new c.d(n.msg);
						this._onError(t, n);
					}, t;
				}(o.a), h = function() {
					var e = function(t, n) {
						return (e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
							e.__proto__ = t;
						} || function(e, t) {
							for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
						})(t, n);
					};
					return function(t, n) {
						function r() {
							this.constructor = t;
						}
						e(t, n), t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
					};
				}(), g = function(e) {
					function t() {
						var t = e.call(this, "websocket-loader") || this;
						return t.TAG = "WebSocketLoader", t._needStash = !0, t._ws = null, t._requestAbort = !1, t._receivedLength = 0, t;
					}
					return h(t, e), t.isSupported = function() {
						try {
							return self.WebSocket !== void 0;
						} catch {
							return !1;
						}
					}, t.prototype.destroy = function() {
						this._ws && this.abort(), e.prototype.destroy.call(this);
					}, t.prototype.open = function(e) {
						try {
							var t = this._ws = new self.WebSocket(e.url);
							t.binaryType = "arraybuffer", t.onopen = this._onWebSocketOpen.bind(this), t.onclose = this._onWebSocketClose.bind(this), t.onmessage = this._onWebSocketMessage.bind(this), t.onerror = this._onWebSocketError.bind(this), this._status = o.c.kConnecting;
						} catch (e) {
							this._status = o.c.kError;
							var n = {
								code: e.code,
								msg: e.message
							};
							if (!this._onError) throw new c.d(n.msg);
							this._onError(o.b.EXCEPTION, n);
						}
					}, t.prototype.abort = function() {
						var e = this._ws;
						!e || e.readyState !== 0 && e.readyState !== 1 || (this._requestAbort = !0, e.close()), this._ws = null, this._status = o.c.kComplete;
					}, t.prototype._onWebSocketOpen = function(e) {
						this._status = o.c.kBuffering;
					}, t.prototype._onWebSocketClose = function(e) {
						!0 === this._requestAbort ? this._requestAbort = !1 : (this._status = o.c.kComplete, this._onComplete && this._onComplete(0, this._receivedLength - 1));
					}, t.prototype._onWebSocketMessage = function(e) {
						var t = this;
						if (e.data instanceof ArrayBuffer) this._dispatchArrayBuffer(e.data);
						else if (e.data instanceof Blob) {
							var n = new FileReader();
							n.onload = function() {
								t._dispatchArrayBuffer(n.result);
							}, n.readAsArrayBuffer(e.data);
						} else {
							this._status = o.c.kError;
							var r = {
								code: -1,
								msg: "Unsupported WebSocket message type: " + e.data.constructor.name
							};
							if (!this._onError) throw new c.d(r.msg);
							this._onError(o.b.EXCEPTION, r);
						}
					}, t.prototype._dispatchArrayBuffer = function(e) {
						var t = e, n = this._receivedLength;
						this._receivedLength += t.byteLength, this._onDataArrival && this._onDataArrival(t, n, this._receivedLength);
					}, t.prototype._onWebSocketError = function(e) {
						this._status = o.c.kError;
						var t = {
							code: e.code,
							msg: e.message
						};
						if (!this._onError) throw new c.d(t.msg);
						this._onError(o.b.EXCEPTION, t);
					}, t;
				}(o.a), _ = function() {
					function e(e) {
						this._zeroStart = e || !1;
					}
					return e.prototype.getConfig = function(e, t) {
						var n = {};
						if (t.from !== 0 || t.to !== -1) {
							var r = void 0;
							r = t.to === -1 ? "bytes=" + t.from.toString() + "-" : "bytes=" + t.from.toString() + "-" + t.to.toString(), n.Range = r;
						} else this._zeroStart && (n.Range = "bytes=0-");
						return {
							url: e,
							headers: n
						};
					}, e.prototype.removeURLParameters = function(e) {
						return e;
					}, e;
				}(), v = function() {
					function e(e, t) {
						this._startName = e, this._endName = t;
					}
					return e.prototype.getConfig = function(e, t) {
						var n = e;
						if (t.from !== 0 || t.to !== -1) {
							var r = !0;
							n.indexOf("?") === -1 && (n += "?", r = !1), r && (n += "&"), n += this._startName + "=" + t.from.toString(), t.to !== -1 && (n += "&" + this._endName + "=" + t.to.toString());
						}
						return {
							url: n,
							headers: {}
						};
					}, e.prototype.removeURLParameters = function(e) {
						var t = e.split("?")[0], n = void 0, r = e.indexOf("?");
						r !== -1 && (n = e.substring(r + 1));
						var i = "";
						if (n != null && n.length > 0) for (var a = n.split("&"), o = 0; o < a.length; o++) {
							var s = a[o].split("="), c = o > 0;
							s[0] !== this._startName && s[0] !== this._endName && (c && (i += "&"), i += a[o]);
						}
						return i.length === 0 ? t : t + "?" + i;
					}, e;
				}();
				t.a = function() {
					function e(e, t, n) {
						this.TAG = "IOController", this._config = t, this._extraData = n, this._stashInitialSize = 65536, t.stashInitialSize != null && t.stashInitialSize > 0 && (this._stashInitialSize = t.stashInitialSize), this._stashUsed = 0, this._stashSize = this._stashInitialSize, this._bufferSize = 3145728, this._stashBuffer = new ArrayBuffer(this._bufferSize), this._stashByteStart = 0, this._enableStash = !0, !1 === t.enableStashBuffer && (this._enableStash = !1), this._loader = null, this._loaderClass = null, this._seekHandler = null, this._dataSource = e, this._isWebSocketURL = /wss?:\/\/(.+?)/.test(e.url), this._refTotalLength = e.filesize ? e.filesize : null, this._totalLength = this._refTotalLength, this._fullRequestFlag = !1, this._currentRange = null, this._redirectedURL = null, this._speedNormalized = 0, this._speedSampler = new a(), this._speedNormalizeList = [
							32,
							64,
							96,
							128,
							192,
							256,
							384,
							512,
							768,
							1024,
							1536,
							2048,
							3072,
							4096
						], this._isEarlyEofReconnecting = !1, this._paused = !1, this._resumeFrom = 0, this._onDataArrival = null, this._onSeeked = null, this._onError = null, this._onComplete = null, this._onRedirect = null, this._onRecoveredEarlyEof = null, this._selectSeekHandler(), this._selectLoader(), this._createLoader();
					}
					return e.prototype.destroy = function() {
						this._loader.isWorking() && this._loader.abort(), this._loader.destroy(), this._loader = null, this._loaderClass = null, this._dataSource = null, this._stashBuffer = null, this._stashUsed = this._stashSize = this._bufferSize = this._stashByteStart = 0, this._currentRange = null, this._speedSampler = null, this._isEarlyEofReconnecting = !1, this._onDataArrival = null, this._onSeeked = null, this._onError = null, this._onComplete = null, this._onRedirect = null, this._onRecoveredEarlyEof = null, this._extraData = null;
					}, e.prototype.isWorking = function() {
						return this._loader && this._loader.isWorking() && !this._paused;
					}, e.prototype.isPaused = function() {
						return this._paused;
					}, Object.defineProperty(e.prototype, "status", {
						get: function() {
							return this._loader.status;
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "extraData", {
						get: function() {
							return this._extraData;
						},
						set: function(e) {
							this._extraData = e;
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "onDataArrival", {
						get: function() {
							return this._onDataArrival;
						},
						set: function(e) {
							this._onDataArrival = e;
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "onSeeked", {
						get: function() {
							return this._onSeeked;
						},
						set: function(e) {
							this._onSeeked = e;
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "onError", {
						get: function() {
							return this._onError;
						},
						set: function(e) {
							this._onError = e;
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "onComplete", {
						get: function() {
							return this._onComplete;
						},
						set: function(e) {
							this._onComplete = e;
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "onRedirect", {
						get: function() {
							return this._onRedirect;
						},
						set: function(e) {
							this._onRedirect = e;
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "onRecoveredEarlyEof", {
						get: function() {
							return this._onRecoveredEarlyEof;
						},
						set: function(e) {
							this._onRecoveredEarlyEof = e;
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "currentURL", {
						get: function() {
							return this._dataSource.url;
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "hasRedirect", {
						get: function() {
							return this._redirectedURL != null || this._dataSource.redirectedURL != null;
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "currentRedirectedURL", {
						get: function() {
							return this._redirectedURL || this._dataSource.redirectedURL;
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "currentSpeed", {
						get: function() {
							return this._loaderClass === m ? this._loader.currentSpeed : this._speedSampler.lastSecondKBps;
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "loaderType", {
						get: function() {
							return this._loader.type;
						},
						enumerable: !1,
						configurable: !0
					}), e.prototype._selectSeekHandler = function() {
						var e = this._config;
						if (e.seekType === "range") this._seekHandler = new _(this._config.rangeLoadZeroStart);
						else if (e.seekType === "param") {
							var t = e.seekParamStart || "bstart", n = e.seekParamEnd || "bend";
							this._seekHandler = new v(t, n);
						} else {
							if (e.seekType !== "custom") throw new c.b("Invalid seekType in config: " + e.seekType);
							if (typeof e.customSeekHandler != "function") throw new c.b("Custom seekType specified in config but invalid customSeekHandler!");
							this._seekHandler = new e.customSeekHandler();
						}
					}, e.prototype._selectLoader = function() {
						if (this._config.customLoader != null) this._loaderClass = this._config.customLoader;
						else if (this._isWebSocketURL) this._loaderClass = g;
						else if (u.isSupported()) this._loaderClass = u;
						else if (f.isSupported()) this._loaderClass = f;
						else {
							if (!m.isSupported()) throw new c.d("Your browser doesn't support xhr with arraybuffer responseType!");
							this._loaderClass = m;
						}
					}, e.prototype._createLoader = function() {
						this._loader = new this._loaderClass(this._seekHandler, this._config), !1 === this._loader.needStashBuffer && (this._enableStash = !1), this._loader.onContentLengthKnown = this._onContentLengthKnown.bind(this), this._loader.onURLRedirect = this._onURLRedirect.bind(this), this._loader.onDataArrival = this._onLoaderChunkArrival.bind(this), this._loader.onComplete = this._onLoaderComplete.bind(this), this._loader.onError = this._onLoaderError.bind(this);
					}, e.prototype.open = function(e) {
						this._currentRange = {
							from: 0,
							to: -1
						}, e && (this._currentRange.from = e), this._speedSampler.reset(), e || (this._fullRequestFlag = !0), this._loader.open(this._dataSource, Object.assign({}, this._currentRange));
					}, e.prototype.abort = function() {
						this._loader.abort(), this._paused && (this._paused = !1, this._resumeFrom = 0);
					}, e.prototype.pause = function() {
						this.isWorking() && (this._loader.abort(), this._stashUsed === 0 ? this._resumeFrom = this._currentRange.to + 1 : (this._resumeFrom = this._stashByteStart, this._currentRange.to = this._stashByteStart - 1), this._stashUsed = 0, this._stashByteStart = 0, this._paused = !0);
					}, e.prototype.resume = function() {
						if (this._paused) {
							this._paused = !1;
							var e = this._resumeFrom;
							this._resumeFrom = 0, this._internalSeek(e, !0);
						}
					}, e.prototype.seek = function(e) {
						this._paused = !1, this._stashUsed = 0, this._stashByteStart = 0, this._internalSeek(e, !0);
					}, e.prototype._internalSeek = function(e, t) {
						this._loader.isWorking() && this._loader.abort(), this._flushStashBuffer(t), this._loader.destroy(), this._loader = null;
						var n = {
							from: e,
							to: -1
						};
						this._currentRange = {
							from: n.from,
							to: -1
						}, this._speedSampler.reset(), this._stashSize = this._stashInitialSize, this._createLoader(), this._loader.open(this._dataSource, n), this._onSeeked && this._onSeeked();
					}, e.prototype.updateUrl = function(e) {
						if (!e || typeof e != "string" || e.length === 0) throw new c.b("Url must be a non-empty string!");
						this._dataSource.url = e;
					}, e.prototype._expandBuffer = function(e) {
						for (var t = this._stashSize; t + 1048576 < e;) t *= 2;
						if ((t += 1048576) !== this._bufferSize) {
							var n = new ArrayBuffer(t);
							if (this._stashUsed > 0) {
								var r = new Uint8Array(this._stashBuffer, 0, this._stashUsed);
								new Uint8Array(n, 0, t).set(r, 0);
							}
							this._stashBuffer = n, this._bufferSize = t;
						}
					}, e.prototype._normalizeSpeed = function(e) {
						var t = this._speedNormalizeList, n = t.length - 1, r = 0, i = 0, a = n;
						if (e < t[0]) return t[0];
						for (; i <= a;) {
							if ((r = i + Math.floor((a - i) / 2)) === n || e >= t[r] && e < t[r + 1]) return t[r];
							t[r] < e ? i = r + 1 : a = r - 1;
						}
					}, e.prototype._adjustStashSize = function(e) {
						var t = 0;
						(t = this._config.isLive ? e / 8 : e < 512 ? e : e >= 512 && e <= 1024 ? Math.floor(1.5 * e) : 2 * e) > 8192 && (t = 8192);
						var n = 1024 * t + 1048576;
						this._bufferSize < n && this._expandBuffer(n), this._stashSize = 1024 * t;
					}, e.prototype._dispatchChunks = function(e, t) {
						return this._currentRange.to = t + e.byteLength - 1, this._onDataArrival(e, t);
					}, e.prototype._onURLRedirect = function(e) {
						this._redirectedURL = e, this._onRedirect && this._onRedirect(e);
					}, e.prototype._onContentLengthKnown = function(e) {
						e && this._fullRequestFlag && (this._totalLength = e, this._fullRequestFlag = !1);
					}, e.prototype._onLoaderChunkArrival = function(e, t, n) {
						if (!this._onDataArrival) throw new c.a("IOController: No existing consumer (onDataArrival) callback!");
						if (!this._paused) {
							this._isEarlyEofReconnecting && (this._isEarlyEofReconnecting = !1, this._onRecoveredEarlyEof && this._onRecoveredEarlyEof()), this._speedSampler.addBytes(e.byteLength);
							var r = this._speedSampler.lastSecondKBps;
							if (r !== 0) {
								var i = this._normalizeSpeed(r);
								this._speedNormalized !== i && (this._speedNormalized = i, this._adjustStashSize(i));
							}
							if (this._enableStash) if (this._stashUsed === 0 && this._stashByteStart === 0 && (this._stashByteStart = t), this._stashUsed + e.byteLength <= this._stashSize) (s = new Uint8Array(this._stashBuffer, 0, this._stashSize)).set(new Uint8Array(e), this._stashUsed), this._stashUsed += e.byteLength;
							else if (s = new Uint8Array(this._stashBuffer, 0, this._bufferSize), this._stashUsed > 0) {
								var a = this._stashBuffer.slice(0, this._stashUsed);
								(l = this._dispatchChunks(a, this._stashByteStart)) < a.byteLength ? l > 0 && (u = new Uint8Array(a, l), s.set(u, 0), this._stashUsed = u.byteLength, this._stashByteStart += l) : (this._stashUsed = 0, this._stashByteStart += l), this._stashUsed + e.byteLength > this._bufferSize && (this._expandBuffer(this._stashUsed + e.byteLength), s = new Uint8Array(this._stashBuffer, 0, this._bufferSize)), s.set(new Uint8Array(e), this._stashUsed), this._stashUsed += e.byteLength;
							} else (l = this._dispatchChunks(e, t)) < e.byteLength && ((o = e.byteLength - l) > this._bufferSize && (this._expandBuffer(o), s = new Uint8Array(this._stashBuffer, 0, this._bufferSize)), s.set(new Uint8Array(e, l), 0), this._stashUsed += o, this._stashByteStart = t + l);
							else if (this._stashUsed === 0) {
								var o;
								(l = this._dispatchChunks(e, t)) < e.byteLength && ((o = e.byteLength - l) > this._bufferSize && this._expandBuffer(o), (s = new Uint8Array(this._stashBuffer, 0, this._bufferSize)).set(new Uint8Array(e, l), 0), this._stashUsed += o, this._stashByteStart = t + l);
							} else {
								var s, l;
								if (this._stashUsed + e.byteLength > this._bufferSize && this._expandBuffer(this._stashUsed + e.byteLength), (s = new Uint8Array(this._stashBuffer, 0, this._bufferSize)).set(new Uint8Array(e), this._stashUsed), this._stashUsed += e.byteLength, (l = this._dispatchChunks(this._stashBuffer.slice(0, this._stashUsed), this._stashByteStart)) < this._stashUsed && l > 0) {
									var u = new Uint8Array(this._stashBuffer, l);
									s.set(u, 0);
								}
								this._stashUsed -= l, this._stashByteStart += l;
							}
						}
					}, e.prototype._flushStashBuffer = function(e) {
						if (this._stashUsed > 0) {
							var t = this._stashBuffer.slice(0, this._stashUsed), n = this._dispatchChunks(t, this._stashByteStart), r = t.byteLength - n;
							if (n < t.byteLength) {
								if (!e) {
									if (n > 0) {
										var a = new Uint8Array(this._stashBuffer, 0, this._bufferSize), o = new Uint8Array(t, n);
										a.set(o, 0), this._stashUsed = o.byteLength, this._stashByteStart += n;
									}
									return 0;
								}
								i.a.w(this.TAG, r + " bytes unconsumed data remain when flush buffer, dropped");
							}
							return this._stashUsed = 0, this._stashByteStart = 0, r;
						}
						return 0;
					}, e.prototype._onLoaderComplete = function(e, t) {
						this._flushStashBuffer(!0), this._onComplete && this._onComplete(this._extraData);
					}, e.prototype._onLoaderError = function(e, t) {
						switch (i.a.e(this.TAG, "Loader error, code = " + t.code + ", msg = " + t.msg), this._flushStashBuffer(!1), this._isEarlyEofReconnecting && (this._isEarlyEofReconnecting = !1, e = o.b.UNRECOVERABLE_EARLY_EOF), e) {
							case o.b.EARLY_EOF:
								if (!this._config.isLive && this._totalLength) {
									var n = this._currentRange.to + 1;
									n < this._totalLength && (i.a.w(this.TAG, "Connection lost, trying reconnect..."), this._isEarlyEofReconnecting = !0, this._internalSeek(n, !1));
									return;
								}
								e = o.b.UNRECOVERABLE_EARLY_EOF;
								break;
							case o.b.UNRECOVERABLE_EARLY_EOF:
							case o.b.CONNECTING_TIMEOUT:
							case o.b.HTTP_STATUS_CODE_INVALID:
							case o.b.EXCEPTION:
						}
						if (!this._onError) throw new c.d("IOException: " + t.msg);
						this._onError(e, t);
					}, e;
				}();
			},
			function(e, t, n) {
				var r = function() {
					function e() {}
					return e.install = function() {
						Object.setPrototypeOf = Object.setPrototypeOf || function(e, t) {
							return e.__proto__ = t, e;
						}, Object.assign = Object.assign || function(e) {
							if (e == null) throw TypeError("Cannot convert undefined or null to object");
							for (var t = Object(e), n = 1; n < arguments.length; n++) {
								var r = arguments[n];
								if (r != null) for (var i in r) r.hasOwnProperty(i) && (t[i] = r[i]);
							}
							return t;
						}, typeof self.Promise != "function" && n(16).polyfill();
					}, e;
				}();
				r.install(), t.a = r;
			},
			function(e, t, n) {
				function r(e) {
					var t = {};
					function n(r) {
						if (t[r]) return t[r].exports;
						var i = t[r] = {
							i: r,
							l: !1,
							exports: {}
						};
						return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
					}
					n.m = e, n.c = t, n.i = function(e) {
						return e;
					}, n.d = function(e, t, r) {
						n.o(e, t) || Object.defineProperty(e, t, {
							configurable: !1,
							enumerable: !0,
							get: r
						});
					}, n.r = function(e) {
						Object.defineProperty(e, "__esModule", { value: !0 });
					}, n.n = function(e) {
						var t = e && e.__esModule ? function() {
							return e.default;
						} : function() {
							return e;
						};
						return n.d(t, "a", t), t;
					}, n.o = function(e, t) {
						return Object.prototype.hasOwnProperty.call(e, t);
					}, n.p = "/", n.oe = function(e) {
						throw console.error(e), e;
					};
					var r = n(n.s = ENTRY_MODULE);
					return r.default || r;
				}
				function i(e) {
					return (e + "").replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
				}
				function a(e, t, r) {
					var a = {};
					a[r] = [];
					var o = t.toString(), s = o.match(/^function\s?\w*\(\w+,\s*\w+,\s*(\w+)\)/);
					if (!s) return a;
					for (var c, l = s[1], u = RegExp("(\\\\n|\\W)" + i(l) + "\\(\\s*(/\\*.*?\\*/)?\\s*.*?([\\.|\\-|\\+|\\w|/|@]+).*?\\)", "g"); c = u.exec(o);) c[3] !== "dll-reference" && a[r].push(c[3]);
					for (u = RegExp("\\(" + i(l) + "\\(\"(dll-reference\\s([\\.|\\-|\\+|\\w|/|@]+))\"\\)\\)\\(\\s*(/\\*.*?\\*/)?\\s*.*?([\\.|\\-|\\+|\\w|/|@]+).*?\\)", "g"); c = u.exec(o);) e[c[2]] || (a[r].push(c[1]), e[c[2]] = n(c[1]).m), a[c[2]] = a[c[2]] || [], a[c[2]].push(c[4]);
					for (var d, f = Object.keys(a), p = 0; p < f.length; p++) for (var m = 0; m < a[f[p]].length; m++) d = a[f[p]][m], isNaN(1 * d) || (a[f[p]][m] = 1 * a[f[p]][m]);
					return a;
				}
				function o(e) {
					return Object.keys(e).reduce((function(t, n) {
						return t || e[n].length > 0;
					}), !1);
				}
				e.exports = function(e, t) {
					t ||= {};
					var i = { main: n.m }, s = t.all ? { main: Object.keys(i.main) } : function(e, t) {
						for (var n = { main: [t] }, r = { main: [] }, i = { main: {} }; o(n);) for (var s = Object.keys(n), c = 0; c < s.length; c++) {
							var l = s[c], u = n[l].pop();
							if (i[l] = i[l] || {}, !i[l][u] && e[l][u]) {
								i[l][u] = !0, r[l] = r[l] || [], r[l].push(u);
								for (var d = a(e, e[l][u], l), f = Object.keys(d), p = 0; p < f.length; p++) n[f[p]] = n[f[p]] || [], n[f[p]] = n[f[p]].concat(d[f[p]]);
							}
						}
						return r;
					}(i, e), c = "";
					Object.keys(s).filter((function(e) {
						return e !== "main";
					})).forEach((function(e) {
						for (var t = 0; s[e][t];) t++;
						s[e].push(t), i[e][t] = "(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })", c = c + "var " + e + " = (" + r.toString().replace("ENTRY_MODULE", JSON.stringify(t)) + ")({" + s[e].map((function(t) {
							return JSON.stringify(t) + ": " + i[e][t].toString();
						})).join(",") + "});\n";
					})), c = c + "new ((" + r.toString().replace("ENTRY_MODULE", JSON.stringify(e)) + ")({" + s.main.map((function(e) {
						return JSON.stringify(e) + ": " + i.main[e].toString();
					})).join(",") + "}))(self);";
					var l = new window.Blob([c], { type: "text/javascript" });
					if (t.bare) return l;
					var u = (window.URL || window.webkitURL || window.mozURL || window.msURL).createObjectURL(l), d = new window.Worker(u);
					return d.objectURL = u, d;
				};
			},
			function(e, t, n) {
				(function(t) {
					function n(e) {
						return parseInt(e) === e;
					}
					function r(e) {
						if (!n(e.length)) return !1;
						for (var t = 0; t < e.length; t++) if (!n(e[t]) || e[t] < 0 || e[t] > 255) return !1;
						return !0;
					}
					function i(e, t) {
						if (e.buffer && e.name === "Uint8Array") return t && (e = e.slice ? e.slice() : Array.prototype.slice.call(e)), e;
						if (Array.isArray(e)) {
							if (!r(e)) throw Error("Array contains invalid value: " + e);
							return new Uint8Array(e);
						}
						if (n(e.length) && r(e)) return new Uint8Array(e);
						throw Error("unsupported array-like object");
					}
					function a(e) {
						return new Uint8Array(e);
					}
					function o(e, t, n, r, i) {
						r == null && i == null || (e = e.slice ? e.slice(r, i) : Array.prototype.slice.call(e, r, i)), t.set(e, n);
					}
					var s, c = {
						toBytes: function(e) {
							var t = [], n = 0;
							for (e = encodeURI(e); n < e.length;) {
								var r = e.charCodeAt(n++);
								r === 37 ? (t.push(parseInt(e.substr(n, 2), 16)), n += 2) : t.push(r);
							}
							return i(t);
						},
						fromBytes: function(e) {
							for (var t = [], n = 0; n < e.length;) {
								var r = e[n];
								r < 128 ? (t.push(String.fromCharCode(r)), n++) : r > 191 && r < 224 ? (t.push(String.fromCharCode((31 & r) << 6 | 63 & e[n + 1])), n += 2) : (t.push(String.fromCharCode((15 & r) << 12 | (63 & e[n + 1]) << 6 | 63 & e[n + 2])), n += 3);
							}
							return t.join("");
						}
					}, l = (s = "0123456789abcdef", {
						toBytes: function(e) {
							for (var t = [], n = 0; n < e.length; n += 2) t.push(parseInt(e.substr(n, 2), 16));
							return t;
						},
						fromBytes: function(e) {
							for (var t = [], n = 0; n < e.length; n++) {
								var r = e[n];
								t.push(s[(240 & r) >> 4] + s[15 & r]);
							}
							return t.join("");
						}
					}), u = {
						16: 10,
						24: 12,
						32: 14
					}, d = [
						1,
						2,
						4,
						8,
						16,
						32,
						64,
						128,
						27,
						54,
						108,
						216,
						171,
						77,
						154,
						47,
						94,
						188,
						99,
						198,
						151,
						53,
						106,
						212,
						179,
						125,
						250,
						239,
						197,
						145
					], f = [
						99,
						124,
						119,
						123,
						242,
						107,
						111,
						197,
						48,
						1,
						103,
						43,
						254,
						215,
						171,
						118,
						202,
						130,
						201,
						125,
						250,
						89,
						71,
						240,
						173,
						212,
						162,
						175,
						156,
						164,
						114,
						192,
						183,
						253,
						147,
						38,
						54,
						63,
						247,
						204,
						52,
						165,
						229,
						241,
						113,
						216,
						49,
						21,
						4,
						199,
						35,
						195,
						24,
						150,
						5,
						154,
						7,
						18,
						128,
						226,
						235,
						39,
						178,
						117,
						9,
						131,
						44,
						26,
						27,
						110,
						90,
						160,
						82,
						59,
						214,
						179,
						41,
						227,
						47,
						132,
						83,
						209,
						0,
						237,
						32,
						252,
						177,
						91,
						106,
						203,
						190,
						57,
						74,
						76,
						88,
						207,
						208,
						239,
						170,
						251,
						67,
						77,
						51,
						133,
						69,
						249,
						2,
						127,
						80,
						60,
						159,
						168,
						81,
						163,
						64,
						143,
						146,
						157,
						56,
						245,
						188,
						182,
						218,
						33,
						16,
						255,
						243,
						210,
						205,
						12,
						19,
						236,
						95,
						151,
						68,
						23,
						196,
						167,
						126,
						61,
						100,
						93,
						25,
						115,
						96,
						129,
						79,
						220,
						34,
						42,
						144,
						136,
						70,
						238,
						184,
						20,
						222,
						94,
						11,
						219,
						224,
						50,
						58,
						10,
						73,
						6,
						36,
						92,
						194,
						211,
						172,
						98,
						145,
						149,
						228,
						121,
						231,
						200,
						55,
						109,
						141,
						213,
						78,
						169,
						108,
						86,
						244,
						234,
						101,
						122,
						174,
						8,
						186,
						120,
						37,
						46,
						28,
						166,
						180,
						198,
						232,
						221,
						116,
						31,
						75,
						189,
						139,
						138,
						112,
						62,
						181,
						102,
						72,
						3,
						246,
						14,
						97,
						53,
						87,
						185,
						134,
						193,
						29,
						158,
						225,
						248,
						152,
						17,
						105,
						217,
						142,
						148,
						155,
						30,
						135,
						233,
						206,
						85,
						40,
						223,
						140,
						161,
						137,
						13,
						191,
						230,
						66,
						104,
						65,
						153,
						45,
						15,
						176,
						84,
						187,
						22
					], p = [
						82,
						9,
						106,
						213,
						48,
						54,
						165,
						56,
						191,
						64,
						163,
						158,
						129,
						243,
						215,
						251,
						124,
						227,
						57,
						130,
						155,
						47,
						255,
						135,
						52,
						142,
						67,
						68,
						196,
						222,
						233,
						203,
						84,
						123,
						148,
						50,
						166,
						194,
						35,
						61,
						238,
						76,
						149,
						11,
						66,
						250,
						195,
						78,
						8,
						46,
						161,
						102,
						40,
						217,
						36,
						178,
						118,
						91,
						162,
						73,
						109,
						139,
						209,
						37,
						114,
						248,
						246,
						100,
						134,
						104,
						152,
						22,
						212,
						164,
						92,
						204,
						93,
						101,
						182,
						146,
						108,
						112,
						72,
						80,
						253,
						237,
						185,
						218,
						94,
						21,
						70,
						87,
						167,
						141,
						157,
						132,
						144,
						216,
						171,
						0,
						140,
						188,
						211,
						10,
						247,
						228,
						88,
						5,
						184,
						179,
						69,
						6,
						208,
						44,
						30,
						143,
						202,
						63,
						15,
						2,
						193,
						175,
						189,
						3,
						1,
						19,
						138,
						107,
						58,
						145,
						17,
						65,
						79,
						103,
						220,
						234,
						151,
						242,
						207,
						206,
						240,
						180,
						230,
						115,
						150,
						172,
						116,
						34,
						231,
						173,
						53,
						133,
						226,
						249,
						55,
						232,
						28,
						117,
						223,
						110,
						71,
						241,
						26,
						113,
						29,
						41,
						197,
						137,
						111,
						183,
						98,
						14,
						170,
						24,
						190,
						27,
						252,
						86,
						62,
						75,
						198,
						210,
						121,
						32,
						154,
						219,
						192,
						254,
						120,
						205,
						90,
						244,
						31,
						221,
						168,
						51,
						136,
						7,
						199,
						49,
						177,
						18,
						16,
						89,
						39,
						128,
						236,
						95,
						96,
						81,
						127,
						169,
						25,
						181,
						74,
						13,
						45,
						229,
						122,
						159,
						147,
						201,
						156,
						239,
						160,
						224,
						59,
						77,
						174,
						42,
						245,
						176,
						200,
						235,
						187,
						60,
						131,
						83,
						153,
						97,
						23,
						43,
						4,
						126,
						186,
						119,
						214,
						38,
						225,
						105,
						20,
						99,
						85,
						33,
						12,
						125
					], m = [
						3328402341,
						4168907908,
						4000806809,
						4135287693,
						4294111757,
						3597364157,
						3731845041,
						2445657428,
						1613770832,
						33620227,
						3462883241,
						1445669757,
						3892248089,
						3050821474,
						1303096294,
						3967186586,
						2412431941,
						528646813,
						2311702848,
						4202528135,
						4026202645,
						2992200171,
						2387036105,
						4226871307,
						1101901292,
						3017069671,
						1604494077,
						1169141738,
						597466303,
						1403299063,
						3832705686,
						2613100635,
						1974974402,
						3791519004,
						1033081774,
						1277568618,
						1815492186,
						2118074177,
						4126668546,
						2211236943,
						1748251740,
						1369810420,
						3521504564,
						4193382664,
						3799085459,
						2883115123,
						1647391059,
						706024767,
						134480908,
						2512897874,
						1176707941,
						2646852446,
						806885416,
						932615841,
						168101135,
						798661301,
						235341577,
						605164086,
						461406363,
						3756188221,
						3454790438,
						1311188841,
						2142417613,
						3933566367,
						302582043,
						495158174,
						1479289972,
						874125870,
						907746093,
						3698224818,
						3025820398,
						1537253627,
						2756858614,
						1983593293,
						3084310113,
						2108928974,
						1378429307,
						3722699582,
						1580150641,
						327451799,
						2790478837,
						3117535592,
						0,
						3253595436,
						1075847264,
						3825007647,
						2041688520,
						3059440621,
						3563743934,
						2378943302,
						1740553945,
						1916352843,
						2487896798,
						2555137236,
						2958579944,
						2244988746,
						3151024235,
						3320835882,
						1336584933,
						3992714006,
						2252555205,
						2588757463,
						1714631509,
						293963156,
						2319795663,
						3925473552,
						67240454,
						4269768577,
						2689618160,
						2017213508,
						631218106,
						1269344483,
						2723238387,
						1571005438,
						2151694528,
						93294474,
						1066570413,
						563977660,
						1882732616,
						4059428100,
						1673313503,
						2008463041,
						2950355573,
						1109467491,
						537923632,
						3858759450,
						4260623118,
						3218264685,
						2177748300,
						403442708,
						638784309,
						3287084079,
						3193921505,
						899127202,
						2286175436,
						773265209,
						2479146071,
						1437050866,
						4236148354,
						2050833735,
						3362022572,
						3126681063,
						840505643,
						3866325909,
						3227541664,
						427917720,
						2655997905,
						2749160575,
						1143087718,
						1412049534,
						999329963,
						193497219,
						2353415882,
						3354324521,
						1807268051,
						672404540,
						2816401017,
						3160301282,
						369822493,
						2916866934,
						3688947771,
						1681011286,
						1949973070,
						336202270,
						2454276571,
						201721354,
						1210328172,
						3093060836,
						2680341085,
						3184776046,
						1135389935,
						3294782118,
						965841320,
						831886756,
						3554993207,
						4068047243,
						3588745010,
						2345191491,
						1849112409,
						3664604599,
						26054028,
						2983581028,
						2622377682,
						1235855840,
						3630984372,
						2891339514,
						4092916743,
						3488279077,
						3395642799,
						4101667470,
						1202630377,
						268961816,
						1874508501,
						4034427016,
						1243948399,
						1546530418,
						941366308,
						1470539505,
						1941222599,
						2546386513,
						3421038627,
						2715671932,
						3899946140,
						1042226977,
						2521517021,
						1639824860,
						227249030,
						260737669,
						3765465232,
						2084453954,
						1907733956,
						3429263018,
						2420656344,
						100860677,
						4160157185,
						470683154,
						3261161891,
						1781871967,
						2924959737,
						1773779408,
						394692241,
						2579611992,
						974986535,
						664706745,
						3655459128,
						3958962195,
						731420851,
						571543859,
						3530123707,
						2849626480,
						126783113,
						865375399,
						765172662,
						1008606754,
						361203602,
						3387549984,
						2278477385,
						2857719295,
						1344809080,
						2782912378,
						59542671,
						1503764984,
						160008576,
						437062935,
						1707065306,
						3622233649,
						2218934982,
						3496503480,
						2185314755,
						697932208,
						1512910199,
						504303377,
						2075177163,
						2824099068,
						1841019862,
						739644986
					], h = [
						2781242211,
						2230877308,
						2582542199,
						2381740923,
						234877682,
						3184946027,
						2984144751,
						1418839493,
						1348481072,
						50462977,
						2848876391,
						2102799147,
						434634494,
						1656084439,
						3863849899,
						2599188086,
						1167051466,
						2636087938,
						1082771913,
						2281340285,
						368048890,
						3954334041,
						3381544775,
						201060592,
						3963727277,
						1739838676,
						4250903202,
						3930435503,
						3206782108,
						4149453988,
						2531553906,
						1536934080,
						3262494647,
						484572669,
						2923271059,
						1783375398,
						1517041206,
						1098792767,
						49674231,
						1334037708,
						1550332980,
						4098991525,
						886171109,
						150598129,
						2481090929,
						1940642008,
						1398944049,
						1059722517,
						201851908,
						1385547719,
						1699095331,
						1587397571,
						674240536,
						2704774806,
						252314885,
						3039795866,
						151914247,
						908333586,
						2602270848,
						1038082786,
						651029483,
						1766729511,
						3447698098,
						2682942837,
						454166793,
						2652734339,
						1951935532,
						775166490,
						758520603,
						3000790638,
						4004797018,
						4217086112,
						4137964114,
						1299594043,
						1639438038,
						3464344499,
						2068982057,
						1054729187,
						1901997871,
						2534638724,
						4121318227,
						1757008337,
						0,
						750906861,
						1614815264,
						535035132,
						3363418545,
						3988151131,
						3201591914,
						1183697867,
						3647454910,
						1265776953,
						3734260298,
						3566750796,
						3903871064,
						1250283471,
						1807470800,
						717615087,
						3847203498,
						384695291,
						3313910595,
						3617213773,
						1432761139,
						2484176261,
						3481945413,
						283769337,
						100925954,
						2180939647,
						4037038160,
						1148730428,
						3123027871,
						3813386408,
						4087501137,
						4267549603,
						3229630528,
						2315620239,
						2906624658,
						3156319645,
						1215313976,
						82966005,
						3747855548,
						3245848246,
						1974459098,
						1665278241,
						807407632,
						451280895,
						251524083,
						1841287890,
						1283575245,
						337120268,
						891687699,
						801369324,
						3787349855,
						2721421207,
						3431482436,
						959321879,
						1469301956,
						4065699751,
						2197585534,
						1199193405,
						2898814052,
						3887750493,
						724703513,
						2514908019,
						2696962144,
						2551808385,
						3516813135,
						2141445340,
						1715741218,
						2119445034,
						2872807568,
						2198571144,
						3398190662,
						700968686,
						3547052216,
						1009259540,
						2041044702,
						3803995742,
						487983883,
						1991105499,
						1004265696,
						1449407026,
						1316239930,
						504629770,
						3683797321,
						168560134,
						1816667172,
						3837287516,
						1570751170,
						1857934291,
						4014189740,
						2797888098,
						2822345105,
						2754712981,
						936633572,
						2347923833,
						852879335,
						1133234376,
						1500395319,
						3084545389,
						2348912013,
						1689376213,
						3533459022,
						3762923945,
						3034082412,
						4205598294,
						133428468,
						634383082,
						2949277029,
						2398386810,
						3913789102,
						403703816,
						3580869306,
						2297460856,
						1867130149,
						1918643758,
						607656988,
						4049053350,
						3346248884,
						1368901318,
						600565992,
						2090982877,
						2632479860,
						557719327,
						3717614411,
						3697393085,
						2249034635,
						2232388234,
						2430627952,
						1115438654,
						3295786421,
						2865522278,
						3633334344,
						84280067,
						33027830,
						303828494,
						2747425121,
						1600795957,
						4188952407,
						3496589753,
						2434238086,
						1486471617,
						658119965,
						3106381470,
						953803233,
						334231800,
						3005978776,
						857870609,
						3151128937,
						1890179545,
						2298973838,
						2805175444,
						3056442267,
						574365214,
						2450884487,
						550103529,
						1233637070,
						4289353045,
						2018519080,
						2057691103,
						2399374476,
						4166623649,
						2148108681,
						387583245,
						3664101311,
						836232934,
						3330556482,
						3100665960,
						3280093505,
						2955516313,
						2002398509,
						287182607,
						3413881008,
						4238890068,
						3597515707,
						975967766
					], g = [
						1671808611,
						2089089148,
						2006576759,
						2072901243,
						4061003762,
						1807603307,
						1873927791,
						3310653893,
						810573872,
						16974337,
						1739181671,
						729634347,
						4263110654,
						3613570519,
						2883997099,
						1989864566,
						3393556426,
						2191335298,
						3376449993,
						2106063485,
						4195741690,
						1508618841,
						1204391495,
						4027317232,
						2917941677,
						3563566036,
						2734514082,
						2951366063,
						2629772188,
						2767672228,
						1922491506,
						3227229120,
						3082974647,
						4246528509,
						2477669779,
						644500518,
						911895606,
						1061256767,
						4144166391,
						3427763148,
						878471220,
						2784252325,
						3845444069,
						4043897329,
						1905517169,
						3631459288,
						827548209,
						356461077,
						67897348,
						3344078279,
						593839651,
						3277757891,
						405286936,
						2527147926,
						84871685,
						2595565466,
						118033927,
						305538066,
						2157648768,
						3795705826,
						3945188843,
						661212711,
						2999812018,
						1973414517,
						152769033,
						2208177539,
						745822252,
						439235610,
						455947803,
						1857215598,
						1525593178,
						2700827552,
						1391895634,
						994932283,
						3596728278,
						3016654259,
						695947817,
						3812548067,
						795958831,
						2224493444,
						1408607827,
						3513301457,
						0,
						3979133421,
						543178784,
						4229948412,
						2982705585,
						1542305371,
						1790891114,
						3410398667,
						3201918910,
						961245753,
						1256100938,
						1289001036,
						1491644504,
						3477767631,
						3496721360,
						4012557807,
						2867154858,
						4212583931,
						1137018435,
						1305975373,
						861234739,
						2241073541,
						1171229253,
						4178635257,
						33948674,
						2139225727,
						1357946960,
						1011120188,
						2679776671,
						2833468328,
						1374921297,
						2751356323,
						1086357568,
						2408187279,
						2460827538,
						2646352285,
						944271416,
						4110742005,
						3168756668,
						3066132406,
						3665145818,
						560153121,
						271589392,
						4279952895,
						4077846003,
						3530407890,
						3444343245,
						202643468,
						322250259,
						3962553324,
						1608629855,
						2543990167,
						1154254916,
						389623319,
						3294073796,
						2817676711,
						2122513534,
						1028094525,
						1689045092,
						1575467613,
						422261273,
						1939203699,
						1621147744,
						2174228865,
						1339137615,
						3699352540,
						577127458,
						712922154,
						2427141008,
						2290289544,
						1187679302,
						3995715566,
						3100863416,
						339486740,
						3732514782,
						1591917662,
						186455563,
						3681988059,
						3762019296,
						844522546,
						978220090,
						169743370,
						1239126601,
						101321734,
						611076132,
						1558493276,
						3260915650,
						3547250131,
						2901361580,
						1655096418,
						2443721105,
						2510565781,
						3828863972,
						2039214713,
						3878868455,
						3359869896,
						928607799,
						1840765549,
						2374762893,
						3580146133,
						1322425422,
						2850048425,
						1823791212,
						1459268694,
						4094161908,
						3928346602,
						1706019429,
						2056189050,
						2934523822,
						135794696,
						3134549946,
						2022240376,
						628050469,
						779246638,
						472135708,
						2800834470,
						3032970164,
						3327236038,
						3894660072,
						3715932637,
						1956440180,
						522272287,
						1272813131,
						3185336765,
						2340818315,
						2323976074,
						1888542832,
						1044544574,
						3049550261,
						1722469478,
						1222152264,
						50660867,
						4127324150,
						236067854,
						1638122081,
						895445557,
						1475980887,
						3117443513,
						2257655686,
						3243809217,
						489110045,
						2662934430,
						3778599393,
						4162055160,
						2561878936,
						288563729,
						1773916777,
						3648039385,
						2391345038,
						2493985684,
						2612407707,
						505560094,
						2274497927,
						3911240169,
						3460925390,
						1442818645,
						678973480,
						3749357023,
						2358182796,
						2717407649,
						2306869641,
						219617805,
						3218761151,
						3862026214,
						1120306242,
						1756942440,
						1103331905,
						2578459033,
						762796589,
						252780047,
						2966125488,
						1425844308,
						3151392187,
						372911126
					], _ = [
						1667474886,
						2088535288,
						2004326894,
						2071694838,
						4075949567,
						1802223062,
						1869591006,
						3318043793,
						808472672,
						16843522,
						1734846926,
						724270422,
						4278065639,
						3621216949,
						2880169549,
						1987484396,
						3402253711,
						2189597983,
						3385409673,
						2105378810,
						4210693615,
						1499065266,
						1195886990,
						4042263547,
						2913856577,
						3570689971,
						2728590687,
						2947541573,
						2627518243,
						2762274643,
						1920112356,
						3233831835,
						3082273397,
						4261223649,
						2475929149,
						640051788,
						909531756,
						1061110142,
						4160160501,
						3435941763,
						875846760,
						2779116625,
						3857003729,
						4059105529,
						1903268834,
						3638064043,
						825316194,
						353713962,
						67374088,
						3351728789,
						589522246,
						3284360861,
						404236336,
						2526454071,
						84217610,
						2593830191,
						117901582,
						303183396,
						2155911963,
						3806477791,
						3958056653,
						656894286,
						2998062463,
						1970642922,
						151591698,
						2206440989,
						741110872,
						437923380,
						454765878,
						1852748508,
						1515908788,
						2694904667,
						1381168804,
						993742198,
						3604373943,
						3014905469,
						690584402,
						3823320797,
						791638366,
						2223281939,
						1398011302,
						3520161977,
						0,
						3991743681,
						538992704,
						4244381667,
						2981218425,
						1532751286,
						1785380564,
						3419096717,
						3200178535,
						960056178,
						1246420628,
						1280103576,
						1482221744,
						3486468741,
						3503319995,
						4025428677,
						2863326543,
						4227536621,
						1128514950,
						1296947098,
						859002214,
						2240123921,
						1162203018,
						4193849577,
						33687044,
						2139062782,
						1347481760,
						1010582648,
						2678045221,
						2829640523,
						1364325282,
						2745433693,
						1077985408,
						2408548869,
						2459086143,
						2644360225,
						943212656,
						4126475505,
						3166494563,
						3065430391,
						3671750063,
						555836226,
						269496352,
						4294908645,
						4092792573,
						3537006015,
						3452783745,
						202118168,
						320025894,
						3974901699,
						1600119230,
						2543297077,
						1145359496,
						387397934,
						3301201811,
						2812801621,
						2122220284,
						1027426170,
						1684319432,
						1566435258,
						421079858,
						1936954854,
						1616945344,
						2172753945,
						1330631070,
						3705438115,
						572679748,
						707427924,
						2425400123,
						2290647819,
						1179044492,
						4008585671,
						3099120491,
						336870440,
						3739122087,
						1583276732,
						185277718,
						3688593069,
						3772791771,
						842159716,
						976899700,
						168435220,
						1229577106,
						101059084,
						606366792,
						1549591736,
						3267517855,
						3553849021,
						2897014595,
						1650632388,
						2442242105,
						2509612081,
						3840161747,
						2038008818,
						3890688725,
						3368567691,
						926374254,
						1835907034,
						2374863873,
						3587531953,
						1313788572,
						2846482505,
						1819063512,
						1448540844,
						4109633523,
						3941213647,
						1701162954,
						2054852340,
						2930698567,
						134748176,
						3132806511,
						2021165296,
						623210314,
						774795868,
						471606328,
						2795958615,
						3031746419,
						3334885783,
						3907527627,
						3722280097,
						1953799400,
						522133822,
						1263263126,
						3183336545,
						2341176845,
						2324333839,
						1886425312,
						1044267644,
						3048588401,
						1718004428,
						1212733584,
						50529542,
						4143317495,
						235803164,
						1633788866,
						892690282,
						1465383342,
						3115962473,
						2256965911,
						3250673817,
						488449850,
						2661202215,
						3789633753,
						4177007595,
						2560144171,
						286339874,
						1768537042,
						3654906025,
						2391705863,
						2492770099,
						2610673197,
						505291324,
						2273808917,
						3924369609,
						3469625735,
						1431699370,
						673740880,
						3755965093,
						2358021891,
						2711746649,
						2307489801,
						218961690,
						3217021541,
						3873845719,
						1111672452,
						1751693520,
						1094828930,
						2576986153,
						757954394,
						252645662,
						2964376443,
						1414855848,
						3149649517,
						370555436
					], v = [
						1374988112,
						2118214995,
						437757123,
						975658646,
						1001089995,
						530400753,
						2902087851,
						1273168787,
						540080725,
						2910219766,
						2295101073,
						4110568485,
						1340463100,
						3307916247,
						641025152,
						3043140495,
						3736164937,
						632953703,
						1172967064,
						1576976609,
						3274667266,
						2169303058,
						2370213795,
						1809054150,
						59727847,
						361929877,
						3211623147,
						2505202138,
						3569255213,
						1484005843,
						1239443753,
						2395588676,
						1975683434,
						4102977912,
						2572697195,
						666464733,
						3202437046,
						4035489047,
						3374361702,
						2110667444,
						1675577880,
						3843699074,
						2538681184,
						1649639237,
						2976151520,
						3144396420,
						4269907996,
						4178062228,
						1883793496,
						2403728665,
						2497604743,
						1383856311,
						2876494627,
						1917518562,
						3810496343,
						1716890410,
						3001755655,
						800440835,
						2261089178,
						3543599269,
						807962610,
						599762354,
						33778362,
						3977675356,
						2328828971,
						2809771154,
						4077384432,
						1315562145,
						1708848333,
						101039829,
						3509871135,
						3299278474,
						875451293,
						2733856160,
						92987698,
						2767645557,
						193195065,
						1080094634,
						1584504582,
						3178106961,
						1042385657,
						2531067453,
						3711829422,
						1306967366,
						2438237621,
						1908694277,
						67556463,
						1615861247,
						429456164,
						3602770327,
						2302690252,
						1742315127,
						2968011453,
						126454664,
						3877198648,
						2043211483,
						2709260871,
						2084704233,
						4169408201,
						0,
						159417987,
						841739592,
						504459436,
						1817866830,
						4245618683,
						260388950,
						1034867998,
						908933415,
						168810852,
						1750902305,
						2606453969,
						607530554,
						202008497,
						2472011535,
						3035535058,
						463180190,
						2160117071,
						1641816226,
						1517767529,
						470948374,
						3801332234,
						3231722213,
						1008918595,
						303765277,
						235474187,
						4069246893,
						766945465,
						337553864,
						1475418501,
						2943682380,
						4003061179,
						2743034109,
						4144047775,
						1551037884,
						1147550661,
						1543208500,
						2336434550,
						3408119516,
						3069049960,
						3102011747,
						3610369226,
						1113818384,
						328671808,
						2227573024,
						2236228733,
						3535486456,
						2935566865,
						3341394285,
						496906059,
						3702665459,
						226906860,
						2009195472,
						733156972,
						2842737049,
						294930682,
						1206477858,
						2835123396,
						2700099354,
						1451044056,
						573804783,
						2269728455,
						3644379585,
						2362090238,
						2564033334,
						2801107407,
						2776292904,
						3669462566,
						1068351396,
						742039012,
						1350078989,
						1784663195,
						1417561698,
						4136440770,
						2430122216,
						775550814,
						2193862645,
						2673705150,
						1775276924,
						1876241833,
						3475313331,
						3366754619,
						270040487,
						3902563182,
						3678124923,
						3441850377,
						1851332852,
						3969562369,
						2203032232,
						3868552805,
						2868897406,
						566021896,
						4011190502,
						3135740889,
						1248802510,
						3936291284,
						699432150,
						832877231,
						708780849,
						3332740144,
						899835584,
						1951317047,
						4236429990,
						3767586992,
						866637845,
						4043610186,
						1106041591,
						2144161806,
						395441711,
						1984812685,
						1139781709,
						3433712980,
						3835036895,
						2664543715,
						1282050075,
						3240894392,
						1181045119,
						2640243204,
						25965917,
						4203181171,
						4211818798,
						3009879386,
						2463879762,
						3910161971,
						1842759443,
						2597806476,
						933301370,
						1509430414,
						3943906441,
						3467192302,
						3076639029,
						3776767469,
						2051518780,
						2631065433,
						1441952575,
						404016761,
						1942435775,
						1408749034,
						1610459739,
						3745345300,
						2017778566,
						3400528769,
						3110650942,
						941896748,
						3265478751,
						371049330,
						3168937228,
						675039627,
						4279080257,
						967311729,
						135050206,
						3635733660,
						1683407248,
						2076935265,
						3576870512,
						1215061108,
						3501741890
					], y = [
						1347548327,
						1400783205,
						3273267108,
						2520393566,
						3409685355,
						4045380933,
						2880240216,
						2471224067,
						1428173050,
						4138563181,
						2441661558,
						636813900,
						4233094615,
						3620022987,
						2149987652,
						2411029155,
						1239331162,
						1730525723,
						2554718734,
						3781033664,
						46346101,
						310463728,
						2743944855,
						3328955385,
						3875770207,
						2501218972,
						3955191162,
						3667219033,
						768917123,
						3545789473,
						692707433,
						1150208456,
						1786102409,
						2029293177,
						1805211710,
						3710368113,
						3065962831,
						401639597,
						1724457132,
						3028143674,
						409198410,
						2196052529,
						1620529459,
						1164071807,
						3769721975,
						2226875310,
						486441376,
						2499348523,
						1483753576,
						428819965,
						2274680428,
						3075636216,
						598438867,
						3799141122,
						1474502543,
						711349675,
						129166120,
						53458370,
						2592523643,
						2782082824,
						4063242375,
						2988687269,
						3120694122,
						1559041666,
						730517276,
						2460449204,
						4042459122,
						2706270690,
						3446004468,
						3573941694,
						533804130,
						2328143614,
						2637442643,
						2695033685,
						839224033,
						1973745387,
						957055980,
						2856345839,
						106852767,
						1371368976,
						4181598602,
						1033297158,
						2933734917,
						1179510461,
						3046200461,
						91341917,
						1862534868,
						4284502037,
						605657339,
						2547432937,
						3431546947,
						2003294622,
						3182487618,
						2282195339,
						954669403,
						3682191598,
						1201765386,
						3917234703,
						3388507166,
						0,
						2198438022,
						1211247597,
						2887651696,
						1315723890,
						4227665663,
						1443857720,
						507358933,
						657861945,
						1678381017,
						560487590,
						3516619604,
						975451694,
						2970356327,
						261314535,
						3535072918,
						2652609425,
						1333838021,
						2724322336,
						1767536459,
						370938394,
						182621114,
						3854606378,
						1128014560,
						487725847,
						185469197,
						2918353863,
						3106780840,
						3356761769,
						2237133081,
						1286567175,
						3152976349,
						4255350624,
						2683765030,
						3160175349,
						3309594171,
						878443390,
						1988838185,
						3704300486,
						1756818940,
						1673061617,
						3403100636,
						272786309,
						1075025698,
						545572369,
						2105887268,
						4174560061,
						296679730,
						1841768865,
						1260232239,
						4091327024,
						3960309330,
						3497509347,
						1814803222,
						2578018489,
						4195456072,
						575138148,
						3299409036,
						446754879,
						3629546796,
						4011996048,
						3347532110,
						3252238545,
						4270639778,
						915985419,
						3483825537,
						681933534,
						651868046,
						2755636671,
						3828103837,
						223377554,
						2607439820,
						1649704518,
						3270937875,
						3901806776,
						1580087799,
						4118987695,
						3198115200,
						2087309459,
						2842678573,
						3016697106,
						1003007129,
						2802849917,
						1860738147,
						2077965243,
						164439672,
						4100872472,
						32283319,
						2827177882,
						1709610350,
						2125135846,
						136428751,
						3874428392,
						3652904859,
						3460984630,
						3572145929,
						3593056380,
						2939266226,
						824852259,
						818324884,
						3224740454,
						930369212,
						2801566410,
						2967507152,
						355706840,
						1257309336,
						4148292826,
						243256656,
						790073846,
						2373340630,
						1296297904,
						1422699085,
						3756299780,
						3818836405,
						457992840,
						3099667487,
						2135319889,
						77422314,
						1560382517,
						1945798516,
						788204353,
						1521706781,
						1385356242,
						870912086,
						325965383,
						2358957921,
						2050466060,
						2388260884,
						2313884476,
						4006521127,
						901210569,
						3990953189,
						1014646705,
						1503449823,
						1062597235,
						2031621326,
						3212035895,
						3931371469,
						1533017514,
						350174575,
						2256028891,
						2177544179,
						1052338372,
						741876788,
						1606591296,
						1914052035,
						213705253,
						2334669897,
						1107234197,
						1899603969,
						3725069491,
						2631447780,
						2422494913,
						1635502980,
						1893020342,
						1950903388,
						1120974935
					], b = [
						2807058932,
						1699970625,
						2764249623,
						1586903591,
						1808481195,
						1173430173,
						1487645946,
						59984867,
						4199882800,
						1844882806,
						1989249228,
						1277555970,
						3623636965,
						3419915562,
						1149249077,
						2744104290,
						1514790577,
						459744698,
						244860394,
						3235995134,
						1963115311,
						4027744588,
						2544078150,
						4190530515,
						1608975247,
						2627016082,
						2062270317,
						1507497298,
						2200818878,
						567498868,
						1764313568,
						3359936201,
						2305455554,
						2037970062,
						1047239e3,
						1910319033,
						1337376481,
						2904027272,
						2892417312,
						984907214,
						1243112415,
						830661914,
						861968209,
						2135253587,
						2011214180,
						2927934315,
						2686254721,
						731183368,
						1750626376,
						4246310725,
						1820824798,
						4172763771,
						3542330227,
						48394827,
						2404901663,
						2871682645,
						671593195,
						3254988725,
						2073724613,
						145085239,
						2280796200,
						2779915199,
						1790575107,
						2187128086,
						472615631,
						3029510009,
						4075877127,
						3802222185,
						4107101658,
						3201631749,
						1646252340,
						4270507174,
						1402811438,
						1436590835,
						3778151818,
						3950355702,
						3963161475,
						4020912224,
						2667994737,
						273792366,
						2331590177,
						104699613,
						95345982,
						3175501286,
						2377486676,
						1560637892,
						3564045318,
						369057872,
						4213447064,
						3919042237,
						1137477952,
						2658625497,
						1119727848,
						2340947849,
						1530455833,
						4007360968,
						172466556,
						266959938,
						516552836,
						0,
						2256734592,
						3980931627,
						1890328081,
						1917742170,
						4294704398,
						945164165,
						3575528878,
						958871085,
						3647212047,
						2787207260,
						1423022939,
						775562294,
						1739656202,
						3876557655,
						2530391278,
						2443058075,
						3310321856,
						547512796,
						1265195639,
						437656594,
						3121275539,
						719700128,
						3762502690,
						387781147,
						218828297,
						3350065803,
						2830708150,
						2848461854,
						428169201,
						122466165,
						3720081049,
						1627235199,
						648017665,
						4122762354,
						1002783846,
						2117360635,
						695634755,
						3336358691,
						4234721005,
						4049844452,
						3704280881,
						2232435299,
						574624663,
						287343814,
						612205898,
						1039717051,
						840019705,
						2708326185,
						793451934,
						821288114,
						1391201670,
						3822090177,
						376187827,
						3113855344,
						1224348052,
						1679968233,
						2361698556,
						1058709744,
						752375421,
						2431590963,
						1321699145,
						3519142200,
						2734591178,
						188127444,
						2177869557,
						3727205754,
						2384911031,
						3215212461,
						2648976442,
						2450346104,
						3432737375,
						1180849278,
						331544205,
						3102249176,
						4150144569,
						2952102595,
						2159976285,
						2474404304,
						766078933,
						313773861,
						2570832044,
						2108100632,
						1668212892,
						3145456443,
						2013908262,
						418672217,
						3070356634,
						2594734927,
						1852171925,
						3867060991,
						3473416636,
						3907448597,
						2614737639,
						919489135,
						164948639,
						2094410160,
						2997825956,
						590424639,
						2486224549,
						1723872674,
						3157750862,
						3399941250,
						3501252752,
						3625268135,
						2555048196,
						3673637356,
						1343127501,
						4130281361,
						3599595085,
						2957853679,
						1297403050,
						81781910,
						3051593425,
						2283490410,
						532201772,
						1367295589,
						3926170974,
						895287692,
						1953757831,
						1093597963,
						492483431,
						3528626907,
						1446242576,
						1192455638,
						1636604631,
						209336225,
						344873464,
						1015671571,
						669961897,
						3375740769,
						3857572124,
						2973530695,
						3747192018,
						1933530610,
						3464042516,
						935293895,
						3454686199,
						2858115069,
						1863638845,
						3683022916,
						4085369519,
						3292445032,
						875313188,
						1080017571,
						3279033885,
						621591778,
						1233856572,
						2504130317,
						24197544,
						3017672716,
						3835484340,
						3247465558,
						2220981195,
						3060847922,
						1551124588,
						1463996600
					], x = [
						4104605777,
						1097159550,
						396673818,
						660510266,
						2875968315,
						2638606623,
						4200115116,
						3808662347,
						821712160,
						1986918061,
						3430322568,
						38544885,
						3856137295,
						718002117,
						893681702,
						1654886325,
						2975484382,
						3122358053,
						3926825029,
						4274053469,
						796197571,
						1290801793,
						1184342925,
						3556361835,
						2405426947,
						2459735317,
						1836772287,
						1381620373,
						3196267988,
						1948373848,
						3764988233,
						3385345166,
						3263785589,
						2390325492,
						1480485785,
						3111247143,
						3780097726,
						2293045232,
						548169417,
						3459953789,
						3746175075,
						439452389,
						1362321559,
						1400849762,
						1685577905,
						1806599355,
						2174754046,
						137073913,
						1214797936,
						1174215055,
						3731654548,
						2079897426,
						1943217067,
						1258480242,
						529487843,
						1437280870,
						3945269170,
						3049390895,
						3313212038,
						923313619,
						679998e3,
						3215307299,
						57326082,
						377642221,
						3474729866,
						2041877159,
						133361907,
						1776460110,
						3673476453,
						96392454,
						878845905,
						2801699524,
						777231668,
						4082475170,
						2330014213,
						4142626212,
						2213296395,
						1626319424,
						1906247262,
						1846563261,
						562755902,
						3708173718,
						1040559837,
						3871163981,
						1418573201,
						3294430577,
						114585348,
						1343618912,
						2566595609,
						3186202582,
						1078185097,
						3651041127,
						3896688048,
						2307622919,
						425408743,
						3371096953,
						2081048481,
						1108339068,
						2216610296,
						0,
						2156299017,
						736970802,
						292596766,
						1517440620,
						251657213,
						2235061775,
						2933202493,
						758720310,
						265905162,
						1554391400,
						1532285339,
						908999204,
						174567692,
						1474760595,
						4002861748,
						2610011675,
						3234156416,
						3693126241,
						2001430874,
						303699484,
						2478443234,
						2687165888,
						585122620,
						454499602,
						151849742,
						2345119218,
						3064510765,
						514443284,
						4044981591,
						1963412655,
						2581445614,
						2137062819,
						19308535,
						1928707164,
						1715193156,
						4219352155,
						1126790795,
						600235211,
						3992742070,
						3841024952,
						836553431,
						1669664834,
						2535604243,
						3323011204,
						1243905413,
						3141400786,
						4180808110,
						698445255,
						2653899549,
						2989552604,
						2253581325,
						3252932727,
						3004591147,
						1891211689,
						2487810577,
						3915653703,
						4237083816,
						4030667424,
						2100090966,
						865136418,
						1229899655,
						953270745,
						3399679628,
						3557504664,
						4118925222,
						2061379749,
						3079546586,
						2915017791,
						983426092,
						2022837584,
						1607244650,
						2118541908,
						2366882550,
						3635996816,
						972512814,
						3283088770,
						1568718495,
						3499326569,
						3576539503,
						621982671,
						2895723464,
						410887952,
						2623762152,
						1002142683,
						645401037,
						1494807662,
						2595684844,
						1335535747,
						2507040230,
						4293295786,
						3167684641,
						367585007,
						3885750714,
						1865862730,
						2668221674,
						2960971305,
						2763173681,
						1059270954,
						2777952454,
						2724642869,
						1320957812,
						2194319100,
						2429595872,
						2815956275,
						77089521,
						3973773121,
						3444575871,
						2448830231,
						1305906550,
						4021308739,
						2857194700,
						2516901860,
						3518358430,
						1787304780,
						740276417,
						1699839814,
						1592394909,
						2352307457,
						2272556026,
						188821243,
						1729977011,
						3687994002,
						274084841,
						3594982253,
						3613494426,
						2701949495,
						4162096729,
						322734571,
						2837966542,
						1640576439,
						484830689,
						1202797690,
						3537852828,
						4067639125,
						349075736,
						3342319475,
						4157467219,
						4255800159,
						1030690015,
						1155237496,
						2951971274,
						1757691577,
						607398968,
						2738905026,
						499347990,
						3794078908,
						1011452712,
						227885567,
						2818666809,
						213114376,
						3034881240,
						1455525988,
						3414450555,
						850817237,
						1817998408,
						3092726480
					], S = [
						0,
						235474187,
						470948374,
						303765277,
						941896748,
						908933415,
						607530554,
						708780849,
						1883793496,
						2118214995,
						1817866830,
						1649639237,
						1215061108,
						1181045119,
						1417561698,
						1517767529,
						3767586992,
						4003061179,
						4236429990,
						4069246893,
						3635733660,
						3602770327,
						3299278474,
						3400528769,
						2430122216,
						2664543715,
						2362090238,
						2193862645,
						2835123396,
						2801107407,
						3035535058,
						3135740889,
						3678124923,
						3576870512,
						3341394285,
						3374361702,
						3810496343,
						3977675356,
						4279080257,
						4043610186,
						2876494627,
						2776292904,
						3076639029,
						3110650942,
						2472011535,
						2640243204,
						2403728665,
						2169303058,
						1001089995,
						899835584,
						666464733,
						699432150,
						59727847,
						226906860,
						530400753,
						294930682,
						1273168787,
						1172967064,
						1475418501,
						1509430414,
						1942435775,
						2110667444,
						1876241833,
						1641816226,
						2910219766,
						2743034109,
						2976151520,
						3211623147,
						2505202138,
						2606453969,
						2302690252,
						2269728455,
						3711829422,
						3543599269,
						3240894392,
						3475313331,
						3843699074,
						3943906441,
						4178062228,
						4144047775,
						1306967366,
						1139781709,
						1374988112,
						1610459739,
						1975683434,
						2076935265,
						1775276924,
						1742315127,
						1034867998,
						866637845,
						566021896,
						800440835,
						92987698,
						193195065,
						429456164,
						395441711,
						1984812685,
						2017778566,
						1784663195,
						1683407248,
						1315562145,
						1080094634,
						1383856311,
						1551037884,
						101039829,
						135050206,
						437757123,
						337553864,
						1042385657,
						807962610,
						573804783,
						742039012,
						2531067453,
						2564033334,
						2328828971,
						2227573024,
						2935566865,
						2700099354,
						3001755655,
						3168937228,
						3868552805,
						3902563182,
						4203181171,
						4102977912,
						3736164937,
						3501741890,
						3265478751,
						3433712980,
						1106041591,
						1340463100,
						1576976609,
						1408749034,
						2043211483,
						2009195472,
						1708848333,
						1809054150,
						832877231,
						1068351396,
						766945465,
						599762354,
						159417987,
						126454664,
						361929877,
						463180190,
						2709260871,
						2943682380,
						3178106961,
						3009879386,
						2572697195,
						2538681184,
						2236228733,
						2336434550,
						3509871135,
						3745345300,
						3441850377,
						3274667266,
						3910161971,
						3877198648,
						4110568485,
						4211818798,
						2597806476,
						2497604743,
						2261089178,
						2295101073,
						2733856160,
						2902087851,
						3202437046,
						2968011453,
						3936291284,
						3835036895,
						4136440770,
						4169408201,
						3535486456,
						3702665459,
						3467192302,
						3231722213,
						2051518780,
						1951317047,
						1716890410,
						1750902305,
						1113818384,
						1282050075,
						1584504582,
						1350078989,
						168810852,
						67556463,
						371049330,
						404016761,
						841739592,
						1008918595,
						775550814,
						540080725,
						3969562369,
						3801332234,
						4035489047,
						4269907996,
						3569255213,
						3669462566,
						3366754619,
						3332740144,
						2631065433,
						2463879762,
						2160117071,
						2395588676,
						2767645557,
						2868897406,
						3102011747,
						3069049960,
						202008497,
						33778362,
						270040487,
						504459436,
						875451293,
						975658646,
						675039627,
						641025152,
						2084704233,
						1917518562,
						1615861247,
						1851332852,
						1147550661,
						1248802510,
						1484005843,
						1451044056,
						933301370,
						967311729,
						733156972,
						632953703,
						260388950,
						25965917,
						328671808,
						496906059,
						1206477858,
						1239443753,
						1543208500,
						1441952575,
						2144161806,
						1908694277,
						1675577880,
						1842759443,
						3610369226,
						3644379585,
						3408119516,
						3307916247,
						4011190502,
						3776767469,
						4077384432,
						4245618683,
						2809771154,
						2842737049,
						3144396420,
						3043140495,
						2673705150,
						2438237621,
						2203032232,
						2370213795
					], C = [
						0,
						185469197,
						370938394,
						487725847,
						741876788,
						657861945,
						975451694,
						824852259,
						1483753576,
						1400783205,
						1315723890,
						1164071807,
						1950903388,
						2135319889,
						1649704518,
						1767536459,
						2967507152,
						3152976349,
						2801566410,
						2918353863,
						2631447780,
						2547432937,
						2328143614,
						2177544179,
						3901806776,
						3818836405,
						4270639778,
						4118987695,
						3299409036,
						3483825537,
						3535072918,
						3652904859,
						2077965243,
						1893020342,
						1841768865,
						1724457132,
						1474502543,
						1559041666,
						1107234197,
						1257309336,
						598438867,
						681933534,
						901210569,
						1052338372,
						261314535,
						77422314,
						428819965,
						310463728,
						3409685355,
						3224740454,
						3710368113,
						3593056380,
						3875770207,
						3960309330,
						4045380933,
						4195456072,
						2471224067,
						2554718734,
						2237133081,
						2388260884,
						3212035895,
						3028143674,
						2842678573,
						2724322336,
						4138563181,
						4255350624,
						3769721975,
						3955191162,
						3667219033,
						3516619604,
						3431546947,
						3347532110,
						2933734917,
						2782082824,
						3099667487,
						3016697106,
						2196052529,
						2313884476,
						2499348523,
						2683765030,
						1179510461,
						1296297904,
						1347548327,
						1533017514,
						1786102409,
						1635502980,
						2087309459,
						2003294622,
						507358933,
						355706840,
						136428751,
						53458370,
						839224033,
						957055980,
						605657339,
						790073846,
						2373340630,
						2256028891,
						2607439820,
						2422494913,
						2706270690,
						2856345839,
						3075636216,
						3160175349,
						3573941694,
						3725069491,
						3273267108,
						3356761769,
						4181598602,
						4063242375,
						4011996048,
						3828103837,
						1033297158,
						915985419,
						730517276,
						545572369,
						296679730,
						446754879,
						129166120,
						213705253,
						1709610350,
						1860738147,
						1945798516,
						2029293177,
						1239331162,
						1120974935,
						1606591296,
						1422699085,
						4148292826,
						4233094615,
						3781033664,
						3931371469,
						3682191598,
						3497509347,
						3446004468,
						3328955385,
						2939266226,
						2755636671,
						3106780840,
						2988687269,
						2198438022,
						2282195339,
						2501218972,
						2652609425,
						1201765386,
						1286567175,
						1371368976,
						1521706781,
						1805211710,
						1620529459,
						2105887268,
						1988838185,
						533804130,
						350174575,
						164439672,
						46346101,
						870912086,
						954669403,
						636813900,
						788204353,
						2358957921,
						2274680428,
						2592523643,
						2441661558,
						2695033685,
						2880240216,
						3065962831,
						3182487618,
						3572145929,
						3756299780,
						3270937875,
						3388507166,
						4174560061,
						4091327024,
						4006521127,
						3854606378,
						1014646705,
						930369212,
						711349675,
						560487590,
						272786309,
						457992840,
						106852767,
						223377554,
						1678381017,
						1862534868,
						1914052035,
						2031621326,
						1211247597,
						1128014560,
						1580087799,
						1428173050,
						32283319,
						182621114,
						401639597,
						486441376,
						768917123,
						651868046,
						1003007129,
						818324884,
						1503449823,
						1385356242,
						1333838021,
						1150208456,
						1973745387,
						2125135846,
						1673061617,
						1756818940,
						2970356327,
						3120694122,
						2802849917,
						2887651696,
						2637442643,
						2520393566,
						2334669897,
						2149987652,
						3917234703,
						3799141122,
						4284502037,
						4100872472,
						3309594171,
						3460984630,
						3545789473,
						3629546796,
						2050466060,
						1899603969,
						1814803222,
						1730525723,
						1443857720,
						1560382517,
						1075025698,
						1260232239,
						575138148,
						692707433,
						878443390,
						1062597235,
						243256656,
						91341917,
						409198410,
						325965383,
						3403100636,
						3252238545,
						3704300486,
						3620022987,
						3874428392,
						3990953189,
						4042459122,
						4227665663,
						2460449204,
						2578018489,
						2226875310,
						2411029155,
						3198115200,
						3046200461,
						2827177882,
						2743944855
					], w = [
						0,
						218828297,
						437656594,
						387781147,
						875313188,
						958871085,
						775562294,
						590424639,
						1750626376,
						1699970625,
						1917742170,
						2135253587,
						1551124588,
						1367295589,
						1180849278,
						1265195639,
						3501252752,
						3720081049,
						3399941250,
						3350065803,
						3835484340,
						3919042237,
						4270507174,
						4085369519,
						3102249176,
						3051593425,
						2734591178,
						2952102595,
						2361698556,
						2177869557,
						2530391278,
						2614737639,
						3145456443,
						3060847922,
						2708326185,
						2892417312,
						2404901663,
						2187128086,
						2504130317,
						2555048196,
						3542330227,
						3727205754,
						3375740769,
						3292445032,
						3876557655,
						3926170974,
						4246310725,
						4027744588,
						1808481195,
						1723872674,
						1910319033,
						2094410160,
						1608975247,
						1391201670,
						1173430173,
						1224348052,
						59984867,
						244860394,
						428169201,
						344873464,
						935293895,
						984907214,
						766078933,
						547512796,
						1844882806,
						1627235199,
						2011214180,
						2062270317,
						1507497298,
						1423022939,
						1137477952,
						1321699145,
						95345982,
						145085239,
						532201772,
						313773861,
						830661914,
						1015671571,
						731183368,
						648017665,
						3175501286,
						2957853679,
						2807058932,
						2858115069,
						2305455554,
						2220981195,
						2474404304,
						2658625497,
						3575528878,
						3625268135,
						3473416636,
						3254988725,
						3778151818,
						3963161475,
						4213447064,
						4130281361,
						3599595085,
						3683022916,
						3432737375,
						3247465558,
						3802222185,
						4020912224,
						4172763771,
						4122762354,
						3201631749,
						3017672716,
						2764249623,
						2848461854,
						2331590177,
						2280796200,
						2431590963,
						2648976442,
						104699613,
						188127444,
						472615631,
						287343814,
						840019705,
						1058709744,
						671593195,
						621591778,
						1852171925,
						1668212892,
						1953757831,
						2037970062,
						1514790577,
						1463996600,
						1080017571,
						1297403050,
						3673637356,
						3623636965,
						3235995134,
						3454686199,
						4007360968,
						3822090177,
						4107101658,
						4190530515,
						2997825956,
						3215212461,
						2830708150,
						2779915199,
						2256734592,
						2340947849,
						2627016082,
						2443058075,
						172466556,
						122466165,
						273792366,
						492483431,
						1047239e3,
						861968209,
						612205898,
						695634755,
						1646252340,
						1863638845,
						2013908262,
						1963115311,
						1446242576,
						1530455833,
						1277555970,
						1093597963,
						1636604631,
						1820824798,
						2073724613,
						1989249228,
						1436590835,
						1487645946,
						1337376481,
						1119727848,
						164948639,
						81781910,
						331544205,
						516552836,
						1039717051,
						821288114,
						669961897,
						719700128,
						2973530695,
						3157750862,
						2871682645,
						2787207260,
						2232435299,
						2283490410,
						2667994737,
						2450346104,
						3647212047,
						3564045318,
						3279033885,
						3464042516,
						3980931627,
						3762502690,
						4150144569,
						4199882800,
						3070356634,
						3121275539,
						2904027272,
						2686254721,
						2200818878,
						2384911031,
						2570832044,
						2486224549,
						3747192018,
						3528626907,
						3310321856,
						3359936201,
						3950355702,
						3867060991,
						4049844452,
						4234721005,
						1739656202,
						1790575107,
						2108100632,
						1890328081,
						1402811438,
						1586903591,
						1233856572,
						1149249077,
						266959938,
						48394827,
						369057872,
						418672217,
						1002783846,
						919489135,
						567498868,
						752375421,
						209336225,
						24197544,
						376187827,
						459744698,
						945164165,
						895287692,
						574624663,
						793451934,
						1679968233,
						1764313568,
						2117360635,
						1933530610,
						1343127501,
						1560637892,
						1243112415,
						1192455638,
						3704280881,
						3519142200,
						3336358691,
						3419915562,
						3907448597,
						3857572124,
						4075877127,
						4294704398,
						3029510009,
						3113855344,
						2927934315,
						2744104290,
						2159976285,
						2377486676,
						2594734927,
						2544078150
					], T = [
						0,
						151849742,
						303699484,
						454499602,
						607398968,
						758720310,
						908999204,
						1059270954,
						1214797936,
						1097159550,
						1517440620,
						1400849762,
						1817998408,
						1699839814,
						2118541908,
						2001430874,
						2429595872,
						2581445614,
						2194319100,
						2345119218,
						3034881240,
						3186202582,
						2801699524,
						2951971274,
						3635996816,
						3518358430,
						3399679628,
						3283088770,
						4237083816,
						4118925222,
						4002861748,
						3885750714,
						1002142683,
						850817237,
						698445255,
						548169417,
						529487843,
						377642221,
						227885567,
						77089521,
						1943217067,
						2061379749,
						1640576439,
						1757691577,
						1474760595,
						1592394909,
						1174215055,
						1290801793,
						2875968315,
						2724642869,
						3111247143,
						2960971305,
						2405426947,
						2253581325,
						2638606623,
						2487810577,
						3808662347,
						3926825029,
						4044981591,
						4162096729,
						3342319475,
						3459953789,
						3576539503,
						3693126241,
						1986918061,
						2137062819,
						1685577905,
						1836772287,
						1381620373,
						1532285339,
						1078185097,
						1229899655,
						1040559837,
						923313619,
						740276417,
						621982671,
						439452389,
						322734571,
						137073913,
						19308535,
						3871163981,
						4021308739,
						4104605777,
						4255800159,
						3263785589,
						3414450555,
						3499326569,
						3651041127,
						2933202493,
						2815956275,
						3167684641,
						3049390895,
						2330014213,
						2213296395,
						2566595609,
						2448830231,
						1305906550,
						1155237496,
						1607244650,
						1455525988,
						1776460110,
						1626319424,
						2079897426,
						1928707164,
						96392454,
						213114376,
						396673818,
						514443284,
						562755902,
						679998e3,
						865136418,
						983426092,
						3708173718,
						3557504664,
						3474729866,
						3323011204,
						4180808110,
						4030667424,
						3945269170,
						3794078908,
						2507040230,
						2623762152,
						2272556026,
						2390325492,
						2975484382,
						3092726480,
						2738905026,
						2857194700,
						3973773121,
						3856137295,
						4274053469,
						4157467219,
						3371096953,
						3252932727,
						3673476453,
						3556361835,
						2763173681,
						2915017791,
						3064510765,
						3215307299,
						2156299017,
						2307622919,
						2459735317,
						2610011675,
						2081048481,
						1963412655,
						1846563261,
						1729977011,
						1480485785,
						1362321559,
						1243905413,
						1126790795,
						878845905,
						1030690015,
						645401037,
						796197571,
						274084841,
						425408743,
						38544885,
						188821243,
						3613494426,
						3731654548,
						3313212038,
						3430322568,
						4082475170,
						4200115116,
						3780097726,
						3896688048,
						2668221674,
						2516901860,
						2366882550,
						2216610296,
						3141400786,
						2989552604,
						2837966542,
						2687165888,
						1202797690,
						1320957812,
						1437280870,
						1554391400,
						1669664834,
						1787304780,
						1906247262,
						2022837584,
						265905162,
						114585348,
						499347990,
						349075736,
						736970802,
						585122620,
						972512814,
						821712160,
						2595684844,
						2478443234,
						2293045232,
						2174754046,
						3196267988,
						3079546586,
						2895723464,
						2777952454,
						3537852828,
						3687994002,
						3234156416,
						3385345166,
						4142626212,
						4293295786,
						3841024952,
						3992742070,
						174567692,
						57326082,
						410887952,
						292596766,
						777231668,
						660510266,
						1011452712,
						893681702,
						1108339068,
						1258480242,
						1343618912,
						1494807662,
						1715193156,
						1865862730,
						1948373848,
						2100090966,
						2701949495,
						2818666809,
						3004591147,
						3122358053,
						2235061775,
						2352307457,
						2535604243,
						2653899549,
						3915653703,
						3764988233,
						4219352155,
						4067639125,
						3444575871,
						3294430577,
						3746175075,
						3594982253,
						836553431,
						953270745,
						600235211,
						718002117,
						367585007,
						484830689,
						133361907,
						251657213,
						2041877159,
						1891211689,
						1806599355,
						1654886325,
						1568718495,
						1418573201,
						1335535747,
						1184342925
					];
					function E(e) {
						for (var t = [], n = 0; n < e.length; n += 4) t.push(e[n] << 24 | e[n + 1] << 16 | e[n + 2] << 8 | e[n + 3]);
						return t;
					}
					var D = function(e) {
						if (!(this instanceof D)) throw Error("AES must be instanitated with `new`");
						Object.defineProperty(this, "key", { value: i(e, !0) }), this._prepare();
					};
					D.prototype._prepare = function() {
						var e = u[this.key.length];
						if (e == null) throw Error("invalid key size (must be 16, 24 or 32 bytes)");
						this._Ke = [], this._Kd = [];
						for (var t = 0; t <= e; t++) this._Ke.push([
							0,
							0,
							0,
							0
						]), this._Kd.push([
							0,
							0,
							0,
							0
						]);
						var n, r = 4 * (e + 1), i = this.key.length / 4, a = E(this.key);
						for (t = 0; t < i; t++) n = t >> 2, this._Ke[n][t % 4] = a[t], this._Kd[e - n][t % 4] = a[t];
						for (var o, s = 0, c = i; c < r;) {
							if (o = a[i - 1], a[0] ^= f[o >> 16 & 255] << 24 ^ f[o >> 8 & 255] << 16 ^ f[255 & o] << 8 ^ f[o >> 24 & 255] ^ d[s] << 24, s += 1, i != 8) for (t = 1; t < i; t++) a[t] ^= a[t - 1];
							else {
								for (t = 1; t < i / 2; t++) a[t] ^= a[t - 1];
								for (o = a[i / 2 - 1], a[i / 2] ^= f[255 & o] ^ f[o >> 8 & 255] << 8 ^ f[o >> 16 & 255] << 16 ^ f[o >> 24 & 255] << 24, t = i / 2 + 1; t < i; t++) a[t] ^= a[t - 1];
							}
							for (t = 0; t < i && c < r;) l = c >> 2, p = c % 4, this._Ke[l][p] = a[t], this._Kd[e - l][p] = a[t++], c++;
						}
						for (var l = 1; l < e; l++) for (var p = 0; p < 4; p++) o = this._Kd[l][p], this._Kd[l][p] = S[o >> 24 & 255] ^ C[o >> 16 & 255] ^ w[o >> 8 & 255] ^ T[255 & o];
					}, D.prototype.encrypt = function(e) {
						if (e.length != 16) throw Error("invalid plaintext size (must be 16 bytes)");
						for (var t = this._Ke.length - 1, n = [
							0,
							0,
							0,
							0
						], r = E(e), i = 0; i < 4; i++) r[i] ^= this._Ke[0][i];
						for (var o = 1; o < t; o++) {
							for (i = 0; i < 4; i++) n[i] = m[r[i] >> 24 & 255] ^ h[r[(i + 1) % 4] >> 16 & 255] ^ g[r[(i + 2) % 4] >> 8 & 255] ^ _[255 & r[(i + 3) % 4]] ^ this._Ke[o][i];
							r = n.slice();
						}
						var s, c = a(16);
						for (i = 0; i < 4; i++) s = this._Ke[t][i], c[4 * i] = 255 & (f[r[i] >> 24 & 255] ^ s >> 24), c[4 * i + 1] = 255 & (f[r[(i + 1) % 4] >> 16 & 255] ^ s >> 16), c[4 * i + 2] = 255 & (f[r[(i + 2) % 4] >> 8 & 255] ^ s >> 8), c[4 * i + 3] = 255 & (f[255 & r[(i + 3) % 4]] ^ s);
						return c;
					}, D.prototype.decrypt = function(e) {
						if (e.length != 16) throw Error("invalid ciphertext size (must be 16 bytes)");
						for (var t = this._Kd.length - 1, n = [
							0,
							0,
							0,
							0
						], r = E(e), i = 0; i < 4; i++) r[i] ^= this._Kd[0][i];
						for (var o = 1; o < t; o++) {
							for (i = 0; i < 4; i++) n[i] = v[r[i] >> 24 & 255] ^ y[r[(i + 3) % 4] >> 16 & 255] ^ b[r[(i + 2) % 4] >> 8 & 255] ^ x[255 & r[(i + 1) % 4]] ^ this._Kd[o][i];
							r = n.slice();
						}
						var s, c = a(16);
						for (i = 0; i < 4; i++) s = this._Kd[t][i], c[4 * i] = 255 & (p[r[i] >> 24 & 255] ^ s >> 24), c[4 * i + 1] = 255 & (p[r[(i + 3) % 4] >> 16 & 255] ^ s >> 16), c[4 * i + 2] = 255 & (p[r[(i + 2) % 4] >> 8 & 255] ^ s >> 8), c[4 * i + 3] = 255 & (p[255 & r[(i + 1) % 4]] ^ s);
						return c;
					};
					var O = function(e) {
						if (!(this instanceof O)) throw Error("AES must be instanitated with `new`");
						this.description = "Electronic Code Block", this.name = "ecb", this._aes = new D(e);
					};
					O.prototype.encrypt = function(e) {
						if ((e = i(e)).length % 16 != 0) throw Error("invalid plaintext size (must be multiple of 16 bytes)");
						for (var t = a(e.length), n = a(16), r = 0; r < e.length; r += 16) o(e, n, 0, r, r + 16), o(n = this._aes.encrypt(n), t, r);
						return t;
					}, O.prototype.decrypt = function(e) {
						if ((e = i(e)).length % 16 != 0) throw Error("invalid ciphertext size (must be multiple of 16 bytes)");
						for (var t = a(e.length), n = a(16), r = 0; r < e.length; r += 16) o(e, n, 0, r, r + 16), o(n = this._aes.decrypt(n), t, r);
						return t;
					};
					var k = function(e, t) {
						if (!(this instanceof k)) throw Error("AES must be instanitated with `new`");
						if (this.description = "Cipher Block Chaining", this.name = "cbc", t) {
							if (t.length != 16) throw Error("invalid initialation vector size (must be 16 bytes)");
						} else t = a(16);
						this._lastCipherblock = i(t, !0), this._aes = new D(e);
					};
					k.prototype.encrypt = function(e) {
						if ((e = i(e)).length % 16 != 0) throw Error("invalid plaintext size (must be multiple of 16 bytes)");
						for (var t = a(e.length), n = a(16), r = 0; r < e.length; r += 16) {
							o(e, n, 0, r, r + 16);
							for (var s = 0; s < 16; s++) n[s] ^= this._lastCipherblock[s];
							this._lastCipherblock = this._aes.encrypt(n), o(this._lastCipherblock, t, r);
						}
						return t;
					}, k.prototype.decrypt = function(e) {
						if ((e = i(e)).length % 16 != 0) throw Error("invalid ciphertext size (must be multiple of 16 bytes)");
						for (var t = a(e.length), n = a(16), r = 0; r < e.length; r += 16) {
							o(e, n, 0, r, r + 16), n = this._aes.decrypt(n);
							for (var s = 0; s < 16; s++) t[r + s] = n[s] ^ this._lastCipherblock[s];
							o(e, this._lastCipherblock, 0, r, r + 16);
						}
						return t;
					};
					var A = function(e, t, n) {
						if (!(this instanceof A)) throw Error("AES must be instanitated with `new`");
						if (this.description = "Cipher Feedback", this.name = "cfb", t) {
							if (t.length != 16) throw Error("invalid initialation vector size (must be 16 size)");
						} else t = a(16);
						n ||= 1, this.segmentSize = n, this._shiftRegister = i(t, !0), this._aes = new D(e);
					};
					A.prototype.encrypt = function(e) {
						if (e.length % this.segmentSize != 0) throw Error("invalid plaintext size (must be segmentSize bytes)");
						for (var t, n = i(e, !0), r = 0; r < n.length; r += this.segmentSize) {
							t = this._aes.encrypt(this._shiftRegister);
							for (var a = 0; a < this.segmentSize; a++) n[r + a] ^= t[a];
							o(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), o(n, this._shiftRegister, 16 - this.segmentSize, r, r + this.segmentSize);
						}
						return n;
					}, A.prototype.decrypt = function(e) {
						if (e.length % this.segmentSize != 0) throw Error("invalid ciphertext size (must be segmentSize bytes)");
						for (var t, n = i(e, !0), r = 0; r < n.length; r += this.segmentSize) {
							t = this._aes.encrypt(this._shiftRegister);
							for (var a = 0; a < this.segmentSize; a++) n[r + a] ^= t[a];
							o(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), o(e, this._shiftRegister, 16 - this.segmentSize, r, r + this.segmentSize);
						}
						return n;
					};
					var j = function(e, t) {
						if (!(this instanceof j)) throw Error("AES must be instanitated with `new`");
						if (this.description = "Output Feedback", this.name = "ofb", t) {
							if (t.length != 16) throw Error("invalid initialation vector size (must be 16 bytes)");
						} else t = a(16);
						this._lastPrecipher = i(t, !0), this._lastPrecipherIndex = 16, this._aes = new D(e);
					};
					j.prototype.encrypt = function(e) {
						for (var t = i(e, !0), n = 0; n < t.length; n++) this._lastPrecipherIndex === 16 && (this._lastPrecipher = this._aes.encrypt(this._lastPrecipher), this._lastPrecipherIndex = 0), t[n] ^= this._lastPrecipher[this._lastPrecipherIndex++];
						return t;
					}, j.prototype.decrypt = j.prototype.encrypt;
					var M = function(e) {
						if (!(this instanceof M)) throw Error("Counter must be instanitated with `new`");
						e === 0 || e || (e = 1), typeof e == "number" ? (this._counter = a(16), this.setValue(e)) : this.setBytes(e);
					};
					M.prototype.setValue = function(e) {
						if (typeof e != "number" || parseInt(e) != e) throw Error("invalid counter value (must be an integer)");
						if (e > 2 ** 53 - 1) throw Error("integer value out of safe range");
						for (var t = 15; t >= 0; --t) this._counter[t] = e % 256, e = parseInt(e / 256);
					}, M.prototype.setBytes = function(e) {
						if ((e = i(e, !0)).length != 16) throw Error("invalid counter bytes size (must be 16 bytes)");
						this._counter = e;
					}, M.prototype.increment = function() {
						for (var e = 15; e >= 0; e--) {
							if (this._counter[e] !== 255) {
								this._counter[e]++;
								break;
							}
							this._counter[e] = 0;
						}
					};
					var N = function(e, t) {
						if (!(this instanceof N)) throw Error("AES must be instanitated with `new`");
						this.description = "Counter", this.name = "ctr", t instanceof M || (t = new M(t)), this._counter = t, this._remainingCounter = null, this._remainingCounterIndex = 16, this._aes = new D(e);
					};
					N.prototype.encrypt = function(e) {
						for (var t = i(e, !0), n = 0; n < t.length; n++) this._remainingCounterIndex === 16 && (this._remainingCounter = this._aes.encrypt(this._counter._counter), this._remainingCounterIndex = 0, this._counter.increment()), t[n] ^= this._remainingCounter[this._remainingCounterIndex++];
						return t;
					}, N.prototype.decrypt = N.prototype.encrypt, e.exports = {
						AES: D,
						Counter: M,
						ModeOfOperation: {
							ecb: O,
							cbc: k,
							cfb: A,
							ofb: j,
							ctr: N
						},
						utils: {
							hex: l,
							utf8: c
						},
						padding: { pkcs7: {
							pad: function(e) {
								var t = 16 - (e = i(e, !0)).length % 16, n = a(e.length + t);
								o(e, n);
								for (var r = e.length; r < n.length; r++) n[r] = t;
								return n;
							},
							strip: function(e) {
								if ((e = i(e, !0)).length < 16) throw Error("PKCS#7 invalid length");
								var t = e[e.length - 1];
								if (t > 16) throw Error("PKCS#7 padding byte out of range");
								for (var n = e.length - t, r = 0; r < t; r++) if (e[n + r] !== t) throw Error("PKCS#7 invalid padding byte");
								var s = a(n);
								return o(e, s, 0, 0, n), s;
							}
						} },
						_arrayTest: {
							coerceArray: i,
							createArray: a,
							copyArray: o
						}
					};
				})();
			},
			function(e, t, n) {
				e.exports = n(20).default;
			},
			function(e, t, n) {
				(function(t, n) {
					e.exports = function() {
						function e(e) {
							return typeof e == "function";
						}
						var r = Array.isArray ? Array.isArray : function(e) {
							return Object.prototype.toString.call(e) === "[object Array]";
						}, i = 0, a = void 0, o = void 0, s = function(e, t) {
							m[i] = e, m[i + 1] = t, (i += 2) === 2 && (o ? o(h) : b());
						}, c = typeof window < "u" ? window : void 0, l = c || {}, u = l.MutationObserver || l.WebKitMutationObserver, d = typeof self > "u" && t !== void 0 && {}.toString.call(t) === "[object process]", f = typeof Uint8ClampedArray < "u" && typeof importScripts < "u" && typeof MessageChannel < "u";
						function p() {
							var e = setTimeout;
							return function() {
								return e(h, 1);
							};
						}
						var m = Array(1e3);
						function h() {
							for (var e = 0; e < i; e += 2) (0, m[e])(m[e + 1]), m[e] = void 0, m[e + 1] = void 0;
							i = 0;
						}
						var g, _, v, y, b = void 0;
						function x(e, t) {
							var n = this, r = new this.constructor(w);
							r[C] === void 0 && P(r);
							var i = n._state;
							if (i) {
								var a = arguments[i - 1];
								s((function() {
									return M(i, r, a, n._result);
								}));
							} else A(n, r, e, t);
							return r;
						}
						function S(e) {
							if (e && typeof e == "object" && e.constructor === this) return e;
							var t = new this(w);
							return E(t, e), t;
						}
						d ? b = function() {
							return t.nextTick(h);
						} : u ? (_ = 0, v = new u(h), y = document.createTextNode(""), v.observe(y, { characterData: !0 }), b = function() {
							y.data = _ = ++_ % 2;
						}) : f ? ((g = new MessageChannel()).port1.onmessage = h, b = function() {
							return g.port2.postMessage(0);
						}) : b = c === void 0 ? function() {
							try {
								var e = Function("return this")().require("vertx");
								return (a = e.runOnLoop || e.runOnContext) === void 0 ? p() : function() {
									a(h);
								};
							} catch {
								return p();
							}
						}() : p();
						var C = Math.random().toString(36).substring(2);
						function w() {}
						function T(t, n, r) {
							n.constructor === t.constructor && r === x && n.constructor.resolve === S ? function(e, t) {
								t._state === 1 ? O(e, t._result) : t._state === 2 ? k(e, t._result) : A(t, void 0, (function(t) {
									return E(e, t);
								}), (function(t) {
									return k(e, t);
								}));
							}(t, n) : r === void 0 ? O(t, n) : e(r) ? function(e, t, n) {
								s((function(e) {
									var r = !1, i = function(e, t, n, r) {
										try {
											e.call(t, n, r);
										} catch (e) {
											return e;
										}
									}(n, t, (function(n) {
										r || (r = !0, t === n ? O(e, n) : E(e, n));
									}), (function(t) {
										r || (r = !0, k(e, t));
									}), e._label);
									!r && i && (r = !0, k(e, i));
								}), e);
							}(t, n, r) : O(t, n);
						}
						function E(e, t) {
							if (e === t) k(e, /* @__PURE__ */ TypeError("You cannot resolve a promise with itself"));
							else if (i = typeof (r = t), r === null || i !== "object" && i !== "function") O(e, t);
							else {
								var n = void 0;
								try {
									n = t.then;
								} catch (t) {
									k(e, t);
									return;
								}
								T(e, t, n);
							}
							var r, i;
						}
						function D(e) {
							e._onerror && e._onerror(e._result), j(e);
						}
						function O(e, t) {
							e._state === void 0 && (e._result = t, e._state = 1, e._subscribers.length !== 0 && s(j, e));
						}
						function k(e, t) {
							e._state === void 0 && (e._state = 2, e._result = t, s(D, e));
						}
						function A(e, t, n, r) {
							var i = e._subscribers, a = i.length;
							e._onerror = null, i[a] = t, i[a + 1] = n, i[a + 2] = r, a === 0 && e._state && s(j, e);
						}
						function j(e) {
							var t = e._subscribers, n = e._state;
							if (t.length !== 0) {
								for (var r = void 0, i = void 0, a = e._result, o = 0; o < t.length; o += 3) r = t[o], i = t[o + n], r ? M(n, r, i, a) : i(a);
								e._subscribers.length = 0;
							}
						}
						function M(t, n, r, i) {
							var a = e(r), o = void 0, s = void 0, c = !0;
							if (a) {
								try {
									o = r(i);
								} catch (e) {
									c = !1, s = e;
								}
								if (n === o) return void k(n, /* @__PURE__ */ TypeError("A promises callback cannot return that same promise."));
							} else o = i;
							n._state !== void 0 || (a && c ? E(n, o) : !1 === c ? k(n, s) : t === 1 ? O(n, o) : t === 2 && k(n, o));
						}
						var N = 0;
						function P(e) {
							e[C] = N++, e._state = void 0, e._result = void 0, e._subscribers = [];
						}
						var F = function() {
							function e(e, t) {
								this._instanceConstructor = e, this.promise = new e(w), this.promise[C] || P(this.promise), r(t) ? (this.length = t.length, this._remaining = t.length, this._result = Array(this.length), this.length === 0 ? O(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(t), this._remaining === 0 && O(this.promise, this._result))) : k(this.promise, /* @__PURE__ */ Error("Array Methods must be provided an Array"));
							}
							return e.prototype._enumerate = function(e) {
								for (var t = 0; this._state === void 0 && t < e.length; t++) this._eachEntry(e[t], t);
							}, e.prototype._eachEntry = function(e, t) {
								var n = this._instanceConstructor, r = n.resolve;
								if (r === S) {
									var i = void 0, a = void 0, o = !1;
									try {
										i = e.then;
									} catch (e) {
										o = !0, a = e;
									}
									if (i === x && e._state !== void 0) this._settledAt(e._state, t, e._result);
									else if (typeof i != "function") this._remaining--, this._result[t] = e;
									else if (n === I) {
										var s = new n(w);
										o ? k(s, a) : T(s, e, i), this._willSettleAt(s, t);
									} else this._willSettleAt(new n((function(t) {
										return t(e);
									})), t);
								} else this._willSettleAt(r(e), t);
							}, e.prototype._settledAt = function(e, t, n) {
								var r = this.promise;
								r._state === void 0 && (this._remaining--, e === 2 ? k(r, n) : this._result[t] = n), this._remaining === 0 && O(r, this._result);
							}, e.prototype._willSettleAt = function(e, t) {
								var n = this;
								A(e, void 0, (function(e) {
									return n._settledAt(1, t, e);
								}), (function(e) {
									return n._settledAt(2, t, e);
								}));
							}, e;
						}(), I = function() {
							function t(e) {
								this[C] = N++, this._result = this._state = void 0, this._subscribers = [], w !== e && (typeof e != "function" && function() {
									throw TypeError("You must pass a resolver function as the first argument to the promise constructor");
								}(), this instanceof t ? function(e, t) {
									try {
										t((function(t) {
											E(e, t);
										}), (function(t) {
											k(e, t);
										}));
									} catch (t) {
										k(e, t);
									}
								}(this, e) : function() {
									throw TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
								}());
							}
							return t.prototype.catch = function(e) {
								return this.then(null, e);
							}, t.prototype.finally = function(t) {
								var n = this.constructor;
								return e(t) ? this.then((function(e) {
									return n.resolve(t()).then((function() {
										return e;
									}));
								}), (function(e) {
									return n.resolve(t()).then((function() {
										throw e;
									}));
								})) : this.then(t, t);
							}, t;
						}();
						return I.prototype.then = x, I.all = function(e) {
							return new F(this, e).promise;
						}, I.race = function(e) {
							var t = this;
							return r(e) ? new t((function(n, r) {
								for (var i = e.length, a = 0; a < i; a++) t.resolve(e[a]).then(n, r);
							})) : new t((function(e, t) {
								return t(/* @__PURE__ */ TypeError("You must pass an array to race."));
							}));
						}, I.resolve = S, I.reject = function(e) {
							var t = new this(w);
							return k(t, e), t;
						}, I._setScheduler = function(e) {
							o = e;
						}, I._setAsap = function(e) {
							s = e;
						}, I._asap = s, I.polyfill = function() {
							var e = void 0;
							if (n !== void 0) e = n;
							else if (typeof self < "u") e = self;
							else try {
								e = Function("return this")();
							} catch {
								throw Error("polyfill failed because global object is unavailable in this environment");
							}
							var t = e.Promise;
							if (t) {
								var r = null;
								try {
									r = Object.prototype.toString.call(t.resolve());
								} catch {}
								if (r === "[object Promise]" && !t.cast) return;
							}
							e.Promise = I;
						}, I.Promise = I, I;
					}();
				}).call(this, n(17), n(18));
			},
			function(e, t) {
				var n, r, i = e.exports = {};
				function a() {
					throw Error("setTimeout has not been defined");
				}
				function o() {
					throw Error("clearTimeout has not been defined");
				}
				function s(e) {
					if (n === setTimeout) return setTimeout(e, 0);
					if ((n === a || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
					try {
						return n(e, 0);
					} catch {
						try {
							return n.call(null, e, 0);
						} catch {
							return n.call(this, e, 0);
						}
					}
				}
				(function() {
					try {
						n = typeof setTimeout == "function" ? setTimeout : a;
					} catch {
						n = a;
					}
					try {
						r = typeof clearTimeout == "function" ? clearTimeout : o;
					} catch {
						r = o;
					}
				})();
				var c, l = [], u = !1, d = -1;
				function f() {
					u && c && (u = !1, c.length ? l = c.concat(l) : d = -1, l.length && p());
				}
				function p() {
					if (!u) {
						var e = s(f);
						u = !0;
						for (var t = l.length; t;) {
							for (c = l, l = []; ++d < t;) c && c[d].run();
							d = -1, t = l.length;
						}
						c = null, u = !1, function(e) {
							if (r === clearTimeout) return clearTimeout(e);
							if ((r === o || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
							try {
								r(e);
							} catch {
								try {
									return r.call(null, e);
								} catch {
									return r.call(this, e);
								}
							}
						}(e);
					}
				}
				function m(e, t) {
					this.fun = e, this.array = t;
				}
				function h() {}
				i.nextTick = function(e) {
					var t = Array(arguments.length - 1);
					if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
					l.push(new m(e, t)), l.length !== 1 || u || s(p);
				}, m.prototype.run = function() {
					this.fun.apply(null, this.array);
				}, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = h, i.addListener = h, i.once = h, i.off = h, i.removeListener = h, i.removeAllListeners = h, i.emit = h, i.prependListener = h, i.prependOnceListener = h, i.listeners = function(e) {
					return [];
				}, i.binding = function(e) {
					throw Error("process.binding is not supported");
				}, i.cwd = function() {
					return "/";
				}, i.chdir = function(e) {
					throw Error("process.chdir is not supported");
				}, i.umask = function() {
					return 0;
				};
			},
			function(e, t) {
				var n = function() {
					return this;
				}();
				try {
					n ||= Function("return this")();
				} catch {
					typeof window == "object" && (n = window);
				}
				e.exports = n;
			},
			function(e, t, n) {
				n.r(t);
				var r = n(9), i = n(12), a = n(10), o = n(1);
				t.default = function(e) {
					var t = null, n = function(t, n) {
						e.postMessage({
							msg: "logcat_callback",
							data: {
								type: t,
								logcat: n
							}
						});
					}.bind(this);
					function s(t, n) {
						var r = {
							msg: o.a.INIT_SEGMENT,
							data: {
								type: t,
								data: n
							}
						};
						e.postMessage(r, [n.data]);
					}
					function c(t, n) {
						var r = {
							msg: o.a.MEDIA_SEGMENT,
							data: {
								type: t,
								data: n
							}
						};
						e.postMessage(r, [n.data]);
					}
					function l() {
						var t = { msg: o.a.LOADING_COMPLETE };
						e.postMessage(t);
					}
					function u() {
						var t = { msg: o.a.RECOVERED_EARLY_EOF };
						e.postMessage(t);
					}
					function d(t) {
						var n = {
							msg: o.a.MEDIA_INFO,
							data: t
						};
						e.postMessage(n);
					}
					function f(t) {
						var n = {
							msg: o.a.METADATA_ARRIVED,
							data: t
						};
						e.postMessage(n);
					}
					function p(t) {
						var n = {
							msg: o.a.SCRIPTDATA_ARRIVED,
							data: t
						};
						e.postMessage(n);
					}
					function m(t) {
						var n = {
							msg: o.a.TIMED_ID3_METADATA_ARRIVED,
							data: t
						};
						e.postMessage(n);
					}
					function h(t) {
						var n = {
							msg: o.a.SMPTE2038_METADATA_ARRIVED,
							data: t
						};
						e.postMessage(n);
					}
					function g(t) {
						var n = {
							msg: o.a.SCTE35_METADATA_ARRIVED,
							data: t
						};
						e.postMessage(n);
					}
					function _(t) {
						var n = {
							msg: o.a.PES_PRIVATE_DATA_DESCRIPTOR,
							data: t
						};
						e.postMessage(n);
					}
					function v(t) {
						var n = {
							msg: o.a.PES_PRIVATE_DATA_ARRIVED,
							data: t
						};
						e.postMessage(n);
					}
					function y(t) {
						var n = {
							msg: o.a.STATISTICS_INFO,
							data: t
						};
						e.postMessage(n);
					}
					function b(t, n) {
						e.postMessage({
							msg: o.a.IO_ERROR,
							data: {
								type: t,
								info: n
							}
						});
					}
					function x(t, n) {
						e.postMessage({
							msg: o.a.DEMUX_ERROR,
							data: {
								type: t,
								info: n
							}
						});
					}
					function S(t) {
						e.postMessage({
							msg: o.a.RECOMMEND_SEEKPOINT,
							data: t
						});
					}
					i.a.install(), e.addEventListener("message", (function(i) {
						switch (i.data.cmd) {
							case "init":
								(t = new a.a(i.data.param[0], i.data.param[1])).on(o.a.IO_ERROR, b.bind(this)), t.on(o.a.DEMUX_ERROR, x.bind(this)), t.on(o.a.INIT_SEGMENT, s.bind(this)), t.on(o.a.MEDIA_SEGMENT, c.bind(this)), t.on(o.a.LOADING_COMPLETE, l.bind(this)), t.on(o.a.RECOVERED_EARLY_EOF, u.bind(this)), t.on(o.a.MEDIA_INFO, d.bind(this)), t.on(o.a.METADATA_ARRIVED, f.bind(this)), t.on(o.a.SCRIPTDATA_ARRIVED, p.bind(this)), t.on(o.a.TIMED_ID3_METADATA_ARRIVED, m.bind(this)), t.on(o.a.SMPTE2038_METADATA_ARRIVED, h.bind(this)), t.on(o.a.SCTE35_METADATA_ARRIVED, g.bind(this)), t.on(o.a.PES_PRIVATE_DATA_DESCRIPTOR, _.bind(this)), t.on(o.a.PES_PRIVATE_DATA_ARRIVED, v.bind(this)), t.on(o.a.STATISTICS_INFO, y.bind(this)), t.on(o.a.RECOMMEND_SEEKPOINT, S.bind(this));
								break;
							case "destroy":
								t &&= (t.destroy(), null), e.postMessage({ msg: "destroyed" });
								break;
							case "start":
								t.start();
								break;
							case "stop":
								t.stop();
								break;
							case "seek":
								t.seek(i.data.param);
								break;
							case "pause":
								t.pause();
								break;
							case "resume":
								t.resume();
								break;
							case "logging_config":
								var C = i.data.param;
								r.a.applyConfig(C), !0 === C.enableCallback ? r.a.addLogListener(n) : r.a.removeLogListener(n);
						}
					}));
				};
			},
			function(e, t, n) {
				n.r(t);
				var r = n(12), i = n(11), a = {
					enableWorker: !1,
					enableStashBuffer: !0,
					stashInitialSize: void 0,
					isLive: !1,
					liveBufferLatencyChasing: !1,
					liveBufferLatencyMaxLatency: 1.5,
					liveBufferLatencyMinRemain: .5,
					lazyLoad: !0,
					lazyLoadMaxDuration: 180,
					lazyLoadRecoverDuration: 30,
					deferLoadAfterSourceOpen: !0,
					autoCleanupMaxBackwardDuration: 180,
					autoCleanupMinBackwardDuration: 120,
					statisticsInfoReportInterval: 600,
					fixAudioTimestampGap: !0,
					accurateSeek: !1,
					seekType: "range",
					seekParamStart: "bstart",
					seekParamEnd: "bend",
					rangeLoadZeroStart: !1,
					customSeekHandler: void 0,
					reuseRedirectedURL: !1,
					headers: void 0,
					customLoader: void 0
				};
				function o() {
					return Object.assign({}, a);
				}
				var s = function() {
					function e() {}
					return e.supportMSEH264Playback = function() {
						return window.MediaSource && window.MediaSource.isTypeSupported("video/mp4; codecs=\"avc1.42E01E,mp4a.40.2\"");
					}, e.supportMSEH265Playback = function() {
						return window.MediaSource && window.MediaSource.isTypeSupported("video/mp4; codecs=\"hvc1.1.6.L93.B0\"");
					}, e.supportNetworkStreamIO = function() {
						var e = new i.a({}, o()), t = e.loaderType;
						return e.destroy(), t == "fetch-stream-loader" || t == "xhr-moz-chunked-loader";
					}, e.getNetworkLoaderTypeName = function() {
						var e = new i.a({}, o()), t = e.loaderType;
						return e.destroy(), t;
					}, e.supportNativeMediaPlayback = function(t) {
						e.videoElement ??= window.document.createElement("video");
						var n = e.videoElement.canPlayType(t);
						return n === "probably" || n == "maybe";
					}, e.getFeatureList = function() {
						var t = {
							msePlayback: !1,
							mseLivePlayback: !1,
							mseH265Playback: !1,
							networkStreamIO: !1,
							networkLoaderName: "",
							nativeMP4H264Playback: !1,
							nativeMP4H265Playback: !1,
							nativeWebmVP8Playback: !1,
							nativeWebmVP9Playback: !1
						};
						return t.msePlayback = e.supportMSEH264Playback(), t.networkStreamIO = e.supportNetworkStreamIO(), t.networkLoaderName = e.getNetworkLoaderTypeName(), t.mseLivePlayback = t.msePlayback && t.networkStreamIO, t.mseH265Playback = e.supportMSEH265Playback(), t.nativeMP4H264Playback = e.supportNativeMediaPlayback("video/mp4; codecs=\"avc1.42001E, mp4a.40.2\""), t.nativeMP4H265Playback = e.supportNativeMediaPlayback("video/mp4; codecs=\"hvc1.1.6.L93.B0\""), t.nativeWebmVP8Playback = e.supportNativeMediaPlayback("video/webm; codecs=\"vp8.0, vorbis\""), t.nativeWebmVP9Playback = e.supportNativeMediaPlayback("video/webm; codecs=\"vp9\""), t;
					}, e;
				}(), c = n(2), l = n(6), u = n.n(l), d = n(0), f = n(4), p = {
					ERROR: "error",
					LOADING_COMPLETE: "loading_complete",
					RECOVERED_EARLY_EOF: "recovered_early_eof",
					MEDIA_INFO: "media_info",
					METADATA_ARRIVED: "metadata_arrived",
					SCRIPTDATA_ARRIVED: "scriptdata_arrived",
					TIMED_ID3_METADATA_ARRIVED: "timed_id3_metadata_arrived",
					SMPTE2038_METADATA_ARRIVED: "smpte2038_metadata_arrived",
					SCTE35_METADATA_ARRIVED: "scte35_metadata_arrived",
					PES_PRIVATE_DATA_DESCRIPTOR: "pes_private_data_descriptor",
					PES_PRIVATE_DATA_ARRIVED: "pes_private_data_arrived",
					STATISTICS_INFO: "statistics_info"
				}, m = n(13), h = n.n(m), g = n(9), _ = n(10), v = n(1), y = n(8), b = function() {
					function e(e, t) {
						if (this.TAG = "Transmuxer", this._emitter = new u.a(), t.enableWorker && typeof Worker < "u") try {
							this._worker = h()(19), this._workerDestroying = !1, this._worker.addEventListener("message", this._onWorkerMessage.bind(this)), this._worker.postMessage({
								cmd: "init",
								param: [e, t]
							}), this.e = { onLoggingConfigChanged: this._onLoggingConfigChanged.bind(this) }, g.a.registerListener(this.e.onLoggingConfigChanged), this._worker.postMessage({
								cmd: "logging_config",
								param: g.a.getConfig()
							});
						} catch {
							d.a.e(this.TAG, "Error while initialize transmuxing worker, fallback to inline transmuxing"), this._worker = null, this._controller = new _.a(e, t);
						}
						else this._controller = new _.a(e, t);
						if (this._controller) {
							var n = this._controller;
							n.on(v.a.IO_ERROR, this._onIOError.bind(this)), n.on(v.a.DEMUX_ERROR, this._onDemuxError.bind(this)), n.on(v.a.INIT_SEGMENT, this._onInitSegment.bind(this)), n.on(v.a.MEDIA_SEGMENT, this._onMediaSegment.bind(this)), n.on(v.a.LOADING_COMPLETE, this._onLoadingComplete.bind(this)), n.on(v.a.RECOVERED_EARLY_EOF, this._onRecoveredEarlyEof.bind(this)), n.on(v.a.MEDIA_INFO, this._onMediaInfo.bind(this)), n.on(v.a.METADATA_ARRIVED, this._onMetaDataArrived.bind(this)), n.on(v.a.SCRIPTDATA_ARRIVED, this._onScriptDataArrived.bind(this)), n.on(v.a.TIMED_ID3_METADATA_ARRIVED, this._onTimedID3MetadataArrived.bind(this)), n.on(v.a.SMPTE2038_METADATA_ARRIVED, this._onSMPTE2038MetadataArrived.bind(this)), n.on(v.a.SCTE35_METADATA_ARRIVED, this._onSCTE35MetadataArrived.bind(this)), n.on(v.a.PES_PRIVATE_DATA_DESCRIPTOR, this._onPESPrivateDataDescriptor.bind(this)), n.on(v.a.PES_PRIVATE_DATA_ARRIVED, this._onPESPrivateDataArrived.bind(this)), n.on(v.a.STATISTICS_INFO, this._onStatisticsInfo.bind(this)), n.on(v.a.RECOMMEND_SEEKPOINT, this._onRecommendSeekpoint.bind(this));
						}
					}
					return e.prototype.destroy = function() {
						this._worker ? this._workerDestroying || (this._workerDestroying = !0, this._worker.postMessage({ cmd: "destroy" }), g.a.removeListener(this.e.onLoggingConfigChanged), this.e = null) : (this._controller.destroy(), this._controller = null), this._emitter.removeAllListeners(), this._emitter = null;
					}, e.prototype.on = function(e, t) {
						this._emitter.addListener(e, t);
					}, e.prototype.off = function(e, t) {
						this._emitter.removeListener(e, t);
					}, e.prototype.hasWorker = function() {
						return this._worker != null;
					}, e.prototype.open = function() {
						this._worker ? this._worker.postMessage({ cmd: "start" }) : this._controller.start();
					}, e.prototype.close = function() {
						this._worker ? this._worker.postMessage({ cmd: "stop" }) : this._controller.stop();
					}, e.prototype.seek = function(e) {
						this._worker ? this._worker.postMessage({
							cmd: "seek",
							param: e
						}) : this._controller.seek(e);
					}, e.prototype.pause = function() {
						this._worker ? this._worker.postMessage({ cmd: "pause" }) : this._controller.pause();
					}, e.prototype.resume = function() {
						this._worker ? this._worker.postMessage({ cmd: "resume" }) : this._controller.resume();
					}, e.prototype._onInitSegment = function(e, t) {
						var n = this;
						Promise.resolve().then((function() {
							n._emitter.emit(v.a.INIT_SEGMENT, e, t);
						}));
					}, e.prototype._onMediaSegment = function(e, t) {
						var n = this;
						Promise.resolve().then((function() {
							n._emitter.emit(v.a.MEDIA_SEGMENT, e, t);
						}));
					}, e.prototype._onLoadingComplete = function() {
						var e = this;
						Promise.resolve().then((function() {
							e._emitter.emit(v.a.LOADING_COMPLETE);
						}));
					}, e.prototype._onRecoveredEarlyEof = function() {
						var e = this;
						Promise.resolve().then((function() {
							e._emitter.emit(v.a.RECOVERED_EARLY_EOF);
						}));
					}, e.prototype._onMediaInfo = function(e) {
						var t = this;
						Promise.resolve().then((function() {
							t._emitter.emit(v.a.MEDIA_INFO, e);
						}));
					}, e.prototype._onMetaDataArrived = function(e) {
						var t = this;
						Promise.resolve().then((function() {
							t._emitter.emit(v.a.METADATA_ARRIVED, e);
						}));
					}, e.prototype._onScriptDataArrived = function(e) {
						var t = this;
						Promise.resolve().then((function() {
							t._emitter.emit(v.a.SCRIPTDATA_ARRIVED, e);
						}));
					}, e.prototype._onTimedID3MetadataArrived = function(e) {
						var t = this;
						Promise.resolve().then((function() {
							t._emitter.emit(v.a.TIMED_ID3_METADATA_ARRIVED, e);
						}));
					}, e.prototype._onSMPTE2038MetadataArrived = function(e) {
						var t = this;
						Promise.resolve().then((function() {
							t._emitter.emit(v.a.SMPTE2038_METADATA_ARRIVED, e);
						}));
					}, e.prototype._onSCTE35MetadataArrived = function(e) {
						var t = this;
						Promise.resolve().then((function() {
							t._emitter.emit(v.a.SCTE35_METADATA_ARRIVED, e);
						}));
					}, e.prototype._onPESPrivateDataDescriptor = function(e) {
						var t = this;
						Promise.resolve().then((function() {
							t._emitter.emit(v.a.PES_PRIVATE_DATA_DESCRIPTOR, e);
						}));
					}, e.prototype._onPESPrivateDataArrived = function(e) {
						var t = this;
						Promise.resolve().then((function() {
							t._emitter.emit(v.a.PES_PRIVATE_DATA_ARRIVED, e);
						}));
					}, e.prototype._onStatisticsInfo = function(e) {
						var t = this;
						Promise.resolve().then((function() {
							t._emitter.emit(v.a.STATISTICS_INFO, e);
						}));
					}, e.prototype._onIOError = function(e, t) {
						var n = this;
						Promise.resolve().then((function() {
							n._emitter.emit(v.a.IO_ERROR, e, t);
						}));
					}, e.prototype._onDemuxError = function(e, t) {
						var n = this;
						Promise.resolve().then((function() {
							n._emitter.emit(v.a.DEMUX_ERROR, e, t);
						}));
					}, e.prototype._onRecommendSeekpoint = function(e) {
						var t = this;
						Promise.resolve().then((function() {
							t._emitter.emit(v.a.RECOMMEND_SEEKPOINT, e);
						}));
					}, e.prototype._onLoggingConfigChanged = function(e) {
						this._worker && this._worker.postMessage({
							cmd: "logging_config",
							param: e
						});
					}, e.prototype._onWorkerMessage = function(e) {
						var t = e.data, n = t.data;
						if (t.msg === "destroyed" || this._workerDestroying) return this._workerDestroying = !1, this._worker.terminate(), void (this._worker = null);
						switch (t.msg) {
							case v.a.INIT_SEGMENT:
							case v.a.MEDIA_SEGMENT:
								this._emitter.emit(t.msg, n.type, n.data);
								break;
							case v.a.LOADING_COMPLETE:
							case v.a.RECOVERED_EARLY_EOF:
								this._emitter.emit(t.msg);
								break;
							case v.a.MEDIA_INFO:
								Object.setPrototypeOf(n, y.a.prototype), this._emitter.emit(t.msg, n);
								break;
							case v.a.METADATA_ARRIVED:
							case v.a.SCRIPTDATA_ARRIVED:
							case v.a.TIMED_ID3_METADATA_ARRIVED:
							case v.a.SMPTE2038_METADATA_ARRIVED:
							case v.a.SCTE35_METADATA_ARRIVED:
							case v.a.PES_PRIVATE_DATA_DESCRIPTOR:
							case v.a.PES_PRIVATE_DATA_ARRIVED:
							case v.a.STATISTICS_INFO:
								this._emitter.emit(t.msg, n);
								break;
							case v.a.IO_ERROR:
							case v.a.DEMUX_ERROR:
								this._emitter.emit(t.msg, n.type, n.info);
								break;
							case v.a.RECOMMEND_SEEKPOINT:
								this._emitter.emit(t.msg, n);
								break;
							case "logcat_callback": d.a.emitter.emit("log", n.type, n.logcat);
						}
					}, e;
				}(), x = {
					ERROR: "error",
					SOURCE_OPEN: "source_open",
					UPDATE_END: "update_end",
					BUFFER_FULL: "buffer_full"
				}, S = n(7), C = n(3), w = function() {
					function e(e) {
						this.TAG = "MSEController", this._config = e, this._emitter = new u.a(), this._config.isLive && this._config.autoCleanupSourceBuffer == null && (this._config.autoCleanupSourceBuffer = !0), this.e = {
							onSourceOpen: this._onSourceOpen.bind(this),
							onSourceEnded: this._onSourceEnded.bind(this),
							onSourceClose: this._onSourceClose.bind(this),
							onSourceBufferError: this._onSourceBufferError.bind(this),
							onSourceBufferUpdateEnd: this._onSourceBufferUpdateEnd.bind(this)
						}, this._mediaSource = null, this._mediaSourceObjectURL = null, this._mediaElement = null, this._isBufferFull = !1, this._hasPendingEos = !1, this._requireSetMediaDuration = !1, this._pendingMediaDuration = 0, this._pendingSourceBufferInit = [], this._mimeTypes = {
							video: null,
							audio: null
						}, this._sourceBuffers = {
							video: null,
							audio: null
						}, this._lastInitSegments = {
							video: null,
							audio: null
						}, this._pendingSegments = {
							video: [],
							audio: []
						}, this._pendingRemoveRanges = {
							video: [],
							audio: []
						}, this._idrList = new S.a();
					}
					return e.prototype.destroy = function() {
						(this._mediaElement || this._mediaSource) && this.detachMediaElement(), this.e = null, this._emitter.removeAllListeners(), this._emitter = null;
					}, e.prototype.on = function(e, t) {
						this._emitter.addListener(e, t);
					}, e.prototype.off = function(e, t) {
						this._emitter.removeListener(e, t);
					}, e.prototype.attachMediaElement = function(e) {
						if (this._mediaSource) throw new C.a("MediaSource has been attached to an HTMLMediaElement!");
						var t = this._mediaSource = new window.MediaSource();
						t.addEventListener("sourceopen", this.e.onSourceOpen), t.addEventListener("sourceended", this.e.onSourceEnded), t.addEventListener("sourceclose", this.e.onSourceClose), this._mediaElement = e, this._mediaSourceObjectURL = window.URL.createObjectURL(this._mediaSource), e.src = this._mediaSourceObjectURL;
					}, e.prototype.detachMediaElement = function() {
						if (this._mediaSource) {
							var e = this._mediaSource;
							for (var t in this._sourceBuffers) {
								var n = this._pendingSegments[t];
								n.splice(0, n.length), this._pendingSegments[t] = null, this._pendingRemoveRanges[t] = null, this._lastInitSegments[t] = null;
								var r = this._sourceBuffers[t];
								if (r) {
									if (e.readyState !== "closed") {
										try {
											e.removeSourceBuffer(r);
										} catch (e) {
											d.a.e(this.TAG, e.message);
										}
										r.removeEventListener("error", this.e.onSourceBufferError), r.removeEventListener("updateend", this.e.onSourceBufferUpdateEnd);
									}
									this._mimeTypes[t] = null, this._sourceBuffers[t] = null;
								}
							}
							if (e.readyState === "open") try {
								e.endOfStream();
							} catch (e) {
								d.a.e(this.TAG, e.message);
							}
							e.removeEventListener("sourceopen", this.e.onSourceOpen), e.removeEventListener("sourceended", this.e.onSourceEnded), e.removeEventListener("sourceclose", this.e.onSourceClose), this._pendingSourceBufferInit = [], this._isBufferFull = !1, this._idrList.clear(), this._mediaSource = null;
						}
						this._mediaElement &&= (this._mediaElement.src = "", this._mediaElement.removeAttribute("src"), null), this._mediaSourceObjectURL &&= (window.URL.revokeObjectURL(this._mediaSourceObjectURL), null);
					}, e.prototype.appendInitSegment = function(e, t) {
						if (!this._mediaSource || this._mediaSource.readyState !== "open") return this._pendingSourceBufferInit.push(e), void this._pendingSegments[e.type].push(e);
						var n = e, r = "" + n.container;
						n.codec && n.codec.length > 0 && (r += ";codecs=" + n.codec);
						var i = !1;
						if (d.a.v(this.TAG, "Received Initialization Segment, mimeType: " + r), this._lastInitSegments[n.type] = n, r !== this._mimeTypes[n.type]) {
							if (this._mimeTypes[n.type]) d.a.v(this.TAG, "Notice: " + n.type + " mimeType changed, origin: " + this._mimeTypes[n.type] + ", target: " + r);
							else {
								i = !0;
								try {
									var a = this._sourceBuffers[n.type] = this._mediaSource.addSourceBuffer(r);
									a.addEventListener("error", this.e.onSourceBufferError), a.addEventListener("updateend", this.e.onSourceBufferUpdateEnd);
								} catch (e) {
									d.a.e(this.TAG, e.message), this._emitter.emit(x.ERROR, {
										code: e.code,
										msg: e.message
									});
									return;
								}
							}
							this._mimeTypes[n.type] = r;
						}
						t || this._pendingSegments[n.type].push(n), i || this._sourceBuffers[n.type] && !this._sourceBuffers[n.type].updating && this._doAppendSegments(), f.a.safari && n.container === "audio/mpeg" && n.mediaDuration > 0 && (this._requireSetMediaDuration = !0, this._pendingMediaDuration = n.mediaDuration / 1e3, this._updateMediaSourceDuration());
					}, e.prototype.appendMediaSegment = function(e) {
						var t = e;
						this._pendingSegments[t.type].push(t), this._config.autoCleanupSourceBuffer && this._needCleanupSourceBuffer() && this._doCleanupSourceBuffer();
						var n = this._sourceBuffers[t.type];
						!n || n.updating || this._hasPendingRemoveRanges() || this._doAppendSegments();
					}, e.prototype.seek = function(e) {
						for (var t in this._sourceBuffers) if (this._sourceBuffers[t]) {
							var n = this._sourceBuffers[t];
							if (this._mediaSource.readyState === "open") try {
								n.abort();
							} catch (e) {
								d.a.e(this.TAG, e.message);
							}
							this._idrList.clear();
							var r = this._pendingSegments[t];
							if (r.splice(0, r.length), this._mediaSource.readyState !== "closed") {
								for (var i = 0; i < n.buffered.length; i++) {
									var a = n.buffered.start(i), o = n.buffered.end(i);
									this._pendingRemoveRanges[t].push({
										start: a,
										end: o
									});
								}
								if (n.updating || this._doRemoveRanges(), f.a.safari) {
									var s = this._lastInitSegments[t];
									s && (this._pendingSegments[t].push(s), n.updating || this._doAppendSegments());
								}
							}
						}
					}, e.prototype.endOfStream = function() {
						var e = this._mediaSource, t = this._sourceBuffers;
						e && e.readyState === "open" ? t.video && t.video.updating || t.audio && t.audio.updating ? this._hasPendingEos = !0 : (this._hasPendingEos = !1, e.endOfStream()) : e && e.readyState === "closed" && this._hasPendingSegments() && (this._hasPendingEos = !0);
					}, e.prototype.getNearestKeyframe = function(e) {
						return this._idrList.getLastSyncPointBeforeDts(e);
					}, e.prototype._needCleanupSourceBuffer = function() {
						if (!this._config.autoCleanupSourceBuffer) return !1;
						var e = this._mediaElement.currentTime;
						for (var t in this._sourceBuffers) {
							var n = this._sourceBuffers[t];
							if (n) {
								var r = n.buffered;
								if (r.length >= 1 && e - r.start(0) >= this._config.autoCleanupMaxBackwardDuration) return !0;
							}
						}
						return !1;
					}, e.prototype._doCleanupSourceBuffer = function() {
						var e = this._mediaElement.currentTime;
						for (var t in this._sourceBuffers) {
							var n = this._sourceBuffers[t];
							if (n) {
								for (var r = n.buffered, i = !1, a = 0; a < r.length; a++) {
									var o = r.start(a), s = r.end(a);
									if (o <= e && e < s + 3) {
										if (e - o >= this._config.autoCleanupMaxBackwardDuration) {
											i = !0;
											var c = e - this._config.autoCleanupMinBackwardDuration;
											this._pendingRemoveRanges[t].push({
												start: o,
												end: c
											});
										}
									} else s < e && (i = !0, this._pendingRemoveRanges[t].push({
										start: o,
										end: s
									}));
								}
								i && !n.updating && this._doRemoveRanges();
							}
						}
					}, e.prototype._updateMediaSourceDuration = function() {
						var e = this._sourceBuffers;
						if (this._mediaElement.readyState !== 0 && this._mediaSource.readyState === "open" && !(e.video && e.video.updating || e.audio && e.audio.updating)) {
							var t = this._mediaSource.duration, n = this._pendingMediaDuration;
							n > 0 && (isNaN(t) || n > t) && (d.a.v(this.TAG, "Update MediaSource duration from " + t + " to " + n), this._mediaSource.duration = n), this._requireSetMediaDuration = !1, this._pendingMediaDuration = 0;
						}
					}, e.prototype._doRemoveRanges = function() {
						for (var e in this._pendingRemoveRanges) if (this._sourceBuffers[e] && !this._sourceBuffers[e].updating) for (var t = this._sourceBuffers[e], n = this._pendingRemoveRanges[e]; n.length && !t.updating;) {
							var r = n.shift();
							t.remove(r.start, r.end);
						}
					}, e.prototype._doAppendSegments = function() {
						var e = this._pendingSegments;
						for (var t in e) if (this._sourceBuffers[t] && !this._sourceBuffers[t].updating && e[t].length > 0) {
							var n = e[t].shift();
							if (n.timestampOffset) {
								var r = this._sourceBuffers[t].timestampOffset, i = n.timestampOffset / 1e3;
								Math.abs(r - i) > .1 && (d.a.v(this.TAG, "Update MPEG audio timestampOffset from " + r + " to " + i), this._sourceBuffers[t].timestampOffset = i), delete n.timestampOffset;
							}
							if (!n.data || n.data.byteLength === 0) continue;
							try {
								this._sourceBuffers[t].appendBuffer(n.data), this._isBufferFull = !1, t === "video" && n.hasOwnProperty("info") && this._idrList.appendArray(n.info.syncPoints);
							} catch (e) {
								this._pendingSegments[t].unshift(n), e.code === 22 ? (this._isBufferFull || this._emitter.emit(x.BUFFER_FULL), this._isBufferFull = !0) : (d.a.e(this.TAG, e.message), this._emitter.emit(x.ERROR, {
									code: e.code,
									msg: e.message
								}));
							}
						}
					}, e.prototype._onSourceOpen = function() {
						if (d.a.v(this.TAG, "MediaSource onSourceOpen"), this._mediaSource.removeEventListener("sourceopen", this.e.onSourceOpen), this._pendingSourceBufferInit.length > 0) for (var e = this._pendingSourceBufferInit; e.length;) {
							var t = e.shift();
							this.appendInitSegment(t, !0);
						}
						this._hasPendingSegments() && this._doAppendSegments(), this._emitter.emit(x.SOURCE_OPEN);
					}, e.prototype._onSourceEnded = function() {
						d.a.v(this.TAG, "MediaSource onSourceEnded");
					}, e.prototype._onSourceClose = function() {
						d.a.v(this.TAG, "MediaSource onSourceClose"), this._mediaSource && this.e != null && (this._mediaSource.removeEventListener("sourceopen", this.e.onSourceOpen), this._mediaSource.removeEventListener("sourceended", this.e.onSourceEnded), this._mediaSource.removeEventListener("sourceclose", this.e.onSourceClose));
					}, e.prototype._hasPendingSegments = function() {
						var e = this._pendingSegments;
						return e.video.length > 0 || e.audio.length > 0;
					}, e.prototype._hasPendingRemoveRanges = function() {
						var e = this._pendingRemoveRanges;
						return e.video.length > 0 || e.audio.length > 0;
					}, e.prototype._onSourceBufferUpdateEnd = function() {
						this._requireSetMediaDuration ? this._updateMediaSourceDuration() : this._hasPendingRemoveRanges() ? this._doRemoveRanges() : this._hasPendingSegments() ? this._doAppendSegments() : this._hasPendingEos && this.endOfStream(), this._emitter.emit(x.UPDATE_END);
					}, e.prototype._onSourceBufferError = function(e) {
						d.a.e(this.TAG, "SourceBuffer Error: " + e);
					}, e;
				}(), T = n(5), E = {
					NETWORK_ERROR: "NetworkError",
					MEDIA_ERROR: "MediaError",
					OTHER_ERROR: "OtherError"
				}, D = {
					NETWORK_EXCEPTION: c.b.EXCEPTION,
					NETWORK_STATUS_CODE_INVALID: c.b.HTTP_STATUS_CODE_INVALID,
					NETWORK_TIMEOUT: c.b.CONNECTING_TIMEOUT,
					NETWORK_UNRECOVERABLE_EARLY_EOF: c.b.UNRECOVERABLE_EARLY_EOF,
					MEDIA_MSE_ERROR: "MediaMSEError",
					MEDIA_FORMAT_ERROR: T.a.FORMAT_ERROR,
					MEDIA_FORMAT_UNSUPPORTED: T.a.FORMAT_UNSUPPORTED,
					MEDIA_CODEC_UNSUPPORTED: T.a.CODEC_UNSUPPORTED
				}, O = function() {
					function e(e, t) {
						this.TAG = "MSEPlayer", this._type = "MSEPlayer", this._emitter = new u.a(), this._config = o(), typeof t == "object" && Object.assign(this._config, t);
						var n = e.type.toLowerCase();
						if (n !== "mse" && n !== "mpegts" && n !== "m2ts" && n !== "flv") throw new C.b("MSEPlayer requires an mpegts/m2ts/flv MediaDataSource input!");
						!0 === e.isLive && (this._config.isLive = !0), this.e = {
							onvLoadedMetadata: this._onvLoadedMetadata.bind(this),
							onvSeeking: this._onvSeeking.bind(this),
							onvCanPlay: this._onvCanPlay.bind(this),
							onvStalled: this._onvStalled.bind(this),
							onvProgress: this._onvProgress.bind(this)
						}, self.performance && self.performance.now ? this._now = self.performance.now.bind(self.performance) : this._now = Date.now, this._pendingSeekTime = null, this._requestSetTime = !1, this._seekpointRecord = null, this._progressChecker = null, this._mediaDataSource = e, this._mediaElement = null, this._msectl = null, this._transmuxer = null, this._mseSourceOpened = !1, this._hasPendingLoad = !1, this._receivedCanPlay = !1, this._mediaInfo = null, this._statisticsInfo = null;
						var r = f.a.chrome && (f.a.version.major < 50 || f.a.version.major === 50 && f.a.version.build < 2661);
						this._alwaysSeekKeyframe = !!(r || f.a.msedge || f.a.msie), this._alwaysSeekKeyframe && (this._config.accurateSeek = !1);
					}
					return e.prototype.destroy = function() {
						this._progressChecker != null && (window.clearInterval(this._progressChecker), this._progressChecker = null), this._transmuxer && this.unload(), this._mediaElement && this.detachMediaElement(), this.e = null, this._mediaDataSource = null, this._emitter.removeAllListeners(), this._emitter = null;
					}, e.prototype.on = function(e, t) {
						var n = this;
						e === p.MEDIA_INFO ? this._mediaInfo != null && Promise.resolve().then((function() {
							n._emitter.emit(p.MEDIA_INFO, n.mediaInfo);
						})) : e === p.STATISTICS_INFO && this._statisticsInfo != null && Promise.resolve().then((function() {
							n._emitter.emit(p.STATISTICS_INFO, n.statisticsInfo);
						})), this._emitter.addListener(e, t);
					}, e.prototype.off = function(e, t) {
						this._emitter.removeListener(e, t);
					}, e.prototype.attachMediaElement = function(e) {
						var t = this;
						if (this._mediaElement = e, e.addEventListener("loadedmetadata", this.e.onvLoadedMetadata), e.addEventListener("seeking", this.e.onvSeeking), e.addEventListener("canplay", this.e.onvCanPlay), e.addEventListener("stalled", this.e.onvStalled), e.addEventListener("progress", this.e.onvProgress), this._msectl = new w(this._config), this._msectl.on(x.UPDATE_END, this._onmseUpdateEnd.bind(this)), this._msectl.on(x.BUFFER_FULL, this._onmseBufferFull.bind(this)), this._msectl.on(x.SOURCE_OPEN, (function() {
							t._mseSourceOpened = !0, t._hasPendingLoad && (t._hasPendingLoad = !1, t.load());
						})), this._msectl.on(x.ERROR, (function(e) {
							t._emitter.emit(p.ERROR, E.MEDIA_ERROR, D.MEDIA_MSE_ERROR, e);
						})), this._msectl.attachMediaElement(e), this._pendingSeekTime != null) try {
							e.currentTime = this._pendingSeekTime, this._pendingSeekTime = null;
						} catch {}
					}, e.prototype.detachMediaElement = function() {
						this._mediaElement &&= (this._msectl.detachMediaElement(), this._mediaElement.removeEventListener("loadedmetadata", this.e.onvLoadedMetadata), this._mediaElement.removeEventListener("seeking", this.e.onvSeeking), this._mediaElement.removeEventListener("canplay", this.e.onvCanPlay), this._mediaElement.removeEventListener("stalled", this.e.onvStalled), this._mediaElement.removeEventListener("progress", this.e.onvProgress), null), this._msectl &&= (this._msectl.destroy(), null);
					}, e.prototype.load = function() {
						var e = this;
						if (!this._mediaElement) throw new C.a("HTMLMediaElement must be attached before load()!");
						if (this._transmuxer) throw new C.a("MSEPlayer.load() has been called, please call unload() first!");
						this._hasPendingLoad || (this._config.deferLoadAfterSourceOpen && !1 === this._mseSourceOpened ? this._hasPendingLoad = !0 : (this._mediaElement.readyState > 0 && (this._requestSetTime = !0, this._mediaElement.currentTime = 0), this._transmuxer = new b(this._mediaDataSource, this._config), this._transmuxer.on(v.a.INIT_SEGMENT, (function(t, n) {
							e._msectl.appendInitSegment(n);
						})), this._transmuxer.on(v.a.MEDIA_SEGMENT, (function(t, n) {
							if (e._msectl.appendMediaSegment(n), e._config.lazyLoad && !e._config.isLive) {
								var r = e._mediaElement.currentTime;
								n.info.endDts >= 1e3 * (r + e._config.lazyLoadMaxDuration) && e._progressChecker == null && (d.a.v(e.TAG, "Maximum buffering duration exceeded, suspend transmuxing task"), e._suspendTransmuxer());
							}
						})), this._transmuxer.on(v.a.LOADING_COMPLETE, (function() {
							e._msectl.endOfStream(), e._emitter.emit(p.LOADING_COMPLETE);
						})), this._transmuxer.on(v.a.RECOVERED_EARLY_EOF, (function() {
							e._emitter.emit(p.RECOVERED_EARLY_EOF);
						})), this._transmuxer.on(v.a.IO_ERROR, (function(t, n) {
							e._emitter.emit(p.ERROR, E.NETWORK_ERROR, t, n);
						})), this._transmuxer.on(v.a.DEMUX_ERROR, (function(t, n) {
							e._emitter.emit(p.ERROR, E.MEDIA_ERROR, t, {
								code: -1,
								msg: n
							});
						})), this._transmuxer.on(v.a.MEDIA_INFO, (function(t) {
							e._mediaInfo = t, e._emitter.emit(p.MEDIA_INFO, Object.assign({}, t));
						})), this._transmuxer.on(v.a.METADATA_ARRIVED, (function(t) {
							e._emitter.emit(p.METADATA_ARRIVED, t);
						})), this._transmuxer.on(v.a.SCRIPTDATA_ARRIVED, (function(t) {
							e._emitter.emit(p.SCRIPTDATA_ARRIVED, t);
						})), this._transmuxer.on(v.a.TIMED_ID3_METADATA_ARRIVED, (function(t) {
							e._emitter.emit(p.TIMED_ID3_METADATA_ARRIVED, t);
						})), this._transmuxer.on(v.a.SMPTE2038_METADATA_ARRIVED, (function(t) {
							e._emitter.emit(p.SMPTE2038_METADATA_ARRIVED, t);
						})), this._transmuxer.on(v.a.SCTE35_METADATA_ARRIVED, (function(t) {
							e._emitter.emit(p.SCTE35_METADATA_ARRIVED, t);
						})), this._transmuxer.on(v.a.PES_PRIVATE_DATA_DESCRIPTOR, (function(t) {
							e._emitter.emit(p.PES_PRIVATE_DATA_DESCRIPTOR, t);
						})), this._transmuxer.on(v.a.PES_PRIVATE_DATA_ARRIVED, (function(t) {
							e._emitter.emit(p.PES_PRIVATE_DATA_ARRIVED, t);
						})), this._transmuxer.on(v.a.STATISTICS_INFO, (function(t) {
							e._statisticsInfo = e._fillStatisticsInfo(t), e._emitter.emit(p.STATISTICS_INFO, Object.assign({}, e._statisticsInfo));
						})), this._transmuxer.on(v.a.RECOMMEND_SEEKPOINT, (function(t) {
							e._mediaElement && !e._config.accurateSeek && (e._requestSetTime = !0, e._mediaElement.currentTime = t / 1e3);
						})), this._transmuxer.open()));
					}, e.prototype.unload = function() {
						this._mediaElement && this._mediaElement.pause(), this._msectl && this._msectl.seek(0), this._transmuxer &&= (this._transmuxer.close(), this._transmuxer.destroy(), null);
					}, e.prototype.play = function() {
						return this._mediaElement.play();
					}, e.prototype.pause = function() {
						this._mediaElement.pause();
					}, Object.defineProperty(e.prototype, "type", {
						get: function() {
							return this._type;
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "buffered", {
						get: function() {
							return this._mediaElement.buffered;
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "duration", {
						get: function() {
							return this._mediaElement.duration;
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "volume", {
						get: function() {
							return this._mediaElement.volume;
						},
						set: function(e) {
							this._mediaElement.volume = e;
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "muted", {
						get: function() {
							return this._mediaElement.muted;
						},
						set: function(e) {
							this._mediaElement.muted = e;
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "currentTime", {
						get: function() {
							return this._mediaElement ? this._mediaElement.currentTime : 0;
						},
						set: function(e) {
							this._mediaElement ? this._internalSeek(e) : this._pendingSeekTime = e;
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "mediaInfo", {
						get: function() {
							return Object.assign({}, this._mediaInfo);
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "statisticsInfo", {
						get: function() {
							return this._statisticsInfo ??= {}, this._statisticsInfo = this._fillStatisticsInfo(this._statisticsInfo), Object.assign({}, this._statisticsInfo);
						},
						enumerable: !1,
						configurable: !0
					}), e.prototype._fillStatisticsInfo = function(e) {
						if (e.playerType = this._type, !(this._mediaElement instanceof HTMLVideoElement)) return e;
						var t = !0, n = 0, r = 0;
						if (this._mediaElement.getVideoPlaybackQuality) {
							var i = this._mediaElement.getVideoPlaybackQuality();
							n = i.totalVideoFrames, r = i.droppedVideoFrames;
						} else this._mediaElement.webkitDecodedFrameCount == null ? t = !1 : (n = this._mediaElement.webkitDecodedFrameCount, r = this._mediaElement.webkitDroppedFrameCount);
						return t && (e.decodedFrames = n, e.droppedFrames = r), e;
					}, e.prototype._onmseUpdateEnd = function() {
						var e = this._mediaElement.buffered, t = this._mediaElement.currentTime;
						if (this._config.isLive && this._config.liveBufferLatencyChasing && e.length > 0 && !this._mediaElement.paused) {
							var n = e.end(e.length - 1);
							if (n > this._config.liveBufferLatencyMaxLatency && n - t > this._config.liveBufferLatencyMaxLatency) {
								var r = n - this._config.liveBufferLatencyMinRemain;
								this.currentTime = r;
							}
						}
						if (this._config.lazyLoad && !this._config.isLive) {
							for (var i = 0, a = 0; a < e.length; a++) {
								var o = e.start(a), s = e.end(a);
								if (o <= t && t < s) {
									i = s;
									break;
								}
							}
							i >= t + this._config.lazyLoadMaxDuration && this._progressChecker == null && (d.a.v(this.TAG, "Maximum buffering duration exceeded, suspend transmuxing task"), this._suspendTransmuxer());
						}
					}, e.prototype._onmseBufferFull = function() {
						d.a.v(this.TAG, "MSE SourceBuffer is full, suspend transmuxing task"), this._progressChecker ?? this._suspendTransmuxer();
					}, e.prototype._suspendTransmuxer = function() {
						this._transmuxer && (this._transmuxer.pause(), this._progressChecker ??= window.setInterval(this._checkProgressAndResume.bind(this), 1e3));
					}, e.prototype._checkProgressAndResume = function() {
						for (var e = this._mediaElement.currentTime, t = this._mediaElement.buffered, n = !1, r = 0; r < t.length; r++) {
							var i = t.start(r), a = t.end(r);
							if (e >= i && e < a) {
								e >= a - this._config.lazyLoadRecoverDuration && (n = !0);
								break;
							}
						}
						n && (window.clearInterval(this._progressChecker), this._progressChecker = null, n && (d.a.v(this.TAG, "Continue loading from paused position"), this._transmuxer.resume()));
					}, e.prototype._isTimepointBuffered = function(e) {
						for (var t = this._mediaElement.buffered, n = 0; n < t.length; n++) {
							var r = t.start(n), i = t.end(n);
							if (e >= r && e < i) return !0;
						}
						return !1;
					}, e.prototype._internalSeek = function(e) {
						var t = this._isTimepointBuffered(e), n = !1, r = 0;
						if (e < 1 && this._mediaElement.buffered.length > 0) {
							var i = this._mediaElement.buffered.start(0);
							(i < 1 && e < i || f.a.safari) && (n = !0, r = f.a.safari ? .1 : i);
						}
						if (n) this._requestSetTime = !0, this._mediaElement.currentTime = r;
						else if (t) {
							if (this._alwaysSeekKeyframe) {
								var a = this._msectl.getNearestKeyframe(Math.floor(1e3 * e));
								this._requestSetTime = !0, this._mediaElement.currentTime = a == null ? e : a.dts / 1e3;
							} else this._requestSetTime = !0, this._mediaElement.currentTime = e;
							this._progressChecker != null && this._checkProgressAndResume();
						} else this._progressChecker != null && (window.clearInterval(this._progressChecker), this._progressChecker = null), this._msectl.seek(e), this._transmuxer.seek(Math.floor(1e3 * e)), this._config.accurateSeek && (this._requestSetTime = !0, this._mediaElement.currentTime = e);
					}, e.prototype._checkAndApplyUnbufferedSeekpoint = function() {
						if (this._seekpointRecord) if (this._seekpointRecord.recordTime <= this._now() - 100) {
							var e = this._mediaElement.currentTime;
							this._seekpointRecord = null, this._isTimepointBuffered(e) || (this._progressChecker != null && (window.clearTimeout(this._progressChecker), this._progressChecker = null), this._msectl.seek(e), this._transmuxer.seek(Math.floor(1e3 * e)), this._config.accurateSeek && (this._requestSetTime = !0, this._mediaElement.currentTime = e));
						} else window.setTimeout(this._checkAndApplyUnbufferedSeekpoint.bind(this), 50);
					}, e.prototype._checkAndResumeStuckPlayback = function(e) {
						var t = this._mediaElement;
						if (e || !this._receivedCanPlay || t.readyState < 2) {
							var n = t.buffered;
							n.length > 0 && t.currentTime < n.start(0) && (d.a.w(this.TAG, "Playback seems stuck at " + t.currentTime + ", seek to " + n.start(0)), this._requestSetTime = !0, this._mediaElement.currentTime = n.start(0), this._mediaElement.removeEventListener("progress", this.e.onvProgress));
						} else this._mediaElement.removeEventListener("progress", this.e.onvProgress);
					}, e.prototype._onvLoadedMetadata = function(e) {
						this._pendingSeekTime != null && (this._mediaElement.currentTime = this._pendingSeekTime, this._pendingSeekTime = null);
					}, e.prototype._onvSeeking = function(e) {
						var t = this._mediaElement.currentTime, n = this._mediaElement.buffered;
						if (this._requestSetTime) this._requestSetTime = !1;
						else {
							if (t < 1 && n.length > 0) {
								var r = n.start(0);
								if (r < 1 && t < r || f.a.safari) return this._requestSetTime = !0, void (this._mediaElement.currentTime = f.a.safari ? .1 : r);
							}
							if (this._isTimepointBuffered(t)) {
								if (this._alwaysSeekKeyframe) {
									var i = this._msectl.getNearestKeyframe(Math.floor(1e3 * t));
									i != null && (this._requestSetTime = !0, this._mediaElement.currentTime = i.dts / 1e3);
								}
								this._progressChecker != null && this._checkProgressAndResume();
							} else this._seekpointRecord = {
								seekPoint: t,
								recordTime: this._now()
							}, window.setTimeout(this._checkAndApplyUnbufferedSeekpoint.bind(this), 50);
						}
					}, e.prototype._onvCanPlay = function(e) {
						this._receivedCanPlay = !0, this._mediaElement.removeEventListener("canplay", this.e.onvCanPlay);
					}, e.prototype._onvStalled = function(e) {
						this._checkAndResumeStuckPlayback(!0);
					}, e.prototype._onvProgress = function(e) {
						this._checkAndResumeStuckPlayback();
					}, e;
				}(), k = function() {
					function e(e, t) {
						this.TAG = "NativePlayer", this._type = "NativePlayer", this._emitter = new u.a(), this._config = o(), typeof t == "object" && Object.assign(this._config, t);
						var n = e.type.toLowerCase();
						if (n === "mse" || n === "mpegts" || n === "m2ts" || n === "flv") throw new C.b("NativePlayer does't support mse/mpegts/m2ts/flv MediaDataSource input!");
						if (e.hasOwnProperty("segments")) throw new C.b("NativePlayer(" + e.type + ") doesn't support multipart playback!");
						this.e = { onvLoadedMetadata: this._onvLoadedMetadata.bind(this) }, this._pendingSeekTime = null, this._statisticsReporter = null, this._mediaDataSource = e, this._mediaElement = null;
					}
					return e.prototype.destroy = function() {
						this._mediaElement && (this.unload(), this.detachMediaElement()), this.e = null, this._mediaDataSource = null, this._emitter.removeAllListeners(), this._emitter = null;
					}, e.prototype.on = function(e, t) {
						var n = this;
						e === p.MEDIA_INFO ? this._mediaElement != null && this._mediaElement.readyState !== 0 && Promise.resolve().then((function() {
							n._emitter.emit(p.MEDIA_INFO, n.mediaInfo);
						})) : e === p.STATISTICS_INFO && this._mediaElement != null && this._mediaElement.readyState !== 0 && Promise.resolve().then((function() {
							n._emitter.emit(p.STATISTICS_INFO, n.statisticsInfo);
						})), this._emitter.addListener(e, t);
					}, e.prototype.off = function(e, t) {
						this._emitter.removeListener(e, t);
					}, e.prototype.attachMediaElement = function(e) {
						if (this._mediaElement = e, e.addEventListener("loadedmetadata", this.e.onvLoadedMetadata), this._pendingSeekTime != null) try {
							e.currentTime = this._pendingSeekTime, this._pendingSeekTime = null;
						} catch {}
					}, e.prototype.detachMediaElement = function() {
						this._mediaElement &&= (this._mediaElement.src = "", this._mediaElement.removeAttribute("src"), this._mediaElement.removeEventListener("loadedmetadata", this.e.onvLoadedMetadata), null), this._statisticsReporter != null && (window.clearInterval(this._statisticsReporter), this._statisticsReporter = null);
					}, e.prototype.load = function() {
						if (!this._mediaElement) throw new C.a("HTMLMediaElement must be attached before load()!");
						this._mediaElement.src = this._mediaDataSource.url, this._mediaElement.readyState > 0 && (this._mediaElement.currentTime = 0), this._mediaElement.preload = "auto", this._mediaElement.load(), this._statisticsReporter = window.setInterval(this._reportStatisticsInfo.bind(this), this._config.statisticsInfoReportInterval);
					}, e.prototype.unload = function() {
						this._mediaElement && (this._mediaElement.src = "", this._mediaElement.removeAttribute("src")), this._statisticsReporter != null && (window.clearInterval(this._statisticsReporter), this._statisticsReporter = null);
					}, e.prototype.play = function() {
						return this._mediaElement.play();
					}, e.prototype.pause = function() {
						this._mediaElement.pause();
					}, Object.defineProperty(e.prototype, "type", {
						get: function() {
							return this._type;
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "buffered", {
						get: function() {
							return this._mediaElement.buffered;
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "duration", {
						get: function() {
							return this._mediaElement.duration;
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "volume", {
						get: function() {
							return this._mediaElement.volume;
						},
						set: function(e) {
							this._mediaElement.volume = e;
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "muted", {
						get: function() {
							return this._mediaElement.muted;
						},
						set: function(e) {
							this._mediaElement.muted = e;
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "currentTime", {
						get: function() {
							return this._mediaElement ? this._mediaElement.currentTime : 0;
						},
						set: function(e) {
							this._mediaElement ? this._mediaElement.currentTime = e : this._pendingSeekTime = e;
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "mediaInfo", {
						get: function() {
							var e = { mimeType: (this._mediaElement instanceof HTMLAudioElement ? "audio/" : "video/") + this._mediaDataSource.type };
							return this._mediaElement && (e.duration = Math.floor(1e3 * this._mediaElement.duration), this._mediaElement instanceof HTMLVideoElement && (e.width = this._mediaElement.videoWidth, e.height = this._mediaElement.videoHeight)), e;
						},
						enumerable: !1,
						configurable: !0
					}), Object.defineProperty(e.prototype, "statisticsInfo", {
						get: function() {
							var e = {
								playerType: this._type,
								url: this._mediaDataSource.url
							};
							if (!(this._mediaElement instanceof HTMLVideoElement)) return e;
							var t = !0, n = 0, r = 0;
							if (this._mediaElement.getVideoPlaybackQuality) {
								var i = this._mediaElement.getVideoPlaybackQuality();
								n = i.totalVideoFrames, r = i.droppedVideoFrames;
							} else this._mediaElement.webkitDecodedFrameCount == null ? t = !1 : (n = this._mediaElement.webkitDecodedFrameCount, r = this._mediaElement.webkitDroppedFrameCount);
							return t && (e.decodedFrames = n, e.droppedFrames = r), e;
						},
						enumerable: !1,
						configurable: !0
					}), e.prototype._onvLoadedMetadata = function(e) {
						this._pendingSeekTime != null && (this._mediaElement.currentTime = this._pendingSeekTime, this._pendingSeekTime = null), this._emitter.emit(p.MEDIA_INFO, this.mediaInfo);
					}, e.prototype._reportStatisticsInfo = function() {
						this._emitter.emit(p.STATISTICS_INFO, this.statisticsInfo);
					}, e;
				}();
				r.a.install();
				var A = {
					createPlayer: function(e, t) {
						var n = e;
						if (typeof n != "object" || !n) throw new C.b("MediaDataSource must be an javascript object!");
						if (!n.hasOwnProperty("type")) throw new C.b("MediaDataSource must has type field to indicate video file type!");
						switch (n.type) {
							case "mse":
							case "mpegts":
							case "m2ts":
							case "flv": return new O(n, t);
							default: return new k(n, t);
						}
					},
					isSupported: function() {
						return s.supportMSEH264Playback();
					},
					getFeatureList: function() {
						return s.getFeatureList();
					}
				};
				A.BaseLoader = c.a, A.LoaderStatus = c.c, A.LoaderErrors = c.b, A.Events = p, A.ErrorTypes = E, A.ErrorDetails = D, A.MSEPlayer = O, A.NativePlayer = k, A.LoggingControl = g.a, Object.defineProperty(A, "version", {
					enumerable: !0,
					get: function() {
						return "1.7.3";
					}
				}), t.default = A;
			}
		]);
	}));
})))()), K = {
	RELOAD: "reload",
	RELOAD_FAIL: "reloadFail",
	RELOAD_SUCCESS: "reloadSuccess",
	ERROR: "error",
	ERROR_RELOAD: "errorRload",
	HISTORY_PLAY_END: "historyPlayEnd",
	PLAY_ENDED: "play_ended",
	SEEK: "seek",
	TRANSFORM: "transform",
	CHANGE_PLAY_INDEX: "changePlayIndex",
	HIDE_CONTRALLER: "hideContraller",
	SHOW_CONTRALLER: "showContraller",
	CLEAR_ERROR_TIMER: "clearErrorTimer",
	CANVAS_PAUSE: "canvasPause",
	CANVAS_PLAY: "canvasPlay"
};
//#endregion
//#region src/Player/util.ts
function ie(e, t, n, r) {
	if (!y.isSupported() || !t) return;
	let i = new y({
		liveDurationInfinity: n,
		enableWorker: !0,
		...r
	});
	return i.loadSource(t), i.attachMedia(e), i;
}
function q(e, t, n, r) {
	if (!G.default.isSupported() || !t) return;
	G.default.LoggingControl.enableDebug = !1, G.default.LoggingControl.enableVerbose = !1, G.default.LoggingControl.enableWarn = !1;
	let i = {
		type: "flv",
		url: t,
		...r?.mediaDataSource
	}, a = {
		enableWorker: !0,
		isLive: n ?? !0,
		enableStashBuffer: !n,
		...r?.config
	}, o = G.default.createPlayer(i, a);
	return o.attachMediaElement(e), o.load(), o;
}
var ae = function(e, t, n) {
	if (e) {
		if (e.pause(), t) {
			t.unload();
			return;
		}
		if (n) {
			n.stopLoad();
			return;
		}
		e.removeAttribute("src");
	}
};
function oe(e) {
	return e ? e.indexOf(".flv") > -1 ? "flv" : e.indexOf(".m3u8") > -1 ? "hls" : "native" : "native";
}
function se(e) {
	let t = Math.round(e / 60 / 60 % 24), n = e < 60 ? 0 : Math.round(e / 60 % 60), r = Math.round(e % 60);
	return t === 0 ? `${n < 10 ? "0" + n : n}:${r < 10 ? "0" + r : r}` : `${t < 10 ? "0" + t : t}:${n < 10 ? "0" + n : n}:${r < 10 ? "0" + r : r}`;
}
var J = "YYYY-MM-DD HH:mm:ss";
function ce(e, t) {
	return e ? window.getComputedStyle(e).getPropertyValue(t) : "";
}
function le(e, t) {
	return new Proxy(e, {
		get(e, n, r) {
			return typeof e[n] == "object" && le(e[n]), t && t[n] ? Reflect.get(t, n) : Reflect.get(e, n, r);
		},
		set(e, t, n) {
			return Reflect.set(e, t, n);
		}
	});
}
//#endregion
//#region src/Player/api/index.ts
var ue = class {
	container;
	constructor(e) {
		this.container = e;
	}
	get video() {
		return this.container.querySelector("video");
	}
	play = () => {
		U(async () => this.video?.play());
	};
	pause = () => {
		this.video?.pause();
	};
	get paused() {
		return this.video?.paused;
	}
	get muted() {
		return this.video?.muted;
	}
	seekTo = (e) => {
		this.video && (this.video.currentTime = e);
	};
	setVolume = (e) => {
		this.video && (this.video.volume = e);
	};
	getVolume = () => this.video?.volume;
	mute = () => {
		this.video && (this.video.muted = !0);
	};
	unmute = () => {
		this.video && (this.video.muted = !1);
	};
	requestPictureInPicture = () => {
		this.video?.requestPictureInPicture();
	};
	exitPictureInPicture = () => {
		document.exitPictureInPicture && document.pictureInPictureElement === this.video && document.exitPictureInPicture();
	};
	setPlaybackRate = (e) => {
		this.video && (this.video.playbackRate = e);
	};
	getDuration = () => {
		let { duration: e, seekable: t } = this.video || {};
		return e === Infinity && t && t.length > 0 ? t.end(t.length - 1) : e ?? 0;
	};
	getCurrentTime = () => this.video?.currentTime ?? 0;
	getSecondsLoaded = () => this.getBufferedTime()[1] ?? 0;
	getBufferedTime = () => {
		let { buffered: e } = this.video || {};
		if (e && e.length === 0) return [0, 0];
		let t = e?.end(e.length - 1) ?? 0, n = e?.start(e.length - 1) ?? 0, r = this.getDuration() ?? 0;
		return t > r ? [n, r] : [n, t];
	};
	snapshot = () => {
		let e = document.createElement("canvas"), t = e.getContext("2d");
		return e.width = this.video?.videoWidth ?? 0, e.height = this.video?.videoHeight ?? 0, t?.drawImage(this.video, 0, 0, e.width, e.height), setTimeout(() => {
			e.remove(), e = null, t = null;
		}, 200), e.toDataURL();
	};
	unload = () => {};
	reload = () => {};
	toggleFit = () => {};
	openFpsPlay = () => {};
	closeFpsPlay = () => {};
	destroy = () => {
		this.container = null;
	};
};
function de(e, t, n, r, i, a, o) {
	let [s, c] = v({
		type: "",
		flv: void 0,
		hls: void 0
	});
	return m(() => {
		if (!(r && (e || t === "flv" && i))) return;
		let s = r.querySelector("video"), l = {};
		switch (t) {
			case "flv":
				l.type = "flv", l.flv = q(s, e, n, a);
				break;
			case "hls":
				l.type = "hls", l.hls = ie(s, e, n, o);
				break;
			default:
				l.type = "native", s?.setAttribute("src", e ?? "");
				break;
		}
		return s?.paused && U(async () => s?.play()), c(l), () => {
			l.flv ? (l.flv.pause(), U(async () => l.flv?.destroy())) : l.hls ? (s?.pause(), U(async () => l.hls?.destroy())) : (s?.pause(), s?.removeAttribute("src")), c({});
		};
	}, [
		e,
		r,
		i,
		t,
		n,
		a,
		o
	]), [
		s.type,
		s.flv,
		s.hls
	];
}
function fe(e, t, n, r, a, o, s) {
	let [c, l] = v(void 0), [u, d] = v(Date.now()), f = g(() => ({
		flvConfig: { ...o },
		hlsConfig: { ...s }
	}), [u]), p = de(e, t, n, r, a, f.flvConfig, f.hlsConfig), h = i(() => d(Date.now()));
	return m(() => {
		if (!r) {
			console.debug("wait create api...");
			return;
		}
		let e = new ue(r);
		return l(e), () => W(() => e.destroy());
	}, [r, a]), [
		c,
		p,
		h
	];
}
//#endregion
//#region src/Player/context.tsx
var Y = u.createContext(null);
function pe({ children: e, ...t }) {
	return /* @__PURE__ */ x(Y.Provider, {
		value: { ...t },
		children: e
	});
}
pe.defaultProps = { getContainer: () => document.body };
//#endregion
//#region src/Player/event/index.ts
var me = class {
	video;
	events;
	playerEvents;
	constructor(e) {
		this.video = e, this.events = {}, this.playerEvents = {};
	}
	on(e, t) {
		this.events && this.events[e] ? this.events[e].listener.push(t) : this.events[e] = {
			type: e,
			listener: [t]
		};
	}
	addEventListener(e, t) {
		this.video && (this.playerEvents[e] ? this.playerEvents[e].push(t) : this.playerEvents[e] = [t], this.video.addEventListener(e, t, !1));
	}
	removeEventListener(e, t) {
		if (this.video) {
			if (!this.playerEvents || !this.playerEvents[e]) return;
			let n = this.playerEvents[e].findIndex((e) => e === t);
			n > -1 && this.playerEvents[e].splice(n, 1), this.video.removeEventListener(e, t, !1);
		}
	}
	emit(e, ...t) {
		!this.events || !this.events[e] || this.events[e].listener.forEach((e) => {
			e(...t);
		});
	}
	off(e, t) {
		if (!this.events || !this.events.eventName) return;
		let n = this.events[e].listener.findIndex((e) => e === t);
		n > -1 && this.events[e].listener.splice(n, 1);
	}
	destroy() {
		Object.keys(this.playerEvents).forEach((e) => {
			this.playerEvents[e].forEach((t) => {
				this.removeEventListener(e, t);
			});
		}), this.playerEvents = {}, this.events = {}, this.video = null;
	}
};
function he(e) {
	let [t, n] = v(void 0);
	return m(() => {
		if (!e) {
			console.debug("wait create event...");
			return;
		}
		let t = new me(e);
		return n(t), () => W(() => t.destroy());
	}, [e]), t;
}
function X(e, t, n) {
	let i = p(Y), a = g(() => i?.event ?? n, [n, i?.event]), o = r(t);
	m(() => {
		if (!a) return;
		let t = (e) => o.current?.(e);
		return a.addEventListener(e, t), () => a.removeEventListener(e, t);
	}, [a, e]);
}
function Z(e, t, n) {
	let i = p(Y), a = g(() => i?.event ?? n, [n, i?.event]), o = r(t);
	m(() => {
		if (!a) return;
		let t = (e) => o.current?.(e);
		return a.on(e, t), () => {
			a.off(e, t);
		};
	}, [a, e]);
}
function ge(e, t) {
	m(() => {
		if (!(!e || !t)) return t.forEach(([t, n]) => {
			e.addEventListener(t, n);
		}), () => {
			t.forEach(([t, n]) => {
				e.removeEventListener(t, n);
			});
		};
	}, [e]);
}
function _e(e, t) {
	m(() => {
		if (!(!e || !t)) return t.forEach(([t, n]) => {
			e.on(t, n);
		}), () => {
			t.forEach(([t, n]) => {
				e.off(t, n);
			});
		};
	}, [e]);
}
//#endregion
//#region src/Player/iconfont.tsx
var ve = {
	"lm-player-Play_Main": k,
	"lm-player-Pause_Main": D,
	"lm-player-volume-open": N,
	"lm-player-volume-close": M,
	"lm-player-Refresh_Main": A,
	"lm-player-zhuzhenplay": j,
	"lm-player-S_View_ScreenViewFull": T,
	"lm-player-S_View_ScreenViewExit": w,
	"lm-player-Loading": E,
	"lm-player-YesorNo_No_Dark": C,
	"lm-player-PlaySource": O
};
function ye({ type: e, className: t = "", style: n, ...r }) {
	let i = e ? ve[e] : void 0;
	return i ? /* @__PURE__ */ x("span", {
		className: `lm-player-iconfont ${t}`,
		style: {
			display: "inline-flex",
			...n
		},
		...r,
		children: /* @__PURE__ */ x(i, { size: "1em" })
	}) : null;
}
//#endregion
//#region src/Player/contraller_bar/bar.tsx
function be({ visibel: e = !0, className: t = "", children: n, ...r }) {
	return e === !1 ? null : /* @__PURE__ */ x("span", {
		className: `contraller-bar-item ${t}`,
		...r,
		children: n
	});
}
//#endregion
//#region src/Player/contraller_bar/useBarStatus.tsx
function xe() {
	let { event: e } = p(Y), [t, n] = v({ status: 1 });
	return _e(e, [[K.SHOW_CONTRALLER, () => n((e) => ({
		...e,
		status: 1
	}))], [K.HIDE_CONTRALLER, () => n((e) => ({
		...e,
		status: 0
	}))]]), t.status;
}
//#endregion
//#region src/Player/timeline.tsx
function Se() {
	let { api: e, isFpsPlay: t } = p(Y), [n, r] = v({
		currentTime: 0,
		buffered: 0
	}), i = () => r((t) => ({
		...t,
		currentTime: e?.getCurrentTime() ?? 0,
		buffered: e?.getSecondsLoaded() ?? 0
	})), a = () => r((t) => ({
		...t,
		buffered: e?.getSecondsLoaded() ?? 0
	}));
	return X("timeupdate", i), X("progress", a), X("suspend", a), X("seeked", () => !t && e?.play()), g(() => [
		n.currentTime,
		n.buffered,
		e?.getDuration() ?? 0
	], [
		n.currentTime,
		n.buffered,
		e
	]);
}
function Ce() {
	let { api: e } = p(Y), t = xe(), [n, r, i] = Se(), a = g(() => n / i * 100, [n, i]), o = g(() => r / i * 100, [r, i]);
	return /* @__PURE__ */ S("div", {
		className: `player-timeline-layout ${t === 0 ? "hide-time-line" : ""}`,
		onClick: (t) => {
			let n = t.currentTarget.getBoundingClientRect(), r = (t.pageX - n.left) / n.width * (e?.getDuration() ?? 0);
			e?.seekTo(r);
		},
		children: [/* @__PURE__ */ x("div", {
			className: "buffer-line",
			style: { width: `${o}%` }
		}), /* @__PURE__ */ x("div", {
			className: "current-line",
			style: { width: `${a}%` }
		})]
	});
}
//#endregion
//#region src/Player/contraller_bar/time.tsx
function we() {
	let [e, , t] = Se();
	return /* @__PURE__ */ S("span", {
		className: "video-time-progress",
		children: [
			se(e),
			"/",
			se(t || 0)
		]
	});
}
//#endregion
//#region src/Player/contraller_bar/volume.tsx
function Te({ api: e, style: t }) {
	let [n, r] = v(Math.round(e?.getVolume() ?? 0)), i = c(), a = g(() => e?.muted ? 0 : n, []);
	return l(() => e?.setVolume(n / 100), [n]), /* @__PURE__ */ x(F, {
		arrow: !1,
		overlayClassName: "lm-player-volume-popup",
		title: /* @__PURE__ */ x(P, {
			onChange: (t) => {
				e?.muted && e?.unmute(), r(t), i();
			},
			vertical: !0,
			value: n
		}),
		children: /* @__PURE__ */ x(ye, {
			style: t,
			type: a === 0 ? "lm-player-volume-close" : "lm-player-volume-open",
			onClick: () => {
				e && (e.muted ? (e.unmute(), r(100)) : (e.mute(), r(0)), i());
			}
		})
	});
}
var Ee = u.memo(Te);
//#endregion
//#region src/Player/contraller_bar/left_bar.tsx
function De({ reload: e, leftExtContents: t, leftMidExtContents: n, hideTimeProgress: r, oneFpsPlay: i }) {
	let { api: a, container: o, isLive: s, isFpsPlay: c, event: l } = p(Y), [u, d] = v(Date.now()), m = () => d(Date.now());
	X("play", m), X("pause", m), X("volumechange", m);
	let h = o?.querySelector("video"), _ = g(() => h?.paused, [u, h]), y = g(() => _ ? "lm-player-Play_Main" : "lm-player-Pause_Main", [_]), b = g(() => _ ? "播放" : "暂停", [_]), C = f(() => {
		if (h?.paused) {
			let e = a?.getSecondsLoaded() ?? 1;
			a?.seekTo(e - 1), a?.play();
		} else a?.pause();
	}, [h, a]);
	return /* @__PURE__ */ S("div", {
		className: "contraller-left-bar",
		children: [
			t,
			!c && /* @__PURE__ */ x(be, { children: /* @__PURE__ */ x(ye, {
				onClick: C,
				type: y,
				title: b
			}) }),
			/* @__PURE__ */ x(be, { children: /* @__PURE__ */ x(Ee, { api: a }) }),
			!s && !r && /* @__PURE__ */ x(we, {}),
			/* @__PURE__ */ x(be, { children: /* @__PURE__ */ x(ye, {
				onClick: () => {
					l?.emit(K.CLEAR_ERROR_TIMER), l?.emit(K.RELOAD_SUCCESS), e();
				},
				type: "lm-player-Refresh_Main",
				title: "重载"
			}) }),
			!s && i && /* @__PURE__ */ x(be, { children: /* @__PURE__ */ x(ye, {
				onClick: c ? a?.closeFpsPlay : a?.openFpsPlay,
				type: "lm-player-zhuzhenplay",
				title: "逐帧播放"
			}) }),
			n
		]
	});
}
//#endregion
//#region src/Player/contraller_bar/right_bar.tsx
function Oe({ rightExtContents: e, rightMidExtContents: t }) {
	let { container: i } = p(Y), [a, { enterFullscreen: o, exitFullscreen: s }] = n(r(i));
	return /* @__PURE__ */ S("div", {
		className: "contraller-right-bar",
		children: [
			t,
			/* @__PURE__ */ x(be, { children: /* @__PURE__ */ x(ye, {
				title: a ? "窗口" : "全屏",
				onClick: a ? s : o,
				type: a ? "lm-player-S_View_ScreenViewExit" : "lm-player-S_View_ScreenViewFull"
			}) }),
			e
		]
	});
}
//#endregion
//#region src/Player/contraller_bar/index.tsx
function ke({ rightExtContents: e, rightMidExtContents: t, visibel: n, leftExtContents: r, leftMidExtContents: i, reload: a, hideTimeProgress: o, oneFpsPlay: s }) {
	return /* @__PURE__ */ x(b, { children: /* @__PURE__ */ S("div", {
		className: `contraller-bar-layout ${n ? "" : "hide-contraller-bar"}`,
		children: [/* @__PURE__ */ x(De, {
			oneFpsPlay: s,
			hideTimeProgress: o,
			reload: a,
			leftMidExtContents: i,
			leftExtContents: r
		}), /* @__PURE__ */ x(Oe, {
			rightExtContents: e,
			rightMidExtContents: t
		})]
	}) });
}
//#endregion
//#region src/Player/contraller_bar/contraller_event.tsx
function Ae({ children: e }) {
	let { event: n, container: r } = p(Y), i = _(), [o, s] = v(!0), c = () => {
		i.current && clearTimeout(i.current), s(!0), n?.emit(K.SHOW_CONTRALLER);
	}, l = () => {
		i.current && clearTimeout(i.current), i.current = setTimeout(() => {
			s(!1), n?.emit(K.HIDE_CONTRALLER);
		}, 3 * 1e3);
	};
	return a(() => l()), t("mouseenter", c, { target: r }), t("mouseleave", l, { target: r }), /* @__PURE__ */ x(b, { children: u.Children.map(e, (e) => u.isValidElement(e) ? u.cloneElement(e, { visibel: o }) : e) });
}
//#endregion
//#region src/Player/empty.tsx
function Q() {
	return /* @__PURE__ */ x(b, {});
}
//#endregion
//#region src/Player/event/errorEvent.tsx
function je({ event: e, reload: t, unload: n, errorReloadTimer: r, flv: i, hls: a, errorHandleAdapter: o }) {
	let [s, c] = v(0), l = _(null), u = _(), d = (...e) => {
		e[2] && e[2].msg && e[2].msg.includes("Unsupported audio") || (console.error(...e), l.current = e, o?.(e) || c(s + 1));
	}, f = () => c(0);
	X("error", d, e), X("canplay", () => {
		s > 0 && (console.warn("视频重连成功！"), e?.emit(K.RELOAD_SUCCESS), f());
	}, e), Z(K.ERROR, d, e), Z(K.CLEAR_ERROR_TIMER, f, e), m(() => {
		i && i.on(G.default.Events.ERROR, d), a && a.on(y.Events.ERROR, d);
	}, [i, a]), m(() => {
		if (s !== 0) {
			if (s > r) {
				n(), e?.emit(K.RELOAD_FAIL);
				return;
			}
			return console.warn(`视频播放出错，正在进行重连${s}`), u.current = setTimeout(() => {
				e?.emit(K.ERROR_RELOAD, s, ...l.current), t();
			}, 2 * 1e3), () => {
				clearTimeout(u.current);
			};
		}
	}, [
		s,
		e,
		i,
		a
	]);
}
//#endregion
//#region src/useRafInterval/index.tsx
var Me = function(e, t = 0) {
	if (typeof requestAnimationFrame > "u") return { id: setInterval(e, t) };
	let n = (/* @__PURE__ */ new Date()).getTime(), r = { id: 0 }, i = () => {
		(/* @__PURE__ */ new Date()).getTime() - n >= t && (e(), n = (/* @__PURE__ */ new Date()).getTime()), r.id = requestAnimationFrame(i);
	};
	return r.id = requestAnimationFrame(i), r;
};
function $(e) {
	return typeof cancelAnimationFrame > "u";
}
var Ne = function(e) {
	if ($(e.id)) {
		clearInterval(e.id);
		return;
	}
	cancelAnimationFrame(e.id);
};
function Pe(e, t, n) {
	let i = n?.immediate, a = n?.deps ?? [], o = r(e), s = _();
	return m(() => {
		if (!(!I(t) || t < 0)) return i && o.current?.(), s.current = Me(() => {
			o.current?.();
		}, t), () => {
			s.current && Ne(s.current);
		};
	}, [t, ...a]), f(() => {
		s.current && Ne(s.current);
	}, []);
}
//#endregion
//#region src/Player/fps_play.tsx
var Fe = 1 / 30;
function Ie({ api: e, event: t, fpsDelay: n, fps: r }) {
	let [i, a] = v(Date.now()), o = _(null), s = _(), c = g(() => r ? 1 / r : Fe, [r]);
	return m(() => {
		let r = () => {
			if (!o.current || !t?.video || !e) return;
			let n = t.video;
			n.currentTime = e.getCurrentTime() + c, n.currentTime >= e.getDuration() && (clearInterval(s.current), n.currentTime = 0, t.emit(K.PLAY_ENDED));
			let r = o.current, i = r.getContext("2d"), { width: a, height: l } = n.getBoundingClientRect();
			if (r.width = a, r.height = l, ce(n, "object-fit") === "fill") i?.drawImage(n, 0, 0, a, l);
			else {
				let e = n.videoWidth, t = l / n.videoHeight * e, r = (a - t) / 2;
				i?.drawImage(n, r, 0, t, l);
			}
		};
		return r(), s.current = setInterval(r, n), () => {
			clearInterval(s.current);
		};
	}, [
		e,
		t,
		n,
		i,
		c
	]), Z(K.CANVAS_PAUSE, () => {
		clearInterval(s.current);
	}), Z(K.CANVAS_PLAY, () => {
		a(Date.now());
	}), Pe(() => e?.paused ? null : e?.pause(), 10), /* @__PURE__ */ x("canvas", {
		className: "fps-play-canvas",
		ref: o
	});
}
//#endregion
//#region src/Player/live_heart.tsx
function Le({ api: t, event: n, isLive: r }) {
	let i = e(), a = _(0), s = () => {
		if (!r || i !== "visible" || !t) return;
		let e = t.getCurrentTime() ?? 0, n = t.getSecondsLoaded();
		n - e > 5 && (console.debug(`当前延时过大current->${e} buffered->${n}, 基于视频当前缓存时间更新当前播放时间 updateTime -> ${n - 2}`), t.seekTo(n - 2 > 0 ? n - 2 : 0), t.play());
	};
	l(() => s(), [i]), o(() => a.current = t?.getCurrentTime() ?? 0, 1 * 1e3), o(() => s(), 30 * 1e3), o(() => {
		if (!t || !n) return;
		let e = t.getCurrentTime();
		r && !t.video?.paused && e === a.current && n.emit(K.ERROR, "long time no play！");
	}, 20 * 1e3);
}
//#endregion
//#region src/Player/message.tsx
function Re() {
	let { api: e } = p(Y), [t, n] = v({
		status: null,
		errorTimer: 1,
		loading: !1
	}), r = _(), i = g(() => t.status === "fail" ? (console.warn("视频错误，请手动刷新重试！"), "请稍后重试！") : t.status === "reload" ? (console.warn(`第${t.errorTimer}次重连`), "正在刷新...") : "", [t.errorTimer, t.status]), a = () => {
		r.current && clearTimeout(r.current), r.current = setTimeout(() => n((e) => ({
			...e,
			loading: !0
		})), 200);
	}, o = () => {
		r.current && clearTimeout(r.current), n((e) => ({
			...e,
			loading: !1
		}));
	}, s = (e) => {
		r.current && clearTimeout(r.current), n(() => ({
			status: "reload",
			errorTimer: e,
			loading: !0
		}));
	}, c = () => n((e) => ({
		...e,
		status: "fail"
	})), l = () => n((e) => ({
		...e,
		status: null
	}));
	X("loadstart", a), X("loadeddata", o), X("canplay", o), Z(K.ERROR_RELOAD, s), Z(K.RELOAD_FAIL, c), Z(K.RELOAD_SUCCESS, l), Z(K.RELOAD, () => n((e) => ({
		...e,
		status: "reload",
		loading: !0
	}))), Z(K.HISTORY_PLAY_END, () => {
		r.current && clearTimeout(r.current), n((e) => ({
			...e,
			status: null,
			loading: !1
		})), e?.pause();
	}), Z(K.CLEAR_ERROR_TIMER, l);
	let { loading: u, status: d } = t;
	return /* @__PURE__ */ S("div", {
		className: `lm-player-message-mask ${u || d === "fail" ? "lm-player-mask-loading-animation" : ""}`,
		children: [/* @__PURE__ */ x(ye, {
			type: d === "fail" ? "lm-player-YesorNo_No_Dark" : "lm-player-Loading",
			className: `${u && d !== "fail" ? "lm-player-loading-animation" : d === "fail" ? "lm-player-loadfail" : ""} lm-player-loading-icon`
		}), /* @__PURE__ */ x("span", {
			className: "lm-player-message",
			children: i
		})]
	});
}
//#endregion
//#region src/Player/single_player.tsx
var ze = u.forwardRef(function({ className: e, url: t, type: n, hideContrallerBar: a, isLive: o, errorReloadTimer: c, children: u, onCanPlayerInit: d, extActions: f, ...p }, y) {
	let { autoPlay: b, preload: C, muted: w, poster: T, playsInline: E, loop: D } = p, { rightExtContents: O, rightMidExtContents: k, leftExtContents: A, leftMidExtContents: j, customTimeLine: M } = p, { flvConfig: N, hlsConfig: P, videoEvents: F, playerEvents: I, oneFpsPlay: L, fpsDelay: ee, fps: R } = p, [z, B] = v({
		container: void 0,
		isFpsPlay: !1
	}), [V, { toggle: te }] = s("fill", "contain"), ne = g(() => n || oe(t), [t, n]), re = _(null), H = g(() => z.container ? z.container.querySelector("video") ?? void 0 : void 0, [z.container]), U = he(H);
	ge(U, F), _e(U, I);
	let [W, [, G, ie], q] = fe(t, ne, o, z.container, N?.mediaDataSource.segments, N, P), se = g(() => !!t || !!N?.mediaDataSource.segments && ne === "flv", [
		t,
		N?.mediaDataSource.segments,
		ne
	]), J = r(ie), ce = r(G);
	m(() => {
		B((e) => ({
			...e,
			container: re.current
		}));
	}, []), m(() => {
		U?.emit(K.CLEAR_ERROR_TIMER);
	}, [t]);
	let ue = i(() => {
		q();
	}), de = i(() => ae(H, ce.current ?? void 0, J.current ?? void 0)), Y = i(() => {
		B((e) => ({
			...e,
			isFpsPlay: !0
		})), W?.pause();
	}), me = i(() => {
		B((e) => ({
			...e,
			isFpsPlay: !1
		})), W?.play();
	}), X = g(() => {
		if (W) return le(W, {
			reload: ue,
			unload: de,
			toggleFit: te,
			openFpsPlay: Y,
			closeFpsPlay: me,
			...f
		});
	}, [W]), Z = g(() => {
		if (U) return le(U);
	}, [U]);
	h(y, () => ({
		video: H,
		container: z.container,
		api: X,
		event: Z,
		plugins: [ce.current, J.current],
		fit: V
	}), [
		H,
		z.container,
		X,
		Z,
		V
	]), l(() => W && U && H ? d?.() : void 0, [
		W,
		U,
		H
	]), je({
		unload: de,
		flv: ce.current ?? void 0,
		hls: J.current ?? void 0,
		event: U,
		reload: ue,
		errorReloadTimer: c
	}), Le({
		api: W,
		event: U,
		isLive: o
	});
	let ve = {
		autoPlay: z.isFpsPlay ? !1 : b,
		preload: C,
		muted: z.isFpsPlay ? !1 : w,
		poster: T,
		controls: !1,
		playsInline: E,
		loop: z.isFpsPlay ? !1 : D
	}, ye = {
		rightExtContents: O,
		rightMidExtContents: k,
		leftMidExtContents: j,
		leftExtContents: A,
		reload: p.reload ?? ue,
		hideTimeProgress: !!M,
		oneFpsPlay: L
	}, be = W && U;
	return /* @__PURE__ */ x(pe, {
		api: X,
		event: U,
		container: z.container,
		isLive: o,
		isFpsPlay: z.isFpsPlay,
		children: /* @__PURE__ */ S("div", {
			className: `lm-player-container ${e}`,
			ref: re,
			children: [
				/* @__PURE__ */ S("div", {
					className: "player-mask-layout",
					children: [/* @__PURE__ */ x("video", {
						...ve,
						style: {
							objectFit: V,
							visibility: z.isFpsPlay ? "hidden" : "unset"
						}
					}), be && se && z.isFpsPlay ? /* @__PURE__ */ x(Ie, {
						fps: R,
						event: U,
						api: X,
						fpsDelay: ee
					}) : /* @__PURE__ */ x(Q, {})]
				}),
				x(be && se ? Re : Q, {}),
				be && se && !a ? /* @__PURE__ */ x(Ae, { children: /* @__PURE__ */ x(ke, { ...ye }) }) : /* @__PURE__ */ x(Q, {}),
				be ? M || x(a ? Q : Ce, {}) : /* @__PURE__ */ x(Q, {}),
				u
			]
		})
	});
});
ze.defaultProps = {
	isLive: !0,
	errorReloadTimer: 5,
	muted: !0,
	autoPlay: !0,
	playsInline: !1,
	preload: "auto",
	loop: !1,
	hideContrallerBar: !1,
	className: "",
	flvConfig: {
		mediaDataSource: {},
		config: {}
	},
	hlsConfig: {},
	extActions: {},
	oneFpsPlay: !1,
	fpsDelay: 500,
	fps: 30
};
//#endregion
//#region src/Player/frontend_timeline.tsx
function Be({ end: e, begin: t, left: n, current: r, markTime: i }) {
	return n === -1 ? null : /* @__PURE__ */ S("div", {
		className: "frontend-line-tip-box",
		style: { left: n },
		children: [
			/* @__PURE__ */ x("div", {
				style: { fontWeight: 600 },
				children: "录像信息"
			}),
			/* @__PURE__ */ S("div", { children: ["开始：", L(t).format(J)] }),
			/* @__PURE__ */ S("div", { children: ["结束：", L(e).format(J)] }),
			/* @__PURE__ */ S("div", { children: ["刻度：", L(i).format(J)] }),
			/* @__PURE__ */ S("div", { children: ["当前：", L(r).format(J)] })
		]
	});
}
function Ve({ duration: e, begin: t, end: n, onSeek: r }) {
	let [i, a] = v({
		time: 0,
		markTime: 0,
		left: -1,
		visible: !1
	}), o = xe(), [s] = Se(), c = g(() => i.time + s, [i.time, s]);
	l(() => a((e) => ({
		...e,
		time: 0
	})), [t]);
	let u = g(() => c / e * 100, [e, c]), f = g(() => t + c * 1e3, [t, c]);
	return /* @__PURE__ */ S("div", {
		className: `player-timeline-layout frontend-player-timeline-layout ${o === 0 ? "hide-time-line" : ""}`,
		onClick: (n) => {
			let i = n.currentTarget.getBoundingClientRect(), o = (n.pageX - i.left) / i.width * e;
			r?.(t + o * 1e3), a((e) => ({
				...e,
				time: o
			}));
		},
		onMouseMove: (n) => {
			let r = n.currentTarget.getBoundingClientRect(), i = n.pageX - r.left, o = i / r.width * e;
			a((e) => ({
				...e,
				left: i,
				markTime: t + o * 1e3
			}));
		},
		onMouseOut: () => d(() => a((e) => ({
			...e,
			left: -1
		}))),
		children: [
			/* @__PURE__ */ x("div", {
				className: "current-line",
				style: { width: `${u}%` }
			}),
			/* @__PURE__ */ x(Be, {
				end: n,
				begin: t,
				left: i.left,
				current: f,
				markTime: i.markTime
			}),
			i.left !== -1 && /* @__PURE__ */ x("span", {
				className: "frontend-line-mark",
				style: { left: i.left }
			})
		]
	});
}
//#endregion
//#region src/Player/frontend_player.tsx
function He({ url: e, begin: t, end: n, onSeek: r, forwordRef: a, customTimeLine: o, onCanPlayerInit: s, ...l }) {
	let u = c(), d = _(null), f = a || d, { api: p, event: m } = f.current || {}, h = g(() => (n ?? 0 - (t ?? 0)) / 1e3, [t, n]);
	return /* @__PURE__ */ x(ze, {
		ref: f,
		url: e,
		reload: i(() => {
			f.current?.event.emit(K.RELOAD), r?.(t), f.current?.api.reload();
		}),
		onCanPlayerInit: i(() => {
			u(), s?.();
		}),
		isLive: !1,
		type: "flv",
		customTimeLine: p && m ? o ?? /* @__PURE__ */ x(Ve, {
			end: n ?? 0,
			onSeek: r,
			begin: t ?? 0,
			duration: h
		}) : /* @__PURE__ */ x(b, {}),
		...l
	});
}
//#endregion
//#region src/Player/segment_timeline.tsx
function Ue({ index: e, segments: t, begin: n, current: r, markTime: i }) {
	let { start: a, end: o } = g(() => {
		if (e === 0) {
			let e = n, r = n + (t[0].endTime - t[0].beginTime);
			return {
				start: L(e).format(J),
				end: L(r).format(J)
			};
		}
		let r = n + t.map((e) => e.endTime - e.beginTime).reduce((t, n, r) => r >= e ? t : t + n, 0), i = r + (t[e].endTime - t[e].beginTime);
		return {
			start: L(r).format(J),
			end: L(i).format(J)
		};
	}, [
		e,
		t,
		n
	]), s = g(() => !!t[e]?.url, [e, t]);
	return /* @__PURE__ */ S("div", {
		className: "segment-line-tip-box",
		children: [
			/* @__PURE__ */ x("div", {
				style: { fontWeight: 600 },
				children: "录像片段信息"
			}),
			/* @__PURE__ */ S("div", { children: ["开始：", a] }),
			/* @__PURE__ */ S("div", { children: ["结束：", o] }),
			/* @__PURE__ */ S("div", { children: ["刻度：", L(i).format(J)] }),
			/* @__PURE__ */ S("div", { children: ["当前：", L(r).format(J)] }),
			/* @__PURE__ */ S("div", { children: ["状态：", /* @__PURE__ */ x("span", {
				style: { color: s ? "green" : "red" },
				children: s ? "正常" : "缺失"
			})] })
		]
	});
}
function We({ index: e, segments: t, duration: n, begin: r, seekTo: i }) {
	let [a, o] = v({
		time: 0,
		markTime: 0,
		left: -1,
		visible: !1
	}), s = xe(), [c, l] = Se(), u = g(() => t.map((e) => (e.endTime - e.beginTime) / 1e3).reduce((t, n, r) => r >= e ? t : t + n, 0), [e, t]), f = g(() => (c + u) / n * 100, [
		c,
		n,
		u
	]), p = g(() => (l + u) / n * 100, [
		l,
		n,
		u
	]), m = (e, n) => {
		if (!t[n].url) return;
		let a = e.currentTarget.getBoundingClientRect(), o = e.pageX - a.left, s = t[n - 1], c = s ? s.endTime : r, l = t[n].endTime - t[n].beginTime, u = o / a.width * l;
		i(Math.round(u + c));
	};
	return /* @__PURE__ */ x("div", {
		className: `player-timeline-layout player-segment-timeline-layout ${s === 0 ? "hide-time-line" : ""}`,
		onMouseMove: (e) => {
			let t = e.currentTarget.getBoundingClientRect(), i = e.pageX - t.left, a = i / t.width * n;
			o((e) => ({
				...e,
				left: i,
				markTime: r + a * 1e3
			}));
		},
		onMouseOut: () => d(() => o((e) => ({
			...e,
			left: -1
		}))),
		children: /* @__PURE__ */ S("div", {
			className: "segment-line-box",
			children: [
				t.map((e, i) => /* @__PURE__ */ x(F, {
					title: /* @__PURE__ */ x(Ue, {
						segments: t,
						index: i,
						begin: r,
						current: c * 1e3 + r,
						markTime: a.markTime
					}),
					children: /* @__PURE__ */ x("div", {
						className: `segment-line-item ${e.url ? "" : "segment-line-item-none"} ${i === t.length - 1 ? "last-segment-line-item" : ""}`,
						onClick: (e) => m(e, i),
						style: { width: `${(e.endTime / 1e3 - e.beginTime / 1e3) / n * 100}%` }
					})
				}, `time-line-${i}`)),
				/* @__PURE__ */ x("div", {
					className: "buffer-line",
					style: { width: `${p}%` }
				}),
				/* @__PURE__ */ x("div", {
					className: "current-line",
					style: { width: `${f}%` }
				}),
				a.left !== -1 && /* @__PURE__ */ x("span", {
					className: "segment-line-mark",
					style: { left: a.left }
				})
			]
		})
	});
}
//#endregion
//#region src/Player/segment_player.tsx
function Ge(e, t = 0) {
	if (!(Array.isArray(e) && e.length > 0) || e[t].url) return t;
	{
		let n = t + 1;
		return n > e.length ? n : Ge(e, n);
	}
}
function Ke(e, t, n = 0) {
	let [r, i] = v({ index: Ge(t ?? [], n) });
	m(() => {
		let e = Ge(t ?? [], 0);
		i((t) => ({
			...t,
			index: e
		}));
	}, [t]), m(() => {
		!t?.[r.index]?.url && r.index < (t?.length ?? 0) - 1 && i((e) => ({
			...e,
			index: e.index + 1
		}));
	}, [t, r.index]);
	let a = () => i((e) => ({
		...e,
		index: e.index + 1 < (t?.length ?? 0) ? e.index + 1 : e.index
	}));
	return X("ended", a, e), Z(K.PLAY_ENDED, a, e), {
		index: r.index,
		setIndex: (e) => i((t) => ({
			...t,
			index: e
		}))
	};
}
function qe({ segments: e, begin: t, forwordRef: n, defaultIndex: i, onCanPlayerInit: a, customTimeLine: o, ...s }) {
	let [l, u] = v({ seekTime: 0 }), d = r(e), p = c(), h = _(null), y = n || h, { api: S, event: C } = y.current || {}, w = g(() => e?.map((e) => (e.endTime - e.beginTime) / 1e3).reduce((e, t) => e + t, 0), [e]), { index: T, setIndex: E } = Ke(C, e, i), D = g(() => e?.[T] ? e[T].url : void 0, [e, T]), O = () => {
		let [, e] = y.current?.plugins ?? [];
		e && (e.swapAudioCodec(), e.recoverMediaError()), y.current?.event.emit(K.RELOAD), y.current?.event.emit(K.CLEAR_ERROR_TIMER), E(0), y.current?.api.reload();
	}, k = (e) => {
		let t = d.current ?? [], n = t.findIndex((t) => e >= t.beginTime && e < t.endTime);
		if (n === -1) return;
		let [, r] = y.current?.plugins ?? [];
		r && (r.swapAudioCodec(), r.recoverMediaError());
		let i = e - t[n]?.beginTime;
		E(n), u((e) => ({
			...e,
			seekTime: i / 1e3
		}));
	};
	m(() => {
		l.seekTime !== 0 && (u((e) => ({
			...e,
			seekTime: 0
		})), y.current?.video && (y.current.video.currentTime = l.seekTime));
	}, [l.seekTime]);
	let A = S && C, j = o ?? /* @__PURE__ */ x(We, {
		begin: t ?? 0,
		seekTo: k,
		index: T,
		segments: e ?? [],
		duration: w ?? 0
	});
	return /* @__PURE__ */ x(ze, {
		ref: y,
		url: D,
		isLive: !1,
		onCanPlayerInit: f(() => {
			p(), a?.();
		}, []),
		reload: O,
		extActions: {
			setIndex: E,
			seekTo: k
		},
		customTimeLine: A ? j : /* @__PURE__ */ x(b, {}),
		...s
	});
}
//#endregion
//#region src/index.tsx
var Je = ze, Ye = qe, Xe = He;
//#endregion
export { Xe as FrontendPlayer, Ye as HistoryPlayer, Je as Player, Je as default };

//# sourceMappingURL=index.js.map