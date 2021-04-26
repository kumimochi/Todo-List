const todoList = document.querySelector("ul");
let input = document.querySelector("#input-field");
let addTodo = document.querySelector("#input-btn");

addTodo.addEventListener("click", () => {
  let lists = [];
  const newTodo = document.createElement("li");
  todoList.appendChild(newTodo);
  newTodo.innerHTML =
    input.value + '<span id="delete"><i class="fas fa-times"></i></span> ';
  input.value = "";
  lists.push(newTodo);
  newTodo.addEventListener("click", () => {
    newTodo.classList.toggle("completed");
  });
});
