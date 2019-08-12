var MovingObject = require('./moving_object.js')
var Asteroid = require ('./asteroid.js')
var Game = require('./game.js')
var GameView = require('./game_view.js')

document.addEventListener("DOMContentLoaded", function () {
  console.log("Webpack is working!!!!!!");
  var canvasEl = document.getElementById("game-canvas");
  var ctx = canvasEl.getContext("2d");
  var myGame = new Game(canvasEl.width, canvasEl.height);
  myGame.draw(ctx);
  let newView = new GameView(myGame, ctx)
  newView.start();
});