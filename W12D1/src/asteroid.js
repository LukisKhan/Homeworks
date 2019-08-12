var Util = require('./utils.js')
var MovingObject = require ('./moving_object.js')

Util.inherits(Asteroid, MovingObject)

function Asteroid (pos, game) {
    Asteroid.COLOR = 'cornflowerblue';
    Asteroid.RADIUS = 10;
    var vel = Util.randomVec(5);
    let options = {pos: pos, vel: vel, radius: Asteroid.RADIUS, color: Asteroid.COLOR, game: game};
    Asteroid.prototype.constructor = Asteroid;
    MovingObject.call(this, options);
}

module.exports = Asteroid;