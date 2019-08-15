class DOMNodeCollection {
  constructor (elementArray) {
    this.elementArray = elementArray;
  }

  //Functions should iterate thru elements and change them OR
  //return a DOMNodeCollection instance
  html(argHTML) {
    if (argHTML === undefined) return this.elementArray[0].innerHTML;
    this.each(argHTML);
  }
  empty () {
    this.each('');
  }
  each (argChange) {
    for (let i = 0; i < this.elementArray.length; i++) {
      this.elementArray[i].innerHTML = argChange;
    }
  }

}

module.exports = DOMNodeCollection;