<?php
require('./header.php');
require('./cross-origin.php');


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$postdata = file_get_contents("php://input");
$request = json_decode($postdata,true);

$stmt = $conn->prepare("INSERT INTO `candidate` (`id`, `firstname`, `lastname`, `email`, `phone`, `school`, `year`, `cv`, `essay1`, `essay2`, `interest`, `time`, `status`, `token`) VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP, ?, ?)");
$stmt->bind_param("sssssisssssi", $firstname, $lastname, $email, $phone, $school, $year, $cv, $essay1, $essay2, $interest, $status, $token);

$firstname = $request[0]['firstName'];
$lastname = $request[0]['lastName'];
$email = $request[0]['email'];
$phone = $request[0]['phone'];
$school = $request[0]['school'];
$year = $request[0]['year'];
$cv = $request[0]['cv'];
$essay1 = $request[0]['essay1'];
$essay2 = $request[0]['essay2'];
$interest = $request[0]['interest'];
$status = "pending";
$token = 0;

$output['success'] = false;


if($stmt->execute()){
    $output['success'] = true;
}else{
    $output['error'] = $stmt->error;
}

$stmt->close();
$conn->close();

print(json_encode($output))
?>