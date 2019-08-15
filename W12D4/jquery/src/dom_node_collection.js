class DOMNodeCollection {
  constructor (elementArray) {
    this.elementArray = elementArray;
  }

  //Functions should iterate thru elements and change them OR
  //return a DOMNodeCollection instance
  html(argHTML) {
    if (argHTML === undefined) return this.elementArray[0].innerHTML;
    this.each(ele => {
      ele.innerHTML = argHTML;
    });
  }
  empty () {
    this.each( ele => {
      ele.innerHTML = ""; 
    });
  }
  // each without callback
  // each (argChange) {
  //   for (let i = 0; i < this.elementArray.length; i++) {
  //     this.elementArray[i].innerHTML = argChange;
  //   }
  // }

  //each with callback
  each(callback) {
    this.elementArray.forEach(callback);
  }

  append(childrenTags) {
    for (let i = 0; i < this.elementArray.length; i++) {
      this.elementArray[i].innerHTML += childrenTags;
    }
  }

  attr (key, value) {
    if (value === undefined) return this.elementArray[0].getAttribute(key);
    this.each(ele => ele.setAttribute(key, value));
  }

  addClass (value) {
    this.each( ele => {
      let prevAttribute = ele.getAttribute("class");
      if (prevAttribute === undefined) {
        ele.setAttribute("class", value);
      } else {
        const newAttri = prevAttribute.concat(" ").concat(value);
        ele.setAttribute("class", newAttri);
      }
    });
  }

  removeClass (currentClass) {
    this.each( ele => {
      ele.classList.remove(currentClass);
    });
  }
}

module.exports = DOMNodeCollection;