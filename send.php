<?php
// Here we get all the information from the fields sent over by the form.
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$message = str_replace("\n",'<br>',$message);
	$to = 'kontakt@aero-film.pl';
	$subject = 'Mail ze strony';
	$message = 'Od: '.$name.'<br> Email: <a href="mailto:'.$email.'">'.$email.'</a><br>Wiadomość: <br>'.$message;
	$headers = 'From: ' . $email . "\nContent-type: text/html; charset=utf-8; \r\n"; 

if (filter_var($email, FILTER_VALIDATE_EMAIL)) { // this line checks that we have a valid email address
    mail($to, $subject, $message, $headers); //This method sends the mail.
	echo "<p style='background: white;padding-bottom: 6px;padding-top: 5px;padding-left: 10px;margin-bottom:2vh'>Dziękujemy, wiadomość została wysłana!</p>"; // success message
}else{
	echo "<p style='background: white;padding-bottom: 6px;padding-top: 5px;padding-left: 10px;margin-bottom:2vh'>Niestety podałeś niepoprawny adres email</p>";
}
?>