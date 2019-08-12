var Util = require('./utils.js')

var Asteroid = function () {
    Asteroid.COLOR = "cornflowerblue";
    Asteroid.RADIUS = 10;
    let pos = [200,200];
    let vel = Util.randomVec(5);
    let options = {pos: pos, vel: vel, radius: Asterloid.RADIUS, color:Asteroid.color}
    // Util.inherits(Asteroid, MovingObject)
}