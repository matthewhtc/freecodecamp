$(document).ready(function() {
  
	//declare variables
	var $button = $(".links");
	var $body = $("body");

	//add smooth scrolling to all links inside nav
	$(".scroll-nav a").on("click", function(event) {

		// Make sure this.hash has a value before overriding default behavior
    	if (this.hash !== "") {
    		// Prevent default anchor click behavior
      		event.preventDefault();

      		//store hash
      		var hash = this.hash;

      		// Using jQuery's animate() method to add smooth page scroll
      		// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      		$('html, body').animate({scrollTop: $(hash).offset().top}, 700, function() {
      			// Add hash (#) to URL when done scrolling (default click behavior)
      			window.location.hash = hash; 
      		}); 
      	}//end if
	});


  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
      console.log($(window).scrollTop())
      var headHeight = $('body').height();
    if ($(window).scrollTop() > headHeight) {
      $('#navbar-two').addClass('navbar-fixed-top');
    }
    if ($(window).scrollTop() < headHeight) {
      $('#navbar-two').removeClass('navbar-fixed-top');
    }
  });
});