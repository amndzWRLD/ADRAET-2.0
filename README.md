# ADRAET 2.0

ADRAET is a PHP/MySQL prototype for small-business operations. The current interface includes a dashboard, calendar, contacts, and tasks. The demo widgets store their sample records in the browser.

## Local database setup

The PHP login and registration handlers load `adraet/php/conexion.php`. This file contains local database settings and is intentionally ignored by Git.

1. Install and start a local PHP/MySQL environment, such as XAMPP.
2. Create a local MySQL/MariaDB database and a dedicated database user with the permissions needed by the application. Do not use the MySQL `root` account or an empty password outside a disposable local setup.
3. Copy `adraet/php/conexion.example.php` to `adraet/php/conexion.php`.
4. Edit `conexion.php` with the host, database name, username, and password for your local database.
5. Keep `conexion.php` local. Never commit real credentials; the `.gitignore` excludes it.

The existing `adraet/users.sql` dump is intentionally excluded from the repository because it contains personal data and plaintext sample passwords. Do not import or share that dump as-is. If a database schema needs to be shared, create a clean schema-only SQL file with all personal rows and credentials removed.

## Repository hygiene

- `adraet/php/conexion.example.php` is a safe template, not a working credential file.
- `adraet/php/conexion.php`, `adraet/users.sql`, and `adraet/.vscode/` are local-only and ignored.
- Before committing, run `git status --short` and confirm the local connection file and database dump are not staged.
