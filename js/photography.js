var dropdown = function(){
	$('.dropdown-toggle').click(function(){
		$('.portfolio-menu').toggle();
	});
}

var gallery = function(){
	$('.photo').click(function(){
		//clickedImage();
		alert('hello');
	});
}

$(document).ready(function(){
	alert('got to document ready');
	dropdown();
	gallery();
	alert('done');
});


