# Conqueria Caps Frontend Guidance

This repository contains the React/Vite/Pixi frontend for Conqueria Caps.

## Canonical Context

In this workspace, shared game rules live in the backend repository:

- `../conqueria-caps_backend/docs/AI_CONTEXT.md`
- `../conqueria-caps_backend/docs/GAME_DESIGN.md`
- `../conqueria-caps_backend/docs/COMBAT_SIMULATION_SPEC.md`
- `../conqueria-caps_backend/docs/F2P_FAIRNESS.md`
- `../conqueria-caps_backend/docs/ART_DIRECTION.md`

Frontend-specific architecture guidance lives in:

- `docs/FRONTEND_ARCHITECTURE.md`

Read those docs before implementing gameplay UI. If this frontend repository is cloned without the backend docs, ask for the missing project context before changing core gameplay behavior.

## Frontend Responsibilities

- Render the game map, territories, paths, outposts, cities, units, and buildings.
- Collect player intent through clear UI controls.
- Submit official actions to the backend.
- Display backend-confirmed game state and outcomes.
- Use WebSockets for real-time updates from the backend.
- Keep gameplay readable across supported screen sizes.

## Authority Boundary

The frontend must not decide official competitive outcomes.

Do not make the frontend authoritative for:

- money balances
- turn validity
- construction completion
- attack results
- city capture
- player elimination
- ranking
- premium entitlement enforcement

Frontend previews are allowed, but they must be presented as previews and reconciled with backend results.

## Technical Conventions

- Preserve the existing React, Vite, TypeScript, Redux, services, and route structure unless a task explicitly changes architecture.
- Keep API calls in service modules or established API abstractions.
- Keep reusable UI in common components when it is genuinely shared.
- Prefer Pixi.js for game-scene rendering and React for surrounding interface and controls.
- Keep visible gameplay controls compact, readable, and responsive.

## Testing And Verification

- Run the narrowest relevant frontend tests or build checks for the touched area.
- For Pixi/game rendering changes, verify that the scene is not blank and that controls do not overlap at desktop and mobile sizes.
- For gameplay UI changes, verify the backend contract instead of duplicating backend rules silently.

## AI Work Rules

- Do not invent missing gameplay rules in frontend code.
- Keep visual changes aligned with the art direction.
- Do not refactor unrelated UI while implementing a feature.
- Report files changed and verification performed at the end of each task.
