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

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection {\n  constructor (elementArray) {\n    this.elementArray = elementArray;\n  }\n\n  //Functions should iterate thru elements and change them OR\n  //return a DOMNodeCollection instance\n  html(argHTML) {\n    if (argHTML === undefined) return this.elementArray[0].innerHTML;\n    this.each(ele => {\n      ele.innerHTML = argHTML;\n    });\n  }\n  empty () {\n    this.each( ele => {\n      ele.innerHTML = \"\"; \n    });\n  }\n  // each without callback\n  // each (argChange) {\n  //   for (let i = 0; i < this.elementArray.length; i++) {\n  //     this.elementArray[i].innerHTML = argChange;\n  //   }\n  // }\n\n  //each with callback\n  each(callback) {\n    this.elementArray.forEach(callback);\n  }\n\n  append(childrenTags) {\n    for (let i = 0; i < this.elementArray.length; i++) {\n      this.elementArray[i].innerHTML += childrenTags;\n    }\n  }\n\n  attr (key, value) {\n    if (value === undefined) return this.elementArray[0].getAttribute(key);\n    this.each(ele => ele.setAttribute(key, value));\n  }\n\n  addClass (value) {\n    this.each( ele => {\n      let prevAttribute = ele.getAttribute(\"class\");\n      if (prevAttribute === undefined) {\n        ele.setAttribute(\"class\", value);\n      } else {\n        const newAttri = prevAttribute.concat(\" \").concat(value);\n        ele.setAttribute(\"class\", newAttri);\n      }\n    });\n  }\n\n  removeClass (currentClass) {\n    this.each( ele => {\n      ele.classList.remove(currentClass);\n    });\n  }\n}\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// ENTRY FILE\n\n// Require other classes that via require-module.exports\nconst DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./src/dom_node_collection.js\");\n\n\n// Create new global function by keying into window object\nwindow['$l'] = function (selector) {\n  if (typeof selector === 'string') {\n    const selectedNodeList = document.querySelectorAll(selector);\n    const selectedArr = Array.from(selectedNodeList);\n    return new DOMNodeCollection(selectedArr);\n  } else if (typeof selector === HTMLElement) {\n    return new DOMNodeCollection(Array.from(selector));\n  }\n\n}\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });