<!doctype html>
<html lang="en">
<head><meta charset="utf-8"><title>PHP POST Form Practice</title></head>
<body>
  <h1>PHP Form Handling</h1>
  <form method="post">
    <label>Your name <input name="name" required></label>
    <button type="submit">Send</button>
  </form>
  <?php
  if ($_SERVER["REQUEST_METHOD"] === "POST") {
      $name = trim($_POST["name"] ?? "");
      if ($name !== "") {
          echo "<p>Hello, " . htmlspecialchars($name, ENT_QUOTES, "UTF-8") . ".</p>";
      }
  }
  ?>
</body>
</html>
