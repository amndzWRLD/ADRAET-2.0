# ADRAET Legacy Audit

## Executive summary

Based on static source inspection, ADRAET is best described as a small, early PHP + MySQL prototype rather than a complete business-management system. The repository contains a login/registration screen, a static dashboard mockup, and a local to-do page. The only confirmed backend functionality is user account creation and direct username/password validation against a MariaDB table named `users`.

The application is implemented as a traditional multi-page PHP app served from a local XAMPP-style environment. Browser forms submit to PHP scripts under `../php`, which connect to a MySQL/MariaDB database and write or read data. The dashboard page is mostly static HTML/CSS with no server-side data binding or authenticated access checks in the codebase.

## Scope and methodology

This audit reviewed the source tree under `../adraet` and examined:

- Source structure and file inventory
- PHP request flow and authentication logic
- Database schema and SQL queries
- Browser-side JavaScript and page navigation
- Security-relevant implementation details
- Missing or partial features versus their conceptual scope

The analysis was read-only and based on static evidence. No application services or databases were started, modified, or queried live.

## Audit limitations

- The workspace appears to be a partial project snapshot rather than a full product repository.
- No test suite, deployment config, or API layer was found.
- No evidence was found for calendar, customer, inventory, material, payroll, or financial modules beyond static dashboard labels.
- The SQL dump contains real sample user records; they were not copied into this report to avoid exposing personal data.

## Source evidence and key files

- Authentication entry page: `../../adraet/php/login.php`
- Login handler: `../../adraet/php/login_user.php`
- Registration handler: `../../adraet/php/register.php`
- DB config: `../../adraet/php/conexion.php`
- Schema dump: `../../adraet/users.sql`
- Static dashboard: `../../adraet/prueba/ADRAET Dashboard Panel.html`
- To-do page: `../../adraet/todolist/todo.html`
- To-do logic: `../../adraet/todolist/todo_script.js`

## Conclusions

- Confirmed implemented workflows: user registration, user login, dashboard page access for a valid session, and a browser-only task list.
- Partial or UI-only workflows: dashboard modules, calendar, contacts, and analytics are present visually but not backed by real data or backend handlers.
- Missing or not found: inventory, raw materials, customer records, employee records, and financial systems are not implemented in the inspected code.

## Report index

- [INVENTORY.md](INVENTORY.md)
- [ARCHITECTURE.md](ARCHITECTURE.md)
- [DATABASE.md](DATABASE.md)
- [WORKFLOWS.md](WORKFLOWS.md)
- [SECURITY.md](SECURITY.md)
- [TECHNICAL-DEBT.md](TECHNICAL-DEBT.md)
- [MIGRATION-STRATEGY.md](MIGRATION-STRATEGY.md)
- [VALIDATION-CHECKLIST.md](VALIDATION-CHECKLIST.md)

## Overall assessment

ADRAET is a historically interesting educational prototype whose strongest implemented component is a password-based login flow using raw SQL and a single `users` table. It should be treated as a legacy application with a small amount of working backend functionality and a much larger amount of static UI mockup content.
