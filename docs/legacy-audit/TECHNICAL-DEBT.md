# Technical debt and modernization signals

## Observed debt categories

### 1) Tight coupling and mixed responsibilities

- Database configuration is embedded directly in page logic and backend scripts.
- Browser and PHP logic are loosely connected but not organized into a clean service boundary.
- There is no application-layer separation between HTTP handling, validation, and persistence.

### 2) Duplicate logic and stale files

- `../../adraet/js/login_script.js` and `../../adraet/js/script.js` are near duplicates of the same behavior.
- The project contains static mockup elements and a dashboard that looks more like a prototype than a working app.

### 3) Business rules in UI code

- The static dashboard contains labels and fake metrics like purchases, returns, visitors, and job listings, but no code generates these values.
- The task UI is local to the browser and is not connected to a data store or user identity.

### 4) Missing validation boundaries

- Registration accepts raw inputs without server-side validation for length, type, email format, or phone format.
- Login checks only a raw string comparison against the database row.

### 5) No test or quality controls

- No automated tests or test harness were found in the workspace.
- No package manifest or build pipeline was discovered.

## Frontend findings

The frontend contains a mix of design prototype and functional interactions:

- `../../adraet/php/login.php` is a valid login/registration form page.
- `../../adraet/js/login_script.js` changes form visibility inside the page.
- `../../adraet/todolist/todo_script.js` provides a working browser-local to-do list.
- `../../adraet/prueba/ADRAET Dashboard Panel.html` is a highly styled static dashboard that appears to be design-focused rather than data-driven.

This is best understood as a visual prototype with a narrow amount of working backend logic.

## Architectural debt by category

| Type | Assessment |
| --- | --- |
| Defect | Direct SQL concatenation, plaintext passwords, missing auth checks |
| Security weakness | SQL injection, password exposure, no CSRF, hardcoded credentials |
| Architectural debt | No separation of concerns, no validation layer, no app routing, duplicated JS |
| Missing feature | Real business modules are absent |
| Modernization opportunity | Frontend can be redesigned around React + TypeScript; backend can be modularized |

## Modernization implications

The codebase has enough structure to preserve the user account workflow and a few UI concepts, but the dashboard and most business flows are not concrete enough to safely carry forward without redesign.

## Recommendation

The best migration strategy is not a blind rewrite. It is to:

- preserve the user-account model and business intent,
- discard static mockup screens,
- redesign the domain model around real entities,
- build a proper API boundary,
- and validate the data model against actual business requirements.

## Assessment

The project is not a stable production application. It is a demonstration prototype requiring domain clarification and a clean re-architecture before it can be treated as a modern application foundation.
