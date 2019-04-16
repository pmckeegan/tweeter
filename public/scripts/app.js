$(document).ready(function() {

//compose window animation
      $( "#nav-bar #compose" ).click(function() {
      $( ".container .new-tweet" ).slideToggle(function() {
      $( ".container .new-tweet textarea" ).focus();
    });
  });

//find existing tweets
function renderTweets(tweets) {
$(".tweet-container").empty();
  for (var i = 0; i < tweets.length; i++) {
    var tweetElement = createTweetElement(tweets[i]);
    $(".tweet-container").prepend(tweetElement);
  }
}
//send existing tweets to css
function createTweetElement(tweetData){
  let formattedDate = moment(tweetData.created_at).format('MMMM Do YYYY, h:mm a');
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
      <div class="dateposted">${formattedDate}</div> 
  </footer>
  </article>`
};

//function to retrieve the tweets from tweets.js
  function loadTweets(){
    $.ajax({ 
      method: "GET",
      url: "http://localhost:8080/tweets",
    })
    .then(function (tweets) {
     renderTweets(tweets);
     return;
    })
    
   
  }
//this loads the tweets from the tweets.js file

loadTweets();
//function to post the new tweet to the tweets file
$( "#tweetbox" ).submit(function (event) {
  var serialized = ( $( this ).serialize() );
  var textbox = $("#tweetbox textarea").val().trim();
  event.preventDefault();
//empty textbox error alert
  if (!textbox ){
      $( ".container .new-tweet .error2" ).slideDown();
      $( ".container .new-tweet textarea" ).focus();
        counter = 140;
//maximum tweet length exceeded alert
  } else if ((textbox).length > 140) {
    $( ".container .new-tweet .error1" ).slideDown();
    $( ".container .new-tweet textarea" ).focus();
      } else {
      $.ajax({
        type: 'POST',
        url: "/tweets/",
        data: serialized,
      })
      .then(() => {
        loadTweets();
      })
      counter = 140;
//clear text box and errors, reset counter
        $( "#tweetbox textarea").val("");
        $( ".container .new-tweet .error2" ).slideUp( "slow");
        $( ".container .new-tweet .error1" ).slideUp( "slow");
        };   
  })
  // });
});
