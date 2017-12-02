$(document).ready(function() {
	
	
	$('#search').hover(function(){
		$(this).css('background' , '#74e0c1');
		$('.search-field').css('color' , '#141e14');
		$('.search-icon .fill').css('fill' , '#141e14');
		
	},
			
		function(){
			$(this).css('background' , '#141e14');
			$('.search-field').css('color' , '#74e0c1');
			$('.search-icon .fill').css('fill' , '#74e0c1');
		}
		
		
	);
	
	$('#menu-icon').click(function(){
		$(this).toggleClass('open');
		$('header nav').fadeToggle(500).css('display', 'table');
		$('#menu-bg').fadeToggle(500);
		$('body').toggleClass('fixed');
		
	});
		
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
		
	$(window).resize(function() {
		if(windowWidth != $(window).width()){
			location.reload();
			return;
		}
	});
	
	
	$('.expandable').siblings('.second-level').addClass('not-shown');
	
	
		
		
	
	$('#side').click(function(){
		
		if ($('#side').hasClass('mob-nav-not-active')) {
			
			$(this).toggleClass('mob-nav-not-active');
			$('#main').toggleClass('mob-nav-not-active');
			$('#dividing-line').toggleClass('mob-nav-not-active');		
		}
	});
	
	$('.inside #main').click(function(){
		
		if (!$('#main').hasClass('mob-nav-not-active')) {
			
			$(this).toggleClass('mob-nav-not-active');
			$('#side').toggleClass('mob-nav-not-active');
			$('#dividing-line').toggleClass('mob-nav-not-active');
			
		}
	});
	
	if (windowWidth > 737) {
		
		$('.expandable, .expanded').click(function(){
			$(this).siblings('.second-level').slideToggle().toggleClass('shown').toggleClass('not-shown');
			$(this).toggleClass('expandable').toggleClass('expanded');
			
		
	});
	
	}
		
	
	
	if (windowWidth < 737) {
	    
	    var sideHeight = $('#side').height();
		var mainHeight = $('#main').height();
	    
	    if (mainHeight < sideHeight){
		    $('#main').css('height',sideHeight);
	    }
	    
	    if (mainHeight > sideHeight){
		    $('#side').css('height',mainHeight);
	    }

	    
	    
	    $('header nav li a').click(function(){
			$('#menu-icon').toggleClass('open');
			$('nav').fadeToggle(200);
			$('#menu-bg').fadeToggle(200);
			$('body').toggleClass('fixed');
		});
		
		$('#search').hover(function(){
			$(this).css('background' , '#74e0c1');
			$('.search-field').css('color' , '#141e14');
			$('.search-icon .fill').css('fill' , '#141e14');
			
		},
				
			function(){
				$(this).css('background' , '#08b197');
				$('.search-field').css('color' , '#141e14');
				$('.search-icon .fill').css('fill' , '#141e14');
			}
		
		
		);
		
		$('.expandable, .expanded').click(function(){
		
			if (!$('#side').hasClass('mob-nav-not-active')) {
					
				$(this).siblings('.second-level').slideToggle().toggleClass('shown').toggleClass('not-shown');
				$(this).toggleClass('expandable').toggleClass('expanded');
				
			}
		});
		
		$('.second-level a').click(function(){
			
			if ($('#main').hasClass('mob-nav-not-active')) {	
				
				$('#side').toggleClass('mob-nav-not-active');
				$('#main').toggleClass('mob-nav-not-active');
				$('#dividing-line').toggleClass('mob-nav-not-active');
				return false
				
			}
			
					});

	
	
	}   
        
    $("#back-to-top").click(function() {
     	$('html, body').animate({scrollTop: 0}, 1000);
     	return false
	});  
	
	
	
		
});