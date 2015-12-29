var self = this;
var dropdown = function() {

	$('.previousArrow').click(function(){
		reverseImage();
	});
	$('.nextArrow').click(function(){
		forwardImage();
	});

	$('.dropdown-toggle').click(function() {
		$('.portfolio-menu').toggle();
	  });

	/*$('.nextArrow').click(function(){
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
	});*/

}	

$(document).ready(dropdown);

images = ['index/image/CA02.jpg', 'index/image/CA01.jpg', 'index/image/FW01.jpg', 'index/image/Animal01.jpg']


//setInterval(forwardImage, 4000);


//This function will find the key for the current Image
function currentImageKey() {
    i = $.inArray(
    	$('.slide').attr('src'), 
    	images
    	);
    return i;
}

//Tis fuction will move the slideshow reward one
function reverseImage() {
	currentImageKey();
	if (i > 0){
		changeImage(i - 1);
	}
	else{
		changeImage(images.length - 1 );
	}
}

//This function will move the slideshow forward one
function forwardImage() {
    currentImageKey();
    if (i < images.length - 1) {
        changeImage(i + 1);
    } else {
        changeImage(0);
    }
}


//This function will change to image to whatever the variable i passes to it
function changeImage(i) {
    $('.slide').stop().animate({
        opacity: 100,
    }, 200, function() {
        $('.slide').attr('src', images[i]);
        $('.slideHolder').load(function() {
            $('.slide').stop().animate({
                opacity: 1,
            }, 200)
        })
    })
}