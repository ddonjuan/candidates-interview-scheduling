<?php
print_r("here");
require('./header.php');
require('./cross-origin.php');


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$stmt = $conn->prepare("INSERT INTO `candidate` (`id`, `firstname`, `lastname`, `email`, `phone`, `school`, `year`, `cv`, `essay1`, `essay2`, `interest`, `time`, `status`) VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP, ?)");
$stmt->bind_param("sssssisssss", $firstname, $lastname, $email, $phone, $school, $year, $cv, $essay1, $essay2, $interest, $status);

$firstname = $request['userInfo']['firstName'];
$lastname = $request['userInfo']['lastName'];
$email = $request['userInfo']['email'];
$phone = $request['userInfo']['phone'];
$school = $request['userInfo']['school'];
$year = $request['userInfo']['year'];
$cv = $request['userInfo']['cv'];
$essay1 = $request['userInfo']['essay1'];
$essay2 = $request['userInfo']['essay2'];
$interest = "test";
$status = "pending";

$output['success'] = $request['userInfo'];


if($stmt->execute()){
    $output['success'] = true;
    $output['request'] = $request;
}else{
    $output['error'] = $stmt->error;
    $output['request'] = $request;
}

$stmt->close();
$conn->close();

print(json_encode($output))
?>