$(function() {

$('.hero-slider').slick({
  infinit:false,
  vertical:true,
  verticalSwiping:true
});

// Fixed header
$(window).scroll(function() {
	if($(this).scrollTop() >= 30) {
		$('.header').addClass('scroll');
	}
	else{
		$('.header').removeClass('scroll');
	}
});


});