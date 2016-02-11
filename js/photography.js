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
	
}



$(document).ready(function(){
	dropdown();
	gallery();
});


