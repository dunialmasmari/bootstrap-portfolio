
$(document).ready(function () {
	$(window).scroll(function () {
	if ($(document).scrollTop() > 600) {
	$("nav").addClass("scroll");
	} else {
	$("nav").removeClass("scroll");
	}
	});
	});
	
	
