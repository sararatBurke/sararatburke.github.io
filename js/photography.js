var dropdown = function(){
	$('.dropdown-toggle').click(function(){
		$('.portfolio-menu').toggle();
	});
}

var gallery = function(){
	$('.photo').click(function(){
		var clickImageSource = $(this).attr('src');
		$('#slidePhoto').attr('src', clickImageSource);
	});

	$('.nextArrow').click(function(){
		forwardImage();
	});
	// $('.previousArrow')click(function(){
	// 	reverseImage();
	// });
}
function getcurrentImageKey(){
	i = $.inArray($('#slidePhoto').attr('src'), forwardImage);
	return i;
	alert('hi');
}
function forwardImage(){
	var currentImageKey = getcurrentImageKey();
	if (currentImageKey > 0){
		currentImageKey(currentImageKey - 1)
	}
}



$(document).ready(function(){
	dropdown();
	gallery();
});


