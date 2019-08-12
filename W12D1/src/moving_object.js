function MovingObject (options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
    this.game = options.game;
};


MovingObject.prototype.draw = function (ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0*Math.PI,2*Math.PI, true);
  ctx.fill();
  // ctx.closePath();

}

MovingObject.prototype.move = function () {
  this.pos = this.game.wrap(this.pos);
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
}

MovingObject.prototype.isCollidedWith = function (otherObject) {
    var x = this.pos[0] 
    var y = this.pos[1] 
    var a = otherObject.pos[0] 
    var b = otherObject.pos[1] 
    var distance = Math.sqrt((x - a) ** 2 + (y - b) ** 2);
    var radiusSum = this.radius + otherObject.radius
    if (radiusSum > distance) {
        return true;
    }
    return false;
}
// Math.sqrt()
// this is math, not JavaScript
// Dist([x_1, y_1], [x_2, y_2]) = sqrt((x_1 - x_2) ** 2 + (y_1 - y_2) ** 2)

module.exports = MovingObject;