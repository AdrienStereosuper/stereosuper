	<meta charset="UTF-8">
	<?php
		// titre
		$title = "";
		switch($page) {
			case ('apropos') :
				$title = "À propos de Stéréosuper &bull; Idées Hi-Fi, design super &bull; Agence de Direction Artistique web";
				echo "<meta property='og:image' content='http://www.stereosuper.fr/_images/_fb/apropos.jpg' />";
				echo '<meta property="og:description"
				          content="Tout savoir sur Stéréosuper, agence
				                   de création et webdesign de sites
				                   Internet à Nantes."/>';
				break;
			case ('portfolio') :
				$title = "Portfolio de Stéréosuper &bull; Idées Hi-Fi, design super &bull; Agence de Direction Artistique web";
				echo "<meta property='og:image' content='http://www.stereosuper.fr/_images/_fb/portfolio.jpg' />";
				echo '<meta property="og:description"
				          content="Toute les créations de Stéréosuper, 
				                   agence de création et webdesign de 
				                   sites Internet à Nantes."/>';
				break;
			case ('references') :
				$title = "Références de Stéréosuper &bull; Idées Hi-Fi, design super &bull; Agence de Direction Artistique web";
				echo "<meta property='og:image' content='http://www.stereosuper.fr/_images/_fb/references.jpg' />";
				echo '<meta property="og:description"
				          content="Toutes les références de Stéréosuper,
								   agence de création et webdesign de 
								   sites Internet à Nantes."/>';
				break;
			case ('contact') :
				$title = "Contacter Stéréosuper &bull; Idées Hi-Fi, design super &bull; Agence de Direction Artistique web";
				echo "<meta property='og:image' content='http://www.stereosuper.fr/_images/_fb/contact.jpg' />";
				echo '<meta property="og:description"
				          content="Contacter Stéréosuper, agence
				                   de création et webdesign de sites
				                   Internet à Nantes."/>';
				break;
			case ('blog') :
				$title = "Le blog de Stéréosuper &bull; Idées Hi-Fi, design super &bull; Agence de Direction Artistique web";
				break;
			case ('bonus') :
				$title = "Les folles expériences de Stéréosuper &bull; Idées Hi-Fi, design super &bull; Agence de Direction Artistique web";
				echo "<meta property='og:image' content='http://www.stereosuper.fr/_images/_fb/bonus.jpg' />";
				echo '<meta property="og:description"
				          content="Les folles expériences de Stéréosuper,
								   agence de création et webdesign de 
								   sites Internet à Nantes."/>';
				break;
			case ('IE6') :
				echo "<meta property='og:image' content='http://www.stereosuper.fr/_images/_fb/ie6.jpg' />";
				echo '<meta property="og:description"
				          content="La page destinée aux internautes 
				 				   naviguant sous IE6 de Stéréosuper,
								   agence de création et webdesign de 
								   sites Internet à Nantes."/>';
				break;
			case ('404') :
				echo "<meta property='og:image' content='http://www.stereosuper.fr/_images/_fb/404.jpg' />";
				echo '<meta property="og:description"
				          content="La page 404 de Stéréosuper,
								   agence de création et webdesign de 
								   sites Internet à Nantes."/>';
				break;
			default :
				$title = "Finis, les sites mononuls !";
				echo "<meta property='og:image' content='http://www.stereosuper.fr/_images/_fb/adoptez.jpg' />";
				echo '<meta property="og:description"
				          content="Stéréosuper, idées hi-fi, design super.
				 				   Création de sites internet, animations, 
				            	   design d’interfaces à Nantes."/>';
				break;
		}
	?>
	
	<title><?php echo $title; ?></title>
	<meta property="og:site_name" content="Stéréosuper" />
	<meta property="og:title" content="<?php echo $title; ?>"/>
	<meta name="description" content="Stéréosuper, idées hi-fi, design super. Création de sites internet, animations, design d'interfaces à Nantes." />
	<meta name="keywords" content="stereosuper, Stereosuper, STEREOSUPER, stéréosuper, stéréo, STEREO, stereo, super, SUPER, stereo super, porfolio, PORTFOLIO, Portfolio, graphiste, GRAPHISTE, Graphiste, freelance, Freelance, FREELANCE, design, DESIGN, Design, ergonomie, Ergonomie, ERGONOMIE, animateur, Animateur ANIMATEUR, animation, Animation, ANIMATION, web, WEB, Web, Webmaster, webmaster, WEBMASTER, creation, Cr&eacute;ation, Creation, cr&eacute;ation, CREATION, webdesigner, Webdesigner, WEBDESIGNER, internet, Internet, INTERNET,  flash, Flash, FLASH, html, Html, HTML, banniere, bannieres, Banniere, Bannieres, BANNIERE, BANNIERES, Nantes, nantes, NANTES, site internet, Site Internet, SITES INTERNET, boris forconi, boris, forconi, jean-francois, jean-francois perrault, plicploc, plic ploc" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<!--<meta name="viewport" content="height=device-height; width=750px; initial-scale=0.75;" />-->
	<!-- favicon -->
	<link rel="icon" href="http://www.stereosuper.fr/favicon.gif" type="image/x-icon" />
	<link rel="Shortcut Icon" href="http://www.stereosuper.fr/favicon.gif" type="image/x-icon" />
	<link rel="apple-touch-icon" href="http://www.stereosuper.fr/apple-touch-icon.png" />
	<!-- CSS -->	 
	<link rel="stylesheet" href="_css/reset.css" type="text/css" media="screen,print" />
	<link rel="stylesheet" href="_css/print.css" type="text/css" media="print" />
	<link rel="stylesheet" href="_css/styles.css?v=1402210" type="text/css" media="screen, projection" />
	<!-- JS -->
	<script type="text/javascript">
		var globalPage = '<?php echo $page ?>';
	</script>
	<script src="_js/jquery-1.4.3.js" type="text/javascript"></script>
	<script src="_js/swfobject.js" type="text/javascript"></script>
	<?php
	switch($page) {
		case ('apropos') :
			echo '<script src="_js/shadowbox.js" type="text/javascript"></script>';
			break;
		case ('portfolio') :
		case ('bonus') :
			echo '<script src="_js/jquery.scrollTo-min.js" type="text/javascript"></script>';
			echo '<script src="_js/jquery.color.js" type="text/javascript"></script>';
			break;
		case ('contact') :
			echo '<script src="http://maps.google.com/maps/api/js?sensor=false" type="text/javascript"></script>';
			echo '<link rel="stylesheet" href="_css/select.css" type="text/css" media="screen, projection" />';
			echo '<script src="_js/jquery.uniform.js" type="text/javascript"></script>';
			echo '<script src="_js/jquery.scrollTo-min.js" type="text/javascript"></script>';
			break;
	}
	?>
	<script src="_js/general.js?v=1402210" type="text/javascript"></script>
	<!-- RSS -->
	<link rel="alternate" type="application/rss+xml" href="http://feeds.feedburner.com/stereosuper" title="Fil d'information RSS — Stéréosuper" />
	<script type="text/javascript">

	  var _gaq = _gaq || [];
	  _gaq.push(['_setAccount', 'UA-26429110-1']);
	  _gaq.push(['_trackPageview']);

	  (function() {
	    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	  })();

	</script>
	<!--<script src="http://www.stereosuper.fr/mint/?js" type="text/javascript"></script>-->
	<!-- start Mixpanel --><script type="text/javascript">(function(d,c){var a,b,g,e;a=d.createElement("script");a.type="text/javascript";a.async=!0;a.src=("https:"===d.location.protocol?"https:":"http:")+'//api.mixpanel.com/site_media/js/api/mixpanel.2.js';b=d.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b);c._i=[];c.init=function(a,d,f){var b=c;"undefined"!==typeof f?b=c[f]=[]:f="mixpanel";g="disable track track_links track_forms register register_once unregister identify name_tag set_config".split(" ");for(e=0;e<
	g.length;e++)(function(a){b[a]=function(){b.push([a].concat(Array.prototype.slice.call(arguments,0)))}})(g[e]);c._i.push([a,d,f])};window.mixpanel=c})(document,[]);
	mixpanel.init("9b6242fbe8f8b69e1c9172abdb947366");</script><!-- end Mixpanel -->