$(function() {

$('.hero-slider').slick({
  infinite:true
});

// Fixed header
$(window).scroll(function() {
	if($(this).scrollTop() >= 30) {
		$('.page-header').addClass('scroll');
	}
	else{
		$('.page-header').removeClass('scroll');
	}
});


});