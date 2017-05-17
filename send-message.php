<?php
$emailSubject = 'Message from website';
$webMaster = 'alistair@digitalpath.co.uk';

$name = $_POST ['name'];
$email = $_POST['email'];
$message = $_POST ['message'];

$body = <<<EOD

$message<br><br>
Sender: $name <br><br>
Email address: $email <br><br>

EOD;
$headers = "From: $email\r\n";
$headers .= "Content-type: text/html\r\n";

$success = mail($webMaster, $emailSubject, $body, $headers);



?>