# Migration strategy and stack trade-offs

## Current reality

The repository does not contain a complete business application. It contains an authentication skeleton, a static dashboard prototype, and a local task list. That means a future migration should focus on preserving the legitimate business intent while rebuilding the architecture around reliable domain boundaries.

## Stack trade-offs

### Frontend: React + Vite + TypeScript

Benefits:

- better component reuse,
- predictable state management,
- easier UI testing,
- strong developer ergonomics.

Trade-offs:

- requires a guided redesign of the UI, because the current dashboard is mostly static mockup content,
- not all legacy screens are worth preserving as-is.

### Backend: Node.js with modular API

Benefits:

- modern HTTP API design,
- structured validation and auth layers,
- easier unit and integration testing,
- better long-term maintenance than a flat PHP script set.

Trade-offs:

- requires re-implementing user auth and domain models,
- not all existing logic is worth porting blindly.

### Backend alternative: Supabase-managed capabilities

Benefits:

- quick authentication and database primitives,
- lower operational burden,
- row-level security and managed Postgres.

Trade-offs:

- requires aligning to a platform model rather than a custom PHP/MySQL design,
- may be overkill for a small educational prototype unless product scope expands.

### Database: PostgreSQL

Benefits:

- strong data integrity,
- mature relational model,
- better support for relational constraints and modern tooling.

Trade-offs:

- requires schema normalization and domain modeling,
- current project has only a small single-table schema and no rich domain model yet.

## Recommended modernization sequence

1. Define the real business domains
   - User accounts
   - Business data and roles
   - Work items or tasks
   - future modules only after confirming requirements

2. Preserve useful parts of the legacy app
   - login flow concept
   - dashboard structure and UX intent
   - task concept if it remains a business requirement

3. Replace the DB layer intentionally
   - create a new PostgreSQL schema,
   - add constraints and validation,
   - avoid copying the existing plaintext password model.

4. Rebuild the backend as a modular API
   - auth endpoints
   - validation layer
   - service layer
   - persistence layer

5. Rebuild the frontend around real component boundaries
   - auth screens
   - dashboard shell
   - task management modules
   - only after API contracts are defined

## Migration risks

- Carrying forward mockup screens as if they are real product features
- Preserving insecure login behavior under the guise of compatibility
- Rewriting before domain requirements are validated
- Lost context around intended business workflows that were never formally implemented

## Acceptance criteria for phase 2

- secure password hashing enabled,
- protected routes enforced server-side,
- database schema uses constraints and proper types,
- tasks are stored in a real backend service,
- auth system includes session or token verification,
- no static dashboard page is treated as a source of truth for final product behavior.

## Final note

The safest path is not a blind rewrite but a careful deconstruction of what is real, what is mockup, and which flows are legitimate product requirements.
