	<h1><a href="accueil.html" title="retourner à la page d'accueil" id="stereosuper"><strong>STÉRÉO</strong>SUPER<span></span></a></h1>
	<ul id="menu">
		<li class="sub">
			<ul class="sub1">
				<?php if ($page=="apropos") echo "<li class='selected'>"; else echo "<li class='blueDash'>";?>
				<a href="a-propos-de-stereosuper.html" class="subline2" title="À propos">À propos</a></li>
			</ul>
		</li>
		<li class="sub">
			<ul class="sub2">
				<?php if ($page=="portfolio") echo "<li class='selected'>"; else echo "<li class='blueDash'>";?>
				<a href="portfolio.html" class="subline1" title="Portfolio">Portfolio</a></li>
			</ul>
		</li>
		<li class="sub">
			<ul class="sub3">
				<?php if ($page=="contact") echo "<li class='selected'>"; else echo "<li class='blueDash'>";?>
				<a href="contacter-stereosuper.html" class="subline1" title="Contact">Contact</a></li>
			</ul>
		</li>
	</ul>
	<div id="address" class="clearfix">
		<address>
			<a href="mailto:contact@stereosuper.fr" title="Nous envoyer un petit mail" id="mailStereosuper">contact@stereosuper.fr</a><br />
			<span id="tel">Tél. 09 51 24 85 36</span>
		</address>
		<ul id="social">
			<li><a href="http://www.facebook.com/pages/Stereosuper/179990532901" title="Stéréosuper sur Facebook" rel="external" id="facebookLink"><span>Facebook</span></a></li>
			<li><a href="http://twitter.com/stereosuper" title="Twitter" rel="external">Twitter</a></li>
			<li><a href="http://dribbble.com/stereosuper" title="Dribbble" rel="external">Dribbble</a></li>
		</ul>
	</div>