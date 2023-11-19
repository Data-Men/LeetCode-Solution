<?php

// Simple API endpoint
function getHello() {
    return json_encode(['message' => 'Hello, this is a simple API!']);
}

// Check if the request is for the API endpoint
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['action']) && $_GET['action'] === 'hello') {
    // Set the Content-Type header to JSON
    header('Content-Type: application/json');

    // Output the result of the API endpoint
    echo getHello();
} else {
    // Invalid endpoint
    http_response_code(404);
    echo 'Not Found';
}
