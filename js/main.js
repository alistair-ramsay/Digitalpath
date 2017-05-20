$(document).ready(function() {
	
	$.easing.easeOutCubic = function (x, t, b, c, d) {
        return (t==d) ? b+c : c * (-Math.pow(2, -12 * t/d) + 1) + b;
    }
    
    //if needed the background hero images can alternate
    
    $(function() {
		var body = $('#image');
		var current = 0;
				
		function nextBackground() {
			body.css(
				'background',
				backgrounds[current = ++current % backgrounds.length]
			);
				
			setTimeout(nextBackground, 7000);
		}
		
		setTimeout(nextBackground, 7000);
		body.css('background', backgrounds[0]);
		
	});
						
	//set height of mobile menu and redo if device resized
    
    $(window).resize(function () {
	
		var mobilemenudownHeight = $('#mobile-menu-down').height();
		$('#mobile-menu-down').css('bottom', mobilemenudownHeight);
	
	});
	
	//mobile menu function
	
	$('.mobile-menu').click(function(){
	
	var mobilemenudownHeight = $('#mobile-menu-down').height();
	$('#mobile-menu-down').css('bottom', mobilemenudownHeight);
	
	if($('#mobile-menu-down').hasClass('active')) {  
			$('#mobile-menu-down').stop().animate({bottom: "0px"}, 300, "easeOutCubic");
			$('#mobile-menu-down').removeClass('active');
			$('.mobile-header-wrapper').removeClass("opaque");
			$('.info').fadeIn();
			
		} else {  
	        $('#mobile-menu-down').stop().show().animate({bottom: -mobilemenudownHeight}, 1500, "easeOutCubic");
	        $('#mobile-menu-down').addClass("active");
	        $('.mobile-header-wrapper').addClass("opaque");
	        $('.info').fadeOut(100);
	        
	    }  
	    return false; 
	    
	});
    
    //make whole of dropdown panel li a link
    
    $('#mobile-menu-down li').click(function(){
		window.location=$(this).find('a').attr('href'); 
		return false;
	});
    
    // info overlay function
    
    $('.info').click(function(){
		
		if($('.info-overlay-wrapper').hasClass('active')) {  
			$('.info-overlay-wrapper').fadeOut( 100, function(){
				$(this).removeClass("active");
			});
			
		} else { 
			 
        	$('.info-overlay-wrapper').fadeIn(function(){
				$(this).addClass("active");
			});
			
			return false;
			alert('false');
		}  
    
    });
    
    
    $('#image, #chrome, .icon-close-wrapper').click(function(){
	   
		$('.info-overlay-wrapper, .contact-overlay-wrapper').fadeOut( 100, function(){
			$(this).removeClass("active");
		});
	    $('.info').fadeIn();
	});
		
	
	$('#get-in-touch-wrapper').click(function(){
		
		$('#mobile-menu-down').stop().animate({bottom: "0px"}, 300, "easeOutCubic");
		$('#mobile-menu-down').removeClass('active');
		$('.mobile-header-wrapper').removeClass("opaque");
		$('.info').fadeIn();
		
		if($('.contact-overlay-wrapper').hasClass('active')) {  
			$('.contact-overlay-wrapper').fadeOut( 100, function(){
				$(this).removeClass("active");
			});
			$('.info').fadeIn();
			
		} else { 
			 
        	$('.contact-overlay-wrapper').fadeIn(function(){
				$(this).addClass("active");
			});
			$('.info').fadeOut(100);
			
			return false;
			
		}  
    
    });
    
    // form
    
    
    $(".button").click(function() {
	  $("#label-name, #label-email, #label-message").removeClass('error'); 
	   
  	  	var name = $("input#name").val();
  	  	if (name == "") {
	        $("#label-name").addClass('error');
	        $("input#name").focus();
	        return false;
	      }
  		var email = $("input#email").val();
  		if (email == "") {
	        $("#label-email").addClass('error');
	        $("input#email").focus();
	        return false;
	      }
  		var message = $("textarea#message").val();
  		if (message == "") {
	        $("#label-message").addClass('error');
	        $("textarea#message").focus();
	        return false;
	      }  
  
  
      var dataString = 'name='+ name + '&email=' + email + '&message=' + message;

	  $.ajax({
	    beforeSend: function() {$('.button').html('Sending, please wait a moment...')},
		method: "POST",
	    url: "https://formspree.io/alistair@digitalpath.co.uk",
	    data: dataString,
	    success: function() {
	      $('.contact-overlay-right').addClass('confirm-bg');
	      $('.contact-overlay-right .info-title .info-panel-padding h2').html('Message Sent');
	      $('.info-panel-wrapper').html("<div class='info-panel-padding'><p>Thanks! I'll be in touch.</p></div>");
	    }
	  });
	  return false;
  
	
  

  });
    
});    
