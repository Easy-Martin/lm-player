# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

```sh
pnpm build       # library build (vite --mode lib → bundled ESM to es/)
pnpm dev         # library watch mode (vite --mode lib --watch)
pnpm demo:dev    # vite dev server for demo app
pnpm demo:build  # vite build for demo → dist/
pnpm demo:deploy # gh-pages deploy from dist/
```

- **Library build**: `pnpm build` — uses [Vite](https://vitejs.dev/) library mode to bundle `src/` → `es/index.js` (ESM) with type declarations via `vite-plugin-dts`
- **Demo dev**: `pnpm demo:dev` — vite dev server with proxy config (`/api`, `/doc`, `/view` → `http://127.0.0.1:18080`)
- **No test framework** is configured. No test runner in dependencies.
- **ESLint**: `eslint` with `@typescript-eslint/parser`, `react/recommended`, `react-hooks/recommended`
- **Prettier**: Single quotes, trailing commas, 200 print width, organize-imports plugin
- **Code styling**: 2-space indent, LF line endings, UTF-8

## Project Overview

A React video player component library wrapping [mpegts.js](https://github.com/xqq/mpegts.js) (FLV) and [hls.js](https://github.com/video-dev/hls.js) (HLS), with canvas-based frame-by-frame playback support.

## Architecture

### Exported Components (src/index.tsx)

- **`Player`** (aliased from `SinglePlayer`) — Main video player for live/on-demand FLV, HLS, or native `<video>` sources
- **`HistoryPlayer`** (aliased from `SegmentPlayer`) — Cloud recording player that chains multiple video segments with timeline navigation
- **`FrontendPlayer`** — Frontend recording player with a _begin/end_ time range and seek callback

### Component Hierarchy

```
SinglePlayer (src/Player/single_player.tsx)
├── Provider (React Context — shares api, event, container, isLive, isFpsPlay)
├── <video> element
├── FPSPlay (canvas-based frame-by-frame playback overlay)
├── ContrallerBar (UI: play/pause, volume, time display, fullscreen, extension slots)
│   └── ContrallerEvent (handles show/hide behavior)
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
| `src/Player/api/index.ts` | `Api` class wrapping `<video>` element (play, pause, seek, volume, screenshot, PiP, playback rate). `usePlayerApi` hook manages FLV/HLS player lifecycle. |
| `src/Player/event/index.ts` | `VideoEventInstance` class — custom pub/sub event system (on/off/emit) plus native `addEventListener` on `<video>`. Hooks: `useVideoEvent`, `useRegisterPlayerEvent`, `useVideoEvents`. |
| `src/Player/event/eventName.ts` | Event name constants (RELOAD, ERROR, SEEK, CANVAS_PLAY/PAUSE, etc.) |
| `src/Player/context.tsx` | React Context + Provider for sharing api, event, isLive, isFpsPlay |
| `src/Player/util.ts` | `createFlvPlayer`, `createHlsPlayer`, `playUnload`, `playReload`, `getVideoType`, `createProxy`, `timeStamp` |
| `src/Player/errorEvent.tsx` | Error recovery logic with retry count |
| `src/Player/live_heart.tsx` | Live stream buffer catch-up heartbeat |
| `src/Player/fps_play.tsx` | Canvas-based frame-by-frame playback |
| `src/Player/contraller_bar/` | Controller bar sub-components (bar, left_bar, right_bar, time, volume, useBarStatus) |

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

### Type System

- `src/Player/player.d.ts` — single source of truth for all TypeScript types/interfaces
- `src/index.d.ts` — top-level module declarations
- `src/utils.d.ts` — type declarations for utils module
