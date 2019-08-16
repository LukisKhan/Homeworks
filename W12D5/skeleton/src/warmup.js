
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
  let tagString =  'p';
  const myHTMLEle = document.createElement(tagString);
  myHTMLEle.innerHTML = string;
  htmlElement.appendChild(myHTMLEle);
};

htmlGenerator('So much party time!', partyHeader);
// htmlGenerator('I love vanilla DOM manipulation so much!', partyHeader, 'h1');