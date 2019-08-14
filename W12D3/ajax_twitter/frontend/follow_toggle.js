const APIUtil = require("./api_util.js");

class FollowToggle {
  constructor(el){
    this.userId = $(el).data("user-id");
    this.followState = $(el).data("initial-follow-state");
    this.$el = $(el);
    // debugger
    // this.$el.on("click", console.log("clicked on buttons"));
    this.$el.click(this.handleClick.bind(this));
    this.render();
  }

  render () {
    if (this.followState === "unfollowed") {
      this.$el.text("Follow!");
      this.$el.prop('disabled', false);
    } else if (this.followState === "followed") {
      this.$el.text("Unfollow!");
      this.$el.prop('disabled', false);
    } else if (this.followState === "following") {
      this.$el.text("Following");
      this.$el.prop('disabled', true);
    } else if (this.followState === "unfollowing") {
      this.$el.text("Unfollowing");
      this.$el.prop('disabled', true);
    }
  }

  successFollowed () {
    this.followState = "followed";
    console.log("successfully followed");
    this.render();
  }
  successUnfollowed() {
    this.followState = "unfollowed";
    console.log("successfully unfollowed");
    this.render();
  }
  error () { 
    console.log("error"); 
  }

  handleClick (event) {
    event.preventDefault();

    if (this.followState === "followed"){
      this.followState = "unfollowing";
      this.render();
      // debugger
      APIUtil.unfollowUser(this.userId).then(
        this.successUnfollowed.bind(this), this.error
      );
    } else if (this.followState === "unfollowed") {
      this.followState = "following";
      this.render();
      APIUtil.followUser(this.userId).then(
        this.successFollowed.bind(this), this.error
      );
    }
  }
}

module.exports = FollowToggle;



// if (this.followState === "followed") {
//   $.ajax({
//     method: "DELETE",
//     url: `/users/${this.userId}/follow`,
//     dataType: "json",
//     success: () => {
//       this.followState = "unfollowed";
//       console.log("successuflly unfollowed");
//       this.render();
//     },
//     error: function () { console.log("error") }
//   });
// } else {
//   $.ajax({
//     method: "POST",
//     url: `/users/${this.userId}/follow`,
//     dataType: "json",
//     success: () => {
//       this.followState = "followed";
//       console.log("successuflly followed");
//       this.render();
//     },
//     error: function () { console.log("error") }
//   });
// }