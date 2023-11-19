<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // $host = 'https://cpanel.uta1.uta.cloud/cpsess6626948894/3rdparty/phpMyAdmin/index.php?route=/database/structure&db=axp1263_WDM';
    // $username = 'your_database_username';
    // $password = 'your_database_password';
    // $database = 'axp1263_WDM';
    $host = 'localhost:3306';
    $username = 'root';
    $password = 'Desertsky@123';
    $database = 'test';
    
    $conn = new mysqli($host, $username, $password, $database);

    // Checking the connection
    if ($conn->connect_error) {
        die(json_encode(array('error' => 'Connection failed: ' . $conn->connect_error)));
    }

    // Retrieve form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $role = $_POST['role'];

    // Insert user data into the database
    $sql = "INSERT INTO users (name, email, password, role) VALUES ('$name', '$email', '$password', '$role')";
    $result = mysqli_query($conn, $sql);

    if ($result) {
        // Registration successful, send confirmation email
        $to = $email;
        $subject = 'Registration Confirmation';
        $message = "Dear $name,\n\nThank you for registering with our website. Your registration is successful.";
        $headers = 'From: pawaranu2803@gmail.com';

        // Use additional headers if needed, such as content type
        // $headers .= 'Content-type: text/html';

        // Sending the email
        mail($to, $subject, $message, $headers);

        echo json_encode(array('success' => 'Registration successful. Confirmation email sent.'));
    } else {
        echo json_encode(array('error' => 'Registration failed. Please try again.'));
    }

    // Closing the database connection
    $conn->close();
} else {
    echo json_encode(array('error' => 'Invalid request.'));
}
?>
