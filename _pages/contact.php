<?php
require( "_files/Mail.php" ); 

$mailContact = "contact@stereosuper.fr";

if (isset($_POST['inAction']))
	 $action = $_POST['inAction'];
	
$nom = "";
$email = "";
$societe = "";
$objet = "";
$message = "";
$textError = "";
$error = array();
$sent = false;

if ($action=="Prêts? Envoyez ici") {
	$textMail = "\n";
	
	if (!empty($_POST["yourName"])) {
      	$nom = $_POST["yourName"];
		$textMail .= "<em>NOM</em> : ".urldecode($nom)."\n<br /><br />";
   	} else {
		$error["nom"] = true;
		$obligError = true;
   	}
	if (!empty($_POST["societe"])) {
      	$societe = $_POST["societe"];
		$textMail .= utf8_decode("<em>".htmlspecialchars("SOCIÉTÉ")."</em> : ").htmlentities(urldecode($societe))."\n<br /><br />";
	}
	if (!empty($_POST["email"])) {
      	$email = $_POST["email"];
		if (!validEmail($email)) {
			$error["email"] = true;
			$textError .= "Votre adresse email est invalide.<br />"; 
		} else {
			$textMail .= "<em>EMAIL</em> : ".urldecode($email)."\n<br /><br />";
		}
   	} else {
      	$error["email"] = true;
		$obligError = true;
   	}
	if (!empty($_POST["objetMessage"])) {
        $objet = $_POST["objetMessage"];
		$textMail .= "<em>OBJET</em> : ".urldecode(preg_replace("/%u2019/","'",$objet))."\n<br /><br />";
   	}
	if (!empty($_POST["message"])) {
      	$message = $_POST["message"];
	 	$textMail .= "<em>MESSAGE</em> : \n<br />".stripslashes(nl2br($message))."\n<br /><br />";
   	} else {
		$error["message"] = true;
		$obligError = true;
	}
	if (count($error)==0) {
		$myMail = new Mail();
		$myMail->From($email); 
		$myMail->Subject(utf8_decode("Message depuis le site Stéréosuper")); 
		$myMail->Body($textMail);
		$myMail->To($mailContact);
		$myMail->Send();
		$sent = true;
	}
}
?>
<div id="content" class="contactPage">
	<h2>Faites vous entendre !<span></span></h2>
	<p>Vous voudriez <strong>en savoir plus</strong>, <strong>nous soumettre un projet</strong>, nous <strong>rendre visite</strong> ou tout simplement goûter notre excellent café…</p>
	<div id="coordonnees">
		<p>Par <strong>téléphone</strong> au <strong>09 51 24 85 36</strong><br />
		Par <strong>e-mail</strong> : <a href="mailto:contact@stereosuper.fr" title="nous écrire">contact@stereosuper.fr</a><br /></p>
		<p class="clearfix">Nos bureaux sont situés à <strong>Nantes (44100)</strong>, <br />
		au <strong>21 rue de la convention</strong>.</p>
		<div id="mapContainer" class="clearfix"><div id="map_canvas"><img src="http://maps.google.com/maps/api/staticmap?center=47.2009799550885,-1.5681&amp;zoom=13&amp;size=700x250&amp;markers=color:black|47.21099799550885,-1.5881&amp;sensor=false" alt="21 rue de la Convention, 44100 Nantes" /></div></div>
	</div>
	<form id="formContact" class="clearfix" method="POST" action="contacter-stereosuper.html">
		<?php if ($sent) {
			echo '<div id="innerForm" style="border-bottom:4px solid #000">';
		} else {
			echo '<div id="innerForm">';
		}?>
			<h3>Formulaire de contact<span></span></h3>
			<div id="champs">
				<?php
				if ($sent) {
					echo "<br /><p id='messageOk' style='color:#000'><strong>Merci&nbsp;!</strong><br />Votre message nous a bien été envoyé.<br /> Nous allons le traiter au plus vite.</p></div>";
				} else {
					if ($obligError || $textError != "") {
						echo '<p class="error" id="formIntro"><strong>Pas si vite !</strong><br />';
						if ($error["email"] && count($error)==1 && $email!="") {
							echo 'Votre adresse email n’est pas très catholique.<br />';
						} else {
							if ($error["email"] && $email!="") {
								echo 'À part "Société", tous les champs sont obligatoires,<br /> En plus, votre adresse email n’est pas très catholique.<br />';
							} else {
								echo 'À part "Société", tous les champs sont obligatoires.<br />';
							}
						}
					} else {
						echo "<p id='formIntro'><strong>Remplissez les champs suivants</strong>, nous ferons tout pour vous répondre au plus vite.";			
					}
					echo "</p>";
				?>
					<label for="yourName" <? if ($error["nom"]) { echo "class='error'";} ?> id="yourNameLabel">Nom et prénom</label>
					<input type="text" id="yourName" name="yourName" size="36" tabindex="1" required="required" <? if ($error["nom"]) { echo "class='errorInput'";} ?> value="<? echo $nom; ?>" />
					<label for="company">Société</label><span class="sideNotes">(Facultatif)</span>
					<input type="text" id="company" name="company" size="30" tabindex="2" value="<? echo $societe; ?>" />
					<label for="email" <? if ($error["email"]) { echo "class='error'";} ?> id="emailLabel">Email</label><span class="sideNotes">(Pour vous répondre, pas vous spammer)</span>
					<input type="email" id="email" name="email" size="42" tabindex="3" required="required"<? if ($error["email"]) { echo "class='errorInput'";} ?> value="<? echo $email; ?>" />
					<label for="objetMessage" <? if ($error["objet"]) { echo "class='error'";} ?>>Objet de votre message</label>
					<select id="objetMessage" name="objetMessage" tabindex="4" required="required">
						<option value="J’ai un projet dont je souhaite vous parler." <? if ($objet=="J’ai un projet dont je souhaite vous parler.") echo "selected"; ?>>J'ai un projet dont je souhaite vous parler.</option>
						<option value="J’aimerais en savoir plus sur Stéréosuper." <? if ($objet=="J’aimerais en savoir plus sur Stéréosuper.") echo "selected"; ?>>J'aimerais en savoir plus sur Stéréosuper.</option>
						<option value="J’aimerais vous faire part de mon admiration." <? if ($objet=="J’aimerais vous faire part de mon admiration.") echo "selected"; ?>>J'aimerais vous faire part de mon admiration.</option>
						<option value="J’ai une super idée de citation pour la page référence." <? if ($objet=="J’ai une super idée de citation pour la page référence.") echo "selected"; ?>>J'ai une super idée de citation pour la page référence.</option>
						<option value="C’est maman, tu ne m'as pas appelé cette semaine!" <? if ($objet=="C’est maman, tu ne m'as pas appelé cette semaine!") echo "selected"; ?>>C'est maman, tu ne m'as pas appelé cette semaine!</option>
					</select>
					<label for="message" <? if ($error["message"]) { echo "class='error'";} ?> id="messageLabel">Exprimez vous !</label>
					<textarea name="message" id="message" tabindex="5" cols="50" rows="12" required="required"<? if ($error["message"]) { echo "class='errorInput'";} ?>><? echo $message; ?></textarea>
				</div>
			</div>
			<div id="sendArea">
				<input type="submit" name="inAction" id="inAction" value="Prêts? Envoyez ici" />
			</div>
			<? } ?>
	</form>
</div>