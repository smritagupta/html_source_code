$(document).ready(function(){
	// top nav
	$('.show-nav').click( function(){
		$(this).parents('.nav-top-w').find('.top-nav').slideToggle();
		$(this).find('.fa').toggle();
		$(this).find('.material-icons').toggle();
	});
	
	// Room book
	$('.book-button').click( function(){
		$('.book-room-form').animate({'top':'0', 'opacity':'1', 'zIndex':'999'});
	});
	
	$('.close-button').click( function(){
		$(this).parent().animate({'top':'-400%', 'opacity':'0', 'zIndex':'-999'});
	});
	
	// date picker
	$(function() {
		$( ".calander-input" ).datepicker();
	});
	
	// welcome text toggle
	$('.rm-welcome').click( function(){
		$('.welcome-mc').slideToggle();
	});
	
	// footer transform  // Resize
	var mf = $('.main-footer').height();
	$('.transform-footer').css({'height': mf});
	
	// our feature transform  // Resize
	var ot = $('.out-ft-w').height();
	$('.oft-transform').css({'height': ot});
		
	// banner Slide
	$('.hero-slider').superslides({
		hashchange: false,
		play: 4000,
		pagination: false,
	});
	
	// eqH
	equalheight('.eqH');
	
	// slider testimonials
	$(".slider-testimonials").owlCarousel({
		items:1,
		itemsTablet: [1500,1],
		navigation : true, 
		pagination: false,
		autoplay : true,
		autoplaySpeed : 700,
		autoplayTimeout:4200,
	});
	
	// Inside page footer slider
	$('.insideInfo-slider').owlCarousel({
		items : 4, 
		itemsDesktop : [1000,3], 
		itemsDesktopSmall : [990,2],
		itemsTablet: [600,1],
		itemsMobile : false,
		autoPlay: true,
		navigation : true, 
		pagination: false
	});
	
	// Mobile Toggle
	$('.mobile .menu-link').click( function(){
		$('.closeBtn-menu').show();
		$('#menu').addClass('showMenu');
		$('.content-wrap').addClass('slideMenu');		
	});
	$('.closeBtn-menu a').click( function(){
		$('.closeBtn-menu').hide();
		$('#menu').removeClass('showMenu');
		$('.content-wrap').removeClass('slideMenu');		
	});
	
	// footer nav 
	$('.footer-nav-button').click( function(){
		$(this).siblings('.nlst-foo').slideToggle();
	});
	
});

$(window).load(function(){
	// eqH
	equalheight('.eqH');
		
});

$(window).scroll(function(){
	
		
});

$(window).resize(function(){
	// eqH
	equalheight('.eqH');
	
	// footer transform
	var mf = $('.main-footer').height();
	$('.transform-footer').css({'height': mf});
	
});

// equalheight
equalheight = function(container){
var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;
 $(container).each(function() {
   $el = $(this);
   $($el).height('auto')
   topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
}




