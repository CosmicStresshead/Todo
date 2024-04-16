addButton = document.querySelector("#addTodo");
todoList = document.querySelector("#todoList");
editTodo = document.querySelector("#editTodo");
firstTodo = document.querySelector("#firstTodo");

// functions

function onInput() {
  addButton.disabled = editTodo.value == "";
}

function checkEnter(event) {
  if (event.keyCode == 13) {
    addButton.click();
  }
}

function addTodo() {
  console.log("Working...");
  let newTodo = document.createElement("li");
  newTodo.setAttribute('class', 'todo-item');
  newTodo.innerText = editTodo.value;
  todoList.appendChild(newTodo);
  editTodo.value = "";
}

// event listeners
addButton.addEventListener('click', addTodo);
editTodo.addEventListener('input', onInput);
editTodo.addEventListener('keypress', checkEnter);