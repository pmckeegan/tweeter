$(document).ready(function() {

  
    $( "#nav-bar #compose" ).click(function() {
      $( ".container .new-tweet" ).slideToggle( "slow", function() {
      $( ".container .new-tweet textarea" ).focus();
    });
  });

function renderTweets(tweets) {
$(".tweet-container").empty();
tweets.reverse();
  for (var i = 0; i < tweets.length; i++) {
    console.log(tweets[i]);
    var tweetElement = createTweetElement(tweets[i]);
    $(".tweet-container").append(tweetElement);
  }
}

function createTweetElement(tweetData){
    return `
    <article class="tweet"> 
    <header class="header"> 
      <img class="icon" src="${tweetData.user.avatars.regular}"/>

      <h2 class = "username">${tweetData.user.name}</h2>

      <div class = "userhandle">${tweetData.user.handle}</div> 
    </header> 

    <p class="content">${tweetData.content.text}</p>
    <footer class = "footer">
      <div class = "footerimages">
          <img src="images/flag-solid.svg"/>
          <img src="images/heart-solid.svg"/>
          <img src="images/retweet-solid.svg"/>
      </div>
       <div class="dateposted">${tweetData.created_at}</div>
    </footer>
    </article>`
};


//function to retrieve the tweets from tweets.js
  function loadTweets(){
    console.log("this is running!!");
    $.ajax({ 
      method: "GET",
      url: "http://localhost:8080/tweets",
    })
    .then(function (tweets) {
     renderTweets(tweets);
    });
    
    return;
  }
//this loads the tweets from the tweets.js file
loadTweets();

//function to post the new tweet to the tweets file
  $( "#tweetbox" ).submit(function (event) {
    var serialized = ( $( this ).serialize() );
    var textbox = $("#tweetbox textarea").val();;
    event.preventDefault();

    if (!textbox){
      console.log("empty textbox")
        $( ".container .new-tweet .error2" ).slideDown( "fast");
    } else if ((textbox).length > 140) {
      $( ".container .new-tweet .error1" ).slideToggle( "fast");
        $( ".container .new-tweet textarea" ).focus();
    } else {
    $.ajax({
      type: 'POST',
      url: "/tweets/",
      data: serialized,
    })
    $( "#tweetbox textarea").val("");
    $( ".container .new-tweet .error2" ).slideUp( "fast");
    $( ".container .new-tweet .error1" ).slideUp( "fast");


  console.log(serialized);
    }
   
  });
  ;
});