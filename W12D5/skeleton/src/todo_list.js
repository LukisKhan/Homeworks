let checkboxArr = [];
let toDoListArr = [];
const formInput = document.getElementsByName("add-todo");
// console.log(window.localStorage.getItem('toDoListStorage'));
if (JSON.parse(window.localStorage.getItem('toDoListStorage')) === null) {
  toDoListArr = [];
} else {
  toDoListArr = JSON.parse(window.localStorage.getItem('toDoListStorage'));
}
// console.log(toDoListArr);


function addLiTodo (event) {
  event.preventDefault();
  let newThingToDoText = formInput[0].value;
  newThingToDoText = newThingToDoText.concat('<input type="checkbox" class="to-do-checkbox">');
  let newToDoLiTag = document.createElement('li');
  newToDoLiTag.setAttribute('class', 'to-do-item');
  newToDoLiTag.innerHTML = newThingToDoText;
  toDoList[0].appendChild(newToDoLiTag);
  formInput[0].value = '';
  ////
  let box = document.getElementsByClassName("to-do-checkbox");
  checkboxArr = Array.from(box);
  //
  toDoListArr.push(newToDoLiTag);
  console.log('array');
  console.log(toDoListArr);
  console.log('array stringify');
  console.log(JSON.stringify(toDoListArr.toString()));
  window.localStorage.setItem('toDoListStorage', JSON.stringify(toDoListArr));
  console.log('localStroage get item');
  window.localStorage.getItem('toDoListStorage');
  // console.log(checkboxArr[0]);
}

const toDoList = document.getElementsByClassName("todos");
const toDoForm = document.getElementsByClassName("add-todo-form");
toDoForm[0].addEventListener("submit", addLiTodo);
// toDoBtn.addEventListener("submit", console.log("btn submit listener"));
// console.log(toDoBtn);
/* <input type="checkbox" checked="checked">*/


function myStringify(domNode) {
  const result = '';
  let parentNode = document.createElement('p');
}