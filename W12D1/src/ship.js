var Util = require('./utils.js')
var MovingObject = require('./moving_object.js')

Util.inherits(Ship, MovingObject)

function Ship() {
  Ship.RADIUS = 10;
  Ship.COLOR = 'salmon';
  this.vel = 0
  this.pos = [250, 250];
  var options = {pos: this.pos, vel: this.vel, color: Ship.COLOR, radius: Ship.RADIUS }
  Ship.prototype.constructor = Ship;
  MovingObject.call(this, options);
}

module.exports = Ship;