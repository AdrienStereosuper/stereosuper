<?php
require( "Mail.php" ); 

$mailContact = "contact@stereosuper.fr";

if (isset($_POST['inAction']))
	 $action = $_POST['inAction'];
	
$nom = "";
$email = "";
$societe = "";
$objet = "";
$message = "";

if ($action=="ajaxSubmit") {
	$textMail = "\n";
	if (!empty($_POST["yourName"])) {
      	$nom = $_POST["yourName"];
		$textMail .= "<em>NOM</em> : ".urldecode($nom)."\n<br /><br />";
   	} 
	if (!empty($_POST["societe"])) {
      	$societe = $_POST["societe"];
		$textMail .= utf8_decode("<em>SOCIÉTÉ</em> : ").urldecode($societe)."\n<br /><br />";
	}
	if (!empty($_POST["email"])) {
      	$email = $_POST["email"];
		$textMail .= "<em>EMAIL</em> : ".urldecode($email)."\n<br /><br />";
   	}
	if (!empty($_POST["objetMessage"])) {
        $objet = $_POST["objetMessage"];
		$textMail .= "<em>OBJET</em> : ".urldecode(stripslashes(preg_replace("/%u2019/","'",$objet)))."\n<br /><br />";
   	}
	if (!empty($_POST["message"])) {
      	$message = $_POST["message"];
	 	$textMail .= "<em>MESSAGE</em> : \n<br />".urldecode($message)."\n<br /><br />";
   	} 
	$myMail = new Mail();
	$myMail->From($email); 
	$myMail->Subject(utf8_decode("Message depuis le site Stéréosuper")); 
	$myMail->Body($textMail);
	$myMail->To($mailContact);
	$myMail->Send();
}
?>