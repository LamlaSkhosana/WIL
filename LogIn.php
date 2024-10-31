<?php
session_start();

// Replace these with your own credentials
$valid_username = "user";
$valid_password = "password";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Check credentials
    if ($username === $valid_username && $password === $valid_password) {
        // Start the session
        $_SESSION['loggedin'] = true;
        $_SESSION['username'] = $username;
        echo "Welcome, " . htmlspecialchars($username) . "!";
    } else {
        echo "Invalid username or password.";
    }
} else {
    echo "Invalid request method.";
}
?>
