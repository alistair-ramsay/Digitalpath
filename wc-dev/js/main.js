$.easing.easeOutCubic = function (x, t, b, c, d) {
	return (t==d) ? b+c : c * (-Math.pow(2, -12 * t/d) + 1) + b;
}

$(document).ready(function() {
    
    
    $(".back-to-top").click(function() {
    	$('html, body').animate({scrollTop: $("header").offset().top}, 800, 'easeOutCubic');
    });
    
    $(".sub-menu-button, .sub-menu").hover(
		function() {
			$(".sub-menu").addClass("sub-menu-hover");
  		}, function() {
  			$(".sub-menu").removeClass("sub-menu-hover");
  		}
    );
    
    $(".sub-menu-button").click(function() {
			$(".sub-menu").toggleClass("sub-menu-clicked");
			$(this).toggleClass("sub-menu-button-clicked");
  	});
  	
  	$(".menu-button").click(function() {
			$("menu").toggleClass("mobile-hide");
			$(this).toggleClass("sub-menu-button-clicked");
  	});
     	
});
     	