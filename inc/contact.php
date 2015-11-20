
<?php
// variables containing form input data
$name = $_POST['contactname'];
$email = $_POST['contactemail'];
$message = $_POST['contactmessage'];

//email display when opened
$formcontent="From: $name \n Email: $email \n Message: $message";

//email that receives form info
$recipient = 'brianjenney83@gmail.com'; //my email

//subject line of email
$subject = "Message from portfolio site";

//tells you who it is from
$mailheader = "From: $email \r\n";

mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
$home_url = 'http://' . $_SERVER['HTTP_HOST'] . dirname($_SERVER['PHP_SELF']) . '/index.html';
  header('Location: ' . $home_url);
?>
