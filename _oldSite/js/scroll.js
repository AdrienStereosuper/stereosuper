// liens externes
$(document).ready(function(){
	// external links
	if (!document.getElementsByTagName) return;
	var anchors = document.getElementsByTagName("a");
	for (var i=0; i<anchors.length; i++) {
	   var anchor = anchors[i];
	   if (anchor.getAttribute("href") &&
	       anchor.getAttribute("rel") == "external")
	   anchor.target = "_blank";
	}
}); 
// scroll
$(window).scroll(function() {
  	var move = Math.ceil($(window).scrollTop()/100)%2;
  	if (move==1) {
		$("#fighters").css('backgroundPosition', "0 0");
	} else {
		$("#fighters").css('backgroundPosition', "0 -352px");
	}
});