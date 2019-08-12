var Asteroid = require ('./asteroid.js')
var Ship = require('./ship.js')

var asteroids = [];

function Game (dim_x, dim_y) {
    this.DIM_X = dim_x;
    this.DIM_Y = dim_y;
    this.addAsteroids();
    this.ship = new Ship ();
}

Game.NUM_ASTEROIDS = 4;

Game.prototype.addAsteroids = function () {
    for (i = 0; i < Game.NUM_ASTEROIDS; i++) {
        var newAster = new Asteroid(this.randomPosition(), this);
        asteroids.push(newAster);
    }   
};

Game.prototype.randomPosition = function () {
  var posX = Math.floor((Math.random() * this.DIM_X ) + 0)
  var posY = Math.floor((Math.random() * this.DIM_Y ) + 0)
  return [posX, posY];
};

Game.prototype.draw = function (ctx) {
  ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
  asteroids.forEach(el => { 
    el.draw(ctx); 
  });
}
Game.prototype.moveObjects = function () {
    asteroids.forEach(el => 
       { el.move(); }
    );
}

Game.prototype.wrap = function (pos) {
  let x = pos[0];
  let y = pos[1];
  if (pos[0] >= this.DIM_X) x = pos[0] - this.DIM_X;
  if (pos[1] >= this.DIM_Y) y = pos[1] - this.DIM_Y;
  if (pos[0] < 0) x = this.DIM_X;
  if (pos[1] < 0) y = this.DIM_Y;
  return [x, y];
}
Game.prototype.checkCollisions = function () {
  for (let i = 0; i < asteroids.length; i++) {
    for (let j = 0; j < asteroids.length; j++) {
      if (i !== j) {
        if (asteroids[i].isCollidedWith(asteroids[j])) {
          this.remove(asteroids[i]);
          this.remove(asteroids[j]);
        }
      }
    }
  }
}

Game.prototype.step = function () {
  this.moveObjects();
  this.checkCollisions();
}

Game.prototype.remove = function (index1, index2) {
  let newAsteroids = [];
  for ( let i = 0; i < asteroids.length; i++) {
    if (i !== index1 && i !== index2) {
      newAsteroids.push(asteroids[i]);
      Game.NUM_ASTEROIDS -= 2;
      // console.log(newAsteroids);
    }
  }
  asteroids = newAsteroids;
}

module.exports = Game;