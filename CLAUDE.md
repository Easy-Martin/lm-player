# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

```sh
bun build        # library build (vite --mode lib → bundled ESM to es/)
bun dev          # library watch mode (vite --mode lib --watch)
bun demo:dev     # vite dev server for demo app
bun demo:build   # vite build for demo → dist/
bun demo:deploy  # gh-pages deploy from dist/
pnpm build       # pnpm equivalent (only-allow bun is enforced in preinstall)
```

- **Library build** (`bun build`): Vite library mode bundles `src/index.tsx` → `es/index.js` (ESM). Type declarations via `vite-plugin-dts` (bundled, excludes `src/demo/`). External deps: react, react-dom, antd, hls.js, mpegts.js, dayjs, ahooks, lodash-es, @remixicon/react.
- **Demo dev** (`bun demo:dev`): Vite dev server with proxy config (`/api`, `/doc`, `/view` → `http://127.0.0.1:18080`), base path `https://easy-martin.github.io/lm-player`.
- **No test framework** configured. No test runner in dependencies.
- **ESLint**: `eslint` with `@typescript-eslint/parser`, `react/recommended`, `react-hooks/recommended`
- **Prettier**: Single quotes, trailing commas, 200 print width, organize-imports plugin
- **Code styling**: 2-space indent, LF line endings, UTF-8

## Type System

- `src/Player/player.d.ts` — single source of truth for all player props (`ISinglePlayerProps`, `IFrontendPlayerProps`, `ISegmentPlayerProps`) and types (`ExportPlayerType`, `ISegmentType`, `CustomEvent`, `EventInfo`, `FlvPlayerConfig`)
- `src/index.d.ts` — top-level module declarations for external consumers
- `src/utils.d.ts` — type declarations for utils module
- `typings/global.d.ts` — global type augmentations

## Project Overview

A React video player component library wrapping [mpegts.js](https://github.com/xqq/mpegts.js) (FLV) and [hls.js](https://github.com/video-dev/hls.js) (HLS), with canvas-based frame-by-frame playback support.

## Architecture

### Exports (`src/index.tsx`)

- **`Player`** (aliased from `SinglePlayer`) — Main video player for live/on-demand FLV, HLS, or native `<video>` sources
- **`HistoryPlayer`** (aliased from `SegmentPlayer`) — Cloud recording player that chains multiple video segments with timeline navigation
- **`FrontendPlayer`** (from `frontend_player`) — Frontend recording player with begin/end time range and seek callback

### Component Hierarchy

```
SinglePlayer (src/Player/single_player.tsx)
├── Provider (React Context — shares api, event, container, isLive, isFpsPlay)
├── <video> element
├── FPSPlay (canvas-based frame-by-frame playback overlay)
├── ContrallerBar (UI: play/pause, volume, time display, fullscreen, extension slots)
│   └── ContrallerEvent (handles show/hide mouse-enter/mouse-leave behavior)
├── Timeline / SegmentTimeLine / FrontendTimeLine
└── VideoMessage (overlay messages/errors)

SegmentPlayer (src/Player/segment_player.tsx)
└── Wraps SinglePlayer, manages segment index and seek across segments

FrontendPlayer (src/Player/frontend_player.tsx)
└── Wraps SinglePlayer, manages begin/end range
```

### Key Modules

| Module | Role |
|---|---|
| `src/Player/api/index.ts` | `Api` class wrapping `<video>` element (play, pause, seek, volume, screenshot, PiP, playback rate). `usePlayerApi` hook manages mpegts.js (FLV) and hls.js player lifecycle. |
| `src/Player/event/index.ts` | `VideoEventInstance` class — custom pub/sub event system (on/off/emit) plus native `addEventListener` on `<video>`. Hooks: `useVideoEvent`, `useRegisterPlayerEvent`, `useVideoEvents`, `useRegisterPlayerEvents`. |
| `src/Player/event/eventName.ts` | Event name constants (RELOAD, ERROR, SEEK, CANVAS_PLAY/PAUSE, etc.) |
| `src/Player/event/errorEvent.tsx` | Error recovery logic with retry count and auto-reload |
| `src/Player/context.tsx` | React Context + Provider for sharing api, event, container, isLive, isFpsPlay |
| `src/Player/util.ts` | `createFlvPlayer`, `createHlsPlayer`, `playUnload`, `playReload`, `getVideoType`, `createProxy`, `timeStamp` |
| `src/Player/live_heart.tsx` | Live stream buffer catch-up heartbeat |
| `src/Player/fps_play.tsx` | Canvas-based frame-by-frame playback (drawImage per frame) |
| `src/Player/iconfont.tsx` | Icon component mapping `@remixicon/react` icons to `lm-player-*` class names |
| `src/Player/contraller_bar/` | Controller bar sub-components (bar, left_bar, right_bar, time, volume, useBarStatus) |
| `src/Player/message.tsx` | Overlay messages (loading spinner, error state). `NoSource` sub-component for empty source state. |
| `src/Player/empty.tsx` | Null placeholder component for conditional rendering branches |
| `src/useRafInterval/index.tsx` | `requestAnimationFrame`-based interval hook with Node.js fallback |
| `src/nextTick/index.ts` | `Promise.resolve().then()` based nextTick utility |
| `src/likeGo/index.ts` | Async retry/debounce utility |
| `src/useSimpleState/index.tsx` | Simplified state hook wrapping ahooks |

### Player Types

- **`type`** prop: `'flv'` | `'hls'` | `'native'` (auto-detected from URL if not specified)
- **`isLive`**: When true, enables live heartbeat buffer management; default is `true`
- **`oneFpsPlay`** + **`fpsDelay`**: Enables canvas-based frame-by-frame playback mode
- **`ISegmentType`**: `{ url, beginTime, endTime }` used by HistoryPlayer
- **`ExportPlayerType`**: Ref type exposing `{ video, container, api, event, plugins, fit, setIndex, seekTo, reload }`

### Props Extension Slots

The controller bar has 4 extension points for injecting custom React nodes:
- `leftExtContents` / `leftMidExtContents` — left side of controller
- `rightExtContents` / `rightMidExtContents` — right side of controller
- `customTimeLine` — replace the default timeline component entirely

### Styling

- Less files in `src/Player/style/`: `index.less` (root container), `bar.less` (controller bar), `volume.less` (volume popup), `timeline.less`, `slider.less`, `message.less`
- CSS variables: `--primary` (accent color, fallback `#1890ff`), `--gray1` (handle border, fallback `#fff`)
- Ant Design classes used in volume popup: `.ant-tooltip-inner`, `.ant-slider-vertical`, `.ant-slider-track`, `.ant-slider-handle`

### Vite Config

- **Library mode** (`--mode lib`): builds ESM to `es/`, externalizes all peer deps, bundles type declarations
- **Demo mode** (default): builds to `dist/`, deploys to GitHub Pages at `easy-martin.github.io/lm-player`
