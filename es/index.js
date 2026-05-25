import { useDocumentVisibility as e, useEventListener as t, useFullscreen as n, useLatest as r, useMemoizedFn as i, useMount as a, useRafInterval as o, useToggle as s, useUpdate as c, useUpdateEffect as l } from "ahooks";
import u, { startTransition as d, useCallback as f, useContext as p, useEffect as m, useImperativeHandle as h, useMemo as g, useRef as _, useState as v } from "react";
import y from "mpegts.js";
import b from "hls.js";
import { Fragment as x, jsx as S, jsxs as C } from "react/jsx-runtime";
import { RiCloseCircleFill as ee, RiFullscreenExitFill as w, RiFullscreenFill as T, RiLoader4Fill as E, RiPauseFill as D, RiPlayCircleFill as O, RiPlayFill as k, RiRefreshFill as te, RiSpeedMiniFill as A, RiVolumeMuteFill as j, RiVolumeUpFill as ne } from "@remixicon/react";
import { Slider as re, Tooltip as ie } from "antd";
import { isNumber as ae } from "lodash-es";
import M from "dayjs";
//#region src/likeGo/index.ts
async function N(e) {
	let t = [];
	return await e().then((e) => {
		t[0] = e;
	}).catch((e) => {
		t[1] = e;
	}), t;
}
//#endregion
//#region src/nextTick/index.ts
function P(e) {
	setTimeout(e, 10);
}
//#endregion
//#region src/Player/event/eventName.ts
var F = {
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
function I(e, t, n, r) {
	if (!b.isSupported() || !t) return;
	let i = new b({
		liveDurationInfinity: n,
		enableWorker: !0,
		...r
	});
	return i.loadSource(t), i.attachMedia(e), i;
}
function L(e, t, n, r) {
	if (!y.isSupported() || !t) return;
	y.LoggingControl.enableDebug = !1, y.LoggingControl.enableVerbose = !1, y.LoggingControl.enableWarn = !1;
	let i = {
		type: "flv",
		url: t,
		...r?.mediaDataSource
	}, a = {
		enableWorker: !0,
		isLive: n ?? !0,
		enableStashBuffer: !n,
		...r?.config
	}, o = y.createPlayer(i, a);
	return o.attachMediaElement(e), o.load(), o;
}
var oe = function(e, t, n) {
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
function se(e) {
	return e ? e.indexOf(".flv") > -1 ? "flv" : e.indexOf(".m3u8") > -1 ? "hls" : "native" : "native";
}
function R(e) {
	let t = Math.round(e / 60 / 60 % 24), n = e < 60 ? 0 : Math.round(e / 60 % 60), r = Math.round(e % 60);
	return t === 0 ? `${n < 10 ? "0" + n : n}:${r < 10 ? "0" + r : r}` : `${t < 10 ? "0" + t : t}:${n < 10 ? "0" + n : n}:${r < 10 ? "0" + r : r}`;
}
var z = "YYYY-MM-DD HH:mm:ss";
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
var B = class {
	container;
	constructor(e) {
		this.container = e;
	}
	get video() {
		return this.container.querySelector("video");
	}
	play = () => {
		N(async () => this.video?.play());
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
function V(e, t, n, r, i, a, o) {
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
				l.type = "flv", l.flv = L(s, e, n, a);
				break;
			case "hls":
				l.type = "hls", l.hls = I(s, e, n, o);
				break;
			default:
				l.type = "native", s?.setAttribute("src", e ?? "");
				break;
		}
		return s?.paused && N(async () => s?.play()), c(l), () => {
			l.flv ? (l.flv.pause(), N(async () => l.flv?.destroy())) : l.hls ? (s?.pause(), N(async () => l.hls?.destroy())) : (s?.pause(), s?.removeAttribute("src")), c({});
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
function ue(e, t, n, r, a, o, s) {
	let [c, l] = v(void 0), [u, d] = v(Date.now()), f = g(() => ({
		flvConfig: { ...o },
		hlsConfig: { ...s }
	}), [u]), p = V(e, t, n, r, a, f.flvConfig, f.hlsConfig), h = i(() => d(Date.now()));
	return m(() => {
		if (!r) {
			console.debug("wait create api...");
			return;
		}
		let e = new B(r);
		return l(e), () => P(() => e.destroy());
	}, [r, a]), [
		c,
		p,
		h
	];
}
//#endregion
//#region src/Player/context.tsx
var H = u.createContext(null);
function de({ children: e, ...t }) {
	return /* @__PURE__ */ S(H.Provider, {
		value: { ...t },
		children: e
	});
}
de.defaultProps = { getContainer: () => document.body };
//#endregion
//#region src/Player/event/index.ts
var fe = class {
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
function pe(e) {
	let [t, n] = v(void 0);
	return m(() => {
		if (!e) {
			console.debug("wait create event...");
			return;
		}
		let t = new fe(e);
		return n(t), () => P(() => t.destroy());
	}, [e]), t;
}
function U(e, t, n) {
	let i = p(H), a = g(() => i?.event ?? n, [n, i?.event]), o = r(t);
	m(() => {
		if (!a) return;
		let t = (e) => o.current?.(e);
		return a.addEventListener(e, t), () => a.removeEventListener(e, t);
	}, [a, e]);
}
function W(e, t, n) {
	let i = p(H), a = g(() => i?.event ?? n, [n, i?.event]), o = r(t);
	m(() => {
		if (!a) return;
		let t = (e) => o.current?.(e);
		return a.on(e, t), () => {
			a.off(e, t);
		};
	}, [a, e]);
}
function me(e, t) {
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
function he(e, t) {
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
var G = {
	"lm-player-Play_Main": k,
	"lm-player-Pause_Main": D,
	"lm-player-volume-open": ne,
	"lm-player-volume-close": j,
	"lm-player-Refresh_Main": te,
	"lm-player-zhuzhenplay": A,
	"lm-player-S_View_ScreenViewFull": T,
	"lm-player-S_View_ScreenViewExit": w,
	"lm-player-Loading": E,
	"lm-player-YesorNo_No_Dark": ee,
	"lm-player-PlaySource": O
};
function K({ type: e, className: t = "", style: n, ...r }) {
	let i = e ? G[e] : void 0;
	return i ? /* @__PURE__ */ S("span", {
		className: `lm-player-iconfont ${t}`,
		style: {
			display: "inline-flex",
			...n
		},
		...r,
		children: /* @__PURE__ */ S(i, { size: "1em" })
	}) : null;
}
//#endregion
//#region src/Player/contraller_bar/bar.tsx
function q({ visibel: e = !0, className: t = "", children: n, ...r }) {
	return e === !1 ? null : /* @__PURE__ */ S("span", {
		className: `contraller-bar-item ${t}`,
		...r,
		children: n
	});
}
//#endregion
//#region src/Player/contraller_bar/useBarStatus.tsx
function J() {
	let { event: e } = p(H), [t, n] = v({ status: 1 });
	return he(e, [[F.SHOW_CONTRALLER, () => n((e) => ({
		...e,
		status: 1
	}))], [F.HIDE_CONTRALLER, () => n((e) => ({
		...e,
		status: 0
	}))]]), t.status;
}
//#endregion
//#region src/Player/timeline.tsx
function Y() {
	let { api: e, isFpsPlay: t } = p(H), [n, r] = v({
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
	return U("timeupdate", i), U("progress", a), U("suspend", a), U("seeked", () => !t && e?.play()), g(() => [
		n.currentTime,
		n.buffered,
		e?.getDuration() ?? 0
	], [
		n.currentTime,
		n.buffered,
		e
	]);
}
function ge() {
	let { api: e } = p(H), t = J(), [n, r, i] = Y(), a = g(() => n / i * 100, [n, i]), o = g(() => r / i * 100, [r, i]);
	return /* @__PURE__ */ C("div", {
		className: `player-timeline-layout ${t === 0 ? "hide-time-line" : ""}`,
		onClick: (t) => {
			let n = t.currentTarget.getBoundingClientRect(), r = (t.pageX - n.left) / n.width * (e?.getDuration() ?? 0);
			e?.seekTo(r);
		},
		children: [/* @__PURE__ */ S("div", {
			className: "buffer-line",
			style: { width: `${o}%` }
		}), /* @__PURE__ */ S("div", {
			className: "current-line",
			style: { width: `${a}%` }
		})]
	});
}
//#endregion
//#region src/Player/contraller_bar/time.tsx
function _e() {
	let [e, , t] = Y();
	return /* @__PURE__ */ C("span", {
		className: "video-time-progress",
		children: [
			R(e),
			"/",
			R(t || 0)
		]
	});
}
//#endregion
//#region src/Player/contraller_bar/volume.tsx
function ve({ api: e, style: t }) {
	let [n, r] = v(Math.round((e?.getVolume() ?? 0) * 100)), i = c(), a = e?.muted ? 0 : n;
	return l(() => e?.setVolume(n / 100), [n]), /* @__PURE__ */ S(ie, {
		arrow: !1,
		overlayClassName: "lm-player-volume-popup",
		title: /* @__PURE__ */ S(re, {
			onChange: (t) => {
				e?.muted && e?.unmute(), r(t), i();
			},
			vertical: !0,
			value: n
		}),
		children: /* @__PURE__ */ S(K, {
			style: t,
			type: a === 0 ? "lm-player-volume-close" : "lm-player-volume-open",
			onClick: () => {
				e && (e.muted ? (e.unmute(), r(100)) : (e.mute(), r(0)), i());
			}
		})
	});
}
var X = u.memo(ve);
//#endregion
//#region src/Player/contraller_bar/left_bar.tsx
function ye({ reload: e, leftExtContents: t, leftMidExtContents: n, hideTimeProgress: r, oneFpsPlay: i }) {
	let { api: a, container: o, isLive: s, isFpsPlay: c, event: l } = p(H), [u, d] = v(Date.now()), m = () => d(Date.now());
	U("play", m), U("pause", m), U("volumechange", m);
	let h = o?.querySelector("video"), _ = g(() => h?.paused, [u, h]), y = g(() => _ ? "lm-player-Play_Main" : "lm-player-Pause_Main", [_]), b = g(() => _ ? "播放" : "暂停", [_]), x = f(() => {
		if (h?.paused) {
			let e = a?.getSecondsLoaded() ?? 1;
			a?.seekTo(e - 1), a?.play();
		} else a?.pause();
	}, [h, a]);
	return /* @__PURE__ */ C("div", {
		className: "contraller-left-bar",
		children: [
			t,
			!c && /* @__PURE__ */ S(q, { children: /* @__PURE__ */ S(K, {
				onClick: x,
				type: y,
				title: b
			}) }),
			/* @__PURE__ */ S(q, { children: /* @__PURE__ */ S(X, { api: a }) }),
			!s && !r && /* @__PURE__ */ S(_e, {}),
			/* @__PURE__ */ S(q, { children: /* @__PURE__ */ S(K, {
				onClick: () => {
					l?.emit(F.CLEAR_ERROR_TIMER), l?.emit(F.RELOAD_SUCCESS), e();
				},
				type: "lm-player-Refresh_Main",
				title: "重载"
			}) }),
			!s && i && /* @__PURE__ */ S(q, { children: /* @__PURE__ */ S(K, {
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
function be({ rightExtContents: e, rightMidExtContents: t }) {
	let { container: i } = p(H), [a, { enterFullscreen: o, exitFullscreen: s }] = n(r(i));
	return /* @__PURE__ */ C("div", {
		className: "contraller-right-bar",
		children: [
			t,
			/* @__PURE__ */ S(q, { children: /* @__PURE__ */ S(K, {
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
function xe({ rightExtContents: e, rightMidExtContents: t, visibel: n, leftExtContents: r, leftMidExtContents: i, reload: a, hideTimeProgress: o, oneFpsPlay: s }) {
	return /* @__PURE__ */ S(x, { children: /* @__PURE__ */ C("div", {
		className: `contraller-bar-layout ${n ? "" : "hide-contraller-bar"}`,
		children: [/* @__PURE__ */ S(ye, {
			oneFpsPlay: s,
			hideTimeProgress: o,
			reload: a,
			leftMidExtContents: i,
			leftExtContents: r
		}), /* @__PURE__ */ S(be, {
			rightExtContents: e,
			rightMidExtContents: t
		})]
	}) });
}
//#endregion
//#region src/Player/contraller_bar/contraller_event.tsx
function Se({ children: e }) {
	let { event: n, container: r } = p(H), i = _(), [o, s] = v(!0), c = () => {
		i.current && clearTimeout(i.current), s(!0), n?.emit(F.SHOW_CONTRALLER);
	}, l = () => {
		i.current && clearTimeout(i.current), i.current = setTimeout(() => {
			s(!1), n?.emit(F.HIDE_CONTRALLER);
		}, 3 * 1e3);
	};
	return a(() => l()), t("mouseenter", c, { target: r }), t("mouseleave", l, { target: r }), /* @__PURE__ */ S(x, { children: u.Children.map(e, (e) => u.isValidElement(e) ? u.cloneElement(e, { visibel: o }) : e) });
}
//#endregion
//#region src/Player/empty.tsx
function Z() {
	return /* @__PURE__ */ S(x, {});
}
//#endregion
//#region src/Player/event/errorEvent.tsx
function Ce({ event: e, reload: t, unload: n, errorReloadTimer: r, flv: i, hls: a, errorHandleAdapter: o }) {
	let [s, c] = v(0), l = _(null), u = _(), d = (...e) => {
		e[2] && e[2].msg && e[2].msg.includes("Unsupported audio") || (console.error(...e), l.current = e, o?.(e) || c(s + 1));
	}, f = () => c(0);
	U("error", d, e), U("canplay", () => {
		s > 0 && (console.warn("视频重连成功！"), e?.emit(F.RELOAD_SUCCESS), f());
	}, e), W(F.ERROR, d, e), W(F.CLEAR_ERROR_TIMER, f, e), m(() => {
		i && i.on(y.Events.ERROR, d), a && a.on(b.Events.ERROR, d);
	}, [i, a]), m(() => {
		if (s !== 0) {
			if (s > r) {
				n(), e?.emit(F.RELOAD_FAIL);
				return;
			}
			return console.warn(`视频播放出错，正在进行重连${s}`), u.current = setTimeout(() => {
				e?.emit(F.ERROR_RELOAD, s, ...l.current), t();
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
var we = function(e, t = 0) {
	if (typeof requestAnimationFrame > "u") return { id: setInterval(e, t) };
	let n = (/* @__PURE__ */ new Date()).getTime(), r = { id: 0 }, i = () => {
		(/* @__PURE__ */ new Date()).getTime() - n >= t && (e(), n = (/* @__PURE__ */ new Date()).getTime()), r.id = requestAnimationFrame(i);
	};
	return r.id = requestAnimationFrame(i), r;
};
function Q(e) {
	return typeof cancelAnimationFrame > "u";
}
var Te = function(e) {
	if (Q(e.id)) {
		clearInterval(e.id);
		return;
	}
	cancelAnimationFrame(e.id);
};
function Ee(e, t, n) {
	let i = n?.immediate, a = n?.deps ?? [], o = r(e), s = _();
	return m(() => {
		if (!(!ae(t) || t < 0)) return i && o.current?.(), s.current = we(() => {
			o.current?.();
		}, t), () => {
			s.current && Te(s.current);
		};
	}, [t, ...a]), f(() => {
		s.current && Te(s.current);
	}, []);
}
//#endregion
//#region src/Player/fps_play.tsx
var De = 1 / 30;
function Oe({ api: e, event: t, fpsDelay: n, fps: r }) {
	let [i, a] = v(Date.now()), o = _(null), s = _(), c = g(() => r ? 1 / r : De, [r]);
	return m(() => {
		let r = () => {
			if (!o.current || !t?.video || !e) return;
			let n = t.video;
			n.currentTime = e.getCurrentTime() + c, n.currentTime >= e.getDuration() && (clearInterval(s.current), n.currentTime = 0, t.emit(F.PLAY_ENDED));
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
	]), W(F.CANVAS_PAUSE, () => {
		clearInterval(s.current);
	}), W(F.CANVAS_PLAY, () => {
		a(Date.now());
	}), Ee(() => e?.paused ? null : e?.pause(), 10), /* @__PURE__ */ S("canvas", {
		className: "fps-play-canvas",
		ref: o
	});
}
//#endregion
//#region src/Player/live_heart.tsx
function ke({ api: t, event: n, isLive: r }) {
	let i = e(), a = _(0), s = () => {
		if (!r || i !== "visible" || !t) return;
		let e = t.getCurrentTime() ?? 0, n = t.getSecondsLoaded();
		n - e > 5 && (console.debug(`当前延时过大current->${e} buffered->${n}, 基于视频当前缓存时间更新当前播放时间 updateTime -> ${n - 2}`), t.seekTo(n - 2 > 0 ? n - 2 : 0), t.play());
	};
	l(() => s(), [i]), o(() => a.current = t?.getCurrentTime() ?? 0, 1 * 1e3), o(() => s(), 30 * 1e3), o(() => {
		if (!t || !n) return;
		let e = t.getCurrentTime();
		r && !t.video?.paused && e === a.current && n.emit(F.ERROR, "long time no play！");
	}, 20 * 1e3);
}
//#endregion
//#region src/Player/message.tsx
function Ae() {
	let { api: e } = p(H), [t, n] = v({
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
	U("loadstart", a), U("loadeddata", o), U("canplay", o), W(F.ERROR_RELOAD, s), W(F.RELOAD_FAIL, c), W(F.RELOAD_SUCCESS, l), W(F.RELOAD, () => n((e) => ({
		...e,
		status: "reload",
		loading: !0
	}))), W(F.HISTORY_PLAY_END, () => {
		r.current && clearTimeout(r.current), n((e) => ({
			...e,
			status: null,
			loading: !1
		})), e?.pause();
	}), W(F.CLEAR_ERROR_TIMER, l);
	let { loading: u, status: d } = t;
	return /* @__PURE__ */ C("div", {
		className: `lm-player-message-mask ${u || d === "fail" ? "lm-player-mask-loading-animation" : ""}`,
		children: [/* @__PURE__ */ S(K, {
			type: d === "fail" ? "lm-player-YesorNo_No_Dark" : "lm-player-Loading",
			className: `${u && d !== "fail" ? "lm-player-loading-animation" : d === "fail" ? "lm-player-loadfail" : ""} lm-player-loading-icon`
		}), /* @__PURE__ */ S("span", {
			className: "lm-player-message",
			children: i
		})]
	});
}
//#endregion
//#region src/Player/single_player.tsx
var $ = u.forwardRef(function({ className: e, url: t, type: n, hideContrallerBar: a, isLive: o, errorReloadTimer: c, children: u, onCanPlayerInit: d, extActions: f, ...p }, y) {
	let { autoPlay: b, preload: x, muted: ee, poster: w, playsInline: T, loop: E } = p, { rightExtContents: D, rightMidExtContents: O, leftExtContents: k, leftMidExtContents: te, customTimeLine: A } = p, { flvConfig: j, hlsConfig: ne, videoEvents: re, playerEvents: ie, oneFpsPlay: ae, fpsDelay: M, fps: N } = p, [P, I] = v({
		container: void 0,
		isFpsPlay: !1
	}), [L, { toggle: R }] = s("fill", "contain"), z = g(() => n || se(t), [t, n]), ce = _(null), B = g(() => P.container ? P.container.querySelector("video") ?? void 0 : void 0, [P.container]), V = pe(B);
	me(V, re), he(V, ie);
	let [H, [, fe, U], W] = ue(t, z, o, P.container, j?.mediaDataSource.segments, j, ne), G = g(() => !!t || !!j?.mediaDataSource.segments && z === "flv", [
		t,
		j?.mediaDataSource.segments,
		z
	]), K = r(U), q = r(fe);
	m(() => {
		I((e) => ({
			...e,
			container: ce.current
		}));
	}, []), m(() => {
		V?.emit(F.CLEAR_ERROR_TIMER);
	}, [t]);
	let J = i(() => {
		W();
	}), Y = i(() => oe(B, q.current ?? void 0, K.current ?? void 0)), _e = i(() => {
		I((e) => ({
			...e,
			isFpsPlay: !0
		})), H?.pause();
	}), ve = i(() => {
		I((e) => ({
			...e,
			isFpsPlay: !1
		})), H?.play();
	}), X = g(() => {
		if (H) return le(H, {
			reload: J,
			unload: Y,
			toggleFit: R,
			openFpsPlay: _e,
			closeFpsPlay: ve,
			...f
		});
	}, [H]), ye = g(() => {
		if (V) return le(V);
	}, [V]);
	h(y, () => ({
		video: B,
		container: P.container,
		api: X,
		event: ye,
		plugins: [q.current, K.current],
		fit: L
	}), [
		B,
		P.container,
		X,
		ye,
		L
	]), l(() => H && V && B ? d?.() : void 0, [
		H,
		V,
		B
	]), Ce({
		unload: Y,
		flv: q.current ?? void 0,
		hls: K.current ?? void 0,
		event: V,
		reload: J,
		errorReloadTimer: c
	}), ke({
		api: H,
		event: V,
		isLive: o
	});
	let be = {
		autoPlay: P.isFpsPlay ? !1 : b,
		preload: x,
		muted: P.isFpsPlay ? !1 : ee,
		poster: w,
		controls: !1,
		playsInline: T,
		loop: P.isFpsPlay ? !1 : E
	}, we = {
		rightExtContents: D,
		rightMidExtContents: O,
		leftMidExtContents: te,
		leftExtContents: k,
		reload: p.reload ?? J,
		hideTimeProgress: !!A,
		oneFpsPlay: ae
	}, Q = H && V;
	return /* @__PURE__ */ S(de, {
		api: X,
		event: V,
		container: P.container,
		isLive: o,
		isFpsPlay: P.isFpsPlay,
		children: /* @__PURE__ */ C("div", {
			className: `lm-player-container ${e}`,
			ref: ce,
			children: [
				/* @__PURE__ */ C("div", {
					className: "player-mask-layout",
					children: [/* @__PURE__ */ S("video", {
						...be,
						style: {
							objectFit: L,
							visibility: P.isFpsPlay ? "hidden" : "unset"
						}
					}), Q && G && P.isFpsPlay ? /* @__PURE__ */ S(Oe, {
						fps: N,
						event: V,
						api: X,
						fpsDelay: M
					}) : /* @__PURE__ */ S(Z, {})]
				}),
				S(Q && G ? Ae : Z, {}),
				Q && G && !a ? /* @__PURE__ */ S(Se, { children: /* @__PURE__ */ S(xe, { ...we }) }) : /* @__PURE__ */ S(Z, {}),
				Q ? A || S(a ? Z : ge, {}) : /* @__PURE__ */ S(Z, {}),
				u
			]
		})
	});
});
$.defaultProps = {
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
function je({ end: e, begin: t, left: n, current: r, markTime: i }) {
	return n === -1 ? null : /* @__PURE__ */ C("div", {
		className: "frontend-line-tip-box",
		style: { left: n },
		children: [
			/* @__PURE__ */ S("div", {
				style: { fontWeight: 600 },
				children: "录像信息"
			}),
			/* @__PURE__ */ C("div", { children: ["开始：", M(t).format(z)] }),
			/* @__PURE__ */ C("div", { children: ["结束：", M(e).format(z)] }),
			/* @__PURE__ */ C("div", { children: ["刻度：", M(i).format(z)] }),
			/* @__PURE__ */ C("div", { children: ["当前：", M(r).format(z)] })
		]
	});
}
function Me({ duration: e, begin: t, end: n, onSeek: r }) {
	let [i, a] = v({
		time: 0,
		markTime: 0,
		left: -1,
		visible: !1
	}), o = J(), [s] = Y(), c = g(() => i.time + s, [i.time, s]);
	l(() => a((e) => ({
		...e,
		time: 0
	})), [t]);
	let u = g(() => c / e * 100, [e, c]), f = g(() => t + c * 1e3, [t, c]);
	return /* @__PURE__ */ C("div", {
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
			/* @__PURE__ */ S("div", {
				className: "current-line",
				style: { width: `${u}%` }
			}),
			/* @__PURE__ */ S(je, {
				end: n,
				begin: t,
				left: i.left,
				current: f,
				markTime: i.markTime
			}),
			i.left !== -1 && /* @__PURE__ */ S("span", {
				className: "frontend-line-mark",
				style: { left: i.left }
			})
		]
	});
}
//#endregion
//#region src/Player/frontend_player.tsx
function Ne({ url: e, begin: t, end: n, onSeek: r, forwordRef: a, customTimeLine: o, onCanPlayerInit: s, ...l }) {
	let u = c(), d = _(null), f = a || d, { api: p, event: m } = f.current || {}, h = g(() => (n ?? 0 - (t ?? 0)) / 1e3, [t, n]);
	return /* @__PURE__ */ S($, {
		ref: f,
		url: e,
		reload: i(() => {
			f.current?.event.emit(F.RELOAD), r?.(t), f.current?.api.reload();
		}),
		onCanPlayerInit: i(() => {
			u(), s?.();
		}),
		isLive: !1,
		type: "flv",
		customTimeLine: p && m ? o ?? /* @__PURE__ */ S(Me, {
			end: n ?? 0,
			onSeek: r,
			begin: t ?? 0,
			duration: h
		}) : /* @__PURE__ */ S(x, {}),
		...l
	});
}
//#endregion
//#region src/Player/segment_timeline.tsx
function Pe({ index: e, segments: t, begin: n, current: r, markTime: i }) {
	let { start: a, end: o } = g(() => {
		if (e === 0) {
			let e = n, r = n + (t[0].endTime - t[0].beginTime);
			return {
				start: M(e).format(z),
				end: M(r).format(z)
			};
		}
		let r = n + t.map((e) => e.endTime - e.beginTime).reduce((t, n, r) => r >= e ? t : t + n, 0), i = r + (t[e].endTime - t[e].beginTime);
		return {
			start: M(r).format(z),
			end: M(i).format(z)
		};
	}, [
		e,
		t,
		n
	]), s = g(() => !!t[e]?.url, [e, t]);
	return /* @__PURE__ */ C("div", {
		className: "segment-line-tip-box",
		children: [
			/* @__PURE__ */ S("div", {
				style: { fontWeight: 600 },
				children: "录像片段信息"
			}),
			/* @__PURE__ */ C("div", { children: ["开始：", a] }),
			/* @__PURE__ */ C("div", { children: ["结束：", o] }),
			/* @__PURE__ */ C("div", { children: ["刻度：", M(i).format(z)] }),
			/* @__PURE__ */ C("div", { children: ["当前：", M(r).format(z)] }),
			/* @__PURE__ */ C("div", { children: ["状态：", /* @__PURE__ */ S("span", {
				style: { color: s ? "green" : "red" },
				children: s ? "正常" : "缺失"
			})] })
		]
	});
}
function Fe({ index: e, segments: t, duration: n, begin: r, seekTo: i }) {
	let [a, o] = v({
		time: 0,
		markTime: 0,
		left: -1,
		visible: !1
	}), s = J(), [c, l] = Y(), u = g(() => t.map((e) => (e.endTime - e.beginTime) / 1e3).reduce((t, n, r) => r >= e ? t : t + n, 0), [e, t]), f = g(() => (c + u) / n * 100, [
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
	return /* @__PURE__ */ S("div", {
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
		children: /* @__PURE__ */ C("div", {
			className: "segment-line-box",
			children: [
				t.map((e, i) => /* @__PURE__ */ S(ie, {
					title: /* @__PURE__ */ S(Pe, {
						segments: t,
						index: i,
						begin: r,
						current: c * 1e3 + r,
						markTime: a.markTime
					}),
					children: /* @__PURE__ */ S("div", {
						className: `segment-line-item ${e.url ? "" : "segment-line-item-none"} ${i === t.length - 1 ? "last-segment-line-item" : ""}`,
						onClick: (e) => m(e, i),
						style: { width: `${(e.endTime / 1e3 - e.beginTime / 1e3) / n * 100}%` }
					})
				}, `time-line-${i}`)),
				/* @__PURE__ */ S("div", {
					className: "buffer-line",
					style: { width: `${p}%` }
				}),
				/* @__PURE__ */ S("div", {
					className: "current-line",
					style: { width: `${f}%` }
				}),
				a.left !== -1 && /* @__PURE__ */ S("span", {
					className: "segment-line-mark",
					style: { left: a.left }
				})
			]
		})
	});
}
//#endregion
//#region src/Player/segment_player.tsx
function Ie(e, t = 0) {
	if (!(Array.isArray(e) && e.length > 0) || e[t].url) return t;
	{
		let n = t + 1;
		return n > e.length ? n : Ie(e, n);
	}
}
function Le(e, t, n = 0) {
	let [r, i] = v({ index: Ie(t ?? [], n) });
	m(() => {
		let e = Ie(t ?? [], 0);
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
	return U("ended", a, e), W(F.PLAY_ENDED, a, e), {
		index: r.index,
		setIndex: (e) => i((t) => ({
			...t,
			index: e
		}))
	};
}
function Re({ segments: e, begin: t, forwordRef: n, defaultIndex: i, onCanPlayerInit: a, customTimeLine: o, ...s }) {
	let [l, u] = v({ seekTime: 0 }), d = r(e), p = c(), h = _(null), y = n || h, { api: b, event: C } = y.current || {}, ee = g(() => e?.map((e) => (e.endTime - e.beginTime) / 1e3).reduce((e, t) => e + t, 0), [e]), { index: w, setIndex: T } = Le(C, e, i), E = g(() => e?.[w] ? e[w].url : void 0, [e, w]), D = () => {
		let [, e] = y.current?.plugins ?? [];
		e && (e.swapAudioCodec(), e.recoverMediaError()), y.current?.event.emit(F.RELOAD), y.current?.event.emit(F.CLEAR_ERROR_TIMER), T(0), y.current?.api.reload();
	}, O = (e) => {
		let t = d.current ?? [], n = t.findIndex((t) => e >= t.beginTime && e < t.endTime);
		if (n === -1) return;
		let [, r] = y.current?.plugins ?? [];
		r && (r.swapAudioCodec(), r.recoverMediaError());
		let i = e - t[n]?.beginTime;
		T(n), u((e) => ({
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
	let k = b && C, te = o ?? /* @__PURE__ */ S(Fe, {
		begin: t ?? 0,
		seekTo: O,
		index: w,
		segments: e ?? [],
		duration: ee ?? 0
	});
	return /* @__PURE__ */ S($, {
		ref: y,
		url: E,
		isLive: !1,
		onCanPlayerInit: f(() => {
			p(), a?.();
		}, []),
		reload: D,
		extActions: {
			setIndex: T,
			seekTo: O
		},
		customTimeLine: k ? te : /* @__PURE__ */ S(x, {}),
		...s
	});
}
//#endregion
//#region src/index.tsx
var ze = $, Be = Re, Ve = Ne;
//#endregion
export { Ve as FrontendPlayer, Be as HistoryPlayer, ze as Player, ze as default };

//# sourceMappingURL=index.js.map