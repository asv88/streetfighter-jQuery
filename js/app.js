$(document).ready(function() {
   doIntro();
   playGame();
});
 
   var coolSound = false;
   function playCool () {
     coolSound = !coolSound;
      if (coolSound) {
      $('#theme-song')[0].pause();
       // $('#cool')[0].load()
      $('#cool')[0].play();
    }
   }
 
   var hadoukenSound = false;
  function playHadouken () {
	  hadoukenSound =! hadoukenSound;
	  if (hadoukenSound) {
	      //CREATES NEW FUNCTION FOR AUDIO
         $('#hadouken-sound')[0].volume = 0.5;
         //sets volume
         $('#hadouken-sound')[0].load();
         //loads when document ready
          $('#hadouken-sound')[0].play();
         //plays it
	  }
 }
 
  function playGame() {
   $('.ryu').mouseenter(function() {
       $('.ryu-action').hide();
       $('.ryu-ready').show();
	   //when mouse hovers div (.ryu) container 
	   //image swaps with animated .gif(.ryu-still/.ryu-ready) by show/hide methods
  }).mouseleave(function () {
	 //use of method chaining inside function
	  $('.ryu-action').hide();
	  $('.ryu-still').show();
	  //when mouse hover leaves div, images swap again
  }).mousedown(function() {
	playHadouken();
    // play function hadoudoken sound when mouse click is held down.
    $('.ryu-action').hide();
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
    $('.ryu-action').hide();
    $('.ryu-ready').show();
  });
  //Activated when mouse click is released.
  //Original .ryu-ready animation shown again
  //semi-colon ends method chaining 
  
  $(document).keydown(function(e){
     	if (e.keyCode == 88) {
		//Specificy event argument (e), 
		//(passing through function (.keydown (function))) as 
		//Character X with "which" property	 
	     $('.ryu-action').hide();
		 $('.ryu-cool').show();
	     playCool();
		}
    })
	   	.keyup(function(e) {
			if (e.keyCode == 88) 
		   $('#cool')[0].pause();
           $('#cool')[0].load();
		   $('.ryu-cool').hide();
		   $('.ryu-still').show();
		   	   
   });
  }


function doIntro() {
  $('#theme-song')[0].volume = 0.3;
  $('#theme-song')[0].play();
  $('.Streetfighter').fadeIn(3500, function() {
    $(this).fadeOut(1000, function() {
      $('.intro').fadeIn(1500, function() {
        $(this).fadeOut(1000, function() {
          $('.jQuery').fadeIn(1500, function() {
            $(this).fadeOut(1500, function() {
              $('.instructions').fadeIn(1000);
            });
          })
        })
      })
    })
  })
}	
	  
 
  
