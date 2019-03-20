/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
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
}

function createTweetElement(tweetData){
    // user data
    return `
    <article class="tweet"> 
    <header> 
      <img class="icon" src="${tweetData.user.avatars.regular}"/>
      <h2 class = "username">${tweetData.user.name}</h2> 
      <p class = "userhandle">${tweetData.user.handle}</p> 
    </header> 
    <p class="content">${tweetData.content.text}</p>

    <footer class = "footer">
        <p>${tweetData.created_at}</p>
    </footer>
  </article>`  
};

$(document).ready(function() {
    var $tweet = createTweetElement(tweetData);

    // Test / driver code (temporary)
    console.log($tweet); // to see what it looks like
    $('.tweet-container').append($tweet); 
    
    // to add it to the page so 
    //we can make sure it's got all the right elements, classes, etc.
  });

