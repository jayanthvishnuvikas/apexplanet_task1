# PHP & MySQL practice (local only)

These are small exercises for the PHP/MySQL learning topics listed in Task 1. They are not part of the static GitHub Pages website.

## Run with XAMPP

1. Start Apache and MySQL in the XAMPP Control Panel.
2. Copy this `php-mysql` folder into `C:\xampp\htdocs\` (Windows), or your server's document root.
3. Open `http://localhost/php-mysql/hello.php`.
4. Try `basics.php` and `form.php`.
5. Open `http://localhost/phpmyadmin/`, select the SQL tab and run `database.sql`.

Use `mysqli` prepared statements for database-backed user input in future projects. Do not store plain-text passwords; use PHP `password_hash()` and `password_verify()` when implementing authentication.
