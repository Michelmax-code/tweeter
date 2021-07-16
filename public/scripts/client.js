/* eslint-disable no-undef */
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {

  $(".new-tweet form").submit(function(event) {
    event.preventDefault();
    $(".errorMessage").slideUp("slow");
    if ($("#tweet-text").val().length < 1) {
      //console.log("Tweet empty!");
      $(".errorMessage").text("Please type something, the tweet is empty! :(");
      $(".errorMessage").slideDown("slow");
      return;
     
    }

    if ($("#tweet-text").val().length > 140) {
      //console.log("too many characters");
      $(".errorMessage").text("To many characters (140 max), sorry :(");
      $(".errorMessage").slideDown("slow");
      return;
    }

    //alert("Submitted");
    $.post("/tweets", $(".new-tweet form").serialize())
      .then(() => {
        loadtweets();
      })
      .catch((err) => {
        console.log(`Error loading articles: ${err}`);
      });
  });

  const loadtweets = function() {
    $.ajax('/tweets', { method: 'GET', dataType: "json" })
      .then(function(data) {
        //console.log('Success: ',data);
        renderTweets(data);
      });
  };

  loadtweets();
  
  const escape = (str) => { // Cross-Site Scripting
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    //console.log("TEST Div", div);
    //console.log("TEST INNER", div.innerHTML);
    return div.innerHTML;
  };

  const renderTweets = (tweets) => {
    $(".tweet-container").empty();
    for (let theTweet of tweets) { // calls createTweetElement for each tweet
      $('.tweet-container').append(createTweetElement(theTweet));
    }
  };

  const createTweetElement = (tweet) => {
    let $tweet = `
  <article class="tweet">
    <header>
      <div class="username">
        <span><img src="${tweet.user.avatars}">"${tweet.user.name}"</span>
        <span>"${tweet.user.handle}"</span>
      </div>
      <div>
        <p>"${escape(tweet.content.text)}"</p>
      </div>
      <footer class="tweet-footer">
        <div>
          <span id="footer-date">${timeago.format(tweet.created_at)}</span>
        </div>
        <dev class="tweet-bottom"></dev>
        <div class="tweet-actions">
          <i class="fas fa-flag"></i>
          <i class="fas fa-retweet"></i>
          <i class="fas fa-heart"></i>
        </div>
      </footer>
    </header>
  </article>`;
    return $tweet;
  };

  //renderTweets(data);
});
