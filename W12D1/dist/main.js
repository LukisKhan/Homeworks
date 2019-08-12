/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\")\nvar MovingObject = __webpack_require__ (/*! ./moving_object.js */ \"./src/moving_object.js\")\n\nUtil.inherits(Asteroid, MovingObject)\n\nfunction Asteroid (pos, game) {\n    Asteroid.COLOR = 'cornflowerblue';\n    Asteroid.RADIUS = 10;\n    var vel = Util.randomVec(5);\n    let options = {pos: pos, vel: vel, radius: Asteroid.RADIUS, color: Asteroid.COLOR, game: game};\n    Asteroid.prototype.constructor = Asteroid;\n    MovingObject.call(this, options);\n}\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Asteroid = __webpack_require__ (/*! ./asteroid.js */ \"./src/asteroid.js\")\nvar Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\")\n\nvar asteroids = [];\n\nfunction Game (dim_x, dim_y) {\n    this.DIM_X = dim_x;\n    this.DIM_Y = dim_y;\n    this.addAsteroids();\n    this.ship = new Ship ();\n}\n\nGame.NUM_ASTEROIDS = 4;\n\nGame.prototype.addAsteroids = function () {\n    for (i = 0; i < Game.NUM_ASTEROIDS; i++) {\n        var newAster = new Asteroid(this.randomPosition(), this);\n        asteroids.push(newAster);\n    }   \n};\n\nGame.prototype.randomPosition = function () {\n  var posX = Math.floor((Math.random() * this.DIM_X ) + 0)\n  var posY = Math.floor((Math.random() * this.DIM_Y ) + 0)\n  return [posX, posY];\n};\n\nGame.prototype.draw = function (ctx) {\n  ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);\n  asteroids.forEach(el => { \n    el.draw(ctx); \n  });\n}\nGame.prototype.moveObjects = function () {\n    asteroids.forEach(el => \n       { el.move(); }\n    );\n}\n\nGame.prototype.wrap = function (pos) {\n  let x = pos[0];\n  let y = pos[1];\n  if (pos[0] >= this.DIM_X) x = pos[0] - this.DIM_X;\n  if (pos[1] >= this.DIM_Y) y = pos[1] - this.DIM_Y;\n  if (pos[0] < 0) x = this.DIM_X;\n  if (pos[1] < 0) y = this.DIM_Y;\n  return [x, y];\n}\nGame.prototype.checkCollisions = function () {\n  for (let i = 0; i < asteroids.length; i++) {\n    for (let j = 0; j < asteroids.length; j++) {\n      if (i !== j) {\n        if (asteroids[i].isCollidedWith(asteroids[j])) {\n          this.remove(asteroids[i]);\n          this.remove(asteroids[j]);\n        }\n      }\n    }\n  }\n}\n\nGame.prototype.step = function () {\n  this.moveObjects();\n  this.checkCollisions();\n}\n\nGame.prototype.remove = function (index1, index2) {\n  let newAsteroids = [];\n  for ( let i = 0; i < asteroids.length; i++) {\n    if (i !== index1 && i !== index2) {\n      newAsteroids.push(asteroids[i]);\n      Game.NUM_ASTEROIDS -= 2;\n      // console.log(newAsteroids);\n    }\n  }\n  asteroids = newAsteroids;\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\")\n\nfunction GameView (game, ctx) {\n    this.game = game;\n    this.ctx = ctx;\n}\n\nGameView.prototype.start = function () {\n    const that = this;\n    setInterval( function(){\n\n      that.game.step();\n      that.game.draw(that.ctx);\n    }, 50);\n    \n}\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\")\nvar Asteroid = __webpack_require__ (/*! ./asteroid.js */ \"./src/asteroid.js\")\nvar Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\")\nvar GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\")\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  console.log(\"Webpack is working!!!!!!\");\n  var canvasEl = document.getElementById(\"game-canvas\");\n  var ctx = canvasEl.getContext(\"2d\");\n  var myGame = new Game(canvasEl.width, canvasEl.height);\n  myGame.draw(ctx);\n  let newView = new GameView(myGame, ctx)\n  newView.start();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function MovingObject (options) {\n    this.pos = options.pos;\n    this.vel = options.vel;\n    this.radius = options.radius;\n    this.color = options.color;\n    this.game = options.game;\n};\n\n\nMovingObject.prototype.draw = function (ctx) {\n  ctx.fillStyle = this.color;\n  ctx.beginPath();\n  ctx.arc(this.pos[0], this.pos[1], this.radius, 0*Math.PI,2*Math.PI, true);\n  ctx.fill();\n  // ctx.closePath();\n\n}\n\nMovingObject.prototype.move = function () {\n  this.pos = this.game.wrap(this.pos);\n  this.pos[0] += this.vel[0];\n  this.pos[1] += this.vel[1];\n}\n\nMovingObject.prototype.isCollidedWith = function (otherObject) {\n    var x = this.pos[0] \n    var y = this.pos[1] \n    var a = otherObject.pos[0] \n    var b = otherObject.pos[1] \n    var distance = Math.sqrt((x - a) ** 2 + (y - b) ** 2);\n    var radiusSum = this.radius + otherObject.radius\n    if (radiusSum > distance) {\n        return true;\n    }\n    return false;\n}\n// Math.sqrt()\n// this is math, not JavaScript\n// Dist([x_1, y_1], [x_2, y_2]) = sqrt((x_1 - x_2) ** 2 + (y_1 - y_2) ** 2)\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\")\nvar MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\")\n\nUtil.inherits(Ship, MovingObject)\n\nfunction Ship() {\n  Ship.RADIUS = 10;\n  Ship.COLOR = 'salmon';\n  this.vel = 0\n  this.pos = [250, 250];\n  var options = {pos: this.pos, vel: this.vel, color: Ship.COLOR, radius: Ship.RADIUS }\n  Ship.prototype.constructor = Ship;\n  MovingObject.call(this, options);\n}\n\nmodule.exports = Ship;\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n  inherits(childClass, parentClass) {\n    function Surrogate() {}\n    Surrogate.prototype = parentClass.prototype;\n    childClass.prototype = new Surrogate();\n    childClass.prototype.constructor = childClass;\n  },\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n  // Scale the length of a vector by the given amount.\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n}\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });