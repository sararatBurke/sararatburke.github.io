
var main = function() {
	$('.dropdown-toggle').click(function() {
		$('.portfolio-menu').toggle();
	  });

	$('.nextArrow').click(function(){
		var currentSlide = $('.active-slide');
    	var nextSlide = currentSlide.next();

    	if(nextSlide.length === 0) {
      		nextSlide = $('.slide').first();
    	}

    	currentSlide.fadeOut(600).removeClass('.active-slide');
    	nextSlide.fadeIn(600).addClass('.active-slide');
	});

	$('.previousArrow').click(function(){
		var currentSlide = $('.active-slide');
		var previousSlide currentSlide.previous();

		if(previousSlide.length === 0){
			previousSlide = $('.slide').last();
		}

		currentSlide.fadeOut(600).removeClass('.active-slide');
		previousSlide.fadeIn(600).addClass('.active-slide');
	});

}	

$(document).ready(main);

