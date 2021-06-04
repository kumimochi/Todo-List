const input = document.querySelector('#input-field');
const submitBtn = document.querySelector('#input-btn');
const todoList = document.querySelector('.todo-list');

input.addEventListener('submit', addTodo);
submitBtn.addEventListener('click', addTodo);

function addTodo(event) {
  event.preventDefault();
  if (input.value === '') {
    return;
  }
  //create the todo li
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todoDiv');
  const newTodo = document.createElement('li');
  newTodo.innerText = input.value;
  newTodo.classList.add('todo');
  todoDiv.appendChild(newTodo);
  console.log(todoDiv);
  todoList.appendChild(todoDiv);
  input.value = '';

  //create delete button
  const delBtn = document.createElement('button');
  delBtn.classList.add('delete');
  delBtn.innerHTML = '<i class="far fa-trash-alt"></i>';
  todoDiv.appendChild(delBtn);

  //add strikethrough text to completed tasks
  newTodo.onclick = () => {
    newTodo.classList.toggle('completed');
  };

  delBtn.addEventListener('click', (e) => {
    todoDiv.remove();
  });
}
