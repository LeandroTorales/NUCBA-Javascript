const input = document.querySelector("#agregar__tarea");
const addForm = document.querySelector(".form");
const tasksList = document.querySelector(".tasks__list");
const btnBorrarTodo = document.querySelector(".button__borrarTareas");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
const guardarEnLS = (tasksList) => localStorage.setItem("tasks", JSON.stringify(tasksList));

const crearLista = (tarea) => {
  `<li>${tarea.name}
        <svg data-id="${tarea.taskId}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
                d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/>
        </svg>
    </li>
    `;
  console.log(tarea.name);
};

const renderizarListaTareas = (toDoList) => {
  tasksList.innerHTML = toDoList.map((tarea) => crearLista(tarea));
  console.log("innerHTML:", tasksList.innerHTML);
};

const ocultarBorrarTodo = (tasksList) => {
  if (!tasksList.length) {
    btnBorrarTodo.classList.add("hidden");
    return;
  }
  btnBorrarTodo.classList.remove("hidden");
};

console.log("btnBorrarTodo:", btnBorrarTodo.classList);

const añadirTarea = (e) => {
  e.preventDefault();
  const taskName = input.value.trim();
  if (!taskName.length) {
    alert("Ingresa una tarea");
    return;
  } else if (tasks.some((task) => task.name.toLowerCase() == taskName.toLowerCase())) {
    alert("Ya existe esa tarea");
    return;
  }
  tasks = [...tasks, { name: taskName, taskId: tasks.length + 1 }];
  input.value = "";

  renderizarListaTareas(tasks);
  guardarEnLS(tasks);
  ocultarBorrarTodo(tasks);
  console.log("tasks:", tasks);
};

const removerTarea = (e) => {
  if (!e.target.classList.contains(".delete-task")) return;
  const filterId = Number(e.target.dataset.id);
  tasks = tasks.filter((task) => task.taskId !== filterId);
  renderizarListaTareas(tasks);
  guardarEnLS(tasks);
  ocultarBorrarTodo(tasks);
};

const removerTodo = () => {
  tasks = [];
  input.value = "";
  renderizarListaTareas(tasks);
  guardarEnLS(tasks);
  ocultarBorrarTodo(tasks);
};

const inicializar = () => {
  renderizarListaTareas(tasks);
  addForm.addEventListener("submit", añadirTarea);
  tasksList.addEventListener("click", removerTarea);
  btnBorrarTodo.addEventListener("click", removerTodo);
  ocultarBorrarTodo(tasks);
};

inicializar();
