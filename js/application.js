$( document ).ready(function() {
  // refactored  using .hover() and toggle().
  var one = $('.basecamp-one')
  var two = $('.basecamp-two')
  var hone = $('.highrise-one')
  var cone = $('.campfire-one')
  
  $('.inner-block#one')
  	.hover(function(){
		one.toggle();
		two.toggle();
  });
  	
	  
 $('.inner-block#two')
 	.hover(function(){
		one.toggle();
		hone.toggle();
	
  });
  	
	
	
$('.inner-block#three')
	.hover(function(){
		one.toggle();
		cone.toggle();
  });
  
});



	 