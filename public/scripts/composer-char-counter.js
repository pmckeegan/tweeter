
//test
//console.log("composer-char-counter.js linked")
$(document).ready(function() {
    //console.log("dom is ready.....");

    $("textarea").on("keyup", function() {
        
        var counter = ((140 - ($(this).val().length)));
        $("form").find(".counter").text(counter) 
        //console.log($(".counter").html = (140 - ($(this).val().length)));
        //make the text red if over 140 characters.
    if (counter < 1) { 
        $(".counter").addClass("red");
    }
    });
  });




  

//use .find counter 
