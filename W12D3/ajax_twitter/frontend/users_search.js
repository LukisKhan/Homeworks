class UsersSearch {
  constructor(el) {
    this.$el = $(el);
    debugger;
    this.$ul = $(el).find('.users');
    this.$input = $(el).find("input[name=user]");
  }

  
}

module.exports = UsersSearch;