var MovingObject = require('./moving_object.js')

document.addEventListener("DOMContentLoaded", function () {
  console.log("Webpack is working!!!!!!");
  var mo = new MovingObject(
    { pos: [30, 30], vel: [10, 10], radius: 5, color: "#00FF00" }
  );
  var canvasEl = document.getElementById("game-canvas");
  // pass into main game constructor
  console.log(canvasEl);
  var ctx = canvasEl.getContext("2d");
  mo.draw(ctx);
  mo.move();
  mo.move(); 
  mo.draw(ctx);
});