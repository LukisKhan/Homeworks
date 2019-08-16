
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

function dogLinkCreator (dogs) {
  let dogsArr = [];

  let dogNames = Object.keys(dogs);
  let dogLinks = Object.values(dogs);

  for (let i = 0; i < dogNames.length; i++) {
    let dogName = dogNames[i];
    let dogLink = dogLinks[i];

    let dogATag = document.createElement('a');
    dogATag.href = dogLink;
    dogATag.innerHTML = dogName;

    let dogLiTag = document.createElement('li');
    dogLiTag.setAttribute('class', 'dog-link dogClass');
    dogLiTag.appendChild(dogATag);

    dogsArr.push(dogLiTag);
  }

  return dogsArr;
}



function attachDogLinks () {
  let dogLinks = dogLinkCreator(dogs);
  let dropDogsEle = document.getElementsByClassName("drop-down-dog-list");
  // console.log(dropDogsEle);
  for (let i = 0; i < dogLinks.length; i++) {
    // debugger;
    dropDogsEle[0].appendChild(dogLinks[i]);
    // console.log(dogLinks[i]);
  }
}

function handleEnter() {
  let dogLiTags = document.getElementsByClassName('dogClass');
  Array.from(dogLiTags).forEach(dogLiTag => {
    dogLiTag.classList.remove('dog-link');
  });
  console.log("enter");
}

function handleLeave() {
  let dogLiTags = document.getElementsByClassName('dogClass');
  Array.from(dogLiTags).forEach( dogLiTag => {
    dogLiTag.classList.add('dog-link');
  });
  console.log("leave");
}

const dogCreator = new dogLinkCreator(dogs);
attachDogLinks();
const navEle = document.querySelector('nav');
navEle.addEventListener("mouseenter", handleEnter);
navEle.addEventListener("mouseleave", handleLeave);
