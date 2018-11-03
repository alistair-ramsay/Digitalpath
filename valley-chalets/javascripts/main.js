$.easing.easeOutCubic=function(e,t,i,n,c){return t==c?i+n:n*(-Math.pow(2,-12*t/c)+1)+i},$(document).ready(function(){if($(".closed").nextAll(".copy-section").css("display","none"),$(".copy-section-title").click(function(){$(this).next(".copy-section").slideToggle("2000","easeOutCubic"),$(this).toggleClass("closed"),$(this).toggleClass("opened")}),$(".go-top").click(function(){return $("html, body").animate({scrollTop:$(".top-of-page").offset().top-50},1e3,"easeOutCubic"),!1}),navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)){var e=document.querySelector('meta[name="viewport"]');e&&(e.content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0",document.body.addEventListener("gesturestart",function(){e.content="width=device-width, minimum-scale=0.25, maximum-scale=1.6"},!1))}$("#gallery").cycle({speed:"fast",timeout:0,pager:"#gallery-thumbs",next:".control-right",prev:".control-left",containerResize:!1,slideResize:!1,fit:1,pagerAnchorBuilder:function(e,t){return'<li><a href="#"><img src="'+t.src+'" width="60" height="60" /></a></li>'}}),$(document.documentElement).keyup(function(e){39==e.keyCode&&$("#gallery").cycle("next"),37==e.keyCode&&$("#gallery").cycle("prev")})});



$(".property-image").css({'height':($(".property-copy").height()+'px')});



