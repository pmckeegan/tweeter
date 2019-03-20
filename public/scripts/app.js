/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.
// Fake data taken from tweets.json
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

  for (var i = 0; i < tweets.length; i++) {
    console.log(tweets[i]);
    var tweetElement = createTweetElement(tweets[i]);
    $(".tweet-container").append(tweetElement);
  }
  // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
}

function createTweetElement(tweetData){
    return `
    <article class="tweet"> 
    <header class="header"> 
      <img class="icon" src="${tweetData.user.avatars.regular}"/>

      <div class = "username">${tweetData.user.name}</div>

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

$(document).ready(function() {

  renderTweets(data);
    // var $tweet = createTweetElement(tweetData);
    // Test / driver code (temporary)
    // console.log($tweet); // to see what it looks like
    // $('.tweet-container').append($tweet); 
    
    // to add it to the page so 
    //we can make sure it's got all the right elements, classes, etc.
  }); 