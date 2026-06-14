# Frontend Architecture

This document defines frontend conventions for Conqueria Caps.

## Stack

- React
- Vite
- TypeScript
- Redux
- Pixi.js for game rendering
- Tailwind or existing styling utilities where already established

## Responsibilities

The frontend owns:

- game map rendering
- gameplay controls
- lobby and settings UI
- authentication screens
- profile and leaderboard screens
- chat UI where allowed
- cosmetic presentation
- user feedback, loading, and error states

The frontend does not own official competitive outcomes.

## Authority Boundary

Submit player intent to the backend and render backend-confirmed state.

Do not calculate official:

- money balances
- attack results
- city capture
- building completion
- player elimination
- ranking
- entitlement enforcement

Frontend calculations may be used for previews, validation hints, and UX responsiveness, but backend responses must be treated as final.

## Pixi And React Split

Use Pixi.js for the interactive game scene:

- map
- territories
- paths
- outposts
- cities
- units and buildings
- selection overlays
- fog-of-war visuals

Use React for surrounding application UI:

- navigation
- action panels
- resource counters
- modals
- lobby screens
- chat
- forms
- settings

Keep the data boundary explicit. React state should feed Pixi scene state through clear props, hooks, or service adapters rather than hidden global mutations.

## Services

Keep backend communication in service modules or established API abstractions. WebSocket handlers should normalize incoming events before UI components consume them.

Expected service categories:

- REST API client
- auth/session handling
- WebSocket connection and event dispatch
- game state fetch and mutation calls
- simulation preview calls, if supported by backend

## State

Use Redux or existing state patterns for shared application state:

- authenticated user
- lobby state
- current game state
- selected territory/outpost/building
- UI mode, such as generate, fortify, or attack

Keep transient Pixi-only details local to the scene when they do not need to affect React UI.

## UX Rules

- The first gameplay screen should be usable, not a marketing page.
- Controls should be compact and tactical.
- Use clear affordances for generate, fortify, and attack modes.
- Show ownership, turn state, available money, and action validity clearly.
- Avoid hiding backend rejection reasons behind generic errors.
- Keep map interactions readable on desktop and mobile.

## Art Direction

Gameplay visuals should follow the shared art direction:

- bold semi-cartoon military strategy style
- saturated colors
- readable silhouettes
- clear air versus ground distinctions
- civilization cosmetics that do not reduce gameplay clarity

## Verification

For frontend work, use the narrowest relevant check first:

- TypeScript/build checks for structural changes.
- Unit/component tests where available.
- Manual browser verification for layout and Pixi rendering changes.

For Pixi work, verify that the canvas is nonblank, correctly sized, and not covered by UI.
