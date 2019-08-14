const FollowToggle = require('./follow_toggle.js');
const UsersSearch = require('./users_search.js');

$(function () {
  const $buttons = $('button.follow-toggle');
  $buttons.each( (idx, button) => new FollowToggle(button) );
  // $buttons.click(console.log("clicked"));
  const $userSearches = $('nav.user-search');
  $userSearches.each((idx, user) => new UsersSearch(user));
});