<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Replace these variables with your actual database credentials
    $host = 'localhost:3306';
    $username = 'root';
    $password = 'Desertsky@123';
    $database = 'test';

    // Create a connection
    $conn = new mysqli($host, $username, $password, $database);

    // Check the connection
    if ($conn->connect_error) {
        die(json_encode(array('error' => 'Connection failed: ' . $conn->connect_error)));
    }

    // Retrieve form data
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Hash the password (you should use a secure hashing algorithm)
    $hashedPassword = md5($password);

    // Query the database for the user
    $sql = "SELECT * FROM users WHERE username = '$username' AND password = '$hashedPassword'";
    $result = mysqli_query($conn, $sql);

    if ($result && mysqli_num_rows($result) > 0) {
        // Login successful
        $user = mysqli_fetch_assoc($result);
        session_start();
        $_SESSION['user'] = $user; // Store user data in the session

        // Redirect to the appropriate dashboard based on the user's role
        switch ($user['role']) {
            case 'student':
                header("Location: student-dashboard.php");
                break;
            case 'instructor':
                header("Location: instructor-dashboard.php");
                break;
            // Add more cases for other roles as needed
            default:
                header("Location: index.php"); // Redirect to a default page if role not found
        }
        exit();
    } else {
        echo json_encode(array('error' => 'Login failed. Please check your username and password.'));
    }

    // Close the database connection
    $conn->close();
} else {
    echo json_encode(array('error' => 'Invalid request.'));
}
?>
