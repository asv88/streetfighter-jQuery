$(document).ready(function() {
   $('.ryu').mouseenter(function() {
       $('.ryu-still').hide();
       $('.ryu-ready').show();
	   //when mouse hovers div (.ryu) container 
	   //image swaps with animated .gif(.ryu-still/.ryu-ready) by show/hide methods
  }).mouseleave(function () {
	 //use of method chaining inside function
	  $('.ryu-still').show();
	  $('.ryu-ready').hide();
	  //when mouse hover leaves div, images swap again
  }).mousedown(function() {
	playHadouken();
    // play function hadoudoken sound when mouse click is held down.
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show().animate({'left': '300px'}, 500,         //.finish(), finishes any animation before showing the hadouken at its original position. Allows users to click repeatedly on Ryu and keep the hadouken animation start at his hands instead of mid-animation (far-right position).
	         // animates hadouken to the right of the screen
			//call back function within the .hadoucken, inside the .mousedown function
			function()	{
               $(this).hide();
			   //hides the hadouken when animation completes
               $(this).css('left', '-212px');
			   //puts hadouken back to original css position
			   $(this).closest('.main').find('.ryu').css('top', '-300px')	
			})
			
   	  //this function shows throwing position and animated gif weapon. Activated when holding the mouse click down.
  })
  .mouseup(function() {
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
  })
  //Activated when mouse click is released.
  //Original .ryu-ready animation shown again
  //semi-colon ends method chaining 
   .keydown(function () {
     var e = $.Event("keydown",{keycode : 88}); //Create event of keydown // Character X with "keycode" property
	 $('.ryu').trigger(e);
	 $('ryu-cool').show();
	 $('.ryu-ready').hide();
    });
	  
  function playHadouken () {
	  //CREATES NEW FUNCTION FOR AUDIO
  $('#hadouken-sound')[0].volume = 0.5;
  //sets volume
  $('#hadouken-sound')[0].load();
  //loads when document ready
  $('#hadouken-sound')[0].play();
  //plays it
}
  
  
});