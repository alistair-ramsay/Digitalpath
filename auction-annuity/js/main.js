$.easing.easeOutCubic = function (x, t, b, c, d) {
	return (t==d) ? b+c : c * (-Math.pow(2, -12 * t/d) + 1) + b;
}

$(document).ready(function() {
	
	$(".register-scroll").click(function() {
    	$('html, body').animate({scrollTop: $("#form").offset().top}, 800, 'easeOutCubic');
    });
    
    
    $("#back-to-top").click(function() {
    	$('html, body').animate({scrollTop: $("header").offset().top}, 800, 'easeOutCubic');
    });
   
     	
    $( "li" ).prepend( '<span class="circle"></span>' );     	
     	
});
     	