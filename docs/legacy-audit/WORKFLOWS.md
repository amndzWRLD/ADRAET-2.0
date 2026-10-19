# Workflow reconstruction

## Summary of workflow status

| Workflow | Status | Evidence |
| --- | --- | --- |
| Registration | IMPLEMENTED | `../../adraet/php/register.php` inserts into `users` table |
| Login | IMPLEMENTED | `../../adraet/php/login_user.php` checks credentials and starts a session |
| Dashboard access | PARTIAL | Redirect exists but no server-side enforcement was found |
| Task creation | IMPLEMENTED (browser-only) | `../../adraet/todolist/todo_script.js` with localStorage |
| Calendar/scheduling | NOT_FOUND | No implementation in source |
| Contact/customer management | NOT_FOUND | No backend or UI beyond static text |
| Inventory/product management | NOT_FOUND | No code found |
| Raw materials and costs | NOT_FOUND | No code found |
| Analytics/financial reporting | UI_ONLY | Static dashboard labels and cards, no data layer |

## 1) User registration

### Entry point
`../../adraet/php/login.php` contains a registration form.

### User action
A user submits `nombre`, `apellido`, `username`, `correo`, `telefono`, and `contrasena`.

### Frontend
The browser posts to `register.php` using a normal HTML form submission.

### Backend behavior
`../../adraet/php/register.php`:

- connects to MySQL,
- verifies duplicate `correo`,
- verifies duplicate `username`,
- inserts a row into `users` with `INSERT INTO users(...) VALUES(...)`.

### Persistence
This writes to the `users` table in the MariaDB database.

### Error handling
The script shows browser alerts for duplicate email, duplicate username, or failed insert.

### Final status
Implemented, with raw SQL and no prepared statements.

## 2) User login

### Entry point
`../../adraet/php/login.php`

### User action
The user enters a username and password and submits the form.

### Backend behavior
`../../adraet/php/login_user.php`:

- reads `$_POST['username']` and `$_POST['contrasena']`
- runs `SELECT * FROM users WHERE username='$username' AND contrasena='$contrasena'`
- if a row matches, sets `$_SESSION['usuario'] = $username`
- redirects to `../prueba/ADRAET Dashboard Panel.html`

### Result
Successful login returns the user to the dashboard page.

### Error handling
If no rows match, the script displays `Usuario o contraseña incorrectos.`

### Final status
Implemented but not secure by modern standards.

## 3) Authentication success and failure

Success is driven purely by matching credentials in the `users` table. Failure is simply a no-row result. The code does not use hashing, rate limiting, or account lockouts.

## 4) Dashboard access

### Entry point
`../../adraet/prueba/ADRAET Dashboard Panel.html`

### Implementation status
This page is linked after successful login but no server-side guard is present. There is no `session_start()` or `$_SESSION` validation in the dashboard HTML or any PHP controller.

### Result
Dashboard access is effectively based on navigation, not enforced access control.

### Final status
PARTIAL: the redirect exists, but authorization enforcement cannot be verified.

## 5) Navigation between pages

Navigation is basic HTML linking and browser form submission.

- Login/register page toggles forms via `../../adraet/js/login_script.js`
- Dashboard menu includes static items such as “Calendario”, “Contactos”, “Tareas”, and “Financiero”
- The task page is linked from the dashboard: `../todolist/todo.html`

No CMS, router, or backend route map exists.

## 6) Task creation, completion, deletion

### Entry point
`../../adraet/todolist/todo.html`

### Frontend behavior
`../../adraet/todolist/todo_script.js`:

- adds items to the list,
- toggles a `checked` class,
- removes the item on delete,
- persists the list to `localStorage` via `saveData()`.

### Persistence mechanism
`localStorage` stores the list HTML as a string under the key `data`.

### Final status
IMPLEMENTED for a browser-local task list; not connected to the PHP/MySQL backend.

## 7) Calendar, customer, inventory, raw-materials, and analytics workflows

These are not implemented in source code.

The dashboard file contains menu labels and sample cards, but there are no:

- PHP endpoints,
- data models,
- database tables,
- queries,
- routes,
- or scripts handling those domains.

### Final status
UI_ONLY for analytics and dashboard content; NOT_FOUND for real business workflows.

## 8) Overall functional assessment

The application demonstrates a workable login/registration path and a static dashboard mockup. It does not include a complete operational business workflow beyond account creation and a local task list.
