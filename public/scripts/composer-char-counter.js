//character counter for tweet window

var counter=140;
$(document).ready(function() {
  $("textarea").on("keyup", function() {
    counter = ((140 - ($(this).val().length)));
    $("form").find(".counter").text(counter) 
    if (counter < 1) { 
    $(".counter").addClass("red");
    } else if (counter > 1) {
      $(".counter").removeClass("red");

    }
    
  });
});