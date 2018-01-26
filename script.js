$(document).ready( function() {

  var scrollTop = $(".container").scrollTop();
  
  $(".container").scroll( function() {
  	var scrollTop = $(this).scrollTop();
  	
  	if(scrollTop > 155) {
    	$(".video").animate({
        "height": "100px",
        "width": "200px",
      });
      $(".video").css({
      	"position": "fixed",
        "top": 20, "right": 40,
      });
    };
  });

});
