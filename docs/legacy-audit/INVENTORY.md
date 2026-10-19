# Inventory and project discovery

## Workspace structure

The workspace root contains a single application directory: `../adraet`.

| Area | Path | Notes |
| --- | --- | --- |
| Core app | `../../adraet` | Main project folder |
| PHP handlers | `../../adraet/php` | Auth logic and DB connection |
| Frontend CSS | `../../adraet/css` | Login page styling |
| JS | `../../adraet/js` | Form toggle behavior |
| Dashboard page | `../../adraet/prueba` | Static HTML dashboard prototype |
| Todo app | `../../adraet/todolist` | Local task list |
| Media assets | `../../adraet/imagenes` | Background and icons |
| SQL schema | `../../adraet/users.sql` | Single table schema and seed data |

## File inventory

| Path | Type | Apparent responsibility | Evidence | Status |
| --- | --- | --- | --- | --- |
| `../../adraet/php/conexion.php` | PHP | DB credentials and connection config | `mysqli_connect($db_host, $db_usuario, $db_contra, $db_nombre)` | Confirmed |
| `../../adraet/php/login.php` | HTML/PHP | Login page markup and forms | POST form to `login_user.php`, register form to `register.php` | Confirmed |
| `../../adraet/php/login_user.php` | PHP | Login validation | Session creation and redirect to dashboard | Confirmed |
| `../../adraet/php/register.php` | PHP | Registration flow | Checks duplicates, inserts into `users` | Confirmed |
| `../../adraet/js/login_script.js` | JavaScript | Switch login/register form states | DOM toggle logic with `show_register` and `show_login` | Confirmed |
| `../../adraet/js/script.js` | JavaScript | Duplicate of login script | Same behavior as login_script.js | Likely obsolete duplicate |
| `../../adraet/css/estilos.css` | CSS | Login forms and page layout | Background image and form styling | Confirmed |
| `../../adraet/css/estilomodal.css` | CSS | Extra modal-related styling | Minimal, not clearly active | Unclear |
| `../../adraet/prueba/ADRAET Dashboard Panel.html` | HTML | Dashboard prototype | Static cards and navigation items | Confirmed UI only |
| `../../adraet/prueba/styleDashboard.css` | CSS | Dashboard layout | Visual prototype styles | Confirmed |
| `../../adraet/todolist/todo.html` | HTML | Task list page | `input-box`, list container, button | Confirmed |
| `../../adraet/todolist/todo_script.js` | JavaScript | Task persistence in localStorage | `localStorage.setItem("data", ...)` | Confirmed |
| `../../adraet/todolist/todo_estilos.css` | CSS | Task-list styling | Basic styling | Confirmed |
| `../../adraet/users.sql` | SQL | `users` table schema and sample rows | `CREATE TABLE users` and inserts | Confirmed |

## Duplicate or stale files

The repository has a clear duplication pattern:

- `../../adraet/js/login_script.js` and `../../adraet/js/script.js` are functionally identical.
- The dashboard HTML is static and uses labels such as “Calendario”, “Contactos”, “Tareas”, “Ecommerce”, and “Mailbox”, but there are no corresponding handlers or database-backed pages in the workspace.
- `../../adraet/css/estilomodal.css` appears not to be referenced by the inspected HTML pages.

## Dependency and runtime assumptions

The code assumes:

- A PHP-enabled web server and MySQL/MariaDB (XAMPP-like environment)
- A `root` database user with an empty password
- A database named `adraet database` (with a space in the name)
- A `users` table named exactly as created in the SQL dump

## Missing or unconfirmed files

The following conceptual modules are suggested by the dashboard labels but are not evidenced in code:

- Calendar/scheduling module
- Contact/customer management
- Inventory and product registration
- Raw materials and costs
- Employee records
- Analytics/report generation
- Authentication enforcement beyond the login page flow

## Assessment

Confidence: HIGH. The source tree is small and the files are straightforward to trace. The application is not a large platform; it is a prototype or educational demo with a thin server layer and strong visual mockup elements.
