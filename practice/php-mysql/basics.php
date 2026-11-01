<?php
// Variables, indexed arrays, associative arrays, loops and functions.
$name = "Student";
$topics = ["HTML", "CSS", "JavaScript", "PHP", "MySQL"];
$profile = ["name" => $name, "track" => "Full Stack Web Development"];

function greeting(string $person): string {
    return "Welcome, " . htmlspecialchars($person, ENT_QUOTES, "UTF-8") . "!";
}

echo "<h1>" . greeting($profile["name"]) . "</h1>";
echo "<h2>Topics</h2><ul>";
foreach ($topics as $topic) {
    echo "<li>" . htmlspecialchars($topic, ENT_QUOTES, "UTF-8") . "</li>";
}
echo "</ul>";
?>
