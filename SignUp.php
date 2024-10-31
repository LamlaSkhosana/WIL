<?php
// Database connection parameters
$servername = "DESKTOP-QAFA1QR"; // Change if your server is different
$username = "DESKTOP-QAFA1QR/User"; // Replace with your database username
$password = ""; // Replace with your database password
$dbname = "user_registration"; // Replace with your database name

// Create connection
$conn = new SQLQuery2($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $username = htmlspecialchars(trim($_POST['username']));
    $email = htmlspecialchars(trim($_POST['email']));
    $password = password_hash(trim($_POST['password']), PASSWORD_DEFAULT); // Hash the password for security

    // Prepare and bind
    $stmt = $conn->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $username, $email, $password);

    // Execute the statement
    if ($stmt->execute()) {
        // Successful sign-up, redirect to the home page
        header("Location: RealHome.html"); // Change to your actual home page URL
        exit();
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close the statement
    $stmt->close();
} else {
    // If the form wasn't submitted correctly, redirect back to the form
    header("Location: SignUp.html");
    exit();
}

// Close the connection
$conn->close();
?>
