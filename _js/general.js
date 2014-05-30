var ratio = 1.777777777;
var offsetTop = 130;
var offset = 0;
//
var accordionSmall = 24;
var accordionBig = 50;
var topAccordionOffset = 0;
var currentAccordion = -1;
var hidePrevVisible = false;
var maxAccordion = 0;
var ratioBigSmall = 2.4;
var tableWidths;
var widthImage = new Array();
var initialWidthImage = 330;
//
var heightImages = 416;
var widthImages = 617;
var sizeButtons = 80;
//
var indexSlide = 0;
var maxSlides = 5;
var timingQuote = 8000;
var timingQuoteTransition = 500;
//
var textPhoto = ["Claire, dans son salon, entour&eacute;e d&#x27;oeuvres de Max Figerou","Madeleine et son chien Weggie, chez elle, au milieu de ses collections.","Ma&iuml;a, dans son jardin, entour&eacute;e de ses jouets.","Jaouen, au Caf&eacute; sur Cour (Nantes), au milieu d&#x27;une exposition de photographies d&#x27;&Eacute;ric Stephan."];
var timerDiaporama = 2000;
//
$(document).ready(function() {
	
    // external links
    $('a').each(function() {
        if ($(this).attr("rel") == "external") { $(this).attr("target", "_blank"); }
    });

    $('.legend a').each(function() {
        $(this).attr("target", "_blank");
    });

    // survols liens tirets bleus
    $('.blueDash').css('background', "url('./_images/bgBlueDash.gif') no-repeat -10px 8px");
    $('.blueDash').hover(function() {
        $(this).stop(true, false).animate({backgroundPosition: '1px 8px'}, {duration: 100,queue: false});
    },function() {
        $(this).stop(true, false).animate({backgroundPosition: '-10px 8px'},{duration: 200,queue: false});
    });

    // survol du logo
	/*if (!$.browser.msie) {
	    $('a#stereosuper').css('background', "#000 url('./_images/spriteHome.png') no-repeat 0 0");
	    $('a#stereosuper').hover(function() {
			$('a#stereosuper span').css('opacity',0);
			$('a#stereosuper').css({'background-position': '0 0'});
			$('a#stereosuper').animate({'background-position': '0 0'},{duration: 10,queue: true,complete: function() {
				  $('a#stereosuper').css({'background-position': '0 -70px'});
	  			  $('a#stereosuper').animate({'background-position': '0 -70px'},{duration: 20,queue: true,complete: function() {
			      		$('a#stereosuper').css({'background-position': '0 -140px'});
						$('a#stereosuper').animate({'background-position': '0 -140px'},{duration: 30,queue: true,complete: function() {
					      		$('a#stereosuper').css({'background-position': '0 -210px'});
						}});
				  }});
			}});
		}, function() {
	        $('a#stereosuper').css({'background-position': '0 -210px'});
			$('a#stereosuper').animate({'background-position': '0 -210px'},{duration: 150,queue: true,complete: function() {
				  $('a#stereosuper').css({'background-position': '0 -140px'});
	  			  $('a#stereosuper').animate({'background-position': '0 -140px'},{duration: 20,queue: true,complete: function() {
			      		$('a#stereosuper').css({'background-position': '0 -70px'});
						$('a#stereosuper').animate({'background-position': '0 -70px'},{duration: 30,queue: true,complete: function() {
					      		$('a#stereosuper').css({'background-position': '0 0'});
						}});
				  }});
			}});
	    });
	}*/
    // scripts de l'accueil
    if (globalPage == "accueil" || globalPage == "accueil2") {
  		// photos
		setTimeout(nextPhoto, timerDiaporama*2);
	}
	
	// snap btn sidebar responsive
	/*var s = Snap("#svg-btn-responsive");
	var rect1 = s.rect(20, 20, 20, 3);
	var rect2 = s.rect(20, 29, 20, 3);
	var rect3 = s.rect(20, 38, 20, 3);
	
	var rects = s.group(rect1, rect2, rect3);
	rects.attr({
	    fill: "#fff"
	});
	//animation du btn svg
	rect1.animate( { transform: "r-30,20,1" }, 300 );
	*/
	// sidebar
	$('a#btn-sidebar').click(function() {
		if($('#navigation').hasClass('open')){
			$('#navigation').removeClass('open');
			$('#content').removeClass('open');
			TweenMax.to($("#svg-btn-responsive .rect1"), 0.3, {rotation: "0deg", x: "0", y: "0", ease:Cubic.easeInOut});
			TweenMax.to($("#svg-btn-responsive .rect2"), 0.3, {opacity: "1", ease:Cubic.easeInOut});
			TweenMax.to($("#svg-btn-responsive .rect3"), 0.3, {rotation: "0deg", x: "0", y: "0", ease:Cubic.easeInOut});
		}else{
			$('#navigation').addClass('open');
			$('#content').addClass('open');
			//TweenMax.to($("#svg-btn-responsive .group-rect"), 0.3, {x: "2px", ease:Cubic.easeInOut});
			TweenMax.to($("#svg-btn-responsive .rect1"), 0.3, {delay:0.2, rotation: "45deg", x: "2px", y: "2px", ease:Cubic.easeInOut});
			TweenMax.to($("#svg-btn-responsive .rect2"), 0.3, {delay:0.2, opacity: "0", ease:Cubic.easeInOut});
			TweenMax.to($("#svg-btn-responsive .rect3"), 0.3, {delay:0.2, rotation: "-45deg", x: "-1px", y: "-1px", ease:Cubic.easeInOut});
		}
	});
	
	
     
    // à propos
    if (globalPage == "apropos") {
        // scroll du background
		if(navigator.platform == 'iPad' || navigator.platform == 'iPhone' || navigator.platform == 'iPod'){
			     $('.aPropos').css('background-image', "none");
		} else {
        	$(window).scroll(function() {
            	var move = -Math.ceil($(window).scrollTop() / 3);
            	$('.aPropos').css('background-position', "center " + move + "px");
        	});
		}

        // Shadowbox
        Shadowbox.init();

        // survol du bouton contact
        if (!$.browser.msie) {
            $('.aPropos #contact a').css('background', "url('./_images/_aPropos/contactezNous.png') no-repeat 0 0");
            $('.aPropos #contact a span').css({opacity: 0});
            $('.aPropos #contact a span').css('background-position', "1px -313px");
            $('.aPropos #contact a').hover(function() {
				$('span', this).stop(true, false).animate({opacity: 1},{duration: 100,queue: false});
            },
            function() {
                $('span', this).stop(true, false).animate({opacity: 0},{duration: 300,queue: false});
            });
        }
    }

    // portfolio
    if (globalPage == "portfolio" || globalPage == "bonus") {
		changeColor();
		getImgWidth();
        // pour la taille des images, crade
        $('.accordionButton').each(function() {
            $('span', this).html("<img src=" + $('span', this).css('background-image').split('url(')[1].split(')')[0] + " style='opacity:0'/>");
        });
        // accordéon
        topAccordionOffset = $('#realisations').offset().top;
        maxAccordion = $('.accordionButton').size();
        showHideUpDown();
        $('.accordionButton').click(function() {
            if (!hidePrevVisible) {
                $('#navBtn').css('display', "block");
                $('#navBtn').animate({'left': 0},500);
                hidePrevVisible = true;
            }
            // mettre l'état 'off' tout les slides
            closeAllAccordions();
            // si le slide n'est pas ouvert, le faire
            if ($(this).next().is(':hidden') == true) {
                currentAccordion = $(this).index() / 2;
                showAccordion(this);
            }
            return false;
        });
        // survols
        if (!$.browser.msie) {
            $('#navBtn #up').css('background', "url('./_images/_portfolio/upBtn.png') no-repeat top right");
            $('#navBtn #down').css('background', "url('./_images/_portfolio/downBtn.png') no-repeat top right");
            $('#navBtn a span').css({opacity: 0 });
            $('#navBtn a span').css('background-position', "right -60px");
            $('#navBtn a').hover( function() {
                $('span', this).stop(true, false).animate({opacity: 1},{duration: 100,queue: false});
            }, function() {
                $('span', this).stop(true, false).animate({opacity: 0},{duration: 300,queue: false});
            });
        }
        function checkKey(e) {
            if (!hidePrevVisible && (e.keyCode == 40 || e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 37)) {
                $('#navBtn').css('display', "block");
                $('#navBtn').animate({'left': 0},500);
                hidePrevVisible = true;
            }
            switch (e.keyCode) {
	            case 40:
	                downNav();
	                break;
	            case 38:
	                upNav();
	                break;
	            case 39:
	                nextSlide();
	                break;
	            case 37:
	                prevSlide();
	                break;
				default:
					break;
            }
        }

        if ($.browser.mozilla) {
            $(document).keypress(checkKey);
        } else {
            $(document).keydown(checkKey);
        }
        // clic
        $('#navBtn #up').click(function() {
            upNav();
            return false;
        });
        $('#navBtn #down').click(function() {
            downNav();
            return false;
        });
        // tout fermer au chargement
        $('.accordionContent').hide();
        // survols
        $('.accordionButton').hover(function() {
            if ($('span', this).width() <= widthImage[$(this).index()]) {
                $(this).stop(true, false).animate({backgroundPosition: "1px 12px"},{duration: 200,queue: false});
                $('span', this).stop(true, false).animate({backgroundPosition: "15px 0"},{duration: 80,queue: false});
            }
        }, function() {
            if ($('span', this).width() <= widthImage[$(this).index()]) {
                $(this).stop(true, false).animate({backgroundPosition: "-10px 12px"},{duration: 300,queue: false});
                $('span', this).stop(true, false).animate({backgroundPosition: "9px 0"},{duration: 150,queue: false});
            }
        });
        // slideshows
        $('.slideshowImages').css({'height': heightImages,'width': widthImages});
        $('.slideshowImages li').css({'position': 'absolute','top': '0','left': '0','width': '100%','height': '100%'});
        $('.slideshowImages').each(function() {
            var lastIndex = $(this).index($(this).find('li:last')) + 1;
            $('.slideshowImages li').each(function() {
                if ($(this).index() != 0) {
                    $(this).css({'z-index': lastIndex - $(this).index(),'opacity': 0});
                }
            });
        });
        $('a.next').css({'display': 'block','top': (heightImages - sizeButtons) / 2 + 'px','left': widthImages - sizeButtons / 2 + 'px'});
        $('a.prec').css({'display': 'block','top': (heightImages - sizeButtons) / 2 + 'px','left': -sizeButtons / 2 + 'px'});
        $('a.prec').hide();
        $('a.next').each(function() {
            if ($('li:last', $(this).prev()).index() < 1) {
                $(this).hide();
            }
        });
        // survols
        if (!$.browser.msie) {
            $('.slideshowContener a.next').css('background', "url('./_images/_portfolio/suivBtn.png') no-repeat 0 0");
            $('.slideshowContener a.prec').css('background', "url('./_images/_portfolio/prevBtn.png') no-repeat 0 0");
            $('.slideshowContener a span').css({opacity: 0});
            $('.slideshowContener a span').css('background-position', "right -80px");
            $('.slideshowContener a').hover(function() {
                $('span', this).stop(true, false).animate({opacity: 1},{duration: 100,queue: false});
            }, function() {
                $('span', this).stop(true, false).animate({opacity: 0},{ duration: 300,queue: false});
            });
			if (globalPage == "portfolio") {
            	$('a.visitWebsite').css('background', "url('./_images/_portfolio/voir.png') no-repeat 0 -5px");
			} else {
				$('a.visitWebsite').css('background', "url('./_images/_bonus/voir.png') no-repeat 0 -5px");
			}
            $('a.visitWebsite span').css({opacity: 0 });
            $('a.visitWebsite span').css('background-position', "-1px -120px");
            $('a.visitWebsite').hover(function() {
                $('span', this).stop(true, false).animate({opacity: 1},{duration: 100,queue: false});
            }, function() {
                $('span', this).stop(true, false).animate({opacity: 0},{duration: 300,queue: false });
            });
        }
        //clic
        $('a.next').click(function() {
            $('li', $(this).prev()).each(function() {
                if ($(this).css('opacity') > 0 && $(this).next().is('li')) {
                    $(this).stop(true, false).animate({opacity: 0},{duration: 500,queue: false});
                    $(this).next().stop(true, false).animate({opacity: 1},{duration: 300,queue: false});
                    $(this).parent().prev().show();
                    if ($(this).next().next().is('li') == false) {
                        $(this).parent().next().hide();
                    }
                    return false;
                }
            });
            return false;
        });
        $('a.prec').click(function() {
            $('li', $(this).next()).each(function() {
                if ($(this).css('opacity') > 0 && $(this).prev().is('li')) {
                    $(this).stop(true, false).animate({opacity: 0},{duration: 500,queue: false});
                    $(this).prev().stop(true, false).animate({opacity: 1},{duration: 300,queue: false});
                    $(this).parent().next().show();
                    if ($(this).prev().prev().is('li') == false) {
                        $(this).parent().prev().hide();
                    }
                    return false;
                }
            });
            return false;
        });
    }

    // references
    if (globalPage == "references") {
        if (!$.browser.msie) {
			// slideshow
			$('#quotesStereo li.initInvisible').css({'visibility':'visible','display':'block'});
			$('#quotesStereo li').each( function(){
				if ($(this).index() != indexSlide) {
	                $(this).css({'opacity': 0});
	            } else {
					$(this).css({'opacity': 1});
				}
			});
            // survol du bouton vous
            $('.references a#vous').css('background', "url('./_images/_references/vous.png') no-repeat 0 0");
            $('.references a#vous span').css({opacity: 0});
            $('.references a#vous span').css('background-position', "0 -106px");
            $('.references a#vous').hover(function() {
                $('span', this).stop(true, false).animate({opacity: 1},{duration: 100,queue: false});
            },
            function() {
                $('span', this).stop(true, false).animate({opacity: 0},{duration: 300,queue: false});
            });
            // survol du bouton contact
            $('.references #contact a').css('background', "url('./_images/_references/contactezNous.png') no-repeat 0 0");
            $('.references #contact a span').css({opacity: 0});
            $('.references #contact a span').css('background-position', "1px -312px");
            $('.references #contact a').hover(function() {
                $('span', this).stop(true, false).animate({opacity: 1},{duration: 100,queue: false});
            }, function() {
                $('span', this).stop(true, false).animate({opacity: 0},{duration: 300,queue: false});
            });
        }
    }

    // contact
    if (globalPage == "contact") {
        offset = $('#coordonnees').offset().top;
        // scroll du background
		if(navigator.platform == 'iPad' || navigator.platform == 'iPhone' || navigator.platform == 'iPod'){
			$('.contactPage').css('background-image', "none");
		} else {
	        $(window).scroll(function() {
	            var move = -Math.ceil($(window).scrollTop() / 2) + offsetTop;
	            $('.contactPage').css('background-position', "right " + move + "px");
	            fixedCoordonnees();
	        });
	        // coordonnees fixe
	        fixedCoordonnees();
	        $(window).resize(function() {
	            fixedCoordonnees();
	        });
		}
        // survol du bouton d'envoi
        if (!$.browser.msie) {
            $('#inAction').css({'background-position': '0 -2px','opacity': 0});
            $('#inAction').hover(function() {
                $(this).stop(true, false).animate({opacity: 1},{duration: 100,queue: false});
            }, function() {
                $(this).stop(true, false).animate({opacity: 0},{duration: 300,queue: false});
            });
        }

        // style de la DDL
        $("select").uniform();

        // erreurs
        $("#inAction").click(function() {
            var emptyName = false;
            var emptyMail = false;
            var goodMail = true;
            var emptyMessage = false;
            var name = $("#yourName").val();
            if (name == "") {
                $("#yourNameLabel").addClass('error');
                $("#yourName").addClass('errorInput');
                emptyName = true;
            } else {
                $("#yourNameLabel").removeClass('error');
                $("#yourName").removeClass('errorInput');
                emptyName = false;
            }
            var message = $("#message").val();
            if (message == "") {
                $("#messageLabel").addClass('error');
                $("#message").addClass('errorInput');
                emptyMessage = true;
            } else {
                $("#messageLabel").removeClass('error');
                $("#message").removeClass('errorInput');
                emptyMessage = false;
            }
            var email = $("#email").val();
            if (email == "") {
                $("#emailLabel").addClass('error');
                $("#email").addClass('errorInput');
                emptyMail = true;
            } else {
                emptyMail = false;
                if (isValidEmailAddress(email)) {
                    $("#emailLabel").removeClass('error');
                    $("#email").removeClass('errorInput');
                    goodMail = true;
                } else {
                    $("#emailLabel").addClass('error');
                    $("#email").addClass('errorInput');
                    goodMail = false;
                }
            }
            var messageErreur = '';
            if (emptyMail || emptyMessage || emptyName) {
                if (goodMail) {
                    messageErreur = '<strong>Pas si vite !</strong><br />À part "Société", tous les champs sont obligatoires.<br />';
                } else {
                    messageErreur = '<strong>Pas si vite !</strong><br />À part "Société", tous les champs sont obligatoires,<br /> En plus, votre adresse email n’est pas très catholique.<br />';
                }
            } else {
                if (!goodMail) {
                    messageErreur = '<strong>Pas si vite !</strong><br />Votre adresse email n’est pas très catholique.<br />';
                }
            }
            if (!goodMail || emptyMail || emptyMessage || emptyName) {
                $(window).scrollTo($('#formContact').offset().top - 150, 800, {queue: true});
                $('#formIntro').html(messageErreur);
                $('#formIntro').addClass('error');
                return false;
            }
            // envoi
            var company = $("#company").val();
            var objetMessage = $("#objetMessage").val();
            var dataString = 'yourName=' + escape(name) + '&email=' + escape(email) + '&message=' + escape(message) + '&societe=' + escape(company) + '&objetMessage=' + escape(objetMessage) + '&inAction=ajaxSubmit';
            $.ajax({
				type: "POST",url: "_files/contactPost.php",data: dataString,success: function() {
                    $(window).scrollTo($('#formContact').offset().top - 150, 1000);
                    $('#inAction').animate({opacity: 0},200, function() {
                        $('#sendArea').animate({ height: 'toggle'},600);
                        $('#innerForm').animate({height: '545px'},600);
                        $('#innerForm').animate({borderBottomWidth: "4px"},100);
                        $('#innerForm input').animate({opacity: 0},600);
                        $('#innerForm label').animate({opacity: 0},500);
                        $('#innerForm .sideNotes').animate({opacity: 0},500);
                        $('#innerForm textarea').animate({opacity: 0},200);
                        $('#innerForm select').animate({opacity: 0},300);
                        $('#innerForm .selector').animate({ opacity: 0},300);
                        $('#formIntro').html("<strong>Merci&nbsp;!</strong><br />Votre message nous a bien été envoyé.<br /> Nous allons le traiter au plus vite.</p>");
                    });
				}
            });
            return false;
        });
        // carte google maps
        initializeMap();
    }
});
$(window).load(function() {
    // portfolio
    if (globalPage == "portfolio" || globalPage == "bonus") {
		changeColor();
		var myFile = document.location.toString();
		if (myFile.match('#')) { 
		  var myAnchor = myFile.split('#')[1];
		  if (!isNaN(myAnchor)&&parseInt(myAnchor)==myAnchor) {
		  		currentAccordion = parseInt(myAnchor)-1;
				 $('.accordionButton').each(function() {
			       closeAllAccordions();
			       if ($(this).index() == currentAccordion * 2) {
			          showAccordion(this);
					  return false;
			       }
			    });
				showHideUpDown();
				if (!hidePrevVisible) {
	                $('#navBtn').css('display', "block");
	                $('#navBtn').animate({'left': 0},500);
	                hidePrevVisible = true;
	            }
		  }
		}
    }
	// references
    if (globalPage == "references" && !$.browser.msie) {
        setTimeout('nextQuote()',timingQuote);
    }
});
//
// video HTML 5 resize
function redimHomeVideo() {
    var newHeight;
    var newWidth;
    var marginRight;
    if ($(window).width() < $(window).height()*ratio) {
    	newHeight = $(window).height();
     	newWidth = $(window).height() * ratio;
    } else {
        newWidth = $(window).width();
        newHeight = $(window).width() / ratio;
    }
    marginLeft = ($(window).width()-newWidth)/2;
    newWidth += "px";
    newHeight += "px";
    marginLeft += "px";
    $('#homeVideo').height(newHeight);
    $('#homeVideo').width(newWidth);
    $('#homeVideo').css('margin-left', marginLeft);
}
//
// bloc coordonnees
function fixedCoordonnees() {
    if (!$.browser.msie) {
	    if ($(this).scrollTop() >= offset - offsetTop && $(window).width() > 1000) {
	        $('#coordonnees').css({'position': 'fixed','top': offsetTop + 'px'});
	        var paddingForm = $('#coordonnees').width();
	        $('#formContact').css({'padding-left': paddingForm + 'px'});
	    } else {
	        $('#coordonnees').css({'position': 'relative','top': 0});
	        $('#formContact').css({'padding-left': '0'});
	    }
	}
}
// Google maps
//
function initializeMap() {
    var latlng = new google.maps.LatLng(47.206, -1.5881);
    var latlngCursor = new google.maps.LatLng(47.21099799550885, -1.5881);
    var currentZoom = 13;
    var myOptions = {
        zoom: currentZoom,
        center: latlng,
        mapTypeControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

    google.maps.event.addListener(map, 'zoom_changed',function() {
        currentZoom = map.zoom;
    });
    var image = '_images/_contact/animatedCursor.png';
    var marker = new google.maps.Marker({
        position: latlngCursor,
        map: map,
        icon: image
    });
    var image = '_images/_contact/animatedCursor.gif';
    var marker2 = new google.maps.Marker({
        position: latlngCursor,
        map: map,
        icon: image
    });
    function zoomMarker() {
        if (currentZoom < 20)
        currentZoom++;
        else {
            currentZoom--;
        }
        map.setZoom(currentZoom);
    }
    google.maps.event.addListener(marker, 'click', zoomMarker);
    google.maps.event.addListener(marker2, 'click', zoomMarker);
}
//
// detection iPhone
function isiPhone() {
    return ((navigator.platform.indexOf("iPhone") != -1) || (navigator.platform.indexOf("iPod") != -1));
}

//
// email valide
function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
}
//
function scrollAccordion() {
    $(window).scrollTo(topAccordionOffset - offsetTop + (currentAccordion - 1) * (accordionSmall + 1) - 1, 300, { queue: false });
}

function closeAllAccordions() {
    // mettre l'état 'off' tout les slides
    $('.accordionButton').css({ 'height': accordionSmall + "px" });
    $('.accordionButton').each(function() {
        if ($('span', this).width() > widthImage[$(this).index()]) {
            $(this).stop(true, false).css({
	 			'width': widthImage[$(this).index()] + "px",
                'background-image': 'url(./_images/bgBlueDash.gif)',
                backgroundPosition: '-10px 12px',
                'font-weight': 'normal',
                'background-repeat': 'no-repeat'
            });
        }
    });
    $('span.smallHeader', '.accordionButton').each(function() {
        $(this).css({'visibility':'visible','display':'block','background-position':'11px 0'});
    });
    $('span.bigHeader', '.accordionButton').each(function() {
        $(this).css({'visibility':'hidden','display':'none'});
    });
    $('.accordionContent').slideUp('fast');
    showHideUpDown();
}

function showAccordion(selector) {
    if ($(selector).next().is(':hidden') == true) {
        $('span.bigHeader', selector).css({'visibility':'visible','display':'block','background-position':'3px 0'});
		$('span.smallHeader', selector).css({'visibility':'hidden','display':'none'});
        $(selector).stop(true, false).css({
            'width': Math.ceil((widthImage[$(selector).index()]-30) * ratioBigSmall)+20 + "px",
            'height': accordionBig + "px",
            'font-weight': 'bold',
            backgroundPosition: "-10px 12px"
        });
        $(selector).next().slideDown('fast', scrollAccordion);
		var hashNum = parseInt(currentAccordion)+1;
		window.location.hash = '#'+hashNum;
    } else {
        $(window).scrollTo(0, 300, {queue: false});
    }
    showHideUpDown();
	changeColor();
}

function showHideUpDown() {
    if (currentAccordion == -1) {
		$("#up").hide();
        $("#navBtn").css('paddingTop', '64px');
    } else {
        $("#up").show();
        $("#navBtn").css('paddingTop', '0');
    }
    if (currentAccordion == maxAccordion) {
        $("#down").hide();
    } else {
        $("#down").show();
    }
}

function upNav() {
    if (currentAccordion > -1) {
        currentAccordion--;
        $('.accordionButton').each(function() {
            closeAllAccordions();
            if ($(this).index() == currentAccordion * 2) {
                showAccordion(this);
                return false;
            }
        });
    }
}

function downNav() {
    if (currentAccordion < maxAccordion) {
        currentAccordion++;
        $('.accordionButton').each(function() {
            closeAllAccordions();
            if ($(this).index() == currentAccordion * 2) {
                showAccordion(this);
                return false;
            }
        });
    }
}

function nextSlide() {
    $('.accordionContent').each(function() {
        if ($(this).index() - 1 == currentAccordion * 2) {
            $('.slideshowContener li', $(this)).each(function() {
                if ($(this).css('opacity') > 0 && $(this).next().is('li')) {
                    $(this).stop(true, false).animate({opacity: 0},{duration: 500,queue: false});
                    $(this).next().stop(true, false).animate({opacity: 1},{duration: 300,queue: false});
                    $(this).parent().prev().show();
                    if ($(this).next().next().is('li') == false) {
						$(this).parent().next().hide();
					}
                    return false;
                }
            });
        }
    });
}

function prevSlide() {
    $('.accordionContent').each(function() {
        if ($(this).index() - 1 == currentAccordion * 2) {
            $('.slideshowContener li', $(this)).each(function() {
                if ($(this).css('opacity') > 0 && $(this).prev().is('li')) {
                    $(this).stop(true, false).animate({opacity: 0},{duration: 500,queue: false});
                    $(this).prev().stop(true, false).animate({opacity: 1},{duration: 300,queue: false});
                    $(this).parent().next().show();
                    if ($(this).prev().prev().is('li') == false) {
                        $(this).parent().prev().hide();
                    }
                    return false;
                }
            });
        }
    });
}

// couleur de fond
function changeColor() {
	/*var hue = 'rgb(' + (Math.floor(Math.random()*128)+128) + ',' + (Math.floor(Math.random()*128)+128) + ',' + (Math.floor(Math.random()*128)+128) + ')';  	
	$('body').stop(true, false).animate( { backgroundColor: hue }, 500);  */
}

// citations des reférences
function nextQuote() {
	var nextSlide = indexSlide+1;
	if (nextSlide==maxSlides) {
		nextSlide = 0;
	}
	$('#quotesStereo li').each( function(){
		if ($(this).index() == indexSlide) {
         	$(this).stop(true, false).animate({opacity: 0},{duration: timingQuoteTransition,queue: false});
   		} else if ($(this).index() == nextSlide) {
			$(this).stop(true, false).animate({opacity: 1},{duration: timingQuoteTransition*3,queue: false});
        } 
	});
	indexSlide = nextSlide;
	setTimeout('nextQuote()',timingQuote);
}

function getImgWidth() {
    $('.accordionButton').each(function() {
        widthImage[$(this).index()] = $(this).css('width').split("px")[0];
    });
}

// photos accueil
function nextPhoto() {
	var toLoad = numPhoto+1;
	if (toLoad == 4) {
		toLoad = 0;
	}
	var numPhotoToLoad = toLoad+1;
		$('<img/>').attr('src', '_images/_home/bgHome'+numPhotoToLoad+'.jpg').load(function() {
	    $('#nextBGop').css('background-image', 'url(_images/_home/bgHome'+numPhotoToLoad+'.jpg)');
		setTimeout(showPhoto, timerDiaporama*2);
		numPhoto = toLoad;
	}); 
}

function showPhoto() {
	$('#nextBGop').css({opacity:0,"display":"block"});
	$('#nextBGop').animate({opacity: 1},{duration: timerDiaporama/2,queue: false, complete:function() {
		var numPhotoToLoad = numPhoto+1;
		$('#footerMentions').html(textPhoto[numPhoto]);
		$('#homeBGop').css('background-image', 'url(_images/_home/bgHome'+numPhotoToLoad+'.jpg)');
		$('#nextBGop').css({opacity:0,"display":"none"});
		setTimeout(nextPhoto, timerDiaporama*2);
	}});	
}