<?php
require('./header.php');

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$stmt = $conn->prepare("INSERT INTO `candidate` (`id`, `firstname`, `lastname`, `email`, `phone`, `school`, `year`, `cv`, `essay1`, `essay2`, `interest`, `time`, `status`) VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP, ?)");
$stmt->bind_param("sssssisssss", $firstname, $lastname, $email, $phone, $school, $year, $cv, $essay1, $essay2, $interest, $status);

$firstname = "test";
$lastname = "test";
$email = "test";
$phone = "test";
$school = "test";
$year = 2019;
$cv = "test";
$essay1 = "test";
$essay2 = "test";
$interest = "test";
$status = "pending";
$stmt->execute();

print_r($stmt);

$stmt->close();
$conn->close();
?>