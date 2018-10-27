<?php
require_once('email-config.php');
require('phpmailer/PHPMailer/PHPMailerAutoload.php');
require('./cross-origin.php');
$postdata = file_get_contents("php://input");
$request = json_decode($postdata,true);
$email = $request[0]['email'];

$mail = new PHPMailer;
$mail->SMTPDebug = 0;           // Enable verbose debug output. Change to 0 to disable debugging output.

$mail->isSMTP();                // Set mailer to use SMTP.
$mail->Host = 'smtp.gmail.com'; // Specify main and backup SMTP servers.
$mail->SMTPAuth = true;         // Enable SMTP authentication


$mail->Username = EMAIL_USER;   // SMTP username
$mail->Password = EMAIL_PASS;   // SMTP password
$mail->SMTPSecure = 'tls';      // Enable TLS encryption, `ssl` also accepted, but TLS is a newer more-secure encryption
$mail->Port = 587;              // TCP port to connect to
$options = array(
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
);
$mail->smtpConnect($options);
$mail->From = 'lipenben@usc.edu';  // sender's email address (shows in "From" field)
$mail->FromName = 'Allergan USC Fellowship';   // sender's name (shows in "From" field)
$mail->addAddress($email);  // Add a recipient - MY ACTUAL EMAIL
$mail->addReplyTo('lipenben@usc.edu');  

$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Allergan USC Fellowship application confirmation';
$currentDate = date('Y-m-d H:i:s');

$mail->msgHTML(file_get_contents('confirm.html'), dirname(__FILE__));
$mail->AltBody = "
    Your application has been successfully submitted. 
    Dear Candidate: 
    Thank you for your application to the USC-Allergan Industry Pharmaceutical Fellowship pre-screening process. Selected candidates will be invited to schedule an interview at the 2018 ASHP Midyear PPS by email prior to December 1, 2018. Please be sure to bring a copy of your updated curriculum vitae. We look forward for your application.
    USC-Allergan Industry Pharmaceutical Fellowship
    2018 Candidate Selection Committee
";
$output = [
    'success'=>false,
    'message'=>''
];
if(!$mail->send()) {
    $output['message'] = 'Message could not be sent.';
    $output['error'] = 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    $output['message'] = 'Message has been sent';
    $output['success'] = true;
}

print(json_encode($output));
?>