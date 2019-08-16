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

/***/ "./src/clock.js":
/*!**********************!*\
  !*** ./src/clock.js ***!
  \**********************/
/*! exports provided: clock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clock\", function() { return clock; });\nclass Clock {\n  constructor() {\n    const currentTime = new Date();\n    this.hours = currentTime.getHours();\n    this.minutes = currentTime.getMinutes();\n    this.seconds = currentTime.getSeconds();\n    setInterval(this._tick.bind(this), 1000);\n\n  }\n\n  printTime() {\n    const timeString = [this.hours, this.minutes, this.seconds].join(\":\");\n    return timeString;\n  }\n\n  _tick() {\n    this._incrementSeconds();\n    this.printTime();\n  }\n\n  _incrementSeconds() {\n    this.seconds += 1;\n    if (this.seconds === 60) {\n      this.seconds = 0;\n      this._incrementMinutes();\n    }\n  }\n\n  _incrementMinutes() {\n    this.minutes += 1;\n    if (this.minutes === 60) {\n      this.minutes = 0;\n      this._incrementHours();\n    }\n  }\n\n  _incrementHours() {\n    this.hours = (this.hours + 1) % 24;\n  }\n}\n\nconst clock = new Clock();\n\nconst clockElement = document.getElementById('clock');\nconst timeElement = document.createElement('p');\ntimeElement.innerHTML = clock.printTime();\nsetInterval(() => {\n  timeElement.innerHTML = clock.printTime();\n}, 1000);\nclockElement.appendChild(timeElement);\n\n\n\n\n//# sourceURL=webpack:///./src/clock.js?");

/***/ }),

/***/ "./src/drop_down.js":
/*!**************************!*\
  !*** ./src/drop_down.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nconst dogs = {\n  \"Corgi\": \"https://www.akc.org/dog-breeds/cardigan-welsh-corgi/\",\n  \"Australian Shepherd\": \"https://www.akc.org/dog-breeds/australian-shepherd/\",\n  \"Affenpinscher\": \"https://www.akc.org/dog-breeds/affenpinscher/\",\n  \"American Staffordshire Terrier\": \"https://www.akc.org/dog-breeds/american-staffordshire-terrier/\",\n  \"Tosa\": \"https://www.akc.org/dog-breeds/tosa/\",\n  \"Labrador Retriever\": \"https://www.akc.org/dog-breeds/labrador-retriever/\",\n  \"French Bulldog\": \"https://www.akc.org/dog-breeds/french-bulldog/\" \n};\n\nfunction dogLinkCreator (dogs) {\n  let dogsArr = [];\n\n  let dogNames = Object.keys(dogs);\n  let dogLinks = Object.values(dogs);\n\n  for (let i = 0; i < dogNames.length; i++) {\n    let dogName = dogNames[i];\n    let dogLink = dogLinks[i];\n\n    let dogATag = document.createElement('a');\n    dogATag.href = dogLink;\n    dogATag.innerHTML = dogName;\n\n    let dogLiTag = document.createElement('li');\n    dogLiTag.setAttribute('class', 'dog-link dogClass');\n    dogLiTag.appendChild(dogATag);\n\n    dogsArr.push(dogLiTag);\n  }\n\n  return dogsArr;\n}\n\n\n\nfunction attachDogLinks () {\n  let dogLinks = dogLinkCreator(dogs);\n  let dropDogsEle = document.getElementsByClassName(\"drop-down-dog-list\");\n  // console.log(dropDogsEle);\n  for (let i = 0; i < dogLinks.length; i++) {\n    // debugger;\n    dropDogsEle[0].appendChild(dogLinks[i]);\n    // console.log(dogLinks[i]);\n  }\n}\n\nfunction handleEnter() {\n  let dogLiTags = document.getElementsByClassName('dogClass');\n  Array.from(dogLiTags).forEach(dogLiTag => {\n    dogLiTag.classList.remove('dog-link');\n  });\n  console.log(\"enter\");\n}\n\nfunction handleLeave() {\n  let dogLiTags = document.getElementsByClassName('dogClass');\n  Array.from(dogLiTags).forEach( dogLiTag => {\n    dogLiTag.classList.add('dog-link');\n  });\n  console.log(\"leave\");\n}\n\nconst dogCreator = new dogLinkCreator(dogs);\nattachDogLinks();\nconst navEle = document.querySelector('nav');\nnavEle.addEventListener(\"mouseenter\", handleEnter);\nnavEle.addEventListener(\"mouseleave\", handleLeave);\n\n\n//# sourceURL=webpack:///./src/drop_down.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock */ \"./src/clock.js\");\n/* harmony import */ var _drop_down_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drop_down.js */ \"./src/drop_down.js\");\n/* harmony import */ var _drop_down_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_drop_down_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _todo_list_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo_list.js */ \"./src/todo_list.js\");\n/* harmony import */ var _todo_list_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_todo_list_js__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n// import dogCreator from \"./drop_down.js\";\n// import dogLinkCreator from \"./drop_down.js\";\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/todo_list.js":
/*!**************************!*\
  !*** ./src/todo_list.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let checkboxArr = [];\nlet toDoListArr = [];\nconst formInput = document.getElementsByName(\"add-todo\");\n// console.log(window.localStorage.getItem('toDoListStorage'));\nif (JSON.parse(window.localStorage.getItem('toDoListStorage')) === null) {\n  toDoListArr = [];\n} else {\n  toDoListArr = JSON.parse(window.localStorage.getItem('toDoListStorage'));\n}\n// console.log(toDoListArr);\n\n\nfunction addLiTodo (event) {\n  event.preventDefault();\n  let newThingToDoText = formInput[0].value;\n  newThingToDoText = newThingToDoText.concat('<input type=\"checkbox\" class=\"to-do-checkbox\">');\n  let newToDoLiTag = document.createElement('li');\n  newToDoLiTag.setAttribute('class', 'to-do-item');\n  newToDoLiTag.innerHTML = newThingToDoText;\n  toDoList[0].appendChild(newToDoLiTag);\n  formInput[0].value = '';\n  ////\n  let box = document.getElementsByClassName(\"to-do-checkbox\");\n  checkboxArr = Array.from(box);\n  //\n  toDoListArr.push(newToDoLiTag);\n  console.log('array');\n  console.log(toDoListArr);\n  console.log('array stringify');\n  console.log(JSON.stringify(toDoListArr.toString()));\n  window.localStorage.setItem('toDoListStorage', JSON.stringify(toDoListArr));\n  console.log('localStroage get item');\n  window.localStorage.getItem('toDoListStorage');\n  // console.log(checkboxArr[0]);\n}\n\nconst toDoList = document.getElementsByClassName(\"todos\");\nconst toDoForm = document.getElementsByClassName(\"add-todo-form\");\ntoDoForm[0].addEventListener(\"submit\", addLiTodo);\n// toDoBtn.addEventListener(\"submit\", console.log(\"btn submit listener\"));\n// console.log(toDoBtn);\n/* <input type=\"checkbox\" checked=\"checked\">*/\n\n\nfunction myStringify(domNode) {\n  const result = '';\n  let parentNode = document.createElement('p');\n}\n\n//# sourceURL=webpack:///./src/todo_list.js?");

/***/ }),

/***/ "./src/warmup.js":
/*!***********************!*\
  !*** ./src/warmup.js ***!
  \***********************/
/*! exports provided: htmlGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"htmlGenerator\", function() { return htmlGenerator; });\n\nconst partyHeader = document.getElementById('party');\n\nconst htmlGenerator = (string, htmlElement) => {\n  let tagString =  'p';\n  const myHTMLEle = document.createElement(tagString);\n  myHTMLEle.innerHTML = string;\n  htmlElement.appendChild(myHTMLEle);\n};\n\nhtmlGenerator('So much party time!', partyHeader);\n// htmlGenerator('I love vanilla DOM manipulation so much!', partyHeader, 'h1');\n\n//# sourceURL=webpack:///./src/warmup.js?");

/***/ })

/******/ });