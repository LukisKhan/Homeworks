// ENTRY FILE

// Require other classes that via require-module.exports
const DOMNodeCollection = require('./dom_node_collection.js');


// Create new global function by keying into window object
window['$l'] = function (selector) {
  if (typeof selector === 'string') {
    const selectedNodeList = document.querySelectorAll(selector);
    const selectedArr = Array.from(selectedNodeList);
    return new DOMNodeCollection(selectedArr);
  } else if (typeof selector === HTMLElement) {
    return new DOMNodeCollection(Array.from(selector));
  }

}
