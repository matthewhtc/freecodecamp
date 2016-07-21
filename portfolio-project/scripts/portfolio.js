$(document).ready(function() {

	//declare variables
	var $button = $(".links");
	var $body = $("body");

	//add smooth scrolling to all links inside nav
	$("#nav a").on("click", function(event) {

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

	//button hover effect
	$button.hover(
		function() {
			$(this).css("color", "#ffcc00");
		},
		function() {
			$(this).css("color", "white");
		}
	);
});