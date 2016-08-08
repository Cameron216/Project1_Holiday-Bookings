// home page image carousel
$(function(){

	$('.carousel').carousel({
		interval: 6000
	});

});


// remove/add container class when window is resized 
$(window).resize(function() {
  if ($(window).width() < 768) {
    	$('nav').addClass('container');
	}else {
    	$('nav').removeClass('container');
	}
});