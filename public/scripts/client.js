/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {

  $(".new-tweet form").submit(function(event) {
    event.preventDefault();
    alert("Submitted");
    $.post("/tweets", $(".new-tweet form").serialize())
      .then(() => {
      });
      .catch((err) => {
        console.log(`Error loading articles: ${err}`)
    })
  });

  const loadtweets = function() {
    $.ajax('/tweets', { method: 'GET', dataType: "json" })
      .then(function (data) {
        console.log('Success: ',data);
        renderTweets(data);
    });
  };

  loadtweets();
  
  // const data = [
  //   {
  //     "user": {
  //       "name": "MarioBros",
  //       "avatars": "https://icons.iconarchive.com/icons/ph03nyx/super-mario/48/Hat-Mario-icon.png",
  //       "handle": "@MarioB"
  //     },
  //     "content": {
  //       "text": "I am not a king but I have my princess!!!..."
  //     },
  //     "created_at": 1626059964470
  //   },
  //   {
  //     "user": {
  //       "name": "LuigiBros",
  //       "avatars": "https://icons.iconarchive.com/icons/ph03nyx/super-mario/48/Hat-Luigi-icon.png",
  //       "handle": "@LuigiB"
  //     },
  //     "content": {
  //       "text": "I am a sancho for my Quijote Mario :)..."
  //     },
  //     "created_at": 1626146364470
  //   }
  // ];

  const renderTweets = (tweets) => {
    for (let theTweet of tweets) {
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
        <p>"${tweet.content.text}"</p>
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
