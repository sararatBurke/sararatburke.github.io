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

}	

$(document).ready(dropdown);

images = ['index/image/CA02.jpg','index/image/flower01.jpg' ,'index/image/CA01.jpg' , 'index/image/Animal01.jpg']


setInterval(forwardImage, 4000);


//This function will find the key for the current Image
function getCurrentImageKey() {
    i = $.inArray($('.slide').attr('src'),images);
    return i;
}

//Tis fuction will move the slideshow reward one
function reverseImage() {
	var currentImageKey = getCurrentImageKey();
	if (currentImageKey > 0){
		changeImage(currentImageKey - 1);
	}
	else{
		changeImage(images.length - 1 );
	}
}

//This function will move the slideshow forward one
function forwardImage() {
    var currentImageKey = getCurrentImageKey();
    if (currentImageKey < images.length - 1) {
        changeImage(currentImageKey + 1);
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