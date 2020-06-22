var addTodo = document.getElementById("addTodo");
var todoInput = document.getElementById("todoInput");
var todolist = document.getElementById("todolist");
var margen = document.getElementById("margen");
var today = new Date();
margen.innerHTML = today;
addTodo.addEventListener("click", function () {
  var todoText = todoInput.value;
  todoInput.value = "";
  var todo = document.createElement("DIV");
  todo.classList.add("todo");
  todo.innerHTML = todoText;

  var removeDiv = document.createElement("BUTTON");
  removeDiv.classList.add("remoe");
  removeDiv.innerHTML = "<p>تم</p>";
  removeDiv.addEventListener("click", function () {
    todo.parentNode.removeChild(todo);
  });

  todo.append(removeDiv);
  todolist.append(todo);

  /*
  var todo = document.createElement("DIV");
  todo.classList.add("todo");
  todolist = document.createElement(todoText);
  */
});
