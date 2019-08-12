var inherits = function(parent, child) {
  const Surrogate = function(){};
  Surrogate.prototype = parent.prototype
  child.prototype = new Surrogate();
  child.prototype.constructor = child;
}

module.exports = inherit;