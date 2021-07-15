/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1626059964470
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1626146364470
  }
];




const createTweetElement = (tweet) => {
  const $tweet = $(".tweet-container");
  const html = `
  <article class="tweet">
    <header>
      <div class="username">
        <span><img src="https://icons.iconarchive.com/icons/ph03nyx/super-mario/48/Hat-Mario-icon.png" width="50px" height="50px"><img src/>Mario B</span>
        <span>@Mario&bros</span>
      </div>
      <div>
        <p>Text and text and more text</p>
      </div>
      <footer class="tweet-footer">
        <div>
          <span>10 days ago</span>
        </div>
        <dev class="tweet-bottom"></dev>
        <div class="tweet-actions">
          <i class="fas fa-flag"></i>
          <i class="fas fa-retweet"></i>
          <i class="fas fa-heart"></i>
        </div>
      </footer>
    </header>
  </article>
  <article class="tweet">
    <header>
      <div class="username">
        <span><img src="https://icons.iconarchive.com/icons/ph03nyx/super-mario/48/Hat-Luigi-icon.png" width="50px" height="50px"><img src/>Luigi B</span>
        <span>@Luigi&bros</span>
      </div>
      <div class="text-in">     
        <p>Text and text and more text</p>
      </div>
      <footer class="tweet-footer">
        <div>
          <span>10 days ago</span>
        </div>
        <div class="tweet-actions">
          <i class="fas fa-flag"></i>
          <i class="fas fa-retweet"></i>
          <i class="fas fa-heart"></i>
        </div>
      </footer>
    </header>
  </article>`;
  return html;
};
