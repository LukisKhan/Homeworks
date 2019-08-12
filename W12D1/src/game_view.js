var Game = require('./game.js')

function GameView (game, ctx) {
    this.game = game;
    this.ctx = ctx;
}

GameView.prototype.start = function () {
    const that = this;
    setInterval( function(){

      that.game.step();
      that.game.draw(that.ctx);
    }, 50);
    
}

module.exports = GameView;