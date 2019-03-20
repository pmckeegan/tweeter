/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.
const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": {
          "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
          "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
          "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
        },
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": {
          "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
          "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
          "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
        },
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Johann von Goethe",
        "avatars": {
          "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
      },
      "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      "created_at": 1461113796368
    }
  ];
  
  function renderTweets(tweets) {
    data.forEach(function(tweet) {
         // loops through tweets
      // calls createTweetElement for each tweet
      // takes return value and appends it to the tweets container
function createTweetElement(tweetData){
    // user data
    return `
<section class="tweet-container">
    <article class="tweet"> 
      <header> 
        <img class="icon" src="${tweetData.user.avatars.regular}"/>
        <h2 class = "username">${tweetData.user.name}</h2> 
        <p class = "userhandle">${tweetData.user.handle}</p> 
      </header> 
    <p class="content">${tweetData.content.text}</p>
        <img src="images/flag-solid.svg"/>
        <img src="images/heart-solid.svg"/>
        <img src="images/retweet-solid.svg"/>
      <footer class = "footer">
        <p>${tweetData.created_at}</p>
      </footer>
    </article>
</section> `  
  
};

});

$(document).ready(function() {
    var $tweet = createTweetElement(tweetData);

    // Test / driver code (temporary)
    console.log($tweet); // to see what it looks like
    $('.tweet-container').append($tweet); 
    
    // to add it to the page so 
    //we can make sure it's got all the right elements, classes, etc.
  });
