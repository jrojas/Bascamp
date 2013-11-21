$( document ).ready(function() {
  // Handler for .ready() called.
  var one = $('.basecamp-one')
  var two = $('.basecamp-two')
  var hone = $('.highrise-one')
  var cone = $('.campfire-one')
  
  $('.inner-block#one').mouseenter(function(){
	one.css("display","none");
	two.css("display","block");
	
	
  
  });

  $('.inner-block#one').mouseleave(function(){
    	one.css("display","block");
		two.css("display","none");
		
	  });	
	  
 $('.inner-block#two').mouseenter(function(){

	one.css("display","none");
	hone.css("display","block");
	
  
  });

  $('.inner-block#two').mouseleave(function(){
    	hone.css("display","none");
		one.css("display","block");
		
	});
	
	
$('.inner-block#three').mouseenter(function(){

	one.css("display","none");
	cone.css("display","block");
	
  
  });

  $('.inner-block#three').mouseleave(function(){
    	
		one.css("display","block");
		cone.css("display","none");
		
	});
  
});



	 