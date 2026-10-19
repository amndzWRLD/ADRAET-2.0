# Security review

## Summary

The application contains several material security weaknesses. The most important issues are direct SQL concatenation, plaintext password storage, lack of server-side authorization, and reliance on browser-only UI state.

## Findings

| ID | Title | Severity | Confidence |
| --- | --- | --- | --- |
| ADRAET-SEC-01 | SQL injection via string-concatenated queries | CRITICAL | HIGH |
| ADRAET-SEC-02 | Plaintext password storage and comparison | CRITICAL | HIGH |
| ADRAET-SEC-03 | Missing server-side authorization and session validation | HIGH | HIGH |
| ADRAET-SEC-04 | No CSRF protection on forms | HIGH | MEDIUM |
| ADRAET-SEC-05 | Hardcoded database credentials and local config | MEDIUM | HIGH |
| ADRAET-SEC-06 | User enumeration and weak duplicate handling | LOW | MEDIUM |
| ADRAET-SEC-07 | Browser-only local task persistence | INFORMATIONAL | HIGH |

## ADRAET-SEC-01 — SQL injection via string-concatenated queries

- Severity: CRITICAL
- Confidence: HIGH
- Affected files: `../../adraet/php/login_user.php`, `../../adraet/php/register.php`
- Evidence: The queries directly interpolate `$_POST` values into SQL strings.

Examples observed:

- `SELECT * FROM users WHERE username='$username' AND contrasena='$contrasena'`
- `SELECT * FROM users WHERE correo='$correo'`
- `SELECT * FROM users WHERE username='$username'`
- `INSERT INTO users(nombre,apellido,username,correo,telefono,contrasena) VALUES(...)`

### Technical explanation
The application builds SQL statements by concatenating user-controlled values. If a malicious string reaches those variables, the query structure can be altered.

### Potential impact
Database compromise, unauthorized login, arbitrary data reads or writes, and credential theft.

### Preconditions
The attacker needs to submit crafted input through the login or registration forms.

### Recommended remediation
Use prepared statements with `mysqli_prepare()` and bound parameters, or migrate to PDO with parameterized queries.

### Verification needed
Runtime verification is recommended in a controlled environment to confirm exploitability.

## ADRAET-SEC-02 — Plaintext password storage and comparison

- Severity: CRITICAL
- Confidence: HIGH
- Affected files: `../../adraet/users.sql`, `../../adraet/php/login_user.php`, `../../adraet/php/register.php`
- Evidence: `contrasena` values are stored as `varchar(50)` and compared directly with a raw value in the login query.

### Technical explanation
Passwords are not hashed or salted before storage. The login query compares the submitted password directly against the stored value. This means the database itself is a credential store in plaintext.

### Potential impact
A leaked database reveals user passwords in clear text; attackers can reuse credentials across services.

### Preconditions
Access to the database dump or SQL data is required.

### Recommended remediation
Hash passwords using Argon2id, bcrypt, or PBKDF2; store only hashed values and verify with a secure password verifier.

### Verification needed
No additional runtime verification is required to establish the risk; the source is explicit.

## ADRAET-SEC-03 — Missing server-side authorization and session validation

- Severity: HIGH
- Confidence: HIGH
- Affected files: `../../adraet/php/login_user.php`, `../../adraet/prueba/ADRAET Dashboard Panel.html`
- Evidence: The login script sets `$_SESSION['usuario']`, but the dashboard page has no validation before rendering. No check is found for `$_SESSION` on the dashboard page.

### Technical explanation
The session is started and a username is placed in session storage, but there is no evidence of a server-side gate restricting access to the dashboard. A user could navigate directly to the HTML page if they know the path.

### Potential impact
Unauthorized access, bypass of authentication, and a false sense of protection.

### Preconditions
Knowledge of the local URL or file path is enough to attempt direct access.

### Recommended remediation
Add an authentication guard on every protected page and redirect unauthenticated users to the login page.

### Verification needed
A runtime check in a browser would confirm whether the static dashboard is directly accessible without login.

## ADRAET-SEC-04 — No CSRF protection on forms

- Severity: HIGH
- Confidence: MEDIUM
- Affected files: `../../adraet/php/login.php`, `../../adraet/php/register.php`, `../../adraet/php/login_user.php`
- Evidence: Both forms submit POST data without anti-CSRF tokens or origin checks.

### Technical explanation
The app accepts state-changing requests without any CSRF token or SameSite protection.

### Potential impact
Users could be tricked into submitting login or registration requests from another site.

### Preconditions
The victim must be logged into a browser with a valid session and be induced to perform the action.

### Recommended remediation
Introduce CSRF tokens stored in the session and validate them for every state-changing request.

### Verification needed
This is a design flaw visible in source; runtime confirmation is possible but not required to document it.

## ADRAET-SEC-05 — Hardcoded database credentials and local config

- Severity: MEDIUM
- Confidence: HIGH
- Affected files: `../../adraet/php/conexion.php`
- Evidence: `db_host="localhost"`, `db_usuario="root"`, `db_contra=""`, and `db_nombre="adraet database"` are embedded directly in code.

### Technical explanation
Hardcoded credentials create a weak and brittle setup, especially when the app runs with a highly privileged MySQL account and an empty password.

### Potential impact
Credential exposure, weaker environments, and accidental production misconfiguration.

### Preconditions
A developer or attacker can read the source file.

### Recommended remediation
Use environment variables or a secrets manager; avoid `root` for application access.

### Verification needed
No additional runtime verification required; this is explicit in source.

## ADRAET-SEC-06 — User enumeration and weak duplicate handling

- Severity: LOW
- Confidence: MEDIUM
- Affected files: `../../adraet/php/register.php`
- Evidence: The app alerts that an email or username is already registered and responds differently based on the duplicate condition.

### Technical explanation
The registration flow leaks whether a specific email or username is already present. Combined with other weaknesses, this can facilitate targeted account probing.

### Potential impact
Enumeration of valid accounts and usernames.

### Preconditions
The attacker can access the registration page and try known values.

### Recommended remediation
Use generic responses and place duplicate checks behind controlled logic.

### Verification needed
This is not a critical vulnerability but is worth validating in browser tests.

## ADRAET-SEC-07 — Browser-only local task persistence

- Severity: INFORMATIONAL
- Confidence: HIGH
- Affected files: `../../adraet/todolist/todo_script.js`
- Evidence: the tasks are saved to `localStorage` with `localStorage.setItem("data", listContainer.innerHTML)`.

### Technical explanation
The to-do list is not a real server-backed workflow and has no integrity or access controls.

### Potential impact
Data loss, tampering, and no cross-device persistence.

### Preconditions
Only the end-user browser is involved.

### Recommended remediation
Use a real backend datastore if the feature is to be retained.

## Overall security risk

The most serious issues are not subtle design flaws; they are direct application-security problems visible in source code. The project currently fails minimum expectations for SQL safety, password handling, and access control.
