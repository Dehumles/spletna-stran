<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $companyName = $_POST['companyName'];
    $companyEmail = $_POST['companyEmail'];
    $companyPhone = $_POST['companyPhone'];
    $adrChecked = isset($_POST['adr']) ? 'Yes' : 'No';
    // Gather other form fields as needed

    $to = 'transbmakovec@outlook.com';
    $subject = 'New Transport Request';
    $body = "You have received a new transport request:\n\n";
    // Append other form variables to the body
    $headers = "From: $companyEmail" . "\r\n" .
               "Reply-To: $companyEmail" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    if (mail($to, $subject, $body, $headers)) {
        echo "Mail Sent!";
    } else {
        echo "Mail Not Sent!";
    }
}
?>
