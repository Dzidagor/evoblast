$(function() {

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

var swiper = new Swiper('.hero-slider', {
  direction: 'vertical',
  mousewheel: true,
  mousewheel: {
    forceToAxis: true,
    sensitivity: 1,
    releaseOnEdges: true,
},
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

